package ast

import (
	innerast "github.com/microsoft/typescript-go/internal/ast"
	_ "unsafe"
)

type CallExpression = innerast.CallExpression
type Diagnostic = innerast.Diagnostic
type Identifier = innerast.Identifier
type IntersectionTypeNode = innerast.IntersectionTypeNode
type Kind = innerast.Kind
type LiteralTypeNode = innerast.LiteralTypeNode
type Node = innerast.Node
type PrefixUnaryExpression = innerast.PrefixUnaryExpression
type PropertySignatureDeclaration = innerast.PropertySignatureDeclaration
type QualifiedName = innerast.QualifiedName
type TypeLiteralNode = innerast.TypeLiteralNode
type TypeReferenceNode = innerast.TypeReferenceNode
type SourceFile = innerast.SourceFile
type StringLiteral = innerast.StringLiteral
type Symbol = innerast.Symbol
type SymbolFlags = innerast.SymbolFlags
type NumericLiteral = innerast.NumericLiteral
type BigIntLiteral = innerast.BigIntLiteral
type UnionTypeNode = innerast.UnionTypeNode

const (
	KindCallExpression           = innerast.KindCallExpression
	KindIdentifier               = innerast.KindIdentifier
	KindPropertyAccessExpression = innerast.KindPropertyAccessExpression
	KindPropertySignature        = innerast.KindPropertySignature
	KindStringKeyword            = innerast.KindStringKeyword
	KindNumberKeyword            = innerast.KindNumberKeyword
	KindBooleanKeyword           = innerast.KindBooleanKeyword
	KindBigIntKeyword            = innerast.KindBigIntKeyword
	KindAnyKeyword               = innerast.KindAnyKeyword
	KindUndefinedKeyword         = innerast.KindUndefinedKeyword
	KindNullKeyword              = innerast.KindNullKeyword
	KindVoidKeyword              = innerast.KindVoidKeyword
	KindTrueKeyword              = innerast.KindTrueKeyword
	KindFalseKeyword             = innerast.KindFalseKeyword
	KindStringLiteral            = innerast.KindStringLiteral
	KindNumericLiteral           = innerast.KindNumericLiteral
	KindBigIntLiteral            = innerast.KindBigIntLiteral
	KindTypeReference            = innerast.KindTypeReference
	KindLiteralType              = innerast.KindLiteralType
	KindTypeLiteral              = innerast.KindTypeLiteral
	KindUnionType                = innerast.KindUnionType
	KindIntersectionType         = innerast.KindIntersectionType
	KindPrefixUnaryExpression    = innerast.KindPrefixUnaryExpression
	KindQualifiedName            = innerast.KindQualifiedName
	KindMinusToken               = innerast.KindMinusToken

	SymbolFlagsOptional = innerast.SymbolFlagsOptional
)

//go:linkname GetSourceFileOfNode github.com/microsoft/typescript-go/internal/ast.GetSourceFileOfNode
func GetSourceFileOfNode(node *innerast.Node) *innerast.SourceFile
