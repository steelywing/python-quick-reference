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
```
