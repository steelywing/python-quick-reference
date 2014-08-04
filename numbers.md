---
layout: page
title: Numbers
# permalink: /numbers/
weight: 1
---
## Operations
``` python
1 + 1       # => 2
2 - 1       # => 1
2 * 2       # => 4
# division
3 / 2       # => 1.5
# floor division
5 // 2      # => 2
# remainder of division
5 % 2       # => 1
# power
4 ** 2      # => 16
pow(4, 2)   # => 16
int(1.2)    # => 1
float(1)    # => 1.0
```

## Bitwise Operations
``` python
~x          # inverted
x | y       # or
x & y       # and
x ^ y       # exclusive
x << n      # shifted left by n bits
x >> n      # shifted right by n bits
```

## Is Number?
``` python
from numbers import Number
def is_number(n):
    return isinstance(n, Number)

is_number(1)    # => True
is_number(1.2)  # => True
is_number('1')  # => False
```
