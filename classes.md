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
    
    class_attr = 'Public class attribute'
    _class_attr = 'Non-public class attribute'
    __class_attr = 'Private class attribute'
    
    @classmethod
    def get_class_attr(cls):
        """Public class method"""
        return 'class_attr = ' + cls.class_attr
    
    def __init__(self, data=None):
        """Initialize method"""
        
        # Init base class
        super().__init__()
        
        if data is not None:
            self.set_data(data)
        
    def set_data(self, data):
        """Public instance method"""
        self.data = 'Public instance attribute = ' + str(data)
        self._data = 'Non-public instance attribute = ' + str(data)
        self.__data = 'Private instance attribute = ' + str(data)
    
    def get_data(self):
        """Public instance method"""
        return self.data
    
    def _get_data(self):
        """Non-public instance method"""
        return self._data
    
    def __get_data(self):
        """Private Instance method"""
        return self.__data

Foo.class_attr          # => 'Public class attribute'
Foo._class_attr         # => 'Non-public class attribute'
Foo._Foo__class_attr    # => 'Private class attribute'
Foo.get_class_attr()    # => 'class_attr = Public class attribute'

foo = Foo('FooBar')     # Create instance
foo.data                # => 'Public instance attribute = FooBar'
foo.get_data()          # => 'Public instance attribute = FooBar'
foo._data               # => 'Non-public instance attribute = FooBar'
foo._get_data()         # => 'Non-public instance attribute = FooBar'
foo._Foo__data          # => 'Private instance attribute = FooBar'
foo._Foo__get_data()    # => 'Private instance attribute = FooBar'
```
