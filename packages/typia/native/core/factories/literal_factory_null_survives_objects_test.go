package factories

import (
  "encoding/json"
  "testing"
)

// TestLiteralFactoryNullSurvivesObjects verifies an explicit JSON null is kept
// where a Go nil is dropped.
//
// Object writers treat a nil value as absent, so a tag schema holding a real
// `null` (`tags.Example<null>`) lost it on emission (samchon/typia#2403). The
// LiteralFactory_Null marker must survive encoding/json, which `typia.reflect`
// metadata goes through, including inside an ordered object, and must not be
// classified as nil-like, while a plain nil keeps meaning absent. The printed
// literal path is covered by `test_json_schema_example_tuple_and_null`.
//
//  1. Marshal a map and an ordered object holding the marker and a plain nil.
//  2. Assert the marker is written as null and the plain nil is omitted where
//     the writer omits it.
//  3. Assert the marker is not nil-like.
func TestLiteralFactoryNullSurvivesObjects(t *testing.T) {
  encoded, err := json.Marshal(map[string]any{"example": LiteralFactory_Null{}})
  if err != nil || string(encoded) != `{"example":null}` {
    t.Fatalf("map marker should marshal as null, got %s (%v)", encoded, err)
  }
  ordered, err := json.Marshal(LiteralFactory_OrderedObject{
    Keys: []string{"kept", "absent"},
    Values: map[string]any{
      "kept":   LiteralFactory_Null{},
      "absent": nil,
    },
  })
  if err != nil || string(ordered) != `{"kept":null}` {
    t.Fatalf("ordered object should keep the marker and drop nil, got %s (%v)", ordered, err)
  }
  if literalFactory_isNilLike(LiteralFactory_Null{}) {
    t.Fatal("the null marker must not be nil-like")
  }
  if literalFactory_isNilLike(nil) == false {
    t.Fatal("a plain nil must stay nil-like")
  }
}
