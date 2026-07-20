package metadata

import (
  "strings"

  nativeast "github.com/microsoft/typescript-go/shim/ast"
  nativechecker "github.com/microsoft/typescript-go/shim/checker"
  nativescanner "github.com/microsoft/typescript-go/shim/scanner"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type metadataHelperNamespace struct{}

var MetadataHelper = metadataHelperNamespace{}

func (metadataHelperNamespace) Literal_to_metadata(key string) *schemametadata.MetadataSchema {
  metadata := schemametadata.MetadataSchema_initialize()
  metadata.Constants = append(metadata.Constants, schemametadata.MetadataConstant_create(schemametadata.MetadataConstant{
    Type: "string",
    Values: []*schemametadata.MetadataConstantValue{
      schemametadata.MetadataConstantValue_create(schemametadata.MetadataConstantValue{
        Value: key,
        Tags:  [][]schemametadata.IMetadataTypeTag{},
      }),
    },
  }))
  return metadata
}

func metadata_array_util_add_bool(array *[]bool, value bool) {
  for _, elem := range *array {
    if elem == value {
      return
    }
  }
  *array = append(*array, value)
}

func metadata_type_full_name(
  checker *nativechecker.Checker,
  typ *nativechecker.Type,
  cache *schemametadata.MetadataCollection,
) string {
  if checker == nil || typ == nil {
    return ""
  }
  if cache != nil {
    if cached, ok := cache.LookupTypeFullName(typ); ok {
      return cached
    }
  }
  var result string
  if typ.IsUnion() || typ.IsIntersection() {
    joiner := " | "
    if typ.IsIntersection() {
      joiner = " & "
    }
    children := typ.Types()
    names := make([]string, 0, len(children))
    for _, child := range children {
      names = append(names, metadata_type_full_name(checker, child, cache))
    }
    result = strings.Join(names, joiner)
  } else {
    result = checker.TypeToString(typ)
  }
  if cache != nil {
    cache.StoreTypeFullName(typ, result)
  }
  return result
}

// metadata_type_symbol_name mirrors TypeFactory.getFullName({ aliasTypeArguments:
// false }) from legacy typia: the name is derived from the type's *symbol*, not
// from checker.typeToString. This matters for alias chains (e.g. MapAlias.MAP =
// Map<K, V>) where typeToString prints the alias name ("MapAlias.MAP<...>")
// instead of "Map<...>", which would defeat the Map/Set prefix guards.
func metadata_type_symbol_name(checker *nativechecker.Checker, typ *nativechecker.Type) string {
  if checker == nil || typ == nil {
    return ""
  }
  symbol := typ.Symbol()
  if symbol == nil {
    return checker.TypeToString(typ)
  }
  name := metadata_symbol_name(symbol)
  generic := metadata_get_type_arguments(checker, typ)
  if len(generic) == 0 {
    return name
  }
  if name == "Promise" {
    return metadata_type_symbol_name(checker, generic[0])
  }
  names := make([]string, 0, len(generic))
  for _, child := range generic {
    names = append(names, metadata_type_symbol_name(checker, child))
  }
  return name + "<" + strings.Join(names, ", ") + ">"
}

func metadata_type_symbol_base_name(typ *nativechecker.Type) string {
  if typ == nil {
    return ""
  }
  symbol := typ.Symbol()
  if symbol == nil {
    return ""
  }
  return metadata_symbol_name(symbol)
}

func metadata_symbol_name(symbol *nativeast.Symbol) string {
  if symbol == nil || len(symbol.Declarations) == 0 || symbol.Declarations[0].Parent == nil {
    return "__type"
  }
  return metadata_explore_symbol_name(symbol.Declarations[0].Parent, symbol.Name)
}

func metadata_explore_symbol_name(node *nativeast.Node, name string) string {
  if node != nil && nativeast.IsModuleBlock(node) && node.Parent != nil && node.Parent.Parent != nil {
    parentName := ""
    if node.Parent.Name() != nil {
      parentName = strings.TrimSpace(node.Parent.Name().Text())
    }
    if parentName != "" {
      return metadata_explore_symbol_name(node.Parent.Parent, parentName+"."+name)
    }
  }
  return name
}

func metadata_get_type_arguments(checker *nativechecker.Checker, typ *nativechecker.Type) []*nativechecker.Type {
  if checker == nil || typ == nil {
    return nil
  }
  if typ.Flags()&nativechecker.TypeFlagsObject == 0 || typ.ObjectFlags()&nativechecker.ObjectFlagsReference == 0 {
    return nil
  }
  return checker.GetTypeArguments(typ)
}

func metadata_get_function_node(checker *nativechecker.Checker, typ *nativechecker.Type) *nativeast.Node {
  if typ == nil {
    return nil
  }
  symbol := typ.Symbol()
  if symbol == nil || len(symbol.Declarations) == 0 {
    return nil
  }
  node := symbol.Declarations[0]
  if nativeast.IsFunctionLike(node) {
    return node
  }
  // The global `Function` interface (declared in a default `lib.*.d.ts`) is
  // callable and newable at runtime, so a `Function`-typed member is a function,
  // not a structural object: `constructor: Function` on the global `Object`
  // interface, an explicit `x: Function`, or any member inherited through
  // `extends Object`. Its symbol resolves to an `InterfaceDeclaration` rather
  // than a function-like node, so without this branch it is expanded
  // structurally (`{ prototype, length, arguments, caller, name }`) and its
  // `typeof` is checked as `"object"` even though a real function reports
  // `"function"`, making `is<Object>` universally false (#2178). Returning the
  // interface declaration routes the member through the same function path typia
  // already uses for `() => void` members: a lenient pass under default options
  // and a signature-based check under `functional`.
  if metadata_is_global_function_interface(symbol, node) {
    return node
  }
  if metadata_is_pure_function_declaration(checker, typ, node) {
    return node
  }
  if nativeast.IsPropertyAssignment(node) {
    initializer := node.AsPropertyAssignment().Initializer
    if nativeast.IsFunctionLike(initializer) {
      return initializer
    }
    return nil
  }
  if nativeast.IsPropertyDeclaration(node) {
    initializer := node.AsPropertyDeclaration().Initializer
    if nativeast.IsFunctionLike(initializer) {
      return initializer
    }
  }
  return nil
}

func metadata_get_return_type_of_class_method(props struct {
  Checker  *nativechecker.Checker
  Class    *nativechecker.Type
  Function string
}) *nativechecker.Type {
  if props.Checker == nil || props.Class == nil {
    return nil
  }
  symbol := props.Checker.GetPropertyOfType(props.Class, props.Function)
  if symbol == nil || symbol.ValueDeclaration == nil {
    return nil
  }
  functor := props.Checker.GetTypeOfSymbolAtLocation(symbol, symbol.ValueDeclaration)
  signatures := props.Checker.GetSignaturesOfType(functor, nativechecker.SignatureKindCall)
  if len(signatures) == 0 {
    return nil
  }
  return props.Checker.GetReturnTypeOfSignature(signatures[0])
}

func metadata_node_js_doc_tags(symbol *nativeast.Symbol) []schemametadata.IJsDocTagInfo {
  output := []schemametadata.IJsDocTagInfo{}
  for _, node := range metadata_node_declarations(symbol) {
    for _, jsdoc := range node.JSDoc(nil) {
      doc := jsdoc.AsJSDoc()
      if doc == nil || doc.Tags == nil {
        continue
      }
      for _, tag := range doc.Tags.Nodes {
        if tag == nil || tag.TagName() == nil {
          continue
        }
        texts := []schemametadata.IJsDocTagInfo_IText{}
        if name := metadata_js_doc_parameter_name(tag); name != "" {
          texts = append(texts, schemametadata.IJsDocTagInfo_IText{
            Kind: "parameterName",
            Text: name,
          })
        }
        if text := metadata_js_doc_type_expression_text(tag); text != "" {
          texts = append(texts, schemametadata.IJsDocTagInfo_IText{
            Kind: "text",
            Text: text,
          })
        }
        if text := metadata_js_doc_comment_text(tag.CommentList()); text != "" {
          texts = append(texts, schemametadata.IJsDocTagInfo_IText{
            Kind: "text",
            Text: text,
          })
        }
        output = append(output, schemametadata.IJsDocTagInfo{
          Name: tag.TagName().Text(),
          Text: texts,
        })
      }
    }
  }
  return output
}

func metadata_node_description(symbol *nativeast.Symbol) *string {
  for _, node := range metadata_node_declarations(symbol) {
    for _, jsdoc := range node.JSDoc(nil) {
      doc := jsdoc.AsJSDoc()
      if doc == nil {
        continue
      }
      if text := metadata_js_doc_comment_text(doc.Comment); text != "" {
        return &text
      }
    }
  }
  return nil
}

// metadata_node_type_description / metadata_node_type_js_doc_tags read the JSDoc
// of a TYPE-level symbol (an interface, class, or `type` alias), skipping symbols
// declared in a TypeScript default library file. Standard-library type aliases
// carry their own JSDoc (e.g. `NonNullable`'s "Exclude null and undefined from
// T", `Record`'s "Construct a type ...") and, since the type-name symbol of an
// instantiation such as `NonNullable<...>` resolves to that library declaration,
// an unfiltered read would leak the library comment into the user's schema. A
// property's own comment is unaffected — it is read from the property symbol,
// which is declared in user code.
func metadata_node_type_description(symbol *nativeast.Symbol) *string {
  if metadata_symbol_from_default_lib(symbol) {
    return nil
  }
  return metadata_node_description(symbol)
}

func metadata_node_type_js_doc_tags(symbol *nativeast.Symbol) []schemametadata.IJsDocTagInfo {
  if metadata_symbol_from_default_lib(symbol) {
    return []schemametadata.IJsDocTagInfo{}
  }
  return metadata_node_js_doc_tags(symbol)
}

// metadata_is_global_function_interface reports whether the type behind `symbol`
// is the global `Function` interface from a TypeScript default library. The
// match is intentionally narrow — the symbol name is exactly `"Function"`, its
// first declaration is an `InterfaceDeclaration`, and that declaration lives in a
// `lib.*.d.ts` — so it recognizes only the lib `Function` and never a
// user-declared `interface Function`, a `function Function()` value, or any
// other callable object type. See metadata_get_function_node for why the lib
// `Function` must be treated as a function type (#2178).
func metadata_is_global_function_interface(symbol *nativeast.Symbol, node *nativeast.Node) bool {
  if symbol == nil || symbol.Name != "Function" {
    return false
  }
  if node == nil || node.Kind != nativeast.KindInterfaceDeclaration {
    return false
  }
  return metadata_symbol_from_default_lib(symbol)
}

// metadata_is_pure_function_declaration reports whether an object-type
// declaration describes only call and/or construct signatures. TypeScript
// augments every callable object's apparent properties with the global Function
// members, so the raw properties and index infos are the boundary: a declaration
// that carries members of its own keeps its declared data shape, while a
// member-free callable or constructable one follows the same metadata path as
// the function type alias it is mutually assignable with (#2238).
//
// An interface body and a type literal are the two spellings TypeScript has for
// one object-type body, and `interface F { (v: number): string }`, `type F = { (v:
// number): string }`, and the anonymous `{ (v: number): string }` written at a
// call site are one type. The declaration's node kind is the only thing that
// separates them, so answering them differently is exactly the
// declaration-spelling dependency this predicate exists to remove. Both kinds
// are admitted and nothing else is: a function type or constructor type is
// already `IsFunctionLike` and never reaches here, and every other declaration
// kind that can back a callable type carries a runtime value binding whose
// declared shape is a different question.
//
// No member class is admitted, not even one the emitted validator ignores.
// #2238's invariant is that mutually assignable spellings agree, and a
// member-carrying callable has no plain function type to be assignable with:
// `{ (): void; cancel(): void }` accepts no bare `() => void`, so routing it
// through the function path would answer against no twin while erasing `cancel`
// from the declaration. It would also split two spellings that are mutually
// assignable with each other — `cancel(): void` and `cancel: () => void` are the
// same type, and only the first carries SymbolFlagsMethod — so admitting methods
// would make the method form a function while the property form stayed
// structural. Hybrid callables are #2250's merged boundary and #2238's declared
// negative boundary; both leave them structural.
func metadata_is_pure_function_declaration(
  checker *nativechecker.Checker,
  typ *nativechecker.Type,
  node *nativeast.Node,
) bool {
  if checker == nil || typ == nil || node == nil ||
    (node.Kind != nativeast.KindInterfaceDeclaration && node.Kind != nativeast.KindTypeLiteral) {
    return false
  }
  if len(nativechecker.Checker_getPropertiesOfType(checker, typ)) != 0 ||
    len(nativechecker.Checker_getIndexInfosOfType(checker, typ)) != 0 {
    return false
  }
  return len(checker.GetSignaturesOfType(typ, nativechecker.SignatureKindCall)) != 0 ||
    len(checker.GetSignaturesOfType(typ, nativechecker.SignatureKindConstruct)) != 0
}

// metadata_symbol_from_default_lib reports whether the symbol's first locatable
// declaration lives in a TypeScript default library file, judged by file name
// alone because its callers answer without a checker. Default library files are
// conventionally named `lib.<target>.d.ts`, which is enough for the JSDoc and
// global-`Function` questions that use this: both are about what a library
// declaration means, and neither grants a type an identity a lookalike could
// claim. Runtime-native identity does grant one, so it asks the program instead
// through schemametadata.MetadataDefaultLibrary_is.
func metadata_symbol_from_default_lib(symbol *nativeast.Symbol) bool {
  for _, node := range metadata_node_declarations(symbol) {
    src := nativeast.GetSourceFileOfNode(node)
    if src == nil {
      continue
    }
    return schemametadata.MetadataDefaultLibrary_isFileNamed(src.FileName())
  }
  return false
}

// metadata_symbol_is_global_type reports whether symbol is the type that the
// checker resolves from its global symbol table under name. Pointer identity is
// deliberate: default-library natives and ambient-package globals such as
// Node's File and Blob resolve to that shared global symbol, while an exported
// package declaration remains a distinct module symbol even when its name and
// `.d.ts` source form are identical (#2239).
func metadata_symbol_is_global_type(checker *nativechecker.Checker, symbol *nativeast.Symbol, name string) bool {
  if checker == nil || symbol == nil || name == "" {
    return false
  }
  return checker.ResolveName(name, nil, nativeast.SymbolFlagsType, false) == symbol
}

// metadata_symbol_is_runtime_global_type reports whether a global name is the
// runtime built-in rather than a user-authored global of the same name.
//
// Global-table resolution alone answers a weaker question than the one native
// classification asks. `declare global { interface File { ... } }` in a project
// with neither DOM nor Node declarations also wins that lookup, so a
// resolution-only gate promotes a purely user-authored type to native identity:
// its members are erased, `input instanceof File` replaces them, and the check
// throws `ReferenceError` wherever no runtime provides that constructor (#2200).
//
// The added question is therefore provenance of the runtime constructor, not the
// existence of a declaration: a global qualifies only when one of the two
// authorities that actually describe a JavaScript runtime — a TypeScript default
// library, or Node's `node:buffer` / `buffer` core module — puts it in scope.
func metadata_symbol_is_runtime_global_type(checker *nativechecker.Checker, symbol *nativeast.Symbol, name string) bool {
  return metadata_symbol_is_global_type(checker, symbol, name) &&
    metadata_symbol_has_runtime_provider(checker, symbol)
}

// metadata_symbol_is_runtime_native_type applies the shared identity boundary
// for simple runtime-native classes. Most natives are the runtime-provided
// symbol resolved from the checker's global type table. Node's Blob and File
// module exports are a second symbol for those same runtime constructors, so
// their declarations qualify through the value-bearing shape shared by the
// supported Node type definitions (#1568, #2200, #2239).
func metadata_symbol_is_runtime_native_type(checker *nativechecker.Checker, symbol *nativeast.Symbol, name string) bool {
  return metadata_symbol_is_runtime_global_type(checker, symbol, name) ||
    metadata_symbol_is_node_buffer_native_export(symbol, name)
}

// metadata_symbol_has_runtime_provider reports whether a runtime authority is
// what puts this symbol's constructor in scope.
//
// A provider does not have to declare the interface itself. @types/node bridges
// its module classes to the bare globals with `interface Blob extends _Blob {}`
// plus `var Blob: ... typeof buffer.Blob` in an ordinary package `.d.ts`, so the
// interface declaration carries no runtime provenance at all while the value
// binding resolves straight into the ambient `node:buffer` module. Reading the
// constructor binding therefore recognizes that bridge — and every respelling of
// it, including the 18/20 `typeof NodeBlob` class alias and the 25 `typeof
// buffer.Blob` variable alias — without matching declaration text or package
// paths, which node_modules placement, custom typeRoots, symlinks, and
// virtualized package layouts all make unreliable.
//
// A user-authored global fails both halves: its interface lives in the user's
// own file, and any `declare var` it pairs with resolves to the user's own type
// literal rather than into a default library or the Node core module.
func metadata_symbol_has_runtime_provider(checker *nativechecker.Checker, symbol *nativeast.Symbol) bool {
  if symbol == nil {
    return false
  }
  for _, declaration := range metadata_node_declarations(symbol) {
    if metadata_declaration_is_runtime_provided(checker, declaration) {
      return true
    }
  }
  if checker == nil || symbol.Flags&nativeast.SymbolFlagsValue == 0 {
    return false
  }
  constructor := checker.GetTypeOfSymbol(symbol)
  if constructor == nil {
    return false
  }
  for _, declaration := range metadata_node_declarations(constructor.Symbol()) {
    if metadata_declaration_is_runtime_provided(checker, declaration) {
      return true
    }
  }
  return false
}

// metadata_declaration_is_runtime_provided reports whether a declaration belongs
// to one of the two authorities that describe a runtime-native global: a
// TypeScript default library file, or the `node:buffer` / `buffer` core module
// that owns Node's Blob and File constructors. The default-library half comes
// from the program (see schemametadata.MetadataDefaultLibrary) rather than from
// the declaration's file name, which under `libReplacement` is an ordinary
// `node_modules/@typescript/lib-*/index.d.ts` and which any dependency may
// otherwise imitate.
func metadata_declaration_is_runtime_provided(checker *nativechecker.Checker, declaration *nativeast.Node) bool {
  if declaration == nil {
    return false
  }
  if schemametadata.MetadataDefaultLibrary_is(checker, nativeast.GetSourceFileOfNode(declaration)) {
    return true
  }
  return metadata_node_in_node_buffer_module(declaration)
}

func metadata_node_in_node_buffer_module(node *nativeast.Node) bool {
  for current := node; current != nil; current = current.Parent {
    if current.Kind == nativeast.KindModuleDeclaration && current.Name() != nil {
      module := strings.Trim(current.Name().Text(), "\"'")
      if module == "node:buffer" || module == "buffer" {
        return true
      }
    }
    if current.Kind == nativeast.KindSourceFile {
      return false
    }
  }
  return false
}

func metadata_symbol_is_node_buffer_native_export(symbol *nativeast.Symbol, name string) bool {
  if symbol == nil || symbol.ValueDeclaration == nil || (name != "Blob" && name != "File") {
    return false
  }
  declaration := symbol.ValueDeclaration
  if declaration.Kind != nativeast.KindClassDeclaration && declaration.Kind != nativeast.KindVariableDeclaration {
    return false
  }
  // @types/node 18/20 declare these constructor values as classes and 25
  // declares merged interface/var pairs. The value declaration and exact core
  // module together distinguish those runtime constructors from structural
  // same-name interfaces without depending on node_modules placement, custom
  // typeRoots, symlink targets, or virtualized package paths.
  return metadata_node_in_node_buffer_module(declaration)
}

func metadata_is_internal(symbol *nativeast.Symbol) bool {
  for _, tag := range metadata_node_js_doc_tags(symbol) {
    if tag.Name == "internal" {
      return true
    }
  }
  return false
}

func metadata_node_declarations(symbol *nativeast.Symbol) []*nativeast.Node {
  if symbol == nil {
    return nil
  }
  output := []*nativeast.Node{}
  visited := map[*nativeast.Node]bool{}
  appendNode := func(node *nativeast.Node) {
    if node != nil && visited[node] == false {
      visited[node] = true
      output = append(output, node)
    }
  }
  appendNode(symbol.ValueDeclaration)
  for _, node := range symbol.Declarations {
    appendNode(node)
  }
  return output
}

func metadata_js_doc_parameter_name(tag *nativeast.Node) string {
  if tag == nil {
    return ""
  }
  if tag.Kind.String() != "KindJSDocParameterTag" && tag.Kind.String() != "KindJSDocPropertyTag" {
    return ""
  }
  name := tag.AsJSDocParameterOrPropertyTag().Name()
  if name == nil {
    return ""
  }
  return metadata_js_doc_name_text(name)
}

func metadata_js_doc_name_text(node *nativeast.Node) string {
  if text := metadata_node_source_text(node); text != "" {
    return text
  }
  if node == nil {
    return ""
  }
  if node.Kind == nativeast.KindQualifiedName {
    name := node.AsQualifiedName()
    if name == nil {
      return ""
    }
    left := metadata_js_doc_name_text(name.Left)
    right := metadata_js_doc_name_text(name.Right)
    if left == "" {
      return right
    }
    if right == "" {
      return left
    }
    return left + "." + right
  }
  return node.Text()
}

func metadata_node_source_text(node *nativeast.Node) string {
  if node == nil {
    return ""
  }
  file := nativeast.GetSourceFileOfNode(node)
  if file == nil {
    return ""
  }
  source := file.Text()
  start, end := node.Pos(), node.End()
  if start < 0 || end > len(source) || start >= end {
    return ""
  }
  return strings.TrimSpace(source[start:end])
}

func metadata_js_doc_type_expression_text(tag *nativeast.Node) string {
  if tag == nil {
    return ""
  }
  switch tag.Kind {
  case nativeast.KindJSDocTypeTag,
    nativeast.KindJSDocParameterTag,
    nativeast.KindJSDocPropertyTag,
    nativeast.KindJSDocReturnTag,
    nativeast.KindJSDocTypedefTag,
    nativeast.KindJSDocSatisfiesTag,
    nativeast.KindJSDocThrowsTag:
  default:
    return ""
  }
  expr := tag.TypeExpression()
  if expr == nil {
    return ""
  }
  typ := expr.Type()
  if typ == nil {
    return ""
  }
  return metadata_clean_js_doc_text(nativescanner.GetTextOfNode(typ))
}

func metadata_js_doc_comment_text(list *nativeast.NodeList) string {
  if list == nil {
    return ""
  }
  parts := []string{}
  for _, node := range list.Nodes {
    if node == nil {
      continue
    }
    switch node.Kind {
    case nativeast.KindJSDocText:
      parts = append(parts, node.Text())
    case nativeast.KindJSDocLink,
      nativeast.KindJSDocLinkCode,
      nativeast.KindJSDocLinkPlain:
      parts = append(parts, metadata_js_doc_link_text(node))
    }
  }
  return metadata_clean_js_doc_text(strings.Join(parts, ""))
}

func metadata_js_doc_link_text(node *nativeast.Node) string {
  if node == nil {
    return ""
  }
  name := node.Name()
  text := strings.Trim(node.Text(), " ")
  if name == nil {
    return text
  }
  nameText := metadata_js_doc_entity_name_text(name)
  if (nameText == "http" || nameText == "https") && strings.HasPrefix(text, "://") {
    target := nameText + text
    index := strings.IndexAny(target, " |")
    if index == -1 {
      return target
    }
    label := metadata_js_doc_link_label(target[index:])
    if label != "" {
      return label
    }
    return target[:index]
  }

  suffix := ""
  if strings.HasPrefix(text, "()") {
    suffix = "()"
    text = text[2:]
  }
  if label := metadata_js_doc_link_label(text); label != "" {
    return label
  }
  return nameText + suffix
}

func metadata_js_doc_link_label(text string) string {
  text = strings.TrimLeft(text, " ")
  text = strings.TrimPrefix(text, "|")
  return strings.TrimSpace(text)
}

func metadata_js_doc_entity_name_text(node *nativeast.Node) string {
  if node == nil {
    return ""
  }
  switch node.Kind {
  case nativeast.KindIdentifier:
    return node.Text()
  case nativeast.KindQualifiedName:
    name := node.AsQualifiedName()
    if name == nil {
      return ""
    }
    return metadata_js_doc_entity_name_text(name.Left) + "." + metadata_js_doc_entity_name_text(name.Right)
  case nativeast.KindPropertyAccessExpression:
    return metadata_js_doc_entity_name_text(node.Expression()) + "." + metadata_js_doc_entity_name_text(node.Name())
  case nativeast.KindParenthesizedExpression,
    nativeast.KindExpressionWithTypeArguments:
    return metadata_js_doc_entity_name_text(node.Expression())
  case nativeast.KindJSDocNameReference:
    return metadata_js_doc_entity_name_text(node.Name())
  default:
    return ""
  }
}

func metadata_clean_js_doc_text(text string) string {
  text = strings.ReplaceAll(text, "\r\n", "\n")
  text = strings.ReplaceAll(text, "\r", "\n")
  lines := strings.Split(text, "\n")
  for i, line := range lines {
    lines[i] = strings.TrimRight(line, " \t")
  }
  return strings.TrimSpace(strings.Join(lines, "\n"))
}
