package metadata

import (
	"encoding/json"
	"fmt"
	"strings"
)

type IJsDocTagInfo struct {
	Name string
	Text []IJsDocTagInfo_IText
}

type IJsDocTagInfo_IText struct {
	Text string
	Kind string
}

type IMetadataSchema_IConstant_IValue struct {
	Value       any
	Tags        [][]IMetadataTypeTag
	Description *string
	JsDocTags   []IJsDocTagInfo
}

type MetadataConstantValue struct {
	Value       any
	Tags        [][]IMetadataTypeTag
	Description *string
	JsDocTags   []IJsDocTagInfo
	name_       string
}

func MetadataConstantValue_create(props MetadataConstantValue) *MetadataConstantValue {
	return &MetadataConstantValue{
		Value:       props.Value,
		Tags:        props.Tags,
		Description: props.Description,
		JsDocTags:   props.JsDocTags,
	}
}

func MetadataConstantValue_from(json IMetadataSchema_IConstant_IValue) *MetadataConstantValue {
	return MetadataConstantValue_create(MetadataConstantValue{
		Value:       json.Value,
		Tags:        json.Tags,
		Description: json.Description,
		JsDocTags:   json.JsDocTags,
	})
}

func (obj *MetadataConstantValue) GetName() string {
	if obj.name_ == "" {
		obj.name_ = metadataConstantValue_getName(obj)
	}
	return obj.name_
}

func (obj *MetadataConstantValue) ToJSON() IMetadataSchema_IConstant_IValue {
	return IMetadataSchema_IConstant_IValue{
		Value:       obj.Value,
		Tags:        obj.Tags,
		Description: obj.Description,
		JsDocTags:   obj.JsDocTags,
	}
}

func metadataConstantValue_getName(obj *MetadataConstantValue) string {
	base := metadataConstantValue_base(obj.Value)
	if len(obj.Tags) == 0 {
		return base
	}
	rows := make([]string, 0, len(obj.Tags))
	for _, row := range obj.Tags {
		names := make([]string, 0, len(row))
		for _, tag := range row {
			names = append(names, tag.Name)
		}
		str := strings.Join(names, " & ")
		if len(row) == 1 {
			rows = append(rows, str)
		} else {
			rows = append(rows, "("+str+")")
		}
	}
	return "(" + base + " & (" + strings.Join(rows, " | ") + "))"
}

func metadataConstantValue_base(value any) string {
	if str, ok := value.(string); ok {
		data, err := json.Marshal(str)
		if err == nil {
			return string(data)
		}
	}
	return fmt.Sprint(value)
}
