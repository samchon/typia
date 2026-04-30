package iterate

import (
	"strings"

	shimast "github.com/microsoft/typescript-go/shim/ast"
	nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
	nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type Check_templateProps struct {
	Templates []*nativemetadata.MetadataTemplate
	Input     *shimast.Expression
}

func Check_template(props Check_templateProps) nativehelpers.ICheckEntry {
	conditions := []*shimast.Node{
		check_template_factory.NewBinaryExpression(
			nil,
			check_template_factory.NewStringLiteral("string", shimast.TokenFlagsNone),
			nil,
			check_template_factory.NewToken(shimast.KindEqualsEqualsEqualsToken),
			check_template_factory.NewTypeOfExpression(props.Input),
		),
	}
	internal := make([]*shimast.Node, 0, len(props.Templates))
	for _, tpl := range props.Templates {
		internal = append(internal, check_template_factory.NewCallExpression(
			check_template_factory.NewIdentifier("RegExp(/"+template_to_pattern(struct {
				top      bool
				template []*nativemetadata.MetadataSchema
			}{
				top:      true,
				template: tpl.Row,
			})+"/).test"),
			nil,
			nil,
			check_template_factory.NewNodeList([]*shimast.Node{props.Input}),
			shimast.NodeFlagsNone,
		))
	}
	if len(internal) != 0 {
		conditions = append(conditions, check_template_reduce(internal, shimast.KindBarBarToken))
	}
	names := make([]string, 0, len(props.Templates))
	for _, tpl := range props.Templates {
		names = append(names, tpl.GetName())
	}
	return nativehelpers.ICheckEntry{
		Expression: check_template_reduce(conditions, shimast.KindAmpersandAmpersandToken),
		Conditions: nil,
		Expected:   strings.Join(names, " | "),
	}
}

func check_template_reduce(expressions []*shimast.Node, operator shimast.Kind) *shimast.Node {
	if len(expressions) == 0 {
		return check_template_factory.NewKeywordExpression(shimast.KindTrueKeyword)
	}
	output := expressions[0]
	for _, next := range expressions[1:] {
		output = check_template_factory.NewBinaryExpression(
			nil,
			output,
			nil,
			check_template_factory.NewToken(operator),
			next,
		)
	}
	return output
}

var check_template_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
