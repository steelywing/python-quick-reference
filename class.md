---
layout: ~
title: Class
# permalink: /class/
weight: 1
---
### Attribute and method
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

### Descriptor
``` python
class SquareArea:
    def __get__(self, instance, owner):
        if not hasattr(instance, 'width') or instance.width is None:
            return None
        return instance.width ** 2
    def __set__(self, instance, value):
        instance.width = value ** 0.5
    def __delete__(self, instance):
        instance.width = None

class Square:
    area = SquareArea()
    def __init__(self, width=None):
        self.width = width

square = Square(4)
square.area     # => 16
square.area = 9
square.width    # => 3.0
```

### Getter, Setter and Deleter
``` python
class Foo:
    def __init__(self, data=None):
        self._data = data
    
    # Getter
    @property
    def data(self):
        """Property"""
        return self._data
    
    # Setter
    @data.setter
    def data(self, data):
        self._data = data
    
    # Deleter
    @data.deleter
    def data(self):
        del self._data
```

is same as

``` python
class Foo:
    def __init__(self, data=None):
        self._data = data
    
    # Getter
    def get_data(self):
        return self._data
    
    # Setter
    def set_data(self, data):
        self._data = data
    
    # Deleter
    def del_data(self):
        del self._data
    
    data = property(get_data, set_data, del_data, 'Property')
```

``` python
foo = Foo()
foo.data = 'FooBar'     # foo._data => 'FooBar'
foo.data                # => 'FooBar'
del foo.data            # '_data' not in foo => true
```

Read-only property

``` python
class Foo:
    def __init__(self, data=None):
        self._data = data
    
    @property
    def data(self):
        return self._data
```
