package typia_test

import (
	"fmt"
	"testing"

	metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
	testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
)

// TestMetadataObjectTypePlainObjectEdges verifies non-plain boundaries.
//
// Plain object detection accepts a small one-level nested literal object, but
// must reject recursive, oversized, non-literal-key, nullable, and deeper nested
// shapes. These edge cases keep the object classifier aligned with codegen
// assumptions about cheap inline object checks.
//
// 1. Reject recursive and ten-property object shapes.
// 2. Reject non-literal property keys and nullable values.
// 3. Accept a one-level nested plain object.
// 4. Reject the same nested object when the recursion level is already one.
func TestMetadataObjectTypePlainObjectEdges(t *testing.T) {
	recursive := metadata.MetadataObjectType_create(metadata.MetadataObjectType{
		Name:      "__type.recursive",
		Recursive: true,
		Properties: []*metadata.MetadataProperty{
			testutil.Property("id", testutil.AtomicMetadata("string")),
		},
	})
	if recursive.IsPlain() {
		t.Fatal("recursive object should not be plain")
	}

	many := metadata.MetadataObjectType_create(metadata.MetadataObjectType{Name: "__type.many"})
	for i := 0; i < 10; i++ {
		many.Properties = append(many.Properties, testutil.Property(fmt.Sprintf("p%d", i), testutil.AtomicMetadata("string")))
	}
	if many.IsPlain() {
		t.Fatal("object with ten properties should not be plain")
	}

	nonLiteralKey := metadata.MetadataObjectType_create(metadata.MetadataObjectType{
		Name: "__type.nonLiteral",
		Properties: []*metadata.MetadataProperty{
			metadata.MetadataProperty_create(metadata.MetadataProperty{
				Key:   testutil.AtomicMetadata("string"),
				Value: testutil.AtomicMetadata("number"),
			}),
		},
	})
	if nonLiteralKey.IsPlain() {
		t.Fatal("object with non-literal key metadata should not be plain")
	}

	nullable := metadata.MetadataObjectType_create(metadata.MetadataObjectType{
		Name: "__type.nullable",
		Properties: []*metadata.MetadataProperty{
			testutil.Property("value", metadata.MetadataSchema_create(metadata.MetadataSchema{
				Required: true,
				Nullable: true,
				Atomics: []*metadata.MetadataAtomic{
					metadata.MetadataAtomic_create(metadata.MetadataAtomic{Type: "string"}),
				},
			})),
		},
	})
	if nullable.IsPlain() {
		t.Fatal("object with nullable property should not be plain")
	}

	child := metadata.MetadataObjectType_create(metadata.MetadataObjectType{
		Name: "__type.child",
		Properties: []*metadata.MetadataProperty{
			testutil.Property("name", testutil.AtomicMetadata("string")),
		},
	})
	parent := metadata.MetadataObjectType_create(metadata.MetadataObjectType{
		Name: "__type.parent",
		Properties: []*metadata.MetadataProperty{
			testutil.Property("child", metadata.MetadataSchema_create(metadata.MetadataSchema{
				Required: true,
				Objects: []*metadata.MetadataObject{
					metadata.MetadataObject_create(metadata.MetadataObject{Type: child}),
				},
			})),
		},
	})
	if !parent.IsPlain() {
		t.Fatal("one-level nested plain object should be plain")
	}
	if parent.IsPlain(1) {
		t.Fatal("nested object should not be plain once depth limit is reached")
	}
}
