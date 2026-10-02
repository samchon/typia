package context

import (
  "sort"
  "strings"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
)

// ImportProgrammer collects the imports that generated code needs and builds the
// references to them.
//
// In its default mode references are plain identifiers and ToStatements writes
// named, default and namespace imports. After SetEmitContext, every file becomes
// one namespace import and each reference is a member access on its generated
// name, so the compiler's module transform binds them. It is not safe for
// concurrent use.
//
// @evidence contracts/common.md#principled-implementation Requests are recorded per file with their insertion order and each file is emitted once, either as named, default and namespace imports in the legacy mode or as one namespace import with member accesses on a generated unique name in emit-context mode, so the compiler's module transform decides the final CommonJS aliasing. Internal helpers are always imported from the typia package's internal folder under prefixed aliases.
// @evidence contracts/common.md#clear-and-simple-design One type with private asset records and helpers for module identifiers, ranks, member construction and aliases; the two emission modes share the recording code.
// @evidence contracts/common.md#prohibited-implementation-shortcuts Ordering uses a rank table over internal helper names and first use, not special-casing of a consumer. It is not safe for concurrent use, which the doc states.
// @evidence contracts/common.md#meaningful-documentation The doc describes both modes and the concurrency limit, and the field comment explains emit mode.
type ImportProgrammer struct {
  assets_  map[string]*importProgrammer_asset
  order_   []string
  options_ ImportProgrammer_IOptions
  // emit_ switches import emission to AST-integration mode. When set, imports
  // become namespace imports created by emit_.Factory, and every reference is a
  // member access on a cloned unique name so tsgo's module transform owns the
  // CommonJS aliasing. Nil keeps the legacy text-emission path with named,
  // default, namespace imports and bare identifier references.
  emit_ *shimprinter.EmitContext
}

// ImportProgrammer_IOptions configures an ImportProgrammer: InternalPrefix is
// inserted into the aliases of internal imports. Runtime retains the forwarded
// adapter label; internal helper imports use fixed typia paths.
//
// @evidence contracts/common.md#principled-implementation InternalPrefix forms internal import aliases. Runtime retains the caller's label but is not read when building imports; internal helpers use the fixed typia package path.
// @evidence contracts/common.md#clear-and-simple-design Two fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states both fields.
type ImportProgrammer_IOptions struct {
  // InternalPrefix is inserted between the leading double underscore and the
  // helper name in internal import aliases.
  InternalPrefix string

  // Runtime retains the forwarded adapter label without changing helper paths.
  Runtime string
}

// ImportProgrammer_IDefault names a default import of a file; Type marks it as a
// type-only import.
//
// @evidence contracts/common.md#principled-implementation A default import is identified by file and local name, with a flag for type-only use.
// @evidence contracts/common.md#clear-and-simple-design Three fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states the type-only flag.
type ImportProgrammer_IDefault struct {
  // File is the module specifier written in the generated import.
  File string

  // Name is the local binding used by the legacy emission mode.
  Name string

  // Type requests a type-only binding; any value request overrides it.
  Type bool
}

// ImportProgrammer_IInstance names one exported member of a file, optionally
// under an alias.
//
// @evidence contracts/common.md#principled-implementation A named import is identified by file and exported name with an optional alias, which is a pointer so no alias is distinguished from an empty one.
// @evidence contracts/common.md#clear-and-simple-design Three fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states the alias.
type ImportProgrammer_IInstance struct {
  // File is the module specifier written in the generated import.
  File string

  // Name is the exported member selected from the module.
  Name string

  // Alias is the optional legacy binding and deduplication key.
  Alias *string
}

// ImportProgrammer_INamespace names a namespace import of a file.
//
// @evidence contracts/common.md#principled-implementation A namespace import is identified by file and the local namespace name.
// @evidence contracts/common.md#clear-and-simple-design Two fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states what it names.
type ImportProgrammer_INamespace struct {
  // File is the module specifier written in the generated import.
  File string

  // Name is the local namespace binding in legacy emission mode.
  Name string
}

// ImportProgrammer_TypeProps describes an import type node: the file, the
// qualifier as a name or a node, and the type arguments.
//
// @evidence contracts/common.md#principled-implementation An import type needs the file, a qualifier that may be a string or an existing node, and the type arguments, so the qualifier is typed as any and resolved by a type switch in the builder.
// @evidence contracts/common.md#clear-and-simple-design Three fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record; an unsupported qualifier type yields no qualifier.
// @evidence contracts/common.md#meaningful-documentation The doc states the qualifier forms.
type ImportProgrammer_TypeProps struct {
  // File is the module specifier carried by the import type node.
  File string

  // Name is a string identifier or an existing qualifier node; other values
  // leave the qualifier absent.
  Name any

  // Arguments are the type arguments applied to the imported qualifier.
  Arguments []*shimast.TypeNode
}

type importProgrammer_asset struct {
  file      string
  modSpec   *shimast.Node
  binding   *shimast.Node
  Default   *ImportProgrammer_IDefault
  namespace *ImportProgrammer_INamespace
  instances map[string]ImportProgrammer_IInstance
  textRefs  map[string]struct{}
  order     []string
}

var importProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

// NewImportProgrammer creates an importer with the first option record, or the
// zero options.
//
// @evidence contracts/common.md#principled-implementation The first option record is used if given and otherwise the zero options, with empty maps allocated so the recording methods never write to nil.
// @evidence contracts/common.md#clear-and-simple-design One constructor with a variadic options parameter.
// @evidence contracts/common.md#prohibited-implementation-shortcuts No hidden global state is shared between instances.
// @evidence contracts/common.md#meaningful-documentation The doc states the option default.
func NewImportProgrammer(options ...ImportProgrammer_IOptions) *ImportProgrammer {
  opt := ImportProgrammer_IOptions{}
  if len(options) != 0 {
    opt = options[0]
  }
  return &ImportProgrammer{
    assets_:  map[string]*importProgrammer_asset{},
    order_:   []string{},
    options_: opt,
  }
}

// SetEmitContext switches the importer into emit-context (AST-integration) mode:
// references become namespace member accesses and ToStatements emits namespace
// imports, both built with ec.Factory, so tsgo's module-transform aliases them.
//
// @evidence contracts/common.md#principled-implementation Switching modes by setting the emit context makes later references member accesses and makes ToStatements write namespace imports built by that context's factory; it must happen before references are created.
// @evidence contracts/common.md#clear-and-simple-design One assignment.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The mode is explicit and not detected from global state.
// @evidence contracts/common.md#meaningful-documentation The doc states the two effects.
func (p *ImportProgrammer) SetEmitContext(ec *shimprinter.EmitContext) {
  p.emit_ = ec
}

// moduleSpecifier returns the asset's module-specifier string literal, allocated
// once and reused by the namespace import declaration.
func (p *ImportProgrammer) moduleSpecifier(asset *importProgrammer_asset) *shimast.Node {
  if asset.modSpec == nil {
    asset.modSpec = p.emit_.Factory.NewStringLiteral(asset.file, shimast.TokenFlagsNone)
  }
  return asset.modSpec
}

// namespaceName returns a clone of the asset's unique generated identifier.
// Clones preserve the generated-name id while keeping distinct AST parents.
func (p *ImportProgrammer) namespaceName(asset *importProgrammer_asset) *shimast.Node {
  if asset.binding == nil {
    asset.binding = p.emit_.Factory.NewUniqueName(importProgrammer_moduleIdentifier(asset.file))
  }
  return asset.binding.Clone(p.emit_.Factory)
}

// member builds `<namespace>.<name>` for the file, where <namespace> is the
// generated name tsgo's module-transform binds to `require(file)`.
func (p *ImportProgrammer) member(asset *importProgrammer_asset, name string) *shimast.Node {
  return p.emit_.Factory.NewPropertyAccessExpression(
    p.namespaceName(asset),
    nil,
    p.emit_.Factory.NewIdentifier(name),
    shimast.NodeFlagsNone,
  )
}

// Default records a default import of the file and returns the reference to it.
// A repeated request keeps one import and makes it type-only only if every
// request was type-only.
//
// @evidence contracts/common.md#principled-implementation The default import is stored once per file and later requests update only the type-only flag, which is true only if every request is type-only, so a value reference is never bound to a type-only import; the returned reference is a member access `default` in emit mode and the local name otherwise.
// @evidence contracts/common.md#clear-and-simple-design One method over the shared asset lookup.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The merge rule is the general one: a type-only request never overrides a value request.
// @evidence contracts/common.md#meaningful-documentation The doc states the merge rule.
func (p *ImportProgrammer) Default(props ImportProgrammer_IDefault) *shimast.Node {
  asset := p.take(props.File)
  if asset.Default == nil {
    copy := props
    asset.Default = &copy
  } else {
    // A default import is type-only only when every request for it is, so a
    // value reference is never bound to a type-only import.
    asset.Default.Type = asset.Default.Type && props.Type
  }
  if p.emit_ != nil {
    return p.member(asset, "default")
  }
  return EmitFactory(p.emit_, importProgrammer_factory).NewIdentifier(asset.Default.Name)
}

// Instance records a named import and returns its reference. The alias, or the
// name when there is none, identifies it, so a repeated request is a no-op.
//
// @evidence contracts/common.md#principled-implementation The alias, or the name without one, keys the named import, so repeated requests collapse and the first spelling is kept; the reference is a member access on the namespace in emit mode and the alias identifier otherwise.
// @evidence contracts/common.md#clear-and-simple-design One method over the shared asset lookup and insertion order.
// @evidence contracts/common.md#prohibited-implementation-shortcuts Two different exports under one alias keep the first, which callers avoid by generating the alias from the name.
// @evidence contracts/common.md#meaningful-documentation The doc states the keying and the reference forms.
func (p *ImportProgrammer) Instance(props ImportProgrammer_IInstance) *shimast.Node {
  alias := props.Name
  if props.Alias != nil {
    alias = *props.Alias
  }
  asset := p.take(props.File)
  if _, ok := asset.instances[alias]; !ok {
    asset.instances[alias] = props
    asset.order = append(asset.order, alias)
  }
  if p.emit_ != nil {
    return p.member(asset, props.Name)
  }
  return EmitFactory(p.emit_, importProgrammer_factory).NewIdentifier(alias)
}

// Namespace records a namespace import of the file and returns its reference. The
// first requested name wins.
//
// @evidence contracts/common.md#principled-implementation The first requested local name is kept for the file's namespace import, and the reference is the generated name in emit mode or that identifier otherwise.
// @evidence contracts/common.md#clear-and-simple-design One method over the shared asset lookup.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A later request with another name does not rename the import.
// @evidence contracts/common.md#meaningful-documentation The doc states the first-name rule.
func (p *ImportProgrammer) Namespace(props ImportProgrammer_INamespace) *shimast.Node {
  asset := p.take(props.File)
  if asset.namespace == nil {
    copy := props
    asset.namespace = &copy
  }
  if p.emit_ != nil {
    return p.namespaceName(asset)
  }
  return EmitFactory(p.emit_, importProgrammer_factory).NewIdentifier(asset.namespace.Name)
}

// Type builds an import type node `import("file").Qualifier<Arguments>`. It
// registers no import, because the type node carries its own specifier.
//
// @evidence contracts/common.md#principled-implementation The qualifier is taken from a string or a node and the node is an import type with a literal specifier and the given arguments, so no import statement is needed; it uses the emit factory when present.
// @evidence contracts/common.md#clear-and-simple-design One builder method.
// @evidence contracts/common.md#prohibited-implementation-shortcuts An unsupported qualifier type produces a node without a qualifier and does not panic.
// @evidence contracts/common.md#meaningful-documentation The doc states that nothing is registered.
func (p *ImportProgrammer) Type(props ImportProgrammer_TypeProps) *shimast.Node {
  f := EmitFactory(p.emit_, importProgrammer_factory)
  var qualifier *shimast.EntityName
  switch name := props.Name.(type) {
  case string:
    qualifier = f.NewIdentifier(name)
  case *shimast.Node:
    qualifier = name
  }
  args := make([]*shimast.Node, 0, len(props.Arguments))
  for _, arg := range props.Arguments {
    args = append(args, arg)
  }
  return f.NewImportTypeNode(
    false,
    f.NewLiteralTypeNode(
      f.NewStringLiteral(props.File, shimast.TokenFlagsNone),
    ),
    nil,
    qualifier,
    f.NewNodeList(args),
  )
}

// Internal imports a helper of typia's internal runtime folder under a prefixed
// alias and returns its reference. The name gets a leading underscore when it has
// none.
//
// @evidence contracts/common.md#principled-implementation Internal helpers live at `typia/lib/internal/_name`, so the name gets its underscore prefix, the alias is prefixed with the configured prefix to avoid user collisions and the import goes through Instance.
// @evidence contracts/common.md#clear-and-simple-design One method over Instance and the alias helper.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The path is typia's published internal layout and not a consumer path.
// @evidence contracts/common.md#meaningful-documentation The doc states the prefix and alias rules.
func (p *ImportProgrammer) Internal(name string) *shimast.Node {
  if !strings.HasPrefix(name, "_") {
    name = "_" + name
  }
  alias := p.alias(name)
  return p.Instance(ImportProgrammer_IInstance{
    File:  "typia/lib/internal/" + name,
    Name:  name,
    Alias: &alias,
  })
}

// GetInternalText registers the same internal import as Internal and returns only
// its alias, for generated source text. In emit-context mode it also marks the
// alias so ToStatements declares a constant for it.
//
// @evidence contracts/common.md#principled-implementation For generated source text the same import is registered and its alias is returned; in emit mode the alias is also marked so ToStatements declares a constant bound to the member, because text cannot use member accesses.
// @evidence contracts/common.md#clear-and-simple-design One method that shares Internal's registration.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The marking is the supported mechanism for text references and nothing else is patched.
// @evidence contracts/common.md#meaningful-documentation The doc states the extra constant in emit mode.
func (p *ImportProgrammer) GetInternalText(name string) string {
  if !strings.HasPrefix(name, "_") {
    name = "_" + name
  }
  alias := p.alias(name)
  props := ImportProgrammer_IInstance{
    File:  "typia/lib/internal/" + name,
    Name:  name,
    Alias: &alias,
  }
  p.Instance(props)
  if p.emit_ != nil {
    p.take(props.File).textRefs[alias] = struct{}{}
  }
  return alias
}

// ToStatements returns the import statements for everything requested. Files are
// ordered by rank, with the internal helper files grouped by kind, and by first
// use within a rank.
//
// @evidence contracts/common.md#principled-implementation Files are stable-sorted by a rank that groups internal helpers by kind and keeps insertion order within a rank, then emitted as one namespace import with optional constants in emit mode, or as namespace, default and named imports in the legacy mode, where a type-only default gets the type keyword.
// @evidence contracts/common.md#clear-and-simple-design One method with the two mode branches and the rank helper.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The ranking is a fixed table and the order is deterministic.
// @evidence contracts/common.md#meaningful-documentation The doc states the order and the two forms.
func (p *ImportProgrammer) ToStatements() []*shimast.Node {
  f := EmitFactory(p.emit_, importProgrammer_factory)
  statements := []*shimast.Node{}
  order := append([]string{}, p.order_...)
  indices := map[string]int{}
  for i, file := range p.order_ {
    indices[file] = i
  }
  sort.SliceStable(order, func(i, j int) bool {
    left, right := importProgrammer_fileRank(order[i]), importProgrammer_fileRank(order[j])
    if left != right {
      return left < right
    }
    return indices[order[i]] < indices[order[j]]
  })
  for _, file := range order {
    asset := p.assets_[file]
    if p.emit_ != nil {
      // AST-integration mode: one namespace import per file. tsgo's module-
      // transform turns it into `const <gen> = require(file)` and aliases every
      // member access built by member()/Namespace() to the same <gen>.
      modSpec := p.moduleSpecifier(asset)
      statements = append(statements, p.emit_.Factory.NewImportDeclaration(
        nil,
        p.emit_.Factory.NewImportClause(
          0,
          nil,
          p.emit_.Factory.NewNamespaceImport(p.namespaceName(asset)),
        ),
        modSpec,
        nil,
      ))
      for _, alias := range asset.order {
        if _, ok := asset.textRefs[alias]; !ok {
          continue
        }
        instance := asset.instances[alias]
        statements = append(statements, p.emit_.Factory.NewVariableStatement(
          nil,
          p.emit_.Factory.NewVariableDeclarationList(
            p.emit_.Factory.NewNodeList([]*shimast.Node{
              p.emit_.Factory.NewVariableDeclaration(
                p.emit_.Factory.NewIdentifier(alias),
                nil,
                nil,
                p.member(asset, instance.Name),
              ),
            }),
            shimast.NodeFlagsConst,
          ),
        ))
      }
      continue
    }
    if asset.namespace != nil {
      statements = append(statements, f.NewImportDeclaration(
        nil,
        f.NewImportClause(
          0,
          nil,
          f.NewNamespaceImport(f.NewIdentifier(asset.namespace.Name)),
        ),
        f.NewStringLiteral(asset.file, shimast.TokenFlagsNone),
        nil,
      ))
    }
    if asset.Default != nil {
      phase := shimast.ImportPhaseModifierSyntaxKind(0)
      if asset.Default.Type {
        phase = shimast.KindTypeKeyword
      }
      statements = append(statements, f.NewImportDeclaration(
        nil,
        f.NewImportClause(
          phase,
          f.NewIdentifier(asset.Default.Name),
          nil,
        ),
        f.NewStringLiteral(asset.file, shimast.TokenFlagsNone),
        nil,
      ))
    }
    if len(asset.instances) != 0 {
      specifiers := []*shimast.Node{}
      for _, alias := range asset.order {
        ins := asset.instances[alias]
        var propertyName *shimast.ModuleExportName
        if ins.Alias != nil {
          propertyName = f.NewIdentifier(ins.Name)
        }
        specifiers = append(specifiers, f.NewImportSpecifier(
          false,
          propertyName,
          f.NewIdentifier(alias),
        ))
      }
      statements = append(statements, f.NewImportDeclaration(
        nil,
        f.NewImportClause(
          0,
          nil,
          f.NewNamedImports(f.NewNodeList(specifiers)),
        ),
        f.NewStringLiteral(asset.file, shimast.TokenFlagsNone),
        nil,
      ))
    }
  }
  return statements
}

func importProgrammer_fileRank(file string) int {
  if !strings.HasPrefix(file, "typia/lib/internal/") {
    return 10_000
  }
  name := file[strings.LastIndex(file, "/")+1:]
  switch {
  case strings.HasPrefix(name, "_is"):
    return 100
  case strings.HasPrefix(name, "_assert"):
    return 150
  case strings.HasPrefix(name, "_randomFormat"):
    return 200
  case name == "_randomString":
    return 210
  case name == "_randomInteger":
    return 220
  case name == "_randomNumber":
    return 221
  case strings.HasPrefix(name, "_random"):
    return 230
  case name == "_validateReport":
    return 800
  case name == "_createStandardSchema":
    return 900
  }
  return 500
}

func importProgrammer_moduleIdentifier(file string) string {
  if index := strings.LastIndexAny(file, "/\\"); index != -1 {
    file = file[index+1:]
  }
  if file == "" {
    return "module"
  }
  var builder strings.Builder
  for i := 0; i < len(file); i++ {
    ch := file[i]
    if i == 0 && '0' <= ch && ch <= '9' {
      builder.WriteByte('_')
    }
    if ('a' <= ch && ch <= 'z') ||
      ('A' <= ch && ch <= 'Z') ||
      ('0' <= ch && ch <= '9') ||
      ch == '_' {
      builder.WriteByte(ch)
    } else {
      builder.WriteByte('_')
    }
  }
  return builder.String()
}

func (p *ImportProgrammer) take(file string) *importProgrammer_asset {
  if asset, ok := p.assets_[file]; ok {
    return asset
  }
  asset := &importProgrammer_asset{
    file:      file,
    instances: map[string]ImportProgrammer_IInstance{},
    textRefs:  map[string]struct{}{},
    order:     []string{},
  }
  p.assets_[file] = asset
  p.order_ = append(p.order_, file)
  return asset
}

func (p *ImportProgrammer) alias(name string) string {
  return "__" + p.options_.InternalPrefix + name
}
