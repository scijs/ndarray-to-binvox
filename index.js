"use strict"

var array2rle = require("rle-ndarray").array2rle
var saveBinvox = require("rle-save-binvox")

function toBinvox(array, translate, scale) {
  var volume = array2rle(undefined, array)
  return saveBinvox(volume, undefined, translate, scale)
}

module.exports = toBinvox