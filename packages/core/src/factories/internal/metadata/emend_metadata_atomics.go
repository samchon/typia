package metadata

func EmendMetadataAtomics(meta *MetadataSchema) {
	if meta == nil {
		return
	}
	filtered := meta.Constants[:0]
	for _, constant := range meta.Constants {
		remove := false
		for _, atomic := range meta.Atomics {
			if atomic.Type == constant.Type && !isNotPureAtomic(atomic) {
				remove = true
				break
			}
		}
		if !remove {
			filtered = append(filtered, constant)
		}
	}
	meta.Constants = filtered
	for index, constant := range meta.Constants {
		if constant.Type == "boolean" && len(constant.Values) == 2 {
			meta.Constants = append(meta.Constants[:index], meta.Constants[index+1:]...)
			tags := [][]MetadataTypeTag{}
			if len(constant.Values) != 0 {
				tags = constant.Values[0].Tags
			}
			takeAtomic(&meta.Atomics, MetadataAtomic{Type: "boolean", Tags: tags})
			break
		}
	}
	if len(meta.Templates) != 0 {
		for _, atomic := range meta.Atomics {
			if atomic.Type == "string" && !isNotPureAtomic(atomic) {
				meta.Templates = nil
				break
			}
		}
	}
}

func isNotPureAtomic(atomic MetadataAtomic) bool {
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
