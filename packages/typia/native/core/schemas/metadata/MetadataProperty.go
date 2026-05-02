package metadata

import nativeprotobuf "github.com/samchon/typia/packages/typia/native/core/schemas/protobuf"

type IMetadataSchema_IProperty struct {
  Key         *IMetadataSchema
  Value       *IMetadataSchema
  Description *string
  JsDocTags   []IJsDocTagInfo
  Mutability  *string
}

type MetadataProperty struct {
  Key          *MetadataSchema
  Value        *MetadataSchema
  Description  *string
  JsDocTags    []IJsDocTagInfo
  Mutability   *string
  Of_protobuf_ *nativeprotobuf.IProtobufProperty
}

func MetadataProperty_create(props MetadataProperty) *MetadataProperty {
  return &MetadataProperty{
    Key:         props.Key,
    Value:       props.Value,
    Description: props.Description,
    JsDocTags:   append([]IJsDocTagInfo{}, props.JsDocTags...),
    Mutability:  props.Mutability,
  }
}

func MetadataProperty_from(property IMetadataSchema_IProperty, dict IMetadataDictionary) *MetadataProperty {
  return MetadataProperty_create(MetadataProperty{
    Key:         MetadataSchema_from(property.Key, dict),
    Value:       MetadataSchema_from(property.Value, dict),
    Description: property.Description,
    JsDocTags:   append([]IJsDocTagInfo{}, property.JsDocTags...),
    Mutability:  property.Mutability,
  })
}

func (obj *MetadataProperty) ToJSON() IMetadataSchema_IProperty {
  return IMetadataSchema_IProperty{
    Key:         obj.Key.ToJSON(),
    Value:       obj.Value.ToJSON(),
    Description: obj.Description,
    JsDocTags:   append([]IJsDocTagInfo{}, obj.JsDocTags...),
    Mutability:  obj.Mutability,
  }
}
