package llm

import (
  "path/filepath"
  "strings"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimchecker "github.com/microsoft/typescript-go/shim/checker"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativellmprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers/llm"
)

// TypeScript mapped types can mention source members that are absent from the
// final decision object (for example Pick<T, "kept">). Report only declaration
// annotations on an emitted decision path or one of its containing objects.
func llmEvaluation_reachableDeclarationErrors(plan []any, errors []nativellmprogrammers.LlmEvaluationProgrammer_IError) []nativellmprogrammers.LlmEvaluationProgrammer_IError {
  leaves := []string{}
  for _, entry := range plan {
    leaf, ok := entry.(map[string]any)
    if !ok {
      continue
    }
    parts, ok := leaf["path"].([]any)
    if !ok {
      continue
    }
    accessor := "$input"
    for _, part := range parts {
      key, ok := part.(string)
      if !ok {
        break
      }
      accessor += nativefactories.IdentifierFactory.PathPostfix(key)
    }
    leaves = append(leaves, accessor)
  }
  output := []nativellmprogrammers.LlmEvaluationProgrammer_IError{}
  for _, err := range errors {
    for _, leaf := range leaves {
      if leaf == err.Accessor || strings.HasPrefix(leaf, err.Accessor+".") || strings.HasPrefix(leaf, err.Accessor+"[") {
        output = append(output, err)
        break
      }
    }
  }
  return output
}

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
    if node.ModifierFlags()&shimast.ModifierFlagsStatic != 0 {
      return
    }
    if node.Kind == shimast.KindPropertySignature || node.Kind == shimast.KindPropertyDeclaration || node.Kind == shimast.KindPropertyAssignment {
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
    if node.Kind == shimast.KindConditionalType {
      conditional := node.AsConditionalTypeNode()
      if inferred, ok := llmEvaluation_inferBindings(checker, llmEvaluation_boundTypeNode(checker, conditional.CheckType, bindings), conditional.ExtendsType, bindings); ok {
        walk(conditional.TrueType, accessor, inferred)
        return
      }
      branch := llmEvaluation_conditionalBranch(checker, conditional, bindings)
      if branch != nil {
        walk(branch, accessor, bindings)
      } else {
        // An unresolved/distributive conditional can emit either branch.
        walk(conditional.TrueType, accessor, bindings)
        walk(conditional.FalseType, accessor, bindings)
      }
      return
    }
    if node.Kind == shimast.KindIndexedAccessType {
      if surfaces := llmEvaluation_indexedSurfaces(checker, node.AsIndexedAccessTypeNode(), bindings); surfaces != nil {
        for _, surface := range surfaces {
          walk(surface.node, accessor, surface.bindings)
        }
        return
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
    case shimast.KindTypeQuery:
      reference := node.AsTypeQueryNode()
      name = reference.ExprName
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
          case shimast.KindEnumDeclaration:
            message = "LLM evaluation @probability on an enum declaration is not supported; put it on the decision property or enum member."
          case shimast.KindVariableDeclaration:
            message = "LLM evaluation @probability on a variable declaration is not supported; put it on the decision property or enum member."
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

// An indexed access contributes only the selected property's type, not every
// member of its source interface. Its source member key is not a path segment
// in the evaluation result.
type llmEvaluation_indexedSurface struct {
  node     *shimast.Node
  bindings map[*shimast.Symbol]*shimast.Node
}

func llmEvaluation_indexedSurfaces(checker *shimchecker.Checker, indexed *shimast.IndexedAccessTypeNode, bindings map[*shimast.Symbol]*shimast.Node) []llmEvaluation_indexedSurface {
  objectNode := llmEvaluation_boundTypeNode(checker, indexed.ObjectType, bindings)
  keyNode := llmEvaluation_boundTypeNode(checker, indexed.IndexType, bindings)
  object := checker.GetTypeFromTypeNode(objectNode)
  keyType := checker.GetTypeFromTypeNode(keyNode)
  if object == nil || keyType == nil {
    return nil
  }
  surfaces := []llmEvaluation_indexedSurface{}
  for _, candidate := range keyType.Distributed() {
    if candidate.IsStringLiteral() == false {
      return nil
    }
    key, ok := candidate.AsLiteralType().Value().(string)
    if !ok {
      return nil
    }
    property := checker.GetPropertyOfType(object, key)
    if property == nil || len(property.Declarations) == 0 {
      return nil
    }
    for _, declaration := range property.Declarations {
      if declaration == nil || declaration.Type() == nil {
        return nil
      }
      nested := bindings
      if parent := declaration.Parent; parent != nil {
        if resolved := llmEvaluation_indexedParentBindings(checker, objectNode, parent, bindings, map[*shimast.Symbol]bool{}); resolved != nil {
          nested = resolved
        }
      }
      surfaces = append(surfaces, llmEvaluation_indexedSurface{node: declaration.Type(), bindings: nested})
    }
  }
  return surfaces
}

// A selected property can be declared on a base interface or behind a type
// alias. Carry each generic substitution to the declaration that owns it.
func llmEvaluation_indexedParentBindings(checker *shimchecker.Checker, node *shimast.Node, parent *shimast.Node, bindings map[*shimast.Symbol]*shimast.Node, active map[*shimast.Symbol]bool) map[*shimast.Symbol]*shimast.Node {
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
  }
  if name == nil {
    return nil
  }
  symbol := checker.GetSymbolAtLocation(name)
  if symbol != nil && symbol.Flags&shimast.SymbolFlagsAlias != 0 {
    symbol = shimchecker.Checker_getAliasedSymbol(checker, symbol)
  }
  if symbol == nil || active[symbol] {
    return nil
  }
  active[symbol] = true
  defer delete(active, symbol)
  for _, declaration := range symbol.Declarations {
    if declaration == nil {
      continue
    }
    nested := llmEvaluation_bindTypeArguments(checker, declaration, arguments, bindings)
    if declaration == parent {
      return nested
    }
    var next []*shimast.Node
    switch declaration.Kind {
    case shimast.KindTypeAliasDeclaration:
      next = []*shimast.Node{declaration.AsTypeAliasDeclaration().Type}
    case shimast.KindInterfaceDeclaration:
      if heritage := declaration.AsInterfaceDeclaration().HeritageClauses; heritage != nil {
        for _, clause := range heritage.Nodes {
          next = append(next, clause.AsHeritageClause().Types.Nodes...)
        }
      }
    case shimast.KindClassDeclaration:
      if heritage := declaration.AsClassDeclaration().HeritageClauses; heritage != nil {
        for _, clause := range heritage.Nodes {
          next = append(next, clause.AsHeritageClause().Types.Nodes...)
        }
      }
    }
    for _, target := range next {
      if found := llmEvaluation_indexedParentBindings(checker, target, parent, nested, active); found != nil {
        return found
      }
    }
  }
  return nil
}

// Only a naked type parameter makes a conditional distributive. A written
// union (or a named union alias) is checked as a whole.
func llmEvaluation_conditionalBranch(checker *shimchecker.Checker, conditional *shimast.ConditionalTypeNode, bindings map[*shimast.Symbol]*shimast.Node) *shimast.Node {
  checkNode := llmEvaluation_boundTypeNode(checker, conditional.CheckType, bindings)
  extendsNode := llmEvaluation_boundTypeNode(checker, conditional.ExtendsType, bindings)
  check := checker.GetTypeFromTypeNode(checkNode)
  target := checker.GetTypeFromTypeNode(extendsNode)
  if check == nil || target == nil || check.Flags()&(shimchecker.TypeFlagsAny|shimchecker.TypeFlagsTypeParameter) != 0 {
    return nil
  }
  var parameter *shimast.Symbol
  if conditional.CheckType.Kind == shimast.KindTypeReference {
    parameter = checker.GetSymbolAtLocation(conditional.CheckType.AsTypeReferenceNode().TypeName)
  }
  if parameter == nil || parameter.Flags&shimast.SymbolFlagsTypeParameter == 0 {
    if checker.IsTypeAssignableTo(check, target) {
      return conditional.TrueType
    }
    return conditional.FalseType
  }
  var selected *shimast.Node
  for _, constituent := range check.Distributed() {
    if constituent.Flags()&(shimchecker.TypeFlagsAny|shimchecker.TypeFlagsTypeParameter) != 0 {
      return nil
    }
    branch := conditional.FalseType
    if checker.IsTypeAssignableTo(constituent, target) {
      branch = conditional.TrueType
    }
    if selected != nil && selected != branch {
      return nil
    }
    selected = branch
  }
  return selected
}

// Match an inference pattern only where the written source type exposes the
// inferred argument. This preserves the source alias through TS's normalized
// conditional result without guessing at arbitrary structural inference.
func llmEvaluation_inferBindings(checker *shimchecker.Checker, source *shimast.Node, pattern *shimast.Node, inherited map[*shimast.Symbol]*shimast.Node) (map[*shimast.Symbol]*shimast.Node, bool) {
  inferred := llmEvaluation_bindingsCopy(inherited)
  var match func(*shimast.Node, *shimast.Node) bool
  match = func(value *shimast.Node, target *shimast.Node) bool {
    if value == nil || target == nil {
      return false
    }
    value = llmEvaluation_boundTypeNode(checker, value, inherited)
    if target.Kind == shimast.KindInferType {
      parameter := target.AsInferTypeNode().TypeParameter
      if parameter.AsTypeParameterDeclaration().Constraint != nil {
        return false
      }
      symbol := checker.GetSymbolAtLocation(parameter.Name())
      if symbol == nil {
        return false
      }
      inferred[symbol] = value
      return true
    }
    if target.Kind == shimast.KindArrayType {
      if value.Kind != shimast.KindArrayType {
        return false
      }
      return match(value.AsArrayTypeNode().ElementType, target.AsArrayTypeNode().ElementType)
    }
    if target.Kind != shimast.KindTypeReference {
      return false
    }
    reference := target.AsTypeReferenceNode()
    if reference.TypeArguments == nil || len(reference.TypeArguments.Nodes) != 1 {
      return false
    }
    targetSymbol := checker.GetSymbolAtLocation(reference.TypeName)
    if value.Kind == shimast.KindArrayType && llmEvaluation_builtinArray(targetSymbol) {
      return match(value.AsArrayTypeNode().ElementType, reference.TypeArguments.Nodes[0])
    }
    if value.Kind != shimast.KindTypeReference {
      return false
    }
    sourceReference := value.AsTypeReferenceNode()
    if sourceReference.TypeArguments == nil || len(sourceReference.TypeArguments.Nodes) != 1 || checker.GetSymbolAtLocation(sourceReference.TypeName) != targetSymbol {
      return false
    }
    return match(sourceReference.TypeArguments.Nodes[0], reference.TypeArguments.Nodes[0])
  }
  if match(source, pattern) == false {
    return nil, false
  }
  return inferred, true
}

func llmEvaluation_bindingsCopy(bindings map[*shimast.Symbol]*shimast.Node) map[*shimast.Symbol]*shimast.Node {
  copy := make(map[*shimast.Symbol]*shimast.Node, len(bindings)+1)
  for symbol, argument := range bindings {
    copy[symbol] = argument
  }
  return copy
}

func llmEvaluation_boundTypeNode(checker *shimchecker.Checker, node *shimast.Node, bindings map[*shimast.Symbol]*shimast.Node) *shimast.Node {
  for node != nil && node.Kind == shimast.KindTypeReference {
    symbol := checker.GetSymbolAtLocation(node.AsTypeReferenceNode().TypeName)
    argument := bindings[symbol]
    if argument == nil || argument == node {
      break
    }
    node = argument
  }
  return node
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
  bindings := llmEvaluation_bindingsCopy(inherited)
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
    if symbol := checker.GetSymbolAtLocation(parameter.Name()); symbol != nil {
      if i < len(arguments) {
        bindings[symbol] = arguments[i]
      } else if fallback := parameter.AsTypeParameterDeclaration().DefaultType; fallback != nil {
        bindings[symbol] = fallback
      }
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
  case shimast.KindVariableDeclaration:
    variable := declaration.AsVariableDeclaration()
    if variable.Type != nil {
      return []*shimast.Node{variable.Type}
    }
    return []*shimast.Node{variable.Initializer}
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
