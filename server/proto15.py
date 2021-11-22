import sys
import os
import cairo
import PIL
import boto3
import mimetypes
from PIL import Image
import numpy
import logging
from random import randint, choice, sample
from math import pi, sqrt, ceil
from io import BytesIO

# Notes

# Pattern 1 = Solid, 2 = Radial Gradient, 3 = Linear Gradient

# Introspection Ecstacy, Joy, Contentment, Sadness, Grief
# Temper - Bliss, Calmness, Annoyance, Anger, Rage
# Acceptance - Proud, Satisfied, Ambivalent, Embarrassed, Humiliated
# Sensitivity - Enthusiasm, Eagerness, Anxiety, Fear, Terror
# Sky Conditions - Sunny-yellows, Partly Cloudy-soft yellows, Mostly Cloudy-white, Cloudy-light grey, Stormy-mid grey
# Temperature - Hot-orange, Warm-yellow, Cool-soft green, Crisp-browns, Cold-blue
# People - Family, Friends, Acquantices, Strangers, Adversaries
# Place - Community, City, Region, Country, Foreign
# Sound Strength - Silent, Faint, Moderate, Loud, Deafening
# Sound Type - Monotone, Soothing, Melodic, Lively, Chaotic
# Smell Strength - Scentless, Subtle, Scented, Aromatic, Potent
# Smell Type - Fragrant, Pleasant, Neutral, Stale, Pungent
# Taste Strength - Bland, Mild, Seasoned, Flavorful, Intense
# Taste Type - Mouthwatering, Pleasant, Tasteful, Disagreeable, Repulsive
# Sensation - Thrill, Pleasure, Comfort, Suffering, Agony
# Exertion - Sedentary, Light, Active, Vigorous, Strenuous

# Functions that the main program calls

def decrease(number):
  n = (50 + (50 - number)) + 1
  return n

def spectrum(number):
  if number < 51:
    n = ((50 + (50 - number)) + 1) - number + 1
  else:
    n = number - ((50 + (50 - number)) + 1) + 1
  return n

def add_image(surface):
  aisrf = cairo.ImageSurface(cairo.FORMAT_ARGB32, 500, 500)
  aictx = cairo.Context(aisrf)
  aictx.set_source_surface(surface,0.0,0.0)
  aictx.paint()
  a = Image.frombuffer("RGBA", (aisrf.get_width(),aisrf.get_height()), aisrf.get_data(), "raw", "RGBA", 0, 1)
  return a

def coordrange(c1, c2, offset, rnd):
  offsethalf = offset / 2
  if rnd == 1:
    temp = c1 + offsethalf
    c = int(temp)/1000
  elif rnd in (2,5,8):
    temp1 = int(c1 + (offsethalf * .2))
    temp2 = int(c2 - (offsethalf * .2))
    c = randint(temp1, temp2)/1000
  elif rnd in (3,6,9):
    temp1 = int(c1 + (offsethalf * .1))
    temp2 = int(c2 - (offsethalf * .1))
    c = randint(temp1, temp2)/1000
  else:
    temp1 = c1
    temp2 = c2
    c = randint(temp1, temp2)/1000
  return c

def color(x1, x2):
  y = randint(x1, x2)/1000
  return y

def grad(r1, g1, b1, r2, g2, b2, op, z, cr, cr1):
  if z == 1:
    gd = cairo.SolidPattern(r1, g1, b1, op)
    gd1 = cairo.SolidPattern(b1, g1, r1, op)
  elif z == 2:
    x1 = randint(100, 900)/1000
    y1 = randint(100, 900)/1000
    gd = cairo.RadialGradient(x1, y1, .2, x1, y1, .6)
    gd.add_color_stop_rgba(0.2, r1, g1, b1, op)
    gd.add_color_stop_rgba(0.9, r2, g2, b2, op)
    gd1 = cairo.RadialGradient(x1, y1, .2, x1, y1, .6)
    gd1.add_color_stop_rgba(0.2, b1, g1, r1, op)
    gd1.add_color_stop_rgba(0.9, b2, g2, r2, op)
  else:
    axis = randint(0,1)
    if axis == 0:
      x1 = 0
      x2 = 1
      y1 = randint(50, 950)/1000
      y2 = y1
    else:
      x1 = randint(50, 950)/1000
      x2 = x1
      y1 = 0
      y2 = 1
    gd = cairo.LinearGradient(x1, y1, x2, y2)
    gd.add_color_stop_rgba(0.4, r1, g1, b1, op)
    gd.add_color_stop_rgba(0.8, r2, g2, b2, op)
    gd1 = cairo.LinearGradient(x1, y1, x2, y2)
    gd1.add_color_stop_rgba(0.4, b1, g1, r1, op)
    gd1.add_color_stop_rgba(0.8, b2, g2, r2, op)
  cr.set_source(gd)
  cr.fill()
  cr1.set_source(gd1)
  cr1.fill()

def grid(iterations, width, height, random, gridsize):
  smallx1 = []
  smallx2 = []
  smally1 = []
  smally2 = []
  randomness = int(ceil(random/10))
  if randomness in (1,2,3,4):
    sqiterations = 10
  elif randomness in (8,9,10):
    sqiterations = 1
  elif randomness in (5,6,7):
    sqiterations = 4
  else:
    sqiterations = 2
  smallxoffset = int(width/sqiterations*2)
  smallyoffset = int(height/sqiterations*2)
  smalltempx1 = 0
  smalltempy1 = 0
  smalltempx2 = smallxoffset
  smalltempy2 = smallyoffset
  imultip = 1
  jmultip = 1

  for i in range(0, sqiterations):
    for j in range(0, sqiterations):
      smallx1.append(smalltempx1)
      smally1.append(smalltempy1)
      smallx2.append(smalltempx2)
      smally2.append(smalltempy2)
      if (smalltempx2 + smallxoffset) > width * 2 and jmultip == 1:
        smalltempx1 = width * 2 - smallxoffset
        smalltempx2 = width * 2
        jmultip = -1
      elif (smalltempx1 - smallxoffset) < 0 and jmultip == -1:
        smalltempx1 = 0
        smalltempx2 = smallxoffset
        jmultip = 1
      else:
        smalltempx1 = smalltempx1 + smallxoffset * jmultip
        smalltempx2 = smalltempx2 + smallxoffset * jmultip
    if (smalltempy2 + smallyoffset) > height * 2 and imultip == 1:
      smalltempy1 = height * 2 - smallyoffset
      smalltempy2 = height * 2
      imultip = -1
    elif (smalltempy1 - smallyoffset) < 0 and imultip == -1:
      smalltempy1 = 0
      smalltempy2 = smallyoffset
      imultip = 1
    else:
      smalltempy1 = smalltempy1 + smallyoffset * imultip
      smalltempy2 = smalltempy2 + smallyoffset * imultip
    x1 = smallx1
    x2 = smallx2
    y1 = smally1
    y2 = smally2
    xoffset = smallxoffset
    yoffset = smallyoffset

  return x1, x2, y1, y2, xoffset, yoffset

# Variables and Setup

images = []
boldness = []
width = 500
height = 500
iterations = 100
randomness = 1
argintro = int(sys.argv[1])    #Emotion Introspection
argtemper = int(sys.argv[2])   #Emotion Temper
argaccept = int(sys.argv[3])   #Emotion Acceptance
argsens = int(sys.argv[4])     #Emotion Sensitivity
argsky = int(sys.argv[5])      #Weather Sky Conditions
argtemp = int(sys.argv[6])    #Weather Temperature
argpeople = int(sys.argv[7])  #People
argplace = int(sys.argv[8])   #Place
argsndstr = int(sys.argv[9])  #Strength of Sound
argsndtyp = int(sys.argv[10])  #Type of Sound
argsmlstr = int(sys.argv[11])  #Strength of Smell
argsmltyp = int(sys.argv[12])  #Type of Smell
argtststr = int(sys.argv[13])  #Strength of Taste
argtsttyp = int(sys.argv[14])  #Type of Taste
argsensat = int(sys.argv[15])  #Physical Sensation
argexer = int(sys.argv[16])    #Physical Exertion

if len(sys.argv) == 19:
  argprototype = sys.argv[17]  #Testing Variable for Prototype Number
  argscenario = sys.argv[18]  #Testing Variable for Test Case Scenario
  imgpre = argprototype + '-' + argscenario
else:
  imgpre = randint(1, 1000000)

# File Name Setup

imgtxt = '{}-test.'
imgname = imgtxt.format(imgpre)
gifname = imgname + 'gif'
svgname = imgname + 'svg'
pngname = imgname + 'png'
logname = imgname + 'log'

logging.basicConfig(filename=logname, filemode='w', level=logging.INFO)
logging.info('Emotion Introspection - %s', argintro)
logging.info('Emotion Temper - %s', argtemper)
logging.info('Emotion Acceptance - %s', argaccept)
logging.info('Emotion Sensitivity - %s', argsens)
logging.info('Weather Sky Conditions - %s', argsky)
logging.info('Weather Temperature - %s', argtemp)
logging.info('People - %s', argpeople)
logging.info('Place - %s', argplace)
logging.info('Strength of Sound - %s', argsndstr)
logging.info('Type of Sound - %s', argsndtyp)
logging.info('Strength of Smell - %s', argsmlstr)
logging.info('Type of Smell - %s', argsmltyp)
logging.info('Strength of Taste - %s', argtststr)
logging.info('Type of Taste - %s', argtsttyp)
logging.info('Physical Sensation - %s', argsensat)
logging.info('Physical Exertion - %s', argexer)

circquant = int((spectrum(argintro) + 11) * 0.9)
circrand = spectrum(argaccept)
circsize = int((spectrum(argpeople) + 11) * 0.9)
circopaq = spectrum(argsndtyp)
circcol1 = argtemper

squigquant = int((spectrum(argintro) + 11) * 0.9)
squigrand = argtststr
squigsize = int((spectrum(argpeople) + 11) * 0.9)
squigopaq = spectrum(argtsttyp)
squigcol1 = argplace

triquant = int((spectrum(argintro) + 11) * 0.9)
trirand = argsmlstr
trisize = int((spectrum(argpeople) + 11) * 0.9)
triopaq = spectrum(argsmltyp)
tricol1 = argsens

linequant = int((spectrum(argintro) + 11) * 0.9)
linerand = argsndstr
linesize = int((spectrum(argpeople) + 11) * 0.9)
lineopaq = argexer
linecol1 = argsensat

backcol2 = argsky
backcol1 = argtemp

# Establish virtual drawing surfaces

srf = cairo.RecordingSurface(cairo.Content(1), cairo.Rectangle(0.0,0.0,width,height))
ctx = cairo.Context(srf)
ctx.scale(width, height)
srf1 = cairo.RecordingSurface(cairo.Content(1), cairo.Rectangle(0.0,0.0,width,height))
ctx1 = cairo.Context(srf1)
ctx1.scale(width, height)
srf2 = cairo.RecordingSurface(cairo.Content(1), cairo.Rectangle(0.0,0.0,width,height))
ctx2 = cairo.Context(srf1)
ctx2.scale(width, height)

# Main Program

# Background - Weather and Temperature

# Weather 1-5 Sunny-yellows, Partly Cloudy-soft yellows, Mostly Cloudy-white, Cloudy-light grey, Stormy-mid grey
# Temperature 1-5 Hot-orange, Warm-yellow, Cool-soft green, Crisp-browns, Cold-blue

copaque = 0
opaqoff = 1 / iterations
ctx1.set_source_rgba(1, 1, 1, 1)
ctx1.rectangle(0,0,width,height)
ctx1.fill()
aim = add_image(srf1)
images.append(aim)
col1 = int(ceil(backcol1/20))
col2 = int(ceil(backcol2/20))

pattern = randint(2,3)

if col1 == 1 and col2 == 1:
  cred1 = color(950, 1000)
  cgreen1 = color(420, 520)
  cblue1 = color(180, 280)
elif col1 == 1 and col2 == 2:
  cred1 = color(950, 1000)
  cgreen1 = color(580, 680)
  cblue1 = color(360, 460)
elif col1 == 1 and col2 == 3:
  cred1 = color(950, 1000)
  cgreen1 = color(700, 800)
  cblue1 = color(500, 600)
elif col1 == 1 and col2 == 4:
  cred1 = color(890, 990)
  cgreen1 = color(810, 910)
  cblue1 = color(730, 830)
elif col1 == 1 and col2 == 5:
  cred1 = color(350, 450)
  cgreen1 = color(350, 450)
  cblue1 = color(350, 450)
elif col1 == 2 and col2 == 1:
  cred1 = color(950, 1000)
  cgreen1 = color(360, 460)
  cblue1 = color(650, 750)
elif col1 == 2 and col2 == 2:
  cred1 = color(950, 1000)
  cgreen1 = color(500, 600)
  cblue1 = color(790, 890)
elif col1 == 2 and col2 == 3:
  cred1 = color(950, 1000)
  cgreen1 = color(610, 710)
  cblue1 = color(890, 990)
elif col1 == 2 and col2 == 4:
  cred1 = color(810, 910)
  cgreen1 = color(730, 830)
  cblue1 = color(730, 830)
elif col1 == 2 and col2 == 5:
  cred1 = color(460, 560)
  cgreen1 = color(460, 560)
  cblue1 = color(460, 460)
elif col1 == 3 and col2 == 1:
  cred1 = color(950, 1000)
  cgreen1 = color(850, 950)
  cblue1 = color(350, 450)
elif col1 == 3 and col2 == 2:
  cred1 = color(950, 1000)
  cgreen1 = color(950, 1000)
  cblue1 = color(540, 640)
elif col1 == 3 and col2 == 3:
  cred1 = color(950, 1000)
  cgreen1 = color(950, 1000)
  cblue1 = color(730, 830)
elif col1 == 3 and col2 == 4:
  cred1 = color(810, 910)
  cgreen1 = color(810, 910)
  cblue1 = color(500, 600)
elif col1 == 3 and col2 == 5:
  cred1 = color(580, 680)
  cgreen1 = color(580, 680)
  cblue1 = color(580, 680)
elif col1 == 4 and col2 == 1:
  cred1 = color(350, 450)
  cgreen1 = color(950, 1000)
  cblue1 = color(350, 450)
elif col1 == 4 and col2 == 2:
  cred1 = color(540, 640)
  cgreen1 = color(950, 1000)
  cblue1 = color(540, 640)
elif col1 == 4 and col2 == 3:
  cred1 = color(730, 830)
  cgreen1 = color(950, 1000)
  cblue1 = color(730, 830)
elif col1 == 4 and col2 == 4:
  cred1 = color(650, 750)
  cgreen1 = color(810, 910)
  cblue1 = color(650, 750)
elif col1 == 4 and col2 == 5:
  cred1 = color(700, 800)
  cgreen1 = color(700, 800)
  cblue1 = color(700, 800)
elif col1 == 5 and col2 == 1:
  cred1 = color(350, 450)
  cgreen1 = color(950, 1000)
  cblue1 = color(950, 1000)
elif col1 == 5 and col2 == 2:
  cred1 = color(540, 640)
  cgreen1 = color(950, 1000)
  cblue1 = color(950, 1000)
elif col1 == 5 and col2 == 3:
  cred1 = color(730, 830)
  cgreen1 = color(950, 1000)
  cblue1 = color(950, 1000)
elif col1 == 5 and col2 == 4:
  cred1 = color(650, 750)
  cgreen1 = color(730, 830)
  cblue1 = color(810, 910)
elif col1 == 5 and col2 == 5:
  cred1 = color(810, 910)
  cgreen1 = color(810, 910)
  cblue1 = color(810, 910)
else:
  cred1 = color(0, 50)
  cgreen1 = color(0, 50)
  cblue1 = color(0, 50)

ctx.rectangle(0,0,width,height)
ctx1.rectangle(0,0,width,height)

#gradient = grad(cred1, cgreen1, cblue1, cred2, cgreen2, cblue2, 1, pattern, ctx, ctx1)
ctx.set_source_rgba(cred1, cgreen1, cblue1, 1)
ctx.fill()
ctx1.set_source_rgba(cblue1, cgreen1, cred1, 1)
ctx1.fill()

aim = add_image(srf1)
images.append(aim)

# Circles

#circquant = spectrum(argsens)
#circrand = spectrum(argaccept)
#circsize = spectrum(argaccept)
#circcol1 = argsensat

# Temper - Bliss, Calmness, Annoyance, Anger, Rage
# White, Light Sky Blue, Light Purple, Dark Rose, Dark Red

circgrid = grid(iterations, width, height, circrand, 1)
circx1 = circgrid[0]
circx2 = circgrid[1]
circy1 = circgrid[2]
circy2 = circgrid[3]
circxoffset = circgrid[4]
circyoffset = circgrid[5]
circrandint = int(ceil(circrand/10))
col1 = int(ceil(circcol1/20))
copaque = (circopaq + 42) * 0.007

pattern = 2 #not using circpat to drive, hard coded

if col1 == 1:
  xred1 = 800
  xred2 = 1000
  xgreen1 = 800
  xgreen2 = 1000
  xblue1 = 800
  xblue2 = 1000
elif col1 == 2:
  xred1 = 400
  xred2 = 800
  xgreen1 = 950
  xgreen2 = 1000
  xblue1 = 950
  xblue2 = 1000
elif col1 == 3:
  xred1 = 700
  xred2 = 900
  xgreen1 = 400
  xgreen2 = 800
  xblue1 = 950
  xblue2 = 1000
elif col1 == 4:
  xred1 = 200
  xred2 = 600
  xgreen1 = 0
  xgreen2 = 50
  xblue1 = 100
  xblue2 = 300
else:
  xred1 = 200
  xred2 = 600
  xgreen1 = 0
  xgreen2 = 200
  xblue1 = 0
  xblue2 = 200

its = int(ceil(circquant*.7))
circlen = len(circx1)
circarray = []
circtemp = []
i = 0

for j in range (0, its):
  test = (j+1)/circlen
  inttest = int((j+1)/circlen)
  if test == inttest:
    circarray.append(j)

for j in range (0, circlen):
  circtemp.append(j)

if its < circlen:
  circindex = sample(circtemp, circlen)
else:
  circindex = circtemp

for j in range (0, its):
  if j in circarray:
    if j + circarray[0] > circlen:
      circindex = sample(circtemp, circlen)
      i = 0
    else:
      i = 0
  r = randint(int(ceil(circsize/2)), circsize)/1000
  #print(i)  First round goes to 23 and then next rounds go to 24
  x = coordrange(circx1[circindex[i]], circx2[circindex[i]], circxoffset, circrandint)
  y = coordrange(circy1[circindex[i]], circy2[circindex[i]], circyoffset, circrandint)
  ag1 = 0
  ag2 = 2 * pi
  cred1 = color(xred1, xred2)
  cgreen1 = color(xgreen1, xgreen2)
  cblue1 = color(xblue1, xblue2)
  ctx.arc(x, y, r, ag1, ag2)
  ctx1.arc(x, y, r, ag1, ag2)
  #gradient = grad(cred1, cgreen1, cblue1, cred2, cgreen2, cblue2, 1, pattern, ctx, ctx1)
  ctx.set_source_rgba(cred1, cgreen1, cblue1, copaque)
  ctx.arc(x, y, r, ag1, ag2)
  ctx.fill()
  ctx1.set_source_rgba(cblue1, cgreen1, cred1, copaque)
  ctx1.arc(x, y, r, ag1, ag2)
  ctx1.fill()
  aim = add_image(srf1)
  images.append(aim)
  i += 1

# Squiggly Lines

#squigquant = argexer
#squigrand = spectrum(argintro)
#squigsize = spectrum(argintro)
#squigcol1 = argtemper

# Place - Community, City, Region, Country, Foreign
# Soft Green, Soft Rainbow, Rainbow, Purple, Brown

squiggrid = grid(iterations, width, height, 10, 2)
squigx1 = squiggrid[0]
squigx2 = squiggrid[1]
squigy1 = squiggrid[2]
squigy2 = squiggrid[3]
squigxoffset = squiggrid[4]
squigyoffset = squiggrid[5]
squigrandint = int(ceil(squigrand/10))
squigwidth = squigsize / 2500
col1 = int(ceil(squigcol1/20))
copaque = (squigopaq + 42) * 0.007

if col1 == 1:
  xred1 = 400
  xred2 = 800
  xgreen1 = 950
  xgreen2 = 1000
  xblue1 = 400
  xblue2 = 800
elif col1 == 2:
  xred1 = 400
  xred2 = 1000
  xgreen1 = 400
  xgreen2 = 1000
  xblue1 = 400
  xblue2 = 1000
elif col1 == 3:
  xred1 = 0
  xred2 = 800
  xgreen1 = 0
  xgreen2 = 800
  xblue1 = 0
  xblue2 = 800
elif col1 == 4:
  xred1 = 400
  xred2 = 800
  xgreen1 = 0
  xgreen2 = 200
  xblue1 = 950
  xblue2 = 1000
else:
  xred1 = 200
  xred2 = 600
  xgreen1 = 100
  xgreen2 = 300
  xblue1 = 0
  xblue2 = 50

its = int(squigquant/3)
squiglen = len(squigx1)
squigarray = []
squigtemp = []
i = 0

for j in range (0, squigquant):
  test = (j+1)/squiglen
  inttest = int((j+1)/squiglen)
  if test == inttest:
    squigarray.append(j)

for j in range (0, squiglen):
  squigtemp.append(j)

if its < squiglen:
  squigindex = sample(squigtemp, squiglen)
else:
  squigindex = squigtemp

xt1 = coordrange(squigx1[squigindex[0]], squigx2[squigindex[0]], squigxoffset, squigrandint)
yt1 = coordrange(squigy1[squigindex[0]], squigy2[squigindex[0]], squigyoffset, squigrandint)
for j in range (0, its):
  if i*3+1 in squigarray or i*3+2 in squigarray or i*3+3 in squigarray:
    if i*3+3 + squigarray[0] > squiglen:
      squigindex = sample(squigtemp, squiglen)
      i = 0
    else:
      i = 0
  if i*3+3 > squiglen :
    xt2 = coordrange(squigx1[squigindex[i]], squigx2[squigindex[i]], squigxoffset, squigrandint)
    xt3 = coordrange(squigx1[squigindex[i]], squigx2[squigindex[i]], squigxoffset, squigrandint)
    xt4 = coordrange(squigx1[squigindex[i]], squigx2[squigindex[i]], squigxoffset, squigrandint)
    yt2 = coordrange(squigy1[squigindex[i]], squigy2[squigindex[i]], squigyoffset, squigrandint)
    yt3 = coordrange(squigy1[squigindex[i]], squigy2[squigindex[i]], squigyoffset, squigrandint)
    yt4 = coordrange(squigy1[squigindex[i]], squigy2[squigindex[i]], squigyoffset, squigrandint)
  else:
    xt2 = coordrange(squigx1[squigindex[i*3+1]], squigx2[squigindex[i*3+1]], squigxoffset, squigrandint)
    xt3 = coordrange(squigx1[squigindex[i*3+2]], squigx2[squigindex[i*3+2]], squigxoffset, squigrandint)
    xt4 = coordrange(squigx1[squigindex[i*3+3]], squigx2[squigindex[i*3+3]], squigxoffset, squigrandint)
    yt2 = coordrange(squigy1[squigindex[i*3+1]], squigy2[squigindex[i*3+1]], squigyoffset, squigrandint)
    yt3 = coordrange(squigy1[squigindex[i*3+2]], squigy2[squigindex[i*3+2]], squigyoffset, squigrandint)
    yt4 = coordrange(squigy1[squigindex[i*3+3]], squigy2[squigindex[i*3+3]], squigyoffset, squigrandint)
  cred1 = color(xred1, xred2)
  cgreen1 = color(xgreen1, xgreen2)
  cblue1 = color(xblue1, xblue2)
  ctx.set_line_width(squigwidth)
  ctx.set_source_rgba(cred1, cgreen1, cblue1, copaque)
  ctx.move_to(xt1, yt1)
  ctx.curve_to(xt2, yt2, xt3, yt3, xt4, yt4)
  ctx.stroke()
  ctx1.set_line_width(squigwidth)
  ctx1.set_source_rgba(cblue1, cgreen1, cred1, copaque)
  ctx1.move_to(xt1, yt1)
  ctx1.curve_to(xt2, yt2, xt3, yt3, xt4, yt4)
  ctx1.stroke()
  aim = add_image(srf1)
  images.append(aim)
  xt1 = xt4
  yt1 = yt4
  i += 1

# Triangles

#triquant = spectrum(argtststr)
#trirand = spectrum(argtststr)
#trisize = spectrum(argsmltyp)
#tricol1 = argtsttyp
#triopaq = argsmlstr

# Sensitivity - Enthusiasm, Eagerness, Anxiety, Fear, Terror
# Rainbow, Teal, Army Green, Orange, Black

trigrid = grid(iterations, width, height, trirand, 1)
trix1 = trigrid[0]
trix2 = trigrid[1]
triy1 = trigrid[2]
triy2 = trigrid[3]
trixoffset = trigrid[4]
triyoffset = trigrid[5]
trixoffset2 = int(trixoffset / 2)
triyoffset2 = int(triyoffset / 2)
trirandint = int(ceil(trirand/10))
triwidth = trisize / 5000
col1 = int(ceil(tricol1/20))
copaque = (triopaq + 42) * 0.007

if col1 == 1:
  xred1 = 0
  xred2 = 800
  xgreen1 = 0
  xgreen2 = 800
  xblue1 = 0
  xblue2 = 800
elif col1 == 2:
  xred1 = 0
  xred2 = 200
  xgreen1 = 950
  xgreen2 = 1000
  xblue1 = 400
  xblue2 = 800
elif col1 == 3:
  xred1 = 100
  xred2 = 300
  xgreen1 = 200
  xgreen2 = 600
  xblue1 = 0
  xblue2 = 50
elif col1 == 4:
  xred1 = 950
  xred2 = 1000
  xgreen1 = 400
  xgreen2 = 800
  xblue1 = 0
  xblue2 = 200
else:
  xred1 = 0
  xred2 = 200
  xgreen1 = 0
  xgreen2 = 200
  xblue1 = 0
  xblue2 = 200

its = int(ceil(triquant*.7))
trilen = len(trix1)
triarray = []
tritemp = []
i = 0

for j in range (0, trilen):
  tritemp.append(j)

for j in range (0, its):
  test = (j+1)/trilen
  inttest = int((j+1)/trilen)
  if test == inttest:
    triarray.append(j)

if its < trilen:
  triindex = sample(tritemp, trilen)
else:
  triindex = tritemp

for j in range (0, its):
  if j in triarray:
    if j + triarray[0] > trilen:
      triindex = sample(tritemp, trilen)
      i = 0
    else:
      i = 0
  quad = [1, 2, 3, 4]
  qselect = choice(quad)
  if qselect == 1:
    x1 = coordrange(trix1[triindex[i]], int(trix1[triindex[i]] + trixoffset2), trixoffset2, trirandint)
    y1 = coordrange(triy1[triindex[i]], int(triy1[triindex[i]] + triyoffset2), triyoffset2, trirandint)
    x2 = int(trisize + 100)/1000
    y2 = randint(-50, 50)/1000
    x3 = randint(-50, 50)/1000
    y3 = int(trisize + 100)/1000
  elif qselect == 2:
    x1 = coordrange(int(trix1[triindex[i]] + trixoffset2), trix2[triindex[i]], trixoffset2, trirandint)
    y1 = coordrange(triy1[triindex[i]], int(triy1[triindex[i]] + triyoffset2), triyoffset2, trirandint)
    x2 = int((trisize*-1)-100)/1000
    y2 = randint(-50, 50)/1000
    x3 = randint(-50, 50)/1000
    y3 = int(trisize + 100)/1000
  elif qselect == 3:
    x1 = coordrange(trix1[triindex[i]], int(trix1[triindex[i]] + trixoffset2), trixoffset2, trirandint)
    y1 = coordrange(int(triy1[triindex[i]] + triyoffset2), triy2[triindex[i]], triyoffset2, trirandint)
    x2 = int(trisize + 100)/1000
    y2 = randint(-50, 50)/1000
    x3 = randint(-50, 50)/1000
    y3 = int((trisize*-1)-100)/1000
  else:
    x1 = coordrange(int(trix1[triindex[i]] + trixoffset2), trix2[triindex[i]], trixoffset2, trirandint)
    y1 = coordrange(int(triy1[triindex[i]] + triyoffset2), triy2[triindex[i]], triyoffset2, trirandint)
    x2 = int((trisize*-1)-100)/1000
    y2 = randint(-50, 50)/1000
    x3 = randint(-50, 50)/1000
    y3 = int((trisize*-1)-100)/1000

  cred1 = color(xred1, xred2)
  cgreen1 = color(xgreen1, xgreen2)
  cblue1 = color(xblue1, xblue2)
  ctx.set_line_width(triwidth)
  ctx.set_source_rgba(cred1, cgreen1, cblue1, copaque)
  ctx.move_to(x1, y1)
  ctx.rel_line_to(x2, y2)
  ctx.rel_line_to (x3, y3)
  ctx.line_to(x1, y1)
  ctx.fill()
  ctx1.set_line_width(triwidth)
  ctx1.set_source_rgba(cblue1, cgreen1, cred1, copaque)
  ctx1.move_to(x1, y1)
  ctx1.rel_line_to(x2, y2)
  ctx1.rel_line_to (x3, y3)
  ctx1.line_to(x1, y1)
  ctx1.fill()
  aim = add_image(srf1)
  images.append(aim)
  i += 1

# Straight Lines

#linequant = argsndtyp
#linerand = argsndtyp
#linesize = argplace
#linecol1 = argpeople
#lineopaq = argsndstr

# Sensation - Thrill, Pleasure, Comfort, Suffering, Agony
# Yellow, Pink, Light Blue, Grey, Red

linegrid = grid(iterations, width, height, 10, 2)
linex1 = linegrid[0]
linex2 = linegrid[1]
liney1 = linegrid[2]
liney2 = linegrid[3]
linexoffset = linegrid[4]
lineyoffset = linegrid[5]
linerandint = int(ceil(linerand/10))
linewidth = linesize / 4800
col1 = int(ceil(linecol1/20))
copaque = (lineopaq + 42) * 0.007

if col1 == 1:
  xred1 = 950
  xred2 = 1000
  xgreen1 = 950
  xgreen2 = 1000
  xblue1 = 0
  xblue2 = 400
elif col1 == 2:
  xred1 = 950
  xred2 = 1000
  xgreen1 = 0
  xgreen2 = 400
  xblue1 = 950
  xblue2 = 1000
elif col1 == 3:
  xred1 = 400
  xred2 = 800
  xgreen1 = 700
  xgreen2 = 900
  xblue1 = 950
  xblue2 = 1000
elif col1 == 4:
  xred1 = 200
  xred2 = 800
  xgreen1 = 200
  xgreen2 = 800
  xblue1 = 200
  xblue2 = 800
else:
  xred1 = 950
  xred2 = 1000
  xgreen1 = 0
  xgreen2 = 200
  xblue1 = 0
  xblue2 = 200

its = int(linequant/2)
linelen = len(linex1)
linearray = []
linetemp = []
i = 0

for j in range (0, linequant):
  test = (j+1)/linelen
  inttest = int((j+1)/linelen)
  if test == inttest:
    linearray.append(j)

for j in range (0, linelen):
  linetemp.append(j)

lineindex = sample(linetemp, linelen)

for j in range (0, its):
  if i*2 in linearray or i*2+1  in linearray:
    i = 0
  x1 = coordrange(linex1[lineindex[i*2]], linex2[lineindex[i*2]], linexoffset, linerandint)
  x2 = coordrange(linex1[lineindex[i*2+1]], linex2[lineindex[i*2+1]], linexoffset, linerandint)
  y1 = coordrange(liney1[lineindex[i*2]], liney2[lineindex[i*2]], lineyoffset, linerandint)
  y2 = coordrange(liney1[lineindex[i*2+1]], liney2[lineindex[i*2+1]], lineyoffset, linerandint)
  cred1 = color(xred1, xred2)
  cgreen1 = color(xgreen1, xgreen2)
  cblue1 = color(xblue1, xblue2)
  ctx.set_line_width(linewidth)
  ctx.set_source_rgba(cred1, cgreen1, cblue1, copaque)
  ctx.move_to(x1, y1)
  ctx.line_to(x2, y2)
  ctx.stroke()
  ctx1.set_line_width(linewidth)
  ctx1.set_source_rgba(cblue1, cgreen1, cred1, copaque)
  ctx1.move_to(x1, y1)
  ctx1.line_to(x2, y2)
  ctx1.stroke()
  aim = add_image(srf1)
  images.append(aim)
  i += 1

# Create gif

images[0].save(gifname, save_all=True, append_images=images[1:], optimize=False, duration=3, loop=1)

# Create png

srf3 = cairo.ImageSurface(cairo.FORMAT_ARGB32, width, height)
ctx3 = cairo.Context(srf3)
ctx3.set_source_surface(srf,0.0,0.0)
ctx3.paint()
fileobj = pngname
srf3.write_to_png(fileobj)

# Create svg

srf4 = cairo.SVGSurface(svgname, width, height)
ctx4 = cairo.Context(srf4)
ctx4.set_source_surface(srf,0.0,0.0)
ctx4.paint()

# AWS Bucketeer Connection and Upload

aws_access_key = os.environ.get('BUCKETEER_AWS_ACCESS_KEY_ID')
aws_secret_key = os.environ.get('BUCKETEER_AWS_SECRET_ACCESS_KEY')
aws_bucket_name = os.environ.get('BUCKETEER_BUCKET_NAME')

session = boto3.session.Session()

s3_client = session.client(
    service_name='s3',
    aws_access_key_id=aws_access_key,
    aws_secret_access_key=aws_secret_key,
)

gifcontent = mimetypes.guess_type(gifname)[0]
svgcontent = mimetypes.guess_type(svgname)[0]
pngcontent = mimetypes.guess_type(pngname)[0]
logcontent = mimetypes.guess_type(logname)[0]

s3_client.upload_file(Filename=gifname, Bucket=aws_bucket_name, Key='public/' + gifname, ExtraArgs={'ContentType': 'image/gif'})
#s3_client.upload_file(Filename=svgname, Bucket=aws_bucket_name, Key='public/1' + svgname, ExtraArgs={'ContentType': svgcontent})
s3_client.upload_file(Filename=svgname, Bucket=aws_bucket_name, Key='public/' + svgname, ExtraArgs={'ContentType': 'image/svg+xml'})
#s3_client.upload_file(Filename=svgname, Bucket=aws_bucket_name, Key='public/3' + svgname, ExtraArgs={'ContentType': 'image/svg'})
s3_client.upload_file(Filename=pngname, Bucket=aws_bucket_name, Key='public/' + pngname, ExtraArgs={'ContentType': 'image/png'})
s3_client.upload_file(Filename=logname, Bucket=aws_bucket_name, Key='public/' + logname, ExtraArgs={'ContentType': 'plain/text'})

print(pngname)




