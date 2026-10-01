package typia_test

import (
	"testing"

	metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestMetadataCollectionTracksUnionIndices verifies object-union registration.
//
// Metadata collections assign stable indices to object unions so downstream
// codegen can refer to the same union helper repeatedly. Repeating the same
// object-name sequence must return the original index and clone state must keep
// the same union order.
//
// 1. Create a metadata collection and an object-union schema.
// 2. Register the union twice.
// 3. Assert both registrations return index zero.
// 4. Clone the collection and assert the union order is preserved.
//
// @evidence contracts/testing.md#behavioral-verification GetUnionIndex is called twice with the same object-union schema on a new collection, and the union list of a clone is read; a re-registration that allocates a second index or a clone that loses the union fails.
// @evidence contracts/testing.md#independent-expectations Stable indices are a contract of the collection: the same object-name sequence must return the first index, so zero and a single two-object union are authored literals.
// @evidence contracts/testing.md#distinguishing-cases Repeated registration of one union is the positive case; registering a different union and the index of a second union are not asserted here.
// @evidence contracts/testing.md#execution-ownership The packages/typia/test module (pnpm test:go:public) runs this Test function in process with the Go test runner. It builds a collection in memory with no filesystem fixture, process or native command build.
func TestMetadataCollectionTracksUnionIndices(t *testing.T) {
	collection := metadata.NewMetadataCollection()
	meta := metadata.MetadataSchema_create(metadata.MetadataSchema{
		Objects: []*metadata.MetadataObject{
			metadata.MetadataObject_create(metadata.MetadataObject{
				Type: metadata.MetadataObjectType_create(metadata.MetadataObjectType{Name: "A"}),
			}),
			metadata.MetadataObject_create(metadata.MetadataObject{
				Type: metadata.MetadataObjectType_create(metadata.MetadataObjectType{Name: "B"}),
			}),
		},
	})

	if first, second := collection.GetUnionIndex(meta), collection.GetUnionIndex(meta); first != 0 || second != 0 {
		t.Fatalf("repeated union should keep index zero: first=%d second=%d", first, second)
	}
	if unions := collection.Clone().Unions(); len(unions) != 1 || len(unions[0]) != 2 {
		t.Fatalf("cloned union order was not preserved: %#v", unions)
	}
}
