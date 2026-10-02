package factories

import (
  "testing"

  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestMetadataTypeTagFactoryReportsAllInvalidCandidates verifies a rejected tag
// still produces a transform diagnostic when no valid tag candidate accompanies
// it.
//
// Analyze used to return as soon as its filtered candidate list was empty. That
// discarded the messages collected while rejecting the candidates, so a lone
// malformed tag silently became an ordinary phantom brand while the same tag
// beside a valid one failed compilation.
//
//  1. Build one structurally recognizable tag with a non-literal value.
//  2. Analyze it without a valid companion and require no emitted metadata tag.
//  3. Require the collected validation message to reach the factory errors.
//
// @evidence contracts/testing.md#behavioral-verification Analyze runs on a lone typia.tag object of kind default whose value metadata is a string atomic and not a literal; no metadata tag may be produced and exactly one error with messages must be retained.
// @evidence contracts/testing.md#independent-expectations A rejected tag must surface its diagnostic even without a valid companion; the single non-literal-value input and the expected empty tags plus one error are authored. The exact diagnostic text is not asserted.
// @evidence contracts/testing.md#distinguishing-cases Only the lone invalid tag is asserted; a rejected tag beside a valid one is not asserted by this test.
// @evidence contracts/testing.md#execution-ownership The canonical native Go command (pnpm test:go:native) runs this same-package Test function in process. It calls the factory on constructed tags with no checker, filesystem fixture or process.
func TestMetadataTypeTagFactoryReportsAllInvalidCandidates(t *testing.T) {
  invalid := metadataTypeTagFactoryAllInvalidContainer("InvalidValue",
    metadataTypeTagFactoryAllInvalidProperty("target", MetadataFactory.SoleLiteral("array")),
    metadataTypeTagFactoryAllInvalidProperty("kind", MetadataFactory.SoleLiteral("default")),
    metadataTypeTagFactoryAllInvalidProperty("value", func() *schemametadata.MetadataSchema {
      metadata := schemametadata.MetadataSchema_initialize()
      metadata.Atomics = append(metadata.Atomics, schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{Type: "string"}))
      return metadata
    }()),
  )
  errors := []MetadataFactory_IError{}
  tags := MetadataTypeTagFactory.Analyze(struct {
    Errors  *[]MetadataFactory_IError
    Type    string
    Objects []*schemametadata.MetadataObjectType
    Explore MetadataFactory_IExplore
  }{
    Errors:  &errors,
    Type:    "array",
    Objects: []*schemametadata.MetadataObjectType{invalid},
  })
  if len(tags) != 0 {
    t.Fatalf("an invalid value must not produce a metadata tag: %#v", tags)
  }
  if len(errors) != 1 || len(errors[0].Messages) == 0 {
    t.Fatalf("a lone invalid tag must retain its diagnostic: %#v", errors)
  }
}

func metadataTypeTagFactoryAllInvalidProperty(key string, value *schemametadata.MetadataSchema) *schemametadata.MetadataProperty {
  return schemametadata.MetadataProperty_create(schemametadata.MetadataProperty{
    Key:   MetadataFactory.SoleLiteral(key),
    Value: value,
  })
}

func metadataTypeTagFactoryAllInvalidContainer(name string, properties ...*schemametadata.MetadataProperty) *schemametadata.MetadataObjectType {
  tagValue := schemametadata.MetadataSchema_initialize()
  tagValue.Required = false
  tagValue.Optional = true
  tagValue.Objects = append(tagValue.Objects, schemametadata.MetadataObject_create(schemametadata.MetadataObject{
    Type: schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{
      Name:       name + "Shape",
      Properties: properties,
    }),
  }))
  return schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{
    Name: name,
    Properties: []*schemametadata.MetadataProperty{
      metadataTypeTagFactoryAllInvalidProperty("typia.tag", tagValue),
    },
  })
}
