package main

import (
  "fmt"
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestJsonStringifyContextualUndefinedTransform pins every json stringify family
// against ECMAScript JSON.stringify wherever a child serialization evaluates to
// JavaScript undefined (#2253).
//
// A child can serialize to undefined while the value itself is present: `any`
// and `unknown` delegate to JSON.stringify, which answers undefined for a
// function, a symbol, and a toJSON that returns undefined; a property typed
// `undefined` has nothing to serialize; and an array hole reads as undefined at
// any element type. The object joiner decided omission from a test on the input
// and the array joiner joined the mapped results, so those children concatenated
// the token `undefined` into a static property, produced `{"k":undefined}` for a
// dynamic one, and left an empty array slot - text that fails JSON.parse, which
// the is/assert/validate families then reported as success.
//
//  1. Transform one fixture that exports the direct and factory forms of
//     stringify, isStringify, assertStringify, and validateStringify for `any`
//     and `unknown` in static, optional, dynamic, array, tuple, rest, and nested
//     positions, plus the toJSON, sparse-array, and typed controls beside them.
//  2. Execute the emitted serializers in Node and compare every success payload
//     with native JSON.stringify of the same input, parsing both so the
//     comparison is contextual equivalence rather than the current emit.
//  3. Require the guarded families to reject each one-axis invalid twin, run the
//     whole matrix again under `undefined: false`, and report the exact executed
//     case count so a runner that silently skipped cells cannot pass as green.
func TestJsonStringifyContextualUndefinedTransform(t *testing.T) {
  for _, row := range jsonStringifyContextualUndefinedRows() {
    t.Run(row.name, func(t *testing.T) {
      project := jsonStringifyContextualUndefinedProject(t)
      js := jsonStringifyContextualUndefinedTransform(t, project, row.payload())
      jsonStringifyContextualUndefinedRunRuntime(t, project, js, row)
    })
  }
}

type jsonStringifyContextualUndefinedRow struct {
  name string
  // config is the JSON fragment appended to typia's resolved plugin entry.
  config string
  // strict marks the row where `undefined: false` makes the checkers reject an
  // explicitly undefined optional property. The serialized text of everything
  // the checkers still accept must not move.
  strict bool
}

func (row jsonStringifyContextualUndefinedRow) payload() string {
  return `[{"config":{"transform":"typia/lib/transform"` + row.config + `},"name":"typia","stage":"transform"}]`
}

func jsonStringifyContextualUndefinedRows() []jsonStringifyContextualUndefinedRow {
  return []jsonStringifyContextualUndefinedRow{
    {name: "default options", config: ``, strict: false},
    {name: "undefined false", config: `,"undefined":false`, strict: true},
  }
}

// jsonStringifyContextualUndefinedTypes names every fixture type the runner
// drives. The Go side owns the list so the exported symbol names and the
// runner's lookup keys cannot drift apart.
var jsonStringifyContextualUndefinedTypes = []struct{ Key, TS string }{
  {"anyProperty", "IAnyProperty"},
  {"unknownProperty", "IUnknownProperty"},
  {"undefinedProperty", "IUndefinedProperty"},
  {"optionalAny", "IOptionalAny"},
  {"recordAny", "IRecordAny"},
  {"recordUnknown", "IRecordUnknown"},
  {"mixedRecord", "IMixedRecord"},
  {"anyArray", "IAnyArray"},
  {"unknownArray", "IUnknownArray"},
  {"numberArray", "INumberArray"},
  {"tuple", "ITuple"},
  {"restTuple", "IRestTuple"},
  {"nested", "INested"},
  {"jsonableProperty", "IJsonableProperty"},
  {"maybeJsonableProperty", "IMaybeJsonableProperty"},
}

func jsonStringifyContextualUndefinedProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "json-stringify-contextual-undefined-")
  if err != nil {
    t.Fatalf("create temp fixture: %v", err)
  }
  t.Cleanup(func() {
    _ = os.RemoveAll(dir)
  })
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(jsonStringifyContextualUndefinedTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(jsonStringifyContextualUndefinedSource()), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func jsonStringifyContextualUndefinedTransform(t *testing.T, project string, payload string) string {
  t.Helper()
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
      "--plugins-json", payload,
    })
  })
  if code != 0 {
    t.Fatalf("json stringify contextual-undefined transform failed: code=%d stderr=\n%s", code, errText)
  }
  return out
}

func jsonStringifyContextualUndefinedRunRuntime(t *testing.T, project string, js string, row jsonStringifyContextualUndefinedRow) {
  t.Helper()
  node, err := exec.LookPath("node")
  if err != nil {
    t.Skip("node executable not found")
  }
  runtimeDir := filepath.Join(project, "runtime-"+strings.ReplaceAll(row.name, " ", "-"))
  if err := os.MkdirAll(runtimeDir, 0o755); err != nil {
    t.Fatalf("mkdir runtime dir: %v", err)
  }
  ttscTypiaTestWriteCommonRuntimeStubs(t, runtimeDir)
  stubs := map[string]string{
    "json-stringify-number-stub.cjs":  jsonStringifyContextualUndefinedNumberStub,
    "json-stringify-string-stub.cjs":  jsonStringifyContextualUndefinedStringStub,
    "json-stringify-tail-stub.cjs":    jsonStringifyContextualUndefinedTailStub,
    "json-stringify-rest-stub.cjs":    jsonStringifyContextualUndefinedRestStub,
    "throw-type-guard-error-stub.cjs": jsonStringifyContextualUndefinedThrowStub,
  }
  for name, content := range stubs {
    if err := os.WriteFile(filepath.Join(runtimeDir, name), []byte(content), 0o644); err != nil {
      t.Fatalf("write %s: %v", name, err)
    }
  }
  runtimeJS := js
  for from, to := range map[string]string{
    `require("typia/lib/internal/_jsonStringifyNumber")`: `require("./json-stringify-number-stub.cjs")`,
    `require("typia/lib/internal/_jsonStringifyString")`: `require("./json-stringify-string-stub.cjs")`,
    `require("typia/lib/internal/_jsonStringifyTail")`:   `require("./json-stringify-tail-stub.cjs")`,
    `require("typia/lib/internal/_jsonStringifyRest")`:   `require("./json-stringify-rest-stub.cjs")`,
    `require("typia/lib/internal/_throwTypeGuardError")`: `require("./throw-type-guard-error-stub.cjs")`,
  } {
    runtimeJS = strings.ReplaceAll(runtimeJS, from, to)
  }
  runtimeJS = ttscTypiaTestRewriteCommonJS(t, runtimeJS)
  if err := os.WriteFile(filepath.Join(runtimeDir, "main.cjs"), []byte(runtimeJS), 0o644); err != nil {
    t.Fatalf("write runtime module: %v", err)
  }
  runner := filepath.Join(runtimeDir, "run.cjs")
  prelude := fmt.Sprintf("const STRICT_UNDEFINED = %v;\n", row.strict)
  if err := os.WriteFile(runner, []byte(prelude+jsonStringifyContextualUndefinedRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("json stringify contextual-undefined runtime failed (%s): %v\n%s", row.name, err, output)
  }
  // The count is asserted rather than the exit code so a row that silently stops
  // running cannot pass as a row that ran and agreed with the oracle. 59 value
  // rows x 6 executions each: direct and factory forms across stringify,
  // isStringify, assertStringify, and validateStringify, minus the two guarded
  // entry points for rows whose contract is rejection.
  const expected = "RAN 354 CASES"
  if !strings.Contains(string(output), expected) {
    t.Fatalf("json stringify contextual-undefined runner did not report %q (%s); got:\n%s", expected, row.name, output)
  }
}

const jsonStringifyContextualUndefinedTSConfig = `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "bundler",
    "ignoreDeprecations": "6.0",
    "types": ["*"],
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
`

const jsonStringifyContextualUndefinedDeclarations = `import typia from "typia";

interface IAnyProperty {
  keep: number;
  value: any;
}
interface IUnknownProperty {
  keep: number;
  value: unknown;
}
interface IUndefinedProperty {
  keep: number;
  value: undefined;
}
interface IOptionalAny {
  keep: number;
  value?: any;
}
type IRecordAny = Record<string, any>;
type IRecordUnknown = Record<string, unknown>;
interface IMixedRecord {
  keep: number;
  [key: string]: any;
}
type IAnyArray = any[];
type IUnknownArray = unknown[];
type INumberArray = number[];
type ITuple = [any, unknown, number];
type IRestTuple = [number, ...any[]];
interface INested {
  outer: { inner: any }[];
}
interface IJsonable {
  toJSON(): string;
}
interface IMaybeJsonable {
  toJSON(): string | undefined;
}
interface IJsonableProperty {
  keep: number;
  value: IJsonable;
}
interface IMaybeJsonableProperty {
  keep: number;
  value: IMaybeJsonable;
}

`

// jsonStringifyContextualUndefinedSource emits the direct and factory form of
// all four stringify families for every fixture type, so one transform covers
// the whole family x form axis of the matrix.
func jsonStringifyContextualUndefinedSource() string {
  var builder strings.Builder
  builder.WriteString(jsonStringifyContextualUndefinedDeclarations)
  for _, entry := range jsonStringifyContextualUndefinedTypes {
    for _, family := range []string{"stringify", "isStringify", "assertStringify", "validateStringify"} {
      creator := "create" + strings.ToUpper(family[:1]) + family[1:]
      fmt.Fprintf(
        &builder,
        "export const factory_%s_%s = typia.json.%s<%s>();\n",
        family, entry.Key, creator, entry.TS,
      )
      fmt.Fprintf(
        &builder,
        "export const direct_%s_%s = (input: %s) => typia.json.%s<%s>(input);\n",
        family, entry.Key, entry.TS, family, entry.TS,
      )
    }
    builder.WriteString("\n")
  }
  return builder.String()
}

const jsonStringifyContextualUndefinedNumberStub = `module.exports._jsonStringifyNumber = (value) => (Number.isFinite(value) ? value : null);
`

const jsonStringifyContextualUndefinedStringStub = `module.exports._jsonStringifyString = (value) => JSON.stringify(value);
`

// The tail and rest stubs are transcriptions of
// packages/typia/src/internal/_jsonStringifyTail.ts and _jsonStringifyRest.ts.
const jsonStringifyContextualUndefinedTailStub = `module.exports._jsonStringifyTail = (str) =>
  str[str.length - 1] === "," ? str.substring(0, str.length - 1) : str;
`

const jsonStringifyContextualUndefinedRestStub = `module.exports._jsonStringifyRest = (str) =>
  str.length === 2 ? "" : "," + str.substring(1, str.length - 1);
`

const jsonStringifyContextualUndefinedThrowStub = `module.exports._throwTypeGuardError = (props) => {
  const error = new Error(props.expected);
  Object.assign(error, props);
  throw error;
};
`

const jsonStringifyContextualUndefinedRunner = `const mod = require("./main.cjs");

// deepEqual compares two JSON.parse results. Objects are compared by key set and
// value, never by text, because typia is free to order the properties it emits
// differently from ECMAScript while still producing an equivalent document.
const deepEqual = (x, y) => {
  if (x === y) return true;
  if (x === null || y === null) return false;
  if (typeof x !== "object" || typeof y !== "object") return false;
  if (Array.isArray(x) !== Array.isArray(y)) return false;
  if (Array.isArray(x)) {
    if (x.length !== y.length) return false;
    return x.every((v, i) => deepEqual(v, y[i]));
  }
  const xk = Object.keys(x).sort();
  const yk = Object.keys(y).sort();
  if (xk.length !== yk.length) return false;
  if (!xk.every((k, i) => k === yk[i])) return false;
  return xk.every((k) => deepEqual(x[k], y[k]));
};

const sparse = (assign) => {
  const array = [];
  assign(array);
  return array;
};

const CASES = [
  // Static any property: every value whose serialization is undefined must
  // vanish exactly the way ECMAScript drops it, and the valid neighbors beside
  // it must survive.
  ["anyProperty", "function value", () => ({ keep: 1, value: () => 0 })],
  ["anyProperty", "symbol value", () => ({ keep: 1, value: Symbol("s") })],
  ["anyProperty", "undefined value", () => ({ keep: 1, value: undefined })],
  ["anyProperty", "null value", () => ({ keep: 1, value: null })],
  ["anyProperty", "number value", () => ({ keep: 1, value: 2 })],
  ["anyProperty", "nested function member", () => ({
    keep: 1,
    value: { a: 1, b: () => 0, c: Symbol("x"), d: undefined },
  })],
  ["anyProperty", "nested array member", () => ({
    keep: 1,
    value: [() => 0, 1, Symbol("y"), undefined],
  })],
  ["anyProperty", "toJSON returning undefined", () => ({
    keep: 1,
    value: { toJSON: () => undefined },
  })],
  ["anyProperty", "toJSON returning a value", () => ({
    keep: 1,
    value: { toJSON: () => 3 },
  })],
  ["anyProperty", "invalid keep twin", () => ({ keep: "x", value: 1 }), "reject"],

  // unknown must behave exactly like any.
  ["unknownProperty", "function value", () => ({ keep: 1, value: () => 0 })],
  ["unknownProperty", "symbol value", () => ({ keep: 1, value: Symbol("s") })],
  ["unknownProperty", "undefined value", () => ({ keep: 1, value: undefined })],
  ["unknownProperty", "number value", () => ({ keep: 1, value: 2 })],
  ["unknownProperty", "invalid keep twin", () => ({ keep: "x", value: 1 }), "reject"],

  // A required property typed undefined has nothing to serialize at all.
  ["undefinedProperty", "undefined value", () => ({ keep: 1, value: undefined })],

  // Optional any: absent, explicitly undefined, and present.
  ["optionalAny", "absent", () => ({ keep: 1 })],
  ["optionalAny", "explicit undefined", () => ({ keep: 1, value: undefined }), "strictReject"],
  ["optionalAny", "function value", () => ({ keep: 1, value: () => 0 })],
  ["optionalAny", "number value", () => ({ keep: 1, value: 2 })],

  // Dynamic (index signature) properties.
  ["recordAny", "mixed omitted and kept", () => ({
    keep: 1,
    omit: () => 0,
    sym: Symbol("s"),
    nil: null,
    undef: undefined,
  })],
  ["recordAny", "every entry omitted", () => ({ omit: () => 0, sym: Symbol("s") })],
  ["recordAny", "empty object", () => ({})],
  ["recordUnknown", "mixed omitted and kept", () => ({
    keep: 1,
    omit: () => 0,
    sym: Symbol("s"),
    nil: null,
  })],
  ["mixedRecord", "static neighbor with omitted dynamic", () => ({
    keep: 1,
    omit: () => 0,
    sym: Symbol("s"),
    nil: null,
  })],
  ["mixedRecord", "static neighbor only", () => ({ keep: 1 })],

  // Arrays: a serialization of undefined is null in array context, and a hole
  // reads as undefined at every element type.
  ["anyArray", "leading function", () => [() => 0, 1]],
  ["anyArray", "all element kinds", () => [() => 0, 1, Symbol("s"), undefined, null]],
  ["anyArray", "single function", () => [() => 0]],
  ["anyArray", "empty", () => []],
  ["anyArray", "sparse tail", () => sparse((a) => {
    a[0] = 1;
    a[3] = 4;
  })],
  ["unknownArray", "leading function", () => [() => 0, 1]],
  ["numberArray", "dense control", () => [1, 2, 3]],
  ["numberArray", "sparse leading holes", () => sparse((a) => {
    a[2] = 3;
  })],

  // Tuples and rest tuples.
  ["tuple", "function and symbol elements", () => [() => 0, Symbol("s"), 1]],
  ["tuple", "undefined elements", () => [undefined, undefined, 1]],
  ["tuple", "valid control", () => [1, 2, 3]],
  ["tuple", "invalid last element twin", () => [1, 2, "x"], "reject"],
  ["restTuple", "function inside rest", () => [1, () => 0, 2]],
  ["restTuple", "empty rest", () => [1]],

  // Nested containers.
  ["nested", "function inside nested object", () => ({
    outer: [{ inner: () => 0 }, { inner: 1 }],
  })],

  // toJSON controls: present, inherited, returning undefined, and non-callable.
  ["jsonableProperty", "own toJSON", () => ({ keep: 1, value: { toJSON: () => "x" } })],
  ["jsonableProperty", "inherited toJSON", () => {
    class Jsonable {
      toJSON() {
        return "x";
      }
    }
    return { keep: 1, value: new Jsonable() };
  }],
  // A non-callable toJSON twin belongs here by shape but not by cause: the
  // checker fails to reject it and the serializer then throws
  // "input.value.toJSON is not a function", so isStringify and validateStringify
  // throw where their contract is to answer. That is a callability rule, not the
  // contextual "decide omission from the serialized result" rule this regression
  // pins, and fixing it here would mix two root causes into one diff. It is
  // tracked separately and keeps its own twin there.
  ["maybeJsonableProperty", "toJSON returning undefined", () => ({
    keep: 1,
    value: { toJSON: () => undefined },
  })],
  ["maybeJsonableProperty", "toJSON returning a value", () => ({
    keep: 1,
    value: { toJSON: () => "x" },
  })],
];

let ran = 0;
const failures = [];

const fail = (label, message) => failures.push(label + ": " + message);

const parse = (label, text) => {
  try {
    return { ok: true, value: JSON.parse(text) };
  } catch (error) {
    fail(label, "produced text that is not JSON: " + JSON.stringify(text));
    return { ok: false };
  }
};

const compare = (label, text, oracle) => {
  if (typeof text !== "string") {
    fail(label, "produced " + String(text) + " instead of JSON text");
    return;
  }
  const parsed = parse(label, text);
  if (parsed.ok !== true) return;
  if (!deepEqual(parsed.value, oracle.value))
    fail(
      label,
      "produced " + text + " but JSON.stringify produced " + oracle.text,
    );
};

const run = (fn, argument) => {
  try {
    return { thrown: false, value: fn(argument) };
  } catch (error) {
    return { thrown: true, error };
  }
};

for (const [key, label, make, kind] of CASES) {
  const reject = kind === "reject";
  const strictReject = kind === "strictReject" && STRICT_UNDEFINED === true;
  const oracleText = JSON.stringify(make());
  const oracle = { text: oracleText, value: undefined };
  if (reject !== true) {
    if (typeof oracleText !== "string")
      throw new Error(key + " / " + label + ": oracle produced no text");
    oracle.value = JSON.parse(oracleText);
  }
  for (const form of ["factory", "direct"]) {
    const name = key + " / " + label + " / " + form;

    // json.stringify never validates, so its text must match the oracle for
    // every statically accepted input, in both option rows.
    if (reject !== true) {
      ran += 1;
      const raw = run(mod[form + "_stringify_" + key], make());
      if (raw.thrown === true)
        fail(name + " / stringify", "threw " + String(raw.error && raw.error.message));
      else compare(name + " / stringify", raw.value, oracle);
    }

    // json.isStringify: null means rejected.
    ran += 1;
    const is = run(mod[form + "_isStringify_" + key], make());
    if (is.thrown === true)
      fail(name + " / isStringify", "threw " + String(is.error && is.error.message));
    else if (reject === true) {
      if (is.value !== null)
        fail(name + " / isStringify", "accepted an invalid value: " + String(is.value));
    } else if (is.value === null) {
      if (strictReject !== true)
        fail(name + " / isStringify", "rejected a valid value");
    } else compare(name + " / isStringify", is.value, oracle);

    // json.assertStringify: a throw means rejected.
    ran += 1;
    const asserted = run(mod[form + "_assertStringify_" + key], make());
    if (reject === true) {
      if (asserted.thrown !== true)
        fail(name + " / assertStringify", "accepted an invalid value: " + String(asserted.value));
    } else if (asserted.thrown === true) {
      if (strictReject !== true)
        fail(name + " / assertStringify", "rejected a valid value: " + String(asserted.error && asserted.error.message));
    } else compare(name + " / assertStringify", asserted.value, oracle);

    // json.validateStringify: success must never carry malformed text.
    ran += 1;
    const validated = run(mod[form + "_validateStringify_" + key], make());
    if (validated.thrown === true)
      fail(name + " / validateStringify", "threw " + String(validated.error && validated.error.message));
    else if (reject === true) {
      if (validated.value.success !== false)
        fail(name + " / validateStringify", "accepted an invalid value: " + JSON.stringify(validated.value));
    } else if (validated.value.success === false) {
      if (strictReject !== true)
        fail(name + " / validateStringify", "rejected a valid value: " + JSON.stringify(validated.value.errors));
    } else compare(name + " / validateStringify", validated.value.data, oracle);
  }
}

if (failures.length !== 0) {
  for (const line of failures) console.log(line);
  throw new Error(failures.length + " contextual serialization failures");
}
console.log("RAN " + ran + " CASES");
`
