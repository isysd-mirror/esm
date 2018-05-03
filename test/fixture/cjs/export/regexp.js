"use strict"

const names = [
  "compile",
  "exec",
  "test"
]

module.exports = names.reduce((regexp, name) =>
  Object.defineProperty(regexp, name, {
    __proto__: null,
    configurable: true,
    enumerable: true,
    value: regexp[name],
    writable: true
  })
, /a/)
