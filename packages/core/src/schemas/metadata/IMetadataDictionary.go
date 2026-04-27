package metadata

type IMetadataDictionary struct {
	Objects map[string]*MetadataObjectType
	Aliases map[string]*MetadataAliasType
	Arrays  map[string]*MetadataArrayType
	Tuples  map[string]*MetadataTupleType
}

func NewIMetadataDictionary() *IMetadataDictionary {
	return &IMetadataDictionary{
		Objects: map[string]*MetadataObjectType{},
		Aliases: map[string]*MetadataAliasType{},
		Arrays:  map[string]*MetadataArrayType{},
		Tuples:  map[string]*MetadataTupleType{},
	}
}
