package factories

import (
  "strings"

  shimast "github.com/microsoft/typescript-go/shim/ast"
)

type commentFactoryNamespace struct{}

var CommentFactory = commentFactoryNamespace{}

type CommentFactory_SymbolDisplayPart struct {
  Text string
}

func (commentFactoryNamespace) Description(symbol *shimast.Symbol, includeTags ...bool) *string {
  return nil
}

func (commentFactoryNamespace) Merge(comments []CommentFactory_SymbolDisplayPart) string {
  builder := strings.Builder{}
  for _, part := range comments {
    builder.WriteString(strings.ReplaceAll(part.Text, "\r\n", "\n"))
  }
  return builder.String()
}
