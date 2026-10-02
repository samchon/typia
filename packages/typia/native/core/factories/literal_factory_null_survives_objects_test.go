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
//
// @evidence contracts/testing.md#behavioral-verification The null marker is marshaled in a plain map; an ordered object then compares the retained null marker with an omitted plain nil. The nil-like classifier must reject the marker and accept nil.
// @evidence contracts/testing.md#independent-expectations JSON null must survive while Go nil is dropped by object writers; the expected JSON text is authored.
// @evidence contracts/testing.md#distinguishing-cases Marker versus nil is checked in the ordered object and in the classifier; the plain map checks only marker serialization. The emitted AST is owned by the named TypeScript integration test.
// @evidence contracts/testing.md#execution-ownership The canonical native Go command (pnpm test:go:native) runs this same-package Test function in process. It marshals in memory with no checker, filesystem fixture or process.
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
