"use strict"

const assert = require("assert")
const nsGz = require("../fixture/gz/a.gz")
const nsJsGz = require("../fixture/gz/a.js.gz")

module.exports = () => {
  return import("../fixture/gz/a.mjs.gz")
    .then((nsMjsGz) => {
      [nsGz, nsJsGz, nsMjsGz]
        .forEach(assert.ok)
    })
}
