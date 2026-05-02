package factories

import strings "strings"

import shimast "github.com/microsoft/typescript-go/shim/ast"

type templateFactoryNamespace struct{}

var TemplateFactory = templateFactoryNamespace{}

type TemplateFactory_IIterator struct {
  Value string
  Index int
}

var templateFactory_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (templateFactoryNamespace) Generate(expressions []*shimast.Expression) *shimast.Node {
  allString := true
  for _, exp := range expressions {
    if !shimast.IsStringLiteral(exp) {
      allString = false
      break
    }
  }
  if allString {
    values := make([]string, 0, len(expressions))
    for _, str := range expressions {
      values = append(values, str.Text())
    }
    return templateFactory_factory.NewStringLiteral(strings.Join(values, ""), shimast.TokenFlagsNone)
  }
  iterator := &TemplateFactory_IIterator{Value: "", Index: 0}
  templateFactory_gather(expressions, iterator)
  head := templateFactory_factory.NewTemplateHead(iterator.Value, iterator.Value, shimast.TokenFlagsNone)
  spans := []*shimast.Node{}
  for {
    elem := expressions[iterator.Index]
    iterator.Index++
    templateFactory_gather(expressions, iterator)
    broken := iterator.Index == len(expressions)
    var literal *shimast.TemplateMiddleOrTail
    if broken {
      literal = templateFactory_factory.NewTemplateTail(iterator.Value, iterator.Value, shimast.TokenFlagsNone)
    } else {
      literal = templateFactory_factory.NewTemplateMiddle(iterator.Value, iterator.Value, shimast.TokenFlagsNone)
    }
    spans = append(spans, templateFactory_factory.NewTemplateSpan(elem, literal))
    if broken {
      break
    }
  }
  return templateFactory_factory.NewTemplateExpression(
    head,
    templateFactory_factory.NewNodeList(spans),
  )
}

func templateFactory_gather(expressions []*shimast.Expression, iterator *TemplateFactory_IIterator) {
  found := -1
  for i := iterator.Index; i < len(expressions); i++ {
    if !shimast.IsStringLiteral(expressions[i]) {
      found = i
      break
    }
  }
  last := len(expressions)
  if found != -1 {
    last = found
  }
  values := make([]string, 0, last-iterator.Index)
  for _, elem := range expressions[iterator.Index:last] {
    values = append(values, elem.Text())
  }
  iterator.Value = strings.Join(values, "")
  iterator.Index = last
}
