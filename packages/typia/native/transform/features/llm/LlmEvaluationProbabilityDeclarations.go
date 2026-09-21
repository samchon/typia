package llm

import (
  "fmt"
  "strings"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativellmprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers/llm"
)

// Primitive aliases lose their declaration identity when TypeScript resolves
// them (boolean aliases become the same boolean type). Consequently, no walk
// of the resolved evaluation type can reliably distinguish a used annotation
// from an unused one. Validate tag placement syntactically across a program
// that uses llm.evaluation: only properties and enum members can carry it.
func llmEvaluation_declarationProbabilityErrors(files []*shimast.SourceFile) []nativellmprogrammers.LlmEvaluationProgrammer_IError {
  errors := []nativellmprogrammers.LlmEvaluationProgrammer_IError{}
  for _, file := range files {
    if file == nil || !strings.Contains(file.Text(), "@probability") {
      continue
    }
    var walk func(*shimast.Node)
    walk = func(node *shimast.Node) {
      if node == nil {
        return
      }
      allowed := node.Kind == shimast.KindPropertySignature ||
        node.Kind == shimast.KindPropertyDeclaration ||
        node.Kind == shimast.KindGetAccessor ||
        node.Kind == shimast.KindSetAccessor ||
        node.Kind == shimast.KindEnumMember
      if !allowed {
        for _, doc := range node.JSDoc(nil) {
          parsed := doc.AsJSDoc()
          if parsed == nil || parsed.Tags == nil {
            continue
          }
          for _, tag := range parsed.Tags.Nodes {
            if tag != nil && tag.TagName() != nil && tag.TagName().Text() == "probability" {
              name := "<anonymous>"
              if node.Name() != nil {
                name = node.Name().Text()
              }
              kind := "declaration"
              switch node.Kind {
              case shimast.KindTypeAliasDeclaration:
                kind = "type alias"
              case shimast.KindInterfaceDeclaration:
                kind = "interface"
              case shimast.KindClassDeclaration, shimast.KindClassExpression:
                kind = "class"
              case shimast.KindEnumDeclaration:
                kind = "enum"
              }
              errors = append(errors, nativellmprogrammers.LlmEvaluationProgrammer_IError{
                Accessor: "$input",
                Message:  fmt.Sprintf("LLM evaluation @probability on %s %s in %s is unsupported; put it on a decision property or enum member.", kind, name, file.FileName()),
              })
              break
            }
          }
        }
      }
      node.ForEachChild(func(child *shimast.Node) bool {
        walk(child)
        return false
      })
    }
    walk(file.AsNode())
  }
  return errors
}
