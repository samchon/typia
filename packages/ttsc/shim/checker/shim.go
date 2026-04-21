package checker

import (
	innerast "github.com/microsoft/typescript-go/internal/ast"
	innerchecker "github.com/microsoft/typescript-go/internal/checker"
	_ "unsafe"
)

type Checker = innerchecker.Checker
type IndexInfo = innerchecker.IndexInfo
type Signature = innerchecker.Signature
type SignatureKind = innerchecker.SignatureKind
type Type = innerchecker.Type
type TypeFlags = innerchecker.TypeFlags

const (
	SignatureKindCall = innerchecker.SignatureKindCall

	TypeFlagsAny             = innerchecker.TypeFlagsAny
	TypeFlagsUnknown         = innerchecker.TypeFlagsUnknown
	TypeFlagsUndefined       = innerchecker.TypeFlagsUndefined
	TypeFlagsNull            = innerchecker.TypeFlagsNull
	TypeFlagsVoid            = innerchecker.TypeFlagsVoid
	TypeFlagsNever           = innerchecker.TypeFlagsNever
	TypeFlagsObject          = innerchecker.TypeFlagsObject
	TypeFlagsTemplateLiteral = innerchecker.TypeFlagsTemplateLiteral
	TypeFlagsStringMapping   = innerchecker.TypeFlagsStringMapping
	TypeFlagsUnion           = innerchecker.TypeFlagsUnion
	TypeFlagsIntersection    = innerchecker.TypeFlagsIntersection
	TypeFlagsLiteral         = innerchecker.TypeFlagsLiteral
	TypeFlagsStringLiteral   = innerchecker.TypeFlagsStringLiteral
	TypeFlagsNumberLiteral   = innerchecker.TypeFlagsNumberLiteral
	TypeFlagsBigIntLiteral   = innerchecker.TypeFlagsBigIntLiteral
	TypeFlagsBooleanLiteral  = innerchecker.TypeFlagsBooleanLiteral
	TypeFlagsStringLike      = innerchecker.TypeFlagsStringLike
	TypeFlagsNumberLike      = innerchecker.TypeFlagsNumberLike
	TypeFlagsBigIntLike      = innerchecker.TypeFlagsBigIntLike
	TypeFlagsBooleanLike     = innerchecker.TypeFlagsBooleanLike
)

func IsTupleType(t *innerchecker.Type) bool {
	return innerchecker.IsTupleType(t)
}

func Checker_getIndexInfosOfType(recv *innerchecker.Checker, t *innerchecker.Type) []*innerchecker.IndexInfo {
	return recv.GetIndexInfosOfType(t)
}

func Checker_getPropertiesOfType(recv *innerchecker.Checker, t *innerchecker.Type) []*innerast.Symbol {
	return recv.GetPropertiesOfType(t)
}

func Checker_getTypeArguments(recv *innerchecker.Checker, t *innerchecker.Type) []*innerchecker.Type {
	return recv.GetTypeArguments(t)
}

func Checker_getTypeOfSymbol(recv *innerchecker.Checker, symbol *innerast.Symbol) *innerchecker.Type {
	return recv.GetTypeOfSymbol(symbol)
}

//go:linkname checkerIsArrayType github.com/microsoft/typescript-go/internal/checker.(*Checker).isArrayType
func checkerIsArrayType(recv *innerchecker.Checker, t *innerchecker.Type) bool

func Checker_isArrayType(recv *innerchecker.Checker, t *innerchecker.Type) bool {
	return checkerIsArrayType(recv, t)
}
