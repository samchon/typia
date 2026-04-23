package emitter

import (
	"strings"
	"testing"

	"github.com/samchon/typia/packages/core/native/metadata"
)

func TestMiscPruneDeletesUnknownKeysForDynamicObject(t *testing.T) {
	key := metadata.NewSchema()
	key.Templates = append(key.Templates, metadata.Template{
		RawName: "`prefix_${string}`",
	})

	value := metadata.NewSchema().AddAtomic(metadata.AtomicString)
	obj := &metadata.ObjectType{
		Name: "DynamicTemplate",
		DynamicProperties: []*metadata.Property{
			{Key: key, Value: value},
		},
		// Analyzer keeps the merged index-signature value here too. Prune must
		// still delete keys that do not match the declared dynamic-key pattern.
		AdditionalProperties: metadata.NewSchema().AddAtomic(metadata.AtomicString),
	}
	schema := metadata.NewSchema()
	schema.Objects = append(schema.Objects, &metadata.ObjectRef{Type: obj})

	got, err := EmitMiscPruneArrowFunction(schema)
	if err != nil {
		t.Fatal(err)
	}
	if strings.Contains(got, `continue; delete v[__k];`) {
		t.Fatalf("unexpected unreachable delete fallback in prune emitter:\n%s", got)
	}
	if !strings.Contains(got, `delete v[__k];`) {
		t.Fatalf("expected prune emitter to delete unknown keys, got:\n%s", got)
	}
}
