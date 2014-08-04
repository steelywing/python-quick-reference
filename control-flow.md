---
layout: page
title: Control Flow
# permalink: /control-flow/
weight: 1
---
## if
``` python
n = int(input('Input n: '))
if n < 0:
    print('n < 0')
elif n > 0:
    print('n > 0')
else:
    print('n = 0')
```

## for
``` python
for c in ['A', 'B', 'C']:
    print(c, end=' ')
# A B C

# for ... else ...
def is_prime_number(n):
    for i in range(2, n):
        if n % i == 0:
            result = False
            break
    else:
        # run if no break
        result = True
    
    return result

# continue
n = int(input('Input n: '))
print('Divisor of n:')
for i in range(2, n):
    if n % i != 0:
        continue
    print(i)
```

## while
``` python
while input('Enter "exit" to exit: ') != 'exit':
    pass
```

## range
``` python
list(range(10))
# => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

for i in range(10):
    print(i, end=' ')
# 0 1 2 3 4 5 6 7 8 9

for i in range(10, 20, 2):
    print(i, end=' ')
# 10 12 14 16 18
```

## Functions
``` python
def foo(arg, kw_arg='default', *args, **kw_args):
    """Documentation"""
    # type(args) == tuple
    # type(kw_args) == dict
    return arg, kw_arg, args, kw_args

foo.__doc__
# => 'Documentation'

foo('arg')
# => ('arg', 'default', (), {})

foo('arg', 'kw_arg', 'arbitrary', 'argument', a=1, b=2)
# => ('arg', 'kw_arg', ('arbitrary', 'argument'), {'a': 1, 'b': 2})

args = ['arg', 'kw_arg', 'arbitrary', 'argument']
kw_args = {'a': 1, 'b': 2}
foo(*args, **kw_args) # unpacking arguments
# => ('arg', 'kw_arg', ('arbitrary', 'argument'), {'a': 1, 'b': 2})
```

Function Annotations

``` python
def foo(arg: 'argument', kw_arg: 'keyword argument' = 'default') -> 'return annotation':
    pass

foo.__annotations__
# => {'arg': 'argument', 'kw_arg': 'keyword argument', 'return': 'return annotation'}
```

## lambda
``` python
double = lambda n: n*2
double(12)
# => 24
```

