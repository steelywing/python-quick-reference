---
layout: page
title: Strings
# permalink: /strings/
weight: 1
---
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
