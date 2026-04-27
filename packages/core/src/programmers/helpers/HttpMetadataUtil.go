package helpers

type httpMetadataUtilNamespace struct{}

var HttpMetadataUtil = httpMetadataUtilNamespace{}

func (httpMetadataUtilNamespace) Atomics(metadata Metadata) []string {
	set := map[string]bool{}
	for _, atomic := range GetSlice(metadata, "atomics") {
		if name := GetName(atomic); name != "" {
			set[name] = true
		}
	}
	for _, constant := range GetSlice(metadata, "constants") {
		if name := GetName(constant); name != "" {
			set[name] = true
		}
	}
	if len(GetSlice(metadata, "templates")) != 0 {
		set["string"] = true
	}
	out := make([]string, 0, len(set))
	for key := range set {
		out = append(out, key)
	}
	return out
}

func (httpMetadataUtilNamespace) IsUnion(metadata Metadata) bool {
	count := len(HttpMetadataUtil.Atomics(metadata))
	for _, key := range []string{"arrays", "tuples", "natives", "maps", "sets", "objects"} {
		count += len(GetSlice(metadata, key))
	}
	return count > 1
}
