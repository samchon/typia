package helpers

type UnionSpecialized struct {
	Index   int
	Object  Metadata
	Entries []Metadata
}

type unionPredicatorNamespace struct{}

var UnionPredicator = unionPredicatorNamespace{}

func (unionPredicatorNamespace) Object(objects []Metadata) []UnionSpecialized {
	out := make([]UnionSpecialized, 0, len(objects))
	for i, object := range objects {
		entries := uniqueRequiredEntries(object, objects, i)
		out = append(out, UnionSpecialized{Index: i, Object: object, Entries: entries})
	}
	return out
}

func uniqueRequiredEntries(object Metadata, neighbors []Metadata, index int) []Metadata {
	candidates := make([]Metadata, 0)
	for _, property := range GetSlice(object, "properties") {
		next := AsMetadata(property)
		key := GetString(next, "key")
		if key == "" || !IsRequired(AsMetadata(next["value"])) {
			continue
		}
		unique := true
		for j, neighbor := range neighbors {
			if j == index {
				continue
			}
			if objectHasProperty(neighbor, key) {
				unique = false
				break
			}
		}
		if unique {
			candidates = append(candidates, next)
		}
	}
	return candidates
}

func objectHasProperty(object Metadata, key string) bool {
	for _, property := range GetSlice(object, "properties") {
		if GetString(property, "key") == key {
			return true
		}
	}
	return false
}
