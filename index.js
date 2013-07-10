"use strict"

var array2rle = require("rle-ndarray").array2rle
var saveBinvox = require("rle-save-binvox")

function toBinvox(array, translate, scale) {
  var volume = array2rle(undefined, array)
  return saveBinvox(volume, [[0,0,0], [array.shape[0]+1, array.shape[1]+1, array.shape[2]+1]], translate, scale)
}

module.exports = toBinvox