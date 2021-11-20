import sys
import os
import cairo
#import Images
import PIL
from PIL import Image
import numpy
from random import randint, choice
#from IPython.display import Image, display
from math import pi
from io import BytesIO
from graphics import update

#def as_numpy_array(surface):
#  w = 500
#  h = 500
#  data = surface.get_data()
#  a = numpy.ndarray(shape=(h,w), dtype=numpy.uint32, buffer=data)
#  i = Image.frombytes("RGBA", (w,h), a, "raw", "BGRA", 0, 1)
#  return numpy.asarray(i)

def add_image(surface):
  aisrf = cairo.ImageSurface(cairo.FORMAT_ARGB32, 500, 500)
  aictx = cairo.Context(aisrf)
  aictx.set_source_surface(surface,0.0,0.0)
  aictx.paint()
#  a = as_numpy_array(aisrf)
  a = Image.frombuffer("RGBA", (aisrf.get_width(),aisrf.get_height()), aisrf.get_data(), "raw", "RGBA", 0, 1)
  return a

def rect(sr, cr, sr1, cr1, sr2, cr2, width, height, its, nimg):
  copaque = 0
  opaqoff = 1 / its
  cred = randint(0, 1000)/1000
  cgreen = randint(0, 1000)/1000
  cblue = randint(0, 1000)/1000
  cr1.set_source_rgba(1, 1, 1, 1)
  cr1.rectangle(0,0,width,height)
  cr1.fill()
  aim = add_image(sr1)
  nimg.append(aim)
  cr.set_source_rgba(cred, cgreen, cblue, 1)
  cr.rectangle(0,0,width,height)
  cr.fill()
  its2 = int(its / 2)

  for i in range (1, its2):
    cr1.set_source_rgba(cblue, cgreen, cred, copaque)
    cr1.rectangle(0,0,width,height)
    cr1.fill()
    aim = add_image(sr1)
    nimg.append(aim)
    copaque = copaque + opaqoff
  return nimg

def circ(sr, cr, sr1, cr1, sr2, cr2, its, nimg):

  copaque1 = 1
  opaqoff = 1 / its
  for i in range (1, its):
    r = randint(20, 100)/1000
    x = randint(0, 1000)/1000
    y = randint(0, 1000)/1000
    ag1 = 0
    ag2 = 2 * pi
    cred = randint(0, 1000)/1000
    cgreen = randint(0, 1000)/1000
    cblue = randint(0, 1000)/1000
    copaque = 1
    cr.set_source_rgba(cred, cgreen, cblue, copaque)
    cr.arc(x, y, r, ag1, ag2)
    cr.fill()
#    cr1.restore()
    cr1.set_source_rgba(cblue, cgreen, cred, copaque)
    cr1.arc(x, y, r, ag1, ag2)
    cr1.fill()
#    cr1.save()
    aim = add_image(sr1)
    nimg.append(aim)
  return nimg

def tri(sr, cr, sr1, cr1, sr2, cr2, its, nimg):

  for i in range (1, its):
    x1 = randint(0, 1000)/1000
    y1 = randint(0, 1000)/1000
    multip = [-1, 1]
    m1 = choice(multip)
    m2 = choice(multip)
    m3 = choice(multip)
    m4 = choice(multip)
    offset1 = randint(100, 150)/1000*m1
    offset2 = randint(100, 150)/1000*m2
    x2 = x1 + offset1
    y2 = y1 + offset2
    offset3 = randint(100, 150)/1000*m3
    offset4 = randint(100, 150)/1000*m4
    if x1 > x2:
      x3 = x1 + (x1 - x2) + offset3
    else:
      x3 = x2 + (x2 - x1) + offset3
    if y1 > y2:
      y3 = y1 + (y1 - y2)
    else:
      y3 = y2 + (y2 - y1)
    cred = randint(0, 1000)/1000
    cgreen = randint(0, 1000)/1000
    cblue = randint(0, 1000)/1000
    copaque = 0.5
    cr.set_line_width(0.003)
    cr.set_source_rgba(cred, cgreen, cblue, copaque)
    cr.move_to(x1, y1)
    cr.line_to(x2, y2)
    cr.line_to (x3, y3)
    cr.line_to(x1, y1)
    cr.fill()
    cr1.set_line_width(0.003)
    cr1.set_source_rgba(cblue, cgreen, cred, copaque)
    cr1.move_to(x1, y1)
    cr1.line_to(x2, y2)
    cr1.line_to (x3, y3)
    cr1.line_to(x1, y1)
    cr1.fill()
    aim = add_image(sr1)
    nimg.append(aim)
  return nimg

def lin(sr, cr, sr1, cr1, sr2, cr2, its, nimg):

  for i in range (1, its):
    x1 = randint(0, 1000)/1000
    y1 = randint(0, 1000)/1000
    x2 = randint(0, 1000)/1000
    y2 = randint(0, 1000)/1000
    cred = randint(0, 1000)/1000
    cgreen = randint(0, 1000)/1000
    cblue = randint(0, 1000)/1000
    copaque = 1
    cr.set_line_width(0.002)
    cr.set_source_rgba(cred, cgreen, cblue, copaque)
    cr.move_to(x1, y1)
    cr.line_to(x2, y2)
    cr.stroke()
    cr1.set_line_width(0.002)
    cr1.set_source_rgba(cblue, cgreen, cred, copaque)
    cr1.move_to(x1, y1)
    cr1.line_to(x2, y2)
    cr1.stroke()
    aim = add_image(sr1)
    nimg.append(aim)
  return nimg

def squg(sr, cr, sr1, cr1, sr2, cr2, its, nimg):

  x1 = randint(0, 100)/1000
  y1 = randint(0, 100)/1000
  for i in range (1, its):
    x2 = randint(0, 1000)/1000
    y2 = randint(0, 1000)/1000
    x3 = randint(0, 1000)/1000
    y3 = randint(0, 1000)/1000
    x4 = randint(0, 1000)/1000
    y4 = randint(0, 1000)/1000
    cred = randint(0, 1000)/1000
    cgreen = randint(0, 1000)/1000
    cblue = randint(0, 1000)/1000
    copaque = 0.5
    cr.set_line_width(0.01)
    cr.set_source_rgba(cred, cgreen, cblue, copaque)
    cr.move_to(x1, y1)
    cr.curve_to(x2, y2, x3, y3, x4, y4)
    cr.stroke()
    cr1.set_line_width(0.01)
    cr1.set_source_rgba(cblue, cgreen, cred, copaque)
    cr1.move_to(x1, y1)
    cr1.curve_to(x2, y2, x3, y3, x4, y4)
    cr1.stroke()
    aim = add_image(sr1)
    nimg.append(aim)
    x1 = x4
    y1 = y4
  return nimg

images = []
timg = []
width = 500
height = 500
iterations = 60

srf = cairo.RecordingSurface(cairo.Content(1), cairo.Rectangle(0.0,0.0,width,height))
ctx = cairo.Context(srf)
ctx.scale(width, height)
srf1 = cairo.RecordingSurface(cairo.Content(1), cairo.Rectangle(0.0,0.0,width,height))
ctx1 = cairo.Context(srf1)
ctx1.scale(width, height)
srf2 = cairo.RecordingSurface(cairo.Content(1), cairo.Rectangle(0.0,0.0,width,height))
ctx2 = cairo.Context(srf1)
ctx2.scale(width, height)
images = rect(srf, ctx, srf1, ctx1, srf2, ctx2, width, height, iterations, timg)
images = circ(srf, ctx, srf1, ctx1, srf2, ctx2, iterations, timg)
images = tri(srf, ctx, srf1, ctx1, srf2, ctx2, iterations, timg)
images = lin(srf, ctx, srf1, ctx1, srf2, ctx2, iterations, timg)
images = squg(srf, ctx, srf1, ctx1, srf2, ctx2, iterations, timg)
images[0].save('test.gif', save_all=True, append_images=images[1:], optimize=False, duration=3, loop=1)

srf3 = cairo.ImageSurface(cairo.FORMAT_ARGB32, width, height)
ctx3 = cairo.Context(srf3)
ctx3.set_source_surface(srf,0.0,0.0)
ctx3.paint()
fileobj = 'test.png'
srf3.write_to_png(fileobj)

srf4 = cairo.SVGSurface('test.svg', width, height)
ctx4 = cairo.Context(srf4)
ctx4.set_source_surface(srf,0.0,0.0)
ctx4.paint()






