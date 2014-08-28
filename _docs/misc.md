---
# layout: page
title: Misc
# permalink: /misc/
weight: 8
---
## Execute shell command

``` python
from subprocess import call
call(['dir', '/w'], shell=True)
```

## Input
``` python
name = input("Name:")
print('Hello {} !'.format(name))
```

## String buffers
``` python
from StringIO import StringIO
buf = StringIO()
sys.stdout = buf
print("Hello")
x = buf.getvalue()
```

## Output
``` python
import sys
# output error
print('Error', file=sys.stderr)

# change standard output
sys.stdout = open('output.log', 'w')
```

## _ _ name _ _
the fully-qualified name of the module
``` python
# if running in the main scope
__name__    # => '__main__'

# if running in module 'utils.py'
__name__    # => 'utils'

# typical usage
if __name__ == '__main__':
    # execute only if run as a main script
    pass
```

## Exception
``` python
import sys

try:
    raise Exception('Exception Description')
except:
    info = sys.exc_info()
    print(info[0])
    print(info[1])
    traceback.print_tb(info[2])
    raise                           # re-raise error            
else:
    pass
finally:
    pass
```

## SQLite
``` python
import sqlite3

db = sqlite3.connect('sqlite.db')
cursor = db.cursor()
cursor.execute('SELECT * FROM table')
for row in cursor:
    print(row)
db.commit()
db.close()

db = shelve.open("file")
db["x"] = y
db.close()
```

## URL
``` python
conn = urllib.urlopen("http://localhost:8080")
reply = conn.read()
```

## Environment

Encoding:
``` python
#!/usr/bin/python3
# -*- coding: latin-2 -*-
```

Windows - use .pyw extension to run the script (with GUI) without a console window.

Paths:
```
PYTHONPATH
export PYTHONSTARTUP=~/.pythonrc.py
```

## Module

sys

``` python
sys.argv
sys.stdin
sys.stdout
sys.stderr
sys.path
sys.platform
sys.version
```

os

``` python
os.pathsep
os.sep
os.pardir
os.curdir
os.linesep
os.startfile("index.html")
os.popen("ps ax").readlines()
os.listdir("/usr/local")              # ['bin', 'etc', ...]
os.glob("*.txt")                      # ['test.txt', 'out.txt', ...]
```

os.path

``` python
os.path.split("/usr/bin/go.sh")       # ('/usr/bin', 'go.sh')
os.path.join("/usr/bin", "go.sh")     # '/usr/bin/go.sh'
os.path.splitext("/usr/bin/go.sh")    # ('/usr/bin/go', '.sh')
os.path.abspath("../bin/go.sh")       # '/usr/bin/go.sh'
os.path.isfile("go.sh")
```

os.environ

``` python
os.environ.get("PYTHONSTARTUP")
```

## Directories
``` python
import os
for (dir, subdirs, files) in os.walk("/tmp"):
    for f in files:
        print(f)
```

## Functional programming
``` python
f = lambda x: x+10                    # creates an anonymous function
f(5)                                  # returns 15
L = [1, 4, 7]
for x in filter(lambda i: i<5, L):    # returns [1, 4]
for x in map(lambda: x: x*2, L):      # returns [2, 8, 14]
```
