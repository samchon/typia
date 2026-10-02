//go:build typia_native_internal
// +build typia_native_internal

package iterate

import (
  "testing"

  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestCheckDynamicKeyTagRows filters fully validated tag rows.
//
// Dynamic key validation must only treat a string atomic as constrained when
// every tag in a row supplies a runtime validation expression. Empty rows are
// valid, partially specified rows are not, and native String keys remain pure.
//
// 1. Build tag rows with empty, fully validated, and partially validated rows.
// 2. Assert only rows whose tags all validate are returned.
// 3. Build string atomic metadata with a partially validated row.
// 4. Assert that metadata is still treated as a pure string key.
//
// @evidence contracts/testing.md#behavioral-verification The dynamic-key tag row filter and the string-constraint predicate run on empty, fully validating and partially validating tag rows and on native String keys.
// @evidence contracts/testing.md#independent-expectations A row counts only when every tag supplies a runtime validation expression, which is the stated rule; the rows and the expected two surviving rows are authored.
// @evidence contracts/testing.md#distinguishing-cases Empty, valid and partial rows and the pure-string key cover accepted and rejected rows.
// @evidence contracts/testing.md#execution-ownership The typia_native_internal Go command (go -C packages/typia/test test -tags typia_native_internal ../native/...) runs this same-package Test function in process. The tagged test calls the helper on constructed rows with no checker, filesystem fixture or process.
func TestCheckDynamicKeyTagRows(t *testing.T) {
  rows := [][]nativemetadata.IMetadataTypeTag{
    {},
    {{Name: "MinLength", Validate: "input.length >= 1"}},
    {{Name: "Format"}, {Name: "Pattern", Validate: "pattern.test(input)"}},
  }
  filtered := check_dynamic_key_fully_validated_tag_rows(rows)
  if len(filtered) != 2 {
    t.Fatalf("expected two fully validated rows, got %#v", filtered)
  }

  meta := nativemetadata.MetadataSchema_create(nativemetadata.MetadataSchema{
    Atomics: []*nativemetadata.MetadataAtomic{
      nativemetadata.MetadataAtomic_create(nativemetadata.MetadataAtomic{
        Type: "string",
        Tags: [][]nativemetadata.IMetadataTypeTag{{
          {Name: "Format"},
        }},
      }),
    },
  })
  if !check_dynamic_key_has_pure_string(meta) {
    t.Fatal("string atomic with non-validating tags should be treated as pure string")
  }
}
