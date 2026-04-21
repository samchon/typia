package analyzer

import (
	"fmt"
	"strconv"
	"strings"

	"github.com/microsoft/typescript-go/shim/ast"
	shimchecker "github.com/microsoft/typescript-go/shim/checker"

	"github.com/samchon/typia/packages/typia/native/metadata"
)

func (a *Analyzer) walkTypeNode(node *ast.Node) (*metadata.Schema, bool) {
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
	case ast.KindUnionType:
		return a.walkUnionTypeNode(node.AsUnionTypeNode())
	case ast.KindIntersectionType:
		return a.walkIntersectionTypeNode(node.AsIntersectionTypeNode())
	case ast.KindTypeLiteral:
		return a.walkTypeLiteralNode(node, node.AsTypeLiteralNode())
	case ast.KindTypeReference:
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

func (a *Analyzer) walkUnionTypeNode(node *ast.UnionTypeNode) (*metadata.Schema, bool) {
	if node == nil || node.Types == nil || len(node.Types.Nodes) == 0 {
		return nil, false
	}
	out := metadata.NewSchema()
	for _, child := range node.Types.Nodes {
		schema, ok := a.walkTypeNode(child)
		if !ok {
			return nil, false
		}
		mergeInto(out, schema)
	}
	return out, true
}

func (a *Analyzer) walkIntersectionTypeNode(node *ast.IntersectionTypeNode) (*metadata.Schema, bool) {
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
		schema, ok := a.walkTypeNode(child)
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
				if member == nil || member.Kind != ast.KindPropertySignature {
					continue
				}
				prop := member.AsPropertySignatureDeclaration()
				propType := member.Type()
				if propType == nil {
					return nil, false
				}
				valueSchema, ok := a.walkTypeNode(propType)
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
	if strings.HasPrefix(name, "tags.") {
		name = strings.TrimPrefix(name, "tags.")
	}
	if strings.HasPrefix(name, "ifaceTags.") {
		name = strings.TrimPrefix(name, "ifaceTags.")
	}
	if ref.TypeArguments == nil || len(ref.TypeArguments.Nodes) == 0 {
		return metadata.TypeTag{}, false
	}
	value, ok := typeArgumentValue(ref.TypeArguments.Nodes[0])
	if !ok {
		return metadata.TypeTag{}, false
	}

	tag := metadata.TypeTag{Name: name}
	switch name {
	case "Format":
		tag.Target = "string"
		tag.Kind = "format"
		tag.Value = value
	case "Pattern":
		tag.Target = "string"
		tag.Kind = "pattern"
		tag.Value = value
	case "MinLength":
		tag.Target = "string"
		tag.Kind = "minLength"
		tag.Value = value
	case "MaxLength":
		tag.Target = "string"
		tag.Kind = "maxLength"
		tag.Value = value
	case "Minimum":
		tag.Target = numericTagTarget(value)
		tag.Kind = "minimum"
		tag.Value = value
	case "Maximum":
		tag.Target = numericTagTarget(value)
		tag.Kind = "maximum"
		tag.Value = value
	case "ExclusiveMinimum":
		tag.Target = numericTagTarget(value)
		tag.Kind = "exclusiveMinimum"
		tag.Value = value
	case "ExclusiveMaximum":
		tag.Target = numericTagTarget(value)
		tag.Kind = "exclusiveMaximum"
		tag.Value = value
	case "MultipleOf":
		tag.Target = numericTagTarget(value)
		tag.Kind = "multipleOf"
		tag.Value = value
	case "Type":
		tag.Target = "number"
		tag.Kind = "type"
		tag.Value = value
	default:
		return metadata.TypeTag{}, false
	}
	return tag, true
}

func literalSchemaFromNode(node *ast.Node) (*metadata.Schema, bool) {
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
	case bool:
		if v {
			out.AddAtomic(metadata.AtomicBoolean)
		} else {
			out.AddAtomic(metadata.AtomicBoolean)
		}
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
		return literalNodeValue(node.AsLiteralTypeNode().Literal)
	}
	return literalNodeValue(node)
}

func literalNodeValue(node *ast.Node) (any, bool) {
	if node == nil {
		return nil, false
	}
	switch node.Kind {
	case ast.KindStringLiteral:
		return node.AsStringLiteral().Text, true
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
		return raw, true
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
		default:
			return nil, false
		}
	}
	return nil, false
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
