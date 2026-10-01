package metadata

import "testing"

// TestMetadataObjectTypeRequiredLiteralPropertyCaches verifies object-level
// required literal detection is computed once.
//
// Object validators ask this question repeatedly when array element decoders
// revisit the same metadata. The answer depends only on the completed property
// list, so the object type caches it after the first scan.
//
// @evidence contracts/testing.md#behavioral-verification The required-literal-property query is called repeatedly on an object, an inheriting child and a parent; results and the cached state are asserted, and parent properties must not leak into the child's check-only list.
// @evidence contracts/testing.md#independent-expectations Authored property lists state the answer; the cache assertions pin an implementation property (compute once) and are performance-oriented, not behavioral.
// @evidence contracts/testing.md#distinguishing-cases Detected, cached, inherited and non-leaking cases; objects with no required literal are not asserted.
// @evidence contracts/testing.md#execution-ownership The canonical native Go command (pnpm test:go:native) runs this same-package Test function in process. It calls the exported methods in memory with no filesystem fixture, process or native command build.
func TestMetadataObjectTypeRequiredLiteralPropertyCaches(t *testing.T) {
  key := MetadataSchema_initialize()
  key.Constants = append(key.Constants, MetadataConstant_create(MetadataConstant{
    Type: "string",
    Values: []*MetadataConstantValue{
      MetadataConstantValue_create(MetadataConstantValue{Value: "name"}),
    },
  }))
  value := MetadataSchema_initialize()
  value.Atomics = append(value.Atomics, MetadataAtomic_create(MetadataAtomic{Type: "string"}))

  object := MetadataObjectType_create(MetadataObjectType{
    Name: "__type",
    Properties: []*MetadataProperty{
      MetadataProperty_create(MetadataProperty{Key: key, Value: value}),
    },
  })

  if object.HasRequiredLiteralProperty() == false {
    t.Fatalf("required literal property was not detected")
  }
  if object.required_literal_ == nil || *object.required_literal_ == false {
    t.Fatalf("required literal property result was not cached")
  }

  child := MetadataObjectType_create(MetadataObjectType{
    Name:       "Child",
    Properties: []*MetadataProperty{},
  })
  child.Parent_objects_ = append(child.Parent_objects_, MetadataObject_create(MetadataObject{
    Type: object,
    Tags: [][]IMetadataTypeTag{},
  }))
  child.Check_properties_ = []*MetadataProperty{}
  if child.HasRequiredLiteralProperty() == false {
    t.Fatalf("required literal property was not inherited from parent object")
  }
  if len(child.CheckProperties()) != 0 {
    t.Fatalf("parent properties leaked into child check-only properties")
  }
}
