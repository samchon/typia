package main

import (
  "bytes"
  "os"
  "path/filepath"
  "runtime"
  "sort"
  "strings"
  "testing"
)

// ttscTypiaTestTypecheck requires a fixture project to be free of TypeScript
// errors, which is what makes an `@ts-expect-error` in a fixture load-bearing.
//
// It runs the build command in no-emit mode with the rewrite disabled, so the
// only diagnostics it can report are the program's own. It used to shell out to
// `pnpm exec ttsc --noEmit -p tsconfig.json`, which reported nothing and exited
// 0 for a fixture under `.tmp-ttsc-typia-tests` — `const value: number = "bad"`
// passed — so every caller was asserting against an oracle that could not fail.
// `runBuild` is the same program these tests already drive, and
// build_reports_semantic_diagnostics_test.go pins that it surfaces semantic
// diagnostics as status 2.
func ttscTypiaTestTypecheck(t *testing.T, project string) {
  t.Helper()
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runBuild([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--noEmit",
      "--rewrite-mode", "none",
    })
  })
  if code != 0 {
    t.Fatalf("fixture typecheck failed: code=%d\nstdout=%s\nstderr=%s", code, out, errText)
  }
}

// ttscTypiaTestWriteFactoryStub installs a typia whose declaration file sits at
// the path the transformer's identity test accepts, so a fixture that also
// carries an ambient or augmenting `declare module "typia"` differs from a
// plain one only in that declaration.
func ttscTypiaTestWriteFactoryStub(t *testing.T, project string) {
  t.Helper()
  root := filepath.Join(project, "node_modules", "typia")
  lib := filepath.Join(root, "lib")
  if err := os.MkdirAll(lib, 0o755); err != nil {
    t.Fatalf("mkdir typia stub: %v", err)
  }
  files := map[string]string{
    "package.json": `{
  "name": "typia",
  "version": "0.0.0-test",
  "main": "./lib/module.js",
  "types": "./lib/module.d.ts",
  "exports": {
    ".": {
      "types": "./lib/module.d.ts",
      "default": "./lib/module.js"
    },
    "./lib/transform": "./lib/transform.js"
  },
  "ttsc": {
    "plugin": { "transform": "typia/lib/transform" }
  }
}
`,
    filepath.Join("lib", "module.d.ts"): `declare namespace typia {
  function createAssert<T>(): (input: unknown) => T;
  function createIs<T>(): (input: unknown) => input is T;
}
declare const typia: {
  createAssert: typeof typia.createAssert;
  createIs: typeof typia.createIs;
};
export default typia;
export declare function createAssert<T>(): (input: unknown) => T;
export declare function createIs<T>(): (input: unknown) => input is T;
`,
    filepath.Join("lib", "module.js"):      "exports.createAssert = () => () => undefined;\nexports.createIs = () => () => false;\n",
    filepath.Join("lib", "transform.js"):   "module.exports = {};\n",
    filepath.Join("lib", "transform.d.ts"): "export {};\n",
  }
  for name, body := range files {
    if err := os.WriteFile(filepath.Join(root, name), []byte(body), 0o644); err != nil {
      t.Fatalf("write typia stub %s: %v", name, err)
    }
  }
}

func ttscTypiaTestRepoRoot(t *testing.T) string {
  t.Helper()
  _, file, _, ok := runtime.Caller(0)
  if !ok {
    t.Fatal("runtime.Caller failed")
  }
  dir := filepath.Dir(file)
  for {
    if _, err := os.Stat(filepath.Join(dir, "pnpm-workspace.yaml")); err == nil {
      return dir
    }
    next := filepath.Dir(dir)
    if next == dir {
      t.Fatalf("repo root not found from %s", file)
    }
    dir = next
  }
}

func ttscTypiaTestCapture(run func() int) (string, string, int) {
  var out bytes.Buffer
  var err bytes.Buffer
  oldStdout := stdout
  oldStderr := stderr
  stdout = &out
  stderr = &err
  defer func() {
    stdout = oldStdout
    stderr = oldStderr
  }()
  code := run()
  return out.String(), err.String(), code
}

func ttscTypiaTestWriteCommonRuntimeStubs(t *testing.T, runtimeDir string) {
  t.Helper()
  files := map[string]string{
    "typia-stub.cjs":                   "module.exports = {};\n",
    "validate-report-stub.cjs":         ttscTypiaTestValidateReportStub,
    "standard-schema-stub.cjs":         ttscTypiaTestStandardSchemaStub,
    "assert-guard-stub.cjs":            ttscTypiaTestAssertGuardStub,
    "functional-error-stub.cjs":        ttscTypiaTestFunctionalErrorStub,
    "access-expression-stub.cjs":       ttscTypiaTestAccessExpressionStub,
    "string-length-stub.cjs":           ttscTypiaTestStringLengthStub,
    "notation-stub.cjs":                ttscTypiaTestNotationStub,
    "json-stringify-array-stub.cjs":    ttscTypiaTestJsonStringifyArrayStub,
    "json-stringify-property-stub.cjs": ttscTypiaTestJsonStringifyPropertyStub,
    "json-stringify-element-stub.cjs":  ttscTypiaTestJsonStringifyElementStub,
    "json-stringify-tail-stub.cjs":     ttscTypiaTestJsonStringifyTailStub,
    "random-string-stub.cjs":           ttscTypiaTestRandomStringStub,
  }
  for name, content := range files {
    if err := os.WriteFile(filepath.Join(runtimeDir, name), []byte(content), 0o644); err != nil {
      t.Fatalf("write %s: %v", name, err)
    }
  }
}

func ttscTypiaTestRewriteCommonJS(t *testing.T, js string) string {
  t.Helper()
  runtimeJS := strings.ReplaceAll(js, `require("typia")`, `require("./typia-stub.cjs")`)
  runtimeJS = strings.ReplaceAll(runtimeJS, `require("typia/lib/internal/_validateReport")`, `require("./validate-report-stub.cjs")`)
  runtimeJS = strings.ReplaceAll(runtimeJS, `require("typia/lib/internal/_createStandardSchema")`, `require("./standard-schema-stub.cjs")`)
  runtimeJS = strings.ReplaceAll(runtimeJS, `require("typia/lib/internal/_assertGuard")`, `require("./assert-guard-stub.cjs")`)
  runtimeJS = strings.ReplaceAll(runtimeJS, `require("typia/lib/internal/_functionalTypeGuardErrorFactory")`, `require("./functional-error-stub.cjs")`)
  runtimeJS = strings.ReplaceAll(runtimeJS, `require("typia/lib/internal/_accessExpressionAsString")`, `require("./access-expression-stub.cjs")`)
  runtimeJS = strings.ReplaceAll(runtimeJS, `require("typia/lib/internal/_stringLength")`, `require("./string-length-stub.cjs")`)
  runtimeJS = strings.ReplaceAll(runtimeJS, `require("typia/lib/internal/_jsonStringifyArray")`, `require("./json-stringify-array-stub.cjs")`)
  runtimeJS = strings.ReplaceAll(runtimeJS, `require("typia/lib/internal/_jsonStringifyProperty")`, `require("./json-stringify-property-stub.cjs")`)
  runtimeJS = strings.ReplaceAll(runtimeJS, `require("typia/lib/internal/_jsonStringifyElement")`, `require("./json-stringify-element-stub.cjs")`)
  runtimeJS = strings.ReplaceAll(runtimeJS, `require("typia/lib/internal/_jsonStringifyTail")`, `require("./json-stringify-tail-stub.cjs")`)
  runtimeJS = strings.ReplaceAll(runtimeJS, `require("typia/lib/internal/_randomString")`, `require("./random-string-stub.cjs")`)
  for _, helper := range []string{"_notationAssign", "_notationCamel", "_notationKebab", "_notationKeyCollision", "_notationPascal", "_notationSnake"} {
    runtimeJS = strings.ReplaceAll(
      runtimeJS,
      `require("typia/lib/internal/`+helper+`")`,
      `require("./notation-stub.cjs")`,
    )
  }
  for _, needle := range []string{`require("typia")`, `require('typia')`, `from "typia"`, `from 'typia'`, `typia/lib/internal/`} {
    if !strings.Contains(runtimeJS, needle) {
      continue
    }
    // Name the modules that are actually unmapped. Reporting only the needle
    // makes every new internal helper look like the same failure and sends the
    // reader hunting through the emit for it.
    if needle == `typia/lib/internal/` {
      unresolved := map[string]bool{}
      for _, part := range strings.Split(runtimeJS, needle)[1:] {
        end := strings.IndexAny(part, "\"')")
        if end < 0 {
          end = len(part)
        }
        unresolved[part[:end]] = true
      }
      names := make([]string, 0, len(unresolved))
      for name := range unresolved {
        names = append(names, name)
      }
      sort.Strings(names)
      t.Fatalf("runtime module has no stub for typia internal helpers: %s", strings.Join(names, ", "))
    }
    t.Fatalf("runtime module still contains unresolved typia import %q", needle)
  }
  return runtimeJS
}

const ttscTypiaTestValidateReportStub = `module.exports._validateReport = (array) => {
  const isAncestor = (ancestor, descendant) =>
    descendant === ancestor ||
    descendant.startsWith(ancestor + ".") ||
    descendant.startsWith(ancestor + "[");
  const reportable = (path) => {
    if (array.length === 0) return true;
    const last = array[array.length - 1].path;
    return !isAncestor(path, last) && !isAncestor(last, path);
  };
  return (exceptable, error) => {
    if (exceptable && reportable(error.path)) {
      if (error.value === undefined && (error.description === undefined || error.description === null)) {
        error.description = [
          "The value at this path is " + String.fromCharCode(96) + "undefined" + String.fromCharCode(96) + ".",
          "",
          "Please fill the " + String.fromCharCode(96) + error.expected + String.fromCharCode(96) + " typed value next time.",
        ].join("\n");
      }
      array.push(error);
    }
    return false;
  };
};
`

const ttscTypiaTestStandardSchemaStub = `module.exports._createStandardSchema = (validate) => validate;
`

// A double for packages/typia/src/internal/_assertGuard.ts that takes the same
// branches: `exceptionable === true` and a callable-factory requirement. The
// generated function's second parameter is caller-supplied, so a pointwise
// hand-off (`rows.map(assertUser)`) fills it with the element index; testing
// truthiness here would let this stub report `factory is not a function` for a
// case the shipped helper handles. The fallback error is deliberately not a
// TypeGuardError — a stub cannot import typia — so cases assert `props`
// members rather than the shipped message format.
const ttscTypiaTestAssertGuardStub = `module.exports._assertGuard = (exceptionable, props, factory) => {
  if (exceptionable === true) {
    const error =
      typeof factory === "function"
        ? factory(props)
        : Object.assign(new Error(props.expected), props);
    throw error;
  }
  return false;
};
`

const ttscTypiaTestFunctionalErrorStub = `module.exports._functionalTypeGuardErrorFactory = (props) =>
  Object.assign(new Error(props.expected), props);
`

// The two JSON stringify stubs mirror packages/typia/src/internal exactly. They
// are runtime doubles for the emit these tests execute; the shipped helpers
// themselves are exercised by the TypeScript suites against the real package.
const ttscTypiaTestJsonStringifyArrayStub = `module.exports._jsonStringifyArray = (elements, mapper) => {
  const length = Math.min(
    Math.max(Math.trunc(elements.length) || 0, 0),
    Number.MAX_SAFE_INTEGER,
  );
  let output = "";
  for (let i = 0; i < length; ++i) {
    const elem = elements[i];
    const text = elem === undefined ? undefined : mapper(elem, i);
    output += (i === 0 ? "" : ",") + (text === undefined ? "null" : text);
  }
  return output;
};
`

const ttscTypiaTestJsonStringifyPropertyStub = `module.exports._jsonStringifyProperty = (head, text, tail) =>
  text === undefined ? "" : head + text + tail;
`

const ttscTypiaTestJsonStringifyElementStub = `module.exports._jsonStringifyElement = (text) =>
  text === undefined ? "null" : text;
`

// Deterministic rather than random: these runtimes assert observable behavior
// of the emitted validators, so a generated string only has to satisfy the
// declared bounds, and a stable one keeps a failure reproducible.
const ttscTypiaTestJsonStringifyTailStub = `module.exports._jsonStringifyTail = (str) =>
  str[str.length - 1] === "," ? str.substring(0, str.length - 1) : str;
`

const ttscTypiaTestRandomStringStub = `module.exports._randomString = (props) => {
  const minimum =
    props.minLength !== undefined
      ? props.minLength
      : Math.min(props.maxLength !== undefined ? props.maxLength : 5, 5);
  const maximum = props.maxLength !== undefined ? props.maxLength : minimum + 5;
  const length = Math.max(minimum, Math.min(minimum, maximum));
  return "a".repeat(length);
};
`

// A double for packages/typia/src/internal/_stringLength.ts: the string
// iterator walks code points, so a surrogate pair counts once, which is what
// `MinLength` and `MaxLength` now mean.
const ttscTypiaTestStringLengthStub = `module.exports._stringLength = (value) => {
  let count = 0;
  for (const _ of value) ++count;
  return count;
};
`

const ttscTypiaTestAccessExpressionStub = `const reserved = new Set([
  "break",
  "case",
  "catch",
  "class",
  "const",
  "continue",
  "debugger",
  "default",
  "delete",
  "do",
  "else",
  "enum",
  "export",
  "extends",
  "false",
  "finally",
  "for",
  "function",
  "if",
  "import",
  "in",
  "instanceof",
  "new",
  "null",
  "return",
  "super",
  "switch",
  "this",
  "throw",
  "true",
  "try",
  "typeof",
  "var",
  "void",
  "while",
  "with",
]);

module.exports._accessExpressionAsString = (key) => {
  return reserved.has(key) === false && /^[A-Za-z_$][0-9A-Za-z_$]*$/.test(key)
    ? "." + key
    : "[" + JSON.stringify(key) + "]";
};
`

// ttscTypiaTestNotationStub stands in for typia/lib/internal/_notation*, which
// the emitted converter requires for dynamic (index-signature) keys.
//
// These tests assert that the statically emitted key and the runtime helper
// agree, so this stub is that assertion's oracle and has to stay a faithful
// transcription of packages/typia/src/internal/_notation{Camel,Pascal,Snake,
// Kebab}.ts and private/__notationRename.ts — an approximation turns "emit ==
// runtime" into "emit == whatever this file happens to say". Keep it a direct
// transcription: same routing on underscore presence (not on segment count),
// the same CamelizeSnakeString/PascalizeSnakeString recursions, and the same
// per-segment case-boundary walk in snake. It deliberately uses string
// concatenation rather than template literals because it is embedded in a Go
// raw string literal, which is backtick-delimited.
const ttscTypiaTestNotationStub = `const __notationRename = (props) => (str) => {
  let prefix = "";
  while (str.startsWith("_")) {
    prefix += "_";
    str = str.substring(1);
  }
  if (str.length === 0) return prefix;
  return prefix + (str.includes("_") ? props.snake(str) : props.plain(str));
};

const _notationCamelSnake = (str) => {
  while (str.startsWith("_")) str = str.substring(1);
  if (str.length === 0) return "";
  const index = str.indexOf("_");
  if (index < 0) return str.toLowerCase();
  const middle = str[index + 1];
  if (middle === undefined) return str.toLowerCase();
  return middle === "_"
    ? _notationCamelSnake(str.substring(0, index) + "_" + str.substring(index + 2))
    : str.substring(0, index).toLowerCase() +
      middle.toUpperCase() +
      _notationCamelSnake(str.substring(index + 2));
};

const _notationPascalSnake = (str) => {
  while (str.startsWith("_")) str = str.substring(1);
  if (str.length === 0) return "";
  const index = str.indexOf("_");
  return index < 0
    ? str[0].toUpperCase() + str.substring(1).toLowerCase()
    : str[0].toUpperCase() +
      str.substring(1, index).toLowerCase() +
      _notationPascalSnake(str.substring(index + 1));
};

const _notationSnakeWord = (str) => {
  const indexes = [];
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    if (65 <= code && code <= 90) indexes.push(i);
  }
  for (let i = indexes.length - 1; i > 0; --i)
    if (indexes[i] - indexes[i - 1] === 1) indexes.splice(i, 1);
  if (indexes.length !== 0 && indexes[0] === 0) indexes.splice(0, 1);
  if (indexes.length === 0) return str.toLowerCase();
  let ret = "";
  for (let i = 0; i < indexes.length; i++) {
    ret += str.substring(i === 0 ? 0 : indexes[i - 1], indexes[i]).toLowerCase();
    ret += "_";
  }
  ret += str.substring(indexes[indexes.length - 1]).toLowerCase();
  return ret;
};

module.exports._notationCamel = __notationRename({
  plain: (str) =>
    str === str.toUpperCase()
      ? str.toLowerCase()
      : str[0].toLowerCase() + str.substring(1),
  snake: _notationCamelSnake,
});
module.exports._notationPascal = __notationRename({
  plain: (str) => str[0].toUpperCase() + str.substring(1),
  snake: _notationPascalSnake,
});
module.exports._notationSnake = (str) => {
  if (str.length === 0) return str;
  let prefix = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "_") prefix += "_";
    else break;
  }
  if (prefix.length !== 0) str = str.substring(prefix.length);
  return prefix + str.split("_").map(_notationSnakeWord).join("_");
};
module.exports._notationKebab = (str) => {
  let snaked = module.exports._notationSnake(str);
  let prefix = "";
  while (snaked.startsWith("_")) {
    prefix += "_";
    snaked = snaked.substring(1);
  }
  return prefix + snaked.replaceAll("_", "-");
};
module.exports._notationAssign = (output, sources, source, value, rename) => {
  const destination = rename(source);
  if (Object.hasOwn(output, destination))
    module.exports._notationKeyCollision(sources[destination], source, destination);
  Object.defineProperty(output, destination, {
    configurable: true,
    enumerable: true,
    value,
    writable: true,
  });
  sources[destination] = source;
};
module.exports._notationKeyCollision = (first, second, destination) => {
  throw new Error(
    "typia.notations cannot rename both " + JSON.stringify(first) +
    " and " + JSON.stringify(second) + " to " + JSON.stringify(destination) + ".",
  );
};
`
