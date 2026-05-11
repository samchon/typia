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
type ObjectFlags = innerchecker.ObjectFlags
type ElementFlags = innerchecker.ElementFlags

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

  ObjectFlagsReference        = innerchecker.ObjectFlagsReference
  ObjectFlagsClass            = innerchecker.ObjectFlagsClass
  ObjectFlagsInterface        = innerchecker.ObjectFlagsInterface
  ObjectFlagsClassOrInterface = innerchecker.ObjectFlagsClassOrInterface

  ElementFlagsNone     = innerchecker.ElementFlagsNone
  ElementFlagsRequired = innerchecker.ElementFlagsRequired
  ElementFlagsOptional = innerchecker.ElementFlagsOptional
  ElementFlagsRest     = innerchecker.ElementFlagsRest
  ElementFlagsVariadic = innerchecker.ElementFlagsVariadic
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

func Checker_getApparentProperties(recv *innerchecker.Checker, t *innerchecker.Type) []*innerast.Symbol {
  return recv.GetApparentProperties(t)
}

func Checker_getTypeArguments(recv *innerchecker.Checker, t *innerchecker.Type) []*innerchecker.Type {
  return recv.GetTypeArguments(t)
}

func Checker_getTypeOfSymbol(recv *innerchecker.Checker, symbol *innerast.Symbol) *innerchecker.Type {
  return recv.GetTypeOfSymbol(symbol)
}

func Checker_getTypeOfSymbolAtLocation(recv *innerchecker.Checker, symbol *innerast.Symbol, node *innerast.Node) *innerchecker.Type {
  return recv.GetTypeOfSymbolAtLocation(symbol, node)
}

func Checker_getTypeOfPropertyOfType(recv *innerchecker.Checker, t *innerchecker.Type, name string) *innerchecker.Type {
  return recv.GetTypeOfPropertyOfType(t, name)
}

//go:linkname checkerGetAliasSymbolForTypeNode github.com/microsoft/typescript-go/internal/checker.(*Checker).getAliasSymbolForTypeNode
func checkerGetAliasSymbolForTypeNode(recv *innerchecker.Checker, node *innerast.Node) *innerast.Symbol

func Checker_getAliasSymbolForTypeNode(recv *innerchecker.Checker, node *innerast.Node) *innerast.Symbol {
  return checkerGetAliasSymbolForTypeNode(recv, node)
}

//go:linkname checkerGetDeclarationOfAliasSymbol github.com/microsoft/typescript-go/internal/checker.(*Checker).getDeclarationOfAliasSymbol
func checkerGetDeclarationOfAliasSymbol(recv *innerchecker.Checker, symbol *innerast.Symbol) *innerast.Node

func Checker_getDeclarationOfAliasSymbol(recv *innerchecker.Checker, symbol *innerast.Symbol) *innerast.Node {
  return checkerGetDeclarationOfAliasSymbol(recv, symbol)
}

//go:linkname checkerGetTargetOfImportSpecifier github.com/microsoft/typescript-go/internal/checker.(*Checker).getTargetOfImportSpecifier
func checkerGetTargetOfImportSpecifier(recv *innerchecker.Checker, node *innerast.Node) *innerast.Symbol

func Checker_getTargetOfImportSpecifier(recv *innerchecker.Checker, node *innerast.Node) *innerast.Symbol {
  if recv == nil || node == nil {
    return nil
  }
  return checkerGetTargetOfImportSpecifier(recv, node)
}

func Checker_getAliasedSymbol(recv *innerchecker.Checker, symbol *innerast.Symbol) *innerast.Symbol {
  if recv == nil || symbol == nil {
    return nil
  }
  return recv.GetAliasedSymbol(symbol)
}

//go:linkname checkerResolveEntityName github.com/microsoft/typescript-go/internal/checker.(*Checker).resolveEntityName
func checkerResolveEntityName(
  recv *innerchecker.Checker,
  name *innerast.Node,
  meaning innerast.SymbolFlags,
  ignoreErrors bool,
  dontResolveAlias bool,
  location *innerast.Node,
) *innerast.Symbol

func Checker_resolveEntityName(
  recv *innerchecker.Checker,
  name *innerast.Node,
  meaning innerast.SymbolFlags,
  ignoreErrors bool,
  dontResolveAlias bool,
  location *innerast.Node,
) *innerast.Symbol {
  if recv == nil || name == nil {
    return nil
  }
  return checkerResolveEntityName(recv, name, meaning, ignoreErrors, dontResolveAlias, location)
}

//go:linkname checkerGetTypeNameSymbol github.com/microsoft/typescript-go/internal/checker.getTypeNameSymbol
func checkerGetTypeNameSymbol(t *innerchecker.Type) *innerast.Symbol

func Type_getTypeNameSymbol(t *innerchecker.Type) *innerast.Symbol {
  if t == nil {
    return nil
  }
  return checkerGetTypeNameSymbol(t)
}

//go:linkname checkerIsArrayType github.com/microsoft/typescript-go/internal/checker.(*Checker).isArrayType
func checkerIsArrayType(recv *innerchecker.Checker, t *innerchecker.Type) bool

func Checker_isArrayType(recv *innerchecker.Checker, t *innerchecker.Type) bool {
  return checkerIsArrayType(recv, t)
}

//go:linkname checkerGetBaseTypes github.com/microsoft/typescript-go/internal/checker.(*Checker).getBaseTypes
func checkerGetBaseTypes(recv *innerchecker.Checker, t *innerchecker.Type) []*innerchecker.Type

func Checker_getBaseTypes(recv *innerchecker.Checker, t *innerchecker.Type) []*innerchecker.Type {
  if recv == nil || t == nil {
    return nil
  }
  return checkerGetBaseTypes(recv, t)
}
