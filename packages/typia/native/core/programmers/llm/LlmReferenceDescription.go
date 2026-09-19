package llm

import (
  "strings"

  nativeiterate "github.com/samchon/typia/packages/typia/native/core/programmers/iterate"
)

// llmReferenceDescription_root describes a parameters root that was reached
// through `$ref`, the way `LlmSchemaConverter.parameters` does with
// `JsonDescriptor.cascade({ escape: true })`: the type's own description, then
// each described namespace parent quoted, or `Current Type: {@link Name}` when
// the type carries none (samchon/typia#2405). A root that is not a reference
// keeps `own`.
func llmReferenceDescription_root(
  schema nativeiterate.JsonSchema,
  components *nativeiterate.OpenApi_IComponents,
  own *string,
) *string {
  ref, ok := schema["$ref"].(string)
  if ok == false {
    return own
  }
  key, ok := llmReferenceDescription_key(ref)
  if ok == false {
    return own
  }
  return llmReferenceDescription_cascade(key, components, own)
}

// llmReferenceDescription_cascade ports `JsonDescriptor.cascade` with
// `escape: true`.
func llmReferenceDescription_cascade(
  key string,
  components *nativeiterate.OpenApi_IComponents,
  own *string,
) *string {
  type parent struct {
    key         string
    description *string
  }
  accessors := strings.Split(key, ".")
  parents := []parent{}
  for i := len(accessors); i >= 1; i-- {
    current := strings.Join(accessors[:i], ".")
    var description *string
    if components != nil && components.Schemas != nil {
      if target, found := components.Schemas[current]; found {
        if text, ok := target["description"].(string); ok {
          description = &text
        }
      }
    }
    // the type itself always stays; a parent only when it is described
    if i == len(accessors) || (description != nil && *description != "") {
      parents = append(parents, parent{key: current, description: description})
    }
  }
  if (own == nil || *own == "") && len(parents) == 0 {
    return nil
  }
  parts := []string{}
  if own != nil && *own != "" {
    parts = append(parts, *own)
  }
  for i, p := range parents {
    if p.description == nil {
      parts = append(parts, "Current Type: {@link "+p.key+"}")
      continue
    }
    role := "parent"
    if i == 0 {
      role = "current"
    }
    lines := strings.Split(*p.description, "\n")
    for j, line := range lines {
      lines[j] = "> " + line
    }
    parts = append(parts, "Description of the "+role+" {@link "+p.key+"} type:\n\n"+strings.Join(lines, "\n"))
  }
  output := strings.Join(parts, "\n\n------------------------------\n\n")
  return &output
}

// llmReferenceDescription_key reads the component key of a
// `#/components/schemas/` reference. Native references carry the raw key, the
// one `components.schemas` is indexed by; `LlmReference.readOpenApi` decodes
// the escaped form of the same key in an emitted document.
func llmReferenceDescription_key(ref string) (string, bool) {
  const prefix = "#/components/schemas/"
  if strings.HasPrefix(ref, prefix) == false {
    return "", false
  }
  return strings.TrimPrefix(ref, prefix), true
}

// llmReferenceDescription_assign sets the cascaded root description on a
// converted parameters object, removing it when the cascade yields none.
func llmReferenceDescription_assign(
  output map[string]any,
  schema nativeiterate.JsonSchema,
  components *nativeiterate.OpenApi_IComponents,
) {
  var own *string
  if text, ok := output["description"].(string); ok {
    own = &text
  }
  if description := llmReferenceDescription_root(schema, components, own); description != nil {
    output["description"] = *description
  } else {
    delete(output, "description")
  }
}
