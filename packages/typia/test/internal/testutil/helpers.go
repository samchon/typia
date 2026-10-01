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

// Resolves the repository root from this helper.
//
// @evidence contracts/testing.md#behavioral-verification RepoRoot only constructs the repository root path resolved from this source file and asserts nothing; the tests that call it assert the behavior of the code under test on that value, so a wrong construction surfaces as a failing assertion in those callers.
// @evidence contracts/testing.md#independent-expectations The constructed value is authored input derived from the arguments and not from the code under test.
// @evidence contracts/testing.md#distinguishing-cases RepoRoot supplies the repository root path resolved from this source file for positive and negative cases chosen by its callers and owns no case distinction itself.
// @evidence contracts/testing.md#execution-ownership The helper is compiled into the packages/typia/test module (pnpm test:go:public) and called in process by the Go tests; it starts no process and builds no native command.
func RepoRoot(t *testing.T) string {
  t.Helper()
  _, file, _, ok := runtime.Caller(0)
  testfatal.IfFalse(t, ok, "runtime.Caller failed")
  return filepath.Clean(filepath.Join(filepath.Dir(file), "..", "..", "..", "..", ".."))
}

// Decodes a JSON fixture file into the caller-selected type and fails the calling test on error.
//
// @evidence contracts/testing.md#behavioral-verification ReadJSON only constructs a decoded JSON fixture value and asserts nothing; the tests that call it assert the behavior of the code under test on that value, so a wrong construction surfaces as a failing assertion in those callers.
// @evidence contracts/testing.md#independent-expectations The constructed value is authored input derived from the arguments and not from the code under test.
// @evidence contracts/testing.md#distinguishing-cases ReadJSON supplies a decoded JSON fixture value for positive and negative cases chosen by its callers and owns no case distinction itself.
// @evidence contracts/testing.md#execution-ownership The helper is compiled into the packages/typia/test module (pnpm test:go:public) and called in process by the Go tests; it starts no process and builds no native command.
func ReadJSON[T any](t *testing.T, file string) T {
  t.Helper()
  var output T
  err := json.Unmarshal([]byte(ReadText(t, file)), &output)
  testfatal.IfError(t, err, "failed to parse %s: %v", file, err)
  return output
}

// Reads a fixture file as text and fails the calling test on error.
//
// @evidence contracts/testing.md#behavioral-verification ReadText only constructs the text of a fixture file and asserts nothing; the tests that call it assert the behavior of the code under test on that value, so a wrong construction surfaces as a failing assertion in those callers.
// @evidence contracts/testing.md#independent-expectations The constructed value is authored input derived from the arguments and not from the code under test.
// @evidence contracts/testing.md#distinguishing-cases ReadText supplies the text of a fixture file for positive and negative cases chosen by its callers and owns no case distinction itself.
// @evidence contracts/testing.md#execution-ownership The helper is compiled into the packages/typia/test module (pnpm test:go:public) and called in process by the Go tests; it starts no process and builds no native command.
func ReadText(t *testing.T, file string) string {
  t.Helper()
  content, err := os.ReadFile(file)
  testfatal.IfError(t, err, "failed to read %s: %v", file, err)
  return string(content)
}

// Builds a property whose key is a string literal.
//
// @evidence contracts/testing.md#behavioral-verification Property only constructs a metadata property with a literal key and asserts nothing; the tests that call it assert the behavior of the code under test on that value, so a wrong construction surfaces as a failing assertion in those callers.
// @evidence contracts/testing.md#independent-expectations The constructed value is authored input derived from the arguments and not from the code under test.
// @evidence contracts/testing.md#distinguishing-cases Property supplies a metadata property with a literal key for positive and negative cases chosen by its callers and owns no case distinction itself.
// @evidence contracts/testing.md#execution-ownership The helper is compiled into the packages/typia/test module (pnpm test:go:public) and called in process by the Go tests; it starts no process and builds no native command.
func Property(key string, value *metadata.MetadataSchema) *metadata.MetadataProperty {
  return metadata.MetadataProperty_create(metadata.MetadataProperty{
    Key:   StringLiteralMetadata(key),
    Value: value,
  })
}

// Builds required metadata holding one string constant.
//
// @evidence contracts/testing.md#behavioral-verification StringLiteralMetadata only constructs a required one-value string literal schema and asserts nothing; the tests that call it assert the behavior of the code under test on that value, so a wrong construction surfaces as a failing assertion in those callers.
// @evidence contracts/testing.md#independent-expectations The constructed value is authored input derived from the arguments and not from the code under test.
// @evidence contracts/testing.md#distinguishing-cases StringLiteralMetadata supplies a required one-value string literal schema for positive and negative cases chosen by its callers and owns no case distinction itself.
// @evidence contracts/testing.md#execution-ownership The helper is compiled into the packages/typia/test module (pnpm test:go:public) and called in process by the Go tests; it starts no process and builds no native command.
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

// Builds required metadata with one atomic bucket.
//
// @evidence contracts/testing.md#behavioral-verification AtomicMetadata only constructs a required atomic schema of the given kind and asserts nothing; the tests that call it assert the behavior of the code under test on that value, so a wrong construction surfaces as a failing assertion in those callers.
// @evidence contracts/testing.md#independent-expectations The constructed value is authored input derived from the arguments and not from the code under test.
// @evidence contracts/testing.md#distinguishing-cases AtomicMetadata supplies a required atomic schema of the given kind for positive and negative cases chosen by its callers and owns no case distinction itself.
// @evidence contracts/testing.md#execution-ownership The helper is compiled into the packages/typia/test module (pnpm test:go:public) and called in process by the Go tests; it starts no process and builds no native command.
func AtomicMetadata(kind string) *metadata.MetadataSchema {
  return metadata.MetadataSchema_create(metadata.MetadataSchema{
    Required: true,
    Atomics: []*metadata.MetadataAtomic{
      metadata.MetadataAtomic_create(metadata.MetadataAtomic{Type: kind}),
    },
  })
}

// Builds required metadata with one array bucket.
//
// @evidence contracts/testing.md#behavioral-verification ArrayMetadata only constructs a required array schema over a value schema and asserts nothing; the tests that call it assert the behavior of the code under test on that value, so a wrong construction surfaces as a failing assertion in those callers.
// @evidence contracts/testing.md#independent-expectations The constructed value is authored input derived from the arguments and not from the code under test.
// @evidence contracts/testing.md#distinguishing-cases ArrayMetadata supplies a required array schema over a value schema for positive and negative cases chosen by its callers and owns no case distinction itself.
// @evidence contracts/testing.md#execution-ownership The helper is compiled into the packages/typia/test module (pnpm test:go:public) and called in process by the Go tests; it starts no process and builds no native command.
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

// Builds required metadata with one tuple bucket.
//
// @evidence contracts/testing.md#behavioral-verification TupleMetadata only constructs a required tuple schema over element schemas and asserts nothing; the tests that call it assert the behavior of the code under test on that value, so a wrong construction surfaces as a failing assertion in those callers.
// @evidence contracts/testing.md#independent-expectations The constructed value is authored input derived from the arguments and not from the code under test.
// @evidence contracts/testing.md#distinguishing-cases TupleMetadata supplies a required tuple schema over element schemas for positive and negative cases chosen by its callers and owns no case distinction itself.
// @evidence contracts/testing.md#execution-ownership The helper is compiled into the packages/typia/test module (pnpm test:go:public) and called in process by the Go tests; it starts no process and builds no native command.
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

// Builds required metadata with one native bucket.
//
// @evidence contracts/testing.md#behavioral-verification NativeMetadata only constructs a required native schema of the given name and asserts nothing; the tests that call it assert the behavior of the code under test on that value, so a wrong construction surfaces as a failing assertion in those callers.
// @evidence contracts/testing.md#independent-expectations The constructed value is authored input derived from the arguments and not from the code under test.
// @evidence contracts/testing.md#distinguishing-cases NativeMetadata supplies a required native schema of the given name for positive and negative cases chosen by its callers and owns no case distinction itself.
// @evidence contracts/testing.md#execution-ownership The helper is compiled into the packages/typia/test module (pnpm test:go:public) and called in process by the Go tests; it starts no process and builds no native command.
func NativeMetadata(name string) *metadata.MetadataSchema {
  return metadata.MetadataSchema_create(metadata.MetadataSchema{
    Required: true,
    Natives: []*metadata.MetadataNative{
      metadata.MetadataNative_create(metadata.MetadataNative{Name: name}),
    },
  })
}

// Builds required metadata with one Set bucket.
//
// @evidence contracts/testing.md#behavioral-verification SetMetadata only constructs a required Set schema over a value schema and asserts nothing; the tests that call it assert the behavior of the code under test on that value, so a wrong construction surfaces as a failing assertion in those callers.
// @evidence contracts/testing.md#independent-expectations The constructed value is authored input derived from the arguments and not from the code under test.
// @evidence contracts/testing.md#distinguishing-cases SetMetadata supplies a required Set schema over a value schema for positive and negative cases chosen by its callers and owns no case distinction itself.
// @evidence contracts/testing.md#execution-ownership The helper is compiled into the packages/typia/test module (pnpm test:go:public) and called in process by the Go tests; it starts no process and builds no native command.
func SetMetadata(value *metadata.MetadataSchema) *metadata.MetadataSchema {
  return metadata.MetadataSchema_create(metadata.MetadataSchema{
    Required: true,
    Sets: []*metadata.MetadataSet{
      metadata.MetadataSet_create(metadata.MetadataSet{Value: value}),
    },
  })
}

// Builds required metadata with one Map bucket.
//
// @evidence contracts/testing.md#behavioral-verification MapMetadata only constructs a required Map schema over key and value schemas and asserts nothing; the tests that call it assert the behavior of the code under test on that value, so a wrong construction surfaces as a failing assertion in those callers.
// @evidence contracts/testing.md#independent-expectations The constructed value is authored input derived from the arguments and not from the code under test.
// @evidence contracts/testing.md#distinguishing-cases MapMetadata supplies a required Map schema over key and value schemas for positive and negative cases chosen by its callers and owns no case distinction itself.
// @evidence contracts/testing.md#execution-ownership The helper is compiled into the packages/typia/test module (pnpm test:go:public) and called in process by the Go tests; it starts no process and builds no native command.
func MapMetadata(key *metadata.MetadataSchema, value *metadata.MetadataSchema) *metadata.MetadataSchema {
  return metadata.MetadataSchema_create(metadata.MetadataSchema{
    Required: true,
    Maps: []*metadata.MetadataMap{
      metadata.MetadataMap_create(metadata.MetadataMap{Key: key, Value: value}),
    },
  })
}

// Builds required metadata with one template bucket.
//
// @evidence contracts/testing.md#behavioral-verification TemplateMetadata only constructs a required template-literal schema over rows and asserts nothing; the tests that call it assert the behavior of the code under test on that value, so a wrong construction surfaces as a failing assertion in those callers.
// @evidence contracts/testing.md#independent-expectations The constructed value is authored input derived from the arguments and not from the code under test.
// @evidence contracts/testing.md#distinguishing-cases TemplateMetadata supplies a required template-literal schema over rows for positive and negative cases chosen by its callers and owns no case distinction itself.
// @evidence contracts/testing.md#execution-ownership The helper is compiled into the packages/typia/test module (pnpm test:go:public) and called in process by the Go tests; it starts no process and builds no native command.
func TemplateMetadata(row ...*metadata.MetadataSchema) *metadata.MetadataSchema {
  return metadata.MetadataSchema_create(metadata.MetadataSchema{
    Required: true,
    Templates: []*metadata.MetadataTemplate{
      metadata.MetadataTemplate_create(metadata.MetadataTemplate{Row: row}),
    },
  })
}

// Builds required metadata with number constants.
//
// @evidence contracts/testing.md#behavioral-verification NumberConstantMetadata only constructs a required number constant schema and asserts nothing; the tests that call it assert the behavior of the code under test on that value, so a wrong construction surfaces as a failing assertion in those callers.
// @evidence contracts/testing.md#independent-expectations The constructed value is authored input derived from the arguments and not from the code under test.
// @evidence contracts/testing.md#distinguishing-cases NumberConstantMetadata supplies a required number constant schema for positive and negative cases chosen by its callers and owns no case distinction itself.
// @evidence contracts/testing.md#execution-ownership The helper is compiled into the packages/typia/test module (pnpm test:go:public) and called in process by the Go tests; it starts no process and builds no native command.
func NumberConstantMetadata(values ...any) *metadata.MetadataSchema {
  return ConstantMetadata("number", values...)
}

// Builds required metadata with one constant bucket of the given kind.
//
// @evidence contracts/testing.md#behavioral-verification ConstantMetadata only constructs a required constant schema of the given primitive kind and asserts nothing; the tests that call it assert the behavior of the code under test on that value, so a wrong construction surfaces as a failing assertion in those callers.
// @evidence contracts/testing.md#independent-expectations The constructed value is authored input derived from the arguments and not from the code under test.
// @evidence contracts/testing.md#distinguishing-cases ConstantMetadata supplies a required constant schema of the given primitive kind for positive and negative cases chosen by its callers and owns no case distinction itself.
// @evidence contracts/testing.md#execution-ownership The helper is compiled into the packages/typia/test module (pnpm test:go:public) and called in process by the Go tests; it starts no process and builds no native command.
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

// Builds required metadata with bigint constants.
//
// @evidence contracts/testing.md#behavioral-verification BigintConstantMetadata only constructs a required bigint constant schema and asserts nothing; the tests that call it assert the behavior of the code under test on that value, so a wrong construction surfaces as a failing assertion in those callers.
// @evidence contracts/testing.md#independent-expectations The constructed value is authored input derived from the arguments and not from the code under test.
// @evidence contracts/testing.md#distinguishing-cases BigintConstantMetadata supplies a required bigint constant schema for positive and negative cases chosen by its callers and owns no case distinction itself.
// @evidence contracts/testing.md#execution-ownership The helper is compiled into the packages/typia/test module (pnpm test:go:public) and called in process by the Go tests; it starts no process and builds no native command.
func BigintConstantMetadata(values ...any) *metadata.MetadataSchema {
  return ConstantMetadata("bigint", values...)
}

// Builds required metadata with string constants.
//
// @evidence contracts/testing.md#behavioral-verification StringConstantMetadata only constructs a required string constant schema and asserts nothing; the tests that call it assert the behavior of the code under test on that value, so a wrong construction surfaces as a failing assertion in those callers.
// @evidence contracts/testing.md#independent-expectations The constructed value is authored input derived from the arguments and not from the code under test.
// @evidence contracts/testing.md#distinguishing-cases StringConstantMetadata supplies a required string constant schema for positive and negative cases chosen by its callers and owns no case distinction itself.
// @evidence contracts/testing.md#execution-ownership The helper is compiled into the packages/typia/test module (pnpm test:go:public) and called in process by the Go tests; it starts no process and builds no native command.
func StringConstantMetadata(values ...any) *metadata.MetadataSchema {
  return ConstantMetadata("string", values...)
}

// Builds a type tag with a name.
//
// @evidence contracts/testing.md#behavioral-verification NamedTag only constructs a type tag carrying only a name and asserts nothing; the tests that call it assert the behavior of the code under test on that value, so a wrong construction surfaces as a failing assertion in those callers.
// @evidence contracts/testing.md#independent-expectations The constructed value is authored input derived from the arguments and not from the code under test.
// @evidence contracts/testing.md#distinguishing-cases NamedTag supplies a type tag carrying only a name for positive and negative cases chosen by its callers and owns no case distinction itself.
// @evidence contracts/testing.md#execution-ownership The helper is compiled into the packages/typia/test module (pnpm test:go:public) and called in process by the Go tests; it starts no process and builds no native command.
func NamedTag(name string) metadata.IMetadataTypeTag {
  return metadata.IMetadataTypeTag{Name: name}
}

// Builds a type tag of kind type.
//
// @evidence contracts/testing.md#behavioral-verification TypeTag only constructs a type-kind tag with a name and value and asserts nothing; the tests that call it assert the behavior of the code under test on that value, so a wrong construction surfaces as a failing assertion in those callers.
// @evidence contracts/testing.md#independent-expectations The constructed value is authored input derived from the arguments and not from the code under test.
// @evidence contracts/testing.md#distinguishing-cases TypeTag supplies a type-kind tag with a name and value for positive and negative cases chosen by its callers and owns no case distinction itself.
// @evidence contracts/testing.md#execution-ownership The helper is compiled into the packages/typia/test module (pnpm test:go:public) and called in process by the Go tests; it starts no process and builds no native command.
func TypeTag(value string) metadata.IMetadataTypeTag {
  return metadata.IMetadataTypeTag{
    Kind:  "type",
    Name:  value,
    Value: value,
  }
}

// Builds a sequence tag carrying the field number in its schema.
//
// @evidence contracts/testing.md#behavioral-verification SequenceTag only constructs a protobuf sequence tag and asserts nothing; the tests that call it assert the behavior of the code under test on that value, so a wrong construction surfaces as a failing assertion in those callers.
// @evidence contracts/testing.md#independent-expectations The constructed value is authored input derived from the arguments and not from the code under test.
// @evidence contracts/testing.md#distinguishing-cases SequenceTag supplies a protobuf sequence tag for positive and negative cases chosen by its callers and owns no case distinction itself.
// @evidence contracts/testing.md#execution-ownership The helper is compiled into the packages/typia/test module (pnpm test:go:public) and called in process by the Go tests; it starts no process and builds no native command.
func SequenceTag(value int) metadata.IMetadataTypeTag {
  return metadata.IMetadataTypeTag{
    Kind: "sequence",
    Name: "Sequence",
    Schema: map[string]any{
      "x-protobuf-sequence": value,
    },
  }
}
