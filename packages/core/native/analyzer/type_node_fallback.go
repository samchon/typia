package analyzer

import (
	"fmt"
	"os"
	"strconv"
	"strings"

	"github.com/microsoft/typescript-go/shim/ast"
	shimchecker "github.com/microsoft/typescript-go/shim/checker"
	shimscanner "github.com/microsoft/typescript-go/shim/scanner"

	"github.com/samchon/typia/packages/core/native/metadata"
)

type bigintLiteral string

type typeNodeBinding struct {
	Type *shimchecker.Type
	Node *ast.Node
}

func debugArrayAnyNodeEnabled() bool {
	return os.Getenv("TYPIA_DEBUG_ARRAY_ANY") == "1"
}

func debugArrayAnyNodeWrite(line string) {
	f, err := os.OpenFile("/tmp/typia-arrayany.log", os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0o644)
	if err != nil {
		return
	}
	defer f.Close()
	_, _ = f.WriteString(line + "\n")
}

func (a *Analyzer) walkTypeNode(node *ast.Node) (*metadata.Schema, bool) {
	return a.walkTypeNodeBound(node, nil)
}

func (a *Analyzer) walkTypeNodeBound(
	node *ast.Node,
	bindings map[string]typeNodeBinding,
) (*metadata.Schema, bool) {
	if node == nil {
		return nil, false
	}
	switch node.Kind {
	case ast.KindAnyKeyword:
		out := metadata.NewSchema()
		out.Any = true
		return out, true
	case ast.KindStringKeyword:
		return metadata.NewSchema().AddAtomic(metadata.AtomicString), true
	case ast.KindNumberKeyword:
		return metadata.NewSchema().AddAtomic(metadata.AtomicNumber), true
	case ast.KindBooleanKeyword:
		return metadata.NewSchema().AddAtomic(metadata.AtomicBoolean), true
	case ast.KindBigIntKeyword:
		return metadata.NewSchema().AddAtomic(metadata.AtomicBigint), true
	case ast.KindNullKeyword:
		out := metadata.NewSchema()
		out.Nullable = true
		return out, true
	case ast.KindUndefinedKeyword, ast.KindVoidKeyword:
		out := metadata.NewSchema()
		out.Required = false
		return out, true
	case ast.KindLiteralType:
		return literalSchemaFromNode(node.AsLiteralTypeNode().Literal)
	case ast.KindArrayType:
		return a.walkArrayTypeNodeBound(node.AsArrayTypeNode(), bindings)
	case ast.KindTupleType:
		return a.walkTupleTypeNodeBound(node.AsTupleTypeNode(), bindings)
	case ast.KindUnionType:
		return a.walkUnionTypeNodeBound(node.AsUnionTypeNode(), bindings)
	case ast.KindIntersectionType:
		return a.walkIntersectionTypeNodeBound(node.AsIntersectionTypeNode(), bindings)
	case ast.KindOptionalType:
		optional := node.AsOptionalTypeNode()
		if optional == nil || optional.Type == nil {
			return nil, false
		}
		out, ok := a.walkTypeNodeBound(optional.Type, bindings)
		if !ok {
			return nil, false
		}
		out.Optional = true
		out.Required = false
		return out, true
	case ast.KindRestType:
		rest := node.AsRestTypeNode()
		if rest == nil || rest.Type == nil {
			return nil, false
		}
		return a.walkTypeNodeBound(rest.Type, bindings)
	case ast.KindParenthesizedType:
		parenthesized := node.AsParenthesizedTypeNode()
		if parenthesized == nil || parenthesized.Type == nil {
			return nil, false
		}
		return a.walkTypeNodeBound(parenthesized.Type, bindings)
	case ast.KindTypeLiteral:
		return a.walkTypeLiteralNodeBound(node, node.AsTypeLiteralNode(), bindings)
	case ast.KindTemplateLiteralType:
		return templateSchemaFromNode(node)
	case ast.KindTypeReference:
		ref := node.AsTypeReferenceNode()
		if ref != nil {
			resolved := a.Checker.GetTypeFromTypeNode(node)
			if binding, ok := resolveTypeNodeBinding(ref, bindings); ok {
				return a.walkBoundTypeNode(binding)
			}
			switch entityNameText(ref.TypeName) {
			case "Array", "ReadonlyArray":
				if ref.TypeArguments != nil && len(ref.TypeArguments.Nodes) == 1 {
					value, ok := a.walkTypeNodeBound(ref.TypeArguments.Nodes[0], bindings)
					if !ok {
						return nil, false
					}
					out := metadata.NewSchema()
					out.Arrays = append(out.Arrays, &metadata.ArrayRef{
						Type: &metadata.ArrayType{
							Name:      value.Name() + "[]",
							Value:     value,
							Nullables: []bool{},
						},
					})
					return out, true
				}
			case "Map":
				if ref.TypeArguments != nil && len(ref.TypeArguments.Nodes) == 2 {
					key, ok := a.walkTypeNodeBound(ref.TypeArguments.Nodes[0], bindings)
					if !ok {
						return nil, false
					}
					value, ok := a.walkTypeNodeBound(ref.TypeArguments.Nodes[1], bindings)
					if !ok {
						return nil, false
					}
					out := metadata.NewSchema()
					out.Maps = append(out.Maps, &metadata.MapRef{
						Key:   key,
						Value: value,
					})
					return out, true
				}
			case "Set":
				if ref.TypeArguments != nil && len(ref.TypeArguments.Nodes) == 1 {
					value, ok := a.walkTypeNodeBound(ref.TypeArguments.Nodes[0], bindings)
					if !ok {
						return nil, false
					}
					out := metadata.NewSchema()
					out.Sets = append(out.Sets, &metadata.SetRef{Value: value})
					return out, true
				}
			}
			if resolved != nil && resolved.Flags() != shimchecker.TypeFlagsAny {
				if atomic, ok := wrapperAtomicKind(a.Checker, resolved); ok {
					return metadata.NewSchema().AddAtomic(atomic), true
				}
				if native, ok := nativeName(a.Checker, resolved); ok {
					out := metadata.NewSchema()
					out.Natives = append(out.Natives, metadata.Native{Name: native})
					return out, true
				}
			}
			if alias := shimchecker.Checker_getAliasSymbolForTypeNode(a.Checker, node); alias != nil {
				aliasBindings := buildAliasTypeNodeBindings(a.Checker, ref, resolved, bindings)
				if decl := shimchecker.Checker_getDeclarationOfAliasSymbol(a.Checker, alias); decl != nil {
					if iface := decl.AsInterfaceDeclaration(); iface != nil {
						return a.walkInterfaceDeclarationBound(iface, aliasBindings)
					}
					if target := aliasDeclarationTargetNode(decl); target != nil && target != node {
						return a.walkTypeNodeBound(target, aliasBindings)
					}
				}
				for _, decl := range relatedDeclarations(a.Checker, alias) {
					if iface := decl.AsInterfaceDeclaration(); iface != nil {
						return a.walkInterfaceDeclarationBound(iface, aliasBindings)
					}
					if target := aliasDeclarationTargetNode(decl); target != nil && target != node {
						return a.walkTypeNodeBound(target, aliasBindings)
					}
				}
			}
			if target := referencedInterfaceDeclaration(a.Checker, ref, resolved); target != nil {
				return a.walkInterfaceDeclarationBound(target, bindings)
			}
		}
		if resolved := a.Checker.GetTypeFromTypeNode(node); resolved != nil && resolved.Flags() != shimchecker.TypeFlagsAny {
			return a.Walk(resolved)
		}
		return nil, false
	default:
		if resolved := a.Checker.GetTypeFromTypeNode(node); resolved != nil && resolved.Flags() != shimchecker.TypeFlagsAny {
			return a.Walk(resolved)
		}
		return nil, false
	}
}

func resolveTypeNodeBinding(
	ref *ast.TypeReferenceNode,
	bindings map[string]typeNodeBinding,
) (typeNodeBinding, bool) {
	if ref == nil || bindings == nil || ref.TypeArguments != nil {
		return typeNodeBinding{}, false
	}
	name := entityNameText(ref.TypeName)
	if name == "" || strings.Contains(name, ".") {
		return typeNodeBinding{}, false
	}
	binding, ok := bindings[name]
	return binding, ok
}

func relatedSymbols(checker *shimchecker.Checker, seeds ...*ast.Symbol) []*ast.Symbol {
	out := make([]*ast.Symbol, 0, len(seeds))
	seen := map[*ast.Symbol]struct{}{}
	appendSymbol := func(sym *ast.Symbol) {
		if sym == nil {
			return
		}
		if _, exists := seen[sym]; exists {
			return
		}
		seen[sym] = struct{}{}
		out = append(out, sym)
	}
	for _, seed := range seeds {
		appendSymbol(seed)
	}
	for i := 0; i < len(out); i++ {
		if checker == nil {
			continue
		}
		for _, decl := range out[i].Declarations {
			if decl == nil {
				continue
			}
			switch decl.Kind {
			case ast.KindImportSpecifier:
				appendSymbol(shimchecker.Checker_getTargetOfImportSpecifier(checker, decl))
			case ast.KindExportSpecifier:
				appendSymbol(checker.GetExportSpecifierLocalTargetSymbol(decl))
			}
		}
		if out[i].Flags&ast.SymbolFlagsAlias == 0 {
			continue
		}
		appendSymbol(shimchecker.Checker_getAliasedSymbol(checker, out[i]))
	}
	return out
}

func relatedDeclarations(checker *shimchecker.Checker, seeds ...*ast.Symbol) []*ast.Node {
	out := make([]*ast.Node, 0)
	seen := map[*ast.Node]struct{}{}
	for _, symbol := range relatedSymbols(checker, seeds...) {
		for _, decl := range symbol.Declarations {
			if decl == nil {
				continue
			}
			if _, exists := seen[decl]; exists {
				continue
			}
			seen[decl] = struct{}{}
			out = append(out, decl)
		}
	}
	return out
}

func (a *Analyzer) walkBoundTypeNode(binding typeNodeBinding) (*metadata.Schema, bool) {
	if binding.Node != nil || binding.Type != nil {
		return a.WalkWithTypeNode(binding.Type, binding.Node)
	}
	return nil, false
}

func buildAliasTypeNodeBindings(
	checker *shimchecker.Checker,
	ref *ast.TypeReferenceNode,
	resolved *shimchecker.Type,
	parent map[string]typeNodeBinding,
) map[string]typeNodeBinding {
	if ref == nil {
		return parent
	}
	typeArgs := []*shimchecker.Type(nil)
	if checker != nil && resolved != nil {
		typeArgs = shimchecker.Checker_getTypeArguments(checker, resolved)
	}
	if len(typeArgs) == 0 && resolved != nil {
		typeArgs = resolved.Types()
	}
	if ref.TypeArguments == nil || len(ref.TypeArguments.Nodes) == 0 {
		return parent
	}
	aliasDecl := aliasDeclarationTargetTypeAlias(checker, ref)
	if aliasDecl == nil || aliasDecl.TypeParameters == nil || len(aliasDecl.TypeParameters.Nodes) == 0 {
		return parent
	}
	next := cloneTypeNodeBindings(parent)
	for i, param := range aliasDecl.TypeParameters.Nodes {
		if param == nil || param.Kind != ast.KindTypeParameter {
			continue
		}
		typeParam := param.AsTypeParameter()
		if typeParam == nil || typeParam.Name() == nil {
			continue
		}
		name := typeParam.Name().Text()
		if name == "" {
			continue
		}
		binding := typeNodeBinding{}
		if i < len(ref.TypeArguments.Nodes) {
			binding.Node = ref.TypeArguments.Nodes[i]
		}
		if i < len(typeArgs) {
			binding.Type = typeArgs[i]
		}
		next[name] = binding
	}
	return next
}

func referencedInterfaceDeclaration(
	checker *shimchecker.Checker,
	ref *ast.TypeReferenceNode,
	resolved *shimchecker.Type,
) *ast.InterfaceDeclaration {
	symbols := make([]*ast.Symbol, 0, 2)
	if ref != nil && ref.TypeName != nil {
		if node := ref.TypeName.AsNode(); node != nil && node.Symbol() != nil {
			symbols = append(symbols, node.Symbol())
		}
	}
	if resolved != nil && resolved.Symbol() != nil {
		symbols = append(symbols, resolved.Symbol())
	}
	if resolved != nil && shimchecker.Type_getTypeNameSymbol(resolved) != nil {
		symbols = append(symbols, shimchecker.Type_getTypeNameSymbol(resolved))
	}
	for _, decl := range relatedDeclarations(checker, symbols...) {
		if decl != nil && decl.Kind == ast.KindInterfaceDeclaration {
			return decl.AsInterfaceDeclaration()
		}
	}
	return nil
}

func (a *Analyzer) walkInterfaceDeclarationBound(
	decl *ast.InterfaceDeclaration,
	bindings map[string]typeNodeBinding,
) (*metadata.Schema, bool) {
	if decl == nil {
		return nil, false
	}
	root := decl.AsNode()
	if root == nil {
		return nil, false
	}
	key := syntaxNodeKey(root)
	name := "Interface#" + intToString(int64(root.Pos()))
	if decl.Name() != nil && decl.Name().Text() != "" {
		name = decl.Name().Text()
	}
	obj, fresh := a.Collection.EmplaceObject(key, name)
	if fresh {
		obj.Properties = make([]*metadata.Property, 0)
		obj.DynamicProperties = make([]*metadata.Property, 0)
		if decl.Members != nil {
			for _, member := range decl.Members.Nodes {
				if member == nil {
					continue
				}
				switch member.Kind {
				case ast.KindPropertySignature:
					prop := member.AsPropertySignatureDeclaration()
					if prop == nil || prop.Type == nil {
						return nil, false
					}
					valueSchema, ok := a.walkTypeNodeBound(prop.Type, bindings)
					if !ok {
						return nil, false
					}
					if prop.PostfixToken != nil {
						valueSchema.Optional = true
						valueSchema.Required = false
					}
					keyName, ok := propertyNameText(member.Name())
					if !ok {
						return nil, false
					}
					keySchema := metadata.NewSchema()
					keySchema.AddConstant(metadata.AtomicString, keyName)
					obj.Properties = append(obj.Properties, &metadata.Property{
						Key:   keySchema,
						Value: valueSchema,
					})
				case ast.KindMethodSignature:
					method := member.AsMethodSignatureDeclaration()
					if method == nil {
						return nil, false
					}
					valueSchema, ok := a.methodSignatureSchema(method)
					if !ok {
						return nil, false
					}
					keyName, ok := propertyNameText(member.Name())
					if !ok {
						return nil, false
					}
					keySchema := metadata.NewSchema()
					keySchema.AddConstant(metadata.AtomicString, keyName)
					obj.Properties = append(obj.Properties, &metadata.Property{
						Key:   keySchema,
						Value: valueSchema,
					})
				case ast.KindIndexSignature:
					index := member.AsIndexSignatureDeclaration()
					if index == nil || index.Type == nil || index.Parameters == nil || len(index.Parameters.Nodes) == 0 {
						return nil, false
					}
					parameter := index.Parameters.Nodes[0]
					if parameter == nil || parameter.Kind != ast.KindParameter {
						return nil, false
					}
					paramDecl := parameter.AsParameterDeclaration()
					if paramDecl == nil || paramDecl.Type == nil {
						return nil, false
					}
					keySchema, ok := a.walkTypeNodeBound(paramDecl.Type, bindings)
					if !ok || !supportsObjectIndexKey(keySchema) {
						return nil, false
					}
					valueSchema, ok := a.walkTypeNodeBound(index.Type, bindings)
					if !ok {
						return nil, false
					}
					obj.DynamicProperties = append(obj.DynamicProperties, &metadata.Property{
						Key:   keySchema,
						Value: valueSchema,
					})
					if obj.AdditionalProperties == nil {
						obj.AdditionalProperties = metadata.NewSchema()
					}
					mergeInto(obj.AdditionalProperties, valueSchema)
				}
			}
		}
	}
	out := metadata.NewSchema()
	out.Objects = append(out.Objects, &metadata.ObjectRef{Type: obj})
	return out, true
}

func aliasDeclarationTargetTypeAlias(checker *shimchecker.Checker, ref *ast.TypeReferenceNode) *ast.TypeAliasDeclaration {
	if ref == nil {
		return nil
	}
	node := ref.TypeName.AsNode()
	if node == nil {
		return nil
	}
	for _, decl := range relatedDeclarations(checker, node.Symbol()) {
		if alias := decl.AsTypeAliasDeclaration(); alias != nil {
			return alias
		}
	}
	return nil
}

func cloneTypeNodeBindings(src map[string]typeNodeBinding) map[string]typeNodeBinding {
	if len(src) == 0 {
		return map[string]typeNodeBinding{}
	}
	out := make(map[string]typeNodeBinding, len(src))
	for key, value := range src {
		out[key] = value
	}
	return out
}

func referencedAliasTargetNode(checker *shimchecker.Checker, t *shimchecker.Type) *ast.Node {
	if t == nil {
		return nil
	}
	for _, decl := range relatedDeclarations(checker, t.Symbol(), shimchecker.Type_getTypeNameSymbol(t)) {
		if target := aliasDeclarationTargetNode(decl); target != nil {
			return target
		}
	}
	return nil
}

func aliasDeclarationTargetNode(decl *ast.Node) *ast.Node {
	if decl == nil {
		return nil
	}
	if alias := decl.AsTypeAliasDeclaration(); alias != nil && alias.Type != nil {
		return alias.Type
	}
	return nil
}

func (a *Analyzer) walkUnionTypeNode(node *ast.UnionTypeNode) (*metadata.Schema, bool) {
	return a.walkUnionTypeNodeBound(node, nil)
}

func (a *Analyzer) walkArrayTypeNodeBound(
	node *ast.ArrayTypeNode,
	bindings map[string]typeNodeBinding,
) (*metadata.Schema, bool) {
	if node == nil || node.ElementType == nil {
		return nil, false
	}
	value, ok := a.walkTypeNodeBound(node.ElementType, bindings)
	if !ok {
		return nil, false
	}
	out := metadata.NewSchema()
	out.Arrays = append(out.Arrays, &metadata.ArrayRef{
		Type: &metadata.ArrayType{
			Name:      value.Name() + "[]",
			Value:     value,
			Nullables: []bool{},
		},
	})
	return out, true
}

func (a *Analyzer) walkTupleTypeNodeBound(
	node *ast.TupleTypeNode,
	bindings map[string]typeNodeBinding,
) (*metadata.Schema, bool) {
	if node == nil || node.Elements == nil {
		return nil, false
	}
	tuple := &metadata.TupleType{
		Name:      "Tuple",
		Elements:  []*metadata.Schema{},
		Nullables: []bool{},
	}
	for _, elem := range node.Elements.Nodes {
		if elem == nil {
			return nil, false
		}
		target := elem
		optional := false
		rest := false
		if elem.Kind == ast.KindNamedTupleMember {
			member := elem.AsNamedTupleMember()
			if member == nil || member.Type == nil {
				return nil, false
			}
			target = member.Type
			optional = member.QuestionToken != nil
			rest = member.DotDotDotToken != nil
		}
		if target.Kind == ast.KindOptionalType {
			optional = true
		} else if target.Kind == ast.KindRestType {
			rest = true
		}
		schema, ok := a.walkTypeNodeBound(target, bindings)
		if !ok {
			return nil, false
		}
		if optional {
			schema.Optional = true
			schema.Required = false
		}
		if rest {
			tuple.Elements = append(tuple.Elements, schema)
			continue
		}
		tuple.Elements = append(tuple.Elements, schema)
	}
	out := metadata.NewSchema()
	out.Tuples = append(out.Tuples, &metadata.TupleRef{Type: tuple})
	return out, true
}

func (a *Analyzer) walkUnionTypeNodeBound(
	node *ast.UnionTypeNode,
	bindings map[string]typeNodeBinding,
) (*metadata.Schema, bool) {
	if node == nil || node.Types == nil || len(node.Types.Nodes) == 0 {
		return nil, false
	}
	out := metadata.NewSchema()
	debug := debugArrayAnyNodeEnabled()
	for i, child := range node.Types.Nodes {
		if debug && child != nil {
			debugArrayAnyNodeWrite(
				"walkUnion child[" + intToString(int64(i)) + "].kind=" +
					intToString(int64(child.Kind)),
			)
		}
		schema, ok := a.walkTypeNodeBound(child, bindings)
		if !ok {
			if debug && child != nil {
				debugArrayAnyNodeWrite(
					"walkUnion child failed kind=" + intToString(int64(child.Kind)),
				)
			}
			return nil, false
		}
		if debug {
			debugArrayAnyNodeWrite(
				"walkUnion child ok size=" + intToString(int64(schema.Size())) +
					" bucket=" + intToString(int64(schema.Bucket())),
			)
		}
		mergeInto(out, schema)
	}
	return out, true
}

func (a *Analyzer) walkIntersectionTypeNode(node *ast.IntersectionTypeNode) (*metadata.Schema, bool) {
	return a.walkIntersectionTypeNodeBound(node, nil)
}

func (a *Analyzer) walkIntersectionTypeNodeBound(
	node *ast.IntersectionTypeNode,
	bindings map[string]typeNodeBinding,
) (*metadata.Schema, bool) {
	if node == nil || node.Types == nil || len(node.Types.Nodes) == 0 {
		return nil, false
	}
	out := metadata.NewSchema()
	var tags []metadata.TypeTag
	regular := 0
	for _, child := range node.Types.Nodes {
		if tag, ok := typeTagFromNode(child); ok {
			tags = append(tags, tag)
			continue
		}
		schema, ok := a.walkTypeNodeBound(child, bindings)
		if !ok {
			return nil, false
		}
		mergeInto(out, schema)
		regular++
	}
	if regular == 0 {
		return nil, false
	}
	for _, tag := range tags {
		attachTag(out, tag)
	}
	return out, true
}

func (a *Analyzer) walkTypeLiteralNode(root *ast.Node, node *ast.TypeLiteralNode) (*metadata.Schema, bool) {
	return a.walkTypeLiteralNodeBound(root, node, nil)
}

func (a *Analyzer) walkTypeLiteralNodeBound(
	root *ast.Node,
	node *ast.TypeLiteralNode,
	bindings map[string]typeNodeBinding,
) (*metadata.Schema, bool) {
	if root == nil || node == nil {
		return nil, false
	}
	key := syntaxNodeKey(root)
	name := "TypeLiteral#" + intToString(int64(root.Pos()))
	obj, fresh := a.Collection.EmplaceObject(key, name)
	if fresh {
		obj.Properties = make([]*metadata.Property, 0)
		if node.Members != nil {
			for _, member := range node.Members.Nodes {
				if member == nil {
					continue
				}
				if member.Kind == ast.KindIndexSignature {
					index := member.AsIndexSignatureDeclaration()
					if index == nil || index.Type == nil || index.Parameters == nil || len(index.Parameters.Nodes) == 0 {
						return nil, false
					}
					parameter := index.Parameters.Nodes[0]
					if parameter == nil || parameter.Kind != ast.KindParameter {
						return nil, false
					}
					paramDecl := parameter.AsParameterDeclaration()
					if paramDecl == nil || paramDecl.Type == nil {
						return nil, false
					}
					keySchema, ok := a.walkTypeNodeBound(paramDecl.Type, bindings)
					if !ok || !supportsObjectIndexKey(keySchema) {
						return nil, false
					}
					valueSchema, ok := a.walkTypeNodeBound(index.Type, bindings)
					if !ok {
						return nil, false
					}
					obj.DynamicProperties = append(obj.DynamicProperties, &metadata.Property{
						Key:   keySchema,
						Value: valueSchema,
					})
					if obj.AdditionalProperties == nil {
						obj.AdditionalProperties = metadata.NewSchema()
					}
					mergeInto(obj.AdditionalProperties, valueSchema)
					continue
				}
				if member.Kind != ast.KindPropertySignature {
					continue
				}
				prop := member.AsPropertySignatureDeclaration()
				propType := member.Type()
				if propType == nil {
					return nil, false
				}
				valueSchema, ok := a.walkTypeNodeBound(propType, bindings)
				if !ok {
					return nil, false
				}
				if prop.PostfixToken != nil {
					valueSchema.Optional = true
					valueSchema.Required = false
				}
				keyName, ok := propertyNameText(member.Name())
				if !ok {
					return nil, false
				}
				keySchema := metadata.NewSchema()
				keySchema.AddConstant(metadata.AtomicString, keyName)
				obj.Properties = append(obj.Properties, &metadata.Property{
					Key:   keySchema,
					Value: valueSchema,
				})
			}
		}
	}
	out := metadata.NewSchema()
	out.Objects = append(out.Objects, &metadata.ObjectRef{Type: obj})
	return out, true
}

func propertyTypeNode(sym *ast.Symbol) *ast.Node {
	if sym == nil {
		return nil
	}
	if sym.ValueDeclaration != nil && sym.ValueDeclaration.Type() != nil {
		return sym.ValueDeclaration.Type()
	}
	for _, decl := range sym.Declarations {
		if decl != nil && decl.Type() != nil {
			return decl.Type()
		}
	}
	return nil
}

func typeTagFromNode(node *ast.Node) (metadata.TypeTag, bool) {
	if node == nil || node.Kind != ast.KindTypeReference {
		return metadata.TypeTag{}, false
	}
	ref := node.AsTypeReferenceNode()
	if ref == nil {
		return metadata.TypeTag{}, false
	}
	name := entityNameText(ref.TypeName)
	if name == "" {
		return metadata.TypeTag{}, false
	}
	if idx := strings.LastIndex(name, "."); idx >= 0 {
		name = name[idx+1:]
	}
	if strings.HasPrefix(name, "tags.") {
		name = strings.TrimPrefix(name, "tags.")
	}
	if strings.HasPrefix(name, "ifaceTags.") {
		name = strings.TrimPrefix(name, "ifaceTags.")
	}
	tag := metadata.TypeTag{Name: name}
	switch name {
	case "UniqueItems":
		tag.Target = "array"
		tag.Kind = "uniqueItems"
		tag.Value = true
	case "Format":
		value, ok := firstTypeArgumentValue(ref)
		if !ok {
			return metadata.TypeTag{}, false
		}
		tag.Target = "string"
		tag.Kind = "format"
		tag.Value = value
	case "Pattern":
		value, ok := firstTypeArgumentValue(ref)
		if !ok {
			return metadata.TypeTag{}, false
		}
		tag.Target = "string"
		tag.Kind = "pattern"
		tag.Value = value
	case "MinLength":
		value, ok := firstTypeArgumentValue(ref)
		if !ok {
			return metadata.TypeTag{}, false
		}
		tag.Target = "string"
		tag.Kind = "minLength"
		tag.Value = value
	case "MaxLength":
		value, ok := firstTypeArgumentValue(ref)
		if !ok {
			return metadata.TypeTag{}, false
		}
		tag.Target = "string"
		tag.Kind = "maxLength"
		tag.Value = value
	case "MinItems":
		value, ok := firstTypeArgumentValue(ref)
		if !ok {
			return metadata.TypeTag{}, false
		}
		tag.Target = "array"
		tag.Kind = "minItems"
		tag.Value = value
	case "MaxItems":
		value, ok := firstTypeArgumentValue(ref)
		if !ok {
			return metadata.TypeTag{}, false
		}
		tag.Target = "array"
		tag.Kind = "maxItems"
		tag.Value = value
	case "Minimum":
		value, ok := firstTypeArgumentValue(ref)
		if !ok {
			return metadata.TypeTag{}, false
		}
		tag.Target = numericTagTarget(value)
		tag.Kind = "minimum"
		tag.Value = value
	case "Maximum":
		value, ok := firstTypeArgumentValue(ref)
		if !ok {
			return metadata.TypeTag{}, false
		}
		tag.Target = numericTagTarget(value)
		tag.Kind = "maximum"
		tag.Value = value
	case "ExclusiveMinimum":
		value, ok := firstTypeArgumentValue(ref)
		if !ok {
			return metadata.TypeTag{}, false
		}
		tag.Target = numericTagTarget(value)
		tag.Kind = "exclusiveMinimum"
		tag.Value = value
	case "ExclusiveMaximum":
		value, ok := firstTypeArgumentValue(ref)
		if !ok {
			return metadata.TypeTag{}, false
		}
		tag.Target = numericTagTarget(value)
		tag.Kind = "exclusiveMaximum"
		tag.Value = value
	case "MultipleOf":
		value, ok := firstTypeArgumentValue(ref)
		if !ok {
			return metadata.TypeTag{}, false
		}
		tag.Target = numericTagTarget(value)
		tag.Kind = "multipleOf"
		tag.Value = value
	case "Type":
		value, ok := firstTypeArgumentValue(ref)
		if !ok {
			return metadata.TypeTag{}, false
		}
		tag.Target = "number"
		tag.Kind = "type"
		tag.Value = value
	case "Sequence":
		value, ok := firstTypeArgumentValue(ref)
		if !ok {
			return metadata.TypeTag{}, false
		}
		tag.Kind = "sequence"
		tag.Value = value
	default:
		return metadata.TypeTag{}, false
	}
	return tag, true
}

func firstTypeArgumentValue(ref *ast.TypeReferenceNode) (any, bool) {
	if ref == nil || ref.TypeArguments == nil || len(ref.TypeArguments.Nodes) == 0 {
		return nil, false
	}
	return typeArgumentValue(ref.TypeArguments.Nodes[0])
}

func literalSchemaFromNode(node *ast.Node) (*metadata.Schema, bool) {
	if node != nil {
		switch node.Kind {
		case ast.KindNullKeyword:
			out := metadata.NewSchema()
			out.Nullable = true
			return out, true
		case ast.KindUndefinedKeyword, ast.KindVoidKeyword:
			out := metadata.NewSchema()
			out.Required = false
			return out, true
		}
	}
	value, ok := literalNodeValue(node)
	if !ok {
		return nil, false
	}
	out := metadata.NewSchema()
	switch v := value.(type) {
	case string:
		out.AddConstant(metadata.AtomicString, v)
	case int64:
		out.AddConstant(metadata.AtomicNumber, v)
	case float64:
		out.AddConstant(metadata.AtomicNumber, v)
	case bigintLiteral:
		out.AddConstant(metadata.AtomicBigint, string(v))
	case bool:
		out.AddConstant(metadata.AtomicBoolean, v)
	default:
		return nil, false
	}
	return out, true
}

func typeArgumentValue(node *ast.Node) (any, bool) {
	if node == nil {
		return nil, false
	}
	if node.Kind == ast.KindLiteralType {
		literal := node.AsLiteralTypeNode().Literal
		if value, ok := literalNodeValue(literal); ok {
			return value, true
		}
		return templateLiteralTypeValue(literal)
	}
	if value, ok := literalNodeValue(node); ok {
		return value, true
	}
	return templateLiteralTypeValue(node)
}

func literalNodeValue(node *ast.Node) (any, bool) {
	if node == nil {
		return nil, false
	}
	switch node.Kind {
	case ast.KindStringLiteral:
		return node.AsStringLiteral().Text, true
	case ast.KindNoSubstitutionTemplateLiteral:
		return node.AsNoSubstitutionTemplateLiteral().Text, true
	case ast.KindNumericLiteral:
		raw := node.AsNumericLiteral().Text
		if strings.ContainsAny(raw, ".eE") {
			v, err := strconv.ParseFloat(raw, 64)
			return v, err == nil
		}
		v, err := strconv.ParseInt(raw, 10, 64)
		return v, err == nil
	case ast.KindBigIntLiteral:
		raw := strings.TrimSuffix(node.AsBigIntLiteral().Text, "n")
		return bigintLiteral(raw), true
	case ast.KindTrueKeyword:
		return true, true
	case ast.KindFalseKeyword:
		return false, true
	case ast.KindPrefixUnaryExpression:
		expr := node.AsPrefixUnaryExpression()
		if expr == nil || expr.Operator != ast.KindMinusToken {
			return nil, false
		}
		value, ok := literalNodeValue(expr.Operand)
		if !ok {
			return nil, false
		}
		switch v := value.(type) {
		case int64:
			return -v, true
		case float64:
			return -v, true
		case bigintLiteral:
			return bigintLiteral("-" + string(v)), true
		default:
			return nil, false
		}
	}
	return nil, false
}

func templateLiteralTypeValue(node *ast.Node) (string, bool) {
	if node == nil || node.Kind != ast.KindTemplateLiteralType {
		return "", false
	}
	return templateLiteralSourceValue(shimscanner.GetTextOfNode(node))
}

func templateSchemaFromNode(node *ast.Node) (*metadata.Schema, bool) {
	if node == nil {
		return nil, false
	}
	text := shimscanner.GetTextOfNode(node)
	if text == "" {
		return nil, false
	}
	out := metadata.NewSchema()
	out.Templates = append(out.Templates, metadata.Template{RawName: text})
	return out, true
}

func templateLiteralSourceValue(text string) (string, bool) {
	if len(text) < 2 || text[0] != '`' || text[len(text)-1] != '`' {
		return "", false
	}
	body := text[1 : len(text)-1]
	if strings.Contains(body, "${") {
		return "", false
	}
	return body, true
}

func entityNameText(node *ast.Node) string {
	if node == nil {
		return ""
	}
	switch node.Kind {
	case ast.KindIdentifier:
		return node.AsIdentifier().Text
	case ast.KindQualifiedName:
		q := node.AsQualifiedName()
		return entityNameText(q.Left) + "." + entityNameText(q.Right)
	}
	return ""
}

func propertyNameText(node *ast.Node) (string, bool) {
	if node == nil {
		return "", false
	}
	switch node.Kind {
	case ast.KindIdentifier:
		return node.AsIdentifier().Text, true
	case ast.KindStringLiteral:
		return node.AsStringLiteral().Text, true
	case ast.KindNumericLiteral:
		return node.AsNumericLiteral().Text, true
	default:
		return "", false
	}
}

func numericTagTarget(value any) string {
	if _, ok := value.(string); ok {
		return "bigint"
	}
	return "number"
}

func syntaxNodeKey(node *ast.Node) string {
	if node == nil {
		return "syntax:nil"
	}
	return fmt.Sprintf("syntax:%d:%d", node.Kind, node.Pos())
}
