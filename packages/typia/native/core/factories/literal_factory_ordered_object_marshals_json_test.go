package factories

import (
  "encoding/json"
  "testing"
)

// TestLiteralFactoryOrderedObjectMarshalsJSON locks the encoding/json
// representation of LiteralFactory_OrderedObject. Downstream consumers
// marshal schema metadata containing these objects (nestia's SDK transform
// builds swagger documents from it); without a MarshalJSON override the raw
// {Keys, Values} struct fields leaked into generated documents as
// `properties.Keys = [...]`, producing invalid OpenAPI schemas.
//
// The JSON form must be the plain object the printer would emit: entries in
// Keys order, entries absent from Values skipped, nil-like values skipped,
// and nested ordered objects (value or pointer) serialized the same way.
func TestLiteralFactoryOrderedObjectMarshalsJSON(t *testing.T) {
  input := LiteralFactory_OrderedObject{
    Keys: []string{"second", "first", "absent", "nil", "nested"},
    Values: map[string]any{
      "second": 2,
      "first":  1,
      "nil":    nil,
      "nested": &LiteralFactory_OrderedObject{
        Keys:   []string{"z", "a"},
        Values: map[string]any{"z": "Z", "a": "A"},
      },
      "unlisted": true,
    },
  }
  data, err := json.Marshal(input)
  if err != nil {
    t.Fatalf("marshal failed: %v", err)
  }
  expected := `{"second":2,"first":1,"nested":{"z":"Z","a":"A"}}`
  if string(data) != expected {
    t.Fatalf("unexpected JSON:\nexpected %s\nactual   %s", expected, string(data))
  }
}
