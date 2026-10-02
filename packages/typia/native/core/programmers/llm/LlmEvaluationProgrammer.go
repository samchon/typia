package llm

import (
  "fmt"
  "math"
  "reflect"
  "sort"
  "strconv"
  "strings"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  nativeutils "github.com/samchon/typia/packages/typia/native/core/utils"
)

type llmEvaluationProgrammerNamespace struct{}

// LlmEvaluationProgrammer writes `typia.llm.evaluation<T>()`.
//
// The emitted code is one call to the `_createLlmEvaluation` runtime helper
// with the configured decimals and a compile-time plan: one entry per decision
// leaf of `T`, carrying its property path, question text, and probability
// requirements. The helper
// derives both the question map and the checked decoder from that plan,
// so the question-key encoding has a single owner at runtime.
var LlmEvaluationProgrammer = llmEvaluationProgrammerNamespace{}

// LlmEvaluationProgrammer_IWriteProps is the argument record of
// LlmEvaluationProgrammer.Write, which builds the evaluation function of a
// decision type.
//
// @evidence contracts/common.md#principled-implementation It is the argument record of LlmEvaluationProgrammer.Write, which builds the evaluation function of a decision type; its 4 fields (Context, Metadata, Name, Config) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 4-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is.
type LlmEvaluationProgrammer_IWriteProps struct {
  Context  nativecontext.ITypiaContext
  Metadata *schemametadata.MetadataSchema
  Name     *string
  Config   LlmEvaluationProgrammer_IConfig
}

// LlmEvaluationProgrammer_IConfig is `ILlmEvaluation.IConfig`: the decimal
// places of the evaluation model's answers, two by default.
//
// @evidence contracts/common.md#principled-implementation It is the configuration of the evaluation function, which is the number of decimal places of the evaluation model's answers; its 1 fields (Decimals) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 1-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is.
type LlmEvaluationProgrammer_IConfig struct {
  Decimals int
}

// LlmEvaluationProgrammer_IError is one rejected position of the decision type.
//
// @evidence contracts/common.md#principled-implementation It is one rejected position of the decision type, with its validation path and its message; its 2 fields (Accessor, Message) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 2-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is.
type LlmEvaluationProgrammer_IError struct {
  // Accessor is the typia validation path of the position, like
  // `$input.refund.requested`.
  Accessor string
  Message  string
}

var llmEvaluationProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

// Write emits `_createLlmEvaluation(plan, decimals) as ILlmEvaluation<T>`.
// The metadata must already have passed Compose without errors.
func (llmEvaluationProgrammerNamespace) Write(props LlmEvaluationProgrammer_IWriteProps, plan []any) *shimast.Node {
  f := nativecontext.EmitFactoryOf(llmEvaluationProgrammer_factory, props.Context.Emit)
  typeName := "unknown"
  if props.Name != nil {
    typeName = *props.Name
  }
  arguments := []*shimast.Node{
    nativefactories.LiteralFactory.Write(plan, props.Context.Emit),
  }
  arguments = append(arguments, nativefactories.LiteralFactory.Write(float64(props.Config.Decimals), props.Context.Emit))
  return f.NewAsExpression(
    f.NewCallExpression(
      llmProgrammer_internal(props.Context, "createLlmEvaluation"),
      nil,
      nil,
      f.NewNodeList(arguments),
      shimast.NodeFlagsNone,
    ),
    llmProgrammer_import_type(props.Context, nativecontext.ImportProgrammer_TypeProps{
      File:      "typia",
      Name:      "ILlmEvaluation",
      Arguments: []*shimast.TypeNode{llmProgrammer_type_reference(typeName, props.Context.Emit)},
    }),
  )
}

// Compose walks the decision type and returns the evaluation plan, or every
// position an evaluation model cannot answer.
func (llmEvaluationProgrammerNamespace) Compose(metadata *schemametadata.MetadataSchema, config LlmEvaluationProgrammer_IConfig) ([]any, []LlmEvaluationProgrammer_IError) {
  composer := &llmEvaluationComposer{
    config:  config,
    plan:    []any{},
    visited: map[*schemametadata.MetadataObjectType]bool{},
  }
  object := composer.top(metadata)
  if object != nil {
    composer.object(object, []string{}, "$input")
    if len(composer.errors) == 0 && len(composer.plan) == 0 {
      composer.fail("$input", "LLM evaluation type must have at least one decision property.")
    }
  }
  return composer.plan, composer.errors
}

// Message renders Compose errors in the transformer's unsupported-type layout.
func (llmEvaluationProgrammerNamespace) Message(errors []LlmEvaluationProgrammer_IError) string {
  lines := make([]string, 0, len(errors))
  for _, err := range errors {
    lines = append(lines, "- "+err.Accessor+"\n  - "+err.Message)
  }
  return "unsupported type detected\n\n" + strings.Join(lines, "\n\n")
}

type llmEvaluationComposer struct {
  config  LlmEvaluationProgrammer_IConfig
  plan    []any
  errors  []LlmEvaluationProgrammer_IError
  visited map[*schemametadata.MetadataObjectType]bool
}

func (c *llmEvaluationComposer) fail(accessor string, message string) {
  c.errors = append(c.errors, LlmEvaluationProgrammer_IError{Accessor: accessor, Message: message})
}

func (c *llmEvaluationComposer) top(metadata *schemametadata.MetadataSchema) *schemametadata.MetadataObjectType {
  metadata = llmEvaluation_unalias(metadata)
  if metadata == nil || len(metadata.Objects) == 0 {
    c.fail("$input", "LLM evaluation type must be an object type.")
    return nil
  }
  if len(metadata.Objects) != 1 || metadata.Size() != 1 {
    c.fail("$input", "LLM evaluation type must be a single object type.")
    return nil
  }
  if metadata.Nullable || metadata.IsRequired() == false {
    c.fail("$input", "LLM evaluation type must be a non-nullable and non-undefined object type.")
    return nil
  }
  if message := llmEvaluation_unsupported_tags(metadata.Objects[0].Tags); message != "" {
    c.fail("$input", message)
    return nil
  }
  return metadata.Objects[0].Type
}

func (c *llmEvaluationComposer) object(object *schemametadata.MetadataObjectType, path []string, accessor string) {
  if c.visited[object] {
    c.fail(accessor, "LLM evaluation does not support recursive types.")
    return
  }
  c.visited[object] = true
  defer delete(c.visited, object)

  for _, property := range object.Properties {
    key := property.Key.GetSoleLiteral()
    if key == nil {
      c.fail(accessor, "LLM evaluation does not support dynamic keys.")
      continue
    }
    c.property(property, append(append([]string{}, path...), *key), accessor+nativefactories.IdentifierFactory.PathPostfix(*key))
  }
}

func (c *llmEvaluationComposer) property(property *schemametadata.MetadataProperty, path []string, accessor string) {
  value := llmEvaluation_unalias(property.Value)
  if llmEvaluation_has_tag(property.JsDocTags, "hidden", "ignore", "internal") {
    c.fail(accessor, "LLM evaluation does not support hidden properties, because every property of the result needs an answer.")
    return
  }
  // typia's metadata folds unknown into any, and never and void into an
  // undefined value, so each message names the class the metadata records
  if value == nil || value.Any {
    c.fail(accessor, "LLM evaluation does not support any or unknown types, because an evaluation model answers only closed sets.")
    return
  }
  if value.Optional || value.Required == false {
    c.fail(accessor, "LLM evaluation does not support optional, undefined, void, or never properties, because every property of the result needs an answer.")
    return
  }
  if value.Nullable {
    c.fail(accessor, "LLM evaluation does not support nullable properties.")
    return
  }
  if len(value.Functions) != 0 {
    c.fail(accessor, "LLM evaluation does not support function properties.")
    return
  }

  // nested object: flattened, so the property itself asks nothing
  if len(value.Objects) != 0 {
    if len(value.Objects) != 1 || value.Size() != 1 {
      c.fail(accessor, "LLM evaluation does not support union types.")
      return
    }
    if message := llmEvaluation_unsupported_tags(value.Objects[0].Tags); message != "" {
      c.fail(accessor, message)
      return
    }
    if _, found := llmEvaluation_jsdoc_probability(property.JsDocTags); found {
      c.fail(accessor, "LLM evaluation @probability must be on a boolean, choice, score, or set property, not on an object.")
    }
    plan, errors := len(c.plan), len(c.errors)
    c.object(value.Objects[0].Type, path, accessor)
    if len(c.plan) == plan && len(c.errors) == errors {
      // no answer could ever create the object, so decode() would return a
      // value missing this required property
      c.fail(accessor, "LLM evaluation object must have at least one decision property.")
    }
    return
  }

  kind := llmEvaluation_kind(value)
  if kind == "" {
    c.fail(accessor, llmEvaluation_unsupported(value))
    return
  }
  instructions := llmEvaluation_description(property.Description, property.JsDocTags)
  if instructions == nil || strings.TrimSpace(*instructions) == "" {
    c.fail(accessor, "LLM evaluation property must have a JSDoc description, because it is the question text.")
    return
  }
  fallback, hasFallback, message := llmEvaluation_property_probability(property.JsDocTags)
  if message != "" {
    c.fail(accessor, message)
    return
  }

  leaf := map[string]any{
    "kind":         kind,
    "path":         llmEvaluation_strings(path),
    "instructions": *instructions,
  }
  switch kind {
  case "boolean":
    if message := llmEvaluation_unsupported_tags(value.Atomics[0].Tags); message != "" {
      c.fail(accessor, message)
      return
    }
    threshold := 0.5
    tagged, found, message := llmEvaluation_tag_probability(value.Atomics[0].Tags)
    if message != "" {
      c.fail(accessor, message)
      return
    }
    if found && hasFallback {
      c.fail(accessor, "LLM evaluation boolean has both tags.Probability and @probability; keep only one.")
      return
    }
    // rows are union alternatives, so `(true & A) | false` or
    // `(true & A) | (false & B)` states no single threshold
    if found && len(value.Atomics[0].Tags) > 1 {
      c.fail(accessor, "LLM evaluation boolean has different tags.Probability on true and false; put one on boolean.")
      return
    }
    if found {
      threshold = tagged
    } else if hasFallback {
      threshold = fallback
    }
    if found || hasFallback {
      c.grid(accessor, threshold)
    }
    leaf["threshold"] = threshold
  case "choice", "score", "set":
    constant := value.Constants
    if kind == "set" {
      constant = llmEvaluation_unalias(value.Arrays[0].Type.Value).Constants
    }
    entries := constant[0].Values
    // TypeSafe's Jev rejects a choice above 255 options and a score above 10
    // levels, so a larger one only fails when the provider is called
    if kind == "choice" && len(entries) > llmEvaluation_maxChoiceOptions {
      c.fail(accessor, fmt.Sprintf(
        "LLM evaluation does not support a choice of %d options, because an evaluation model accepts at most %d.",
        len(entries),
        llmEvaluation_maxChoiceOptions,
      ))
      return
    }
    if kind == "score" && len(entries) > llmEvaluation_maxScoreLevels {
      c.fail(accessor, fmt.Sprintf(
        "LLM evaluation does not support a score of %d levels, because an evaluation model accepts at most %d.",
        len(entries),
        llmEvaluation_maxScoreLevels,
      ))
      return
    }
    if kind == "score" {
      entries = append([]*schemametadata.MetadataConstantValue{}, entries...)
      sort.SliceStable(entries, func(i, j int) bool {
        left, _ := llmEvaluation_number(entries[i].Value)
        right, _ := llmEvaluation_number(entries[j].Value)
        return left < right
      })
    }
    // the property default is one declaration however many members inherit it
    if hasFallback {
      c.grid(accessor, fallback)
    }
    members := make([]any, 0, len(entries))
    hasMemberRequirement := false
    missingRequirements := make([]*schemametadata.MetadataConstantValue, 0)
    for _, entry := range entries {
      if message := llmEvaluation_unsupported_tags(entry.Tags); message != "" {
        c.fail(accessor, fmt.Sprintf("%s (member %s)", message, llmEvaluation_value_text(entry.Value)))
        continue
      }
      if entry.Duplicated {
        c.fail(accessor, fmt.Sprintf(
          "LLM evaluation does not support enum members or literals sharing the value %s, because their descriptions and probability requirements would collide.",
          llmEvaluation_value_text(entry.Value),
        ))
        continue
      }
      member := map[string]any{"value": llmEvaluation_value(entry.Value)}
      // an undocumented score level is described by its value, which the
      // runtime writes with JavaScript's own number formatting
      if description := llmEvaluation_member_description(entry); description != nil {
        member["description"] = *description
      }
      requirement, found, message := llmEvaluation_member_probability(entry)
      if message != "" {
        c.fail(accessor, fmt.Sprintf("%s (member %s)", message, llmEvaluation_value_text(entry.Value)))
        continue
      }
      if found {
        c.grid(accessor, requirement)
      } else if hasFallback {
        requirement, found = fallback, true
      }
      if found {
        hasMemberRequirement = true
      } else {
        missingRequirements = append(missingRequirements, entry)
      }
      if kind == "set" {
        if found == false {
          requirement = 0.5
        }
        member["threshold"] = requirement
      } else if found {
        member["minimum"] = requirement
      }
      members = append(members, member)
    }
    if hasMemberRequirement && len(missingRequirements) != 0 {
      for _, entry := range missingRequirements {
        c.fail(accessor, fmt.Sprintf(
          "LLM evaluation probability requirements must cover every member once one member declares one; add tags.Probability or @probability to member %s, or add a property @probability default.",
          llmEvaluation_value_text(entry.Value),
        ))
      }
    }
    leaf[map[string]string{"choice": "options", "score": "levels", "set": "members"}[kind]] = members
  }
  c.plan = append(c.plan, leaf)
}

// The largest choice and score TypeSafe's API accepts.
const (
  llmEvaluation_maxChoiceOptions = 255
  llmEvaluation_maxScoreLevels   = 10
)

// grid rejects a declared probability requirement finer than the configured
// `decimals`, because the model's answers never resolve it. A
// default the author did not write is never checked.
func (c *llmEvaluationComposer) grid(accessor string, number float64) {
  decimals := c.config.Decimals
  scale := math.Pow10(decimals)
  if math.Abs(number*scale-math.Round(number*scale)) <= 1e-9 {
    return
  }
  c.fail(accessor, fmt.Sprintf(
    "LLM evaluation probability requirement must use at most %d decimal places, the configured decimals, but got %s.",
    decimals,
    strconv.FormatFloat(number, 'f', -1, 64),
  ))
}

// A decoded value is trusted as T, so every tag with a validation meaning
// must either be enforced here or rejected. These kinds only annotate schema
// documentation or other serializers; probability is enforced by the decoder.
func llmEvaluation_unsupported_tags(rows [][]schemametadata.IMetadataTypeTag) string {
  for _, row := range rows {
    for _, tag := range row {
      if tag.Validate != "" {
        return fmt.Sprintf("LLM evaluation does not support type tag %q, because decode() cannot enforce its constraint.", tag.Kind)
      }
      switch tag.Kind {
      case "probability", "constant", "default", "example", "examples", "contentMediaType", "sequence":
        continue
      default:
        return fmt.Sprintf("LLM evaluation does not support type tag %q, because decode() cannot enforce its constraint.", tag.Kind)
      }
    }
  }
  return ""
}

// llmEvaluation_kind classifies a non-object property value as one question
// family, or "" when no evaluation question can answer it.
func llmEvaluation_kind(value *schemametadata.MetadataSchema) string {
  if value.Escaped != nil || value.Rest != nil || len(value.Templates) != 0 ||
    len(value.Tuples) != 0 || len(value.Natives) != 0 || len(value.Sets) != 0 ||
    len(value.Maps) != 0 || len(value.Aliases) != 0 {
    return ""
  }
  if len(value.Atomics) == 1 && value.Atomics[0].Type == "boolean" &&
    len(value.Constants) == 0 && len(value.Arrays) == 0 {
    return "boolean"
  }
  if len(value.Atomics) == 0 && len(value.Arrays) == 0 && len(value.Constants) == 1 &&
    len(value.Constants[0].Values) >= 2 {
    switch value.Constants[0].Type {
    case "string":
      return "choice"
    case "number":
      return "score"
    }
    return ""
  }
  if len(value.Atomics) == 0 && len(value.Constants) == 0 && len(value.Arrays) == 1 &&
    len(value.Arrays[0].Tags) == 0 {
    element := llmEvaluation_unalias(value.Arrays[0].Type.Value)
    if element != nil && element.IsConstant() && element.Nullable == false && element.IsRequired() &&
      len(element.Constants) == 1 && element.Constants[0].Type == "string" &&
      len(element.Constants[0].Values) != 0 {
      return "set"
    }
  }
  return ""
}

func llmEvaluation_unsupported(value *schemametadata.MetadataSchema) string {
  if len(value.Arrays) == 1 && len(value.Arrays[0].Tags) != 0 {
    return "LLM evaluation does not support array type tags, because the answered members decide the array."
  }
  if len(value.Arrays) != 0 {
    return "LLM evaluation supports only arrays of a string literal union or string enum."
  }
  if len(value.Constants) == 1 && len(value.Constants[0].Values) == 1 && len(value.Atomics) == 0 {
    return "LLM evaluation does not support a single literal value, because it decides nothing."
  }
  if len(value.Constants) > 1 || (len(value.Constants) != 0 && len(value.Atomics) != 0) {
    return "LLM evaluation does not support union types mixing different question kinds."
  }
  if len(value.Constants) == 1 && value.Constants[0].Type != "string" && value.Constants[0].Type != "number" {
    return fmt.Sprintf("LLM evaluation does not support %s literal types.", value.Constants[0].Type)
  }
  return "LLM evaluation supports only boolean, string or numeric literal unions (or enums), arrays of a string literal union (or enum), and objects composed of them, because an evaluation model answers only closed sets."
}

func llmEvaluation_unalias(metadata *schemametadata.MetadataSchema) *schemametadata.MetadataSchema {
  for metadata != nil && len(metadata.Aliases) == 1 && metadata.Size() == 1 &&
    metadata.Aliases[0].Type != nil && metadata.Aliases[0].Type.Value != nil {
    metadata = metadata.Aliases[0].Type.Value
  }
  return metadata
}

func llmEvaluation_description(description *string, tags []schemametadata.IJsDocTagInfo) *string {
  for _, tag := range tags {
    if tag.Name != "description" || len(tag.Text) == 0 {
      continue
    }
    text := strings.ReplaceAll(tag.Text[0].Text, "\r\n", "\n")
    return &text
  }
  if description == nil {
    return nil
  }
  text := strings.ReplaceAll(*description, "\r\n", "\n")
  return &text
}

func llmEvaluation_member_description(entry *schemametadata.MetadataConstantValue) *string {
  if description := llmEvaluation_description(entry.Description, entry.JsDocTags); description != nil && strings.TrimSpace(*description) != "" {
    return description
  }
  for _, row := range entry.Tags {
    for _, tag := range row {
      if tag.Kind != "constant" {
        continue
      }
      schema, ok := tag.Schema.(map[string]any)
      if ok == false {
        continue
      }
      if text, ok := schema["description"].(string); ok && strings.TrimSpace(text) != "" {
        return &text
      }
    }
  }
  return nil
}

func llmEvaluation_has_tag(tags []schemametadata.IJsDocTagInfo, names ...string) bool {
  for _, tag := range tags {
    for _, name := range names {
      if tag.Name == name {
        return true
      }
    }
  }
  return false
}

// llmEvaluation_jsdoc_probability reads the raw `@probability` comment tags.
func llmEvaluation_jsdoc_probability(tags []schemametadata.IJsDocTagInfo) ([]string, bool) {
  texts := []string{}
  for _, tag := range tags {
    if tag.Name != "probability" {
      continue
    }
    parts := make([]string, 0, len(tag.Text))
    for _, part := range tag.Text {
      parts = append(parts, part.Text)
    }
    texts = append(texts, strings.TrimSpace(strings.Join(parts, "")))
  }
  return texts, len(texts) != 0
}

func llmEvaluation_parse_jsdoc_probability(tags []schemametadata.IJsDocTagInfo) (float64, bool, string) {
  texts, found := llmEvaluation_jsdoc_probability(tags)
  if found == false {
    return 0, false, ""
  }
  if len(texts) != 1 {
    return 0, false, "LLM evaluation @probability is declared more than once; keep only one."
  }
  // The same JavaScript `Number()` grammar every other numeric JSDoc tag reads
  // (samchon/typia#2442); Go's float syntax would also admit `0x1p-1`.
  reading := nativeutils.NumberUtil.Read(texts[0])
  if reading.Numeric == false || reading.Finite == false {
    return 0, false, fmt.Sprintf("LLM evaluation @probability must be a number in [0, 1], but got %q.", texts[0])
  }
  value := reading.Value
  if value < 0 || value > 1 {
    return 0, false, fmt.Sprintf("LLM evaluation @probability must be in [0, 1], but got %s.", texts[0])
  }
  return value, true, ""
}

func llmEvaluation_property_probability(tags []schemametadata.IJsDocTagInfo) (float64, bool, string) {
  return llmEvaluation_parse_jsdoc_probability(tags)
}

func llmEvaluation_tag_probability(rows [][]schemametadata.IMetadataTypeTag) (float64, bool, string) {
  values := []any{}
  for _, row := range rows {
    for _, tag := range row {
      if tag.Kind == "probability" {
        values = append(values, tag.Value)
      }
    }
  }
  if len(values) == 0 {
    return 0, false, ""
  }
  if len(values) != 1 {
    return 0, false, "LLM evaluation tags.Probability is declared more than once; keep only one."
  }
  value, ok := llmEvaluation_number(values[0])
  if ok == false || math.IsNaN(value) || math.IsInf(value, 0) {
    return 0, false, "LLM evaluation tags.Probability must have a numeric literal value."
  }
  if value < 0 || value > 1 {
    return 0, false, fmt.Sprintf("LLM evaluation tags.Probability must be in [0, 1], but got %s.", llmEvaluation_number_text(value))
  }
  return value, true, ""
}

func llmEvaluation_member_probability(entry *schemametadata.MetadataConstantValue) (float64, bool, string) {
  tagged, taggedFound, message := llmEvaluation_tag_probability(entry.Tags)
  if message != "" {
    return 0, false, message
  }
  commented, commentedFound, message := llmEvaluation_parse_jsdoc_probability(entry.JsDocTags)
  if message != "" {
    return 0, false, message
  }
  if taggedFound && commentedFound {
    return 0, false, "LLM evaluation member has both tags.Probability and @probability; keep only one."
  }
  if taggedFound {
    return tagged, true, ""
  }
  return commented, commentedFound, ""
}

func llmEvaluation_number(value any) (float64, bool) {
  reflected := reflect.ValueOf(value)
  switch reflected.Kind() {
  case reflect.Float32, reflect.Float64:
    return reflected.Float(), true
  case reflect.Int, reflect.Int8, reflect.Int16, reflect.Int32, reflect.Int64:
    return float64(reflected.Int()), true
  case reflect.Uint, reflect.Uint8, reflect.Uint16, reflect.Uint32, reflect.Uint64:
    return float64(reflected.Uint()), true
  }
  return 0, false
}

// llmEvaluation_value normalizes a literal to a plain Go value LiteralFactory
// writes, so a checker-specific number type never reaches the emitter.
func llmEvaluation_value(value any) any {
  if str, ok := value.(string); ok {
    return str
  }
  if number, ok := llmEvaluation_number(value); ok {
    return number
  }
  return value
}

func llmEvaluation_number_text(value any) string {
  number, ok := llmEvaluation_number(value)
  if ok == false {
    return fmt.Sprint(value)
  }
  return strconv.FormatFloat(number, 'f', -1, 64)
}

func llmEvaluation_value_text(value any) string {
  if str, ok := value.(string); ok {
    return strconv.Quote(str)
  }
  return llmEvaluation_number_text(value)
}

func llmEvaluation_strings(values []string) []any {
  output := make([]any, 0, len(values))
  for _, value := range values {
    output = append(output, value)
  }
  return output
}
