---
layout: page
title: Threading
# permalink: /threading/
weight: 1
---
## Simple Thread
``` python
import time
import threading

def timer(name, times, interval=1):
    for i in range(times):
        time.sleep(interval)
        print(name, i)

threading.Thread(target=timer, args=('A', 2)).start()
threading.Thread(target=timer, args=('B', 4)).start()
```

## Thread (daemon)
``` python
import time
import threading

class Timer(threading.Thread):
    def __init__(self, id):
        super().__init__(
            name='T' + str(id), 
            # program exits even daemon threads are alive
            daemon=True
        )
        self.id = id
    def run(self):
        while True:
            time.sleep(1)
            indent = self.id * 4
            print('{:>{}}'.format(self.name, indent))

for i in range(1, 4):
    Timer(i).start()

input('press Enter to exit\n')
```

## Thread (non-daemon)
``` python
import time
import threading

class Timer(threading.Thread):
    def __init__(self, id, times):
        # program exits when all non-daemon threads are finish
        super().__init__(name='T' + str(id), daemon=False)
        self.id = id
        self.times = times
    def run(self):
        while self.times > 0:
            self.times -= 1
            time.sleep(1)
            indent = self.id * 8
            print('{:>{}}'.format(
                self.name + ':' + str(self.times), 
                indent
            ))

for i in range(1, 5):
    Timer(i, i).start()
print('program exits when all non-daemon threads are finish')

# program exits when all non-daemon threads are finish
#     T1:0
#             T2:1
#                     T3:2
#                             T4:3
#             T2:0
#                     T3:1
#                             T4:2
#                     T3:0
#                             T4:1
#                             T4:0
```

## Semaphore
``` python
import threading
import time

class Timer(threading.Thread):
    def __init__(self, id, semaphore, interval=1):
        super().__init__(name='T' + str(id))
        self.id = id
        self.semaphore = semaphore
        self.interval = interval
        self.end = False
    def run(self):
        with self.semaphore:
            while not self.end:
                time.sleep(self.interval)
                print('{:>{}}'.format(self.name, self.id * 4))

# max 2 threads run parallel
semaphore = threading.Semaphore(2)
threads = []
for i in range(1, 5):
    threads.append(
        Timer(i, semaphore)
    )

for thread in threads:
    thread.start()

for thread in threads:
    input('press enter to end thread {}\n'.format(thread.name))
    thread.end = True
```
