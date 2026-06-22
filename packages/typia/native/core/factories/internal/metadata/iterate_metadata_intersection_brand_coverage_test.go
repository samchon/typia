//go:build typia_native_internal
// +build typia_native_internal

package metadata

import (
  "testing"

  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestIterateMetadataIntersectionBrandCoverage exercises the phantom-brand
// predicates (issue #1967) as pure schema functions.
//
// A `Base & Marker` intersection drops the marker object only when every one of
// its properties is phantom: optional or symbol-keyed. A required string-keyed
// property — literal or not — carries (potentially) real data and must keep the
// whole intersection nonsensible. These predicates run on a `MetadataObjectType`,
// so crafted fixtures cover each branch without a checker.
//
//  1. Drive the symbol-key predicate across every case.
//  2. Drive the per-property phantom predicate (optional / symbol / required).
//  3. Drive the removable-brand object predicate end to end.
func TestIterateMetadataIntersectionBrandCoverage(t *testing.T) {
  atomic := func(typ string) *schemametadata.MetadataSchema {
    m := schemametadata.MetadataSchema_initialize()
    m.Atomics = append(m.Atomics, schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{Type: typ}))
    return m
  }
  constant := func(value any) *schemametadata.MetadataSchema {
    m := schemametadata.MetadataSchema_initialize()
    m.Constants = append(m.Constants, schemametadata.MetadataConstant_create(schemametadata.MetadataConstant{
      Type:   "string",
      Values: []*schemametadata.MetadataConstantValue{schemametadata.MetadataConstantValue_create(schemametadata.MetadataConstantValue{Value: value})},
    }))
    return m
  }
  optional := func(m *schemametadata.MetadataSchema) *schemametadata.MetadataSchema {
    m.Optional = true
    return m
  }
  prop := func(key, value *schemametadata.MetadataSchema) *schemametadata.MetadataProperty {
    return schemametadata.MetadataProperty_create(schemametadata.MetadataProperty{Key: key, Value: value})
  }
  object := func(props ...*schemametadata.MetadataProperty) *schemametadata.MetadataSchema {
    m := schemametadata.MetadataSchema_initialize()
    objectType := schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{Name: "__type", Properties: props})
    m.Objects = append(m.Objects, schemametadata.MetadataObject_create(schemametadata.MetadataObject{Type: objectType, Tags: [][]schemametadata.IMetadataTypeTag{}}))
    return m
  }
  symbolKey := constant("\xfe@sym@1")

  // --- is_symbol_key ----------------------------------------------------
  if iterate_metadata_intersection_is_symbol_key(nil) {
    t.Fatal("nil key is not a symbol key")
  }
  if iterate_metadata_intersection_is_symbol_key(atomic("string")) {
    t.Fatal("a non-literal key is not a symbol key")
  }
  if iterate_metadata_intersection_is_symbol_key(constant("name")) {
    t.Fatal("a plain name is not a symbol key")
  }
  if iterate_metadata_intersection_is_symbol_key(symbolKey) == false {
    t.Fatal("a 0xFE-prefixed key is a symbol key")
  }

  // --- is_phantom_property ---------------------------------------------
  if iterate_metadata_intersection_is_phantom_property(nil) {
    t.Fatal("nil property is not phantom")
  }
  if iterate_metadata_intersection_is_phantom_property(prop(constant("k"), nil)) {
    t.Fatal("a nil-valued property is not phantom")
  }
  if iterate_metadata_intersection_is_phantom_property(prop(constant("k"), optional(atomic("number")))) == false {
    t.Fatal("an optional member is phantom")
  }
  if iterate_metadata_intersection_is_phantom_property(prop(symbolKey, atomic("number"))) == false {
    t.Fatal("a symbol-keyed member is phantom")
  }
  if iterate_metadata_intersection_is_phantom_property(prop(constant("__brand"), constant("x"))) {
    t.Fatal("a required literal member is real data, not phantom")
  }
  if iterate_metadata_intersection_is_phantom_property(prop(constant("data"), atomic("number"))) {
    t.Fatal("a required non-literal data member is NOT phantom")
  }

  // --- is_removable_brand ----------------------------------------------
  if iterate_metadata_intersection_is_removable_brand(nil) {
    t.Fatal("nil schema is not a removable brand")
  }
  if iterate_metadata_intersection_is_removable_brand(atomic("string")) {
    t.Fatal("a primitive is not a removable brand")
  }
  if iterate_metadata_intersection_is_removable_brand(object()) == false {
    t.Fatal("an empty marker object is a removable brand")
  }
  if iterate_metadata_intersection_is_removable_brand(object(prop(symbolKey, atomic("number")))) == false {
    t.Fatal("a symbol-keyed marker object is removable")
  }
  if iterate_metadata_intersection_is_removable_brand(object(prop(constant("k"), optional(atomic("number"))))) == false {
    t.Fatal("an optional-only marker object is removable")
  }
  if iterate_metadata_intersection_is_removable_brand(object(prop(constant("__brand"), constant("x")))) {
    t.Fatal("a required literal-brand object is real data, not removable")
  }
  if iterate_metadata_intersection_is_removable_brand(object(prop(constant("data"), atomic("number")))) {
    t.Fatal("an object with a real data member is NOT removable")
  }
  recursive := object()
  recursive.Objects[0].Type.Recursive = true
  if iterate_metadata_intersection_is_removable_brand(recursive) {
    t.Fatal("a recursive object is not a removable brand")
  }
}
