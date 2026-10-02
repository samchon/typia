package factories

import (
  "strings"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimchecker "github.com/microsoft/typescript-go/shim/checker"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
)

type typeFactoryNamespace struct{}

var TypeFactory = typeFactoryNamespace{}

// TypeFactory_GetReturnTypeOfClassMethodProps names a method of a class type
// whose return type is wanted.
//
// @evidence contracts/common.md#principled-implementation Finding a method's return type needs the checker, the class type and the method name.
// @evidence contracts/common.md#clear-and-simple-design A three-field argument record.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states what it names.
type TypeFactory_GetReturnTypeOfClassMethodProps struct {
  // Checker resolves the property and its first call signature; nil yields nil.
  Checker *shimchecker.Checker

  // Class is the type containing the named property; nil yields nil.
  Class *shimchecker.Type

  // Function names the property whose first call signature supplies the return
  // type. Missing properties or call signatures yield nil.
  Function string
}

// TypeFactory_GetFullNameProps selects the type or symbol whose full name is
// wanted. A non-nil Type and Checker are required even with an explicit Symbol.
// AliasTypeArguments is retained for compatibility and is currently not read.
//
// @evidence contracts/common.md#principled-implementation The checker and type provide the name fallback and reference type arguments; an explicit symbol overrides the type's symbol. AliasTypeArguments preserves the input shape but the current builder does not consult it.
// @evidence contracts/common.md#clear-and-simple-design A four-field argument record.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states the selection and the switch.
type TypeFactory_GetFullNameProps struct {
  // Checker renders unnamed types and resolves reference type arguments.
  Checker *shimchecker.Checker

  // Type supplies the type to name; nil causes the empty result.
  Type *shimchecker.Type

  // Symbol overrides Type.Symbol when non-nil; it does not replace Type.
  Symbol *shimast.Symbol

  // AliasTypeArguments is retained but currently has no effect on naming.
  AliasTypeArguments *bool
}

var typeFactory_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (typeFactoryNamespace) IsFunction(t *shimchecker.Type) bool {
  return TypeFactory.GetFunction(t) != nil
}

func (typeFactoryNamespace) GetFunction(t *shimchecker.Type) *shimast.Node {
  if t == nil {
    return nil
  }
  symbol := t.Symbol()
  if symbol == nil || len(symbol.Declarations) == 0 {
    return nil
  }
  node := symbol.Declarations[0]
  if shimast.IsFunctionLike(node) {
    return node
  }
  if shimast.IsPropertyAssignment(node) {
    initializer := node.AsPropertyAssignment().Initializer
    if shimast.IsFunctionLike(initializer) {
      return initializer
    }
    return nil
  }
  if shimast.IsPropertyDeclaration(node) {
    initializer := node.AsPropertyDeclaration().Initializer
    if shimast.IsFunctionLike(initializer) {
      return initializer
    }
  }
  return nil
}

func (typeFactoryNamespace) GetReturnTypeOfClassMethod(props TypeFactory_GetReturnTypeOfClassMethodProps) *shimchecker.Type {
  if props.Checker == nil || props.Class == nil {
    return nil
  }
  symbol := props.Checker.GetPropertyOfType(props.Class, props.Function)
  if symbol == nil || symbol.ValueDeclaration == nil {
    return nil
  }
  functor := props.Checker.GetTypeOfSymbolAtLocation(symbol, symbol.ValueDeclaration)
  signatures := props.Checker.GetSignaturesOfType(functor, shimchecker.SignatureKindCall)
  if len(signatures) == 0 {
    return nil
  }
  return props.Checker.GetReturnTypeOfSignature(signatures[0])
}

func (typeFactoryNamespace) GetFullName(props TypeFactory_GetFullNameProps) string {
  if props.Checker == nil || props.Type == nil {
    return ""
  }
  symbol := props.Symbol
  if symbol == nil {
    symbol = props.Type.Symbol()
  }
  if symbol == nil {
    if props.Type.IsUnion() || props.Type.IsIntersection() {
      joiner := " | "
      if props.Type.IsIntersection() {
        joiner = " & "
      }
      children := props.Type.Types()
      names := make([]string, 0, len(children))
      for _, child := range children {
        names = append(names, TypeFactory.GetFullName(TypeFactory_GetFullNameProps{
          Checker: props.Checker,
          Type:    child,
        }))
      }
      return strings.Join(names, joiner)
    }
    return props.Checker.TypeToString(props.Type)
  }
  name := typeFactory_get_name(symbol)
  generic := typeFactory_get_type_arguments(props.Checker, props.Type)
  if len(generic) == 0 {
    return name
  }
  if name == "Promise" {
    return TypeFactory.GetFullName(TypeFactory_GetFullNameProps{
      Checker: props.Checker,
      Type:    generic[0],
    })
  }
  names := make([]string, 0, len(generic))
  for _, child := range generic {
    names = append(names, TypeFactory.GetFullName(TypeFactory_GetFullNameProps{
      Checker: props.Checker,
      Type:    child,
    }))
  }
  return name + "<" + strings.Join(names, ", ") + ">"
}

func typeFactory_explore_name(node *shimast.Node, name string) string {
  if node != nil && shimast.IsModuleBlock(node) && node.Parent != nil && node.Parent.Parent != nil {
    parentName := ""
    if node.Parent.Name() != nil {
      parentName = strings.TrimSpace(node.Parent.Name().Text())
    }
    if parentName != "" {
      return typeFactory_explore_name(node.Parent.Parent, parentName+"."+name)
    }
  }
  return name
}

func typeFactory_get_name(symbol *shimast.Symbol) string {
  if symbol == nil || len(symbol.Declarations) == 0 || symbol.Declarations[0].Parent == nil {
    return "__type"
  }
  return typeFactory_explore_name(symbol.Declarations[0].Parent, symbol.Name)
}

func typeFactory_get_type_arguments(checker *shimchecker.Checker, t *shimchecker.Type) (output []*shimchecker.Type) {
  if checker == nil || t == nil {
    return nil
  }
  if t.Flags()&shimchecker.TypeFlagsObject == 0 || t.ObjectFlags()&shimchecker.ObjectFlagsReference == 0 {
    return nil
  }
  return checker.GetTypeArguments(t)
}

func (typeFactoryNamespace) Keyword(t string, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(typeFactory_factory, emit...)
  var kind shimast.KeywordTypeSyntaxKind
  switch t {
  case "void":
    kind = shimast.KindVoidKeyword
  case "any":
    kind = shimast.KindAnyKeyword
  case "unknown":
    kind = shimast.KindUnknownKeyword
  case "boolean":
    kind = shimast.KindBooleanKeyword
  case "number":
    kind = shimast.KindNumberKeyword
  case "bigint":
    kind = shimast.KindBigIntKeyword
  default:
    kind = shimast.KindStringKeyword
  }
  return f.NewKeywordTypeNode(kind)
}
