package iterate

import (
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

func json_schema_discriminator(metadata *nativemetadata.MetadataSchema) JsonSchema {
  if metadata.Size() == 0 ||
    metadata.Size() != len(metadata.Objects) ||
    json_schema_discriminator_hasLiteral(metadata) {
    return nil
  }
  objects := make([]*nativemetadata.MetadataObjectType, 0, len(metadata.Objects))
  for _, object := range metadata.Objects {
    objects = append(objects, object.Type)
  }
  specialized := nativehelpers.UnionPredicator.Object(objects)
  meet := len(specialized) == len(metadata.Objects)
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

func json_schema_discriminator_hasLiteral(metadata *nativemetadata.MetadataSchema) bool {
  for _, object := range metadata.Objects {
    if object.Type.IsLiteral() {
      return true
    }
  }
  return false
}
