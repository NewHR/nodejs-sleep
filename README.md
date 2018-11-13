# Implementation of sleep, usleep and msleep for Node.js

**Warning(!)**
These calls will block execution of all JavaScript by halting Node.js' event loop!

Don't use in express and server application only if you understand why you need it.

Mainly useful for debugging.


## Usage

### Sleep process for seconds
```
const sleep = require('./sleep').sleep;

for (let i=0; i<10; i++) {
  console.log(+new Date);
  sleep(1);
}

```

### Sleep process for miliseconds
```
const sleep = require('./sleep').msleep;

// Sleep 1000ms = 1s
for (let i=0; i<10; i++) {
  console.log(+new Date);
  sleep(1000);
}
```

### Sleep process for microseconds
```
const sleep = require('./sleep').usleep;

// Sleep 1000000ms = 1s
for (let i=0; i<10; i++) {
  console.log(+new Date);
  sleep(1e6);
}
```
