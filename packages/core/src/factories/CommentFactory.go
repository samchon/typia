package factories

import "strings"

type commentFactory struct{}

var CommentFactory commentFactory

func (commentFactory) Description(symbol CommentSymbol, includeTags ...bool) *string {
	if symbol == nil || len(symbol.Declarations()) == 0 {
		return nil
	}
	withTags := len(includeTags) > 0 && includeTags[0]
	content := make([]string, 0, 1+len(symbol.JSDocTags()))
	main := CommentFactory.Merge(symbol.Documentation())
	if main != "" {
		content = append(content, main)
		if withTags && len(symbol.JSDocTags()) != 0 {
			content = append(content, "")
		}
	}
	if withTags {
		for _, tag := range symbol.JSDocTags() {
			content = append(content, parseJSDocTag(tag))
		}
	}
	if len(content) == 0 {
		return nil
	}
	output := strings.Join(content, "\n")
	return &output
}

func (commentFactory) Merge(comments []SymbolDisplayPart) string {
	var builder strings.Builder
	for _, part := range comments {
		builder.WriteString(normalizeNewline(part.Text))
	}
	return builder.String()
}

func parseJSDocTag(tag JSDocTag) string {
	parts := []string{"@" + tag.Name}
	if tag.Parameter != "" {
		parts = append(parts, tag.Parameter)
	}
	if tag.Text != "" {
		parts = append(parts, normalizeNewline(tag.Text))
	}
	return strings.Join(parts, " ")
}
