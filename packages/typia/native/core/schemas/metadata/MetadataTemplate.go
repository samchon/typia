package metadata

import "strings"

type IMetadataSchema_ITemplate struct {
  Row  []*IMetadataSchema
  Tags [][]IMetadataTypeTag
}

type MetadataTemplate struct {
  Row   []*MetadataSchema
  Tags  [][]IMetadataTypeTag
  name_ string
}

func MetadataTemplate_create(props MetadataTemplate) *MetadataTemplate {
  row := make([]*MetadataSchema, 0, len(props.Row))
  for _, child := range props.Row {
    row = append(row, MetadataSchema_create(*child))
  }
  return &MetadataTemplate{
    Row:  row,
    Tags: cloneTagMatrix(props.Tags),
  }
}

func MetadataTemplate_from(json IMetadataSchema_ITemplate, dict IMetadataDictionary) *MetadataTemplate {
  row := make([]*MetadataSchema, 0, len(json.Row))
  for _, elem := range json.Row {
    row = append(row, MetadataSchema_from(elem, dict))
  }
  return &MetadataTemplate{
    Row:  row,
    Tags: cloneTagMatrix(json.Tags),
  }
}

func (obj *MetadataTemplate) GetName() string {
  if obj.name_ == "" {
    obj.name_ = metadataTemplate_getName(obj)
  }
  return obj.name_
}

func (obj *MetadataTemplate) GetBaseName() string {
  parts := make([]string, 0, len(obj.Row))
  for _, child := range obj.Row {
    if child.IsConstant() && child.Size() == 1 {
      parts = append(parts, child.Constants[0].Values[0].Value.(string))
    } else {
      parts = append(parts, "${"+child.GetName()+"}")
    }
  }
  return "`" + strings.ReplaceAll(strings.Join(parts, ""), "`", "\\`") + "`"
}

func (obj *MetadataTemplate) ToJSON() IMetadataSchema_ITemplate {
  row := make([]*IMetadataSchema, 0, len(obj.Row))
  for _, elem := range obj.Row {
    row = append(row, elem.ToJSON())
  }
  return IMetadataSchema_ITemplate{
    Row:  row,
    Tags: cloneTagMatrix(obj.Tags),
  }
}

func metadataTemplate_getName(template *MetadataTemplate) string {
  return taggedName(template.GetBaseName(), template.Tags)
}
