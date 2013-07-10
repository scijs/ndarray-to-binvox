ndarray-to-binvox
=================
Exports an [ndarray](https://github.com/mikolalysenko/ndarray) to a [binvox](http://www.cs.princeton.edu/~min/binvox/) stream.


## Example

The following example dumps a binvox file to standard out.

```javascript
var ndarray = require("ndarray")

var x = ndarray(new Uint8Array(8), [2,2,2])
x.set(0, 0, 0, 1)

require("ndarray-to-binvox")(x).pipe(process.stdout)
```

## Install

    npm install ndarray-to-binvox

## API

### `require("ndarray-to-binvox")(array[, translate, scale])`
Dumps an ndarray to a binvox file.

* `array` is a 3D ndarray
* `translate` is an optional translation parameter.  (Default [0,0,0])
* `scale` is an optional scaling parameter. (Default 1.0)

**Returns** A stream encoding the binvox file.

## Credits
(c) 2013 Mikola Lysenko. MIT License