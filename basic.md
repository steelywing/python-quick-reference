---
layout: page
title: Basic
permalink: /basic/
weight: 1
---
## Basic
~~~ python
a, b, c = 1, 2, 3
# a = 1, b = 2, c = 3

1 < 2 < 3
# => True
~~~

### Bitwise Operations
~~~ python
~x # inverted
x | y # or
x & y # and
x ^ y # exclusive
x << n # shifted left by n bits
x >> n # shifted right by n bits
~~~

### Functions
~~~ python
def foo(arg, kw_arg='default', *args, **kw_args) -> 'Annotation':
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
~~~

### Classes
~~~ python
class BaseClass:
	pass

class Foo(BaseClass):
    """Class Documentation"""
    
    # Class attribute (Class variable)
    # Count of instances
    count = 0
    
    @classmethod
    def get_count(cls):
        return cls.count
    
    def __init__(self, data=None):
        """Initialize method"""
        # Data attribute (Instance variable)
        self.data = data
        self.__class__.count++
    
    def get_data(self):
        """Instance method"""
        return self.data
    
    def set_data(self, data):
        """Instance method"""
        self.data = data
~~~
