package metadata

import (
	"fmt"
	"sort"

	schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

func Iterate_metadata_sort(props struct {
	Collection *schemametadata.MetadataCollection
	Metadata   *schemametadata.MetadataSchema
}) {
	visited := map[*schemametadata.MetadataSchema]bool{}
	next := func(metadata *schemametadata.MetadataSchema) {}
	next = func(metadata *schemametadata.MetadataSchema) {
		iterate_metadata_sort_iterate(struct {
			visited    map[*schemametadata.MetadataSchema]bool
			collection *schemametadata.MetadataCollection
			metadata   *schemametadata.MetadataSchema
			next       func(*schemametadata.MetadataSchema)
		}{
			visited:    visited,
			collection: props.Collection,
			metadata:   metadata,
			next:       next,
		})
	}
	for _, array := range props.Collection.Arrays() {
		next(array.Value)
	}
	for _, tuple := range props.Collection.Tuples() {
		for _, element := range tuple.Elements {
			next(element)
		}
	}
	for _, object := range props.Collection.Objects() {
		for _, property := range object.Properties {
			next(property.Value)
		}
	}
	next(props.Metadata)
}

func iterate_metadata_sort_iterate(props struct {
	visited    map[*schemametadata.MetadataSchema]bool
	collection *schemametadata.MetadataCollection
	metadata   *schemametadata.MetadataSchema
	next       func(*schemametadata.MetadataSchema)
}) {
	if props.visited[props.metadata] {
		return
	}
	props.visited[props.metadata] = true

	for _, item := range props.metadata.Maps {
		props.next(item.Value)
	}
	for _, item := range props.metadata.Sets {
		props.next(item.Value)
	}
	if props.metadata.Escaped != nil {
		props.next(props.metadata.Escaped.Returns)
	}
	if props.metadata.Rest != nil {
		props.next(props.metadata.Rest)
	}

	if len(props.metadata.Objects) > 1 {
		sort.SliceStable(props.metadata.Objects, func(i, j int) bool {
			x := props.metadata.Objects[i]
			y := props.metadata.Objects[j]
			if schemametadata.MetadataObjectType_covers(x.Type, y.Type) {
				return true
			}
			if schemametadata.MetadataObjectType_covers(y.Type, x.Type) {
				return false
			}
			return false
		})
		index := props.collection.GetUnionIndex(props.metadata)
		props.metadata.Union_index = &index
	}

	if len(props.metadata.Arrays) > 1 {
		sort.SliceStable(props.metadata.Arrays, func(i, j int) bool {
			x := props.metadata.Arrays[i]
			y := props.metadata.Arrays[j]
			if schemametadata.MetadataSchema_covers(x.Type.Value, y.Type.Value) {
				return true
			}
			if schemametadata.MetadataSchema_covers(y.Type.Value, x.Type.Value) {
				return false
			}
			return false
		})
	}
	if len(props.metadata.Tuples) > 1 {
		sort.SliceStable(props.metadata.Tuples, func(i, j int) bool {
			xt := schemametadata.MetadataSchema_initialize()
			yt := schemametadata.MetadataSchema_initialize()
			xt.Tuples = append(xt.Tuples, props.metadata.Tuples[i])
			yt.Tuples = append(yt.Tuples, props.metadata.Tuples[j])
			if schemametadata.MetadataSchema_covers(xt, yt) {
				return true
			}
			if schemametadata.MetadataSchema_covers(yt, xt) {
				return false
			}
			return false
		})
	}

	for _, constant := range props.metadata.Constants {
		if constant.Type == "string" {
			sort.SliceStable(constant.Values, func(i, j int) bool {
				return fmt.Sprint(constant.Values[i].Value) < fmt.Sprint(constant.Values[j].Value)
			})
		} else if constant.Type == "number" {
			sort.SliceStable(constant.Values, func(i, j int) bool {
				return iterate_metadata_sort_float(constant.Values[i].Value) < iterate_metadata_sort_float(constant.Values[j].Value)
			})
		} else if constant.Type == "bigint" {
			sort.SliceStable(constant.Values, func(i, j int) bool {
				return fmt.Sprint(constant.Values[i].Value) < fmt.Sprint(constant.Values[j].Value)
			})
		} else {
			sort.SliceStable(constant.Values, func(i, j int) bool {
				value, _ := constant.Values[i].Value.(bool)
				return value == false
			})
		}
	}
}

func iterate_metadata_sort_float(value any) float64 {
	switch v := value.(type) {
	case float64:
		return v
	case float32:
		return float64(v)
	case int:
		return float64(v)
	case int64:
		return float64(v)
	case int32:
		return float64(v)
	case uint:
		return float64(v)
	case uint64:
		return float64(v)
	case uint32:
		return float64(v)
	default:
		return 0
	}
}
