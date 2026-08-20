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

// MetadataDependency_IListener is what a registered host receives while one
// file is transformed. `File` is the report; `Unbounded` is the admission that
// the report cannot be the whole story.
type MetadataDependency_IListener struct {
  // File receives each consulted declaration file name.
  File func(fileName string)
  // Callee receives a declaration file name reached while deciding WHICH
  // declaration a call resolves to, rather than what a consulted type is built
  // from.
  //
  // The two differ on default libraries alone, and only once the libraries are
  // real files (`libReplacement`, `noembed`). A replacement really can change a
  // generated validator, so the type channel withholds the file that consulted
  // one. It can never change which declaration a call resolves to: typia
  // recognizes its own calls by a path ending in `/typia/lib/<file>.d.ts` or
  // `/typia/src/<file>.ts`, and a file the compiler classifies as a default
  // library satisfies neither, whatever its path on disk. Withholding there
  // costs a file its declaration for calling `table.get(...)` and, under
  // `noembed`, for calling anything at all (samchon/typia#2361).
  //
  // A host that does not distinguish them may leave this nil; the registry
  // falls back to File.
  Callee func(fileName string)
  // Unbounded reports that the analysis consulted something no file list can
  // bound: a declaration whose type this package can only read from an
  // inferred position, or a callee whose identity is decided by an expression
  // that names nothing.
  //
  // A host that only widens invalidation may ignore it, because an unreported
  // file is still watched through the reference closure. A host that narrows to
  // the reported list cannot: it has to leave the file out of that narrowing,
  // since the list it would vouch for is missing an input nobody can enumerate.
  Unbounded func()
}

// MetadataDependency_listen registers the listener that receives every
// consulted declaration file name resolved through `checker`. The caller owns
// attribution (which transformed file the touches belong to) and filtering.
func MetadataDependency_listen(checker *nativechecker.Checker, listener MetadataDependency_IListener) {
  if checker == nil || listener.File == nil {
    return
  }
  if listener.Callee == nil {
    listener.Callee = listener.File
  }
  metadataDependency_listeners.Store(checker, listener)
}

// MetadataDependency_unbounded raises the admission from outside this package.
// The transform raises it for a typia call that takes its validated type from
// the value argument, which no written type node bounds.
func MetadataDependency_unbounded(checker *nativechecker.Checker) {
  metadataDependency_listener(checker).unbounded()
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
  return metadataDependency_listener(checker).active()
}

// MetadataDependency_touchType reports the declaration files of a consulted
// type: both the structural symbol (interface / class / enum / object literal)
// and the type-name symbol (a `type` alias), which differ for aliased types.
func MetadataDependency_touchType(checker *nativechecker.Checker, typ *nativechecker.Type) {
  if typ == nil {
    return
  }
  listener := metadataDependency_listener(checker)
  if listener.active() == false {
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
  if listener.active() == false {
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
  if listener.active() == false || node == nil {
    return
  }
  metadataDependency_walkNode(checker, listener, node, map[*nativeast.Symbol]bool{})
}

// MetadataDependency_touchCallee reports the files that decide WHICH
// declaration a call expression's callee names.
//
// typia recognizes its own call sites by the source file that declares the
// resolved signature, so every module an import or re-export chain passes
// through chooses whether a call is rewritten at all. Re-pointing a barrel from
// `export { is } from "./local"` to `export { is } from "typia"` turns an
// untouched file into a generated validator, and the reverse turns a validator
// back into a plain call. The type-graph touches cannot see either: they report
// what the validated type is, never what selected the callee.
//
// This runs for every call expression the transformer examines rather than only
// for recognized typia calls, because a call that is not typia's today is
// exactly the one an edit to one of those files makes typia's tomorrow. A
// callee whose identity no name in it decides raises the unbounded admission.
func MetadataDependency_touchCallee(checker *nativechecker.Checker, callee *nativeast.Node) {
  listener := metadataDependency_listener(checker)
  if listener.active() == false || callee == nil {
    return
  }
  if metadataDependency_walkCallee(checker, listener, callee, false) == false {
    listener.unbounded()
  }
}

// metadataDependency_walkCallee reports every name written in a callee and
// answers whether those names decide which declaration the call resolves to.
//
// Two shapes are treated specially, and both are about where a call's identity
// actually comes from:
//
//   - A nested call contributes its own callee AND the names it is applied to,
//     but only the callee decides boundedness. Every indirection a caller writes
//     -- a factory, a barrel, a namespace alias, a local binding -- sits on the
//     callee chain, while a generic pass-through carries identity through the
//     argument instead (`pick(ns).is<T>(x)`), so both are reported;
//     metadataDependency_touchApplied says why the applied walk's answer is
//     dropped. Reporting the names is not the whole answer there:
//     metadataDependency_calleeBounded says why a callable reached inside a
//     nested call must also write its return type. What stays given up is an
//     overload selected by an argument's TYPE, or by a borrowed VALUE, since no
//     written name on the chain carries either.
//   - A function literal is where the walk stops. Written directly in callee
//     position it is the most bounded declaration there is: the call resolves to
//     the literal itself, in this very file, and its body is nobody's input.
//     Reached through a nested call (`(() => is)()<T>(x)`) it is the opposite:
//     the identity is whatever its body returns, and no set of files describes
//     that, so the walk reports unbounded instead of guessing.
//
// Every other expression composes sub-expressions, so its children are walked
// and each name in them reported.
func metadataDependency_walkCallee(
  checker *nativechecker.Checker,
  listener MetadataDependency_IListener,
  node *nativeast.Node,
  nested bool,
) bool {
  if node == nil {
    return false
  }
  switch node.Kind {
  case nativeast.KindArrowFunction,
    nativeast.KindFunctionExpression,
    nativeast.KindFunctionDeclaration,
    nativeast.KindClassExpression,
    nativeast.KindClassDeclaration,
    nativeast.KindMethodDeclaration,
    nativeast.KindGetAccessor,
    nativeast.KindSetAccessor,
    nativeast.KindConstructor:
    return nested == false
  case nativeast.KindCallExpression,
    nativeast.KindNewExpression:
    metadataDependency_touchApplied(checker, listener, node.Arguments())
    return metadataDependency_walkCallee(checker, listener, node.Expression(), true)
  case nativeast.KindTaggedTemplateExpression:
    tagged := node.AsTaggedTemplateExpression()
    metadataDependency_touchApplied(checker, listener, []*nativeast.Node{tagged.Template})
    return metadataDependency_walkCallee(checker, listener, tagged.Tag, true)
  case nativeast.KindIdentifier,
    nativeast.KindPrivateIdentifier,
    nativeast.KindThisKeyword,
    nativeast.KindSuperKeyword,
    nativeast.KindPropertyAccessExpression,
    nativeast.KindElementAccessExpression,
    nativeast.KindQualifiedName:
    // The whole access resolves to the member the call names; walking on to its
    // qualifier reports whatever selected the object that publishes it, and a
    // module other than the caller may declare that (`helpers.is`).
    metadataDependency_touchDeclarations(checker, listener, node, nested)
  }
  bounded := true
  node.ForEachChild(func(child *nativeast.Node) bool {
    if metadataDependency_walkCallee(checker, listener, child, nested) == false {
      bounded = false
    }
    return false
  })
  return bounded
}

// metadataDependency_touchApplied reports the names a nested call is applied to,
// without letting their shape decide the caller's boundedness.
//
// A generic pass-through carries a callee's identity through what it is applied
// to, not through its own name: `pick(ns).is<T>(x)` resolves to typia's `is`
// because `ns` holds the typia namespace, so the file declaring `ns` chooses
// whether this call is rewritten at all -- and the callee chain alone never
// names it. Reproduced: `main.ts` was declared complete reporting only `foo.ts`
// and `pick.ts` (samchon/typia#2357).
//
// The walk's answer is deliberately dropped rather than combined. An argument's
// shape is not the caller's identity: a function literal handed to
// `arr.map(...).filter(...)` would otherwise withhold every file that chains an
// array method, for a body that decides nothing about which `filter` this is.
// Dropping it also keeps the walk's own boundary -- it stops at a function
// literal instead of descending -- so no file is charged with the identifiers
// inside a callback.
//
// What stays unreported is the same boundary the callee chain already states: an
// argument that is itself computed (`pick(getNs())`) names its own callee and no
// further. That one no longer over-declares, because the callee it names is a
// callable whose inferred return type withholds the caller
// (metadataDependency_calleeBounded); an overload selected by an argument's
// TYPE, or by a borrowed VALUE, is still decided by something no written name
// carries.
func metadataDependency_touchApplied(
  checker *nativechecker.Checker,
  listener MetadataDependency_IListener,
  applied []*nativeast.Node,
) {
  for _, node := range applied {
    metadataDependency_walkCallee(checker, listener, node, true)
  }
}

// metadataDependency_touchDeclarations reports one written reference's own
// declaring files, following alias hops but without walking the type surface of
// what it names. The caller asks which declaration a name selects, not what
// that declaration's type is built from; the type graph reports the latter
// where it is actually consulted.
//
// `nested` says the reference sits inside a nested call, and there the question
// changes. The outermost callee's identity IS the declaration this resolves to,
// whose file is reported on the line above, so how that declaration was written
// cannot matter. One call in, the identity is the inner call's RETURN TYPE, and
// an unbounded declaration -- `const getNs = () => ns`, `const FLAG = RAW` --
// carries it from a file no written name on this chain reaches. Reporting the
// names without admitting that declared three shapes complete while an edit to
// an unreported file deleted the generated validator outright
// (samchon/typia#2360).
func metadataDependency_touchDeclarations(
  checker *nativechecker.Checker,
  listener MetadataDependency_IListener,
  reference *nativeast.Node,
  nested bool,
) {
  if checker == nil {
    return
  }
  symbol := checker.GetSymbolAtLocation(reference)
  if symbol == nil {
    return
  }
  // Everything this function reaches was reached to decide which declaration a
  // name selects, so all of it belongs to the identity channel -- the alias hops
  // as much as the terminus.
  report := listener.Callee
  if symbol.Flags&nativeast.SymbolFlagsAlias != 0 {
    metadataDependency_touchPath(checker, listener, symbol, report)
    if resolved := nativechecker.Checker_getAliasedSymbol(checker, symbol); resolved != nil {
      symbol = resolved
    }
  }
  for _, declaration := range symbol.Declarations {
    if src := nativeast.GetSourceFileOfNode(declaration); src != nil {
      report(src.FileName())
    }
    if nested && metadataDependency_calleeBounded(declaration) == false {
      listener.unbounded()
    }
  }
}

func metadataDependency_listener(checker *nativechecker.Checker) MetadataDependency_IListener {
  if checker == nil {
    return MetadataDependency_IListener{}
  }
  value, ok := metadataDependency_listeners.Load(checker)
  if ok == false {
    return MetadataDependency_IListener{}
  }
  listener, ok := value.(MetadataDependency_IListener)
  if ok == false {
    return MetadataDependency_IListener{}
  }
  return listener
}

// active reports whether a host is collecting through this listener.
func (listener MetadataDependency_IListener) active() bool {
  return listener.File != nil
}

// unbounded raises the admission when the registered host asked for it, so
// every call site can report unconditionally instead of guarding twice.
func (listener MetadataDependency_IListener) unbounded() {
  if listener.Unbounded != nil {
    listener.Unbounded()
  }
}

// metadataDependency_touchVisited reports the symbol's declaration files and
// walks the type references written inside declarations that carry type
// annotations (aliases, properties, methods, parameters, index signatures), so
// checker-collapsed references — an alias of an intrinsic consumed through a
// property or another alias — still register their declaring files. A
// declaration whose type is not written on it raises the unbounded admission
// instead. `visited` guards alias cycles and bounds repeated work within one
// touch.
func metadataDependency_touchVisited(
  checker *nativechecker.Checker,
  listener MetadataDependency_IListener,
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
      listener.File(src.FileName())
    }
    if metadataDependency_bounded(declaration) == false {
      listener.unbounded()
    }
    metadataDependency_touchName(checker, listener, declaration, visited)
    for _, surface := range metadataDependency_typeSurface(declaration) {
      metadataDependency_walkNode(checker, listener, surface, visited)
    }
  }
}

// metadataDependency_touchName reports the files that decide a member's KEY
// when the key is computed.
//
// A validator indexes the property by name — `interface Doc { [Kind.A]: number
// }` emits `input.alpha` — so the enum member's value is read into the output
// exactly the way an `enum` member's own value is, and it is written in
// whatever file declares it. The declaration's written type says nothing about
// it, and neither does the type graph: the resolved key is an interned string
// literal with no symbol to follow. Renaming `Kind.A` therefore changed the
// generated validator with no reported edge for a bundler cache to invalidate
// (samchon/typia#2126, samchon/typia#2357).
//
// Only a computed name needs this. An identifier or string-literal member name
// is written on the declaration itself, and its file is already reported.
func metadataDependency_touchName(
  checker *nativechecker.Checker,
  listener MetadataDependency_IListener,
  declaration *nativeast.Node,
  visited map[*nativeast.Symbol]bool,
) {
  name := declaration.Name()
  if name == nil || name.Kind != nativeast.KindComputedPropertyName {
    return
  }
  metadataDependency_walkName(checker, listener, name.Expression(), visited)
}

// metadataDependency_walkName reports the declarations a computed key's
// expression names, and admits when nothing written bounds it.
//
// A literal key needs no report: `["alpha"]` is written here, so no other file
// decides it. Every other shape is a reference, and resolving it through
// metadataDependency_touchVisited is what makes the report transitive: the
// symbol's own declaration is reported, its alias path registers the barrel it
// traveled, and metadataDependency_bounded answers whether that declaration
// fixes the value or borrows it — `const KEY = "gamma"` is bounded while `const
// KEY = other.VALUE` is not, exactly as for an enum member.
//
// The qualifier is walked as well as the whole reference. `Kind.A` resolves
// straight to the enum member, which reports the file declaring it but not the
// modules the reference traveled to select `Kind`; those are what a re-pointed
// barrel changes.
//
// Every other expression raises the unbounded admission rather than a guess: a
// call or a substituted template takes its value from evaluation, which no file
// list bounds. Only the kinds a property enumeration actually delivers are
// named: a string, no-substitution template, or numeric literal key, a bare
// name, and a property access each declare a property, while a parenthesized
// reference, a bigint literal, and an element access declare none at all -- so
// the walk never sees those, and refusing to vouch for a shape nobody has
// exhibited costs nothing.
func metadataDependency_walkName(
  checker *nativechecker.Checker,
  listener MetadataDependency_IListener,
  expression *nativeast.Node,
  visited map[*nativeast.Symbol]bool,
) {
  if expression == nil {
    listener.unbounded()
    return
  }
  switch expression.Kind {
  case nativeast.KindStringLiteral,
    nativeast.KindNoSubstitutionTemplateLiteral,
    nativeast.KindNumericLiteral:
    return
  case nativeast.KindIdentifier,
    nativeast.KindPropertyAccessExpression:
    // A reference the checker cannot resolve takes the fall-through below
    // rather than an exit of its own. Nothing reaches it: a name resolving to
    // no symbol declares no property symbol either -- the member becomes a
    // dynamic key instead -- and this walk only ever runs on a declaration the
    // property enumeration already handed over.
    if symbol := metadataDependency_resolve(checker, listener, expression); symbol != nil {
      metadataDependency_touchVisited(checker, listener, symbol, visited)
      metadataDependency_touchQualifier(checker, listener, expression, visited)
      return
    }
  }
  listener.unbounded()
}

// metadataDependency_calleeBounded reports whether a declaration reached inside
// a nested call pins the identity of what that call RETURNS.
//
// A nested call's identity is its return type, so the question here is only
// ever asked of callables -- and of a variable whose initializer is one, which
// is the same declaration spelled differently. A callable pins the identity
// when its return type is written; when it is inferred, the identity comes from
// whatever the body happens to return, which lives in a file no name on the
// callee chain reaches. `const getNs = () => ns` and `function getNs() { return
// ns; }` are that shape, and both declared their caller complete while an edit
// to the unreported `ns.ts` deleted the generated validator outright
// (samchon/typia#2360).
//
// Everything else stays bounded on purpose, and metadataDependency_bounded is
// deliberately NOT consulted here. It answers a different question -- whether a
// declaration's TYPE is written where the type walk can read it -- and it calls
// `const ns = typia` unbounded for want of an annotation. On this channel that
// declaration is fine: the walk writes the name `ns`, so `ns.ts` is reported
// and an edit to it invalidates the caller. Withholding on it would take back
// samchon/typia#2357, whose whole point is that such a caller stays declared.
//
// What that leaves open is an overload selected by a borrowed VALUE (`const
// FLAG = RAW; sel(FLAG).is<T>(x)`): `flag.ts` is reported, `rawflag.ts` is not,
// and the two are structurally indistinguishable from the pair above.
// Separating them needs the initializer chain followed and reported, not a
// boundedness answer.
func metadataDependency_calleeBounded(declaration *nativeast.Node) bool {
  if metadataDependency_calleeCallable(declaration) {
    return declaration.Type() != nil
  }
  if declaration.Kind == nativeast.KindVariableDeclaration {
    if initializer := declaration.Initializer(); initializer != nil &&
      metadataDependency_calleeCallable(initializer) {
      return declaration.Type() != nil || initializer.Type() != nil
    }
  }
  return true
}

// metadataDependency_calleeCallable reports whether a node is a callable whose
// written return type would pin what a call on it produces.
//
// A construct signature is absent on purpose: `new X()` returns `X`, and the
// class is the declaration the walk already reports.
func metadataDependency_calleeCallable(node *nativeast.Node) bool {
  switch node.Kind {
  case nativeast.KindFunctionDeclaration,
    nativeast.KindFunctionExpression,
    nativeast.KindArrowFunction,
    nativeast.KindMethodDeclaration,
    nativeast.KindMethodSignature,
    nativeast.KindCallSignature,
    nativeast.KindFunctionType,
    nativeast.KindGetAccessor:
    return true
  }
  return false
}

// metadataDependency_bounded reports whether a declaration's type is written
// where this walk can read it. A declaration that fails it raises the unbounded
// admission, which costs the file being transformed its completeness
// declaration and nothing else.
//
// The answer is NO for every kind this switch does not name, and that direction
// is the whole point. Under-reporting a file is safe -- it keeps the host-owned
// reference closure -- while declaring a file whose inputs were not enumerated
// serves a stale validator, so a declaration kind nobody thought about has to
// cost narrowing rather than correctness.
//
// What makes a kind bounded is that its type is either written on it, surfaced
// by metadataDependency_typeSurface, or absent entirely (a module, an alias
// hop, an enum's own declaration). What makes one unbounded is inference: an
// object-literal member and a destructured binding take their type from an
// expression, and so does a property, parameter, or variable with no
// annotation. Following that means following type inference over arbitrary
// expressions -- a call's return type, an overload's selection, a conditional's
// branches, a contextually typed parameter -- which is the same problem a typia
// call with no written type argument has, and it gets the same answer
// (samchon/typia#2126, samchon/typia#2357).
//
// Only kinds an input actually reaches are named. A tuple element and a JSDoc
// `@property` / `@param` tag are not: each is reached through the written node
// that spells it -- the alias or literal spelling the tuple, the typedef owning
// the tag -- which metadataDependency_walkNode descends whole, so no property
// enumeration ever hands one of them here. Naming them changed no envelope in
// either direction, which is the only evidence that settles it;
// TestProjectDependenciesNamedTupleMemberTransform and
// TestProjectDependenciesJsDocTypedefTransform are the fixtures that measured
// it and would fail if either kind started arriving.
func metadataDependency_bounded(declaration *nativeast.Node) bool {
  switch declaration.Kind {
  case nativeast.KindTypeAliasDeclaration,
    nativeast.KindJSTypeAliasDeclaration,
    nativeast.KindInterfaceDeclaration,
    nativeast.KindClassDeclaration,
    nativeast.KindClassExpression,
    nativeast.KindTypeLiteral,
    nativeast.KindMappedType,
    nativeast.KindTypeParameter,
    nativeast.KindEnumDeclaration:
    // Structural declarations: metadataDependency_typeSurface hands their
    // written types to the walk, and their members surface individually.
    return true
  case nativeast.KindMethodSignature,
    nativeast.KindMethodDeclaration,
    nativeast.KindGetAccessor,
    nativeast.KindSetAccessor,
    nativeast.KindIndexSignature,
    nativeast.KindCallSignature,
    nativeast.KindConstructSignature,
    nativeast.KindFunctionType,
    nativeast.KindConstructorType,
    nativeast.KindFunctionDeclaration,
    nativeast.KindFunctionExpression,
    nativeast.KindArrowFunction,
    nativeast.KindConstructor,
    nativeast.KindClassStaticBlockDeclaration:
    // Callables. An analysis emits one as `typeof x === "function"` and reads
    // no part of its signature, which is the contract
    // TestProjectDependenciesSignatureAliasTransform states, so an inferred
    // return type is not an input either.
    return true
  case nativeast.KindSourceFile,
    nativeast.KindModuleDeclaration,
    nativeast.KindNamespaceExportDeclaration,
    nativeast.KindImportDeclaration,
    nativeast.KindImportClause,
    nativeast.KindImportSpecifier,
    nativeast.KindImportEqualsDeclaration,
    nativeast.KindNamespaceImport,
    nativeast.KindNamespaceExport,
    nativeast.KindExportDeclaration,
    nativeast.KindExportSpecifier,
    nativeast.KindExportAssignment:
    // Modules and alias hops carry no type of their own; the hop itself is
    // reported by metadataDependency_touchPath and the terminus is resolved
    // separately.
    return true
  case nativeast.KindPropertySignature,
    nativeast.KindPropertyDeclaration,
    nativeast.KindParameter,
    nativeast.KindVariableDeclaration:
    return declaration.Type() != nil || metadataDependency_literal(declaration.Initializer())
  case nativeast.KindEnumMember,
    nativeast.KindPropertyAssignment:
    // An enum member's value is read straight into the generated validator, and
    // an object-literal member's type is its initializer. Both are written here
    // when the initializer is a literal or, for an auto-numbered enum member,
    // absent; anything else names a value some other file may declare.
    initializer := declaration.Initializer()
    return initializer == nil || metadataDependency_literal(initializer)
  }
  return false
}

// metadataDependency_literal reports an initializer that fixes a declaration's
// type inside the declaration itself, so no other file can decide it.
func metadataDependency_literal(initializer *nativeast.Node) bool {
  if initializer == nil {
    return false
  }
  switch initializer.Kind {
  case nativeast.KindNumericLiteral,
    nativeast.KindBigIntLiteral,
    nativeast.KindStringLiteral,
    nativeast.KindNoSubstitutionTemplateLiteral,
    nativeast.KindRegularExpressionLiteral,
    nativeast.KindTrueKeyword,
    nativeast.KindFalseKeyword,
    nativeast.KindNullKeyword:
    return true
  case nativeast.KindParenthesizedExpression:
    return metadataDependency_literal(initializer.Expression())
  case nativeast.KindPrefixUnaryExpression:
    // `-1` is how a negative number is written, and TypeScript reads the sign
    // and the literal as one constant. Only the numeric operators qualify: `!x`
    // and `~x` say nothing about where x came from.
    unary := initializer.AsPrefixUnaryExpression()
    switch unary.Operator {
    case nativeast.KindMinusToken, nativeast.KindPlusToken:
      switch unary.Operand.Kind {
      case nativeast.KindNumericLiteral, nativeast.KindBigIntLiteral:
        return true
      }
    }
  }
  return false
}

// metadataDependency_typeSurface selects the WRITTEN type nodes of a
// declaration: the whole node for a `type` alias, a mapped type, or a type
// parameter (constraint and default included), the type parameters and index
// signatures of an interface or class, the annotation for properties,
// parameters, and variables, and parameter types + return type for methods,
// accessors, and index signatures. Bodies and initializers are excluded — a
// reference appearing only there is not part of the type the analysis consulted,
// and a declaration that has only an initializer to go on is reported unbounded
// by metadataDependency_bounded rather than guessed at.
//
// Interface, class, and type-literal declarations contribute only their index
// signatures: every other member surfaces individually through property
// enumeration.
func metadataDependency_typeSurface(declaration *nativeast.Node) []*nativeast.Node {
  switch declaration.Kind {
  case nativeast.KindTypeAliasDeclaration,
    nativeast.KindJSTypeAliasDeclaration,
    nativeast.KindMappedType,
    nativeast.KindTypeParameter:
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
    //
    // A call or construct signature is symbol-less in the same way and is
    // deliberately NOT surfaced: the analysis emits a callable as `typeof x ===
    // "function"` and never reads its parameter or return types, so registering
    // them would invalidate consumers on edits that cannot change the output.
    // TestProjectDependenciesSignatureAliasTransform is that boundary.
    // A type parameter is not surfaced from here even though the declaration
    // owns the list: a parameter the members use is reached through the member
    // that uses it, and one no member uses is not consulted at all, so appending
    // the list would report an alias behind an unused default. The parameter's
    // own declaration carries its constraint and default, and this same selector
    // surfaces those when the walk arrives there.
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
    nativeast.KindParameter,
    nativeast.KindVariableDeclaration:
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
  listener MetadataDependency_IListener,
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
    metadataDependency_touchQualifier(checker, listener, name, visited)
  }
  node.ForEachChild(func(child *nativeast.Node) bool {
    metadataDependency_walkNode(checker, listener, child, visited)
    return false
  })
}

// metadataDependency_touchQualifier resolves every prefix of a qualified
// reference, so the modules that SELECTED the namespace half are reported too.
//
// The checker answers a qualified name with its terminus: `Kind.A` hands back
// the enum member, which is not an alias, so metadataDependency_resolve finds no
// path to walk and the barrel between the caller and the enum goes unreported --
// while `Kind` alone would have been an alias and reported it. Re-pointing
// `export { Kind } from "./kind"` at another enum changes the constant the
// validator compares against, so that barrel is an input like any other
// (samchon/typia#2126, samchon/typia#2357).
//
// Each prefix is resolved the same way the terminus is, which keeps a nested
// qualification (`outer.inner.Type`) reported hop by hop and costs nothing for a
// bare name, whose prefix chain is empty.
func metadataDependency_touchQualifier(
  checker *nativechecker.Checker,
  listener MetadataDependency_IListener,
  name *nativeast.Node,
  visited map[*nativeast.Symbol]bool,
) {
  for qualifier := metadataDependency_left(name); qualifier != nil; qualifier = metadataDependency_left(qualifier) {
    metadataDependency_touchVisited(checker, listener, metadataDependency_resolve(checker, listener, qualifier), visited)
  }
}

// metadataDependency_left returns the namespace half of a qualified reference,
// in either the type spelling (`A.B`) or the value spelling (`a.b`), and nil for
// a bare name that qualifies nothing.
func metadataDependency_left(node *nativeast.Node) *nativeast.Node {
  switch node.Kind {
  case nativeast.KindQualifiedName:
    return node.AsQualifiedName().Left
  case nativeast.KindPropertyAccessExpression:
    return node.Expression()
  }
  return nil
}

// metadataDependency_resolve resolves a written reference name to its final
// symbol, following import aliases so the touched declarations are the real
// declaring files rather than the local import specifier. Every module the
// alias path traverses is reported on the way, because those intermediates
// SELECT which declaration the terminus is (see metadataDependency_touchPath).
func metadataDependency_resolve(
  checker *nativechecker.Checker,
  listener MetadataDependency_IListener,
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
    // The type walk: a hop reached here was reached because a consulted type is
    // built from what it publishes, so it reports on the consultation channel.
    metadataDependency_touchPath(checker, listener, symbol, listener.File)
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
  listener MetadataDependency_IListener,
  symbol *nativeast.Symbol,
  report func(fileName string),
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
      report(src.FileName())
    }
    specifier := metadataDependency_moduleSpecifier(declaration)
    if specifier == nil {
      // A `from`-less `export { Alpha }` re-publishes a LOCAL binding, which is
      // itself an alias when the file imported the name first (`import { Alpha }
      // from "./mid"; export { Alpha };`). Continuing from that local keeps the
      // module it reads (`./mid`) on the path instead of ending the walk here.
      symbol = metadataDependency_local(declaration)
      continue
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
        report(src.FileName())
      }
    }
    symbol = metadataDependency_exported(module, declaration)
  }
}

// metadataDependency_exported steps one alias hop to the member `module`
// publishes under the name this declaration reads: `default` for an import
// clause, and for a named import / export specifier its property name when the
// hop renames (`export { Beta as Alpha }`) or its own name otherwise.
//
// Only those kinds are stepped. Any other alias binds the whole module rather
// than one export — a namespace import above all — so its local name is not an
// export name at all; looking one up would land on whatever member happens to
// share that name and report files the reference never consults. Returning nil
// stops the walk at the module already reported, which loses no edge: the
// terminus is resolved separately by the checker.
func metadataDependency_exported(module *nativeast.Symbol, declaration *nativeast.Node) *nativeast.Symbol {
  if module.Exports == nil {
    return nil
  }
  switch declaration.Kind {
  case nativeast.KindImportClause:
    // ast.InternalSymbolNameDefault, which the shim does not re-export.
    return module.Exports["default"]
  case nativeast.KindImportSpecifier, nativeast.KindExportSpecifier:
    name := declaration.PropertyNameOrName()
    if name == nil {
      return nil
    }
    switch name.Kind {
    case nativeast.KindIdentifier, nativeast.KindStringLiteral:
      return module.Exports[name.Text()]
    }
  }
  return nil
}

// metadataDependency_local returns the local binding a `from`-less export
// specifier re-publishes, so a walk that reaches one can continue through the
// import that bound the name. Other declaration kinds have no such local to
// resume from.
func metadataDependency_local(declaration *nativeast.Node) *nativeast.Symbol {
  if declaration.Kind != nativeast.KindExportSpecifier {
    return nil
  }
  name := declaration.PropertyNameOrName()
  if name == nil || name.Kind != nativeast.KindIdentifier {
    return nil
  }
  source := nativeast.GetSourceFileOfNode(declaration)
  if source == nil {
    return nil
  }
  locals := source.AsNode().LocalsContainerData()
  if locals == nil {
    return nil
  }
  return locals.Locals[name.Text()]
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
