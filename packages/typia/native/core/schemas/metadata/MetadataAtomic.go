package metadata

import "strings"

type IMetadataSchema_IAtomic struct {
	Type string
	Tags [][]IMetadataTypeTag
}

type MetadataAtomic struct {
	Type  string
	Tags  [][]IMetadataTypeTag
	name_ string
}

func MetadataAtomic_create(props MetadataAtomic) *MetadataAtomic {
	return &MetadataAtomic{
		Type: props.Type,
		Tags: props.Tags,
	}
}

func MetadataAtomic_from(json IMetadataSchema_IAtomic) *MetadataAtomic {
	return MetadataAtomic_create(MetadataAtomic{
		Type: json.Type,
		Tags: json.Tags,
	})
}

func (obj *MetadataAtomic) GetName() string {
	if obj.name_ == "" {
		obj.name_ = metadataAtomic_getName(obj)
	}
	return obj.name_
}

func (obj *MetadataAtomic) ToJSON() IMetadataSchema_IAtomic {
	return IMetadataSchema_IAtomic{
		Type: obj.Type,
		Tags: obj.Tags,
	}
}

func metadataAtomic_getName(obj *MetadataAtomic) string {
	if len(obj.Tags) == 0 {
		return obj.Type
	}
	if len(obj.Tags) == 1 {
		row := []string{obj.Type}
		for _, tag := range obj.Tags[0] {
			row = append(row, tag.Name)
		}
		return "(" + strings.Join(row, " & ") + ")"
	}
	rows := make([]string, 0, len(obj.Tags))
	for _, row := range obj.Tags {
		names := make([]string, 0, len(row))
		for _, tag := range row {
			names = append(names, tag.Name)
		}
		str := strings.Join(names, " & ")
		if len(row) == 1 {
			rows = append(rows, str)
		} else {
			rows = append(rows, "("+str+")")
		}
	}
	return "(" + obj.Type + " & (" + strings.Join(rows, " | ") + "))"
}
