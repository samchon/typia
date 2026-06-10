package factories

import (
  "strings"
  "testing"

  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestProtobufFactoryRejectsInvalidFieldNames verifies proto3 identifier rules.
//
// The emitted message text writes property names verbatim, so a quoted key
// like "something-strange" produced a .proto file protoc cannot parse. The
// object validator must reject any sole-literal property key that is not a
// proto3 identifier, while dynamic (non-literal) keys stay exempt because
// they compile to protobuf maps without field names.
//
//  1. Validate objects whose keys are valid identifiers and assert no error.
//  2. Validate keys with dashes, leading digits, spaces, and empty names and
//     assert each is rejected.
//  3. Assert a dynamic string-typed key passes the name rule untouched.
func TestProtobufFactoryRejectsInvalidFieldNames(t *testing.T) {
  literal := func(value string) *schemametadata.MetadataSchema {
    return schemametadata.MetadataSchema_create(schemametadata.MetadataSchema{
      Required: true,
      Constants: []*schemametadata.MetadataConstant{
        schemametadata.MetadataConstant_create(schemametadata.MetadataConstant{
          Type: "string",
          Values: []*schemametadata.MetadataConstantValue{
            schemametadata.MetadataConstantValue_create(schemametadata.MetadataConstantValue{Value: value}),
          },
        }),
      },
    })
  }
  atomic := func(kind string) *schemametadata.MetadataSchema {
    return schemametadata.MetadataSchema_create(schemametadata.MetadataSchema{
      Required: true,
      Atomics: []*schemametadata.MetadataAtomic{
        schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{Type: kind}),
      },
    })
  }
  object := func(key *schemametadata.MetadataSchema) *schemametadata.MetadataObjectType {
    return schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{
      Name: "Something",
      Properties: []*schemametadata.MetadataProperty{
        schemametadata.MetadataProperty_create(schemametadata.MetadataProperty{
          Key:   key,
          Value: atomic("string"),
        }),
      },
    })
  }
  validate := func(key *schemametadata.MetadataSchema) []string {
    errors := []string{}
    protobufFactory_validateObject(object(key), &errors)
    return errors
  }

  for _, name := range []string{"id", "_private", "snake_case", "camelCase", "v2"} {
    if errors := validate(literal(name)); len(errors) != 0 {
      t.Fatalf("identifier key %q should be accepted, got %v", name, errors)
    }
  }
  for _, name := range []string{"something-strange", "1leading", "has space", "", "emojié"} {
    errors := validate(literal(name))
    if len(errors) != 1 || strings.Contains(errors[0], "not a valid Protocol Buffer field name") == false {
      t.Fatalf("key %q should be rejected as an invalid field name, got %v", name, errors)
    }
  }
  if errors := validate(atomic("string")); len(errors) != 0 {
    t.Fatalf("dynamic string key should be exempt from the field name rule, got %v", errors)
  }
}
