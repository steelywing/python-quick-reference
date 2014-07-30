---
layout: page
title: Misc
# permalink: /misc/
weight: 8
---
# File
-------------------------------------------------------------
r   | reading (default)
w   | writing (truncating)
r+  | reading and writing
t   | text (default)
b   | binary
x   | exclusive creation, failing if the file already exists
-------------------------------------------------------------

``` python
with open('filename.txt', 'w') as f:
    f.write('File Content')
```
is same as
```
f = open('filename.txt', 'w')
try:
    f.write("File Content")
finally:
    f.close()

for line in open("test.txt"): print(line, end="")

L = open("test.txt").readlines()    # returns a list of lines

Exclusive access:

f = os.fdopen(os.open("test.txt", os.O_WRONLY|os.O_EXCL), "w")

Input:

x = raw_input("Name: ")
for line in sys.stdin: print(line)

String buffers:

from StringIO import StringIO
buf = StringIO()
sys.stdout = buf
print("Hello")
x = buf.getvalue()

Error stream:

print("Error!", file=sys.stderr, flush=True)

Other file operations:

os.rename(from, to)                  os.remove(path)
os.chmod(file, 0700)                 os.stat(file)

Special names

__name__
    name of the file being run not imported

Typical usage:

if __name__ == "__main__":
    print("Do something)

Exceptions

try:
    raise TypeError("arg")
except (RuntimeError, NameError):
    pass                              # empty instruction (NOP)
except:
    info = sys.exc_info()
    print(info[0])
    print(info[1])
    traceback.print_tb(info[2])
    raise
else:
    ...                               # no exception but before finally
finally:                              # on the way out
    ...                               # unhandled exc, release resources

Object-oriented programming

class Person:
    ID = 0                            # zmienna statyczna
    def __init__(self, name, age=0):
        self.name = name
        self.age  = age
    def lastName(self):
        return self.name.split()[-1]
    def __str__(self):
        return "{}({},{})".format(self.__class__.__name__,
                                  self.name, self.age)

class Worker(Person):
    def __init__(self, name, position, age=0):
        super().__init__(name, age)
        self.position = position
    def __str__(self):
        return "{}({},{},{})".format(self.__class__.__name__,
                                   self.name, self.position, self.age)

bob = Worker("Bob Smith", "developer", 25)
print(bob)

Useful APIs

Queues:

Q = collections.deque([10,20,30])
Q.append(40)
Q.popleft()

Pickling:

f = open("myobj.dat", "w")
pickle.dump(x, f)
f = open("myobj.dat", "r")
x = pickle.load(f)

Databases:

conn = sqlite3.connect("data.db")
c = conn.cursor()
c.execute("SELECT * FROM employees")
for row in c:
    print(row[0])
conn.commit()
conn.close()

db = shelve.open("file")
db["x"] = y
db.close()

CGI:

form = cgi.FieldStorage()
print("Content-type: text/html\n")
print(cgi.escape(form["user"].value))

HTTP Server:

srvraddr = ("", 8080)                 # my hostname, portnumber
srvrobj  = BaseHTTPServer.HTTPServer(srvraddr,
                                     CGIHTTPServer.CGIHTTPRequestHandler)
srvrobj.serve_forever()

URLs:

conn = urllib.urlopen("http://localhost:8080")
reply = conn.read()

Environment

Encoding:

#!/usr/bin/python3
# -*- coding: latin-2 -*-

Windows ¡X use .pyw extension to run the script (with GUI) without a console window.

Paths:

PYTHONPATH
export PYTHONSTARTUP=~/.pythonrc.py

Module sys:

sys.argv      sys.stdin       sys.stdout      sys.stderr
sys.path      sys.platform    sys.version

Processes (module subprocess):

res = subprocess.call(["hostname","-f"], stderr=subprocess.DEVNULL)
res = subprocess.call("ps axu | grep ^root", shell=True)
output = subprocess.check_output(["mycmd", "myarg"],universal_newlines=True)

Module os:

os.pathsep    os.sep          os.pardir       os.curdir       os.linesep
os.startfile("index.html")
os.popen("ps ax").readlines()
os.listdir("/usr/local")              # ['bin', 'etc', ...]
os.glob("*.txt")                      # ['test.txt', 'out.txt', ...]

Module os.path:

os.path.split("/usr/bin/go.sh")       # ('/usr/bin', 'go.sh')
os.path.join("/usr/bin", "go.sh")     # '/usr/bin/go.sh'
os.path.splitext("/usr/bin/go.sh")    # ('/usr/bin/go', '.sh')
os.path.abspath("../bin/go.sh")       # '/usr/bin/go.sh'
os.path.isfile("go.sh")

Module os.environ:

os.environ.get("PYTHONSTARTUP")

Directories:

for (dir, subdirs, files) in os.walk("/tmp"):
    for f in files: print(f)

Functional programming

f = lambda x: x+10                    # creates an anonymous function
f(5)                                  # returns 15
L = [1, 4, 7]
for x in filter(lambda i: i<5, L):    # returns [1, 4]
for x in map(lambda: x: x*2, L):      # returns [2, 8, 14]

