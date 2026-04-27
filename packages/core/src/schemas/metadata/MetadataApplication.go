package metadata

type MetadataApplication struct {
	Schemas    []*MetadataSchema
	Components *MetadataComponents
}

type MetadataApplicationProps struct {
	Schemas    []*MetadataSchema
	Components *MetadataComponents
}

func CreateMetadataApplication(props MetadataApplicationProps) *MetadataApplication {
	return &MetadataApplication{
		Schemas:    append([]*MetadataSchema(nil), props.Schemas...),
		Components: props.Components,
	}
}

func MetadataApplicationFrom(app MetadataSchemaCollectionJSON) (*MetadataApplication, error) {
	components, err := MetadataComponentsFrom(app.Components)
	if err != nil {
		return nil, err
	}
	schemas := make([]*MetadataSchema, 0, len(app.Schemas))
	for _, schema := range app.Schemas {
		next, err := MetadataSchemaFrom(schema, components.Dictionary)
		if err != nil {
			return nil, err
		}
		schemas = append(schemas, next)
	}
	return CreateMetadataApplication(MetadataApplicationProps{
		Schemas:    schemas,
		Components: components,
	}), nil
}

func (m *MetadataApplication) ToJSON() MetadataSchemaCollectionJSON {
	schemas := make([]MetadataSchemaJSON, 0, len(m.Schemas))
	for _, schema := range m.Schemas {
		schemas = append(schemas, schema.ToJSON())
	}
	return MetadataSchemaCollectionJSON{
		Schemas:    schemas,
		Components: m.Components.ToJSON(),
	}
}
