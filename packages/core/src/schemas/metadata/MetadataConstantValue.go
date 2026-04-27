package metadata

import (
	"encoding/json"
	"fmt"
)

type MetadataConstantValue struct {
	Value       any
	Tags        [][]MetadataTypeTag
	Description *string
	JsDocTags   []JsDocTagInfo

	name string
}

type MetadataConstantValueProps struct {
	Value       any
	Tags        [][]MetadataTypeTag
	Description *string
	JsDocTags   []JsDocTagInfo
}

func CreateMetadataConstantValue(props MetadataConstantValueProps) *MetadataConstantValue {
	return &MetadataConstantValue{
		Value:       props.Value,
		Tags:        cloneTagMatrix(props.Tags),
		Description: props.Description,
		JsDocTags:   cloneJsDocTags(props.JsDocTags),
	}
}

func MetadataConstantValueFrom(json MetadataConstantValueJSON) *MetadataConstantValue {
	return CreateMetadataConstantValue(MetadataConstantValueProps{
		Value:       normalizeValueFromJSON(json.Value),
		Tags:        normalizeTagMatrixFromJSON(json.Tags),
		Description: json.Description,
		JsDocTags:   json.JsDocTags,
	})
}

func (m *MetadataConstantValue) GetName() string {
	if m.name == "" {
		m.name = m.computeName()
	}
	return m.name
}

func (m *MetadataConstantValue) ToJSON() MetadataConstantValueJSON {
	return MetadataConstantValueJSON{
		Value:       normalizeValueToJSON(m.Value),
		Tags:        normalizeTagMatrixToJSON(m.Tags),
		Description: m.Description,
		JsDocTags:   cloneJsDocTags(m.JsDocTags),
	}
}

func (m *MetadataConstantValue) computeName() string {
	var base string
	switch value := m.Value.(type) {
	case string:
		data, _ := json.Marshal(value)
		base = string(data)
	default:
		base = fmt.Sprint(value)
	}
	if len(m.Tags) == 0 {
		return base
	}
	return taggedReferenceName(base, m.Tags)
}
