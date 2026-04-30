package metadata

import shimchecker "github.com/microsoft/typescript-go/shim/checker"

type IMetadataSchema_IParameter struct {
	Name        string
	Type        *IMetadataSchema
	Description *string
	JsDocTags   []IJsDocTagInfo
}

type MetadataParameter struct {
	Name        string
	Type        *MetadataSchema
	Description *string
	JsDocTags   []IJsDocTagInfo
	TsType      *shimchecker.Type
}

func MetadataParameter_create(props MetadataParameter) *MetadataParameter {
	return &MetadataParameter{
		Name:        props.Name,
		Type:        props.Type,
		Description: props.Description,
		JsDocTags:   append([]IJsDocTagInfo{}, props.JsDocTags...),
		TsType:      props.TsType,
	}
}

func MetadataParameter_from(json IMetadataSchema_IParameter, dict IMetadataDictionary) *MetadataParameter {
	return MetadataParameter_create(MetadataParameter{
		Name:        json.Name,
		Type:        MetadataSchema_from(json.Type, dict),
		Description: json.Description,
		JsDocTags:   json.JsDocTags,
	})
}

func (obj *MetadataParameter) ToJSON() IMetadataSchema_IParameter {
	return IMetadataSchema_IParameter{
		Name:        obj.Name,
		Type:        obj.Type.ToJSON(),
		Description: obj.Description,
		JsDocTags:   append([]IJsDocTagInfo{}, obj.JsDocTags...),
	}
}
