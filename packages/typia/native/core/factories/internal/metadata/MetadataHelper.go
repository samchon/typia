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
  if metadata_is_pure_function_interface(checker, typ, node) {
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

// metadata_is_pure_function_interface reports whether an interface describes
// only call and/or construct signatures. TypeScript augments every callable
// object's apparent properties with the global Function members, so the raw
// properties and index infos are the boundary: a hybrid interface keeps its
// declared data shape, while a property-free callable or constructable
// interface follows the same metadata path as its mutually assignable function
// type alias (#2238).
func metadata_is_pure_function_interface(
  checker *nativechecker.Checker,
  typ *nativechecker.Type,
  node *nativeast.Node,
) bool {
  if checker == nil || typ == nil || node == nil || node.Kind != nativeast.KindInterfaceDeclaration {
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
// declaration lives in a TypeScript default library file. Default library files
// are always named `lib.<target>.d.ts` regardless of the install directory, so
// the base name alone is a stable signal.
func metadata_symbol_from_default_lib(symbol *nativeast.Symbol) bool {
  for _, node := range metadata_node_declarations(symbol) {
    src := nativeast.GetSourceFileOfNode(node)
    if src == nil {
      continue
    }
    return metadata_is_default_lib_file_name(src.FileName())
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

// metadata_symbol_is_runtime_native_type applies the shared identity boundary
// for simple runtime-native classes. Most natives are the exact symbol resolved
// from the checker's global type table. Node's Blob and File module exports are
// a second symbol for those same runtime constructors, so their declarations
// qualify through the value-bearing shape shared by the supported Node type
// definitions (#1568, #2239).
func metadata_symbol_is_runtime_native_type(checker *nativechecker.Checker, symbol *nativeast.Symbol, name string) bool {
  return metadata_symbol_is_global_type(checker, symbol, name) ||
    metadata_symbol_is_node_buffer_native_export(symbol, name)
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
  for node := declaration; node != nil; node = node.Parent {
    if node.Kind == nativeast.KindModuleDeclaration && node.Name() != nil {
      module := strings.Trim(node.Name().Text(), "\"'")
      if module == "node:buffer" || module == "buffer" {
        return true
      }
    }
    if node.Kind == nativeast.KindSourceFile {
      break
    }
  }
  return false
}

func metadata_is_default_lib_file_name(fileName string) bool {
  slash := strings.ReplaceAll(fileName, "\\", "/")
  base := slash
  if idx := strings.LastIndex(slash, "/"); idx >= 0 {
    base = slash[idx+1:]
  }
  return strings.HasPrefix(base, "lib.") && strings.HasSuffix(base, ".d.ts")
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
