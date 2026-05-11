package typia_test

import (
	testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
	"testing"

	metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestMetadataSchemaJSONRoundTripForPrimitiveBuckets verifies metadata JSON
// conversion for primitive bucket shapes.
//
// The native transformer repeatedly crosses between DTO-shaped metadata and
// runtime metadata structs. This test keeps the primitive-only path honest:
// required and nullable flags, atomic buckets, constants, and native references
// must survive a `ToJSON` / `MetadataSchema_from` round trip without dictionary
// lookups.
//
// 1. Build metadata with atomic, constant, and native buckets.
// 2. Convert it to the JSON DTO and back.
// 3. Assert required and nullable flags are preserved.
// 4. Assert every primitive bucket survives with the original values.
func TestMetadataSchemaJSONRoundTripForPrimitiveBuckets(t *testing.T) {
	meta := metadata.MetadataSchema_create(metadata.MetadataSchema{
		Required: true,
		Nullable: true,
		Atomics: []*metadata.MetadataAtomic{
			metadata.MetadataAtomic_create(metadata.MetadataAtomic{Type: "boolean"}),
		},
		Constants: []*metadata.MetadataConstant{
			metadata.MetadataConstant_create(metadata.MetadataConstant{
				Type: "string",
				Values: []*metadata.MetadataConstantValue{
					metadata.MetadataConstantValue_create(metadata.MetadataConstantValue{Value: "active"}),
				},
			}),
		},
		Natives: []*metadata.MetadataNative{
			metadata.MetadataNative_create(metadata.MetadataNative{Name: "Date"}),
		},
	})

	roundTrip := metadata.MetadataSchema_from(meta.ToJSON(), testutil.EmptyMetadataDictionary())

	if !roundTrip.Required || !roundTrip.Nullable {
		t.Fatalf("required/nullable flags were not preserved: %#v", roundTrip)
	}
	if roundTrip.Size() != 3 {
		t.Fatalf("round-trip size must preserve atomic, constant, and native buckets: %d", roundTrip.Size())
	}
	if len(roundTrip.Atomics) != 1 || roundTrip.Atomics[0].Type != "boolean" {
		t.Fatalf("atomic bucket was not preserved: %#v", roundTrip.Atomics)
	}
	if len(roundTrip.Constants) != 1 || roundTrip.Constants[0].Values[0].Value != "active" {
		t.Fatalf("constant bucket was not preserved: %#v", roundTrip.Constants)
	}
	if len(roundTrip.Natives) != 1 || roundTrip.Natives[0].Name != "Date" {
		t.Fatalf("native bucket was not preserved: %#v", roundTrip.Natives)
	}
}
