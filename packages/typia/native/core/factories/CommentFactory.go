package factories

import (
  "strings"

  shimast "github.com/microsoft/typescript-go/shim/ast"
)

type commentFactoryNamespace struct{}

var CommentFactory = commentFactoryNamespace{}

// CommentFactory_SymbolDisplayPart is one piece of a documentation comment; Merge
// joins the text of the pieces and normalizes CRLF to LF.
//
// @evidence contracts/common.md#principled-implementation A comment is a sequence of display parts whose texts concatenate to the comment, which is the representation the checker's documentation API uses; the record keeps only the text because Merge needs nothing else.
// @evidence contracts/common.md#clear-and-simple-design One field; the factory method that consumes it is a stateless merge.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states what a part is and what Merge does with it.
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
