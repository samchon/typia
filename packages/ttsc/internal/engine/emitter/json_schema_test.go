package emitter

import (
	"encoding/json"
	"strings"
	"testing"

	"github.com/samchon/typia/packages/ttsc/internal/engine/metadata"
)

func TestJsonSchemaPrimitive(t *testing.T) {
	s := metadata.NewSchema().AddAtomic(metadata.AtomicString)
	got, err := EmitJsonSchemaExpression(s)
	if err != nil {
		t.Fatal(err)
	}
	// Outermost `( ... )` wraps the JSON; unwrap before unmarshalling.
	got = strings.TrimSpace(strings.TrimPrefix(strings.TrimSuffix(got, ")"), "("))
	var out map[string]any
	if err := json.Unmarshal([]byte(got), &out); err != nil {
		t.Fatalf("expected valid JSON, got: %v\n%s", err, got)
	}
	if v := out["version"]; v != "3.1" {
		t.Errorf("version mismatch, got %v", v)
	}
	schema, ok := out["schema"].(map[string]any)
	if !ok {
		t.Fatalf("schema field missing: %v", out)
	}
	if schema["type"] != "string" {
		t.Errorf("expected type=string, got %v", schema["type"])
	}
}

func TestJsonSchemaObjectWithRequired(t *testing.T) {
	keyID := metadata.NewSchema()
	keyID.AddConstant(metadata.AtomicString, "id")
	keyAge := metadata.NewSchema()
	keyAge.AddConstant(metadata.AtomicString, "age")
	obj := &metadata.ObjectType{
		Name: "User",
		Properties: []*metadata.Property{
			{Key: keyID, Value: metadata.NewSchema().AddAtomic(metadata.AtomicString)},
			{Key: keyAge, Value: metadata.NewSchema().AddAtomic(metadata.AtomicNumber)},
		},
	}
	s := metadata.NewSchema()
	s.Objects = append(s.Objects, &metadata.ObjectRef{Type: obj})
	got, err := EmitJsonSchemaExpression(s)
	if err != nil {
		t.Fatal(err)
	}
	raw := strings.TrimSpace(strings.TrimPrefix(strings.TrimSuffix(got, ")"), "("))
	var out struct {
		Schema struct {
			Type       string              `json:"type"`
			Required   []string            `json:"required"`
			Properties map[string]struct{} `json:"properties"`
		} `json:"schema"`
	}
	if err := json.Unmarshal([]byte(raw), &out); err != nil {
		t.Fatalf("unmarshal: %v\n%s", err, raw)
	}
	if out.Schema.Type != "object" {
		t.Errorf("type mismatch: %s", out.Schema.Type)
	}
	if len(out.Schema.Required) != 2 {
		t.Errorf("expected 2 required, got %v", out.Schema.Required)
	}
	if _, ok := out.Schema.Properties["id"]; !ok {
		t.Errorf("expected id property, got %v", out.Schema.Properties)
	}
}
