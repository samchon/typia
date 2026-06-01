package typia_test

import (
  "strings"
  "testing"

  typiaadapter "github.com/samchon/typia/packages/typia/native/adapter"
)

// benchCommonJSOutput mimics a realistic CommonJS file body emitted by the
// transform: a stripped typia import, several runtime helper aliases that must
// be injected, and validator-shaped bodies that exercise the cleanup regexes.
var benchCommonJSOutput = strings.Join([]string{
  `"use strict";`,
  `Object.defineProperty(exports, "__esModule", { value: true });`,
  `const typia = __importDefault(require("typia"));`,
  `const other = require("./other");`,
  `exports.a = __typia_transform__isFormatUuid(input);`,
  `exports.b = __typia_transform__assertGuard(input);`,
  `exports.c = __typia_transform__randomFormatUuid();`,
  `exports.d = __typia_transform__randomString();`,
  `exports.e = __typia_transform__validateReport(input);`,
  `exports.f = __typia_transform__createStandardSchema(input);`,
  `const check = (input) => __typia_transform__isFormatUuid(input) && other.use(input);`,
}, "\n")

// benchTypeScriptOutput mimics a realistic TypeScript-mode emit: parenthesized
// type annotations, predicate forms, and IIFE bodies the cleanup pass rewrites.
var benchTypeScriptOutput = strings.Join([]string{
  `import typia from "typia";`,
  `export const value = (() => {`,
  `    const _io0 = (input: any): boolean => true;`,
  `    return (input: (string)) => input is (value.inner);`,
  `})()`,
  `export const guard = (input: (boolean)) => { return (success ? input : null); }`,
  `const fn: (any) => void = (input) => {};`,
  `const u: string | (undefined) = undefined;`,
}, "\n")

func BenchmarkCleanupTransformedText(b *testing.B) {
  b.ReportAllocs()
  for i := 0; i < b.N; i++ {
    _ = typiaadapter.CleanupTransformedText(benchCommonJSOutput)
  }
}

func BenchmarkCleanupTypeScriptTransformText(b *testing.B) {
  b.ReportAllocs()
  for i := 0; i < b.N; i++ {
    _ = typiaadapter.CleanupTypeScriptTransformText(benchTypeScriptOutput)
  }
}
