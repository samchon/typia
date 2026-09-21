package llm

import (
  "fmt"
  "path/filepath"
  "strconv"
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
  trackers := []map[*shimast.Symbol]bool{}
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
      checkNode := llmEvaluation_boundTypeNode(checker, conditional.CheckType, bindings)
      rawCheck := conditional.CheckType
      for rawCheck.Kind == shimast.KindParenthesizedType {
        rawCheck = rawCheck.AsParenthesizedTypeNode().Type
      }
      if rawCheck.Kind == shimast.KindTypeReference && checkNode.Parent != nil {
        parameter := checker.GetSymbolAtLocation(rawCheck.AsTypeReferenceNode().TypeName)
        if parameter != nil && parameter.Flags&shimast.SymbolFlagsTypeParameter != 0 {
          resolved := checker.GetTypeFromTypeNode(checkNode)
          if resolved != nil && resolved.Flags()&shimchecker.TypeFlagsNever != 0 {
            // A distributive conditional over never produces no branch.
            return
          }
        }
      }
      sourceDeclarations := []*shimast.Node{}
      if checkNode.Kind == shimast.KindTypeReference {
        symbol := checker.GetSymbolAtLocation(checkNode.AsTypeReferenceNode().TypeName)
        if symbol != nil && symbol.Flags&shimast.SymbolFlagsAlias != 0 {
          symbol = shimchecker.Checker_getAliasedSymbol(checker, symbol)
        }
        if symbol != nil {
          sourceDeclarations = symbol.Declarations
        }
      }
      inferredBindings := bindings
      declarations := []*shimast.Node{}
      if conditional.ExtendsType.Kind != shimast.KindInferType && llmEvaluation_containsInfer(conditional.ExtendsType) {
        checkNode, inferredBindings, declarations = llmEvaluation_expandTypeAlias(checker, checkNode, bindings)
      }
      reported := map[*shimast.Node]bool{}
      report := func(rows []*shimast.Node) {
        for _, declaration := range rows {
          if reported[declaration] {
            continue
          }
          reported[declaration] = true
          if message := llmEvaluation_declarationProbabilityMessage(declaration); message != "" && llmEvaluation_declarationHasProbability(declaration) {
            errors = append(errors, nativellmprogrammers.LlmEvaluationProgrammer_IError{
              Accessor: accessor,
              Message:  message,
            })
          }
        }
      }
      if rawCheck.Kind == shimast.KindTypeReference {
        parameter := checker.GetSymbolAtLocation(rawCheck.AsTypeReferenceNode().TypeName)
        if parameter != nil && parameter.Flags&shimast.SymbolFlagsTypeParameter != 0 && checkNode.Kind == shimast.KindUnionType && llmEvaluation_containsInfer(conditional.ExtendsType) {
          for _, part := range checkNode.AsUnionTypeNode().Types.Nodes {
            expanded, partBindings, partDeclarations := llmEvaluation_expandTypeAlias(checker, part, inferredBindings)
            if inferred, ok := llmEvaluation_inferBindings(checker, expanded, conditional.ExtendsType, partBindings); ok {
              tracked := llmEvaluation_inferSymbols(checker, conditional.ExtendsType)
              trackers = append(trackers, tracked)
              walk(conditional.TrueType, accessor, inferred)
              trackers = trackers[:len(trackers)-1]
              if llmEvaluation_usedInference(tracked) {
                report(sourceDeclarations)
                report(declarations)
                report(partDeclarations)
              }
            } else if assignable, known := llmEvaluation_resolvedAssignable(checker, expanded, conditional.ExtendsType, partBindings); known && assignable == false {
              walk(conditional.FalseType, accessor, partBindings)
            } else {
              walk(conditional.TrueType, accessor, partBindings)
              walk(conditional.FalseType, accessor, partBindings)
            }
          }
          return
        }
      }
      if inferred, ok := llmEvaluation_inferBindings(checker, checkNode, conditional.ExtendsType, inferredBindings); ok {
        tracked := llmEvaluation_inferSymbols(checker, conditional.ExtendsType)
        trackers = append(trackers, tracked)
        walk(conditional.TrueType, accessor, inferred)
        trackers = trackers[:len(trackers)-1]
        if conditional.ExtendsType.Kind != shimast.KindInferType && llmEvaluation_usedInference(tracked) {
          report(sourceDeclarations)
          report(declarations)
        }
        return
      }
      branch := llmEvaluation_conditionalBranch(checker, conditional, inferredBindings)
      if branch != nil {
        walk(branch, accessor, inferredBindings)
      } else {
        // An unresolved/distributive conditional can emit either branch.
        walk(conditional.TrueType, accessor, inferredBindings)
        walk(conditional.FalseType, accessor, inferredBindings)
      }
      return
    }
    if node.Kind == shimast.KindIndexedAccessType {
      if surfaces := llmEvaluation_indexedSurfaces(checker, node.AsIndexedAccessTypeNode(), bindings); surfaces != nil {
        source, _, declarations := llmEvaluation_expandIndexedObject(checker, node.AsIndexedAccessTypeNode().ObjectType, bindings)
        if source.Kind == shimast.KindTypeReference {
          symbol := checker.GetSymbolAtLocation(source.AsTypeReferenceNode().TypeName)
          if symbol != nil && symbol.Flags&shimast.SymbolFlagsAlias != 0 {
            symbol = shimchecker.Checker_getAliasedSymbol(checker, symbol)
          }
          if symbol != nil {
            declarations = append(declarations, symbol.Declarations...)
          }
        }
        for _, surface := range surfaces {
          declarations = append(declarations, surface.owner)
          declarations = append(declarations, surface.declarations...)
        }
        reported := map[*shimast.Node]bool{}
        for _, declaration := range declarations {
          if declaration == nil || reported[declaration] {
            continue
          }
          reported[declaration] = true
          if message := llmEvaluation_declarationProbabilityMessage(declaration); message != "" && llmEvaluation_declarationHasProbability(declaration) {
            errors = append(errors, nativellmprogrammers.LlmEvaluationProgrammer_IError{Accessor: accessor, Message: message})
          }
        }
        walk(node.AsIndexedAccessTypeNode().IndexType, accessor, bindings)
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
      for _, tracked := range trackers {
        if _, found := tracked[symbol]; found {
          tracked[symbol] = true
        }
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
          message := llmEvaluation_declarationProbabilityMessage(declaration)
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
  node         *shimast.Node
  bindings     map[*shimast.Symbol]*shimast.Node
  owner        *shimast.Node
  declarations []*shimast.Node
}

func llmEvaluation_indexedSurfaces(checker *shimchecker.Checker, indexed *shimast.IndexedAccessTypeNode, bindings map[*shimast.Symbol]*shimast.Node) []llmEvaluation_indexedSurface {
  objectNode := llmEvaluation_boundTypeNode(checker, indexed.ObjectType, bindings)
  keyNode := llmEvaluation_boundTypeNode(checker, indexed.IndexType, bindings)
  keyType := checker.GetTypeFromTypeNode(keyNode)
  if keyType == nil {
    return nil
  }
  tupleNode, tupleBindings, _ := llmEvaluation_expandIndexedObject(checker, objectNode, bindings)
  if tupleNode.Kind == shimast.KindTupleType {
    elements := llmEvaluation_flattenFixedTupleSpreads(checker, tupleNode.AsTupleTypeNode().Elements.Nodes, tupleBindings, map[*shimast.Node]bool{})
    restIndex := -1
    for i, element := range elements {
      _, _, rest := llmEvaluation_tupleElement(element.node)
      if rest {
        restIndex = i
        break
      }
    }
    surfaces := []llmEvaluation_indexedSurface{}
    for _, candidate := range keyType.Distributed() {
      var key string
      if candidate.IsNumberLiteral() {
        key = fmt.Sprint(candidate.AsLiteralType().Value())
      } else if candidate.IsStringLiteral() {
        key, _ = candidate.AsLiteralType().Value().(string)
      } else {
        return nil
      }
      index, err := strconv.Atoi(key)
      if err != nil || strconv.Itoa(index) != key || index < 0 || len(elements) == 0 {
        return nil
      }
      if restIndex < 0 || index < restIndex {
        if index >= len(elements) {
          return nil
        }
        selected := elements[index]
        selected.node, _, _ = llmEvaluation_tupleElement(selected.node)
        surfaces = append(surfaces, selected)
        continue
      }
      selectedRest := elements[restIndex]
      rest, _, _ := llmEvaluation_tupleElement(selectedRest.node)
      offset := index - restIndex
      alternatives := llmEvaluation_restAlternatives(checker, rest, selectedRest.bindings, offset)
      if alternatives == nil {
        return nil
      }
      for _, alternative := range alternatives {
        for _, selected := range alternative.surfaces {
          selected.declarations = append(selectedRest.declarations, selected.declarations...)
          surfaces = append(surfaces, selected)
        }
        for i := restIndex + 1; i < len(elements); i++ {
          length := offset - (i - restIndex - 1)
          if length < alternative.minimum || alternative.maximum >= 0 && length > alternative.maximum {
            continue
          }
          selected := elements[i]
          selected.node, _, _ = llmEvaluation_tupleElement(selected.node)
          selected.declarations = append(selected.declarations, selectedRest.declarations...)
          selected.declarations = append(selected.declarations, alternative.declarations...)
          surfaces = append(surfaces, selected)
        }
      }
    }
    return surfaces
  }
  object := checker.GetTypeFromTypeNode(objectNode)
  if object == nil {
    return nil
  }
  surfaces := []llmEvaluation_indexedSurface{}
  for _, candidate := range keyType.Distributed() {
    var key string
    if candidate.IsStringLiteral() {
      key, _ = candidate.AsLiteralType().Value().(string)
    } else if candidate.IsNumberLiteral() {
      key = fmt.Sprint(candidate.AsLiteralType().Value())
    } else {
      return nil
    }
    property := checker.GetPropertyOfType(object, key)
    if property == nil || len(property.Declarations) == 0 {
      selected := llmEvaluation_indexSignatureSurfaces(checker, objectNode, tupleNode, tupleBindings, candidate)
      if selected == nil {
        return nil
      }
      surfaces = append(surfaces, selected...)
      continue
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
      surfaces = append(surfaces, llmEvaluation_indexedSurface{node: declaration.Type(), bindings: nested, owner: declaration.Parent, declarations: []*shimast.Node{declaration}})
    }
  }
  return surfaces
}

// The checker may resolve I["key"] through an index signature without a
// named property symbol. Follow the written declaration so its JSDoc and the
// selected value type retain provenance just like an explicit property.
func llmEvaluation_indexSignatureSurfaces(checker *shimchecker.Checker, objectNode *shimast.Node, source *shimast.Node, bindings map[*shimast.Symbol]*shimast.Node, key *shimchecker.Type) []llmEvaluation_indexedSurface {
  signatures := []*shimast.Node{}
  active := map[*shimast.Symbol]bool{}
  var collect func(*shimast.Node)
  collect = func(node *shimast.Node) {
    if node == nil {
      return
    }
    switch node.Kind {
    case shimast.KindParenthesizedType:
      collect(node.AsParenthesizedTypeNode().Type)
    case shimast.KindTypeReference, shimast.KindExpressionWithTypeArguments:
      var name *shimast.Node
      if node.Kind == shimast.KindTypeReference {
        name = node.AsTypeReferenceNode().TypeName
      } else {
        name = node.AsExpressionWithTypeArguments().Expression
      }
      symbol := checker.GetSymbolAtLocation(name)
      if symbol != nil && symbol.Flags&shimast.SymbolFlagsAlias != 0 {
        symbol = shimchecker.Checker_getAliasedSymbol(checker, symbol)
      }
      if symbol == nil || active[symbol] {
        return
      }
      active[symbol] = true
      for _, declaration := range symbol.Declarations {
        collect(declaration)
      }
      delete(active, symbol)
    case shimast.KindTypeAliasDeclaration:
      collect(node.AsTypeAliasDeclaration().Type)
    case shimast.KindInterfaceDeclaration:
      object := node.AsInterfaceDeclaration()
      for _, member := range object.Members.Nodes {
        collect(member)
      }
      if object.HeritageClauses != nil {
        for _, clause := range object.HeritageClauses.Nodes {
          for _, base := range clause.AsHeritageClause().Types.Nodes {
            collect(base)
          }
        }
      }
    case shimast.KindTypeLiteral:
      for _, member := range node.AsTypeLiteralNode().Members.Nodes {
        collect(member)
      }
    case shimast.KindIntersectionType:
      for _, part := range node.AsIntersectionTypeNode().Types.Nodes {
        collect(part)
      }
    case shimast.KindIndexSignature:
      signatures = append(signatures, node)
    }
  }
  collect(source)
  selected := []llmEvaluation_indexedSurface{}
  numeric := []llmEvaluation_indexedSurface{}
  numericKey := llmEvaluation_numericIndexKey(key)
  for _, signature := range signatures {
    parameters := signature.AsIndexSignatureDeclaration().Parameters
    if parameters == nil || len(parameters.Nodes) != 1 || parameters.Nodes[0].Type() == nil || signature.Type() == nil {
      continue
    }
    parameter := checker.GetTypeFromTypeNode(parameters.Nodes[0].Type())
    if parameter == nil || checker.IsTypeAssignableTo(key, parameter) == false && !(numericKey && (parameter == checker.GetStringType() || parameter == checker.GetNumberType())) {
      continue
    }
    nested := bindings
    if parent := signature.Parent; parent != nil {
      if resolved := llmEvaluation_indexedParentBindings(checker, objectNode, parent, bindings, map[*shimast.Symbol]bool{}); resolved != nil {
        nested = resolved
      }
    }
    surface := llmEvaluation_indexedSurface{node: signature.Type(), bindings: nested, owner: signature.Parent, declarations: []*shimast.Node{signature}}
    selected = append(selected, surface)
    if numericKey && parameter.Flags()&shimchecker.TypeFlagsNumberLike != 0 {
      numeric = append(numeric, surface)
    }
  }
  if len(numeric) != 0 {
    return numeric
  }
  if len(selected) == 0 {
    return nil
  }
  return selected
}

// A canonical numeric string such as "0" or "1.5" selects a number index
// signature before a string signature in TypeScript.
func llmEvaluation_numericIndexKey(key *shimchecker.Type) bool {
  if key.IsNumberLiteral() {
    return true
  }
  if key.IsStringLiteral() == false {
    return false
  }
  text, ok := key.AsLiteralType().Value().(string)
  if ok == false {
    return false
  }
  value, err := strconv.ParseFloat(text, 64)
  return err == nil && strconv.FormatFloat(value, 'f', -1, 64) == text
}

type llmEvaluation_restAlternative struct {
  surfaces     []llmEvaluation_indexedSurface
  declarations []*shimast.Node
  minimum      int
  maximum      int // -1 means unbounded
}

// A rest can be a union of fixed tuples and open arrays. Inspect each possible
// sequence position separately, and retain the length range for later suffixes.
func llmEvaluation_restAlternatives(checker *shimchecker.Checker, node *shimast.Node, bindings map[*shimast.Symbol]*shimast.Node, index int) []llmEvaluation_restAlternative {
  expanded, nested, declarations := llmEvaluation_expandIndexedObject(checker, node, bindings)
  if expanded.Kind == shimast.KindUnionType {
    output := []llmEvaluation_restAlternative{}
    for _, part := range expanded.AsUnionTypeNode().Types.Nodes {
      alternatives := llmEvaluation_restAlternatives(checker, part, nested, index)
      if alternatives == nil {
        return nil
      }
      for _, alternative := range alternatives {
        alternative.declarations = append(declarations, alternative.declarations...)
        for i := range alternative.surfaces {
          alternative.surfaces[i].declarations = append(declarations, alternative.surfaces[i].declarations...)
        }
        output = append(output, alternative)
      }
    }
    return output
  }
  if expanded.Kind == shimast.KindTupleType {
    elements := llmEvaluation_flattenFixedTupleSpreads(checker, expanded.AsTupleTypeNode().Elements.Nodes, nested, map[*shimast.Node]bool{})
    restIndex := -1
    for i, element := range elements {
      _, _, rest := llmEvaluation_tupleElement(element.node)
      if rest {
        restIndex = i
        break
      }
    }
    if restIndex < 0 {
      selected := []llmEvaluation_indexedSurface{}
      if index < len(elements) {
        surface := elements[index]
        surface.node, _, _ = llmEvaluation_tupleElement(surface.node)
        surface.declarations = append(surface.declarations, declarations...)
        selected = append(selected, surface)
      }
      return []llmEvaluation_restAlternative{{surfaces: selected, declarations: declarations, minimum: len(elements), maximum: len(elements)}}
    }
    inner, _, _ := llmEvaluation_tupleElement(elements[restIndex].node)
    nestedRest := llmEvaluation_restAlternatives(checker, inner, elements[restIndex].bindings, max(0, index-restIndex))
    if nestedRest == nil {
      return nil
    }
    output := []llmEvaluation_restAlternative{}
    suffixCount := len(elements) - restIndex - 1
    for _, alternative := range nestedRest {
      selected := []llmEvaluation_indexedSurface{}
      if index < restIndex {
        surface := elements[index]
        surface.node, _, _ = llmEvaluation_tupleElement(surface.node)
        selected = append(selected, surface)
      } else {
        for _, surface := range alternative.surfaces {
          surface.declarations = append(surface.declarations, elements[restIndex].declarations...)
          selected = append(selected, surface)
        }
        for i := restIndex + 1; i < len(elements); i++ {
          length := index - restIndex - (i - restIndex - 1)
          if length < alternative.minimum || alternative.maximum >= 0 && length > alternative.maximum {
            continue
          }
          surface := elements[i]
          surface.node, _, _ = llmEvaluation_tupleElement(surface.node)
          surface.declarations = append(surface.declarations, elements[restIndex].declarations...)
          surface.declarations = append(surface.declarations, alternative.declarations...)
          selected = append(selected, surface)
        }
      }
      for i := range selected {
        selected[i].declarations = append(selected[i].declarations, declarations...)
      }
      maximum := -1
      if alternative.maximum >= 0 {
        maximum = restIndex + alternative.maximum + suffixCount
      }
      used := append([]*shimast.Node{}, declarations...)
      used = append(used, elements[restIndex].declarations...)
      used = append(used, alternative.declarations...)
      output = append(output, llmEvaluation_restAlternative{
        surfaces: selected, declarations: used,
        minimum: restIndex + alternative.minimum + suffixCount, maximum: maximum,
      })
    }
    return output
  }
  element, _, ok := llmEvaluation_inferArrayElement(checker, expanded)
  if ok == false {
    return nil
  }
  return []llmEvaluation_restAlternative{{surfaces: []llmEvaluation_indexedSurface{{node: element, bindings: nested, declarations: declarations}}, declarations: declarations, minimum: 0, maximum: -1}}
}

// A spread of a fixed tuple contributes its individual positions, unlike an
// open array rest whose length can move later tuple elements.
func llmEvaluation_flattenFixedTupleSpreads(checker *shimchecker.Checker, elements []*shimast.Node, bindings map[*shimast.Symbol]*shimast.Node, active map[*shimast.Node]bool) []llmEvaluation_indexedSurface {
  output := []llmEvaluation_indexedSurface{}
  preceding := []*shimast.Node{}
  for _, element := range elements {
    inner, _, rest := llmEvaluation_tupleElement(element)
    if rest {
      expanded, nested, declarations := llmEvaluation_expandIndexedObject(checker, inner, bindings)
      if expanded.Kind == shimast.KindTupleType && active[expanded] == false {
        active[expanded] = true
        children := llmEvaluation_flattenFixedTupleSpreads(checker, expanded.AsTupleTypeNode().Elements.Nodes, nested, active)
        delete(active, expanded)
        for _, child := range children {
          child.declarations = append(child.declarations, preceding...)
          child.declarations = append(child.declarations, declarations...)
          output = append(output, child)
        }
        preceding = append(preceding, declarations...)
        continue
      }
    }
    output = append(output, llmEvaluation_indexedSurface{node: element, bindings: bindings, declarations: append([]*shimast.Node{}, preceding...)})
  }
  return output
}

func llmEvaluation_expandIndexedObject(checker *shimchecker.Checker, node *shimast.Node, bindings map[*shimast.Symbol]*shimast.Node) (*shimast.Node, map[*shimast.Symbol]*shimast.Node, []*shimast.Node) {
  seen := map[*shimast.Node]bool{}
  declarations := []*shimast.Node{}
  for node != nil {
    node = llmEvaluation_boundTypeNode(checker, node, bindings)
    if seen[node] {
      break
    }
    seen[node] = true
    if node.Kind == shimast.KindParenthesizedType {
      node = node.AsParenthesizedTypeNode().Type
      continue
    }
    if node.Kind == shimast.KindTypeOperator && node.AsTypeOperatorNode().Operator == shimast.KindReadonlyKeyword {
      node = node.Type()
      continue
    }
    if node.Kind == shimast.KindConditionalType {
      if branch := llmEvaluation_conditionalBranch(checker, node.AsConditionalTypeNode(), bindings); branch != nil {
        node = branch
        continue
      }
    }
    expanded, nested, rows := llmEvaluation_expandTypeAlias(checker, node, bindings)
    declarations = append(declarations, rows...)
    if expanded == node {
      break
    }
    node, bindings = expanded, nested
  }
  return node, bindings, declarations
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
  for checkNode.Kind == shimast.KindParenthesizedType {
    checkNode = checkNode.AsParenthesizedTypeNode().Type
  }
  extendsNode := llmEvaluation_boundTypeNode(checker, conditional.ExtendsType, bindings)
  var parameter *shimast.Symbol
  rawCheck := conditional.CheckType
  for rawCheck.Kind == shimast.KindParenthesizedType {
    rawCheck = rawCheck.AsParenthesizedTypeNode().Type
  }
  if rawCheck.Kind == shimast.KindTypeReference {
    parameter = checker.GetSymbolAtLocation(rawCheck.AsTypeReferenceNode().TypeName)
  }
  if parameter == nil || parameter.Flags&shimast.SymbolFlagsTypeParameter == 0 {
    assignable, known := llmEvaluation_resolvedAssignable(checker, checkNode, extendsNode, bindings)
    if known == false {
      return nil
    }
    if assignable {
      return conditional.TrueType
    }
    return conditional.FalseType
  }
  // A written union has a parent and can be normalized by the checker (which
  // drops never and absorbs unknown). Only a factory-built inference union
  // lacks a parent; sending that node to the checker would panic.
  if checkNode.Kind == shimast.KindUnionType && checkNode.Parent == nil {
    var selected *shimast.Node
    for _, part := range checkNode.AsUnionTypeNode().Types.Nodes {
      partType := checker.GetTypeFromTypeNode(part)
      if partType != nil && partType.Flags()&shimchecker.TypeFlagsNever != 0 {
        continue
      }
      if partType != nil && partType.Flags()&shimchecker.TypeFlagsUnknown != 0 {
        assignable, known := llmEvaluation_resolvedAssignable(checker, part, extendsNode, bindings)
        if known == false {
          return nil
        }
        if assignable {
          return conditional.TrueType
        }
        return conditional.FalseType
      }
      assignable, known := llmEvaluation_resolvedAssignable(checker, part, extendsNode, bindings)
      if known == false {
        return nil
      }
      branch := conditional.FalseType
      if assignable {
        branch = conditional.TrueType
      }
      if selected != nil && selected != branch {
        return nil
      }
      selected = branch
    }
    return selected
  }
  check := checker.GetTypeFromTypeNode(checkNode)
  target := checker.GetTypeFromTypeNode(extendsNode)
  if check == nil || target == nil || check.Flags()&(shimchecker.TypeFlagsAny|shimchecker.TypeFlagsTypeParameter) != 0 {
    return nil
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

// Resolve written unions and arrays one layer at a time. The checker cannot
// instantiate a generic parameter buried in the original syntax, but it can
// compare each bound constituent. Retain both arms for shapes not proven here.
func llmEvaluation_resolvedAssignable(checker *shimchecker.Checker, source *shimast.Node, target *shimast.Node, bindings map[*shimast.Symbol]*shimast.Node) (bool, bool) {
  source = llmEvaluation_boundTypeNode(checker, source, bindings)
  target = llmEvaluation_boundTypeNode(checker, target, bindings)
  for source.Kind == shimast.KindParenthesizedType {
    source = source.AsParenthesizedTypeNode().Type
  }
  for target.Kind == shimast.KindParenthesizedType {
    target = target.AsParenthesizedTypeNode().Type
  }
  if source.Kind == shimast.KindUnionType {
    unknown := false
    rejected := false
    for _, part := range source.AsUnionTypeNode().Types.Nodes {
      assignable, known := llmEvaluation_resolvedAssignable(checker, part, target, bindings)
      if known && assignable == false {
        rejected = true
      }
      unknown = unknown || known == false
    }
    if unknown {
      return false, false
    }
    return rejected == false, true
  }
  if source.Kind == shimast.KindArrayType && target.Kind == shimast.KindArrayType {
    return llmEvaluation_resolvedAssignable(checker, source.AsArrayTypeNode().ElementType, target.AsArrayTypeNode().ElementType, bindings)
  }
  if llmEvaluation_hasBoundReference(checker, source, bindings) || llmEvaluation_hasBoundReference(checker, target, bindings) {
    return false, false
  }
  left := checker.GetTypeFromTypeNode(source)
  right := checker.GetTypeFromTypeNode(target)
  if left == nil || right == nil || left.Flags()&(shimchecker.TypeFlagsAny|shimchecker.TypeFlagsTypeParameter) != 0 || right.Flags()&shimchecker.TypeFlagsTypeParameter != 0 {
    return false, false
  }
  return checker.IsTypeAssignableTo(left, right), true
}

func llmEvaluation_containsInfer(node *shimast.Node) bool {
  if node == nil {
    return false
  }
  if node.Kind == shimast.KindInferType {
    return true
  }
  found := false
  node.ForEachChild(func(child *shimast.Node) bool {
    if llmEvaluation_containsInfer(child) {
      found = true
      return true
    }
    return false
  })
  return found
}

func llmEvaluation_inferSymbols(checker *shimchecker.Checker, node *shimast.Node) map[*shimast.Symbol]bool {
  symbols := map[*shimast.Symbol]bool{}
  var visit func(*shimast.Node)
  visit = func(current *shimast.Node) {
    if current == nil {
      return
    }
    if current.Kind == shimast.KindInferType {
      parameter := current.AsInferTypeNode().TypeParameter
      if symbol := checker.GetSymbolAtLocation(parameter.Name()); symbol != nil {
        symbols[symbol] = false
      }
      return
    }
    current.ForEachChild(func(child *shimast.Node) bool {
      visit(child)
      return false
    })
  }
  visit(node)
  return symbols
}

func llmEvaluation_usedInference(symbols map[*shimast.Symbol]bool) bool {
  for _, used := range symbols {
    if used {
      return true
    }
  }
  return false
}

func llmEvaluation_expandTypeAlias(checker *shimchecker.Checker, node *shimast.Node, bindings map[*shimast.Symbol]*shimast.Node) (*shimast.Node, map[*shimast.Symbol]*shimast.Node, []*shimast.Node) {
  active := map[*shimast.Symbol]bool{}
  declarations := []*shimast.Node{}
  for node != nil && node.Kind == shimast.KindTypeReference {
    reference := node.AsTypeReferenceNode()
    symbol := checker.GetSymbolAtLocation(reference.TypeName)
    if symbol != nil && symbol.Flags&shimast.SymbolFlagsAlias != 0 {
      symbol = shimchecker.Checker_getAliasedSymbol(checker, symbol)
    }
    if symbol == nil || active[symbol] || len(symbol.Declarations) != 1 || symbol.Declarations[0].Kind != shimast.KindTypeAliasDeclaration {
      break
    }
    active[symbol] = true
    declaration := symbol.Declarations[0]
    declarations = append(declarations, declaration)
    var arguments []*shimast.Node
    if reference.TypeArguments != nil {
      arguments = reference.TypeArguments.Nodes
    }
    bindings = llmEvaluation_bindTypeArguments(checker, declaration, arguments, bindings)
    node = llmEvaluation_boundTypeNode(checker, declaration.AsTypeAliasDeclaration().Type, bindings)
  }
  return node, bindings, declarations
}

func llmEvaluation_hasBoundReference(checker *shimchecker.Checker, node *shimast.Node, bindings map[*shimast.Symbol]*shimast.Node) bool {
  if node == nil {
    return false
  }
  if node.Kind == shimast.KindTypeReference && bindings[checker.GetSymbolAtLocation(node.AsTypeReferenceNode().TypeName)] != nil {
    return true
  }
  found := false
  node.ForEachChild(func(child *shimast.Node) bool {
    if llmEvaluation_hasBoundReference(checker, child, bindings) {
      found = true
      return true
    }
    return false
  })
  return found
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
    for value.Kind == shimast.KindParenthesizedType {
      value = value.AsParenthesizedTypeNode().Type
    }
    for target.Kind == shimast.KindParenthesizedType {
      target = target.AsParenthesizedTypeNode().Type
    }
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
    targetReadonly := target.Kind == shimast.KindTypeOperator && target.AsTypeOperatorNode().Operator == shimast.KindReadonlyKeyword
    if targetReadonly {
      target = target.Type()
    }
    if target.Kind == shimast.KindArrayType {
      element, readonly, ok := llmEvaluation_inferArrayElement(checker, value)
      if ok && (readonly == false || targetReadonly) {
        return match(element, target.AsArrayTypeNode().ElementType)
      }
      return false
    }
    if target.Kind == shimast.KindTupleType {
      if value.Kind == shimast.KindTypeOperator && value.AsTypeOperatorNode().Operator == shimast.KindReadonlyKeyword {
        if targetReadonly == false {
          return false
        }
        value = value.Type()
      }
      if value.Kind != shimast.KindTupleType {
        return false
      }
      elements := value.AsTupleTypeNode().Elements.Nodes
      patterns := target.AsTupleTypeNode().Elements.Nodes
      restIndex := -1
      for i, pattern := range patterns {
        _, _, rest := llmEvaluation_tupleElement(pattern)
        if rest {
          if restIndex >= 0 {
            return false
          }
          restIndex = i
        }
      }
      if restIndex >= 0 {
        if len(elements) < len(patterns)-1 {
          return false
        }
        fixed := func(source *shimast.Node, pattern *shimast.Node) bool {
          source, optional, rest := llmEvaluation_tupleElement(source)
          pattern, patternOptional, _ := llmEvaluation_tupleElement(pattern)
          return rest == false && (optional == false || patternOptional) && match(source, pattern)
        }
        for i := 0; i < restIndex; i++ {
          if fixed(elements[i], patterns[i]) == false {
            return false
          }
        }
        suffix := len(patterns) - restIndex - 1
        for i := 0; i < suffix; i++ {
          if fixed(elements[len(elements)-suffix+i], patterns[restIndex+1+i]) == false {
            return false
          }
        }
        factory := shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
        remainder := factory.NewTupleTypeNode(factory.NewNodeList(elements[restIndex : len(elements)-suffix]))
        pattern, _, _ := llmEvaluation_tupleElement(patterns[restIndex])
        return match(remainder, pattern)
      }
      if len(elements) != len(patterns) {
        return false
      }
      for i, element := range elements {
        source, sourceOptional, sourceRest := llmEvaluation_tupleElement(element)
        pattern, patternOptional, patternRest := llmEvaluation_tupleElement(patterns[i])
        if (sourceOptional && patternOptional == false) || sourceRest != patternRest || match(source, pattern) == false {
          return false
        }
      }
      return true
    }
    if target.Kind == shimast.KindTypeLiteral {
      for _, expected := range target.AsTypeLiteralNode().Members.Nodes {
        if expected.Kind != shimast.KindPropertySignature || expected.Name() == nil || expected.Type() == nil {
          return false
        }
        if expected.AsPropertySignatureDeclaration().PostfixToken != nil {
          return false
        }
        found := false
        if value.Kind == shimast.KindTypeLiteral {
          for _, actual := range value.AsTypeLiteralNode().Members.Nodes {
            if actual.Kind != shimast.KindPropertySignature || actual.Name() == nil || actual.Type() == nil || actual.Name().Text() != expected.Name().Text() {
              continue
            }
            if actual.AsPropertySignatureDeclaration().PostfixToken != nil {
              return false
            }
            if match(actual.Type(), expected.Type()) == false {
              return false
            }
            found = true
            break
          }
        } else {
          object := checker.GetTypeFromTypeNode(value)
          if object == nil {
            return false
          }
          property := checker.GetPropertyOfType(object, expected.Name().Text())
          if property == nil {
            return false
          }
          for _, actual := range property.Declarations {
            if actual == nil || actual.Kind != shimast.KindPropertySignature || actual.Type() == nil || actual.AsPropertySignatureDeclaration().PostfixToken != nil {
              continue
            }
            nested := llmEvaluation_indexedParentBindings(checker, value, actual.Parent, inherited, map[*shimast.Symbol]bool{})
            if nested == nil {
              continue
            }
            if match(llmEvaluation_boundTypeNode(checker, actual.Type(), nested), expected.Type()) {
              found = true
              break
            }
          }
        }
        if found == false {
          return false
        }
      }
      return true
    }
    if target.Kind != shimast.KindTypeReference {
      assignable, known := llmEvaluation_resolvedAssignable(checker, value, target, inherited)
      return known && assignable
    }
    reference := target.AsTypeReferenceNode()
    if reference.TypeArguments == nil || len(reference.TypeArguments.Nodes) != 1 {
      return false
    }
    targetSymbol := checker.GetSymbolAtLocation(reference.TypeName)
    if llmEvaluation_builtinArray(targetSymbol) {
      element, readonly, ok := llmEvaluation_inferArrayElement(checker, value)
      if ok && (readonly == false || targetSymbol.Name == "ReadonlyArray") {
        return match(element, reference.TypeArguments.Nodes[0])
      }
      return false
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

func llmEvaluation_tupleElement(node *shimast.Node) (*shimast.Node, bool, bool) {
  switch node.Kind {
  case shimast.KindOptionalType:
    return node.Type(), true, false
  case shimast.KindRestType:
    return node.Type(), false, true
  case shimast.KindNamedTupleMember:
    member := node.AsNamedTupleMember()
    return member.Type, member.QuestionToken != nil, member.DotDotDotToken != nil
  }
  return node, false, false
}

// Extract the written element of an array or tuple while retaining whether
// TypeScript would allow it to satisfy a mutable array inference pattern.
func llmEvaluation_inferArrayElement(checker *shimchecker.Checker, value *shimast.Node) (*shimast.Node, bool, bool) {
  if value.Kind == shimast.KindTypeOperator && value.AsTypeOperatorNode().Operator == shimast.KindReadonlyKeyword {
    element, _, ok := llmEvaluation_inferArrayElement(checker, value.Type())
    return element, true, ok
  }
  switch value.Kind {
  case shimast.KindArrayType:
    return value.AsArrayTypeNode().ElementType, false, true
  case shimast.KindTupleType:
    elements := value.AsTupleTypeNode().Elements.Nodes
    if len(elements) == 0 {
      return nil, false, false
    }
    if len(elements) == 1 {
      return elements[0], false, true
    }
    factory := shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
    return factory.NewUnionTypeNode(factory.NewNodeList(elements)), false, true
  case shimast.KindTypeReference:
    reference := value.AsTypeReferenceNode()
    symbol := checker.GetSymbolAtLocation(reference.TypeName)
    if llmEvaluation_builtinArray(symbol) && reference.TypeArguments != nil && len(reference.TypeArguments.Nodes) == 1 {
      return reference.TypeArguments.Nodes[0], symbol.Name == "ReadonlyArray", true
    }
  }
  return nil, false, false
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

func llmEvaluation_declarationProbabilityMessage(declaration *shimast.Node) string {
  switch declaration.Kind {
  case shimast.KindTypeAliasDeclaration:
    return "LLM evaluation @probability on a type alias is not supported; put it on the decision property or enum member."
  case shimast.KindPropertySignature, shimast.KindPropertyDeclaration, shimast.KindGetAccessor, shimast.KindSetAccessor:
    return "LLM evaluation @probability on an indexed source property is not supported; put it on the decision property or enum member."
  case shimast.KindIndexSignature:
    return "LLM evaluation @probability on an indexed source index signature is not supported; put it on the decision property or enum member."
  case shimast.KindInterfaceDeclaration, shimast.KindClassDeclaration:
    return "LLM evaluation @probability on an object declaration is not supported; put it on the decision property or enum member."
  case shimast.KindEnumDeclaration:
    return "LLM evaluation @probability on an enum declaration is not supported; put it on the decision property or enum member."
  case shimast.KindVariableDeclaration:
    return "LLM evaluation @probability on a variable declaration is not supported; put it on the decision property or enum member."
  }
  return ""
}
