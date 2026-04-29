package programmers

import (
	"fmt"
	"sort"
	"strings"

	shimast "github.com/microsoft/typescript-go/shim/ast"
	nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
)

type ImportProgrammer struct {
	assets_  map[string]*importProgrammer_asset
	order_   []string
	options_ ImportProgrammer_IOptions
}

type ImportProgrammer_IOptions struct {
	InternalPrefix string
	Runtime        string
}

type ImportProgrammer_IDefault = nativefactories.ExpressionFactory_IDefault
type ImportProgrammer_IInstance = nativefactories.ExpressionFactory_IInstance
type ImportProgrammer_INamespace = nativefactories.ExpressionFactory_INamespace

type ImportProgrammer_TypeProps struct {
	File      string
	Name      any
	Arguments []*shimast.TypeNode
}

type importProgrammer_asset struct {
	file      string
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

func (p *ImportProgrammer) Default(props ImportProgrammer_IDefault) *shimast.Node {
	asset := p.take(props.File)
	if asset.Default == nil {
		copy := props
		asset.Default = &copy
	} else {
		asset.Default.Type = asset.Default.Type || props.Type
	}
	return importProgrammer_factory.NewIdentifier(asset.Default.Name)
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
	return importProgrammer_factory.NewIdentifier(alias)
}

func (p *ImportProgrammer) Namespace(props ImportProgrammer_INamespace) *shimast.Node {
	asset := p.take(props.File)
	if asset.namespace == nil {
		copy := props
		asset.namespace = &copy
	}
	return importProgrammer_factory.NewIdentifier(asset.namespace.Name)
}

func (p *ImportProgrammer) Type(props ImportProgrammer_TypeProps) *shimast.Node {
	var qualifier *shimast.EntityName
	switch name := props.Name.(type) {
	case string:
		qualifier = importProgrammer_factory.NewIdentifier(name)
	case *shimast.Node:
		qualifier = name
	}
	args := make([]*shimast.Node, 0, len(props.Arguments))
	for _, arg := range props.Arguments {
		args = append(args, arg)
	}
	return importProgrammer_factory.NewImportTypeNode(
		false,
		importProgrammer_factory.NewLiteralTypeNode(
			importProgrammer_factory.NewStringLiteral(props.File, shimast.TokenFlagsNone),
		),
		nil,
		qualifier,
		importProgrammer_factory.NewNodeList(args),
	)
}

func (p *ImportProgrammer) Internal(name string) *shimast.Node {
	if !strings.HasPrefix(name, "_") {
		name = "_" + name
	}
	return importProgrammer_factory.NewPropertyAccessExpression(
		p.Namespace(ImportProgrammer_INamespace{
			File: "typia/lib/internal/" + name,
			Name: p.alias(name),
		}),
		nil,
		importProgrammer_factory.NewIdentifier(name),
		shimast.NodeFlagsNone,
	)
}

func (p *ImportProgrammer) GetInternalText(name string) string {
	if !strings.HasPrefix(name, "_") {
		name = "_" + name
	}
	asset := p.take("typia/lib/internal/" + name)
	if asset.namespace == nil {
		panic(fmt.Sprintf("Internal asset not found: %s", name))
	}
	return asset.namespace.Name + "." + name
}

func (p *ImportProgrammer) ToStatements() []*shimast.Node {
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
		if asset.namespace != nil {
			statements = append(statements, importProgrammer_factory.NewImportDeclaration(
				nil,
				importProgrammer_factory.NewImportClause(
					0,
					nil,
					importProgrammer_factory.NewNamespaceImport(importProgrammer_factory.NewIdentifier(asset.namespace.Name)),
				),
				importProgrammer_factory.NewStringLiteral(asset.file, shimast.TokenFlagsNone),
				nil,
			))
		}
		if asset.Default != nil {
			phase := shimast.ImportPhaseModifierSyntaxKind(0)
			if asset.Default.Type {
				phase = shimast.KindTypeKeyword
			}
			statements = append(statements, importProgrammer_factory.NewImportDeclaration(
				nil,
				importProgrammer_factory.NewImportClause(
					phase,
					importProgrammer_factory.NewIdentifier(asset.Default.Name),
					nil,
				),
				importProgrammer_factory.NewStringLiteral(asset.file, shimast.TokenFlagsNone),
				nil,
			))
		}
		if len(asset.instances) != 0 {
			specifiers := []*shimast.Node{}
			for _, alias := range asset.order {
				ins := asset.instances[alias]
				var propertyName *shimast.ModuleExportName
				if ins.Alias != nil {
					propertyName = importProgrammer_factory.NewIdentifier(ins.Name)
				}
				specifiers = append(specifiers, importProgrammer_factory.NewImportSpecifier(
					false,
					propertyName,
					importProgrammer_factory.NewIdentifier(alias),
				))
			}
			statements = append(statements, importProgrammer_factory.NewImportDeclaration(
				nil,
				importProgrammer_factory.NewImportClause(
					0,
					nil,
					importProgrammer_factory.NewNamedImports(importProgrammer_factory.NewNodeList(specifiers)),
				),
				importProgrammer_factory.NewStringLiteral(asset.file, shimast.TokenFlagsNone),
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
