package emitter

import (
	"strings"
	"testing"

	"github.com/samchon/typia/packages/core/native/metadata"
)

func TestProtobufMessageFlattensSyntheticIntersectionNames(t *testing.T) {
	keyEmail := metadata.NewSchema()
	keyEmail.AddConstant(metadata.AtomicString, "email")
	keyName := metadata.NewSchema()
	keyName.AddConstant(metadata.AtomicString, "name")
	keyVulnerable := metadata.NewSchema()
	keyVulnerable.AddConstant(metadata.AtomicString, "vulnerable")

	obj := &metadata.ObjectType{
		Name: "Intersection<ObjectIntersection.IEmail & ObjectIntersection.IName>",
		Properties: []*metadata.Property{
			{Key: keyEmail, Value: metadata.NewSchema().AddAtomic(metadata.AtomicString)},
			{Key: keyName, Value: metadata.NewSchema().AddAtomic(metadata.AtomicString)},
			{Key: keyVulnerable, Value: metadata.NewSchema().AddAtomic(metadata.AtomicBoolean)},
		},
	}

	got, err := protobufMessage(obj)
	if err != nil {
		t.Fatal(err)
	}
	if !strings.Contains(got, "message Intersection_lt_ObjectIntersection_IEmail_space__and__space_ObjectIntersection_IName_gt_ {") {
		t.Fatalf("expected flat synthetic intersection message name, got:\n%s", got)
	}
	if strings.Contains(got, "message IEmail") || strings.Contains(got, "message IName") {
		t.Fatalf("expected no nested message hierarchy for synthetic intersection name, got:\n%s", got)
	}
	if !strings.Contains(got, "string email = 1;") ||
		!strings.Contains(got, "string name = 2;") ||
		!strings.Contains(got, "bool vulnerable = 3;") {
		t.Fatalf("expected top-level fields to be preserved, got:\n%s", got)
	}
}

func TestProtobufMessageReferencesFlattenedSyntheticIntersectionTypes(t *testing.T) {
	keyValue := metadata.NewSchema()
	keyValue.AddConstant(metadata.AtomicString, "value")
	child := &metadata.ObjectType{
		Name: "Intersection<Foo.Left & Foo.Right>",
		Properties: []*metadata.Property{
			{Key: keyValue, Value: metadata.NewSchema().AddAtomic(metadata.AtomicString)},
		},
	}

	keyChild := metadata.NewSchema()
	keyChild.AddConstant(metadata.AtomicString, "child")
	parent := &metadata.ObjectType{
		Name: "Parent",
		Properties: []*metadata.Property{
			{
				Key: keyChild,
				Value: &metadata.Schema{
					Required: true,
					Objects:  []*metadata.ObjectRef{{Type: child}},
				},
			},
		},
	}

	got, err := protobufMessage(parent)
	if err != nil {
		t.Fatal(err)
	}
	if !strings.Contains(got, "Intersection_lt_Foo_Left_space__and__space_Foo_Right_gt_ child = 1;") {
		t.Fatalf("expected flattened synthetic intersection reference, got:\n%s", got)
	}
	if !strings.Contains(got, "message Intersection_lt_Foo_Left_space__and__space_Foo_Right_gt_ {") {
		t.Fatalf("expected referenced synthetic intersection message to be emitted, got:\n%s", got)
	}
}
