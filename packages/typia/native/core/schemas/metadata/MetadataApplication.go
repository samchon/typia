package metadata

type IMetadataSchemaCollection struct {
  Schemas    []*IMetadataSchema
  Components IMetadataComponents
}

type MetadataApplication struct {
  Schemas    []*MetadataSchema
  Components *MetadataComponents
}

func MetadataApplication_create(props MetadataApplication) *MetadataApplication {
  return &MetadataApplication{
    Schemas:    props.Schemas,
    Components: props.Components,
  }
}

func MetadataApplication_from(app IMetadataSchemaCollection) *MetadataApplication {
  components := MetadataComponents_from(app.Components)
  metadatas := make([]*MetadataSchema, 0, len(app.Schemas))
  for _, metadata := range app.Schemas {
    metadatas = append(metadatas, MetadataSchema_from(metadata, components.Dictionary))
  }
  return MetadataApplication_create(MetadataApplication{
    Schemas:    metadatas,
    Components: components,
  })
}

func (app *MetadataApplication) ToJSON() IMetadataSchemaCollection {
  schemas := make([]*IMetadataSchema, 0, len(app.Schemas))
  for _, schema := range app.Schemas {
    schemas = append(schemas, schema.ToJSON())
  }
  return IMetadataSchemaCollection{
    Schemas:    schemas,
    Components: app.Components.ToJSON(),
  }
}
