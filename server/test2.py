import sys
import os
import cairo
import PIL
import boto3
from PIL import Image
import numpy
#from config import BUCKETEER_AWS_ACCESS_KEY_ID, BUCKETEER_AWS_SECRET_ACCESS_KEY, BUCKETEER_BUCKET_NAME
from random import randint, choice
from math import pi, sqrt
from io import BytesIO
#from graphics import update

# Notes
# Pattern 1 = Solid, 2 = Radial Gradient, 3 = Linear Gradient
# Weather 1-5 Sunny-yellows, Partly Cloudy-soft yellows, Mostly Cloudy-white, Cloudy-light grey, Stormy-mid grey
# Temperature 1-5 Hot-orange, Warm-yellow, Cool-soft green, Crisp-browns, Cold-blue

# Functions that the main program calls

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
  elif rnd > 5:
    rnd = 10
    temp1 = int(c1 + (offsethalf - (offsethalf / 9 * (rnd-1))))
    temp2 = int(c2 - (offsethalf - (offsethalf / 9 * (rnd-1))))
    c = randint(temp1, temp2)/1000
  else:
    rnd = rnd * 1.5
    temp1 = int(c1 + (offsethalf - (offsethalf / 9 * (rnd-1))))
    temp2 = int(c2 - (offsethalf - (offsethalf / 9 * (rnd-1))))
    c = randint(temp1, temp2)/1000
  return c

def color(b, c):
  x = (b+c)/2
  x1 = int(x - 70)
  x2 = int(x + 70)
  if c < 500:
    x1 = c
    x2 = c + 100
  if c > 800:
    x1 = c - 100
    x2 = c
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

# Variables and Setup

images = []
smallx1 = []
smallx2 = []
smally1 = []
smally2 = []
largex1 = []
largex2 = []
largey1 = []
largey2 = []
boldness = []
width = 500
height = 500
iterations = 100
randomness = 1
argv1 = int(sys.argv[1])
argv2 = int(sys.argv[2])
weather = int(argv1/20)
temp = int(argv2/20)
sqiterations = int(sqrt(iterations))
smallxoffset = int(width/sqiterations*randomness*2)
smallyoffset = int(height/sqiterations*randomness*2)
smalltempx1 = 0
smalltempy1 = 0
smalltempx2 = smallxoffset
smalltempy2 = smallyoffset
lqiterations = int(sqiterations/2)
largexoffset = int(width/lqiterations*randomness*2)
largeyoffset = int(height/lqiterations*randomness*2)
if largexoffset > width * 2:
  largexoffset = width * 2
if largeyoffset > height * 2:
  largeyoffset = height * 2
largetempx1 = 0
largetempy1 = 0
largetempx2 = largexoffset
largetempy2 = largeyoffset

# Establish small grid for image placement

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

# Establish large grid for image placement

imultip = 1
jmultip = 1
for i in range(0, lqiterations):

  for j in range(0, lqiterations):

    largex1.append(largetempx1)
    largey1.append(largetempy1)
    largex2.append(largetempx2)
    largey2.append(largetempy2)

    if (largetempx2 + largexoffset) > width * 2 and jmultip == 1:
      largetempx1 = width * 2 - largexoffset
      largetempx2 = width * 2
      jmultip = -1
    elif (largetempx1 - largexoffset) < 0 and jmultip == -1:
      largetempx1 = 0
      largetempx2 = largexoffset
      jmultip = 1
    else:
      largetempx1 = largetempx1 + largexoffset * jmultip
      largetempx2 = largetempx2 + largexoffset * jmultip

  if (largetempy2 + largeyoffset) > height * 2 and imultip == 1:
    largetempy1 = height * 2 - largeyoffset
    largetempy2 = height * 2
    imultip = -1
  elif (largetempy1 - largeyoffset) < 0 and imultip == -1:
    largetempy1 = 0
    largetempy2 = largeyoffset
    imultip = 1
  else:
    largetempy1 = largetempy1 + largeyoffset * imultip
    largetempy2 = largetempy2 + largeyoffset * imultip

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

pattern = randint(2,3)

if weather == 1:
  cred1 = color(800, 1000)
  cgreen1 = color(800, 1000)
  cblue1 = color(800, 0)
elif weather == 2:
  cred1 = color(1000, 1000)
  cgreen1 = cred1
  cblue1 = color(800, 550)
elif weather == 3:
  cred1 = color(1000, 1000)
  cgreen1 = color(1000, 1000)
  cblue1 = color(1000, 1000)
elif weather == 4:
  cred1 = color(800, 800)
  cgreen1 = color(800, 800)
  cblue1 = color(800, 800)
else:
  cred1 = color(500, 600)
  cgreen1 = color(500, 600)
  cblue1 = color(500, 600)

if temp == 1:
  cred2 = color(800, 1000)
  cgreen2 = color(800, 800)
  cblue2 = color(800, 0)
elif temp == 2:
  cred2 = color(1000, 1000)
  cgreen2 = cred2
  cblue2 = color(800, 550)
elif temp == 3:
  cred2 = color(800, 550)
  cgreen2 = color(1000, 1000)
  cblue2 = color(800, 550)
elif temp == 4:
  cred2 = color(800, 800)
  cgreen2 = color(500, 500)
  cblue2 = color(500, 500)
else:
  cred2 = color(800, 800)
  cgreen2 = color(800, 800)
  cblue2 = color(800, 1000)

ctx.rectangle(0,0,width,height)
ctx1.rectangle(0,0,width,height)

gradient = grad(cred1, cgreen1, cblue1, cred2, cgreen2, cblue2, 1, pattern, ctx, ctx1)

aim = add_image(srf1)
images.append(aim)

# Circles - Energy

# Energy 0-100 Inactive, Calm, Active, Busy, Hectic
#

for i in range (0, iterations):
  r = randint(10, 50)/1000
  x = coordrange(smallx1[i], smallx2[i], smallxoffset, randomness)
  y = coordrange(smally1[i], smally2[i], smallyoffset, randomness)
  ag1 = 0
  ag2 = 2 * pi
  cred = randint(0, 1000)/1000
  cgreen = randint(0, 1000)/1000
  cblue = randint(0, 1000)/1000
  copaque = 1
  ctx.set_source_rgba(cred, cgreen, cblue, copaque)
  ctx.arc(x, y, r, ag1, ag2)
  ctx.fill()
  ctx1.set_source_rgba(cblue, cgreen, cred, copaque)
  ctx1.arc(x, y, r, ag1, ag2)
  ctx1.fill()
  aim = add_image(srf1)
  images.append(aim)

# Squiggly Lines

its = int(iterations/3)
xt1 = coordrange(smallx1[0], smallx2[0], smallxoffset, randomness)
yt1 = coordrange(smally1[0], smally2[0], smallyoffset, randomness)
for i in range (0, its):
  xt2 = coordrange(smallx1[i*3+1], smallx2[i*3+1], smallxoffset, randomness)
  xt3 = coordrange(smallx1[i*3+2], smallx2[i*3+2], smallxoffset, randomness)
  xt4 = coordrange(smallx1[i*3+3], smallx2[i*3+3], smallxoffset, randomness)
  yt2 = coordrange(smally1[i*3+1], smally2[i*3+1], smallyoffset, randomness)
  yt3 = coordrange(smally1[i*3+2], smally2[i*3+2], smallyoffset, randomness)
  yt4 = coordrange(smally1[i*3+3], smally2[i*3+3], smallyoffset, randomness)
  cred = randint(0, 1000)/1000
  cgreen = randint(0, 1000)/1000
  cblue = randint(0, 1000)/1000
  copaque = 1
  ctx.set_line_width(0.01)
  ctx.set_source_rgba(cred, cgreen, cblue, copaque)
  ctx.move_to(xt1, yt1)
  ctx.curve_to(xt2, yt2, xt3, yt3, xt4, yt4)
  ctx.stroke()
  ctx1.set_line_width(0.01)
  ctx1.set_source_rgba(cblue, cgreen, cred, copaque)
  ctx1.move_to(xt1, yt1)
  ctx1.curve_to(xt2, yt2, xt3, yt3, xt4, yt4)
  ctx1.stroke()
  aim = add_image(srf1)
  images.append(aim)
  xt1 = xt4
  yt1 = yt4

# Triangles

trirand = 6
its = int(iterations/4)
quad = [1, 2, 3, 4]
for i in range (0, its):
  quad = [1, 2, 3, 4]
  qselect = choice(quad)
  if qselect == 1:
    x1 = coordrange(largex1[i], int(largex1[i] + (largexoffset / 2)), largexoffset, trirand)
    y1 = coordrange(largey1[i], int(largey1[i] + (largeyoffset / 2)), largeyoffset, trirand)
    x2 = randint(100, 150)/1000
    y2 = randint(-50, 50)/1000
    x3 = randint(-50, 50)/1000
    y3 = randint(100, 150)/1000
  elif qselect == 2:
    x1 = coordrange(int(largex1[i] + (largexoffset / 2)), largex2[i], largexoffset, trirand)
    y1 = coordrange(largey1[i], int(largey1[i] + (largeyoffset / 2)), largeyoffset, trirand)
    x2 = randint(-150, -100)/1000
    y2 = randint(-50, 50)/1000
    x3 = randint(-50, 50)/1000
    y3 = randint(100, 150)/1000
  elif qselect == 3:
    x1 = coordrange(largex1[i], int(largex1[i] + (largexoffset / 2)), largexoffset, trirand)
    y1 = coordrange(int(largey1[i] + (largeyoffset / 2)), largey2[i], largeyoffset, trirand)
    x2 = randint(100, 150)/1000
    y2 = randint(-50, 50)/1000
    x3 = randint(-50, 50)/1000
    y3 = randint(-150, -100)/1000
  else:
    x1 = coordrange(int(largex1[i] + (largexoffset / 2)), largex2[i], largexoffset, trirand)
    y1 = coordrange(int(largey1[i] + (largeyoffset / 2)), largey2[i], largeyoffset, trirand)
    x2 = randint(-150, -100)/1000
    y2 = randint(-50, 50)/1000
    x3 = randint(-50, 50)/1000
    y3 = randint(-150, -100)/1000

  cred = randint(0, 1000)/1000
  cgreen = randint(0, 1000)/1000
  cblue = randint(0, 1000)/1000
  copaque = 0.5
  ctx.set_line_width(0.003)
  ctx.set_source_rgba(cred, cgreen, cblue, copaque)
  ctx.move_to(x1, y1)
  ctx.rel_line_to(x2, y2)
  ctx.rel_line_to (x3, y3)
  ctx.line_to(x1, y1)
  ctx.fill()
  ctx1.set_line_width(0.003)
  ctx1.set_source_rgba(cblue, cgreen, cred, copaque)
  ctx1.move_to(x1, y1)
  ctx1.rel_line_to(x2, y2)
  ctx1.rel_line_to (x3, y3)
  ctx1.line_to(x1, y1)
  ctx1.fill()
  aim = add_image(srf1)
  images.append(aim)

# Straight Lines

its = randomness * 10
for i in range (0, its):
  x1 = randint(0, 1000)/1000
  y1 = randint(0, 1000)/1000
  x2 = randint(0, 1000)/1000
  y2 = randint(0, 1000)/1000
  cred = randint(0, 1000)/1000
  cgreen = randint(0, 1000)/1000
  cblue = randint(0, 1000)/1000
  copaque = 1
  ctx.set_line_width(0.002)
  ctx.set_source_rgba(cred, cgreen, cblue, copaque)
  ctx.move_to(x1, y1)
  ctx.line_to(x2, y2)
  ctx.stroke()
  ctx1.set_line_width(0.002)
  ctx1.set_source_rgba(cblue, cgreen, cred, copaque)
  ctx1.move_to(x1, y1)
  ctx1.line_to(x2, y2)
  ctx1.stroke()
  aim = add_image(srf1)
  images.append(aim)

MYDIR = os.path.dirname(__file__)
print(MYDIR)

# Create gif

images[0].save('test.gif', save_all=True, append_images=images[1:], optimize=False, duration=3, loop=1)

# Create png

srf3 = cairo.ImageSurface(cairo.FORMAT_ARGB32, width, height)
ctx3 = cairo.Context(srf3)
ctx3.set_source_surface(srf,0.0,0.0)
ctx3.paint()
fileobj = 'test.png'
srf3.write_to_png(fileobj)

# Create svg

srf4 = cairo.SVGSurface('test.svg', width, height)
ctx4 = cairo.Context(srf4)
ctx4.set_source_surface(srf,0.0,0.0)
ctx4.paint()


aws_access_key = os.environ.get('BUCKETEER_AWS_ACCESS_KEY_ID')
aws_secret_key = os.environ.get('BUCKETEER_AWS_SECRET_ACCESS_KEY')
aws_bucket_name = os.environ.get('BUCKETEER_BUCKET_NAME')

session = boto3.session.Session()

#s3 = session.client(
#    service_name='s3',
#    aws_access_key_id=get_aws_access_key_id(),
#    aws_secret_access_key=get_aws_secret_access_key()
#)

s3_client = session.client(
    service_name='s3',
    aws_access_key_id=aws_access_key,
    aws_secret_access_key=aws_secret_key,
)

s3_client.upload_file(Filename='test.gif', Bucket=aws_bucket_name, Key='public/test.gif')
s3_client.upload_file('public/test.svg', 'bucketeer-be56a818-47b8-45ac-8891-d13ecbace823')
s3_client.upload_file('test.png', 'bucketeer-be56a818-47b8-45ac-8891-d13ecbace823')






