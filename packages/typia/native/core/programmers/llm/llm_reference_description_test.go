package llm

import (
  "testing"

  nativeiterate "github.com/samchon/typia/packages/typia/native/core/programmers/iterate"
)

// TestLlmReferenceDescription locks the root description of a parameters
// object reached through `$ref` to `JsonDescriptor.cascade({ escape: true })`,
// the description `LlmSchemaConverter.parameters` writes for the same
// collection (samchon/typia#2405).
func TestLlmReferenceDescription(t *testing.T) {
  t.Parallel()
  const separator = "\n\n------------------------------\n\n"
  text := func(value string) *string { return &value }
  components := &nativeiterate.OpenApi_IComponents{
    Schemas: map[string]nativeiterate.JsonSchema{
      "IPlain":               {"type": "object"},
      "IMember":              {"type": "object", "description": "Member.\nSecond line."},
      "IMember.ICreate":      {"type": "object", "description": "Creation."},
      "IMember.IBare":        {"type": "object"},
      "IMember.Deep":         {"type": "object"},
      "IMember.Deep.ILeaf":   {"type": "object"},
      "IMember.IEmpty":       {"type": "object", "description": ""},
      "INamespaceless.IItem": {"type": "object"},
    },
  }
  cases := []struct {
    name     string
    schema   nativeiterate.JsonSchema
    own      *string
    expected *string
  }{
    {
      name:     "undescribed",
      schema:   nativeiterate.JsonSchema{"$ref": "#/components/schemas/IPlain"},
      expected: text("Current Type: {@link IPlain}"),
    },
    {
      name:   "described",
      schema: nativeiterate.JsonSchema{"$ref": "#/components/schemas/IMember"},
      own:    text("Member.\nSecond line."),
      expected: text("Member.\nSecond line." + separator +
        "Description of the current {@link IMember} type:\n\n> Member.\n> Second line."),
    },
    {
      name:   "described child of a described parent",
      schema: nativeiterate.JsonSchema{"$ref": "#/components/schemas/IMember.ICreate"},
      own:    text("Creation."),
      expected: text("Creation." + separator +
        "Description of the current {@link IMember.ICreate} type:\n\n> Creation." + separator +
        "Description of the parent {@link IMember} type:\n\n> Member.\n> Second line."),
    },
    {
      name:   "undescribed child of a described parent",
      schema: nativeiterate.JsonSchema{"$ref": "#/components/schemas/IMember.IBare"},
      expected: text("Current Type: {@link IMember.IBare}" + separator +
        "Description of the parent {@link IMember} type:\n\n> Member.\n> Second line."),
    },
    {
      name:   "undescribed middle parent is skipped",
      schema: nativeiterate.JsonSchema{"$ref": "#/components/schemas/IMember.Deep.ILeaf"},
      expected: text("Current Type: {@link IMember.Deep.ILeaf}" + separator +
        "Description of the parent {@link IMember} type:\n\n> Member.\n> Second line."),
    },
    {
      name:   "empty own description renders quoted",
      schema: nativeiterate.JsonSchema{"$ref": "#/components/schemas/IMember.IEmpty"},
      own:    text(""),
      expected: text("Description of the current {@link IMember.IEmpty} type:\n\n> " + separator +
        "Description of the parent {@link IMember} type:\n\n> Member.\n> Second line."),
    },
    {
      name:     "parent missing from components",
      schema:   nativeiterate.JsonSchema{"$ref": "#/components/schemas/INamespaceless.IItem"},
      expected: text("Current Type: {@link INamespaceless.IItem}"),
    },
    {
      name:     "inline object keeps its own description",
      schema:   nativeiterate.JsonSchema{"type": "object"},
      own:      text("Inline."),
      expected: text("Inline."),
    },
    {
      name:   "inline object without description",
      schema: nativeiterate.JsonSchema{"type": "object"},
    },
    {
      name:     "foreign reference keeps its own description",
      schema:   nativeiterate.JsonSchema{"$ref": "#/$defs/IPlain"},
      own:      text("Own."),
      expected: text("Own."),
    },
  }
  for _, c := range cases {
    actual := llmReferenceDescription_root(c.schema, components, c.own)
    if (actual == nil) != (c.expected == nil) || (actual != nil && *actual != *c.expected) {
      t.Errorf("%s:\nexpected %s\nactual   %s", c.name, llmReferenceDescriptionTest_show(c.expected), llmReferenceDescriptionTest_show(actual))
    }
  }
}

// TestLlmReferenceDescriptionAssign locks that the parameters object loses a
// stale description when the cascade yields none, and gains the cascade
// otherwise.
func TestLlmReferenceDescriptionAssign(t *testing.T) {
  t.Parallel()
  components := &nativeiterate.OpenApi_IComponents{
    Schemas: map[string]nativeiterate.JsonSchema{"IPlain": {"type": "object"}},
  }
  output := map[string]any{"type": "object"}
  llmReferenceDescription_assign(output, nativeiterate.JsonSchema{"$ref": "#/components/schemas/IPlain"}, components)
  if output["description"] != "Current Type: {@link IPlain}" {
    t.Fatalf("reference root: got %#v", output["description"])
  }
  inline := map[string]any{"type": "object", "description": ""}
  llmReferenceDescription_assign(inline, nativeiterate.JsonSchema{"type": "object"}, components)
  if value, ok := inline["description"]; ok == false || value != "" {
    t.Fatalf("inline root must keep its own description: got %#v", inline)
  }
  bare := map[string]any{"type": "object"}
  llmReferenceDescription_assign(bare, nativeiterate.JsonSchema{"type": "object"}, components)
  if _, ok := bare["description"]; ok {
    t.Fatalf("inline root without description must stay undescribed: got %#v", bare)
  }
}

func llmReferenceDescriptionTest_show(value *string) string {
  if value == nil {
    return "<nil>"
  }
  return "\"" + *value + "\""
}
