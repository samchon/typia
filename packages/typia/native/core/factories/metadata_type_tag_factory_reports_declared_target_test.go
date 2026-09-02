package factories

import (
  "strings"
  "testing"

  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestMetadataTypeTagFactoryReportsDeclaredTarget verifies target diagnostics preserve tag ownership.
//
// A rejected tag used to discard its declared targets and synthesize an empty
// target before validation. The validator then substituted the host metadata
// type, and repeated boolean analysis appended the same error record twice.
//
//  1. Analyze single- and multi-target tags against incompatible host types.
//  2. Repeat the same metadata occurrence and require only its exact duplicate error to coalesce.
//  3. Validate a synthetic mismatched tag and require its declared target in the report.
func TestMetadataTypeTagFactoryReportsDeclaredTarget(t *testing.T) {
  arrayTag := declaredTargetTagContainer("ArrayOnly",
    declaredTargetTagProperty("target", declaredTargetLiteralMetadata("array")),
    declaredTargetTagProperty("kind", declaredTargetLiteralMetadata("minItems")),
    declaredTargetTagProperty("value", declaredTargetLiteralMetadata("1")),
  )
  errors := []MetadataFactory_IError{}
  analyze := func(tag *schemametadata.MetadataObjectType, host string) {
    MetadataTypeTagFactory.Analyze(struct {
      Errors  *[]MetadataFactory_IError
      Type    string
      Objects []*schemametadata.MetadataObjectType
      Explore MetadataFactory_IExplore
    }{
      Errors:  &errors,
      Type:    host,
      Objects: []*schemametadata.MetadataObjectType{tag},
      Explore: MetadataFactory_IExplore{Property: "value"},
    })
  }
  analyze(arrayTag, "boolean")
  analyze(arrayTag, "boolean")
  if len(errors) != 1 || len(errors[0].Messages) != 1 || !strings.Contains(errors[0].Messages[0], "target must contain array type") {
    t.Fatalf("single-target diagnostic mismatch: %+v", errors)
  }

  multiTag := declaredTargetTagContainer("StringOrNumber",
    declaredTargetTagProperty("target", declaredTargetStringUnionMetadata("string", "number")),
    declaredTargetTagProperty("kind", declaredTargetLiteralMetadata("domain")),
    declaredTargetTagProperty("value", declaredTargetLiteralMetadata("scalar")),
  )
  analyze(multiTag, "object")
  if len(errors) != 2 || len(errors[1].Messages) != 1 || !strings.Contains(errors[1].Messages[0], "target must contain string or number type") {
    t.Fatalf("multi-target diagnostic mismatch: %+v", errors)
  }

  reports := []string{}
  MetadataTypeTagFactory.Validate(struct {
    Report func(struct {
      Property *string
      Message  string
    }) bool
    Type string
    Tags []schemametadata.IMetadataTypeTag
  }{
    Report: func(next struct {
      Property *string
      Message  string
    }) bool {
      reports = append(reports, next.Message)
      return false
    },
    Type: "string",
    Tags: []schemametadata.IMetadataTypeTag{{Target: "number"}},
  })
  if len(reports) != 1 || reports[0] != "target must contain number type" {
    t.Fatalf("synthetic target diagnostic mismatch: %+v", reports)
  }
}

func declaredTargetLiteralMetadata(value string) *schemametadata.MetadataSchema {
  return declaredTargetStringUnionMetadata(value)
}

func declaredTargetStringUnionMetadata(values ...string) *schemametadata.MetadataSchema {
  metadata := schemametadata.MetadataSchema_initialize()
  constants := make([]*schemametadata.MetadataConstantValue, 0, len(values))
  for _, value := range values {
    constants = append(constants, schemametadata.MetadataConstantValue_create(schemametadata.MetadataConstantValue{Value: value}))
  }
  metadata.Constants = append(metadata.Constants, schemametadata.MetadataConstant_create(schemametadata.MetadataConstant{
    Type:   "string",
    Values: constants,
  }))
  return metadata
}

func declaredTargetTagProperty(key string, value *schemametadata.MetadataSchema) *schemametadata.MetadataProperty {
  return schemametadata.MetadataProperty_create(schemametadata.MetadataProperty{
    Key:   declaredTargetLiteralMetadata(key),
    Value: value,
  })
}

func declaredTargetTagContainer(name string, properties ...*schemametadata.MetadataProperty) *schemametadata.MetadataObjectType {
  value := schemametadata.MetadataSchema_initialize()
  value.Required = false
  value.Optional = true
  value.Objects = append(value.Objects, schemametadata.MetadataObject_create(schemametadata.MetadataObject{
    Type: schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{
      Name:       name + "Shape",
      Properties: properties,
    }),
  }))
  return schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{
    Name: name,
    Properties: []*schemametadata.MetadataProperty{
      schemametadata.MetadataProperty_create(schemametadata.MetadataProperty{
        Key:   declaredTargetLiteralMetadata("typia.tag"),
        Value: value,
      }),
    },
  })
}
