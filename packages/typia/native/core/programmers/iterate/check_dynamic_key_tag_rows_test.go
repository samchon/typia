//go:build typia_native_internal
// +build typia_native_internal

package iterate

import (
  "testing"

  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestCheckDynamicKeyTagRows verifies runtime constraints prevent pure-string shortcuts.
//
// Default and schema-only tags do not emit a condition. MinLength and schema
// exclusions do, including beside Default in the same row. Their conditions
// must survive dynamic-key checking instead of an unconditional string shortcut.
//
// 1. Build empty, schema-only, fully validated and mixed string tag rows.
// 2. Check the active pure-string predicate with authored true/false controls.
// 3. Keep native String as a pure positive control.
//
// @evidence contracts/testing.md#behavioral-verification The consumed string-constraint predicate runs on empty, schema-only, fully validating, mixed Default/MinLength and exclusion rows, plus native String keys.
// @evidence contracts/testing.md#independent-expectations Authored runtime conditions constrain strings even beside schema-only tags, matching what Check_string emits. Default.ts/MinLength.ts and MetadataTypeTagFactory preserve these tags together; no expected boolean comes from the shortcut.
// @evidence contracts/testing.md#distinguishing-cases Original empty/full/partial and annotation/native distinctions exercise the consumed predicate; the obsolete unused all-validating filter has no product contract. Default-only stays pure, while Default/MinLength and exclusion do not.
// @evidence contracts/testing.md#execution-ownership The typia_native_internal Go runner calls the actual same-package predicate on constructed metadata in process, without checker or subprocess; factory provenance is source-reviewed, not executed by this case.
func TestCheckDynamicKeyTagRows(t *testing.T) {
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

  for _, tc := range []struct {
    name string
    tags [][]nativemetadata.IMetadataTypeTag
    pure bool
  }{
    {name: "empty", tags: [][]nativemetadata.IMetadataTypeTag{{}}, pure: true},
    {name: "schema-only", tags: [][]nativemetadata.IMetadataTypeTag{{{Name: "Format"}}}, pure: true},
    {name: "validated", tags: [][]nativemetadata.IMetadataTypeTag{{{Name: "MinLength", Validate: "input.length >= 1"}}}, pure: false},
    {name: "default-only", tags: [][]nativemetadata.IMetadataTypeTag{{{Name: "Default", Kind: "default", Value: "x", Schema: map[string]any{"default": "x"}}}}, pure: true},
    {name: "default-minLength", tags: [][]nativemetadata.IMetadataTypeTag{{{Name: "Default", Kind: "default", Value: "x", Schema: map[string]any{"default": "x"}}, {Name: "MinLength", Kind: "minLength", Value: 1, Validate: "$input.length >= 1", Schema: map[string]any{"minLength": 1}}}}, pure: false},
    {name: "exclude-only", tags: [][]nativemetadata.IMetadataTypeTag{{{Name: "Exclude", Kind: "exclude", Schema: map[string]any{"not": map[string]any{"enum": []any{"no"}}}}}}, pure: false},
    {name: "mixed", tags: [][]nativemetadata.IMetadataTypeTag{{{Name: "Format"}, {Name: "Pattern", Validate: "pattern.test(input)"}}}, pure: false},
  } {
    t.Run(tc.name, func(t *testing.T) {
      key := nativemetadata.MetadataSchema_create(nativemetadata.MetadataSchema{
        Atomics: []*nativemetadata.MetadataAtomic{
          nativemetadata.MetadataAtomic_create(nativemetadata.MetadataAtomic{Type: "string", Tags: tc.tags}),
        },
      })
      if got := check_dynamic_key_has_pure_string(key); got != tc.pure {
        t.Fatalf("pure string = %t, want %t", got, tc.pure)
      }
    })
  }
  native := nativemetadata.MetadataSchema_create(nativemetadata.MetadataSchema{
    Natives: []*nativemetadata.MetadataNative{
      nativemetadata.MetadataNative_create(nativemetadata.MetadataNative{Name: "String"}),
    },
  })
  if !check_dynamic_key_has_pure_string(native) {
    t.Fatal("native String key should remain pure")
  }
}
