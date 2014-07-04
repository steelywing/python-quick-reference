---
layout: page
title: Classes
# permalink: /classes/
weight: 1
---
### Classes
``` python
class BaseClass:
	pass

class Foo(BaseClass):
    """Class Documentation"""
    
    # Public class attribute
    # Count of instances
    count = 0
    
    # Non-public class attribute
    _count = 0
    
    # Private class attribute
    __count = 0
    
    @classmethod
    def get_count(cls):
        return cls.count
    
    def __init__(self, data=None):
        """Initialize method"""
        
        super().__init__()
        
        # Public instance attribute 
        self.data = data
        
        # Non-public instance attribute
        self._data = data
        
        # Private instance attribute
        self.__data = data

        self.__class__.count += 1
        self.__class__.__count = self.__class__._count = self.__class__.count
    
    # Public instance method
    def get_data(self):
        """Instance method"""
        return self.__data
    
    # Private instance method
    def __set_data(self, data):
        """Instance method"""
        self.__data = self._date = self.data = data

# Create instance
foobar = Foo('FooBar')

(
    1 ==
    Foo.count == 
    Foo._count ==
    Foo._Foo__count ==
    Foo.get_count() == 
    foobar.get_count()
) # True

(
    'FooBar' ==
    foobar.data ==
    foobar._data ==
    foobar._Foo__data ==
    foobar.get_data()
) # True
```

foobar._Foo__set_data('New Data')
foobar.data # => 'New Data'
