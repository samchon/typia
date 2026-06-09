package main

import (
  "os"
  "path/filepath"
  "testing"
)

// TestPlaygroundPluginOptionsUndefinedFalsePreservesExplicitFalse verifies playground option parsing.
//
// The playground mirrors typia's native CLI option reader, so it must preserve
// an explicit `"undefined": false` transformer option instead of treating it as
// an omitted nil option. Otherwise the exact optional-property behavior would
// diverge between the website compiler and the packaged CLI.
//
// 1. Write a tsconfig with the typia transformer and `"undefined": false`.
// 2. Read plugin options through the playground helper.
// 3. Assert the undefined option is a non-nil false pointer.
func TestPlaygroundPluginOptionsUndefinedFalsePreservesExplicitFalse(t *testing.T) {
  root := t.TempDir()
  path := filepath.Join(root, "tsconfig.json")
  if err := os.WriteFile(path, []byte(`{
  "compilerOptions": {
    "plugins": [
      { "transform": "typia/lib/transform", "undefined": false }
    ]
  }
}`), 0o644); err != nil {
    t.Fatal(err)
  }

  options := readTypiaPluginOptions(root, path)
  if options.Undefined == nil || *options.Undefined {
    t.Fatalf("undefined=false should be preserved: %#v", options.Undefined)
  }
}
