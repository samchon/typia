package helpers

import nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"

type unionPredicatorNamespace struct{}

var UnionPredicator = unionPredicatorNamespace{}

type UnionPredicator_ISpecialized struct {
  Index    int
  Object   *nativemetadata.MetadataObjectType
  Property *nativemetadata.MetadataProperty
  Neighbor bool
}

type unionPredicator_ISpecializedProperty struct {
  Property *nativemetadata.MetadataProperty
  Neighbor bool
}

type unionPredicator_propertyEntry struct {
  Property *nativemetadata.MetadataProperty
  Key      string
}

func (unionPredicatorNamespace) Object(objects []*nativemetadata.MetadataObjectType) []UnionPredicator_ISpecialized {
  matrix := map[string][]*nativemetadata.MetadataProperty{}
  entries := make([][]unionPredicator_propertyEntry, len(objects))
  for i, obj := range objects {
    entries[i] = make([]unionPredicator_propertyEntry, 0, len(obj.Properties))
    for _, prop := range obj.Properties {
      key := prop.Key.GetSoleLiteral()
      if key == nil {
        continue
      }
      text := *key
      if _, ok := matrix[text]; ok == false {
        matrix[text] = make([]*nativemetadata.MetadataProperty, len(objects))
      }
      matrix[text][i] = prop
      entries[i] = append(entries[i], unionPredicator_propertyEntry{
        Property: prop,
        Key:      text,
      })
    }
  }

  output := []UnionPredicator_ISpecialized{}
  for i, entry := range entries {
    children := []unionPredicator_ISpecializedProperty{}
    for _, item := range entry {
      prop := item.Property
      if prop.Value.IsRequired() == false {
        continue
      }
      neighbor := false
      unique := true
      for k, oppo := range matrix[item.Key] {
        if i != k && oppo != nil {
          neighbor = true
          if nativemetadata.MetadataSchema_intersects(prop.Value, oppo.Value) {
            unique = false
            break
          }
        }
      }
      if unique {
        children = append(children, unionPredicator_ISpecializedProperty{
          Property: prop,
          Neighbor: neighbor,
        })
      }
    }
    if len(children) == 0 {
      continue
    }
    top := children[0]
    for _, child := range children {
      if child.Property.Value.IsConstant() {
        top = child
        break
      }
    }
    output = append(output, UnionPredicator_ISpecialized{
      Index:    i,
      Object:   objects[i],
      Property: top.Property,
      Neighbor: top.Neighbor,
    })
  }
  return output
}
