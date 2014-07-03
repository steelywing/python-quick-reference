---
layout: page
title: Data Structures
permalink: /data-structures/
weight: 1
---
## Numbers
``` python
1 + 1
# => 2

2 - 1
# => 1

2 * 2
# => 4

3 / 2 # division
# => 1.5

3 // 2 # floor division
# => 1

3 % 2 # remainder of division
# => 1

4 ** 2 # power
pow(4, 2)
# => 16

int(1.2)
# => 1

float(1)
# => 1.0
```

## Strings
``` python
"string\n" == 'string\n'
# => True

r'raw \n string'
# => 'raw \\n string'

'A' + 'B'
# => 'AB'

'AB' * 2
# => 'ABAB'

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

## Lists
``` python
array = ['A', 'B', 'C', 'D']

len(array)
# => 4

array[0]
# => 'A'

array[-1]
# => 'D'

array[1:3] # return #2 (include) to #4 (exclude) items
# => ['B', 'C']

array[1:]
# => ['B', 'C', 'D']

array[:] # shallow copy
# => ['A', 'B', 'C', 'D']

array.copy() # shallow copy
# => ['A', 'B', 'C', 'D']

'B' in array
# => True

'E' not in array
# => True

array.index('B') # return index of the first match
# => 1

['A', 'B'] + ['C', 'D']
# => ['A', 'B', 'C', 'D']

['A', 'B'] * 2
# => ['A', 'B', 'A', 'B']

array[0:3] = ['E', 'F'] # splice
# array = ['E', 'F', 'D']

array.append('G')
# array = ['E', 'F', 'D', 'G']

array.insert(1, 'H')
# array = ['E', 'H', 'F', 'D', 'G']

del array[0] # remove
# array = ['H', 'F', 'D', 'G']

del array[1:3] # remove
# array = ['H', 'G']

array.extend(['H', 'I'])
# array = ['H', 'G', 'H', 'I']

array.remove('H') # remove first matching item
# array = ['G', 'H', 'I']

array.pop()
# => 'I', array = ['G', 'H']

array = [6, 4, 8, 2]

array.sort()
# array = [2, 4, 6, 8]

array.reverse()
# array = [8, 6, 4, 2]

list(enumerate(['A', 'B', 'C']))
# => [(0, 'A'), (1, 'B'), (2, 'C')]

for i, v in enumerate(['A', 'B', 'C']):
	print(i, v)
# 0 A
# 1 B
# 2 C
```

## List Comprehensions
``` python
[n for n in range(4)]
# => [0, 1, 2, 3]
```

``` python
array = [n*2 for n in range(8) if n%2 == 0]
# array = [0, 4, 8, 12]
```

is same as

``` python
array = []
for n in range(8):
    if n%2 == 0:
        array.append(n*2)
```

## Tuples (Immutable Lists)
``` python
tuple([1, 2, 3])
(1, 2, 3)
(1,)
()
```

## Sets
``` python
{1, 2, 3, 4}
set([1, 2, 3, 2, 3, 4])
# => {1, 2, 3, 4}

'A' in {'A', 'B', 'C'}
# => True

'D' not in {'A', 'B', 'C'}
# => True

{1, 2} | {2, 3}
{1, 2}.union({2, 3})
# => {1, 2, 3}

{1, 2} & {2, 3}
{1, 2}.intersection({2, 3})
# => {2}

{1, 2} - {2, 3}
{1, 2}.difference({2, 3})
# => {1}

{1, 2} ^ {2, 3}
{1, 2}.symmetric_difference({2, 3})
# => {1, 3}

{1, 2}.isdisjoint({3, 4}) # no common elements
# => True

{1, 2}.issubset({1, 2, 3})
{1, 2} <= {1, 2, 3}
{1, 2} <= {1, 2}
# => True

{1, 2} < {1, 2, 3}
# => True

{1, 2} < {1, 2}
# => False

{1, 2, 3}.issuperset({1, 2})
{1, 2, 3} >= {1, 2}
{1, 2} >= {1, 2}
# => True

{1, 2, 3} > {1, 2}
# => True

{1, 2} > {1, 2}
# => False

{1, 2, 3}.copy() # shallow copy
# => {1, 2, 3}
```

## Frozensets (Immutable Sets)
``` python
frozenset([1, 2, 3, 2, 3, 4])
# => frozenset({1, 2, 3, 4})
```

## Dictionaries
``` python
{'a': 1, 'b': 2}
dict(a=1, b=2)
dict([('a', 1), ('b', 2)])
# => {'b': 2, 'a': 1}

dictionary = {'a': 1, 'b': 2, 'c': 3}

list(dictionary)
list(dictionary.keys())
# => ['b', 'a', 'c']

sorted(dictionary.keys())
# => ['a', 'b', 'c']

list(dictionary.values())
# => [2, 1, 3]

'a' in dictionary
# => True

'd' not in dictionary
# => True

for k, v in dictionary.items():
    print(k, v)
# b 2
# a 1
# c 3

for key in sorted(dictionary.keys()):
    print(key, dictionary[key])
# a 1
# b 2
# c 3

{x: x**2 for x in range(4)}
# => {0: 0, 1: 1, 2: 4, 3: 9}
```
