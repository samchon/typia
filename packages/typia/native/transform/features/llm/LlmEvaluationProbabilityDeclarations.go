package llm

import (
  "path/filepath"
  "strings"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimchecker "github.com/microsoft/typescript-go/shim/checker"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativellmprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers/llm"
)

// The metadata analyzer absorbs primitive aliases before Compose sees them.
// Walk the written type references as well, so a declaration-level annotation
// cannot silently become a default probability after that normalization.
func llmEvaluation_declarationProbabilityErrors(checker *shimchecker.Checker, top *shimast.Node) []nativellmprogrammers.LlmEvaluationProgrammer_IError {
  errors := []nativellmprogrammers.LlmEvaluationProgrammer_IError{}
  active := map[*shimast.Symbol]bool{}
  var walk func(*shimast.Node, string, map[*shimast.Symbol]*shimast.Node)
  walk = func(node *shimast.Node, accessor string, bindings map[*shimast.Symbol]*shimast.Node) {
    if node == nil {
      return
    }
    if node.Kind == shimast.KindPropertySignature || node.Kind == shimast.KindPropertyDeclaration {
      if name := node.Name(); name != nil {
        switch name.Kind {
        case shimast.KindIdentifier, shimast.KindStringLiteral, shimast.KindNumericLiteral, shimast.KindNoSubstitutionTemplateLiteral:
          accessor += nativefactories.IdentifierFactory.PathPostfix(name.Text())
        default:
          // Compose already rejects dynamic decision keys.
          return
        }
      }
    }
    var name *shimast.Node
    var arguments []*shimast.Node
    switch node.Kind {
    case shimast.KindTypeReference:
      reference := node.AsTypeReferenceNode()
      name = reference.TypeName
      if reference.TypeArguments != nil {
        arguments = reference.TypeArguments.Nodes
      }
    case shimast.KindExpressionWithTypeArguments:
      reference := node.AsExpressionWithTypeArguments()
      name = reference.Expression
      if reference.TypeArguments != nil {
        arguments = reference.TypeArguments.Nodes
      }
    case shimast.KindImportType:
      reference := node.AsImportTypeNode()
      name = reference.Qualifier
      if reference.TypeArguments != nil {
        arguments = reference.TypeArguments.Nodes
      }
    }
    if name != nil {
      symbol := checker.GetSymbolAtLocation(name)
      if symbol != nil && symbol.Flags&shimast.SymbolFlagsAlias != 0 {
        symbol = shimchecker.Checker_getAliasedSymbol(checker, symbol)
      }
      if argument := bindings[symbol]; argument != nil {
        walk(argument, accessor, bindings)
        return
      }
      if llmEvaluation_builtinArray(symbol) {
        for _, argument := range arguments {
          walk(argument, accessor, bindings)
        }
        return
      }
      if symbol != nil && active[symbol] == false {
        active[symbol] = true
        for _, declaration := range symbol.Declarations {
          if declaration == nil {
            continue
          }
          var message string
          switch declaration.Kind {
          case shimast.KindTypeAliasDeclaration:
            message = "LLM evaluation @probability on a type alias is not supported; put it on the decision property or enum member."
          case shimast.KindInterfaceDeclaration, shimast.KindClassDeclaration:
            message = "LLM evaluation @probability on an object declaration is not supported; put it on the decision property or enum member."
          }
          if message == "" {
            continue
          }
          if llmEvaluation_declarationHasProbability(declaration) {
            errors = append(errors, nativellmprogrammers.LlmEvaluationProgrammer_IError{
              Accessor: accessor,
              Message:  message,
            })
          }
          nested := llmEvaluation_bindTypeArguments(checker, declaration, arguments, bindings)
          for _, surface := range llmEvaluation_declarationSurfaces(declaration) {
            walk(surface, accessor, nested)
          }
        }
        delete(active, symbol)
      }
      if symbol == nil || len(symbol.Declarations) == 0 {
        for _, argument := range arguments {
          walk(argument, accessor, bindings)
        }
      }
      return
    }
    node.ForEachChild(func(child *shimast.Node) bool {
      walk(child, accessor, bindings)
      return false
    })
  }
  walk(top, "$input", map[*shimast.Symbol]*shimast.Node{})
  return errors
}

func llmEvaluation_builtinArray(symbol *shimast.Symbol) bool {
  if symbol == nil || (symbol.Name != "Array" && symbol.Name != "ReadonlyArray") {
    return false
  }
  for _, declaration := range symbol.Declarations {
    if declaration == nil {
      continue
    }
    if source := shimast.GetSourceFileOfNode(declaration); source != nil {
      base := filepath.Base(source.FileName())
      if strings.HasPrefix(base, "lib.") && strings.HasSuffix(base, ".d.ts") {
        return true
      }
    }
  }
  return false
}

// Bind a generic argument only where the declaration actually uses its type
// parameter. An unused argument cannot contribute a decision or a threshold.
func llmEvaluation_bindTypeArguments(checker *shimchecker.Checker, declaration *shimast.Node, arguments []*shimast.Node, inherited map[*shimast.Symbol]*shimast.Node) map[*shimast.Symbol]*shimast.Node {
  bindings := make(map[*shimast.Symbol]*shimast.Node, len(inherited)+len(arguments))
  for symbol, argument := range inherited {
    bindings[symbol] = argument
  }
  if len(arguments) == 0 {
    return bindings
  }
  var parameters []*shimast.Node
  switch declaration.Kind {
  case shimast.KindTypeAliasDeclaration:
    alias := declaration.AsTypeAliasDeclaration()
    if alias.TypeParameters != nil {
      parameters = alias.TypeParameters.Nodes
    }
  case shimast.KindInterfaceDeclaration:
    object := declaration.AsInterfaceDeclaration()
    if object.TypeParameters != nil {
      parameters = object.TypeParameters.Nodes
    }
  case shimast.KindClassDeclaration:
    object := declaration.AsClassDeclaration()
    if object.TypeParameters != nil {
      parameters = object.TypeParameters.Nodes
    }
  }
  for i, parameter := range parameters {
    if i >= len(arguments) {
      break
    }
    if symbol := checker.GetSymbolAtLocation(parameter.Name()); symbol != nil {
      bindings[symbol] = arguments[i]
    }
  }
  return bindings
}

func llmEvaluation_declarationSurfaces(declaration *shimast.Node) []*shimast.Node {
  switch declaration.Kind {
  case shimast.KindTypeAliasDeclaration:
    return []*shimast.Node{declaration.AsTypeAliasDeclaration().Type}
  case shimast.KindInterfaceDeclaration:
    object := declaration.AsInterfaceDeclaration()
    surfaces := append([]*shimast.Node{}, object.Members.Nodes...)
    if object.HeritageClauses != nil {
      surfaces = append(surfaces, object.HeritageClauses.Nodes...)
    }
    return surfaces
  case shimast.KindClassDeclaration:
    object := declaration.AsClassDeclaration()
    surfaces := append([]*shimast.Node{}, object.Members.Nodes...)
    if object.HeritageClauses != nil {
      surfaces = append(surfaces, object.HeritageClauses.Nodes...)
    }
    return surfaces
  }
  return nil
}

func llmEvaluation_declarationHasProbability(declaration *shimast.Node) bool {
  for _, comment := range declaration.JSDoc(nil) {
    doc := comment.AsJSDoc()
    if doc == nil || doc.Tags == nil {
      continue
    }
    for _, tag := range doc.Tags.Nodes {
      if tag != nil && tag.TagName() != nil && tag.TagName().Text() == "probability" {
        return true
      }
    }
  }
  return false
}
