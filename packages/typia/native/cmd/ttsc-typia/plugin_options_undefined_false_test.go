package main

import (
  "os"
  "path/filepath"
  "testing"
)

// TestPluginOptionsUndefinedFalsePreservesExplicitFalse verifies undefined option parsing.
//
// The exact optional-property workflow depends on distinguishing an omitted
// plugin option from `"undefined": false`. The native command reads tsconfig
// directly, so it must preserve explicit false instead of collapsing it into
// the default nil option.
//
// 1. Write a tsconfig with the typia transformer and `"undefined": false`.
// 2. Read plugin options through the native command helper.
// 3. Assert the undefined option is a non-nil false pointer.
func TestPluginOptionsUndefinedFalsePreservesExplicitFalse(t *testing.T) {
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
