package helpers

import nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"

type atomicPredicatorNamespace struct{}

var AtomicPredicator = atomicPredicatorNamespace{}

func (atomicPredicatorNamespace) Constant(props struct {
  Metadata *nativemetadata.MetadataSchema
  Name     string
}) bool {
  for _, native := range props.Metadata.Natives {
    if lower(native.Name) == props.Name {
      return false
    }
  }
  return true
}

func (atomicPredicatorNamespace) RuntimeConstant(props struct {
  Metadata *nativemetadata.MetadataSchema
  Name     string
}) bool {
  return atomicPredicator_runtime(props.Metadata, props.Name)
}

func (atomicPredicatorNamespace) Atomic(props struct {
  Metadata *nativemetadata.MetadataSchema
  Name     string
}) bool {
  for _, native := range props.Metadata.Natives {
    if lower(native.Name) == props.Name {
      return false
    }
  }
  return true
}

func (atomicPredicatorNamespace) RuntimeAtomic(props struct {
  Metadata *nativemetadata.MetadataSchema
  Name     string
}) bool {
  return atomicPredicator_runtime(props.Metadata, props.Name)
}

func (atomicPredicatorNamespace) Native(name string) bool {
  _, ok := atomicPredicator_like[lower(name)]
  return ok
}

func (atomicPredicatorNamespace) Template(metadata *nativemetadata.MetadataSchema) bool {
  for _, native := range metadata.Natives {
    if lower(native.Name) == "string" {
      return false
    }
  }
  return true
}

var atomicPredicator_like = map[string]struct{}{
  "boolean": {},
  "bigint":  {},
  "number":  {},
  "string":  {},
}

func atomicPredicator_runtime(metadata *nativemetadata.MetadataSchema, name string) bool {
  lowered := lower(name)
  for _, native := range metadata.Natives {
    atomic, ok := nativemetadata.MetadataSchema_atomicLikeNative(native.Name)
    if ok && atomic == lowered {
      return false
    }
  }
  return true
}

func lower(str string) string {
  output := []byte(str)
  for i, ch := range output {
    if 'A' <= ch && ch <= 'Z' {
      output[i] = ch + ('a' - 'A')
    }
  }
  return string(output)
}
