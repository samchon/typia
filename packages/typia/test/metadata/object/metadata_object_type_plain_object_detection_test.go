package typia_test

import (
	testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
	"testing"

	metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestMetadataObjectTypePlainObjectDetection verifies object plainness
// classification.
//
// Plain object detection is a low-level metadata decision used by downstream
// code generation paths. A plain object needs literal property keys, required
// values, non-nullable metadata, and a compact non-recursive shape. This test
// covers the happy path and then flips one property to optional to prove the
// same object no longer qualifies.
//
// 1. Build a literal anonymous object with required atomic properties.
// 2. Assert it is treated as both plain and literal.
// 3. Make one property optional.
// 4. Assert the object is no longer plain.
//
// @evidence contracts/testing.md#behavioral-verification The plain-object and literal predicates run on a required-atomic literal object and again after one property becomes optional.
// @evidence contracts/testing.md#independent-expectations A plain object needs literal keys and required values; the authored shape and its one-axis change give the expected verdicts.
// @evidence contracts/testing.md#distinguishing-cases The happy path and the optional flip are the pair; the other disqualifiers are owned by the edges case.
// @evidence contracts/testing.md#execution-ownership The packages/typia/test module (pnpm test:go:public) runs this Test function in process with the Go test runner. It calls the predicates on constructed types with no filesystem fixture, process or native command build.
func TestMetadataObjectTypePlainObjectDetection(t *testing.T) {
	object := metadata.MetadataObjectType_create(metadata.MetadataObjectType{
		Name: "__type-o1",
		Properties: []*metadata.MetadataProperty{
			testutil.Property("id", testutil.AtomicMetadata("string")),
			testutil.Property("age", testutil.AtomicMetadata("number")),
		},
	})

	if !object.IsPlain() {
		t.Fatal("object with required literal atomic properties should be plain")
	}
	if !object.IsLiteral() {
		t.Fatal("anonymous object names should be treated as literal object types")
	}

	object.Properties[1].Value.Optional = true
	if object.IsPlain() {
		t.Fatal("optional property should make object non-plain")
	}
}
