package factories

import (
  "fmt"

  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// metadataTypeTagFactoryTestDeclaration mirrors one type tag declaration from
// `packages/interface/src/tags`, which is the specification the native check
// must enforce. `exclusive` names kinds, never tag names.
type metadataTypeTagFactoryTestDeclaration struct {
  target    string
  kind      string
  exclusive []string
  name      string
}

// tag materializes the declaration as the metadata tag the factory receives.
func (d metadataTypeTagFactoryTestDeclaration) tag(value string) schemametadata.IMetadataTypeTag {
  return schemametadata.IMetadataTypeTag{
    Target:    d.target,
    Name:      fmt.Sprintf(d.name, value),
    Kind:      d.kind,
    Exclusive: d.exclusive,
    Value:     value,
  }
}

// metadataTypeTagFactoryTestDeclarations transcribes every array-form tag
// declaration, in the exact `kind` and `exclusive` shape each publishes:
//
//   - Minimum          kind "minimum"          exclusive ["minimum", "exclusiveMinimum"]
//   - Maximum          kind "maximum"          exclusive ["maximum", "exclusiveMaximum"]
//   - ExclusiveMinimum kind "exclusiveMinimum" exclusive ["exclusiveMinimum", "minimum"]
//   - ExclusiveMaximum kind "exclusiveMaximum" exclusive ["exclusiveMaximum", "maximum"]
//   - Format           kind "format"           exclusive ["format", "pattern"]
//   - Pattern          kind "pattern"          exclusive ["format", "pattern"]
//
// Each list names its own kind, so no tag may be duplicated, plus exactly one
// cross-kind partner.
func metadataTypeTagFactoryTestDeclarations() []metadataTypeTagFactoryTestDeclaration {
  return []metadataTypeTagFactoryTestDeclaration{
    {target: "number", kind: "minimum", exclusive: []string{"minimum", "exclusiveMinimum"}, name: "Minimum<%s>"},
    {target: "number", kind: "maximum", exclusive: []string{"maximum", "exclusiveMaximum"}, name: "Maximum<%s>"},
    {target: "number", kind: "exclusiveMinimum", exclusive: []string{"exclusiveMinimum", "minimum"}, name: "ExclusiveMinimum<%s>"},
    {target: "number", kind: "exclusiveMaximum", exclusive: []string{"exclusiveMaximum", "maximum"}, name: "ExclusiveMaximum<%s>"},
    {target: "string", kind: "format", exclusive: []string{"format", "pattern"}, name: "Format<%s>"},
    {target: "string", kind: "pattern", exclusive: []string{"format", "pattern"}, name: "Pattern<%s>"},
  }
}

// metadataTypeTagFactoryTestReport collects the factory's validation messages.
func metadataTypeTagFactoryTestReport(messages *[]string) func(struct {
  Property *string
  Message  string
}) bool {
  return func(next struct {
    Property *string
    Message  string
  }) bool {
    *messages = append(*messages, next.Message)
    return false
  }
}

// metadataTypeTagFactoryTestValidate runs the factory check over one tag list.
func metadataTypeTagFactoryTestValidate(
  target string,
  tags []schemametadata.IMetadataTypeTag,
) (bool, []string) {
  messages := []string{}
  success := MetadataTypeTagFactory.Validate(struct {
    Report func(struct {
      Property *string
      Message  string
    }) bool
    Type string
    Tags []schemametadata.IMetadataTypeTag
  }{
    Report: metadataTypeTagFactoryTestReport(&messages),
    Type:   target,
    Tags:   tags,
  })
  return success, messages
}
