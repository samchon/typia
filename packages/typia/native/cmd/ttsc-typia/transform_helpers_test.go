package main

import (
  "bytes"
  "os"
  "os/exec"
  "path/filepath"
  "runtime"
  "strings"
  "testing"
)

func ttscTypiaTestTypecheck(t *testing.T, project string) {
  t.Helper()
  pnpm, err := exec.LookPath("pnpm")
  if err != nil {
    t.Skip("pnpm executable not found")
  }
  cmd := exec.Command(pnpm, "exec", "ttsc", "--noEmit", "-p", "tsconfig.json")
  cmd.Dir = project
  if output, err := cmd.CombinedOutput(); err != nil {
    t.Fatalf("fixture typecheck failed: %v\n%s", err, output)
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
    "typia-stub.cjs":             "module.exports = {};\n",
    "validate-report-stub.cjs":   ttscTypiaTestValidateReportStub,
    "standard-schema-stub.cjs":   ttscTypiaTestStandardSchemaStub,
    "assert-guard-stub.cjs":      ttscTypiaTestAssertGuardStub,
    "functional-error-stub.cjs":  ttscTypiaTestFunctionalErrorStub,
    "access-expression-stub.cjs": ttscTypiaTestAccessExpressionStub,
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
  for _, needle := range []string{`require("typia")`, `require('typia')`, `from "typia"`, `from 'typia'`, `typia/lib/internal/`} {
    if strings.Contains(runtimeJS, needle) {
      t.Fatalf("runtime module still contains unresolved typia import %q", needle)
    }
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

const ttscTypiaTestAssertGuardStub = `module.exports._assertGuard = (exceptionable, props, factory) => {
  if (exceptionable) {
    const error = factory ? factory(props) : Object.assign(new Error(props.expected), props);
    throw error;
  }
  return false;
};
`

const ttscTypiaTestFunctionalErrorStub = `module.exports._functionalTypeGuardErrorFactory = (props) =>
  Object.assign(new Error(props.expected), props);
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
