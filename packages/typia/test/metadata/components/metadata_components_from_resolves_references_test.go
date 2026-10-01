package typia_test

import (
	testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
	"testing"

	metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestMetadataComponentsFromResolvesReferences verifies component dictionaries.
//
// Component DTOs are loaded in two passes: first names are registered in a
// dictionary, then properties, alias values, array values, and tuple elements
// are resolved against that dictionary. This test covers that reference
// restoration path without involving TypeScript checker state.
//
// 1. Build component DTOs for one object, alias, array, and tuple.
// 2. Convert them into runtime components.
// 3. Assert every named component is present in the dictionary.
// 4. Assert JSON conversion preserves the same component counts.
//
// @evidence contracts/testing.md#behavioral-verification MetadataComponents_from loads authored DTOs for an object, alias, array and tuple, and the dictionary membership and the counts of ToJSON are asserted.
// @evidence contracts/testing.md#independent-expectations Each component name and the count of one per kind are authored in the DTO input; nothing is taken from the loader's output except the checks themselves.
// @evidence contracts/testing.md#distinguishing-cases One component of each kind separates the two restoration passes; recursive components and unresolved references are not covered by this case.
// @evidence contracts/testing.md#execution-ownership The packages/typia/test module (pnpm test:go:public) runs this Test function in process with the Go test runner. It converts DTOs in memory with no filesystem fixture, process or native command build.
func TestMetadataComponentsFromResolvesReferences(t *testing.T) {
	components := metadata.MetadataComponents_from(metadata.IMetadataComponents{
		Objects: []metadata.IMetadataSchema_IObjectType{{
			Name: "User",
			Properties: []*metadata.IMetadataSchema_IProperty{{
				Key:   testutil.StringLiteralMetadata("id").ToJSON(),
				Value: testutil.AtomicMetadata("string").ToJSON(),
			}},
		}},
		Aliases: []metadata.IMetadataSchema_IAliasType{{
			Name:  "UserId",
			Value: testutil.AtomicMetadata("string").ToJSON(),
		}},
		Arrays: []metadata.IMetadataSchema_IArrayType{{
			Name:  "UserIds",
			Value: testutil.AtomicMetadata("string").ToJSON(),
		}},
		Tuples: []metadata.IMetadataSchema_ITupleType{{
			Name: "Pair",
			Elements: []*metadata.IMetadataSchema{
				testutil.AtomicMetadata("string").ToJSON(),
				testutil.AtomicMetadata("number").ToJSON(),
			},
		}},
	})

	if components.Dictionary.Objects["User"] == nil ||
		components.Dictionary.Aliases["UserId"] == nil ||
		components.Dictionary.Arrays["UserIds"] == nil ||
		components.Dictionary.Tuples["Pair"] == nil {
		t.Fatalf("component dictionary was not populated: %#v", components.Dictionary)
	}
	json := components.ToJSON()
	if len(json.Objects) != 1 || len(json.Aliases) != 1 || len(json.Arrays) != 1 || len(json.Tuples) != 1 {
		t.Fatalf("component counts were not preserved: %#v", json)
	}
}
