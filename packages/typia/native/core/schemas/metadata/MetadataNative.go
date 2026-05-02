package metadata

import "strings"

type IMetadataTypeTag struct {
  Target    string
  Name      string
  Kind      string
  Exclusive any
  Value     any
  Validate  string
  Schema    any
}

type IMetadataSchema_IReference struct {
  Name string
  Tags [][]IMetadataTypeTag
}

type MetadataNative struct {
  Name      string
  Tags      [][]IMetadataTypeTag
  typeName_ string
}

func MetadataNative_create(props MetadataNative) *MetadataNative {
  return &MetadataNative{
    Name: props.Name,
    Tags: props.Tags,
  }
}

func (obj *MetadataNative) GetName() string {
  if obj.typeName_ == "" {
    obj.typeName_ = metadataNative_getName(obj)
  }
  return obj.typeName_
}

func (obj *MetadataNative) ToJSON() IMetadataSchema_IReference {
  return IMetadataSchema_IReference{
    Name: obj.Name,
    Tags: obj.Tags,
  }
}

func metadataNative_getName(obj *MetadataNative) string {
  if len(obj.Tags) == 0 {
    return obj.Name
  }
  if len(obj.Tags) == 1 {
    row := []string{obj.Name}
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
  return "(" + obj.Name + " & (" + strings.Join(rows, " | ") + "))"
}
