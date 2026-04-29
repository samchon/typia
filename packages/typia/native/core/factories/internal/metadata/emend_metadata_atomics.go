package metadata

import schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"

func Emend_metadata_atomics(meta *schemametadata.MetadataSchema) {
	for _, atomic := range meta.Atomics {
		if is_not_pure(atomic) {
			continue
		}
		index := -1
		for i, constant := range meta.Constants {
			if constant.Type == atomic.Type {
				index = i
				break
			}
		}
		if index != -1 {
			meta.Constants = append(meta.Constants[:index], meta.Constants[index+1:]...)
		}
	}

	index := -1
	for i, constant := range meta.Constants {
		if constant.Type == "boolean" {
			index = i
			break
		}
	}
	if index != -1 && len(meta.Constants[index].Values) == 2 {
		temp := meta.Constants[index]
		meta.Constants = append(meta.Constants[:index], meta.Constants[index+1:]...)
		found := false
		for _, atomic := range meta.Atomics {
			if atomic.Type == "boolean" {
				found = true
				break
			}
		}
		if found == false {
			tags := [][]schemametadata.IMetadataTypeTag{}
			if len(temp.Values) != 0 && temp.Values[0] != nil {
				tags = temp.Values[0].Tags
			}
			meta.Atomics = append(meta.Atomics, schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{
				Type: "boolean",
				Tags: tags,
			}))
		}
	}

	if len(meta.Templates) != 0 {
		var atomic *schemametadata.MetadataAtomic
		for _, candidate := range meta.Atomics {
			if candidate.Type == "string" {
				atomic = candidate
				break
			}
		}
		if atomic != nil && is_not_pure(atomic) == false {
			meta.Templates = meta.Templates[:0]
		}
	}
}

func is_not_pure(atomic *schemametadata.MetadataAtomic) bool {
	if len(atomic.Tags) == 0 {
		return false
	}
	for _, row := range atomic.Tags {
		if len(row) == 0 {
			return false
		}
		for _, tag := range row {
			if tag.Validate == "" {
				return false
			}
		}
	}
	return true
}
