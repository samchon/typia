package metadata

import (
	"fmt"
	"strings"
)

type MetadataTemplate struct {
	Row  []*MetadataSchema
	Tags [][]MetadataTypeTag

	name string
}

type MetadataTemplateProps struct {
	Row  []*MetadataSchema
	Tags [][]MetadataTypeTag
}

func CreateMetadataTemplate(props MetadataTemplateProps) *MetadataTemplate {
	return &MetadataTemplate{
		Row:  append([]*MetadataSchema(nil), props.Row...),
		Tags: cloneTagMatrix(props.Tags),
	}
}

func MetadataTemplateFrom(json MetadataTemplateJSON, dict *IMetadataDictionary) (*MetadataTemplate, error) {
	row := make([]*MetadataSchema, 0, len(json.Row))
	for _, elem := range json.Row {
		next, err := MetadataSchemaFrom(elem, dict)
		if err != nil {
			return nil, err
		}
		row = append(row, next)
	}
	return CreateMetadataTemplate(MetadataTemplateProps{
		Row:  row,
		Tags: json.Tags,
	}), nil
}

func (m *MetadataTemplate) GetName() string {
	if m.name == "" {
		m.name = taggedReferenceName(m.GetBaseName(), m.Tags)
	}
	return m.name
}

func (m *MetadataTemplate) GetBaseName() string {
	parts := make([]string, 0, len(m.Row))
	for _, child := range m.Row {
		if child.IsConstant() && child.Size() == 1 && len(child.Constants) == 1 && len(child.Constants[0].Values) == 1 {
			parts = append(parts, fmt.Sprint(child.Constants[0].Values[0].Value))
		} else {
			parts = append(parts, "${"+child.GetName()+"}")
		}
	}
	return "`" + strings.ReplaceAll(strings.Join(parts, ""), "`", "\\`") + "`"
}

func (m *MetadataTemplate) ToJSON() MetadataTemplateJSON {
	row := make([]MetadataSchemaJSON, 0, len(m.Row))
	for _, elem := range m.Row {
		row = append(row, elem.ToJSON())
	}
	return MetadataTemplateJSON{
		Row:  row,
		Tags: cloneTagMatrix(m.Tags),
	}
}
