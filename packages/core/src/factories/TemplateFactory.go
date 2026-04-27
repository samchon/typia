package factories

import "strings"

type templateFactory struct{}

var TemplateFactory templateFactory

func (templateFactory) Generate(expressions []Expression) Expression {
	allString := true
	for _, exp := range expressions {
		if exp.Kind != "stringLiteral" {
			allString = false
			break
		}
	}
	if allString {
		var builder strings.Builder
		for _, exp := range expressions {
			builder.WriteString(exp.Text)
		}
		return StringLiteral(builder.String())
	}
	iterator := templateIterator{}
	head := gatherTemplate(expressions, &iterator)
	spans := make([]TemplateSpan, 0)
	for iterator.Index < len(expressions) {
		elem := expressions[iterator.Index]
		iterator.Index++
		text := gatherTemplate(expressions, &iterator)
		spans = append(spans, TemplateSpan{Expression: elem, Literal: text, Tail: iterator.Index == len(expressions)})
	}
	return Node("templateExpression", Field("head", head), Field("spans", spans))
}

func gatherTemplate(expressions []Expression, iterator *templateIterator) string {
	var builder strings.Builder
	for iterator.Index < len(expressions) && expressions[iterator.Index].Kind == "stringLiteral" {
		builder.WriteString(expressions[iterator.Index].Text)
		iterator.Index++
	}
	return builder.String()
}
