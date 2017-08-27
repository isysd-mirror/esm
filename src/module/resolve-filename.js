// Based on Node's `Module._resolveFilename` method.
// Copyright Node.js contributors. Released under MIT license:
// https://github.com/nodejs/node/blob/master/lib/module.js

import builtinModules from "../builtin-modules.js"
import errors from "../errors.js"
import findPath from "./find-path.js"
import resolveLookupPaths from "./resolve-lookup-paths.js"

function resolveFilename(id, parent, isMain, skipGlobalPaths) {
  if (typeof id !== "string") {
    throw new errors.TypeError("ERR_INVALID_ARG_TYPE", "id", "string")
  }

  if (id in builtinModules) {
    return id
  }

  const paths = resolveLookupPaths(id, parent, skipGlobalPaths)
  const filePath = findPath(id, parent, paths, isMain)

  if (! filePath) {
    throw new errors.Error("ERR_MISSING_MODULE", id)
  }

  return filePath
}

export default resolveFilename
