package metadata

import "strings"

type MetadataObjectType struct {
	Name        string
	Properties  []*MetadataProperty
	Description *string
	JsDocTags   []JsDocTagInfo

	Index     int
	Validated bool
	Recursive bool
	Nullables []bool
	Tagged    bool

	literal *bool
}

type MetadataObjectTypeProps struct {
	Name        string
	Properties  []*MetadataProperty
	Description *string
	JsDocTags   []JsDocTagInfo
	Index       int
	Validated   bool
	Recursive   bool
	Nullables   []bool
}

func CreateMetadataObjectType(props MetadataObjectTypeProps) *MetadataObjectType {
	return &MetadataObjectType{
		Name:        props.Name,
		Properties:  append([]*MetadataProperty(nil), props.Properties...),
		Description: props.Description,
		JsDocTags:   cloneJsDocTags(props.JsDocTags),
		Index:       props.Index,
		Validated:   props.Validated,
		Recursive:   props.Recursive,
		Nullables:   append([]bool(nil), props.Nullables...),
	}
}

func MetadataObjectTypeFromWithoutProperties(obj MetadataObjectTypeJSON) *MetadataObjectType {
	return CreateMetadataObjectType(MetadataObjectTypeProps{
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

func (m *MetadataObjectType) IsPlain(level ...int) bool {
	depth := 0
	if len(level) != 0 {
		depth = level[0]
	}
	if m.Recursive || len(m.Properties) >= 10 {
		return false
	}
	for _, property := range m.Properties {
		if !property.Key.IsSoleLiteral() || property.Value.Size() != 1 || !property.Value.IsRequired() || property.Value.Nullable {
			return false
		}
		if len(property.Value.Atomics) == 1 {
			continue
		}
		if depth < 1 && len(property.Value.Objects) == 1 && property.Value.Objects[0].Type.IsPlain(depth+1) {
			continue
		}
		return false
	}
	return true
}

func (m *MetadataObjectType) IsLiteral() bool {
	if m.literal != nil {
		return *m.literal
	}
	value := false
	if !m.Recursive {
		value = m.Name == "__type" ||
			m.Name == "__object" ||
			strings.HasPrefix(m.Name, "__type.") ||
			strings.HasPrefix(m.Name, "__object.") ||
			strings.Contains(m.Name, "readonly [")
	}
	m.literal = &value
	return value
}

func (m *MetadataObjectType) ToJSON() MetadataObjectTypeJSON {
	properties := make([]MetadataPropertyJSON, 0, len(m.Properties))
	for _, property := range m.Properties {
		properties = append(properties, property.ToJSON())
	}
	return MetadataObjectTypeJSON{
		Name:        m.Name,
		Properties:  properties,
		Description: m.Description,
		JsDocTags:   cloneJsDocTags(m.JsDocTags),
		Index:       m.Index,
		Recursive:   m.Recursive,
		Nullables:   append([]bool(nil), m.Nullables...),
	}
}

func MetadataObjectTypeIntersects(x *MetadataObjectType, y *MetadataObjectType) bool {
	for _, prop := range x.Properties {
		for _, oppo := range y.Properties {
			if prop.Key.GetName() == oppo.Key.GetName() {
				return true
			}
		}
	}
	return false
}

func MetadataObjectTypeCovers(x *MetadataObjectType, y *MetadataObjectType) bool {
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
		if !found {
			return false
		}
	}
	return true
}
