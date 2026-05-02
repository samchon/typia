package helpers

import (
  "fmt"
  "math"
  "strconv"
  "strings"

  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type protobufUtilNamespace struct{}

var ProtobufUtil = protobufUtilNamespace{}

func (protobufUtilNamespace) IsStaticObject(obj *nativemetadata.MetadataObjectType) bool {
  if len(obj.Properties) == 0 {
    return false
  }
  for _, property := range obj.Properties {
    if property.Key.IsSoleLiteral() == false {
      return false
    }
  }
  return true
}

func (protobufUtilNamespace) Size(meta *nativemetadata.MetadataSchema) int {
  return len(ProtobufUtil.GetAtomics(meta)) +
    len(meta.Arrays) +
    len(meta.Tuples) +
    len(meta.Natives) +
    len(meta.Objects) +
    len(meta.Maps)
}

func (protobufUtilNamespace) GetSequence(tags []nativemetadata.IMetadataTypeTag) *int {
  for _, tag := range tags {
    if tag.Kind != "sequence" {
      continue
    }
    schema, ok := tag.Schema.(map[string]any)
    if ok == false {
      continue
    }
    value, ok := schema["x-protobuf-sequence"]
    if ok == false {
      continue
    }
    if parsed, ok := protobufUtil_toInt(value); ok {
      return &parsed
    }
  }
  return nil
}

func (protobufUtilNamespace) IsUnion(meta *nativemetadata.MetadataSchema) bool {
  return ProtobufUtil.Size(meta) > 1
}

func (protobufUtilNamespace) GetAtomics(meta *nativemetadata.MetadataSchema, union ...map[string]*int) map[string]*int {
  output := protobufUtil_map(union...)
  for _, constant := range meta.Constants {
    if constant.Type == "boolean" {
      output["bool"] = ProtobufUtil.GetSequence(protobufUtil_firstTags(constant.Values))
    } else if constant.Type == "bigint" {
      init := protobufUtil_deduce_bigint_type(protobufUtil_values(constant.Values))
      for _, value := range constant.Values {
        protobufUtil_decode_bigint(output, value.Tags, init)
      }
    } else if constant.Type == "number" {
      init := protobufUtil_deduce_numeric_type(protobufUtil_values(constant.Values))
      for _, value := range constant.Values {
        protobufUtil_decode_number(output, value.Tags, init)
      }
    } else if constant.Type == "string" {
      output["string"] = ProtobufUtil.GetSequence(protobufUtil_firstTags(constant.Values))
    }
  }
  if len(meta.Templates) != 0 {
    output["string"] = ProtobufUtil.GetSequence(protobufUtil_firstTagRow(meta.Templates[0].Tags))
  }
  for _, atomic := range meta.Atomics {
    if atomic.Type == "boolean" {
      output["bool"] = ProtobufUtil.GetSequence(protobufUtil_firstTagRow(atomic.Tags))
    } else if atomic.Type == "bigint" {
      protobufUtil_decode_bigint(output, atomic.Tags, "int64")
    } else if atomic.Type == "number" {
      protobufUtil_decode_number(output, atomic.Tags, "double")
    } else if atomic.Type == "string" {
      output["string"] = ProtobufUtil.GetSequence(protobufUtil_firstTagRow(atomic.Tags))
    }
  }
  return output
}

func (protobufUtilNamespace) GetNumbers(meta *nativemetadata.MetadataSchema, union ...map[string]*int) map[string]*int {
  output := protobufUtil_map(union...)
  for _, constant := range meta.Constants {
    if constant.Type == "number" {
      init := protobufUtil_deduce_numeric_type(protobufUtil_values(constant.Values))
      for _, value := range constant.Values {
        protobufUtil_decode_number(output, value.Tags, init)
      }
    }
  }
  for _, atomic := range meta.Atomics {
    if atomic.Type == "number" {
      protobufUtil_decode_number(output, atomic.Tags, "double")
    }
  }
  return output
}

func (protobufUtilNamespace) GetBigints(meta *nativemetadata.MetadataSchema, union ...map[string]*int) map[string]*int {
  output := protobufUtil_map(union...)
  for _, constant := range meta.Constants {
    if constant.Type == "bigint" {
      init := protobufUtil_deduce_bigint_type(protobufUtil_values(constant.Values))
      for _, value := range constant.Values {
        protobufUtil_decode_bigint(output, value.Tags, init)
      }
    }
  }
  for _, atomic := range meta.Atomics {
    if atomic.Type == "bigint" {
      protobufUtil_decode_bigint(output, atomic.Tags, "int64")
    }
  }
  return output
}

func (protobufUtilNamespace) Compare(x string, y string) int {
  return protobufUtil_atomicOrder[x] - protobufUtil_atomicOrder[y]
}

var protobufUtil_atomicOrder = map[string]int{
  "bool":   0,
  "int32":  1,
  "uint32": 2,
  "int64":  3,
  "uint64": 4,
  "float":  5,
  "double": 6,
  "string": 7,
}

func protobufUtil_map(union ...map[string]*int) map[string]*int {
  if len(union) != 0 && union[0] != nil {
    return union[0]
  }
  return map[string]*int{}
}

func protobufUtil_firstTags(values []*nativemetadata.MetadataConstantValue) []nativemetadata.IMetadataTypeTag {
  if len(values) == 0 || len(values[0].Tags) == 0 {
    return []nativemetadata.IMetadataTypeTag{}
  }
  return values[0].Tags[0]
}

func protobufUtil_firstTagRow(tags [][]nativemetadata.IMetadataTypeTag) []nativemetadata.IMetadataTypeTag {
  if len(tags) == 0 {
    return []nativemetadata.IMetadataTypeTag{}
  }
  return tags[0]
}

func protobufUtil_values(values []*nativemetadata.MetadataConstantValue) []any {
  output := make([]any, 0, len(values))
  for _, value := range values {
    output = append(output, value.Value)
  }
  return output
}

func protobufUtil_deduce_bigint_type(values []any) string {
  for _, value := range values {
    if strings.HasPrefix(fmt.Sprint(value), "-") {
      return "int64"
    }
  }
  return "uint64"
}

func protobufUtil_deduce_numeric_type(values []any) string {
  integers := true
  int32s := true
  for _, value := range values {
    number := protobufUtil_toFloat(value)
    if math.Floor(number) != number {
      integers = false
      break
    }
    if -2147483648 <= number && number <= 2147483647 {
      continue
    }
    int32s = false
  }
  if integers == false {
    return "double"
  }
  if int32s {
    return "int32"
  }
  return "int64"
}

func protobufUtil_decode_bigint(output map[string]*int, tags [][]nativemetadata.IMetadataTypeTag, defaultType string) {
  if len(tags) == 0 {
    output[defaultType] = nil
    return
  }
  for _, row := range tags {
    value := "int64"
    for _, tag := range row {
      if tag.Kind == "type" && (tag.Value == "int64" || tag.Value == "uint64") {
        value = fmt.Sprint(tag.Value)
        break
      }
    }
    output[value] = ProtobufUtil.GetSequence(row)
  }
}

func protobufUtil_decode_number(output map[string]*int, tags [][]nativemetadata.IMetadataTypeTag, defaultType string) {
  if len(tags) == 0 {
    output[defaultType] = nil
    return
  }
  for _, row := range tags {
    value := "double"
    for _, tag := range row {
      if tag.Kind == "type" {
        str := fmt.Sprint(tag.Value)
        if str == "int32" || str == "uint32" || str == "int64" || str == "uint64" || str == "float" || str == "double" {
          value = str
          break
        }
      }
    }
    output[value] = ProtobufUtil.GetSequence(row)
  }
}

func protobufUtil_toInt(value any) (int, bool) {
  switch v := value.(type) {
  case int:
    return v, true
  case int32:
    return int(v), true
  case int64:
    return int(v), true
  case uint:
    return int(v), true
  case uint32:
    return int(v), true
  case uint64:
    return int(v), true
  case float64:
    return int(v), true
  case float32:
    return int(v), true
  case string:
    parsed, err := strconv.Atoi(v)
    return parsed, err == nil
  default:
    return 0, false
  }
}

func protobufUtil_toFloat(value any) float64 {
  switch v := value.(type) {
  case float64:
    return v
  case float32:
    return float64(v)
  case int:
    return float64(v)
  case int32:
    return float64(v)
  case int64:
    return float64(v)
  case uint:
    return float64(v)
  case uint32:
    return float64(v)
  case uint64:
    return float64(v)
  case string:
    parsed, _ := strconv.ParseFloat(v, 64)
    return parsed
  default:
    parsed, _ := strconv.ParseFloat(fmt.Sprint(value), 64)
    return parsed
  }
}
