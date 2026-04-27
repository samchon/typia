package factories

type metadataTypeTagSchemaFactory struct{}

var MetadataTypeTagSchemaFactory metadataTypeTagSchemaFactory

func (metadataTypeTagSchemaFactory) Object(tags []MetadataTypeTag) map[string]any {
	output := map[string]any{}
	for _, tag := range tags {
		for key, value := range tag.Schema {
			output[key] = value
		}
	}
	return output
}

func (metadataTypeTagSchemaFactory) Covers(x []MetadataTypeTag, y []MetadataTypeTag) bool {
	for _, right := range y {
		found := false
		for _, left := range x {
			if left.Kind == right.Kind && left.Value == right.Value {
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
