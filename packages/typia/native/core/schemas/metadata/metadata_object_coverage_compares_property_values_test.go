package metadata

import "testing"

// TestMetadataObjectCoverageComparesPropertyValues verifies that an object
// schema covers another only when the property values cover as well.
//
// Object coverage matched properties by key name alone, so `{ id: string }`
// covered `{ id: number }` and a union reduction could treat the first as
// accepting everything the second does. The values of the same key must cover
// too.
//
//  1. Build objects with the same key and a string, a string and a number value.
//  2. Assert the equal-valued objects cover each other.
//  3. Assert the string object and the number object cover neither way.
//  4. Assert an object with an extra key is not covered by the smaller one.
//
// @evidence contracts/testing.md#behavioral-verification MetadataSchema_covers is called on object schemas built in memory and its verdicts are asserted in both directions.
// @evidence contracts/testing.md#independent-expectations The expected verdicts follow from the definition of coverage and are authored literals, not values read from the implementation.
// @evidence contracts/testing.md#distinguishing-cases Same value, different value and different key count give a positive and two negatives; the key-name-only implementation fails the different-value case.
// @evidence contracts/testing.md#execution-ownership The canonical native Go command (pnpm test:go:native) runs this same-package Test function in process on constructed schemas, with no checker, filesystem fixture or process.
func TestMetadataObjectCoverageComparesPropertyValues(t *testing.T) {
  atomic := func(kind string) *MetadataSchema {
    schema := MetadataSchema_initialize()
    schema.Atomics = append(schema.Atomics, MetadataAtomic_create(MetadataAtomic{Type: kind}))
    return schema
  }
  literal := func(key string) *MetadataSchema {
    schema := MetadataSchema_initialize()
    schema.Constants = append(schema.Constants, MetadataConstant_create(MetadataConstant{
      Type:   "string",
      Values: []*MetadataConstantValue{MetadataConstantValue_create(MetadataConstantValue{Value: key})},
    }))
    return schema
  }
  object := func(name string, values map[string]*MetadataSchema, keys ...string) *MetadataSchema {
    properties := []*MetadataProperty{}
    for _, key := range keys {
      properties = append(properties, MetadataProperty_create(MetadataProperty{Key: literal(key), Value: values[key]}))
    }
    schema := MetadataSchema_initialize()
    schema.Objects = append(schema.Objects, MetadataObject_create(MetadataObject{
      Type: MetadataObjectType_create(MetadataObjectType{Name: name, Properties: properties}),
    }))
    return schema
  }
  text := object("Text", map[string]*MetadataSchema{"id": atomic("string")}, "id")
  textAgain := object("TextAgain", map[string]*MetadataSchema{"id": atomic("string")}, "id")
  number := object("Number", map[string]*MetadataSchema{"id": atomic("number")}, "id")
  larger := object("Larger", map[string]*MetadataSchema{"id": atomic("string"), "name": atomic("string")}, "id", "name")

  if MetadataSchema_covers(text, textAgain) == false || MetadataSchema_covers(textAgain, text) == false {
    t.Fatal("objects with equal property values should cover each other")
  }
  if MetadataSchema_covers(text, number) || MetadataSchema_covers(number, text) {
    t.Fatal("objects whose property values differ must not cover each other")
  }
  if MetadataSchema_covers(text, larger) {
    t.Fatal("an object must not cover another with more properties")
  }
}
