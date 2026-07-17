package iterate

import (
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

func json_schema_discriminator(metadata *nativemetadata.MetadataSchema) JsonSchema {
  objects := json_schema_discriminator_objects(metadata)
  if len(objects) == 0 || json_schema_discriminator_hasLiteral(objects) {
    return nil
  }
  specialized := nativehelpers.UnionPredicator.Object(objects)
  meet := len(specialized) == len(objects)
  if meet {
    keys := map[string]struct{}{}
    for _, item := range specialized {
      key := item.Property.Key.GetSoleLiteral()
      value := item.Property.Value.GetSoleLiteral()
      if key == nil || value == nil {
        meet = false
        break
      }
      keys[*key] = struct{}{}
    }
    if len(keys) != 1 {
      meet = false
    }
  }
  if meet == false {
    return nil
  }
  propertyName := specialized[0].Property.Key.GetSoleLiteral()
  mapping := JsonSchema{}
  for _, item := range specialized {
    value := item.Property.Value.GetSoleLiteral()
    mapping[*value] = "#/components/schemas/" + item.Object.Name
  }
  return JsonSchema{
    "propertyName": *propertyName,
    "mapping":      mapping,
  }
}

// json_schema_discriminator_objects resolves every union member to the object
// type whose `$ref` that member exports, and returns nil unless all of them do.
//
// Declaration syntax decides only which bucket a member lands in: an `interface`
// member arrives in `Objects`, while a `type` alias of an object literal arrives
// in `Aliases`. Both export the same `$ref`, so both are eligible to carry a
// discriminator and eligibility must not depend on the bucket.
//
// The alias branch mirrors json_schema_alias's delegation condition exactly, so
// the resolved object's name stays equal to the `$ref` the member exports, which
// is what the mapping has to target. An alias naming anything else -- an atomic,
// a union, or another alias -- exports a `$ref` to the alias itself rather than
// to an object, so it is not resolvable here.
func json_schema_discriminator_objects(metadata *nativemetadata.MetadataSchema) []*nativemetadata.MetadataObjectType {
  if metadata.Size() == 0 ||
    metadata.Size() != len(metadata.Objects)+len(metadata.Aliases) {
    return nil
  }
  objects := make([]*nativemetadata.MetadataObjectType, 0, metadata.Size())
  for _, object := range metadata.Objects {
    objects = append(objects, object.Type)
  }
  for _, alias := range metadata.Aliases {
    value := alias.Type.Value
    if value == nil || value.Size() != 1 || len(value.Objects) != 1 {
      return nil
    }
    objects = append(objects, value.Objects[0].Type)
  }
  return objects
}

func json_schema_discriminator_hasLiteral(objects []*nativemetadata.MetadataObjectType) bool {
  for _, object := range objects {
    if object.IsLiteral() {
      return true
    }
  }
  return false
}
