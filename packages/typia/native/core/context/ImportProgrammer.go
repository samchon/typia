package context

import (
  "sort"
  "strings"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
)

type ImportProgrammer struct {
  assets_  map[string]*importProgrammer_asset
  order_   []string
  options_ ImportProgrammer_IOptions
  // emit_은 emit EmitContext다. 설정되면(emit 단계 / AST 통합 모드) import는
  // emit_.Factory로 만든 namespace import로 나가고 모든 참조는
  // NewGeneratedNameForNode를 통한 member access라, tsgo의 builtin
  // module-transform이 손수 짠 commonJS 네이밍 없이 alias한다
  // (const _x_1 = require(...); _x_1.foo). nil이면(legacy 텍스트 emit 모드)
  // 원래의 named/default/namespace import와 bare-identifier 참조를 만든다.
  emit_ *shimprinter.EmitContext
}

type ImportProgrammer_IOptions struct {
  InternalPrefix string
  Runtime        string
}

type ImportProgrammer_IDefault struct {
  File string
  Name string
  Type bool
}

type ImportProgrammer_IInstance struct {
  File  string
  Name  string
  Alias *string
}

type ImportProgrammer_INamespace struct {
  File string
  Name string
}

type ImportProgrammer_TypeProps struct {
  File      string
  Name      any
  Arguments []*shimast.TypeNode
}

type importProgrammer_asset struct {
  file      string
  modSpec   *shimast.Node
  Default   *ImportProgrammer_IDefault
  namespace *ImportProgrammer_INamespace
  instances map[string]ImportProgrammer_IInstance
  order     []string
}

var importProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

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
func (p *ImportProgrammer) SetEmitContext(ec *shimprinter.EmitContext) {
  p.emit_ = ec
}

// moduleSpecifier returns the asset's module-specifier string literal, allocated
// once and reused as the stable key for NewGeneratedNameForNode so the namespace
// alias prints identically in the import declaration and every reference.
func (p *ImportProgrammer) moduleSpecifier(asset *importProgrammer_asset) *shimast.Node {
  if asset.modSpec == nil {
    asset.modSpec = p.emit_.Factory.NewStringLiteral(asset.file, shimast.TokenFlagsNone)
  }
  return asset.modSpec
}

// member builds `<namespace>.<name>` for the file, where <namespace> is the
// generated name tsgo's module-transform binds to `require(file)`.
func (p *ImportProgrammer) member(asset *importProgrammer_asset, name string) *shimast.Node {
  return p.emit_.Factory.NewPropertyAccessExpression(
    p.emit_.Factory.NewGeneratedNameForNode(p.moduleSpecifier(asset)),
    nil,
    p.emit_.Factory.NewIdentifier(name),
    shimast.NodeFlagsNone,
  )
}

func (p *ImportProgrammer) Default(props ImportProgrammer_IDefault) *shimast.Node {
  asset := p.take(props.File)
  if asset.Default == nil {
    copy := props
    asset.Default = &copy
  } else {
    asset.Default.Type = asset.Default.Type || props.Type
  }
  if p.emit_ != nil {
    return p.member(asset, "default")
  }
  return EmitFactory(p.emit_, importProgrammer_factory).NewIdentifier(asset.Default.Name)
}

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

func (p *ImportProgrammer) Namespace(props ImportProgrammer_INamespace) *shimast.Node {
  asset := p.take(props.File)
  if asset.namespace == nil {
    copy := props
    asset.namespace = &copy
  }
  if p.emit_ != nil {
    return p.emit_.Factory.NewGeneratedNameForNode(p.moduleSpecifier(asset))
  }
  return EmitFactory(p.emit_, importProgrammer_factory).NewIdentifier(asset.namespace.Name)
}

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

func (p *ImportProgrammer) GetInternalText(name string) string {
  if !strings.HasPrefix(name, "_") {
    name = "_" + name
  }
  alias := p.alias(name)
  p.Instance(ImportProgrammer_IInstance{
    File:  "typia/lib/internal/" + name,
    Name:  name,
    Alias: &alias,
  })
  return alias
}

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
          p.emit_.Factory.NewNamespaceImport(p.emit_.Factory.NewGeneratedNameForNode(modSpec)),
        ),
        modSpec,
        nil,
      ))
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

func (p *ImportProgrammer) take(file string) *importProgrammer_asset {
  if asset, ok := p.assets_[file]; ok {
    return asset
  }
  asset := &importProgrammer_asset{
    file:      file,
    instances: map[string]ImportProgrammer_IInstance{},
    order:     []string{},
  }
  p.assets_[file] = asset
  p.order_ = append(p.order_, file)
  return asset
}

func (p *ImportProgrammer) alias(name string) string {
  return "__" + p.options_.InternalPrefix + name
}
