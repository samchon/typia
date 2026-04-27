package emitter

import (
	"testing"

	"github.com/samchon/typia/packages/core/native/metadata"
)

func TestReflectTemplateRowsAreSchemas(t *testing.T) {
	schema := metadata.NewSchema()
	schema.Templates = append(schema.Templates, metadata.Template{
		RawName: "`prefix-${number}`",
	})
	serialized := serializeTemplates(schema.Templates)
	if len(serialized) != 1 {
		t.Fatalf("expected one template, got %d", len(serialized))
	}
	template := serialized[0].(map[string]any)
	row := template["row"].([]any)
	if len(row) != 2 {
		t.Fatalf("expected literal and number row entries, got %#v", row)
	}
	if _, ok := row[0].(map[string]any); !ok {
		t.Fatalf("template row literal must be a schema, got %#v", row[0])
	}
	second := row[1].(map[string]any)
	atomics := second["atomics"].([]any)
	if atomics[0].(map[string]any)["type"] != metadata.AtomicNumber {
		t.Fatalf("template placeholder should serialize as number schema: %#v", second)
	}
}

func TestReflectObjectTypeMatchesPublicContract(t *testing.T) {
	description := "object docs"
	propDescription := "property docs"
	key := metadata.NewSchema()
	key.AddConstant(metadata.AtomicString, "value")
	value := metadata.NewSchema()
	value.AddAtomic(metadata.AtomicString)
	dynamicKey := metadata.NewSchema()
	dynamicKey.Templates = append(dynamicKey.Templates, metadata.Template{RawName: "`extra_${string}`"})
	additional := metadata.NewSchema()
	additional.AddAtomic(metadata.AtomicNumber)

	obj := &metadata.ObjectType{
		Name:        "Sample",
		Description: &description,
		JsDocTags:   []string{"deprecated"},
		Index:       7,
		Properties: []*metadata.Property{{
			Key:         key,
			Value:       value,
			Description: &propDescription,
			JsDocTags:   []string{"tag"},
			JsDocTexts:  map[string][]string{"tag": {"details"}},
		}},
		DynamicProperties: []*metadata.Property{{
			Key:   dynamicKey,
			Value: value,
		}},
		AdditionalProperties: additional,
	}
	serialized := serializeObjectType(obj).(map[string]any)
	if _, ok := serialized["dynamicProperties"]; ok {
		t.Fatalf("reflect object type must not expose dynamicProperties: %#v", serialized)
	}
	if _, ok := serialized["additionalProperties"]; ok {
		t.Fatalf("reflect object type must not expose additionalProperties: %#v", serialized)
	}
	if serialized["description"] != description {
		t.Fatalf("object description not preserved: %#v", serialized["description"])
	}
	tags := serialized["jsDocTags"].([]any)
	if tags[0].(map[string]any)["name"] != "deprecated" {
		t.Fatalf("object jsDocTags not preserved: %#v", tags)
	}
	properties := serialized["properties"].([]any)
	property := properties[0].(map[string]any)
	if property["description"] != propDescription {
		t.Fatalf("property description not preserved: %#v", property["description"])
	}
	propTags := property["jsDocTags"].([]any)
	if propTags[0].(map[string]any)["name"] != "tag" {
		t.Fatalf("property jsDocTags not preserved: %#v", propTags)
	}
	if _, ok := property["mutability"]; ok {
		t.Fatalf("unknown mutability should be omitted instead of serialized as null: %#v", property)
	}
}
