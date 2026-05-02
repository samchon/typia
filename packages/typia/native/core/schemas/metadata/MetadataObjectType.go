package metadata

import "strings"

type IMetadataSchema_IObjectType struct {
  Name        string
  Properties  []*IMetadataSchema_IProperty
  Description *string
  JsDocTags   []IJsDocTagInfo
  Index       int
  Recursive   bool
  Nullables   []bool
}

type MetadataObjectType struct {
  Name        string
  Properties  []*MetadataProperty
  Description *string
  JsDocTags   []IJsDocTagInfo
  Index       int
  Validated   bool
  Recursive   bool
  Nullables   []bool
  Tagged_     bool
  literal_    *bool
}

func MetadataObjectType_create(props MetadataObjectType) *MetadataObjectType {
  name := strings.ToValidUTF8(props.Name, "__")
  name = strings.ReplaceAll(name, "\uFFFD", "__")
  return &MetadataObjectType{
    Name:        name,
    Properties:  props.Properties,
    Description: props.Description,
    JsDocTags:   append([]IJsDocTagInfo{}, props.JsDocTags...),
    Index:       props.Index,
    Validated:   props.Validated,
    Recursive:   props.Recursive,
    Nullables:   append([]bool{}, props.Nullables...),
    Tagged_:     false,
  }
}

func MetadataObjectType__From_without_properties(obj IMetadataSchema_IObjectType) *MetadataObjectType {
  return MetadataObjectType_create(MetadataObjectType{
    Name:        obj.Name,
    Properties:  []*MetadataProperty{},
    Description: obj.Description,
    JsDocTags:   obj.JsDocTags,
    Index:       obj.Index,
    Validated:   false,
    Recursive:   obj.Recursive,
    Nullables:   obj.Nullables,
  })
}

func (obj *MetadataObjectType) IsPlain(level ...int) bool {
  lv := 0
  if len(level) > 0 {
    lv = level[0]
  }
  if obj.Recursive || len(obj.Properties) >= 10 {
    return false
  }
  for _, property := range obj.Properties {
    if property.Key.IsSoleLiteral() == false ||
      property.Value.Size() != 1 ||
      property.Value.IsRequired() == false ||
      property.Value.Nullable {
      return false
    }
    if len(property.Value.Atomics) == 1 {
      continue
    }
    if lv < 1 && len(property.Value.Objects) == 1 && property.Value.Objects[0].Type.IsPlain(lv+1) {
      continue
    }
    return false
  }
  return true
}

func (obj *MetadataObjectType) IsLiteral() bool {
  if obj.literal_ != nil {
    return *obj.literal_
  }
  value := false
  if obj.Recursive == false {
    name := strings.ToValidUTF8(obj.Name, "__")
    name = strings.ReplaceAll(name, "\uFFFD", "__")
    value = name == "__type" ||
      name == "__object" ||
      strings.HasPrefix(name, "__type.") ||
      strings.HasPrefix(name, "__object.") ||
      strings.Contains(name, "readonly [")
  }
  obj.literal_ = &value
  return value
}

func (obj *MetadataObjectType) ToJSON() IMetadataSchema_IObjectType {
  properties := make([]*IMetadataSchema_IProperty, 0, len(obj.Properties))
  for _, property := range obj.Properties {
    json := property.ToJSON()
    properties = append(properties, &json)
  }
  return IMetadataSchema_IObjectType{
    Name:        obj.Name,
    Properties:  properties,
    Description: obj.Description,
    JsDocTags:   append([]IJsDocTagInfo{}, obj.JsDocTags...),
    Index:       obj.Index,
    Recursive:   obj.Recursive,
    Nullables:   append([]bool{}, obj.Nullables...),
  }
}

func MetadataObjectType_intersects(x *MetadataObjectType, y *MetadataObjectType) bool {
  for _, prop := range x.Properties {
    for _, oppo := range y.Properties {
      if prop.Key.GetName() == oppo.Key.GetName() {
        return true
      }
    }
  }
  return false
}

func MetadataObjectType_covers(x *MetadataObjectType, y *MetadataObjectType) bool {
  if len(x.Properties) < len(y.Properties) {
    return false
  }
  for _, prop := range x.Properties {
    found := false
    for _, oppo := range y.Properties {
      if prop.Key.GetName() == oppo.Key.GetName() {
        found = true
        break
      }
    }
    if found == false {
      return false
    }
  }
  return true
}
