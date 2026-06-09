package testutil

import (
  "encoding/json"
  "os"
  "path/filepath"
  "runtime"
  "testing"

  metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  "github.com/samchon/typia/packages/typia/test/_support/testfatal"
)

var runtimeCaller = runtime.Caller

func RepoRoot(t *testing.T) string {
  t.Helper()
  _, file, _, ok := runtimeCaller(0)
  testfatal.IfFalse(t, ok, "runtime.Caller failed")
  return filepath.Clean(filepath.Join(filepath.Dir(file), "..", "..", "..", "..", ".."))
}

func ReadJSON[T any](t *testing.T, file string) T {
  t.Helper()
  var output T
  err := json.Unmarshal([]byte(ReadText(t, file)), &output)
  testfatal.IfError(t, err, "failed to parse %s: %v", file, err)
  return output
}

func ReadText(t *testing.T, file string) string {
  t.Helper()
  content, err := os.ReadFile(file)
  testfatal.IfError(t, err, "failed to read %s: %v", file, err)
  return string(content)
}

func Contains(values []string, needle string) bool {
  for _, value := range values {
    if value == needle {
      return true
    }
  }
  return false
}

func EmptyMetadataDictionary() metadata.IMetadataDictionary {
  return metadata.IMetadataDictionary{
    Objects: map[string]*metadata.MetadataObjectType{},
    Aliases: map[string]*metadata.MetadataAliasType{},
    Arrays:  map[string]*metadata.MetadataArrayType{},
    Tuples:  map[string]*metadata.MetadataTupleType{},
  }
}

func Property(key string, value *metadata.MetadataSchema) *metadata.MetadataProperty {
  return metadata.MetadataProperty_create(metadata.MetadataProperty{
    Key:   StringLiteralMetadata(key),
    Value: value,
  })
}

func StringLiteralMetadata(value string) *metadata.MetadataSchema {
  return metadata.MetadataSchema_create(metadata.MetadataSchema{
    Required: true,
    Constants: []*metadata.MetadataConstant{
      metadata.MetadataConstant_create(metadata.MetadataConstant{
        Type: "string",
        Values: []*metadata.MetadataConstantValue{
          metadata.MetadataConstantValue_create(metadata.MetadataConstantValue{Value: value}),
        },
      }),
    },
  })
}

func AtomicMetadata(kind string) *metadata.MetadataSchema {
  return metadata.MetadataSchema_create(metadata.MetadataSchema{
    Required: true,
    Atomics: []*metadata.MetadataAtomic{
      metadata.MetadataAtomic_create(metadata.MetadataAtomic{Type: kind}),
    },
  })
}

func ArrayMetadata(value *metadata.MetadataSchema) *metadata.MetadataSchema {
  return metadata.MetadataSchema_create(metadata.MetadataSchema{
    Required: true,
    Arrays: []*metadata.MetadataArray{
      metadata.MetadataArray_create(metadata.MetadataArray{
        Type: metadata.MetadataArrayType_create(metadata.MetadataArrayType{
          Name:      "Array<" + value.GetName() + ">",
          Value:     value,
          Nullables: []bool{},
        }),
      }),
    },
  })
}

func TupleMetadata(elements ...*metadata.MetadataSchema) *metadata.MetadataSchema {
  name := "["
  for i, elem := range elements {
    if i != 0 {
      name += ", "
    }
    name += elem.GetName()
  }
  name += "]"
  return metadata.MetadataSchema_create(metadata.MetadataSchema{
    Required: true,
    Tuples: []*metadata.MetadataTuple{
      metadata.MetadataTuple_create(metadata.MetadataTuple{
        Type: metadata.MetadataTupleType_create(metadata.MetadataTupleType{
          Name:      name,
          Elements:  elements,
          Nullables: []bool{},
        }),
      }),
    },
  })
}

func NativeMetadata(name string) *metadata.MetadataSchema {
  return metadata.MetadataSchema_create(metadata.MetadataSchema{
    Required: true,
    Natives: []*metadata.MetadataNative{
      metadata.MetadataNative_create(metadata.MetadataNative{Name: name}),
    },
  })
}

func SetMetadata(value *metadata.MetadataSchema) *metadata.MetadataSchema {
  return metadata.MetadataSchema_create(metadata.MetadataSchema{
    Required: true,
    Sets: []*metadata.MetadataSet{
      metadata.MetadataSet_create(metadata.MetadataSet{Value: value}),
    },
  })
}

func MapMetadata(key *metadata.MetadataSchema, value *metadata.MetadataSchema) *metadata.MetadataSchema {
  return metadata.MetadataSchema_create(metadata.MetadataSchema{
    Required: true,
    Maps: []*metadata.MetadataMap{
      metadata.MetadataMap_create(metadata.MetadataMap{Key: key, Value: value}),
    },
  })
}

func TemplateMetadata(row ...*metadata.MetadataSchema) *metadata.MetadataSchema {
  return metadata.MetadataSchema_create(metadata.MetadataSchema{
    Required: true,
    Templates: []*metadata.MetadataTemplate{
      metadata.MetadataTemplate_create(metadata.MetadataTemplate{Row: row}),
    },
  })
}

func NumberConstantMetadata(values ...any) *metadata.MetadataSchema {
  return ConstantMetadata("number", values...)
}

func ConstantMetadata(kind string, values ...any) *metadata.MetadataSchema {
  constantValues := make([]*metadata.MetadataConstantValue, 0, len(values))
  for _, value := range values {
    constantValues = append(
      constantValues,
      metadata.MetadataConstantValue_create(metadata.MetadataConstantValue{Value: value}),
    )
  }
  return metadata.MetadataSchema_create(metadata.MetadataSchema{
    Required: true,
    Constants: []*metadata.MetadataConstant{
      metadata.MetadataConstant_create(metadata.MetadataConstant{
        Type:   kind,
        Values: constantValues,
      }),
    },
  })
}

func BigintConstantMetadata(values ...any) *metadata.MetadataSchema {
  return ConstantMetadata("bigint", values...)
}

func StringConstantMetadata(values ...any) *metadata.MetadataSchema {
  return ConstantMetadata("string", values...)
}

func NamedTag(name string) metadata.IMetadataTypeTag {
  return metadata.IMetadataTypeTag{Name: name}
}

func TypeTag(value string) metadata.IMetadataTypeTag {
  return metadata.IMetadataTypeTag{
    Kind:  "type",
    Name:  value,
    Value: value,
  }
}

func SequenceTag(value int) metadata.IMetadataTypeTag {
  return metadata.IMetadataTypeTag{
    Kind: "sequence",
    Name: "Sequence",
    Schema: map[string]any{
      "x-protobuf-sequence": value,
    },
  }
}
