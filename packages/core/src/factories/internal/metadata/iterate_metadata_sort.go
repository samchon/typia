package metadata

import "sort"

func IterateMetadataSort(props struct {
	Collection *MetadataCollection
	Metadata   *MetadataSchema
}) {
	visited := map[*MetadataSchema]bool{}
	var next func(*MetadataSchema)
	next = func(metadata *MetadataSchema) {
		iterateSort(visited, metadata, next)
	}
	if props.Collection != nil {
		for i := range props.Collection.ArrayTypes {
			next(props.Collection.ArrayTypes[i].Value)
		}
		for i := range props.Collection.TupleTypes {
			for _, elem := range props.Collection.TupleTypes[i].Elements {
				next(elem)
			}
		}
		for i := range props.Collection.ObjectTypes {
			for _, property := range props.Collection.ObjectTypes[i].Properties {
				next(property.Value)
			}
		}
	}
	next(props.Metadata)
}

func iterateSort(visited map[*MetadataSchema]bool, metadata *MetadataSchema, next func(*MetadataSchema)) {
	if metadata == nil || visited[metadata] {
		return
	}
	visited[metadata] = true
	for _, item := range metadata.Maps {
		next(item.Value)
	}
	for _, item := range metadata.Sets {
		next(item.Value)
	}
	if metadata.Escaped != nil {
		next(metadata.Escaped.Returns)
	}
	if metadata.Rest != nil {
		next(metadata.Rest)
	}
	sort.SliceStable(metadata.Objects, func(i, j int) bool {
		return metadata.Objects[i].Type.Name < metadata.Objects[j].Type.Name
	})
	sort.SliceStable(metadata.Arrays, func(i, j int) bool {
		return metadata.Arrays[i].Type.Name < metadata.Arrays[j].Type.Name
	})
	sort.SliceStable(metadata.Tuples, func(i, j int) bool {
		return metadata.Tuples[i].Type.Name < metadata.Tuples[j].Type.Name
	})
	for i := range metadata.Constants {
		sort.SliceStable(metadata.Constants[i].Values, func(x, y int) bool {
			return toString(metadata.Constants[i].Values[x].Value) < toString(metadata.Constants[i].Values[y].Value)
		})
	}
}
