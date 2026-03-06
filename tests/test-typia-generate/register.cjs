const Module = require("module");
const ts = require("typescript");

// Workaround: ts-node v10.9.2 + TypeScript 5.9 source map assertion bug
// ts-node's transpileModule expects a single source map output, but TS 5.9
// emits multiple for files containing namespaces.
const originalAssertEqual = ts.Debug.assertEqual;
ts.Debug.assertEqual = function (a, b, msg) {
  if (typeof msg === "string" && msg.includes("Unexpected multiple")) {
    return;
  }
  return originalAssertEqual.apply(this, arguments);
};

require("ts-node").register({
  transpileOnly: true,
});

// Remap .js imports to .ts for workspace source resolution
const originalResolveFilename = Module._resolveFilename;
Module._resolveFilename = function (request, parent) {
  try {
    return originalResolveFilename.apply(this, arguments);
  } catch (e) {
    if (request.endsWith(".js")) {
      const args = Array.from(arguments);
      args[0] = request.replace(/\.js$/, ".ts");
      return originalResolveFilename.apply(this, args);
    }
    throw e;
  }
};
