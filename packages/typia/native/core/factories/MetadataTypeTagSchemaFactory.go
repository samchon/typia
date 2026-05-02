package factories

import nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"

type metadataTypeTagSchemaFactoryNamespace struct{}

var MetadataTypeTagSchemaFactory = metadataTypeTagSchemaFactoryNamespace{}

func (metadataTypeTagSchemaFactoryNamespace) Object(props struct {
  Report func(msg string) bool
  Object *nativemetadata.MetadataObjectType
}) map[string]any {
  if props.Object.Recursive {
    props.Report(props.Object.Name + " has recursive type")
    return nil
  }
  output := map[string]any{}
  for _, property := range props.Object.Properties {
    key := property.Key.GetSoleLiteral()
    if key == nil {
      props.Report(props.Object.Name + " has non-literal key type: " + property.Key.GetName())
      continue
    }
    value, ok := metadataTypeTagSchemaFactory_iterate(struct {
      report   func(message string) bool
      object   *nativemetadata.MetadataObjectType
      key      string
      metadata *nativemetadata.MetadataSchema
    }{
      report:   props.Report,
      object:   props.Object,
      key:      *key,
      metadata: property.Value,
    })
    if ok {
      output[*key] = value
    }
  }
  return output
}

func metadataTypeTagSchemaFactory_iterate(props struct {
  report   func(message string) bool
  object   *nativemetadata.MetadataObjectType
  key      string
  metadata *nativemetadata.MetadataSchema
}) (any, bool) {
  if props.metadata.Any ||
    len(props.metadata.Atomics) != 0 ||
    len(props.metadata.Arrays) != 0 ||
    len(props.metadata.Natives) != 0 ||
    len(props.metadata.Functions) != 0 {
    props.report(props.object.Name + "." + props.key + " has non-literal type")
    return nil, true
  }
  if props.metadata.Size() > 1 {
    props.report(props.object.Name + "." + props.key + " has union type")
    return nil, true
  }
  if props.metadata.Size() == 0 {
    if props.metadata.Nullable {
      return nil, true
    }
    if props.metadata.IsRequired() {
      props.report(props.object.Name + "." + props.key + " has non-literal type")
      return nil, true
    }
    return nil, false
  }
  if len(props.metadata.Constants) != 0 {
    return props.metadata.Constants[0].Values[0].Value, true
  }
  if len(props.metadata.Tuples) != 0 {
    tuple := props.metadata.Tuples[0]
    if tuple.Type.IsRest() {
      props.report(props.object.Name + "." + props.key + " has rest tuple type")
    } else if tuple.Type.Recursive {
      props.report(props.object.Name + "." + props.key + " has recursive tuple type")
    } else {
      for _, elem := range tuple.Type.Elements {
        if elem.Required == false {
          props.report(props.object.Name + "." + props.key + " has optional tuple type")
          break
        }
      }
    }
    array := []any{}
    for _, elem := range tuple.Type.Elements {
      value, ok := metadataTypeTagSchemaFactory_iterate(struct {
        report   func(message string) bool
        object   *nativemetadata.MetadataObjectType
        key      string
        metadata *nativemetadata.MetadataSchema
      }{
        report:   props.report,
        object:   props.object,
        key:      props.key,
        metadata: elem,
      })
      if ok {
        array = append(array, value)
      }
    }
    return array, true
  }
  if len(props.metadata.Objects) != 0 {
    return MetadataTypeTagSchemaFactory.Object(struct {
      Report func(msg string) bool
      Object *nativemetadata.MetadataObjectType
    }{
      Report: props.report,
      Object: props.metadata.Objects[0].Type,
    }), true
  }
  props.report(props.object.Name + "." + props.key + " has non-literal type")
  return nil, true
}
