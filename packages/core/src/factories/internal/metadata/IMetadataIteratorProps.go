package metadata

type IMetadataIteratorProps struct {
	Options     MetadataFactoryOptions
	Checker     TypeChecker
	Components  *MetadataCollection
	Errors      *MetadataErrors
	Metadata    *MetadataSchema
	Type        TypeLike
	Explore     MetadataExplore
	Intersected bool
}
