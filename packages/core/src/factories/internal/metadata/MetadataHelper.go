package metadata

type metadataHelper struct{}

var MetadataHelper metadataHelper

func (metadataHelper) LiteralToMetadata(key string) *MetadataSchema {
	metadata := NewMetadataSchema()
	metadata.Sole = key
	metadata.Constants = append(metadata.Constants, MetadataConstant{
		Type: "string",
		Values: []MetadataConstantValue{{
			Value: key,
			Tags:  [][]MetadataTypeTag{},
		}},
	})
	return metadata
}
