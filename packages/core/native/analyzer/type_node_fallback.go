package analyzer

import (
	"fmt"
	"os"
	"sort"
	"strconv"
	"strings"

	"github.com/microsoft/typescript-go/shim/ast"
	shimchecker "github.com/microsoft/typescript-go/shim/checker"
	shimscanner "github.com/microsoft/typescript-go/shim/scanner"

	"github.com/samchon/typia/packages/core/native/metadata"
)

type bigintLiteral string

type typeNodeBinding struct {
	Type     *shimchecker.Type
	Node     *ast.Node
	Bindings map[string]typeNodeBinding
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
	visitKey := boundSyntaxNodeKey(node, bindings)
	if a != nil {
		if a.visitingTypeNodes == nil {
			a.visitingTypeNodes = make(map[string]bool)
		}
		if a.visitingTypeNodes[visitKey] {
			if a.Checker != nil {
				if resolved := a.Checker.GetTypeFromTypeNode(node); resolved != nil && resolved.Flags() != shimchecker.TypeFlagsAny {
					return a.Walk(resolved)
				}
			}
			return nil, false
		}
		a.visitingTypeNodes[visitKey] = true
		defer delete(a.visitingTypeNodes, visitKey)
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
	case ast.KindNeverKeyword:
		out := metadata.NewSchema()
		out.Required = false
		return out, true
	case ast.KindLiteralType:
		return literalSchemaFromNode(node.AsLiteralTypeNode().Literal)
	case ast.KindArrayType:
		return a.walkArrayTypeNodeBound(node.AsArrayTypeNode(), bindings)
	case ast.KindTupleType:
		return a.walkTupleTypeNodeBound(node.AsTupleTypeNode(), bindings)
	case ast.KindFunctionType:
		return a.walkFunctionTypeNode(node.AsFunctionTypeNode())
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
			if binding, ok := resolveTypeNodeBinding(ref, bindings); ok {
				return a.walkBoundTypeNode(binding)
			}
			resolved := a.Checker.GetTypeFromTypeNode(node)
			refBindings := buildTypeReferenceBindings(a.Checker, ref, resolved, bindings)
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
			case "Record":
				if ref.TypeArguments != nil && len(ref.TypeArguments.Nodes) == 2 {
					key, ok := a.walkTypeNodeBound(ref.TypeArguments.Nodes[0], bindings)
					if !ok || !supportsObjectIndexKey(key) {
						return nil, false
					}
					value, ok := a.walkTypeNodeBound(ref.TypeArguments.Nodes[1], bindings)
					if !ok {
						return nil, false
					}
					out := metadata.NewSchema()
					obj := &metadata.ObjectType{
						Name: "Record<" + key.Name() + ", " + value.Name() + ">",
						DynamicProperties: []*metadata.Property{{
							Key:   key,
							Value: value,
						}},
						AdditionalProperties: metadata.NewSchema(),
					}
					mergeInto(obj.AdditionalProperties, value)
					out.Objects = append(out.Objects, &metadata.ObjectRef{Type: obj})
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
			case "Partial":
				if ref.TypeArguments != nil && len(ref.TypeArguments.Nodes) == 1 {
					base, ok := a.walkTypeNodeBound(ref.TypeArguments.Nodes[0], bindings)
					if !ok {
						return nil, false
					}
					return applyMappedOptionality(base, false), true
				}
			case "Required":
				if ref.TypeArguments != nil && len(ref.TypeArguments.Nodes) == 1 {
					base, ok := a.walkTypeNodeBound(ref.TypeArguments.Nodes[0], bindings)
					if !ok {
						return nil, false
					}
					return applyMappedOptionality(base, true), true
				}
			case "Pick":
				if ref.TypeArguments != nil && len(ref.TypeArguments.Nodes) == 2 {
					base, ok := a.walkTypeNodeBound(ref.TypeArguments.Nodes[0], bindings)
					if !ok {
						return nil, false
					}
					keys, ok := mappedPickKeys(ref.TypeArguments.Nodes[1])
					if !ok {
						return nil, false
					}
					return applyMappedPick(base, keys), true
				}
			case "Exclude":
				if ref.TypeArguments != nil && len(ref.TypeArguments.Nodes) == 2 {
					base, ok := a.walkTypeNodeBound(ref.TypeArguments.Nodes[0], bindings)
					if !ok {
						return nil, false
					}
					excluded, ok := a.walkTypeNodeBound(ref.TypeArguments.Nodes[1], bindings)
					if !ok {
						return nil, false
					}
					return applyMappedExclude(base, excluded), true
				}
			}
			if resolved != nil && resolved.Flags() != shimchecker.TypeFlagsAny {
				if native, ok := nativeName(a.Checker, resolved); ok && native != "Map" && native != "Set" {
					out := metadata.NewSchema()
					out.Natives = append(out.Natives, metadata.Native{Name: native})
					return out, true
				}
			}
			if aliasDecl := aliasDeclarationTargetTypeAlias(a.Checker, ref); aliasDecl != nil &&
				aliasDecl.Type != nil &&
				aliasDecl.Type != node {
				return a.walkTypeNodeBound(aliasDecl.Type, refBindings)
			}
			if alias := shimchecker.Checker_getAliasSymbolForTypeNode(a.Checker, node); alias != nil {
				if decl := shimchecker.Checker_getDeclarationOfAliasSymbol(a.Checker, alias); decl != nil {
					if decl.Kind == ast.KindInterfaceDeclaration {
						if iface := decl.AsInterfaceDeclaration(); iface != nil {
							return a.walkInterfaceDeclarationBound(iface, refBindings)
						}
					}
					if target := aliasDeclarationTargetNode(decl); target != nil && target != node {
						return a.walkTypeNodeBound(target, refBindings)
					}
				}
				for _, decl := range relatedDeclarations(a.Checker, alias) {
					if decl != nil && decl.Kind == ast.KindInterfaceDeclaration {
						if iface := decl.AsInterfaceDeclaration(); iface != nil {
							return a.walkInterfaceDeclarationBound(iface, refBindings)
						}
					}
					if target := aliasDeclarationTargetNode(decl); target != nil && target != node {
						return a.walkTypeNodeBound(target, refBindings)
					}
				}
			}
			if target := referencedInterfaceDeclaration(a.Checker, ref, resolved); target != nil {
				return a.walkInterfaceDeclarationBound(target, refBindings)
			}
			if target := referencedAliasTargetNode(a.Checker, resolved); target != nil && target != node {
				return a.walkTypeNodeBound(target, refBindings)
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
	if binding.Node != nil && len(binding.Bindings) != 0 {
		if out, ok := a.walkTypeNodeBound(binding.Node, binding.Bindings); ok {
			return out, true
		}
	}
	if binding.Node != nil || binding.Type != nil {
		return a.WalkWithTypeNode(binding.Type, binding.Node)
	}
	return nil, false
}

func (a *Analyzer) walkFunctionTypeNode(node *ast.FunctionTypeNode) (*metadata.Schema, bool) {
	if node == nil {
		return nil, false
	}
	return a.methodLikeSchema(node.AsNode(), node.Parameters, node.Type)
}

func buildTypeReferenceBindings(
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
		typeArgs = safeTypeArguments(checker, resolved)
	}
	if len(typeArgs) == 0 && resolved != nil {
		typeArgs = safeUnionTypes(resolved)
	}
	typeParams := typeReferenceTypeParameters(checker, ref, resolved)
	var argNodes []*ast.Node
	if ref.TypeArguments != nil {
		argNodes = ref.TypeArguments.Nodes
	}
	return buildTypeArgumentBindings(typeParams, argNodes, typeArgs, parent)
}

func buildExpressionTypeBindings(
	checker *shimchecker.Checker,
	expr *ast.Node,
	resolved *shimchecker.Type,
	parent map[string]typeNodeBinding,
) map[string]typeNodeBinding {
	if expr == nil {
		return parent
	}
	heritage := expr.AsExpressionWithTypeArguments()
	if heritage == nil {
		return parent
	}
	typeArgs := []*shimchecker.Type(nil)
	if checker != nil && resolved != nil {
		typeArgs = safeTypeArguments(checker, resolved)
	}
	if len(typeArgs) == 0 && resolved != nil {
		typeArgs = safeUnionTypes(resolved)
	}
	typeParams := expressionTypeParameters(checker, heritage.Expression, resolved)
	var argNodes []*ast.Node
	if heritage.TypeArguments != nil {
		argNodes = heritage.TypeArguments.Nodes
	}
	return buildTypeArgumentBindings(typeParams, argNodes, typeArgs, parent)
}

func buildTypeArgumentBindings(
	typeParams []*ast.Node,
	argNodes []*ast.Node,
	typeArgs []*shimchecker.Type,
	parent map[string]typeNodeBinding,
) map[string]typeNodeBinding {
	if len(typeParams) == 0 {
		return parent
	}
	next := cloneTypeNodeBindings(parent)
	for i, param := range typeParams {
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
		if i < len(argNodes) {
			binding.Node = argNodes[i]
			binding.Bindings = cloneTypeNodeBindings(parent)
		} else if typeParam.DefaultType != nil {
			binding.Node = typeParam.DefaultType.AsNode()
			binding.Bindings = cloneTypeNodeBindings(next)
		}
		if i < len(typeArgs) {
			binding.Type = typeArgs[i]
		}
		if binding.Node == nil && binding.Type == nil {
			continue
		}
		next[name] = binding
	}
	return next
}

func typeReferenceTypeParameters(
	checker *shimchecker.Checker,
	ref *ast.TypeReferenceNode,
	resolved *shimchecker.Type,
) []*ast.Node {
	if aliasDecl := aliasDeclarationTargetTypeAlias(checker, ref); aliasDecl != nil &&
		aliasDecl.TypeParameters != nil &&
		len(aliasDecl.TypeParameters.Nodes) != 0 {
		return aliasDecl.TypeParameters.Nodes
	}
	if iface := referencedInterfaceDeclaration(checker, ref, resolved); iface != nil &&
		iface.TypeParameters != nil &&
		len(iface.TypeParameters.Nodes) != 0 {
		return iface.TypeParameters.Nodes
	}
	return nil
}

func referencedInterfaceDeclaration(
	checker *shimchecker.Checker,
	ref *ast.TypeReferenceNode,
	resolved *shimchecker.Type,
) *ast.InterfaceDeclaration {
	if ref == nil {
		return nil
	}
	return referencedInterfaceDeclarationFromExpression(checker, ref.TypeName.AsNode(), resolved)
}

func referencedInterfaceDeclarationFromExpression(
	checker *shimchecker.Checker,
	expr *ast.Node,
	resolved *shimchecker.Type,
) *ast.InterfaceDeclaration {
	symbols := expressionSymbols(checker, expr, resolved)
	for _, decl := range relatedDeclarations(checker, symbols...) {
		if decl != nil && decl.Kind == ast.KindInterfaceDeclaration {
			return decl.AsInterfaceDeclaration()
		}
	}
	return nil
}

func expressionTypeParameters(
	checker *shimchecker.Checker,
	expr *ast.Node,
	resolved *shimchecker.Type,
) []*ast.Node {
	if expr == nil {
		return nil
	}
	symbols := expressionSymbols(checker, expr, resolved)
	for _, decl := range relatedDeclarations(checker, symbols...) {
		switch {
		case decl != nil && decl.Kind == ast.KindTypeAliasDeclaration:
			if alias := decl.AsTypeAliasDeclaration(); alias != nil &&
				alias.TypeParameters != nil &&
				len(alias.TypeParameters.Nodes) != 0 {
				return alias.TypeParameters.Nodes
			}
		case decl != nil && decl.Kind == ast.KindInterfaceDeclaration:
			if iface := decl.AsInterfaceDeclaration(); iface != nil &&
				iface.TypeParameters != nil &&
				len(iface.TypeParameters.Nodes) != 0 {
				return iface.TypeParameters.Nodes
			}
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
	key := boundSyntaxNodeKey(root, bindings)
	name := "Interface#" + intToString(int64(root.Pos()))
	if a.Checker != nil {
		if resolved := a.Checker.GetTypeAtLocation(root); resolved != nil {
			if resolvedName := strings.TrimSpace(typeName(a.Checker, resolved)); resolvedName != "" {
				name = resolvedName
			}
		}
	}
	if qualified := qualifiedDeclarationName(root); qualified != "" {
		if strings.HasPrefix(name, "Interface#") ||
			(decl.Name() != nil && name == decl.Name().Text()) {
			name = qualified
		}
	} else if strings.HasPrefix(name, "Interface#") && decl.Name() != nil && decl.Name().Text() != "" {
		name = decl.Name().Text()
	}
	obj, fresh := a.Collection.EmplaceObject(key, name)
	if fresh {
		obj.Description = nodeDescription(root)
		obj.JsDocTagInfos = nodeJsDocTagInfos(root)
		obj.Properties = make([]*metadata.Property, 0)
		obj.DynamicProperties = make([]*metadata.Property, 0)
		if !a.mergeInterfaceHeritage(obj, decl, bindings) {
			return nil, false
		}
		if !a.appendInterfaceMembersBound(obj, decl.Members, bindings) {
			return nil, false
		}
	}
	out := metadata.NewSchema()
	out.Objects = append(out.Objects, &metadata.ObjectRef{Type: obj})
	return out, true
}

func (a *Analyzer) mergeInterfaceHeritage(
	obj *metadata.ObjectType,
	decl *ast.InterfaceDeclaration,
	bindings map[string]typeNodeBinding,
) bool {
	if obj == nil || decl == nil || decl.HeritageClauses == nil {
		return true
	}
	for _, clauseNode := range decl.HeritageClauses.Nodes {
		if clauseNode == nil {
			continue
		}
		clause := clauseNode.AsHeritageClause()
		if clause == nil || clause.Types == nil {
			continue
		}
		for _, baseNode := range clause.Types.Nodes {
			if baseNode == nil {
				return false
			}
			base := baseNode.AsExpressionWithTypeArguments()
			if base == nil {
				return false
			}
			resolved := (*shimchecker.Type)(nil)
			if a.Checker != nil {
				resolved = a.Checker.GetTypeAtLocation(baseNode)
			}
			next := buildExpressionTypeBindings(a.Checker, baseNode, resolved, bindings)
			switch {
			case referencedInterfaceDeclarationFromExpression(a.Checker, base.Expression, resolved) != nil:
				target := referencedInterfaceDeclarationFromExpression(a.Checker, base.Expression, resolved)
				schema, ok := a.walkInterfaceDeclarationBound(target, next)
				if !ok || !mergeInheritedSchemaIntoObject(obj, schema) {
					return false
				}
			case resolved != nil && resolved.Flags() != shimchecker.TypeFlagsAny:
				schema, ok := a.Walk(resolved)
				if !ok || !mergeInheritedSchemaIntoObject(obj, schema) {
					return false
				}
			default:
				return false
			}
		}
	}
	return true
}

func (a *Analyzer) appendInterfaceMembersBound(
	obj *metadata.ObjectType,
	members *ast.NodeList,
	bindings map[string]typeNodeBinding,
) bool {
	if obj == nil || members == nil {
		return true
	}
	for _, member := range members.Nodes {
		if member == nil {
			continue
		}
		switch member.Kind {
		case ast.KindPropertySignature:
			prop := member.AsPropertySignatureDeclaration()
			if prop == nil || prop.Type == nil {
				return false
			}
			if nodeHasJsDocTag(member, "internal") {
				continue
			}
			valueSchema, ok := a.walkTypeNodeBound(prop.Type, bindings)
			if !ok {
				return false
			}
			applyCommentTags(valueSchema, member)
			if prop.PostfixToken != nil {
				valueSchema.Optional = true
				valueSchema.Required = false
			}
			keyName, ok := propertyNameText(member.Name())
			if !ok {
				return false
			}
			keySchema := metadata.NewSchema()
			keySchema.AddConstant(metadata.AtomicString, keyName)
			description := nodeDescription(member)
			upsertObjectProperty(obj, &metadata.Property{
				Key:           keySchema,
				Value:         valueSchema,
				Description:   description,
				JsDocTags:     nodeJsDocTagNames(member),
				JsDocTexts:    nodeJsDocTexts(member),
				JsDocTagInfos: nodeJsDocTagInfos(member),
				Mutability:    propertyMutabilityFromNode(member),
			})
		case ast.KindMethodSignature:
			method := member.AsMethodSignatureDeclaration()
			if method == nil {
				return false
			}
			if nodeHasJsDocTag(member, "internal") {
				continue
			}
			valueSchema, ok := a.methodSignatureSchema(method)
			if !ok {
				return false
			}
			keyName, ok := propertyNameText(member.Name())
			if !ok {
				return false
			}
			keySchema := metadata.NewSchema()
			keySchema.AddConstant(metadata.AtomicString, keyName)
			description := nodeDescription(member)
			upsertObjectProperty(obj, &metadata.Property{
				Key:           keySchema,
				Value:         valueSchema,
				Description:   description,
				JsDocTags:     nodeJsDocTagNames(member),
				JsDocTexts:    nodeJsDocTexts(member),
				JsDocTagInfos: nodeJsDocTagInfos(member),
				Mutability:    propertyMutabilityFromNode(member),
			})
		case ast.KindIndexSignature:
			index := member.AsIndexSignatureDeclaration()
			if index == nil || index.Type == nil || index.Parameters == nil || len(index.Parameters.Nodes) == 0 {
				return false
			}
			parameter := index.Parameters.Nodes[0]
			if parameter == nil || parameter.Kind != ast.KindParameter {
				return false
			}
			paramDecl := parameter.AsParameterDeclaration()
			if paramDecl == nil || paramDecl.Type == nil {
				return false
			}
			keySchema, ok := a.walkTypeNodeBound(paramDecl.Type, bindings)
			if !ok || !supportsObjectIndexKey(keySchema) {
				return false
			}
			valueSchema, ok := a.walkTypeNodeBound(index.Type, bindings)
			if !ok {
				return false
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
	return true
}

func mergeInheritedSchemaIntoObject(obj *metadata.ObjectType, schema *metadata.Schema) bool {
	if obj == nil || schema == nil {
		return false
	}
	if len(schema.Objects) == 0 {
		return schema.Empty()
	}
	for _, ref := range schema.Objects {
		if ref == nil || ref.Type == nil {
			continue
		}
		mergeInheritedObject(obj, ref.Type)
	}
	return true
}

func mergeInheritedObject(dst *metadata.ObjectType, src *metadata.ObjectType) {
	if dst == nil || src == nil {
		return
	}
	for _, prop := range src.Properties {
		upsertObjectProperty(dst, cloneObjectProperty(prop))
	}
	for _, prop := range src.DynamicProperties {
		dst.DynamicProperties = append(dst.DynamicProperties, cloneObjectProperty(prop))
	}
	if src.AdditionalProperties != nil {
		if dst.AdditionalProperties == nil {
			dst.AdditionalProperties = metadata.NewSchema()
		}
		mergeInto(dst.AdditionalProperties, src.AdditionalProperties)
	}
}

func cloneObjectProperty(prop *metadata.Property) *metadata.Property {
	if prop == nil {
		return nil
	}
	out := &metadata.Property{
		Key:         prop.Key,
		Value:       prop.Value,
		Description: prop.Description,
	}
	if len(prop.JsDocTags) != 0 {
		out.JsDocTags = append([]string{}, prop.JsDocTags...)
	}
	return out
}

func upsertObjectProperty(obj *metadata.ObjectType, prop *metadata.Property) {
	if obj == nil || prop == nil {
		return
	}
	key, ok := prop.Key.GetSoleLiteral()
	if !ok {
		obj.Properties = append(obj.Properties, prop)
		return
	}
	for i, existing := range obj.Properties {
		if existing == nil || existing.Key == nil {
			continue
		}
		current, ok := existing.Key.GetSoleLiteral()
		if ok && current == key {
			obj.Properties[i] = prop
			return
		}
	}
	obj.Properties = append(obj.Properties, prop)
}

func aliasDeclarationTargetTypeAlias(checker *shimchecker.Checker, ref *ast.TypeReferenceNode) *ast.TypeAliasDeclaration {
	if ref == nil {
		return nil
	}
	node := ref.TypeName.AsNode()
	if node == nil {
		return nil
	}
	seeds := expressionSymbols(checker, node, nil)
	for _, decl := range relatedDeclarations(checker, seeds...) {
		if decl != nil && decl.Kind == ast.KindTypeAliasDeclaration {
			if alias := decl.AsTypeAliasDeclaration(); alias != nil {
				return alias
			}
		}
	}
	return nil
}

func expressionSymbols(
	checker *shimchecker.Checker,
	expr *ast.Node,
	resolved *shimchecker.Type,
) []*ast.Symbol {
	out := make([]*ast.Symbol, 0, 4)
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
	appendNode := func(node *ast.Node) {
		if node == nil {
			return
		}
		if node.Symbol() != nil {
			appendSymbol(node.Symbol())
		}
		if checker != nil {
			if sym := checker.GetSymbolAtLocation(node); sym != nil {
				appendSymbol(sym)
			}
		}
	}
	var walkExpr func(*ast.Node)
	walkExpr = func(node *ast.Node) {
		if node == nil {
			return
		}
		appendNode(node)
		if node.Kind == ast.KindQualifiedName {
			q := node.AsQualifiedName()
			if q != nil && q.Right != nil {
				appendNode(q.Right)
			}
		}
	}
	walkExpr(expr)
	if checker != nil && expr != nil {
		for _, meaning := range []ast.SymbolFlags{
			ast.SymbolFlagsType,
			ast.SymbolFlagsNamespace,
		} {
			appendSymbol(shimchecker.Checker_resolveEntityName(
				checker,
				expr,
				meaning,
				true,
				false,
				nil,
			))
			appendSymbol(shimchecker.Checker_resolveEntityName(
				checker,
				expr,
				meaning,
				true,
				true,
				nil,
			))
		}
	}
	if resolved != nil && resolved.Symbol() != nil {
		appendSymbol(resolved.Symbol())
	}
	if resolved != nil && shimchecker.Type_getTypeNameSymbol(resolved) != nil {
		appendSymbol(shimchecker.Type_getTypeNameSymbol(resolved))
	}
	return out
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

func safeTypeArguments(checker *shimchecker.Checker, resolved *shimchecker.Type) (out []*shimchecker.Type) {
	if checker == nil || resolved == nil {
		return nil
	}
	defer func() {
		if recover() != nil {
			out = nil
		}
	}()
	return shimchecker.Checker_getTypeArguments(checker, resolved)
}

func safeUnionTypes(resolved *shimchecker.Type) (out []*shimchecker.Type) {
	if resolved == nil {
		return nil
	}
	defer func() {
		if recover() != nil {
			out = nil
		}
	}()
	return resolved.Types()
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
	if decl.Kind != ast.KindTypeAliasDeclaration {
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
			wrapper := metadata.NewSchema()
			if len(schema.Arrays) == 1 &&
				schema.Size() == 1 &&
				schema.Bucket() == 1 &&
				schema.Arrays[0] != nil &&
				schema.Arrays[0].Type != nil &&
				schema.Arrays[0].Type.Value != nil {
				wrapper.Rest = schema.Arrays[0].Type.Value
			} else {
				wrapper.Rest = schema
			}
			tuple.Elements = append(tuple.Elements, wrapper)
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
	children := make([]*metadata.Schema, 0, len(node.Types.Nodes))
	var tags []metadata.TypeTag
	var regulars []*metadata.Schema
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
		if tag, ok := extractTag(schema); ok {
			tags = append(tags, tag)
			continue
		}
		children = append(children, schema)
		regular++
	}
	if regular == 0 {
		return nil, false
	}
	out := metadata.NewSchema()
	for _, child := range children {
		regulars = append(regulars, child)
	}
	switch {
	case len(regulars) == 1:
		mergeInto(out, regulars[0])
	case len(regulars) > 1:
		if merged, ok := mergeObjectIntersection(regulars); ok {
			mergeInto(out, merged)
		} else {
			return nil, false
		}
	default:
		for _, child := range children {
			mergeInto(out, child)
		}
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
	key := boundSyntaxNodeKey(root, bindings)
	name := "TypeLiteral#" + intToString(int64(root.Pos()))
	if aliasName := typeLiteralDeclarationName(root); aliasName != "" {
		name = aliasName
	}
	obj, fresh := a.Collection.EmplaceObject(key, name)
	if fresh {
		obj.Description = nodeDescription(root)
		obj.JsDocTagInfos = nodeJsDocTagInfos(root)
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
					Key:           keySchema,
					Value:         valueSchema,
					JsDocTags:     nodeJsDocTagNames(member),
					JsDocTexts:    nodeJsDocTexts(member),
					JsDocTagInfos: nodeJsDocTagInfos(member),
				})
			}
		}
	}
	out := metadata.NewSchema()
	out.Objects = append(out.Objects, &metadata.ObjectRef{Type: obj})
	return out, true
}

func typeLiteralDeclarationName(root *ast.Node) string {
	if root == nil || root.Parent == nil {
		return ""
	}
	switch root.Parent.Kind {
	case ast.KindTypeAliasDeclaration, ast.KindInterfaceDeclaration:
		return qualifiedDeclarationName(root.Parent)
	default:
		return ""
	}
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
	case "Default":
		value, ok := firstTypeArgumentValue(ref)
		if !ok {
			return metadata.TypeTag{}, false
		}
		switch value.(type) {
		case bool:
			tag.Target = "boolean"
		case string:
			tag.Target = "string"
		case int64, float64:
			tag.Target = "number"
		case bigintLiteral:
			tag.Target = "bigint"
			value = string(value.(bigintLiteral))
		default:
			return metadata.TypeTag{}, false
		}
		tag.Kind = "default"
		tag.Value = value
		tag.Exclusive = true
		if tag.Target == "bigint" {
			tag.Schema = map[string]any{
				"default": value,
			}
		} else {
			tag.Schema = map[string]any{
				"default": value,
			}
		}
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
			if bigint, ok := value.(bigintLiteral); ok {
				return string(bigint), true
			}
			return value, true
		}
		return templateLiteralTypeValue(literal)
	}
	if value, ok := literalNodeValue(node); ok {
		if bigint, ok := value.(bigintLiteral); ok {
			return string(bigint), true
		}
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

func applyMappedOptionality(schema *metadata.Schema, required bool) *metadata.Schema {
	if schema == nil {
		return nil
	}
	out := cloneSchemaShallow(schema)
	out.Objects = make([]*metadata.ObjectRef, 0, len(schema.Objects))
	for _, ref := range schema.Objects {
		if ref == nil || ref.Type == nil {
			out.Objects = append(out.Objects, ref)
			continue
		}
		out.Objects = append(out.Objects, &metadata.ObjectRef{
			Type: cloneObjectWithProperties(ref.Type, func(prop *metadata.Property) *metadata.Property {
				if prop == nil {
					return nil
				}
				next := clonePropertyShallow(prop)
				if next.Value != nil {
					next.Value.Required = required
					next.Value.Optional = !required
				}
				return next
			}),
			Tags: ref.Tags.Clone(),
		})
	}
	return out
}

func applyMappedPick(schema *metadata.Schema, keys map[string]struct{}) *metadata.Schema {
	if schema == nil {
		return nil
	}
	out := cloneSchemaShallow(schema)
	out.Objects = make([]*metadata.ObjectRef, 0, len(schema.Objects))
	for _, ref := range schema.Objects {
		if ref == nil || ref.Type == nil {
			out.Objects = append(out.Objects, ref)
			continue
		}
		obj := cloneObjectWithProperties(ref.Type, func(prop *metadata.Property) *metadata.Property {
			if prop == nil || prop.Key == nil {
				return nil
			}
			name, ok := prop.Key.GetSoleLiteral()
			if !ok {
				return nil
			}
			if _, keep := keys[name]; !keep {
				return nil
			}
			return clonePropertyShallow(prop)
		})
		obj.DynamicProperties = nil
		obj.AdditionalProperties = nil
		out.Objects = append(out.Objects, &metadata.ObjectRef{
			Type: obj,
			Tags: ref.Tags.Clone(),
		})
	}
	return out
}

func applyMappedExclude(schema *metadata.Schema, excluded *metadata.Schema) *metadata.Schema {
	return applyMappedExcludeInternal(schema, excluded, map[*metadata.Schema]struct{}{})
}

func applyMappedExcludeInternal(
	schema *metadata.Schema,
	excluded *metadata.Schema,
	visited map[*metadata.Schema]struct{},
) *metadata.Schema {
	if schema == nil {
		return nil
	}
	out := cloneSchemaShallow(schema)
	if excluded == nil {
		return out
	}
	if _, exists := visited[excluded]; exists {
		return out
	}
	visited[excluded] = struct{}{}
	defer delete(visited, excluded)

	if len(excluded.Aliases) != 0 {
		aliasNames := map[string]struct{}{}
		for _, ref := range excluded.Aliases {
			if ref == nil || ref.Type == nil {
				continue
			}
			aliasNames[ref.Type.Name] = struct{}{}
			if ref.Type.Value != nil {
				out = applyMappedExcludeInternal(out, ref.Type.Value, visited)
			}
		}
		filtered := out.Aliases[:0]
		for _, ref := range out.Aliases {
			if ref == nil || ref.Type == nil {
				filtered = append(filtered, ref)
				continue
			}
			if _, skip := aliasNames[ref.Type.Name]; !skip {
				filtered = append(filtered, ref)
			}
		}
		out.Aliases = filtered
	}

	if len(excluded.Objects) != 0 {
		names := map[string]struct{}{}
		for _, ref := range excluded.Objects {
			if ref == nil || ref.Type == nil {
				continue
			}
			names[ref.Type.Name] = struct{}{}
		}
		filtered := out.Objects[:0]
		for _, ref := range out.Objects {
			if ref == nil || ref.Type == nil {
				filtered = append(filtered, ref)
				continue
			}
			if _, skip := names[ref.Type.Name]; !skip {
				filtered = append(filtered, ref)
			}
		}
		out.Objects = filtered
	}

	if len(excluded.Arrays) != 0 {
		names := map[string]struct{}{}
		for _, ref := range excluded.Arrays {
			if ref == nil || ref.Type == nil {
				continue
			}
			names[ref.Type.Name] = struct{}{}
		}
		filtered := out.Arrays[:0]
		for _, ref := range out.Arrays {
			if ref == nil || ref.Type == nil {
				filtered = append(filtered, ref)
				continue
			}
			if _, skip := names[ref.Type.Name]; !skip {
				filtered = append(filtered, ref)
			}
		}
		out.Arrays = filtered
	}

	if len(excluded.Tuples) != 0 {
		names := map[string]struct{}{}
		for _, ref := range excluded.Tuples {
			if ref == nil || ref.Type == nil {
				continue
			}
			names[ref.Type.Name] = struct{}{}
		}
		filtered := out.Tuples[:0]
		for _, ref := range out.Tuples {
			if ref == nil || ref.Type == nil {
				filtered = append(filtered, ref)
				continue
			}
			if _, skip := names[ref.Type.Name]; !skip {
				filtered = append(filtered, ref)
			}
		}
		out.Tuples = filtered
	}

	if len(excluded.Natives) != 0 {
		names := map[string]struct{}{}
		for _, native := range excluded.Natives {
			names[native.Name] = struct{}{}
		}
		filtered := out.Natives[:0]
		for _, native := range out.Natives {
			if _, skip := names[native.Name]; !skip {
				filtered = append(filtered, native)
			}
		}
		out.Natives = filtered
	}

	if len(excluded.Atomics) != 0 {
		denied := map[metadata.AtomicKind]struct{}{}
		for _, atomic := range excluded.Atomics {
			denied[atomic.Type] = struct{}{}
		}
		filtered := out.Atomics[:0]
		for _, atomic := range out.Atomics {
			if _, skip := denied[atomic.Type]; !skip {
				filtered = append(filtered, atomic)
			}
		}
		out.Atomics = filtered
	}

	if len(excluded.Constants) != 0 {
		denied := map[metadata.AtomicKind]map[any]struct{}{}
		for _, constant := range excluded.Constants {
			bucket := denied[constant.Type]
			if bucket == nil {
				bucket = map[any]struct{}{}
				denied[constant.Type] = bucket
			}
			for _, value := range constant.Values {
				bucket[value.Value] = struct{}{}
			}
		}
		filtered := make([]metadata.Constant, 0, len(out.Constants))
		for _, constant := range out.Constants {
			bucket := denied[constant.Type]
			if bucket == nil {
				filtered = append(filtered, constant)
				continue
			}
			values := make([]metadata.ConstantValue, 0, len(constant.Values))
			for _, value := range constant.Values {
				if _, skip := bucket[value.Value]; !skip {
					values = append(values, value)
				}
			}
			if len(values) != 0 {
				next := constant
				next.Values = values
				filtered = append(filtered, next)
			}
		}
		out.Constants = filtered
	}

	if len(excluded.Templates) != 0 {
		denied := map[string]struct{}{}
		for _, template := range excluded.Templates {
			denied[template.RawName] = struct{}{}
		}
		filtered := out.Templates[:0]
		for _, template := range out.Templates {
			if _, skip := denied[template.RawName]; !skip {
				filtered = append(filtered, template)
			}
		}
		out.Templates = filtered
	}

	return out
}

func mappedPickKeys(node *ast.Node) (map[string]struct{}, bool) {
	if node == nil {
		return nil, false
	}
	switch node.Kind {
	case ast.KindLiteralType:
		value, ok := literalNodeValue(node.AsLiteralTypeNode().Literal)
		if !ok {
			return nil, false
		}
		text, ok := value.(string)
		if !ok {
			return nil, false
		}
		return map[string]struct{}{text: {}}, true
	case ast.KindUnionType:
		union := node.AsUnionTypeNode()
		if union == nil || union.Types == nil {
			return nil, false
		}
		out := make(map[string]struct{}, len(union.Types.Nodes))
		for _, elem := range union.Types.Nodes {
			keys, ok := mappedPickKeys(elem)
			if !ok {
				return nil, false
			}
			for key := range keys {
				out[key] = struct{}{}
			}
		}
		return out, true
	default:
		return nil, false
	}
}

func cloneSchemaShallow(input *metadata.Schema) *metadata.Schema {
	if input == nil {
		return nil
	}
	out := *input
	out.Atomics = append([]metadata.Atomic(nil), input.Atomics...)
	out.Constants = append([]metadata.Constant(nil), input.Constants...)
	out.Templates = append([]metadata.Template(nil), input.Templates...)
	out.Arrays = append([]*metadata.ArrayRef(nil), input.Arrays...)
	out.Tuples = append([]*metadata.TupleRef(nil), input.Tuples...)
	out.Objects = append([]*metadata.ObjectRef(nil), input.Objects...)
	out.Aliases = append([]*metadata.AliasRef(nil), input.Aliases...)
	out.Natives = append([]metadata.Native(nil), input.Natives...)
	out.Sets = append([]*metadata.SetRef(nil), input.Sets...)
	out.Maps = append([]*metadata.MapRef(nil), input.Maps...)
	out.Functions = append([]*metadata.Function(nil), input.Functions...)
	return &out
}

func clonePropertyShallow(input *metadata.Property) *metadata.Property {
	if input == nil {
		return nil
	}
	out := *input
	if input.Key != nil {
		out.Key = cloneSchemaShallow(input.Key)
	}
	if input.Value != nil {
		out.Value = cloneSchemaShallow(input.Value)
	}
	out.JsDocTags = append([]string(nil), input.JsDocTags...)
	out.JsDocTagInfos = append([]metadata.JsDocTagInfo(nil), input.JsDocTagInfos...)
	if len(input.JsDocTexts) != 0 {
		out.JsDocTexts = make(map[string][]string, len(input.JsDocTexts))
		for key, values := range input.JsDocTexts {
			out.JsDocTexts[key] = append([]string(nil), values...)
		}
	}
	return &out
}

func cloneObjectWithProperties(
	input *metadata.ObjectType,
	transform func(*metadata.Property) *metadata.Property,
) *metadata.ObjectType {
	if input == nil {
		return nil
	}
	out := *input
	out.Properties = make([]*metadata.Property, 0, len(input.Properties))
	for _, prop := range input.Properties {
		next := transform(prop)
		if next != nil {
			out.Properties = append(out.Properties, next)
		}
	}
	out.DynamicProperties = make([]*metadata.Property, 0, len(input.DynamicProperties))
	for _, prop := range input.DynamicProperties {
		next := transform(prop)
		if next != nil {
			out.DynamicProperties = append(out.DynamicProperties, next)
		}
	}
	if input.AdditionalProperties != nil {
		out.AdditionalProperties = cloneSchemaShallow(input.AdditionalProperties)
	}
	out.JsDocTags = append([]string(nil), input.JsDocTags...)
	out.JsDocTagInfos = append([]metadata.JsDocTagInfo(nil), input.JsDocTagInfos...)
	return &out
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
	case ast.KindComputedPropertyName:
		name := node.AsComputedPropertyName()
		if name == nil || name.Expression == nil {
			return "", false
		}
		return propertyNameText(name.Expression)
	default:
		return "", false
	}
}

func numericTagTarget(value any) string {
	switch value.(type) {
	case string, bigintLiteral:
		return "bigint"
	}
	return "number"
}

func boundSyntaxNodeKey(node *ast.Node, bindings map[string]typeNodeBinding) string {
	return boundSyntaxNodeKeyInternal(node, bindings, map[string]struct{}{}, 0)
}

func boundSyntaxNodeKeyInternal(
	node *ast.Node,
	bindings map[string]typeNodeBinding,
	visiting map[string]struct{},
	depth int,
) string {
	key := syntaxNodeKey(node)
	if len(bindings) == 0 {
		return key
	}
	if depth >= 1 {
		return key + "|bindings:" + shallowBindingsKey(bindings)
	}
	if _, exists := visiting[key]; exists {
		return key + "|cycle"
	}
	visiting[key] = struct{}{}
	defer delete(visiting, key)
	keys := make([]string, 0, len(bindings))
	for name := range bindings {
		keys = append(keys, name)
	}
	sort.Strings(keys)
	var builder strings.Builder
	builder.WriteString(key)
	for _, name := range keys {
		binding := bindings[name]
		builder.WriteString("|")
		builder.WriteString(name)
		builder.WriteString("=")
		switch {
		case binding.Node != nil:
			builder.WriteString(boundSyntaxNodeKeyInternal(binding.Node, binding.Bindings, visiting, depth+1))
			if binding.Type != nil {
				builder.WriteString("@")
				builder.WriteString(typeKey(binding.Type))
			}
		case binding.Type != nil:
			builder.WriteString(typeKey(binding.Type))
		default:
			builder.WriteString("nil")
		}
	}
	return builder.String()
}

func shallowBindingsKey(bindings map[string]typeNodeBinding) string {
	keys := make([]string, 0, len(bindings))
	for name := range bindings {
		keys = append(keys, name)
	}
	sort.Strings(keys)
	var builder strings.Builder
	for i, name := range keys {
		if i != 0 {
			builder.WriteString(",")
		}
		builder.WriteString(name)
		builder.WriteString("=")
		builder.WriteString(shallowTypeNodeBindingKey(bindings[name]))
	}
	return builder.String()
}

func shallowTypeNodeBindingKey(binding typeNodeBinding) string {
	switch {
	case binding.Node != nil && binding.Type != nil:
		return syntaxNodeKey(binding.Node) + "@" + typeKey(binding.Type)
	case binding.Node != nil:
		return syntaxNodeKey(binding.Node)
	case binding.Type != nil:
		return typeKey(binding.Type)
	default:
		return "nil"
	}
}

func syntaxNodeKey(node *ast.Node) string {
	if node == nil {
		return "syntax:nil"
	}
	return fmt.Sprintf("syntax:%d:%d", node.Kind, node.Pos())
}
