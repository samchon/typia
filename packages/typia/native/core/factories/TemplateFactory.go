package factories

import (
  strings "strings"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
)

type templateFactoryNamespace struct{}

var TemplateFactory = templateFactoryNamespace{}

// TemplateFactory_IIterator is the running state of a template build: the literal
// text gathered so far and the index of the next expression.
//
// @evidence contracts/common.md#principled-implementation A template is built by alternating literal text and expressions, so the builder needs the text gathered so far and the position of the next expression, which one mutable record holds across the gather calls.
// @evidence contracts/common.md#clear-and-simple-design A two-field record shared by the generate and gather functions.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states the two fields.
type TemplateFactory_IIterator struct {
  Value string
  Index int
}

var templateFactory_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (templateFactoryNamespace) Generate(expressions []*shimast.Expression, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(templateFactory_factory, emit...)
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
    return f.NewStringLiteral(strings.Join(values, ""), shimast.TokenFlagsNone)
  }
  iterator := &TemplateFactory_IIterator{Value: "", Index: 0}
  templateFactory_gather(expressions, iterator)
  head := f.NewTemplateHead(iterator.Value, iterator.Value, shimast.TokenFlagsNone)
  spans := []*shimast.Node{}
  for {
    elem := expressions[iterator.Index]
    iterator.Index++
    templateFactory_gather(expressions, iterator)
    broken := iterator.Index == len(expressions)
    var literal *shimast.TemplateMiddleOrTail
    if broken {
      literal = f.NewTemplateTail(iterator.Value, iterator.Value, shimast.TokenFlagsNone)
    } else {
      literal = f.NewTemplateMiddle(iterator.Value, iterator.Value, shimast.TokenFlagsNone)
    }
    spans = append(spans, f.NewTemplateSpan(elem, literal))
    if broken {
      break
    }
  }
  return f.NewTemplateExpression(
    head,
    f.NewNodeList(spans),
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
