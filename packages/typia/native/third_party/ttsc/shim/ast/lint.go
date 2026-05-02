// Lint-oriented additions to the AST shim.
//
// The handcrafted shim.go in this directory exposes only the kinds/types the
// existing fixtures need. Lint rules walk a much wider AST surface (every
// statement / expression node), so this file extends the shim with the
// kinds, type aliases, helpers, and node-flag constants the `@ttsc/lint`
// plugin (and any other AST-walking plugin) needs to navigate the tree.
//
// Everything here is a pure re-export of `internal/ast` symbols — there is
// no behavior, no copy of upstream logic. Adding a new node type is
// mechanical: add a `type X = innerast.X` line and the matching
// `KindX = innerast.KindX` entry.
package ast

import (
  innerast "github.com/microsoft/typescript-go/internal/ast"
)

// ---- Node-list / visitor primitives ----

type Visitor = innerast.Visitor
type NodeFlags = innerast.NodeFlags
type ModifierFlags = innerast.ModifierFlags

// ---- Statement-shaped node types ----

type Block = innerast.Block
type BreakStatement = innerast.BreakStatement
type CaseBlock = innerast.CaseBlock
type CaseOrDefaultClause = innerast.CaseOrDefaultClause
type CatchClause = innerast.CatchClause
type ContinueStatement = innerast.ContinueStatement
type DebuggerStatement = innerast.DebuggerStatement
type DoStatement = innerast.DoStatement
type EmptyStatement = innerast.EmptyStatement
type ExpressionStatement = innerast.ExpressionStatement
type ForInOrOfStatement = innerast.ForInOrOfStatement
type ForStatement = innerast.ForStatement
type FunctionDeclaration = innerast.FunctionDeclaration
type IfStatement = innerast.IfStatement
type LabeledStatement = innerast.LabeledStatement
type ModuleDeclaration = innerast.ModuleDeclaration
type ModuleBlock = innerast.ModuleBlock
type ReturnStatement = innerast.ReturnStatement
type SwitchStatement = innerast.SwitchStatement
type ThrowStatement = innerast.ThrowStatement
type TryStatement = innerast.TryStatement
type VariableDeclaration = innerast.VariableDeclaration
type VariableDeclarationList = innerast.VariableDeclarationList
type VariableStatement = innerast.VariableStatement
type WhileStatement = innerast.WhileStatement
type WithStatement = innerast.WithStatement

// ---- Class / module / enum shapes ----

type ClassDeclaration = innerast.ClassDeclaration
type ClassExpression = innerast.ClassExpression
type ConstructorDeclaration = innerast.ConstructorDeclaration
type EnumDeclaration = innerast.EnumDeclaration
type EnumMember = innerast.EnumMember
type GetAccessorDeclaration = innerast.GetAccessorDeclaration
type SetAccessorDeclaration = innerast.SetAccessorDeclaration
type HeritageClause = innerast.HeritageClause
type PropertyDeclaration = innerast.PropertyDeclaration

// ---- Module syntax ----

type ImportDeclaration = innerast.ImportDeclaration
type ImportSpecifier = innerast.ImportSpecifier
type ImportEqualsDeclaration = innerast.ImportEqualsDeclaration
type ExternalModuleReference = innerast.ExternalModuleReference
type NamedImports = innerast.NamedImports
type NamespaceImport = innerast.NamespaceImport
type ExportDeclaration = innerast.ExportDeclaration
type ExportSpecifier = innerast.ExportSpecifier
type ExportAssignment = innerast.ExportAssignment
type ImportTypeNode = innerast.ImportTypeNode

// ---- Binding patterns ----

type BindingElement = innerast.BindingElement
type BindingPattern = innerast.BindingPattern

// ---- Expressions ----

type ArrayLiteralExpression = innerast.ArrayLiteralExpression
type ArrowFunction = innerast.ArrowFunction
type AsExpression = innerast.AsExpression
type AwaitExpression = innerast.AwaitExpression
type BinaryExpression = innerast.BinaryExpression
type ConditionalExpression = innerast.ConditionalExpression
type DeleteExpression = innerast.DeleteExpression
type ElementAccessExpression = innerast.ElementAccessExpression
type FunctionExpression = innerast.FunctionExpression
type NewExpression = innerast.NewExpression
type NonNullExpression = innerast.NonNullExpression
type ObjectLiteralExpression = innerast.ObjectLiteralExpression
type ParenthesizedExpression = innerast.ParenthesizedExpression
type PostfixUnaryExpression = innerast.PostfixUnaryExpression
type PropertyAccessExpression = innerast.PropertyAccessExpression
type PropertyAssignment = innerast.PropertyAssignment
type ShorthandPropertyAssignment = innerast.ShorthandPropertyAssignment
type SpreadAssignment = innerast.SpreadAssignment
type SpreadElement = innerast.SpreadElement
type TaggedTemplateExpression = innerast.TaggedTemplateExpression
type TemplateExpression = innerast.TemplateExpression
type TemplateSpan = innerast.TemplateSpan
type TypeAssertion = innerast.TypeAssertion
type TypeOfExpression = innerast.TypeOfExpression
type VoidExpression = innerast.VoidExpression
type YieldExpression = innerast.YieldExpression
type RegularExpressionLiteral = innerast.RegularExpressionLiteral
type SatisfiesExpression = innerast.SatisfiesExpression

// ---- Comment directives (ban-ts-comment) ----

type CommentDirective = innerast.CommentDirective
type CommentDirectiveKind = innerast.CommentDirectiveKind

// ---- Source file parse options (test harness) ----

type SourceFileParseOptions = innerast.SourceFileParseOptions
type ExternalModuleIndicatorOptions = innerast.ExternalModuleIndicatorOptions

// ---- Node-flag constants ----

const (
  NodeFlagsNone         = innerast.NodeFlagsNone
  NodeFlagsLet          = innerast.NodeFlagsLet
  NodeFlagsConst        = innerast.NodeFlagsConst
  NodeFlagsBlockScoped  = innerast.NodeFlagsBlockScoped
  NodeFlagsAwaitContext = innerast.NodeFlagsAwaitContext
)

// ---- Statement / declaration / expression kinds ----

const (
  KindSourceFile = innerast.KindSourceFile

  // Statements
  KindBlock                   = innerast.KindBlock
  KindBreakStatement          = innerast.KindBreakStatement
  KindCaseBlock               = innerast.KindCaseBlock
  KindCaseClause              = innerast.KindCaseClause
  KindCatchClause             = innerast.KindCatchClause
  KindContinueStatement       = innerast.KindContinueStatement
  KindDebuggerStatement       = innerast.KindDebuggerStatement
  KindDefaultClause           = innerast.KindDefaultClause
  KindDoStatement             = innerast.KindDoStatement
  KindEmptyStatement          = innerast.KindEmptyStatement
  KindExpressionStatement     = innerast.KindExpressionStatement
  KindForInStatement          = innerast.KindForInStatement
  KindForOfStatement          = innerast.KindForOfStatement
  KindForStatement            = innerast.KindForStatement
  KindIfStatement             = innerast.KindIfStatement
  KindLabeledStatement        = innerast.KindLabeledStatement
  KindReturnStatement         = innerast.KindReturnStatement
  KindSwitchStatement         = innerast.KindSwitchStatement
  KindThrowStatement          = innerast.KindThrowStatement
  KindTryStatement            = innerast.KindTryStatement
  KindVariableDeclaration     = innerast.KindVariableDeclaration
  KindVariableDeclarationList = innerast.KindVariableDeclarationList
  KindVariableStatement       = innerast.KindVariableStatement
  KindWhileStatement          = innerast.KindWhileStatement
  KindWithStatement           = innerast.KindWithStatement

  // Class / enum / module
  KindClassDeclaration    = innerast.KindClassDeclaration
  KindClassExpression     = innerast.KindClassExpression
  KindConstructor         = innerast.KindConstructor
  KindEnumDeclaration     = innerast.KindEnumDeclaration
  KindEnumMember          = innerast.KindEnumMember
  KindGetAccessor         = innerast.KindGetAccessor
  KindSetAccessor         = innerast.KindSetAccessor
  KindHeritageClause      = innerast.KindHeritageClause
  KindPropertyDeclaration = innerast.KindPropertyDeclaration

  // Module syntax
  KindExportAssignment        = innerast.KindExportAssignment
  KindExportDeclaration       = innerast.KindExportDeclaration
  KindImportEqualsDeclaration = innerast.KindImportEqualsDeclaration
  KindExternalModuleReference = innerast.KindExternalModuleReference
  KindImportType              = innerast.KindImportType
  KindImportKeyword           = innerast.KindImportKeyword

  // Binding
  KindBindingElement       = innerast.KindBindingElement
  KindObjectBindingPattern = innerast.KindObjectBindingPattern
  KindArrayBindingPattern  = innerast.KindArrayBindingPattern
  KindOmittedExpression    = innerast.KindOmittedExpression

  // Expressions
  KindArrayLiteralExpression      = innerast.KindArrayLiteralExpression
  KindArrowFunction               = innerast.KindArrowFunction
  KindAsExpression                = innerast.KindAsExpression
  KindAwaitExpression             = innerast.KindAwaitExpression
  KindBinaryExpression            = innerast.KindBinaryExpression
  KindConditionalExpression       = innerast.KindConditionalExpression
  KindDeleteExpression            = innerast.KindDeleteExpression
  KindElementAccessExpression     = innerast.KindElementAccessExpression
  KindFunctionExpression          = innerast.KindFunctionExpression
  KindNewExpression               = innerast.KindNewExpression
  KindNonNullExpression           = innerast.KindNonNullExpression
  KindObjectLiteralExpression     = innerast.KindObjectLiteralExpression
  KindParenthesizedExpression     = innerast.KindParenthesizedExpression
  KindPostfixUnaryExpression      = innerast.KindPostfixUnaryExpression
  KindPropertyAssignment          = innerast.KindPropertyAssignment
  KindShorthandPropertyAssignment = innerast.KindShorthandPropertyAssignment
  KindSpreadAssignment            = innerast.KindSpreadAssignment
  KindSpreadElement               = innerast.KindSpreadElement
  KindTaggedTemplateExpression    = innerast.KindTaggedTemplateExpression
  KindTemplateExpression          = innerast.KindTemplateExpression
  KindTemplateSpan                = innerast.KindTemplateSpan
  KindTypeAssertionExpression     = innerast.KindTypeAssertionExpression
  KindTypeOfExpression            = innerast.KindTypeOfExpression
  KindVoidExpression              = innerast.KindVoidExpression
  KindYieldExpression             = innerast.KindYieldExpression
  KindRegularExpressionLiteral    = innerast.KindRegularExpressionLiteral
  KindSatisfiesExpression         = innerast.KindSatisfiesExpression

  // Keywords / tokens used by rules
  KindThisKeyword                  = innerast.KindThisKeyword
  KindSuperKeyword                 = innerast.KindSuperKeyword
  KindEqualsToken                  = innerast.KindEqualsToken
  KindEqualsEqualsToken            = innerast.KindEqualsEqualsToken
  KindEqualsEqualsEqualsToken      = innerast.KindEqualsEqualsEqualsToken
  KindExclamationEqualsToken       = innerast.KindExclamationEqualsToken
  KindExclamationEqualsEqualsToken = innerast.KindExclamationEqualsEqualsToken
  KindLessThanToken                = innerast.KindLessThanToken
  KindGreaterThanToken             = innerast.KindGreaterThanToken
  KindLessThanEqualsToken          = innerast.KindLessThanEqualsToken
  KindGreaterThanEqualsToken       = innerast.KindGreaterThanEqualsToken
  KindPlusToken                    = innerast.KindPlusToken
  KindPlusEqualsToken              = innerast.KindPlusEqualsToken
  KindMinusEqualsToken             = innerast.KindMinusEqualsToken
  KindAsteriskToken                = innerast.KindAsteriskToken
  KindSlashToken                   = innerast.KindSlashToken
  KindAmpersandAmpersandToken      = innerast.KindAmpersandAmpersandToken
  KindBarBarToken                  = innerast.KindBarBarToken
  KindQuestionQuestionToken        = innerast.KindQuestionQuestionToken
  KindExclamationToken             = innerast.KindExclamationToken
  KindTildeToken                   = innerast.KindTildeToken
  KindInKeyword                    = innerast.KindInKeyword
  KindInstanceOfKeyword            = innerast.KindInstanceOfKeyword
  KindAsKeyword                    = innerast.KindAsKeyword
  KindPlusPlusToken                = innerast.KindPlusPlusToken
  KindMinusMinusToken              = innerast.KindMinusMinusToken
  KindDotToken                     = innerast.KindDotToken

  // Bitwise / shift / exponent operator tokens — needed by
  // no-bitwise, prefer-exponentiation-operator, etc.
  KindAmpersandToken                               = innerast.KindAmpersandToken
  KindBarToken                                     = innerast.KindBarToken
  KindCaretToken                                   = innerast.KindCaretToken
  KindLessThanLessThanToken                        = innerast.KindLessThanLessThanToken
  KindGreaterThanGreaterThanToken                  = innerast.KindGreaterThanGreaterThanToken
  KindGreaterThanGreaterThanGreaterThanToken       = innerast.KindGreaterThanGreaterThanGreaterThanToken
  KindAsteriskAsteriskToken                        = innerast.KindAsteriskAsteriskToken
  KindAmpersandAmpersandEqualsToken                = innerast.KindAmpersandAmpersandEqualsToken
  KindBarBarEqualsToken                            = innerast.KindBarBarEqualsToken
  KindQuestionQuestionEqualsToken                  = innerast.KindQuestionQuestionEqualsToken
  KindAsteriskEqualsToken                          = innerast.KindAsteriskEqualsToken
  KindSlashEqualsToken                             = innerast.KindSlashEqualsToken
  KindPercentEqualsToken                           = innerast.KindPercentEqualsToken
  KindAsteriskAsteriskEqualsToken                  = innerast.KindAsteriskAsteriskEqualsToken
  KindAmpersandEqualsToken                         = innerast.KindAmpersandEqualsToken
  KindBarEqualsToken                               = innerast.KindBarEqualsToken
  KindCaretEqualsToken                             = innerast.KindCaretEqualsToken
  KindLessThanLessThanEqualsToken                  = innerast.KindLessThanLessThanEqualsToken
  KindGreaterThanGreaterThanEqualsToken            = innerast.KindGreaterThanGreaterThanEqualsToken
  KindGreaterThanGreaterThanGreaterThanEqualsToken = innerast.KindGreaterThanGreaterThanGreaterThanEqualsToken
  KindCommaToken                                   = innerast.KindCommaToken
  KindQuestionToken                                = innerast.KindQuestionToken

  // Metaprogramming / privacy / async syntax
  KindMetaProperty                = innerast.KindMetaProperty
  KindPrivateIdentifier           = innerast.KindPrivateIdentifier
  KindClassStaticBlockDeclaration = innerast.KindClassStaticBlockDeclaration

  // Misc syntax used by suggestion rules
  KindSymbolKeyword = innerast.KindSymbolKeyword
  KindObjectKeyword = innerast.KindObjectKeyword

  // Modifier-style keywords
  KindAsyncKeyword    = innerast.KindAsyncKeyword
  KindAwaitKeyword    = innerast.KindAwaitKeyword
  KindReadonlyKeyword = innerast.KindReadonlyKeyword
  KindStaticKeyword   = innerast.KindStaticKeyword
  KindAbstractKeyword = innerast.KindAbstractKeyword
  KindExportKeyword   = innerast.KindExportKeyword
  KindDeclareKeyword  = innerast.KindDeclareKeyword
  KindModuleKeyword   = innerast.KindModuleKeyword
  KindTypeKeyword     = innerast.KindTypeKeyword

  // TypeScript-specific kinds used by ts rules
  KindCallSignature      = innerast.KindCallSignature
  KindConstructSignature = innerast.KindConstructSignature
  KindTypeQuery          = innerast.KindTypeQuery
  KindTypeOperator       = innerast.KindTypeOperator
)

// ---- Comment-directive kind constants ----

const (
  CommentDirectiveKindIgnore      = innerast.CommentDirectiveKindIgnore
  CommentDirectiveKindExpectError = innerast.CommentDirectiveKindExpectError
)

// ---- Helpers ----

// GetCombinedNodeFlags returns the combined node flags for a declaration,
// consulting parents where applicable. This is what `IsLet` / `IsConst` use
// internally; lint rules need it to detect `var` declarations whose flag
// lives on the VariableDeclarationList rather than the declaration itself.
func GetCombinedNodeFlags(node *Node) NodeFlags {
  return innerast.GetCombinedNodeFlags(node)
}

// IsLet reports whether the declaration was introduced by `let` / `using`.
func IsLet(node *Node) bool { return GetCombinedNodeFlags(node)&NodeFlagsLet != 0 }

// IsConst reports whether the declaration was introduced by `const` /
// `await using` / `using`.
func IsConst(node *Node) bool { return GetCombinedNodeFlags(node)&NodeFlagsConst != 0 }

// IsVar reports whether the declaration was introduced by `var`. The block
// scoped flag bits are clear when the keyword is plain `var`.
func IsVar(node *Node) bool { return GetCombinedNodeFlags(node)&NodeFlagsBlockScoped == 0 }
