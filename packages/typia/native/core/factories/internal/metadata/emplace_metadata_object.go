package metadata

import (
  "strings"

  nativeast "github.com/microsoft/typescript-go/shim/ast"
  nativechecker "github.com/microsoft/typescript-go/shim/checker"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

func Emplace_metadata_object(props IMetadataIteratorProps) *schemametadata.MetadataObjectType {
  obj, newbie := props.Components.Emplace(props.Checker, props.Type)
  metadata_array_util_add_bool(&obj.Nullables, props.Metadata.Nullable)
  if newbie == false {
    return obj
  }

  if props.Type != nil {
    // The MetadataCollection layer cannot reach the AST JSDoc helpers (they live
    // in this factory package), so the object's own description / tags are
    // emplaced as stubs there and filled in here from the declaring symbol.
    // Prefer the type-name symbol (so a `type Foo = { ... }` alias' comment is
    // honored) and fall back to the structural symbol (an interface / class). The
    // type-level readers skip default-library declarations so a utility type such
    // as `Record<K, V>` never leaks its standard-library comment.
    symbol := props.Type.Symbol()
    if typeName := nativechecker_type_name_symbol(props.Type); typeName != nil {
      symbol = typeName
    }
    obj.Description = metadata_node_type_description(symbol)
    obj.JsDocTags = metadata_node_type_js_doc_tags(symbol)

    // Capture the declaring source file (named declarations only) so
    // plain.classify can value-import a cross-module class it reconstructs.
    // Additive: other features ignore obj.Source.
    if sym := props.Type.Symbol(); sym != nil && len(sym.Declarations) != 0 {
      decl := sym.Declarations[0]
      // A `class` (declaration or expression — including a generic instantiation,
      // whose symbol still resolves to the class declaration) has a runtime value
      // binding; an interface / type alias / anonymous object literal does not, so
      // plain.classify must field-copy a plain {} rather than reference a type-only
      // name. classRefOf gates on this.
      obj.IsClass = decl.Kind == nativeast.KindClassDeclaration || decl.Kind == nativeast.KindClassExpression
      if src := nativeast.GetSourceFileOfNode(decl); src != nil {
        file := src.FileName()
        obj.Source = &file
        // The Default modifier covers `export default class C {}`; a SEPARATE
        // `class C {}; export default C;` puts no modifier on the class, so also
        // detect that ExportAssignment form (else a cross-module classify
        // value-imports a missing NAMED binding).
        obj.SourceDefault = decl.ModifierFlags()&nativeast.ModifierFlagsDefault != 0 ||
          emplace_metadata_object_is_default_export(props.Checker, sym, decl, src)
      }
      // A class EXPRESSION's symbol name is the inner `Beast` (`const X = class
      // Beast {}`) or the binder-internal `__class` (`const X = class {}`),
      // neither of which binds at the classify call site; the runtime value is
      // the enclosing `const X`. Capture X so the field-copy allocator (classRefOf)
      // references it for BOTH named and unnamed expressions — the unnamed form's
      // metadata Name can still surface the `__class` binder name, so do not rely
      // on it. An expression with no enclosing variable binding leaves ValueRef
      // empty (classRefOf falls back to the metadata Name). A class DECLARATION's
      // Kind is not ClassExpression, so it is unaffected.
      if decl.Kind == nativeast.KindClassExpression {
        obj.ValueRef = emplace_metadata_object_value_binding(decl)
      }
      // ES `#private` members are installed only by the constructor, so
      // plain.classify cannot soundly field-copy (Object.create + assign) a class
      // that has them — and the PROTOTYPE CHAIN matters: a field-copied subclass
      // of a #private-bearing base would equally throw "Cannot read private
      // member". The type system hides #private from ApparentProperties, so detect
      // it on the class declaration(s), walking the `extends` chain. Additive flag,
      // read only by the classify programmer.
      if emplace_metadata_object_private_fields(props.Checker, props.Type, map[*nativechecker.Type]bool{}) {
        obj.PrivateFields = true
      }
    }
  }

  // Report the `extends` / `implements` chain to the dependency listener. The
  // apparent-property walk below already registers the declaring file of every
  // inherited member, but a base that currently contributes no property (an
  // empty interface or class) would otherwise stay invisible — and gaining its
  // first property is exactly the change that must invalidate the consumer.
  if props.Type != nil && schemametadata.MetadataDependency_active(props.Checker) {
    emplace_metadata_object_touch_heritage(props.Checker, props.Type.Symbol(), map[*nativeast.Symbol]bool{})
  }

  isClass := props.Type != nil && props.Type.IsClass()
  isProperty := emplace_metadata_object_significant(props.Options.Functional, props.Options.Methods)
  pred := func(node *nativeast.Node) bool {
    if node == nil {
      return true
    }
    if isClass && node.ModifierFlags()&(nativeast.ModifierFlagsPrivate|nativeast.ModifierFlagsProtected) != 0 {
      return false
    }
    return isProperty(node)
  }

  insert := func(next emplace_metadata_object_insert) *schemametadata.MetadataProperty {
    property := emplace_metadata_object_create_property(next)
    obj.Properties = append(obj.Properties, property)
    return property
  }
  if emplace_metadata_object_intersection(props, obj, insert, pred) {
    return obj
  }

  for _, symbol := range props.Components.ApparentProperties(props.Checker, props.Type) {
    if metadata_is_internal(symbol) {
      continue
    }
    var node *nativeast.Node
    if len(symbol.Declarations) != 0 {
      node = symbol.Declarations[0]
    }
    var typ *nativechecker.Type
    if node != nil {
      typ = props.Checker.GetTypeOfSymbolAtLocation(symbol, node)
    } else {
      typ = nativechecker.Checker_getTypeOfPropertyOfType(props.Checker, props.Type, symbol.Name)
    }
    if (node != nil && pred(node) == false) || typ == nil {
      continue
    }

    key := MetadataHelper.Literal_to_metadata(symbol.Name)
    explore := MetadataFactory_IExplore{
      Top:       false,
      Object:    obj,
      Property:  symbol.Name,
      Parameter: nil,
      Nested:    nil,
      Aliased:   false,
      Escaped:   false,
      Output:    false,
    }
    value := Explore_metadata(Explore_metadata_IProps{
      Options:     props.Options,
      Checker:     props.Checker,
      Components:  props.Components,
      Errors:      props.Errors,
      Type:        typ,
      Explore:     explore,
      Intersected: false,
    })
    value.Optional = symbol.Flags&nativeast.SymbolFlagsOptional != 0
    insert(emplace_metadata_object_insert{
      Key:    key,
      Value:  value,
      Symbol: symbol,
      Node:   node,
    })
  }

  for _, index := range props.Components.IndexInfos(props.Checker, props.Type) {
    analyzer := func(typ *nativechecker.Type) func(any) *schemametadata.MetadataSchema {
      return func(property any) *schemametadata.MetadataSchema {
        explore := MetadataFactory_IExplore{
          Top:       false,
          Object:    obj,
          Property:  property,
          Parameter: nil,
          Nested:    nil,
          Aliased:   false,
          Escaped:   false,
          Output:    false,
        }
        return Explore_metadata(Explore_metadata_IProps{
          Options:     props.Options,
          Checker:     props.Checker,
          Components:  props.Components,
          Errors:      props.Errors,
          Type:        typ,
          Explore:     explore,
          Intersected: false,
        })
      }
    }
    key := analyzer(index.KeyType())(nil)
    value := analyzer(index.ValueType())(struct{}{})
    if emplace_metadata_object_valid_dynamic_key(key) == false && props.Errors != nil {
      *props.Errors = append(*props.Errors, MetadataFactory_IError{
        Name: key.GetName(),
        Explore: MetadataFactory_IExplore{
          Top:       false,
          Object:    obj,
          Property:  "[key]",
          Parameter: nil,
          Nested:    nil,
          Aliased:   false,
          Escaped:   false,
          Output:    false,
        },
        Messages: []string{},
      })
    }
    insert(emplace_metadata_object_insert{
      Key:   key,
      Value: value,
      FilterTags: func(doc schemametadata.IJsDocTagInfo) bool {
        return doc.Name != "default"
      },
    })
  }
  return obj
}

// emplace_metadata_object_touch_heritage reports every `extends` / `implements`
// heritage target of `symbol`'s class / interface declarations to the
// dependency listener, following the chain recursively so intermediate empty
// bases register too. Import aliases resolve to their final target symbol,
// whose declarations carry the real declaring files. Walking runs only while a
// listener is active (see the call site), so ordinary analysis pays nothing.
func emplace_metadata_object_touch_heritage(
  checker *nativechecker.Checker,
  symbol *nativeast.Symbol,
  visited map[*nativeast.Symbol]bool,
) {
  if checker == nil || symbol == nil || visited[symbol] {
    return
  }
  visited[symbol] = true
  for _, decl := range symbol.Declarations {
    if decl == nil {
      continue
    }
    var clauses *nativeast.NodeList
    switch decl.Kind {
    case nativeast.KindClassDeclaration:
      if cd := decl.AsClassDeclaration(); cd != nil {
        clauses = cd.HeritageClauses
      }
    case nativeast.KindClassExpression:
      if ce := decl.AsClassExpression(); ce != nil {
        clauses = ce.HeritageClauses
      }
    case nativeast.KindInterfaceDeclaration:
      if id := decl.AsInterfaceDeclaration(); id != nil {
        clauses = id.HeritageClauses
      }
    }
    if clauses == nil {
      continue
    }
    for _, clause := range clauses.Nodes {
      if clause == nil || clause.Kind != nativeast.KindHeritageClause {
        continue
      }
      hc := clause.AsHeritageClause()
      if hc == nil || hc.Types == nil {
        continue
      }
      for _, element := range hc.Types.Nodes {
        if element == nil {
          continue
        }
        expr := element.AsExpressionWithTypeArguments()
        if expr == nil || expr.Expression == nil {
          continue
        }
        target := checker.GetSymbolAtLocation(expr.Expression)
        if target == nil {
          continue
        }
        if target.Flags&nativeast.SymbolFlagsAlias != 0 {
          if resolved := nativechecker.Checker_getAliasedSymbol(checker, target); resolved != nil {
            target = resolved
          }
        }
        schemametadata.MetadataDependency_touchSymbol(checker, target)
        emplace_metadata_object_touch_heritage(checker, target, visited)
      }
    }
  }
}

// emplace_metadata_object_private_fields reports whether `typ` or any class in
// its `extends` chain declares an INSTANCE ES #private member — which field-copy
// (Object.create + assign) cannot reconstruct, so plain.classify must reject it.
// A STATIC #private (on the constructor) is excluded at every level. `visited`
// guards against type cycles.
func emplace_metadata_object_private_fields(checker *nativechecker.Checker, typ *nativechecker.Type, visited map[*nativechecker.Type]bool) bool {
  if checker == nil || typ == nil || visited[typ] {
    return false
  }
  visited[typ] = true
  sym := typ.Symbol()
  if sym == nil || len(sym.Declarations) == 0 {
    return false
  }
  decl := sym.Declarations[0]
  var members []*nativeast.Node
  if decl.Kind == nativeast.KindClassDeclaration {
    if cd := decl.AsClassDeclaration(); cd != nil && cd.Members != nil {
      members = cd.Members.Nodes
    }
  } else if decl.Kind == nativeast.KindClassExpression {
    if ce := decl.AsClassExpression(); ce != nil && ce.Members != nil {
      members = ce.Members.Nodes
    }
  } else {
    // Not a class — no instance #private to find, and Checker_getBaseTypes is
    // defined only for class/interface symbols (a union / primitive / type-alias
    // Reference would hit its panic arm). Stop here.
    return false
  }
  for _, member := range members {
    if member == nil {
      continue
    }
    if member.ModifierFlags()&nativeast.ModifierFlagsStatic != 0 {
      continue
    }
    if name := member.Name(); name != nil && name.Kind == nativeast.KindPrivateIdentifier {
      return true
    }
  }
  // Walk the `extends` chain. Checker_getBaseTypes nil-dereferences (its internal
  // t.AsInterfaceType() is nil) for anything that is not a class/interface
  // INSTANCE — including a class's Anonymous static side `typeof C` and a generic
  // instantiation Reference (`Mid<string>`) — so it is guarded to a ClassOrInterface
  // instance. A generic subclass's OWN #private is still caught by the member scan
  // above; only a #private INHERITED through a generic base boundary is not
  // detected (narrow, documented). The non-generic inheritance chain is covered.
  if typ.ObjectFlags()&nativechecker.ObjectFlagsClassOrInterface == 0 {
    return false
  }
  for _, base := range nativechecker.Checker_getBaseTypes(checker, typ) {
    if emplace_metadata_object_private_fields(checker, base, visited) {
      return true
    }
  }
  return false
}

// emplace_metadata_object_is_default_export reports whether `sym` (a class
// declared by `decl` in `src`) is the module default export via a SEPARATE
// `export default C;` statement, which leaves NO Default modifier on the class
// declaration. Walks the source file's top-level ExportAssignment statements for
// an `export default <ident>` (not `export = `) whose identifier resolves to
// this class symbol. nil-safe.
func emplace_metadata_object_is_default_export(
  checker *nativechecker.Checker,
  sym *nativeast.Symbol,
  decl *nativeast.Node,
  src *nativeast.SourceFile,
) bool {
  if checker == nil || sym == nil || src == nil || src.Statements == nil {
    return false
  }
  for _, stmt := range src.Statements.Nodes {
    if stmt == nil || stmt.Kind != nativeast.KindExportAssignment {
      continue
    }
    ea := stmt.AsExportAssignment()
    if ea == nil || ea.IsExportEquals || ea.Expression == nil {
      continue
    }
    target := checker.GetSymbolAtLocation(ea.Expression)
    if target == nil {
      continue
    }
    if target == sym || (len(target.Declarations) != 0 && target.Declarations[0] == decl) {
      return true
    }
  }
  return false
}

// emplace_metadata_object_value_binding returns the enclosing `const X = class
// {...}` variable name for a class-expression declaration (walking past any
// parentheses), or "" when the class expression has no variable binding.
func emplace_metadata_object_value_binding(decl *nativeast.Node) string {
  node := decl.Parent
  for node != nil && node.Kind == nativeast.KindParenthesizedExpression {
    node = node.Parent
  }
  if node == nil || node.Kind != nativeast.KindVariableDeclaration || node.Name() == nil {
    return ""
  }
  name := strings.TrimSpace(node.Name().Text())
  // Qualify by any enclosing namespace (VariableDeclaration -> List -> Statement
  // -> ModuleBlock) so a `namespace NS { const X = class {} }` binds as `NS.X`.
  if list := node.Parent; list != nil {
    if stmt := list.Parent; stmt != nil {
      return metadata_explore_symbol_name(stmt.Parent, name)
    }
  }
  return name
}

type emplace_metadata_object_insert struct {
  Key        *schemametadata.MetadataSchema
  Value      *schemametadata.MetadataSchema
  Symbol     *nativeast.Symbol
  Node       *nativeast.Node
  FilterTags func(schemametadata.IJsDocTagInfo) bool
}

func emplace_metadata_object_create_property(next emplace_metadata_object_insert) *schemametadata.MetadataProperty {
  description := metadata_node_description(next.Symbol)
  jsDocTags := metadata_node_js_doc_tags(next.Symbol)
  if next.FilterTags != nil {
    filtered := []schemametadata.IJsDocTagInfo{}
    for _, tag := range jsDocTags {
      if next.FilterTags(tag) {
        filtered = append(filtered, tag)
      }
    }
    jsDocTags = filtered
  }
  var mutability *string
  if next.Node != nil && next.Node.ModifierFlags()&nativeast.ModifierFlagsReadonly != 0 {
    value := "readonly"
    mutability = &value
  }
  return schemametadata.MetadataProperty_create(schemametadata.MetadataProperty{
    Key:         next.Key,
    Value:       next.Value,
    Description: description,
    JsDocTags:   jsDocTags,
    Mutability:  mutability,
  })
}

func emplace_metadata_object_intersection(
  props IMetadataIteratorProps,
  obj *schemametadata.MetadataObjectType,
  insert func(emplace_metadata_object_insert) *schemametadata.MetadataProperty,
  pred func(node *nativeast.Node) bool,
) bool {
  if props.Checker == nil ||
    props.Type == nil ||
    props.Type.IsIntersection() == false ||
    iterate_metadata_intersection_is_plain_object_only(props.Checker, props.Components, props.Type, map[*nativechecker.Type]bool{}) == false {
    return false
  }
  children := emplace_metadata_object_intersection_children(props.Type, map[*nativechecker.Type]bool{})
  if len(children) < 2 || emplace_metadata_object_intersection_has_duplicate_key(props.Checker, props.Components, children) {
    return false
  }
  merged := []*schemametadata.MetadataProperty{}
  checkProperties := []*schemametadata.MetadataProperty{}
  parentObjects := []*schemametadata.MetadataObject{}
  props.Explore.Object = obj
  props.Explore.Top = false
  for _, child := range children {
    if emplace_metadata_object_shareable_child(props, child) {
      explore := props.Explore
      explore.Object = obj
      explore.Property = nil
      explore.Aliased = false
      metadata := Explore_metadata(Explore_metadata_IProps{
        Options:    props.Options,
        Checker:    props.Checker,
        Components: props.Components,
        Errors:     props.Errors,
        Type:       child,
        Explore:    explore,
        Prunable:   props.Prunable,
      })
      if metadata.Size() != 1 || len(metadata.Objects) != 1 {
        return false
      }
      if len(metadata.Objects[0].Tags) != 0 {
        return false
      }
      parentObjects = append(parentObjects, metadata.Objects[0])
      for _, property := range metadata.Objects[0].Type.Properties {
        merged = append(merged, emplace_metadata_object_clone_property(property))
      }
    } else if emplace_metadata_object_intersection_append(
      props,
      child,
      func(next emplace_metadata_object_insert) *schemametadata.MetadataProperty {
        property := emplace_metadata_object_create_property(next)
        merged = append(merged, property)
        checkProperties = append(checkProperties, property)
        return property
      },
      pred,
    ) == false {
      return false
    }
  }
  obj.Properties = append(obj.Properties, merged...)
  if len(parentObjects) != 0 {
    obj.Parent_objects_ = append(obj.Parent_objects_, parentObjects...)
    obj.Check_properties_ = append(obj.Check_properties_, checkProperties...)
  }
  return true
}

func emplace_metadata_object_shareable_child(props IMetadataIteratorProps, child *nativechecker.Type) bool {
  fullName := metadata_type_full_name(props.Checker, child, props.Components)
  sanitized := iterate_metadata_intersection_sanitize_name(fullName)
  return iterate_metadata_intersection_shareable_name(fullName, sanitized)
}

func emplace_metadata_object_intersection_append(
  props IMetadataIteratorProps,
  child *nativechecker.Type,
  insert func(emplace_metadata_object_insert) *schemametadata.MetadataProperty,
  pred func(node *nativeast.Node) bool,
) bool {
  if props.Checker == nil || child == nil || len(props.Components.IndexInfos(props.Checker, child)) != 0 {
    return false
  }
  for _, symbol := range props.Components.ApparentProperties(props.Checker, child) {
    if metadata_is_internal(symbol) {
      continue
    }
    var node *nativeast.Node
    if len(symbol.Declarations) != 0 {
      node = symbol.Declarations[0]
    }
    var typ *nativechecker.Type
    if node != nil {
      typ = props.Checker.GetTypeOfSymbolAtLocation(symbol, node)
    } else {
      typ = nativechecker.Checker_getTypeOfPropertyOfType(props.Checker, child, symbol.Name)
    }
    if (node != nil && pred(node) == false) || typ == nil {
      continue
    }

    explore := props.Explore
    explore.Property = symbol.Name
    explore.Parameter = nil
    explore.Nested = nil
    explore.Aliased = false
    explore.Escaped = false
    explore.Output = false
    value := Explore_metadata(Explore_metadata_IProps{
      Options:     props.Options,
      Checker:     props.Checker,
      Components:  props.Components,
      Errors:      props.Errors,
      Type:        typ,
      Explore:     explore,
      Intersected: false,
      Prunable:    props.Prunable,
    })
    value.Optional = symbol.Flags&nativeast.SymbolFlagsOptional != 0
    insert(emplace_metadata_object_insert{
      Key:    MetadataHelper.Literal_to_metadata(symbol.Name),
      Value:  value,
      Symbol: symbol,
      Node:   node,
    })
  }
  return true
}

func emplace_metadata_object_intersection_children(
  typ *nativechecker.Type,
  visited map[*nativechecker.Type]bool,
) []*nativechecker.Type {
  if typ == nil || visited[typ] {
    return nil
  }
  visited[typ] = true
  if typ.IsIntersection() == false {
    return []*nativechecker.Type{typ}
  }
  output := []*nativechecker.Type{}
  for _, child := range typ.Types() {
    output = append(output, emplace_metadata_object_intersection_children(child, visited)...)
  }
  return output
}

func emplace_metadata_object_intersection_has_duplicate_key(
  checker *nativechecker.Checker,
  collection *schemametadata.MetadataCollection,
  children []*nativechecker.Type,
) bool {
  keys := map[string]bool{}
  for _, child := range children {
    if child == nil {
      return true
    }
    for _, symbol := range collection.ApparentProperties(checker, child) {
      if keys[symbol.Name] {
        return true
      }
      keys[symbol.Name] = true
    }
  }
  return false
}

func emplace_metadata_object_clone_property(property *schemametadata.MetadataProperty) *schemametadata.MetadataProperty {
  if property == nil {
    return nil
  }
  description := property.Description
  if description != nil {
    value := *description
    description = &value
  }
  mutability := property.Mutability
  if mutability != nil {
    value := *mutability
    mutability = &value
  }
  return schemametadata.MetadataProperty_create(schemametadata.MetadataProperty{
    Key:         property.Key,
    Value:       property.Value.Clone(),
    Description: description,
    JsDocTags:   property.JsDocTags,
    Mutability:  mutability,
  })
}

func emplace_metadata_object_significant(functional bool, methods bool) func(node *nativeast.Node) bool {
  if functional {
    return func(node *nativeast.Node) bool {
      return node.Kind != nativeast.KindGetAccessor && node.Kind != nativeast.KindSetAccessor
    }
  }
  return func(node *nativeast.Node) bool {
    switch node.Kind {
    case nativeast.KindParameter,
      nativeast.KindPropertyDeclaration,
      nativeast.KindPropertyAssignment,
      nativeast.KindPropertySignature,
      nativeast.KindTypeLiteral,
      nativeast.KindShorthandPropertyAssignment:
      return true
    case nativeast.KindMethodDeclaration,
      nativeast.KindMethodSignature:
      return methods
    default:
      return false
    }
  }
}

func emplace_metadata_object_valid_dynamic_key(key *schemametadata.MetadataSchema) bool {
  total := len(key.Atomics) + len(key.Templates)
  for _, constant := range key.Constants {
    total += len(constant.Values)
  }
  for _, native := range key.Natives {
    if native.Name == "Boolean" || native.Name == "BigInt" || native.Name == "Number" || native.Name == "String" {
      total++
    }
  }
  return total == key.Size()
}

func iterate_optional_coalesce(props struct {
  Metadata *schemametadata.MetadataSchema
  Type     *nativechecker.Type
}) {
  if props.Type != nil && (props.Type.IsUnion() || props.Type.IsIntersection()) {
    for _, child := range props.Type.Types() {
      iterate_optional_coalesce(struct {
        Metadata *schemametadata.MetadataSchema
        Type     *nativechecker.Type
      }{
        Metadata: props.Metadata,
        Type:     child,
      })
    }
    return
  }
  Iterate_metadata_coalesce(struct {
    Metadata *schemametadata.MetadataSchema
    Type     *nativechecker.Type
  }{
    Metadata: props.Metadata,
    Type:     props.Type,
  })
}
