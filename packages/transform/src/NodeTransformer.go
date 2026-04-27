package transform

import (
	"github.com/microsoft/typescript-go/shim/ast"
	"github.com/samchon/ttsc/packages/ttsc/driver"
)

type ITransformNodeProps struct {
	File *ast.SourceFile
	Text string
}

type ITransformNodeResult struct {
	Rewrites []driver.Rewrite
}

var NodeTransformer = nodeTransformerNamespace{}

type nodeTransformerNamespace struct{}

func (nodeTransformerNamespace) transform(props ITransformNodeProps) ITransformNodeResult {
	return CallExpressionTransformer.transform(ITransformCallExpressionProps{
		File: props.File,
		Text: props.Text,
	})
}
