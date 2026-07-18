package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestJsonStringifySpecialKeyTransform pins json.createStringify (and the
// guarded isStringify / assertStringify / validateStringify variants) against a
// static object key that contains a double quote, a backslash, a control
// character, a `${` interpolation sequence, an empty string, or a backtick
// (#2201).
//
// StringifyJoinder emits each static key by JSON-escaping it with
// json.Marshal, then splicing the JSON bytes into a *template literal* through
// TemplateFactory.Generate. JSON escaping and template-literal escaping
// disagree, so at runtime `\"`->`"`, `\\`->`\`, a control char stays raw, a raw
// backtick closes the template (a SyntaxError in the emitted module), and `${`
// starts a live interpolation (a serialize-time ReferenceError / injection).
// The result is invalid JSON, or a crash, for exactly these keys, while
// ordinary keys, dynamic Record keys, and all string values stay correct.
//
//  1. Transform a fixture that exports json.createStringify (plus the guarded
//     variants) for an object whose keys are `q"k`, `back\slash`, a TAB,
//     `interp${bad}here`, the empty string, and a backtick.
//  2. Execute the emitted serializer in Node with a faithful
//     _jsonStringifyNumber stub.
//  3. Require the serialized document to JSON.parse back to the original object
//     for every key, and report the exact executed case count so a runner that
//     silently skipped a key cannot pass as a false green.
func TestJsonStringifySpecialKeyTransform(t *testing.T) {
  project := jsonStringifySpecialKeyProject(t)
  js := jsonStringifySpecialKeyTransform(t, project)
  jsonStringifySpecialKeyRunRuntime(t, project, js)
}

func jsonStringifySpecialKeyProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "json-stringify-special-key-")
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
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(jsonStringifySpecialKeyTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(jsonStringifySpecialKeySource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func jsonStringifySpecialKeyTransform(t *testing.T, project string) string {
  t.Helper()
  payload := `[{"config":{"transform":"typia/lib/transform"},"name":"typia","stage":"transform"}]`
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
    t.Fatalf("json stringify special-key transform failed: code=%d stderr=\n%s", code, errText)
  }
  return out
}

func jsonStringifySpecialKeyRunRuntime(t *testing.T, project string, js string) {
  t.Helper()
  node, err := exec.LookPath("node")
  if err != nil {
    t.Skip("node executable not found")
  }
  runtimeDir := filepath.Join(project, "runtime")
  if err := os.MkdirAll(runtimeDir, 0o755); err != nil {
    t.Fatalf("mkdir runtime dir: %v", err)
  }
  ttscTypiaTestWriteCommonRuntimeStubs(t, runtimeDir)
  stubs := map[string]string{
    "json-stringify-number-stub.cjs":  jsonStringifySpecialKeyNumberStub,
    "json-stringify-string-stub.cjs":  jsonStringifySpecialKeyStringStub,
    "throw-type-guard-error-stub.cjs": jsonStringifySpecialKeyThrowStub,
  }
  for name, content := range stubs {
    if err := os.WriteFile(filepath.Join(runtimeDir, name), []byte(content), 0o644); err != nil {
      t.Fatalf("write %s: %v", name, err)
    }
  }
  runtimeJS := strings.ReplaceAll(js, `require("typia/lib/internal/_jsonStringifyNumber")`, `require("./json-stringify-number-stub.cjs")`)
  runtimeJS = strings.ReplaceAll(runtimeJS, `require("typia/lib/internal/_jsonStringifyString")`, `require("./json-stringify-string-stub.cjs")`)
  runtimeJS = strings.ReplaceAll(runtimeJS, `require("typia/lib/internal/_throwTypeGuardError")`, `require("./throw-type-guard-error-stub.cjs")`)
  runtimeJS = ttscTypiaTestRewriteCommonJS(t, runtimeJS)
  if err := os.WriteFile(filepath.Join(runtimeDir, "main.cjs"), []byte(runtimeJS), 0o644); err != nil {
    t.Fatalf("write runtime module: %v", err)
  }
  runner := filepath.Join(runtimeDir, "run.cjs")
  if err := os.WriteFile(runner, []byte(jsonStringifySpecialKeyRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("json stringify special-key runtime failed: %v\n%s", err, output)
  }
  const expected = "RAN 24 CASES"
  if !strings.Contains(string(output), expected) {
    t.Fatalf("json stringify special-key runner did not report %q; got:\n%s", expected, output)
  }
}

const jsonStringifySpecialKeyTSConfig = `{
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

const jsonStringifySpecialKeySource = `import typia from "typia";

interface Special {
  "q\"k": number;
  "back\\slash": number;
  "\t": number;
  "interp${bad}here": number;
  "": number;
  "` + "`" + `": number;
}

export const stringifySpecial = typia.json.createStringify<Special>();
export const isStringifySpecial = typia.json.createIsStringify<Special>();
export const assertStringifySpecial = typia.json.createAssertStringify<Special>();
export const validateStringifySpecial = typia.json.createValidateStringify<Special>();
`

const jsonStringifySpecialKeyNumberStub = `module.exports._jsonStringifyNumber = (value) => (Number.isFinite(value) ? String(value) : "null");
`

const jsonStringifySpecialKeyStringStub = `module.exports._jsonStringifyString = (value) => JSON.stringify(value);
`

const jsonStringifySpecialKeyThrowStub = `module.exports._throwTypeGuardError = (props) => {
  const error = new Error(props.expected);
  Object.assign(error, props);
  throw error;
};
`

const jsonStringifySpecialKeyRunner = `const mod = require("./main.cjs");

const TAB = String.fromCharCode(9);
const BQ = String.fromCharCode(96);

const makeInput = () => {
  const input = {};
  input['q"k'] = 1;
  input['back\\slash'] = 2;
  input[TAB] = 3;
  input['interp${bad}here'] = 4;
  input[''] = 5;
  input[BQ] = 6;
  return input;
};

const entries = [
  ['q"k', 1],
  ['back\\slash', 2],
  [TAB, 3],
  ['interp${bad}here', 4],
  ['', 5],
  [BQ, 6],
];

let ran = 0;

const roundTrip = (label, text) => {
  const parsed = JSON.parse(text);
  for (const [key, expected] of entries) {
    ran += 1;
    if (parsed[key] !== expected) {
      throw new Error(
        label + ": key " + JSON.stringify(key) + " round-trip failed; got " +
          JSON.stringify(parsed[key]) + " in " + text,
      );
    }
  }
  if (Object.keys(parsed).length !== entries.length) {
    throw new Error(label + ": unexpected key count in " + text);
  }
};

// json.createStringify: the raw serializer must emit valid JSON for every key.
roundTrip("createStringify", mod.stringifySpecial(makeInput()));

// json.createIsStringify: valid input serializes; the document must round-trip.
const isText = mod.isStringifySpecial(makeInput());
if (isText === null) {
  throw new Error("isStringify rejected a valid special-key object");
}
roundTrip("isStringify", isText);

// json.createAssertStringify: valid input passes the guard, then serializes.
roundTrip("assertStringify", mod.assertStringifySpecial(makeInput()));

// json.createValidateStringify: success carries the serialized document.
const validated = mod.validateStringifySpecial(makeInput());
if (validated.success !== true) {
  throw new Error("validateStringify rejected a valid special-key object: " + JSON.stringify(validated));
}
roundTrip("validateStringify", validated.data);

console.log("RAN " + ran + " CASES");
`
