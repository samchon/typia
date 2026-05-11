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
