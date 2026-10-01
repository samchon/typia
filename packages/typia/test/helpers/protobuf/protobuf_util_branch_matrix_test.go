package typia_test

import (
	"testing"

	helpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
	metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
	testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
)

// TestProtobufUtilBranchMatrix covers protobuf scalar extraction fallbacks.
//
// Protobuf scalar extraction has several small branches that only appear when
// constants, atomics, template literals, and caller-supplied union maps are
// mixed. This test keeps those branch-only cases together so the scalar utility
// behavior stays visible outside the native package.
//
// 1. Build metadata with boolean, bigint, number, string, and template buckets.
// 2. Reuse a caller-owned union map while extracting atomic scalars.
// 3. Assert fallback sequence and unsupported sequence-tag branches.
// 4. Exercise numeric atomic defaults and unsupported integer conversion.
//
// @evidence contracts/testing.md#behavioral-verification Scalar extraction runs on boolean, bigint, number, string and template buckets with a caller-owned union map, and on unsupported sequence tags and number-only input.
// @evidence contracts/testing.md#independent-expectations Scalar defaults (double, uint64 for positive bigint, int32 for small constants) are authored from the protobuf mapping rules.
// @evidence contracts/testing.md#distinguishing-cases Several fallback branches are checked in one matrix, so a failure is located by the Fatal message rather than a case name.
// @evidence contracts/testing.md#execution-ownership The packages/typia/test module (pnpm test:go:public) runs this Test function in process with the Go test runner. It calls the exported utility on constructed metadata with no filesystem fixture, process or native command build.
func TestProtobufUtilBranchMatrix(t *testing.T) {
	existing := map[string]*int{"existing": nil}
	meta := metadata.MetadataSchema_create(metadata.MetadataSchema{
		Atomics: []*metadata.MetadataAtomic{
			metadata.MetadataAtomic_create(metadata.MetadataAtomic{
				Type: "boolean",
				Tags: [][]metadata.IMetadataTypeTag{{testutil.SequenceTag(11)}},
			}),
			metadata.MetadataAtomic_create(metadata.MetadataAtomic{
				Type: "number",
			}),
			metadata.MetadataAtomic_create(metadata.MetadataAtomic{
				Type: "string",
				Tags: [][]metadata.IMetadataTypeTag{{testutil.SequenceTag(12)}},
			}),
		},
		Constants: []*metadata.MetadataConstant{
			metadata.MetadataConstant_create(metadata.MetadataConstant{
				Type: "boolean",
				Values: []*metadata.MetadataConstantValue{
					metadata.MetadataConstantValue_create(metadata.MetadataConstantValue{
						Value: true,
					}),
				},
			}),
			metadata.MetadataConstant_create(metadata.MetadataConstant{
				Type: "bigint",
				Values: []*metadata.MetadataConstantValue{
					metadata.MetadataConstantValue_create(metadata.MetadataConstantValue{
						Value: "9",
					}),
				},
			}),
			metadata.MetadataConstant_create(metadata.MetadataConstant{
				Type: "number",
				Values: []*metadata.MetadataConstantValue{
					metadata.MetadataConstantValue_create(metadata.MetadataConstantValue{
						Value: 5,
					}),
				},
			}),
		},
		Templates: []*metadata.MetadataTemplate{
			metadata.MetadataTemplate_create(metadata.MetadataTemplate{
				Row: []*metadata.MetadataSchema{
					testutil.StringConstantMetadata("prefix"),
				},
				Tags: [][]metadata.IMetadataTypeTag{{testutil.SequenceTag(13)}},
			}),
		},
	})

	atomics := helpers.ProtobufUtil.GetAtomics(meta, existing)
	atomics["mutation"] = nil
	if _, ok := existing["mutation"]; !ok {
		t.Fatal("protobuf utility should reuse caller-owned union map")
	}
	if got := atomics["bool"]; got == nil || *got != 11 {
		t.Fatalf("boolean atomic sequence mismatch: %#v", atomics)
	}
	if _, ok := atomics["double"]; !ok {
		t.Fatalf("number atomic should default to double: %#v", atomics)
	}
	if got := atomics["string"]; got == nil || *got != 12 {
		t.Fatalf("string atomic sequence mismatch: %#v", atomics)
	}
	if _, ok := atomics["uint64"]; !ok {
		t.Fatalf("positive bigint constant should deduce uint64: %#v", atomics)
	}
	if _, ok := atomics["int32"]; !ok {
		t.Fatalf("small numeric constant should deduce int32: %#v", atomics)
	}

	withoutSequence := helpers.ProtobufUtil.GetSequence([]metadata.IMetadataTypeTag{
		{Kind: "sequence", Schema: map[string]any{}},
		{Kind: "sequence", Schema: map[string]any{"x-protobuf-sequence": struct{}{}}},
	})
	if withoutSequence != nil {
		t.Fatalf("unsupported sequence tags should not parse: %#v", withoutSequence)
	}

	numberOnly := helpers.ProtobufUtil.GetNumbers(metadata.MetadataSchema_create(metadata.MetadataSchema{
		Atomics: []*metadata.MetadataAtomic{
			metadata.MetadataAtomic_create(metadata.MetadataAtomic{Type: "number"}),
		},
	}), nil)
	if _, ok := numberOnly["double"]; !ok {
		t.Fatalf("number-only extraction should default to double: %#v", numberOnly)
	}
}
