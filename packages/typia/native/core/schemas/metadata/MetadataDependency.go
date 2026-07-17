package metadata

import (
  "sync"

  nativeast "github.com/microsoft/typescript-go/shim/ast"
  nativechecker "github.com/microsoft/typescript-go/shim/checker"
)

// MetadataDependency routes the source files owning the declarations that
// metadata analysis consults to a per-checker listener. The project transform
// host registers a listener before transforming a file and receives every
// declaration file the analysis reads for that file's typia call sites, which
// it reports as the transform envelope's `dependencies` so bundler caches can
// invalidate generated validators when a consulted type's file changes.
//
// The registry is keyed by checker: analysis code deep inside the metadata
// iterators has the checker at hand but no transform context, while one
// transform host drives exactly one program (and checker) at a time. A
// sync.Map keeps unrelated programs in the same process (tests) isolated, and
// every touch is a no-op when no listener is registered (build and single-file
// modes register none).
var metadataDependency_listeners sync.Map

// MetadataDependency_listen registers the listener that receives every
// consulted declaration file name resolved through `checker`. The caller owns
// attribution (which transformed file the touches belong to) and filtering.
func MetadataDependency_listen(checker *nativechecker.Checker, listener func(fileName string)) {
  if checker == nil || listener == nil {
    return
  }
  metadataDependency_listeners.Store(checker, listener)
}

// MetadataDependency_release removes the listener registered for `checker`.
func MetadataDependency_release(checker *nativechecker.Checker) {
  if checker == nil {
    return
  }
  metadataDependency_listeners.Delete(checker)
}

// MetadataDependency_active reports whether a listener is registered for
// `checker`, so analysis code can skip walks performed only for collection.
func MetadataDependency_active(checker *nativechecker.Checker) bool {
  return metadataDependency_listener(checker) != nil
}

// MetadataDependency_touchType reports the declaration files of a consulted
// type: both the structural symbol (interface / class / enum / object literal)
// and the type-name symbol (a `type` alias), which differ for aliased types.
func MetadataDependency_touchType(checker *nativechecker.Checker, typ *nativechecker.Type) {
  if typ == nil {
    return
  }
  listener := metadataDependency_listener(checker)
  if listener == nil {
    return
  }
  visited := map[*nativeast.Symbol]bool{}
  metadataDependency_touchVisited(checker, listener, typ.Symbol(), visited)
  metadataDependency_touchVisited(checker, listener, nativechecker.Type_getTypeNameSymbol(typ), visited)
}

// MetadataDependency_touchSymbol reports the declaration files of a consulted
// symbol (e.g. an object property or a heritage target).
func MetadataDependency_touchSymbol(checker *nativechecker.Checker, symbol *nativeast.Symbol) {
  listener := metadataDependency_listener(checker)
  if listener == nil {
    return
  }
  metadataDependency_touchVisited(checker, listener, symbol, map[*nativeast.Symbol]bool{})
}

// MetadataDependency_touchTypeNode reports every type reference WRITTEN inside
// a type node (a call-site type argument, a heritage element) by resolving each
// referenced name to its symbol. This is the syntactic complement of the
// type-graph touches: an alias of an intrinsic (`type Id = string`) leaves no
// trace on checker types — the checker interns the intrinsic without an alias
// symbol — so only the written reference can register the alias' own file.
func MetadataDependency_touchTypeNode(checker *nativechecker.Checker, node *nativeast.Node) {
  listener := metadataDependency_listener(checker)
  if listener == nil || node == nil {
    return
  }
  metadataDependency_walkNode(checker, listener, node, map[*nativeast.Symbol]bool{})
}

func metadataDependency_listener(checker *nativechecker.Checker) func(fileName string) {
  if checker == nil {
    return nil
  }
  value, ok := metadataDependency_listeners.Load(checker)
  if ok == false {
    return nil
  }
  listener, ok := value.(func(fileName string))
  if ok == false {
    return nil
  }
  return listener
}

// metadataDependency_touchVisited reports the symbol's declaration files and
// walks the type references written inside declarations that carry type
// annotations (aliases, properties, methods, parameters, index signatures), so
// checker-collapsed references — an alias of an intrinsic consumed through a
// property or another alias — still register their declaring files. `visited`
// guards alias cycles and bounds repeated work within one touch.
func metadataDependency_touchVisited(
  checker *nativechecker.Checker,
  listener func(fileName string),
  symbol *nativeast.Symbol,
  visited map[*nativeast.Symbol]bool,
) {
  if symbol == nil || visited[symbol] {
    return
  }
  visited[symbol] = true
  for _, declaration := range symbol.Declarations {
    if declaration == nil {
      continue
    }
    if src := nativeast.GetSourceFileOfNode(declaration); src != nil {
      listener(src.FileName())
    }
    for _, surface := range metadataDependency_typeSurface(declaration) {
      metadataDependency_walkNode(checker, listener, surface, visited)
    }
  }
}

// metadataDependency_typeSurface selects the WRITTEN type nodes of a
// declaration: the whole node for a `type` alias (type parameters + aliased
// type), the annotation for properties and parameters, and parameter types +
// return type for methods, accessors, and index signatures. Bodies and
// initializers are excluded — a reference appearing only there is not part of
// the type the analysis consulted. Interface, class, and type-literal
// declarations contribute only their index signatures: every other member
// surfaces individually through property enumeration.
func metadataDependency_typeSurface(declaration *nativeast.Node) []*nativeast.Node {
  switch declaration.Kind {
  case nativeast.KindTypeAliasDeclaration:
    return []*nativeast.Node{declaration}
  case nativeast.KindInterfaceDeclaration,
    nativeast.KindClassDeclaration,
    nativeast.KindClassExpression,
    nativeast.KindTypeLiteral:
    // An index signature has no property symbol, so — unlike every other
    // member — it never reaches the apparent-property walk that registers a
    // member's declaring files. Its written key and value types are consulted
    // (the analysis reads both off each index info), so an alias used there
    // must register its file like any other consulted alias; without this the
    // aliased file changed the generated validator with no reported edge for a
    // bundler cache to invalidate (samchon/typia#2126). Members are surfaced
    // through this same selector, which keeps an index signature's own body-
    // free key/value contract as the boundary.
    output := []*nativeast.Node{}
    for _, member := range declaration.Members() {
      if member == nil || member.Kind != nativeast.KindIndexSignature {
        continue
      }
      output = append(output, metadataDependency_typeSurface(member)...)
    }
    return output
  case nativeast.KindPropertySignature,
    nativeast.KindPropertyDeclaration,
    nativeast.KindParameter:
    if annotation := declaration.Type(); annotation != nil {
      return []*nativeast.Node{annotation}
    }
    return nil
  case nativeast.KindMethodSignature,
    nativeast.KindMethodDeclaration,
    nativeast.KindGetAccessor,
    nativeast.KindSetAccessor,
    nativeast.KindIndexSignature:
    output := []*nativeast.Node{}
    for _, parameter := range declaration.Parameters() {
      if parameter == nil {
        continue
      }
      if annotation := parameter.Type(); annotation != nil {
        output = append(output, annotation)
      }
    }
    if annotation := declaration.Type(); annotation != nil {
      output = append(output, annotation)
    }
    return output
  }
  return nil
}

// metadataDependency_walkNode descends a written node and resolves every type
// reference it contains: `TypeReference` names, heritage / `extends`
// expressions, `typeof` targets, and `import("...").T` qualifiers. Each
// resolved symbol is touched (following import aliases to their targets),
// which in turn walks type-alias declarations transitively.
func metadataDependency_walkNode(
  checker *nativechecker.Checker,
  listener func(fileName string),
  node *nativeast.Node,
  visited map[*nativeast.Symbol]bool,
) {
  if node == nil {
    return
  }
  var name *nativeast.Node
  switch node.Kind {
  case nativeast.KindTypeReference:
    if ref := node.AsTypeReferenceNode(); ref != nil {
      name = ref.TypeName
    }
  case nativeast.KindExpressionWithTypeArguments:
    if expr := node.AsExpressionWithTypeArguments(); expr != nil {
      name = expr.Expression
    }
  case nativeast.KindTypeQuery:
    if query := node.AsTypeQueryNode(); query != nil {
      name = query.ExprName
    }
  case nativeast.KindImportType:
    if imported := node.AsImportTypeNode(); imported != nil {
      name = imported.Qualifier
    }
  }
  if name != nil {
    metadataDependency_touchVisited(checker, listener, metadataDependency_resolve(checker, listener, name), visited)
  }
  node.ForEachChild(func(child *nativeast.Node) bool {
    metadataDependency_walkNode(checker, listener, child, visited)
    return false
  })
}

// metadataDependency_resolve resolves a written reference name to its final
// symbol, following import aliases so the touched declarations are the real
// declaring files rather than the local import specifier. Every module the
// alias path traverses is reported on the way, because those intermediates
// SELECT which declaration the terminus is (see metadataDependency_touchPath).
func metadataDependency_resolve(
  checker *nativechecker.Checker,
  listener func(fileName string),
  name *nativeast.Node,
) *nativeast.Symbol {
  if checker == nil || name == nil {
    return nil
  }
  symbol := checker.GetSymbolAtLocation(name)
  if symbol == nil {
    return nil
  }
  if symbol.Flags&nativeast.SymbolFlagsAlias != 0 {
    metadataDependency_touchPath(checker, listener, symbol)
    if resolved := nativechecker.Checker_getAliasedSymbol(checker, symbol); resolved != nil {
      symbol = resolved
    }
  }
  return symbol
}

// metadataDependency_touchPath reports every module an alias path traverses on
// its way to the declaration it finally names.
//
// Resolving an alias straight to its terminus reports where the type is
// declared, not what was consulted to find it. A barrel (`export { Alpha } from
// "./alpha"`) never holds the declaration, yet re-pointing that line at another
// module changes the generated validator — so a consumer that watches only the
// terminus has no edge to invalidate and serves a stale validator
// (samchon/typia#2126). Walking the path hop by hop reports each intermediate.
//
// Only the modules actually traversed for THIS reference are reported: the walk
// steps through the single named export it followed, never the rest of a
// barrel's exports, keeping unrelated siblings out of the envelope.
func metadataDependency_touchPath(
  checker *nativechecker.Checker,
  listener func(fileName string),
  symbol *nativeast.Symbol,
) {
  visited := map[*nativeast.Symbol]bool{}
  for symbol != nil && symbol.Flags&nativeast.SymbolFlagsAlias != 0 && visited[symbol] == false {
    visited[symbol] = true
    declaration := nativechecker.Checker_getDeclarationOfAliasSymbol(checker, symbol)
    if declaration == nil {
      return
    }
    // The file that WRITES this hop (the barrel's own `export ... from` line).
    if src := nativeast.GetSourceFileOfNode(declaration); src != nil {
      listener(src.FileName())
    }
    specifier := metadataDependency_moduleSpecifier(declaration)
    if specifier == nil {
      return
    }
    // A module specifier's symbol is its resolved module, whose declaration is
    // the target source file. Reporting it keeps the next module registered
    // even when the hop cannot be stepped through below (`export *` publishes
    // no local specifier symbol to follow).
    module := checker.GetSymbolAtLocation(specifier)
    if module == nil {
      return
    }
    for _, moduleDeclaration := range module.Declarations {
      if src := nativeast.GetSourceFileOfNode(moduleDeclaration); src != nil {
        listener(src.FileName())
      }
    }
    symbol = metadataDependency_exported(module, declaration)
  }
}

// metadataDependency_exported steps one alias hop: the member `module` exports
// under the name the alias declaration reads (`propertyName` when the hop
// renames, e.g. `export { Beta as Alpha }`). Returns nil when the export cannot
// be named locally, which stops the walk at an already-reported module.
func metadataDependency_exported(module *nativeast.Symbol, declaration *nativeast.Node) *nativeast.Symbol {
  if module.Exports == nil {
    return nil
  }
  name := declaration.PropertyNameOrName()
  if name == nil {
    return nil
  }
  switch name.Kind {
  case nativeast.KindIdentifier, nativeast.KindStringLiteral:
    return module.Exports[name.Text()]
  }
  return nil
}

// metadataDependency_moduleSpecifier returns the module specifier of the
// import / export declaration an alias declaration belongs to, or nil when the
// alias has no module specifier to traverse (a local `import X = Y`, an
// `export =`, or an export clause with no `from`). Node.ModuleSpecifier panics
// on other kinds, so every kind is matched explicitly.
func metadataDependency_moduleSpecifier(declaration *nativeast.Node) *nativeast.Node {
  for node := declaration; node != nil; node = node.Parent {
    switch node.Kind {
    case nativeast.KindImportDeclaration, nativeast.KindExportDeclaration:
      return node.ModuleSpecifier()
    case nativeast.KindSourceFile:
      return nil
    }
  }
  return nil
}
