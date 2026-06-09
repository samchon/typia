package main

import (
  "bytes"
  "os"
  "path/filepath"
  "runtime"
  "strings"
  "testing"
)

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
  runtimeJS = strings.ReplaceAll(runtimeJS, `require("typia/lib/internal/_accessExpressionAsString")`, `require("./access-expression-stub.cjs")`)
  for _, needle := range []string{`require("typia")`, `require('typia')`, `from "typia"`, `from 'typia'`, `typia/lib/internal/`} {
    if strings.Contains(runtimeJS, needle) {
      t.Fatalf("runtime module still contains unresolved typia import %q", needle)
    }
  }
  return runtimeJS
}

const ttscTypiaTestValidateReportStub = `module.exports._validateReport = (array) => {
  return (exceptable, error) => {
    if (exceptable) array.push(error);
    return false;
  };
};
`

const ttscTypiaTestStandardSchemaStub = `module.exports._createStandardSchema = (validate) => validate;
`

const ttscTypiaTestAssertGuardStub = `module.exports._assertGuard = (exceptionable, props, factory) => {
  if (exceptionable) {
    const error = factory ? factory(props) : new Error(props.expected);
    Object.assign(error, props);
    throw error;
  }
  return false;
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
