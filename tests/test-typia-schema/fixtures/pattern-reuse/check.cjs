const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const { createRequire } = require("node:module");
const { pathToFileURL } = require("node:url");
const path = require("node:path");
const { parse } = require("acorn");

const sku = "^[A-Z]{3}-[0-9]{4}$";
const NativeRegExp = RegExp;
let counts = new Map();
const countedRegExp = new Proxy(NativeRegExp, {
  apply(target, receiver, args) {
    counts.set(args[0], (counts.get(args[0]) || 0) + 1);
    return Reflect.apply(target, receiver, args);
  },
  construct(target, args) {
    counts.set(args[0], (counts.get(args[0]) || 0) + 1);
    return Reflect.construct(target, args);
  },
});

function check(api, early = false) {
  assert.equal(counts.get(sku), early ? 1 : undefined, "only an early call may construct a pattern before the module body");
  assert.equal(counts.get("["), undefined);
  const valid = { sku: "ABC-1234", title: "abc" };
  assert.equal(api.factory({ ...valid, sku: "bad" }), false);
  for (let i = 0; i < 5; ++i) {
    assert.equal(api.factory(valid), true);
    assert.equal(api.direct(valid), true);
    assert.equal(api.assertion(valid), valid);
    assert.equal(api.validation(valid).success, true);
    assert.equal(api.documented(valid), true);
    assert.equal(api.array([valid.sku]), true);
    assert.equal(api.keys({ [valid.sku]: 1 }), true);
    assert.equal(api.early(valid.sku), true);
    assert.equal(api.template(valid.sku), true);
    assert.equal(api.template("abc-1234"), false);
    assert.equal(api.templateUnion(valid.sku), true);
    assert.equal(api.templateUnion("ZBC-1234"), true);
    assert.equal(api.templateUnion("Abc-1234"), false);
    assert.equal(api.placeholder("sku:" + valid.sku), true);
    assert.equal(api.placeholder("sku:abc-1234"), false);
    assert.equal(api.placeholderUnion("left:" + valid.sku), true);
    assert.equal(api.placeholderUnion("right:" + valid.sku), true);
    assert.equal(api.placeholderUnion("left:abc-1234"), false);
    assert.equal(api.placeholderUnion("right:abc-1234"), false);
    assert.equal(api.backtracking("prefix" + valid.sku), true);
    assert.equal(api.backtracking("prefixabc-1234"), false);
    assert.equal(api.customTemplate("custom:allow"), true);
    assert.equal(api.customTemplate("custom:deny"), false);
    assert.equal(api.factory({ ...valid, sku: "ABC-123" }), false);
    assert.equal(api.direct({ ...valid, sku: "abc-1234" }), false);
    assert.equal(api.validation({ ...valid, title: "ab" }).success, false);
    assert.throws(() => api.assertion({ ...valid, title: "a".repeat(201) }));
    assert.equal(api.documented({ sku: "bad" }), false);
    assert.equal(api.array(["bad"]), false);
    assert.equal(api.keys({ bad: 1 }), false);
  }
  assert.equal(counts.get(sku), 1, "one pattern shared by direct, factory, JSDoc and nested checks");
  assert.equal(api.__typia_transform_pattern, 42);
  assert.equal(api.empty(""), true);
  assert.equal(api.empty("anything"), true);
  assert.equal(api.empty(1), false);
  for (const character of ["\\", "/", '"', "\n", "\r", "\u2028", "\u2029"])
    assert.equal(api.escaped(character), true, JSON.stringify(character));
  assert.equal(api.escaped("x"), false);
  assert.equal(api.invalid(1), false);
  assert.equal(api.invalidTemplate("other"), false);
  assert.equal(counts.get("["), undefined);
  for (let i = 0; i < 2; ++i) {
    assert.throws(() => api.invalid("x"), (error) => error.name === "SyntaxError");
    assert.throws(() => api.invalidTemplate("bad:x"), (error) => error.name === "SyntaxError");
  }
  assert.equal(counts.get("["), 4, "failed construction is retried at the original check site");
  for (let i = 0; i < 3; ++i) assert.equal(api.stateful("x"), true);
  for (let i = 0; i < 3; ++i) assert.equal(api.statefulTemplate("stateful:x"), true);
  assert.equal(api.statefulTemplate("stateful:y"), false);
  assert.equal(counts.get("^x$"), 7, "custom flags retain per-call construction");
  assert.equal(api.custom("allow"), true);
  assert.equal(api.custom("deny"), false);
  assert.equal(counts.get("^deny$"), undefined);
}

async function main() {
  const ecmaVersion = Number(process.argv[2].slice(2));
  for (const [file, sourceType] of [["index.cjs", "script"], ["index.mjs", "module"], ["index-cycle.mjs", "module"], ["cycle-runner.mjs", "module"]])
    parse(fs.readFileSync(path.resolve("out", file), "utf8"), { ecmaVersion, sourceType });
  const file = path.resolve("out/index.cjs");
  const module = { exports: {} };
  const context = vm.createContext({
    module, exports: module.exports, require: createRequire(file), RegExp: countedRegExp,
  });
  const code = fs.readFileSync(file, "utf8");
  vm.runInContext(code, context);
  check(module.exports);

  // Invoke the hoisted function before the rest of the module, as a circular
  // importer can, then execute its declaration body without resetting the slot.
  counts = new Map();
  const earlyModule = { exports: {} };
  const earlyContext = vm.createContext({
    module: earlyModule, exports: earlyModule.exports,
    require: createRequire(file), RegExp: countedRegExp,
  });
  vm.runInContext('if (!early("ABC-1234")) throw Error("early check failed");\n' + code, earlyContext);
  assert.equal(counts.get(sku), 1);
  assert.equal(earlyModule.exports.early("ABC-1234"), true);
  assert.equal(counts.get(sku), 1);

  counts = new Map();
  globalThis.RegExp = countedRegExp;
  try {
    const api = await import(pathToFileURL(path.resolve("out/index.mjs")).href);
    check(api);
    counts = new Map();
    const cyclic = await import(pathToFileURL(path.resolve("out/index-cycle.mjs")).href);
    check(cyclic, true);
  } finally {
    globalThis.RegExp = NativeRegExp;
  }
}
main().catch((error) => { console.error(error); process.exitCode = 1; });
