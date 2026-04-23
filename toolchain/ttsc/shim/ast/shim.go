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
type NoSubstitutionTemplateLiteral = innerast.NoSubstitutionTemplateLiteral
type Node = innerast.Node
type TemplateHead = innerast.TemplateHead
type TemplateLiteralTypeNode = innerast.TemplateLiteralTypeNode
type TemplateLiteralTypeSpan = innerast.TemplateLiteralTypeSpan
type TemplateMiddle = innerast.TemplateMiddle
type TemplateTail = innerast.TemplateTail
type PrefixUnaryExpression = innerast.PrefixUnaryExpression
type ComputedPropertyName = innerast.ComputedPropertyName
type PropertySignatureDeclaration = innerast.PropertySignatureDeclaration
type QualifiedName = innerast.QualifiedName
type TypeLiteralNode = innerast.TypeLiteralNode
type FunctionTypeNode = innerast.FunctionTypeNode
type InterfaceDeclaration = innerast.InterfaceDeclaration
type TypeReferenceNode = innerast.TypeReferenceNode
type SourceFile = innerast.SourceFile
type StringLiteral = innerast.StringLiteral
type Symbol = innerast.Symbol
type SymbolFlags = innerast.SymbolFlags
type NumericLiteral = innerast.NumericLiteral
type BigIntLiteral = innerast.BigIntLiteral
type ArrayTypeNode = innerast.ArrayTypeNode
type IndexSignatureDeclaration = innerast.IndexSignatureDeclaration
type NamedTupleMember = innerast.NamedTupleMember
type OptionalTypeNode = innerast.OptionalTypeNode
type RestTypeNode = innerast.RestTypeNode
type TypeAliasDeclaration = innerast.TypeAliasDeclaration
type TypeParameterDeclaration = innerast.TypeParameterDeclaration
type TupleTypeNode = innerast.TupleTypeNode
type UnionTypeNode = innerast.UnionTypeNode
type MethodSignatureDeclaration = innerast.MethodSignatureDeclaration
type MethodDeclaration = innerast.MethodDeclaration
type NodeList = innerast.NodeList
type ParameterDeclaration = innerast.ParameterDeclaration
type ParenthesizedTypeNode = innerast.ParenthesizedTypeNode

const (
	KindCallExpression                = innerast.KindCallExpression
	KindIdentifier                    = innerast.KindIdentifier
	KindPropertyAccessExpression      = innerast.KindPropertyAccessExpression
	KindPropertySignature             = innerast.KindPropertySignature
	KindComputedPropertyName          = innerast.KindComputedPropertyName
	KindMethodSignature               = innerast.KindMethodSignature
	KindMethodDeclaration             = innerast.KindMethodDeclaration
	KindIndexSignature                = innerast.KindIndexSignature
	KindParameter                     = innerast.KindParameter
	KindStringKeyword                 = innerast.KindStringKeyword
	KindNumberKeyword                 = innerast.KindNumberKeyword
	KindBooleanKeyword                = innerast.KindBooleanKeyword
	KindBigIntKeyword                 = innerast.KindBigIntKeyword
	KindAnyKeyword                    = innerast.KindAnyKeyword
	KindNeverKeyword                  = innerast.KindNeverKeyword
	KindUndefinedKeyword              = innerast.KindUndefinedKeyword
	KindNullKeyword                   = innerast.KindNullKeyword
	KindVoidKeyword                   = innerast.KindVoidKeyword
	KindTrueKeyword                   = innerast.KindTrueKeyword
	KindFalseKeyword                  = innerast.KindFalseKeyword
	KindStringLiteral                 = innerast.KindStringLiteral
	KindNoSubstitutionTemplateLiteral = innerast.KindNoSubstitutionTemplateLiteral
	KindTemplateHead                  = innerast.KindTemplateHead
	KindTemplateMiddle                = innerast.KindTemplateMiddle
	KindTemplateTail                  = innerast.KindTemplateTail
	KindNumericLiteral                = innerast.KindNumericLiteral
	KindBigIntLiteral                 = innerast.KindBigIntLiteral
	KindTypeReference                 = innerast.KindTypeReference
	KindFunctionType                  = innerast.KindFunctionType
	KindLiteralType                   = innerast.KindLiteralType
	KindArrayType                     = innerast.KindArrayType
	KindTypeLiteral                   = innerast.KindTypeLiteral
	KindInterfaceDeclaration          = innerast.KindInterfaceDeclaration
	KindTupleType                     = innerast.KindTupleType
	KindUnionType                     = innerast.KindUnionType
	KindIntersectionType              = innerast.KindIntersectionType
	KindNamedTupleMember              = innerast.KindNamedTupleMember
	KindOptionalType                  = innerast.KindOptionalType
	KindParenthesizedType             = innerast.KindParenthesizedType
	KindRestType                      = innerast.KindRestType
	KindTemplateLiteralType           = innerast.KindTemplateLiteralType
	KindTemplateLiteralTypeSpan       = innerast.KindTemplateLiteralTypeSpan
	KindPrefixUnaryExpression         = innerast.KindPrefixUnaryExpression
	KindQualifiedName                 = innerast.KindQualifiedName
	KindTypeAliasDeclaration          = innerast.KindTypeAliasDeclaration
	KindTypeParameter                 = innerast.KindTypeParameter
	KindImportSpecifier               = innerast.KindImportSpecifier
	KindImportDeclaration             = innerast.KindImportDeclaration
	KindNamedImports                  = innerast.KindNamedImports
	KindNamespaceImport               = innerast.KindNamespaceImport
	KindExportSpecifier               = innerast.KindExportSpecifier
	KindModuleBlock                   = innerast.KindModuleBlock
	KindModuleDeclaration             = innerast.KindModuleDeclaration
	KindMinusToken                    = innerast.KindMinusToken

	SymbolFlagsOptional  = innerast.SymbolFlagsOptional
	SymbolFlagsAlias     = innerast.SymbolFlagsAlias
	SymbolFlagsType      = innerast.SymbolFlagsType
	SymbolFlagsNamespace = innerast.SymbolFlagsNamespace
)

//go:linkname GetSourceFileOfNode github.com/microsoft/typescript-go/internal/ast.GetSourceFileOfNode
func GetSourceFileOfNode(node *innerast.Node) *innerast.SourceFile
