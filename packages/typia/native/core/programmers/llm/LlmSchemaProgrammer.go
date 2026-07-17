package llm

import (
  "fmt"
  "reflect"
  "sort"
  "strconv"
  "strings"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  nativeiterate "github.com/samchon/typia/packages/typia/native/core/programmers/iterate"
  nativejson "github.com/samchon/typia/packages/typia/native/core/programmers/json"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type llmSchemaProgrammerNamespace struct{}

var LlmSchemaProgrammer = llmSchemaProgrammerNamespace{}

type LlmSchemaProgrammer_IProps struct {
  Context nativecontext.ITypiaContext
  Modulo  *shimast.Node
  Type    any
  Name    *string
  Init    *shimast.Node
  Config  map[string]any
}

type LlmSchemaProgrammer_IOutput struct {
  Schema map[string]any
  Defs   map[string]any
}

type LlmSchemaProgrammer_IWriteProps struct {
  Context  nativecontext.ITypiaContext
  Metadata *schemametadata.MetadataSchema
  Config   map[string]any
}

var llmSchemaProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (llmSchemaProgrammerNamespace) Write(props LlmSchemaProgrammer_IWriteProps) *shimast.Node {
  output := LlmSchemaProgrammer.WriteSchema(struct {
    Metadata *schemametadata.MetadataSchema
    Config   map[string]any
  }{
    Metadata: props.Metadata,
    Config:   props.Config,
  })
  f := nativecontext.EmitFactoryOf(llmSchemaProgrammer_factory, props.Context.Emit)
  schemaTypeNode := llmProgrammer_import_type(props.Context, nativecontext.ImportProgrammer_TypeProps{
    File: "typia",
    Name: "ILlmSchema",
  })
  schemaLiteral := f.NewAsExpression(
    f.NewSatisfiesExpression(
      nativefactories.LiteralFactory.Write(output.Schema, props.Context.Emit),
      schemaTypeNode,
    ),
    schemaTypeNode,
  )
  if len(output.Defs) == 0 {
    return schemaLiteral
  }
  recordType := llmSchemaProgrammer_record_type(schemaTypeNode, props.Context.Emit)
  return f.NewArrowFunction(
    nil,
    nil,
    f.NewNodeList([]*shimast.Node{
      nativefactories.IdentifierFactory.Parameter("$defs", recordType, nil, props.Context.Emit),
    }),
    schemaTypeNode,
    nil,
    f.NewToken(shimast.KindEqualsGreaterThanToken),
    f.NewBlock(f.NewNodeList([]*shimast.Node{
      f.NewExpressionStatement(
        f.NewCallExpression(
          f.NewIdentifier("Object.assign"),
          nil,
          nil,
          f.NewNodeList([]*shimast.Node{
            f.NewIdentifier("$defs"),
            f.NewAsExpression(
              nativefactories.LiteralFactory.Write(output.Defs, props.Context.Emit),
              llmSchemaProgrammer_record_type(schemaTypeNode, props.Context.Emit),
            ),
          }),
          shimast.NodeFlagsNone,
        ),
      ),
      f.NewReturnStatement(schemaLiteral),
    }), true),
  )
}

func llmSchemaProgrammer_record_type(schemaTypeNode *shimast.Node, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(llmSchemaProgrammer_factory, emit...)
  return f.NewTypeReferenceNode(
    f.NewIdentifier("Record"),
    f.NewNodeList([]*shimast.Node{
      nativefactories.TypeFactory.Keyword("string", emit...),
      schemaTypeNode,
    }),
  )
}

func (llmSchemaProgrammerNamespace) WriteSchema(props struct {
  Metadata *schemametadata.MetadataSchema
  Config   map[string]any
}) LlmSchemaProgrammer_IOutput {
  collection := nativejson.JsonSchemasProgrammer.WriteSchemas(struct {
    Version   string
    Metadatas []*schemametadata.MetadataSchema
  }{
    Version:   "3.1",
    Metadatas: []*schemametadata.MetadataSchema{props.Metadata},
  })
  defs := map[string]any{}
  schema := map[string]any{}
  if len(collection.Schemas) != 0 {
    schema = llmSchemaProgrammer_convert_schema_config(collection.Schemas[0], collection.Components, defs, props.Config)
  }
  return LlmSchemaProgrammer_IOutput{
    Defs:   defs,
    Schema: schema,
  }
}

func (llmSchemaProgrammerNamespace) Validate(props struct {
  Config   map[string]any
  Metadata *schemametadata.MetadataSchema
  Explore  nativefactories.MetadataFactory_IExplore
}) []string {
  output := []string{}
  strict, _ := props.Config["strict"].(bool)
  if strict {
    for _, object := range props.Metadata.Objects {
      for _, property := range object.Type.Properties {
        if property.Key.IsSoleLiteral() == false && property.Value.Size() != 0 {
          output = append(output, "Strict mode does not allow dynamic property in object.")
          break
        }
      }
    }
    for _, object := range props.Metadata.Objects {
      for _, property := range object.Type.Properties {
        if property.Value.IsRequired() == false {
          output = append(output, "Strict mode does not support optional property in object.")
          break
        }
      }
    }
    // The strict schema subset typia emits has no `not` keyword, which is what
    // the exclude tag compiles to, so an exclude tag has no representation here
    // and is rejected.
    excluded := false
    scan := func(matrix [][]schemametadata.IMetadataTypeTag) {
      for _, row := range matrix {
        for _, tag := range row {
          if tag.Kind == "exclude" {
            excluded = true
          }
        }
      }
    }
    for _, atomic := range props.Metadata.Atomics {
      scan(atomic.Tags)
    }
    for _, template := range props.Metadata.Templates {
      scan(template.Tags)
    }
    if excluded {
      output = append(output, "Strict mode does not support exclude type tag.")
    }
  }
  if schemametadata.MetadataSchema_hasBigint(props.Metadata) {
    output = append(output, "LLM schema does not support bigint type.")
  }
  if len(props.Metadata.Tuples) != 0 {
    output = append(output, "LLM schema does not support tuple type.")
  }
  for _, array := range props.Metadata.Arrays {
    if array.Type.Value.IsRequired() == false {
      output = append(output, "LLM schema does not support undefined type in array.")
      break
    }
  }
  if len(props.Metadata.Maps) != 0 {
    output = append(output, "LLM schema does not support Map type.")
  }
  if len(props.Metadata.Sets) != 0 {
    output = append(output, "LLM schema does not support Set type.")
  }
  for _, native := range props.Metadata.Natives {
    if native.Name == "BigInt" {
      continue
    }
    if nativehelpers.AtomicPredicator.Native(native.Name) == false &&
      native.Name != "Date" &&
      native.Name != "Blob" &&
      native.Name != "File" {
      output = append(output, "LLM schema does not support "+native.Name+" type.")
    }
  }
  return output
}

func llmSchemaProgrammer_size(metadata *schemametadata.MetadataSchema) int {
  total := 0
  if metadata.Escaped != nil {
    total += llmSchemaProgrammer_size(metadata.Escaped.Returns)
  }
  total += len(metadata.Aliases) + len(metadata.Objects) + len(metadata.Arrays) + len(metadata.Tuples)
  if len(metadata.Maps) != 0 {
    total++
  }
  if len(metadata.Sets) != 0 {
    total++
  }
  for _, atomic := range metadata.Atomics {
    if atomic.Type == "boolean" {
      total += len(nativeiterate.Json_schema_boolean_export(atomic))
    } else if atomic.Type == "bigint" {
      total += len(nativeiterate.Json_schema_bigint_export(atomic))
    } else if atomic.Type == "number" {
      total += len(nativeiterate.Json_schema_number_export(atomic))
    } else {
      total += len(nativeiterate.Json_schema_string_export(atomic))
    }
  }
  for _, constant := range metadata.Constants {
    found := false
    for _, atomic := range metadata.Atomics {
      if atomic.Type == constant.Type {
        found = true
        break
      }
    }
    if found == false {
      total++
    }
  }
  total += len(metadata.Templates)
  components := &nativeiterate.OpenApi_IComponents{Schemas: map[string]nativeiterate.JsonSchema{}}
  for _, native := range metadata.Natives {
    found := false
    for _, atomic := range metadata.Atomics {
      if atomic.Type == native.Name {
        found = true
        break
      }
    }
    for _, constant := range metadata.Constants {
      if constant.Type == native.Name {
        found = true
        break
      }
    }
    if found == false {
      total += len(nativeiterate.Json_schema_native_export(nativeiterate.Json_schema_native_export_props{
        Components: components,
        Native:     native,
      }))
    }
  }
  return total
}

func llmSchemaProgrammer_convert_schema(schema nativeiterate.JsonSchema, components *nativeiterate.OpenApi_IComponents, defs map[string]any) map[string]any {
  return llmSchemaProgrammer_convert_schema_config(schema, components, defs, nil)
}

func llmSchemaProgrammer_convert_schema_config(schema nativeiterate.JsonSchema, components *nativeiterate.OpenApi_IComponents, defs map[string]any, config map[string]any) map[string]any {
  strict := llmSchemaProgrammer_strict(config)
  attribute := llmSchemaProgrammer_attribute(schema)
  union := []map[string]any{}

  insertConstant := func(value any) {
    typ := llmSchemaProgrammer_constant_type(value)
    for _, elem := range union {
      if elem["type"] == typ {
        elem["enum"] = append(llmSchemaProgrammer_array(elem["enum"]), value)
        return
      }
    }
    union = append(union, map[string]any{
      "type": typ,
      "enum": []any{value},
    })
  }
  var visitConstant func(nativeiterate.JsonSchema)
  visitConstant = func(input nativeiterate.JsonSchema) {
    if value, ok := input["const"]; ok {
      insertConstant(value)
      return
    }
    for _, elem := range llmSchemaProgrammer_schema_array(input["oneOf"]) {
      visitConstant(elem)
    }
  }

  var visit func(nativeiterate.JsonSchema)
  visit = func(input nativeiterate.JsonSchema) {
    if oneOf := llmSchemaProgrammer_schema_array(input["oneOf"]); len(oneOf) != 0 {
      for _, elem := range oneOf {
        visit(elem)
      }
      return
    }
    if ref, ok := input["$ref"].(string); ok {
      key := llmSchemaProgrammer_ref_key(ref)
      if _, exists := defs[key]; exists == false {
        defs[key] = map[string]any{}
        if target, found := llmSchemaProgrammer_component(components, key); found {
          defs[key] = llmSchemaProgrammer_convert_schema_config(target, components, defs, config)
        }
      }
      union = append(union, map[string]any{"$ref": llmSchemaProgrammer_encode_reference(key)})
      return
    }
    if input["type"] == "object" {
      properties := map[string]any{}
      propertyKeys := []string{}
      if raw, keys, ok := llmSchemaProgrammer_schema_map_ordered(input["properties"]); ok {
        for _, key := range keys {
          if value, ok := llmSchemaProgrammer_schema_from_any(raw[key]); ok {
            properties[key] = llmSchemaProgrammer_convert_schema_config(value, components, defs, config)
            propertyKeys = append(propertyKeys, key)
          }
        }
      }
      output := llmSchemaProgrammer_clone(input)
      output["properties"] = nativefactories.LiteralFactory_OrderedObject{
        Keys:   propertyKeys,
        Values: properties,
      }
      if additional, ok := llmSchemaProgrammer_schema_from_any(input["additionalProperties"]); ok {
        output["additionalProperties"] = llmSchemaProgrammer_convert_schema_config(additional, components, defs, config)
      } else if strict {
        output["additionalProperties"] = false
      } else if value, ok := input["additionalProperties"]; ok {
        output["additionalProperties"] = value
      }
      if _, ok := input["required"]; ok {
        output["required"] = input["required"]
      } else {
        output["required"] = []any{}
      }
      if strict {
        if description := llmSchemaProgrammer_json_descriptor_take(input); description != nil {
          output["description"] = *description
        } else {
          delete(output, "description")
        }
      }
      union = append(union, output)
      return
    }
    if input["type"] == "array" {
      output := llmSchemaProgrammer_clone(input)
      if items, ok := llmSchemaProgrammer_schema_from_any(input["items"]); ok {
        output["items"] = llmSchemaProgrammer_convert_schema_config(items, components, defs, config)
      }
      if strict {
        output = llmSchemaProgrammer_shift_array(output)
      }
      union = append(union, output)
      return
    }
    if input["type"] == "string" {
      output := llmSchemaProgrammer_clone(input)
      if strict {
        output = llmSchemaProgrammer_shift_string(output)
      }
      union = append(union, output)
      return
    }
    if input["type"] == "number" || input["type"] == "integer" {
      output := llmSchemaProgrammer_clone(input)
      if strict {
        output = llmSchemaProgrammer_shift_numeric(output)
      }
      union = append(union, output)
      return
    }
    if _, ok := input["const"]; ok {
      return
    }
    union = append(union, llmSchemaProgrammer_clone(input))
  }

  visitConstant(schema)
  visit(schema)

  if len(union) == 0 {
    output := llmSchemaProgrammer_clone(attribute)
    output["type"] = nil
    return output
  }
  if len(union) == 1 {
    output := llmSchemaProgrammer_merge(attribute, union[0])
    if strict && llmSchemaProgrammer_is_reference(union[0]) {
      delete(output, "description")
    } else if description, ok := union[0]["description"]; ok {
      output["description"] = description
    } else if description, ok := attribute["description"]; ok {
      output["description"] = description
    }
    return output
  }
  anyOf := make([]any, 0, len(union))
  for _, elem := range union {
    output := llmSchemaProgrammer_clone(elem)
    if strict && llmSchemaProgrammer_is_reference(elem) {
      delete(output, "description")
    }
    anyOf = append(anyOf, output)
  }
  output := llmSchemaProgrammer_clone(attribute)
  output["anyOf"] = anyOf
  if x := llmSchemaProgrammer_discriminator(schema, union); x != nil {
    output["x-discriminator"] = x
  }
  return output
}

func llmSchemaProgrammer_strict(config map[string]any) bool {
  strict, _ := config["strict"].(bool)
  return strict
}

func llmSchemaProgrammer_attribute(schema nativeiterate.JsonSchema) map[string]any {
  output := map[string]any{}
  for _, key := range []string{
    "title",
    "description",
    "deprecated",
    "readOnly",
    "writeOnly",
    "example",
    "examples",
  } {
    if value, ok := schema[key]; ok && llmSchemaProgrammer_is_nil_like(value) == false {
      output[key] = value
    }
  }
  for key, value := range schema {
    if strings.HasPrefix(key, "x-") && llmSchemaProgrammer_is_nil_like(value) == false {
      output[key] = value
    }
  }
  return output
}

func llmSchemaProgrammer_clone(input map[string]any) map[string]any {
  output := map[string]any{}
  for key, value := range input {
    if llmSchemaProgrammer_is_nil_like(value) {
      continue
    }
    output[key] = value
  }
  return output
}

func llmSchemaProgrammer_is_nil_like(value any) bool {
  if value == nil {
    return true
  }
  reflected := reflect.ValueOf(value)
  switch reflected.Kind() {
  case reflect.Chan, reflect.Func, reflect.Interface, reflect.Map, reflect.Pointer, reflect.Slice:
    return reflected.IsNil()
  default:
    return false
  }
}

func llmSchemaProgrammer_merge(left map[string]any, right map[string]any) map[string]any {
  output := llmSchemaProgrammer_clone(left)
  for key, value := range right {
    output[key] = value
  }
  return output
}

func llmSchemaProgrammer_array(value any) []any {
  switch v := value.(type) {
  case []any:
    return append([]any{}, v...)
  case []string:
    output := make([]any, 0, len(v))
    for _, elem := range v {
      output = append(output, elem)
    }
    return output
  case []nativeiterate.JsonSchema:
    output := make([]any, 0, len(v))
    for _, elem := range v {
      output = append(output, elem)
    }
    return output
  default:
    return []any{}
  }
}

func llmSchemaProgrammer_schema_array(value any) []nativeiterate.JsonSchema {
  switch v := value.(type) {
  case []nativeiterate.JsonSchema:
    return append([]nativeiterate.JsonSchema{}, v...)
  case []map[string]any:
    output := make([]nativeiterate.JsonSchema, 0, len(v))
    for _, elem := range v {
      output = append(output, nativeiterate.JsonSchema(elem))
    }
    return output
  case []any:
    output := make([]nativeiterate.JsonSchema, 0, len(v))
    for _, elem := range v {
      if schema, ok := llmSchemaProgrammer_schema_from_any(elem); ok {
        output = append(output, schema)
      }
    }
    return output
  default:
    return nil
  }
}

func llmSchemaProgrammer_schema_map(value any) (map[string]any, bool) {
  switch v := value.(type) {
  case nativefactories.LiteralFactory_OrderedObject:
    return v.Values, true
  case *nativefactories.LiteralFactory_OrderedObject:
    if v == nil {
      return nil, false
    }
    return v.Values, true
  case nativeiterate.JsonSchema:
    output := map[string]any{}
    for key, value := range v {
      output[key] = value
    }
    return output, true
  case map[string]any:
    return v, true
  default:
    return nil, false
  }
}

func llmSchemaProgrammer_schema_map_ordered(value any) (map[string]any, []string, bool) {
  switch v := value.(type) {
  case nativefactories.LiteralFactory_OrderedObject:
    return v.Values, llmSchemaProgrammer_ordered_keys(v.Keys, v.Values), true
  case *nativefactories.LiteralFactory_OrderedObject:
    if v == nil {
      return nil, nil, false
    }
    return v.Values, llmSchemaProgrammer_ordered_keys(v.Keys, v.Values), true
  case nativeiterate.JsonSchema:
    output := map[string]any{}
    keys := make([]string, 0, len(v))
    for key, value := range v {
      output[key] = value
      keys = append(keys, key)
    }
    sort.Strings(keys)
    return output, keys, true
  case map[string]any:
    keys := make([]string, 0, len(v))
    for key := range v {
      keys = append(keys, key)
    }
    sort.Strings(keys)
    return v, keys, true
  default:
    return nil, nil, false
  }
}

func llmSchemaProgrammer_ordered_keys(keys []string, values map[string]any) []string {
  output := make([]string, 0, len(values))
  visited := map[string]bool{}
  for _, key := range keys {
    if _, ok := values[key]; ok && visited[key] == false {
      output = append(output, key)
      visited[key] = true
    }
  }
  rest := make([]string, 0, len(values)-len(output))
  for key := range values {
    if visited[key] == false {
      rest = append(rest, key)
    }
  }
  sort.Strings(rest)
  return append(output, rest...)
}

func llmSchemaProgrammer_schema_from_any(value any) (nativeiterate.JsonSchema, bool) {
  switch v := value.(type) {
  case nativeiterate.JsonSchema:
    return v, true
  case map[string]any:
    return nativeiterate.JsonSchema(v), true
  default:
    return nil, false
  }
}

func llmSchemaProgrammer_constant_type(value any) string {
  reflected := reflect.ValueOf(value)
  if reflected.IsValid() == false {
    return fmt.Sprintf("%T", value)
  }
  switch reflected.Kind() {
  case reflect.Bool:
    return "boolean"
  case reflect.String:
    return "string"
  case reflect.Int, reflect.Int8, reflect.Int16, reflect.Int32, reflect.Int64,
    reflect.Uint, reflect.Uint8, reflect.Uint16, reflect.Uint32, reflect.Uint64,
    reflect.Float32, reflect.Float64:
    return "number"
  default:
    return fmt.Sprintf("%T", value)
  }
}

func llmSchemaProgrammer_ref_key(ref string) string {
  if strings.Contains(ref, "#/components/schemas/") {
    return strings.Split(ref, "#/components/schemas/")[1]
  }
  index := strings.LastIndex(ref, "/")
  if index == -1 {
    return ref
  }
  return ref[index+1:]
}

func llmSchemaProgrammer_encode_reference(key string) string {
  token := strings.NewReplacer("~", "~0", "/", "~1").Replace(key)
  var output strings.Builder
  output.WriteString("#/$defs/")
  for _, value := range []byte(token) {
    if (value >= 'A' && value <= 'Z') ||
      (value >= 'a' && value <= 'z') ||
      (value >= '0' && value <= '9') ||
      strings.ContainsRune("-_.!~*'()", rune(value)) {
      output.WriteByte(value)
    } else {
      fmt.Fprintf(&output, "%%%02X", value)
    }
  }
  return output.String()
}

func llmSchemaProgrammer_component(components *nativeiterate.OpenApi_IComponents, key string) (nativeiterate.JsonSchema, bool) {
  if components == nil || components.Schemas == nil {
    return nil, false
  }
  schema, ok := components.Schemas[key]
  return schema, ok
}

func llmSchemaProgrammer_is_reference(schema map[string]any) bool {
  _, ok := schema["$ref"].(string)
  return ok
}

func llmSchemaProgrammer_is_null(schema map[string]any) bool {
  return schema["type"] == "null"
}

func llmSchemaProgrammer_discriminator(schema nativeiterate.JsonSchema, union []map[string]any) map[string]any {
  discriminator, ok := llmSchemaProgrammer_schema_map(schema["discriminator"])
  if ok == false || len(llmSchemaProgrammer_schema_array(schema["oneOf"])) != len(union) {
    return nil
  }
  for _, elem := range union {
    if llmSchemaProgrammer_is_reference(elem) == false && llmSchemaProgrammer_is_null(elem) == false {
      return nil
    }
  }
  output := map[string]any{}
  if propertyName, ok := discriminator["propertyName"].(string); ok {
    output["propertyName"] = propertyName
  }
  if rawMapping, ok := llmSchemaProgrammer_schema_map(discriminator["mapping"]); ok {
    mapping := map[string]any{}
    for key, value := range rawMapping {
      mapping[key] = llmSchemaProgrammer_encode_reference(llmSchemaProgrammer_ref_key(fmt.Sprint(value)))
    }
    output["mapping"] = mapping
  }
  if len(output) == 0 {
    return nil
  }
  return output
}

func llmSchemaProgrammer_shift_array(schema map[string]any) map[string]any {
  output := llmSchemaProgrammer_clone(schema)
  tags := []string{}
  if value, ok := output["minItems"]; ok {
    tags = append(tags, "@minItems "+fmt.Sprint(value))
    delete(output, "minItems")
  }
  if value, ok := output["maxItems"]; ok {
    tags = append(tags, "@maxItems "+fmt.Sprint(value))
    delete(output, "maxItems")
  }
  if value, ok := output["uniqueItems"].(bool); ok {
    if value {
      tags = append(tags, "@uniqueItems")
    }
    delete(output, "uniqueItems")
  }
  llmSchemaProgrammer_write_tag_with_description(output, tags)
  return output
}

func llmSchemaProgrammer_shift_numeric(schema map[string]any) map[string]any {
  output := llmSchemaProgrammer_clone(schema)
  llmSchemaProgrammer_emend_exclusive(output)
  tags := []string{}
  for _, key := range []string{"minimum", "maximum", "exclusiveMinimum", "exclusiveMaximum", "multipleOf", "default"} {
    if value, ok := output[key]; ok {
      tags = append(tags, "@"+key+" "+fmt.Sprint(value))
      delete(output, key)
    }
  }
  llmSchemaProgrammer_write_tag_with_description(output, tags)
  return output
}

func llmSchemaProgrammer_shift_string(schema map[string]any) map[string]any {
  output := llmSchemaProgrammer_clone(schema)
  tags := []string{}
  for _, key := range []string{"minLength", "maxLength", "format", "pattern", "contentMediaType", "default"} {
    if value, ok := output[key]; ok {
      tags = append(tags, "@"+key+" "+fmt.Sprint(value))
      delete(output, key)
    }
  }
  llmSchemaProgrammer_write_tag_with_description(output, tags)
  return output
}

func llmSchemaProgrammer_write_tag_with_description(schema map[string]any, tags []string) {
  if len(tags) == 0 {
    return
  }
  lines := []string{}
  if description, ok := schema["description"].(string); ok && len(description) != 0 {
    lines = append(lines, description, "\n")
  }
  lines = append(lines, tags...)
  schema["description"] = strings.Join(lines, "\n")
}

func llmSchemaProgrammer_emend_exclusive(schema map[string]any) {
  if exclusiveMinimum, ok := llmSchemaProgrammer_number(schema["exclusiveMinimum"]); ok {
    if minimum, found := llmSchemaProgrammer_number(schema["minimum"]); found {
      if minimum > exclusiveMinimum {
        schema["minimum"] = minimum
        delete(schema, "exclusiveMinimum")
      } else {
        schema["exclusiveMinimum"] = exclusiveMinimum
        delete(schema, "minimum")
      }
    }
  }
  if exclusiveMaximum, ok := llmSchemaProgrammer_number(schema["exclusiveMaximum"]); ok {
    if maximum, found := llmSchemaProgrammer_number(schema["maximum"]); found {
      if maximum < exclusiveMaximum {
        schema["maximum"] = maximum
        delete(schema, "exclusiveMaximum")
      } else {
        schema["exclusiveMaximum"] = exclusiveMaximum
        delete(schema, "maximum")
      }
    }
  }
}

func llmSchemaProgrammer_number(value any) (float64, bool) {
  reflected := reflect.ValueOf(value)
  if reflected.IsValid() == false {
    return 0, false
  }
  switch reflected.Kind() {
  case reflect.Int, reflect.Int8, reflect.Int16, reflect.Int32, reflect.Int64:
    return float64(reflected.Int()), true
  case reflect.Uint, reflect.Uint8, reflect.Uint16, reflect.Uint32, reflect.Uint64:
    return float64(reflected.Uint()), true
  case reflect.Float32, reflect.Float64:
    return reflected.Convert(reflect.TypeOf(float64(0))).Float(), true
  default:
    return 0, false
  }
}

func llmSchemaProgrammer_json_descriptor_take(schema nativeiterate.JsonSchema) *string {
  parts := []string{}
  if description, ok := schema["description"].(string); ok && len(description) != 0 {
    parts = append(parts, description)
  }
  properties, ok := llmSchemaProgrammer_schema_map(schema["properties"])
  if ok {
    keys := make([]string, 0, len(properties))
    for key := range properties {
      keys = append(keys, key)
    }
    sort.Strings(keys)
    for _, key := range keys {
      value, ok := llmSchemaProgrammer_schema_from_any(properties[key])
      if ok == false || llmSchemaProgrammer_is_reference(value) == false {
        continue
      }
      description, ok := value["description"].(string)
      if ok == false || len(description) == 0 {
        continue
      }
      name := key
      if llmSchemaProgrammer_is_variable_name(key) == false {
        name = strconv.Quote(key)
      }
      parts = append(parts, "### Description of {@link "+name+"} property:\n\n"+llmSchemaProgrammer_quote_description(description))
    }
  }
  if len(parts) == 0 {
    return nil
  }
  output := strings.Join(parts, "\n\n")
  return &output
}

func llmSchemaProgrammer_quote_description(description string) string {
  lines := strings.Split(description, "\n")
  for i, line := range lines {
    lines[i] = "> " + line
  }
  return strings.Join(lines, "\n")
}

func llmSchemaProgrammer_is_variable_name(str string) bool {
  if len(str) == 0 {
    return false
  }
  for i, r := range str {
    if i == 0 {
      if (r >= 'A' && r <= 'Z') || (r >= 'a' && r <= 'z') || r == '_' || r == '$' {
        continue
      }
      return false
    }
    if (r >= 'A' && r <= 'Z') || (r >= 'a' && r <= 'z') || (r >= '0' && r <= '9') || r == '_' || r == '$' {
      continue
    }
    return false
  }
  return true
}

func llmProgrammer_internal(context nativecontext.ITypiaContext, name string) *shimast.Node {
  if importer := context.Importer; importer != nil {
    return importer.Internal(name)
  }
  f := nativecontext.EmitFactoryOf(llmSchemaProgrammer_factory, context.Emit)
  return f.NewIdentifier(name)
}

func llmProgrammer_import_type(context nativecontext.ITypiaContext, props nativecontext.ImportProgrammer_TypeProps) *shimast.Node {
  if importer := context.Importer; importer != nil {
    return importer.Type(props)
  }
  f := nativecontext.EmitFactoryOf(llmSchemaProgrammer_factory, context.Emit)
  if str, ok := props.Name.(string); ok {
    return f.NewTypeReferenceNode(f.NewIdentifier(str), f.NewNodeList(props.Arguments))
  }
  return props.Name.(*shimast.Node)
}

func llmProgrammer_type_reference(name string, emit ...*shimprinter.EmitContext) *shimast.Node {
  if name == "" {
    name = "unknown"
  }
  f := nativecontext.EmitFactoryOf(llmSchemaProgrammer_factory, emit...)
  return f.NewTypeReferenceNode(f.NewIdentifier(name), nil)
}

func llmProgrammer_method_text(modulo *shimast.Node) string {
  return nativehelpers.ModuloMethodText(modulo)
}

func llmProgrammer_concat_description(summary *string, description *string) *string {
  if summary == nil || len(*summary) == 0 || description == nil || len(*description) == 0 {
    if summary != nil && len(*summary) != 0 {
      return summary
    }
    return description
  }
  head := *summary
  if strings.HasSuffix(head, ".") {
    head = head[:len(head)-1]
  }
  if strings.HasPrefix(*description, head) {
    return description
  }
  out := head + ".\n\n" + *description
  return &out
}
