package iterate

import (
	shimast "github.com/microsoft/typescript-go/shim/ast"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
)

type Check_objectProps struct {
	Config  Check_object_IConfig
	Context nativecontext.ITypiaContext
	Input   *shimast.Expression
	Entries []nativehelpers.IExpressionEntry
}

type Check_object_IConfig struct {
	Equals      bool
	Assert      bool
	Undefined   bool
	Halt        func(exp *shimast.Expression) *shimast.Node
	Reduce      func(a *shimast.Expression, b *shimast.Expression) *shimast.Node
	Positive    *shimast.Expression
	Superfluous func(value *shimast.Expression, description *shimast.Expression) *shimast.Node
	Entries     *shimast.Expression
}

func Check_object(props Check_objectProps) *shimast.Node {
	regular := []nativehelpers.IExpressionEntry{}
	dynamic := []nativehelpers.IExpressionEntry{}
	for _, entry := range props.Entries {
		if entry.Key.IsSoleLiteral() {
			regular = append(regular, entry)
		} else {
			dynamic = append(dynamic, entry)
		}
	}
	flags := make([]*shimast.Node, 0, len(regular)+1)
	for _, entry := range regular {
		flags = append(flags, entry.Expression)
	}

	if props.Config.Equals == false && len(dynamic) == 0 {
		if len(regular) == 0 {
			return props.Config.Positive
		}
		return check_object_reduce(check_object_reduceProps{
			Config:      props.Config,
			Expressions: flags,
		})
	}

	flags = append(flags, Check_dynamic_properties(Check_dynamic_propertiesProps{
		Config:  props.Config,
		Context: props.Context,
		Input:   props.Input,
		Regular: regular,
		Dynamic: dynamic,
	}))
	return check_object_reduce(check_object_reduceProps{
		Config:      props.Config,
		Expressions: flags,
	})
}

type check_object_reduceProps struct {
	Config      Check_object_IConfig
	Expressions []*shimast.Node
}

func check_object_reduce(props check_object_reduceProps) *shimast.Node {
	if len(props.Expressions) == 0 {
		return props.Config.Positive
	}
	if props.Config.Assert {
		output := props.Expressions[0]
		for _, next := range props.Expressions[1:] {
			output = props.Config.Reduce(output, next)
		}
		return output
	}
	return Check_everything(
		check_object_factory.NewArrayLiteralExpression(
			check_object_factory.NewNodeList(props.Expressions),
			false,
		),
	)
}

var check_object_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
