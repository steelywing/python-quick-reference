---
# layout: page
title: File
# permalink: /file/
weight: 1
---
## Open File
``` python
# r     reading (default)
# w     writing (truncating)
# r+    reading and writing
# t     text (default)
# b     binary
# x     exclusive creation, failing if the file already exists

with open('file.txt', 'w') as f:
    f.write('File Content')
```

is same as

``` python
f = open('file.txt', 'w')
try:
    f.write("File Content")
finally:
    f.close()
```

``` python
with open('file.txt') as f:
    for line in f:
        print(line)

open('file.txt').readlines()
```

## UTF-8 BOM File
``` python
with open('file.txt', 'w', encoding='utf-8-sig') as f:
    f.write('This file has UTF-8 BOM header')
```

## File operation
``` python
import os

os.rename('file.txt', 'new.txt')    # rename file 'file.txt' to 'new.txt'
os.remove('new.txt')                # remove file 'new.txt'

import distutils

distutils.move_file('file.txt', '..')       # move 'file.txt' to parent directory
distutils.move_file('file.txt', 'new.txt')  # rename file 'file.txt' to 'new.txt'
```
