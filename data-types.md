---
layout: page
title: Data Types
# permalink: /data-types/
weight: 1
---
## Numbers
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
~x      # inverted
x | y   # or
x & y   # and
x ^ y   # exclusive
x << n  # shifted left by n bits
x >> n  # shifted right by n bits
```

## Strings
``` python
"string\n" == 'string\n'    # => True
r'raw \n string'            # => 'raw \\n string'
'A' + 'B'                   # => 'AB'
'AB' * 2                    # => 'ABAB'

"""multiple
line"""
# => 'multiple\nline'

'''\
multiple
line'''
# => 'multiple\nline'

','.join([1, 2, 3, 4])
# => '1,2,3,4'

len('1234')
# => 4

'%s has %d feet' % ('Chick', 2)
# => 'Chick has 2 feet'

'{} has {} feet'.format('Chick', 2)
# => 'Chick has 2 feet'

'1 Foot = {0} {1}, 1 {1} = {2} cm'.format(12, 'Inch', 2.54)
# => '1 Foot = 12 Inch, 1 Inch = 2.54 cm'
```
