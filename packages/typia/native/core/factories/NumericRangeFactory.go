package factories

import shimast "github.com/microsoft/typescript-go/shim/ast"

type numericRangeFactoryNamespace struct{}

var NumericRangeFactory = numericRangeFactoryNamespace{}

var numericRangeFactory_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (numericRangeFactoryNamespace) Number(t string, input *shimast.Expression) *shimast.Node {
	switch t {
	case "int32":
		return numericRangeFactory_number_int32(input)
	case "uint32":
		return numericRangeFactory_number_uint32(input)
	case "int64":
		return numericRangeFactory_number_int64(input)
	case "uint64":
		return numericRangeFactory_number_uint64(input)
	case "float":
		return numericRangeFactory_between("-1.175494351e38", "3.4028235e38")(input)
	default:
		return numericRangeFactory_factory.NewKeywordExpression(shimast.KindTrueKeyword)
	}
}

func (numericRangeFactoryNamespace) Bigint(t string, input *shimast.Expression) *shimast.Node {
	if t == "uint64" {
		return numericRangeFactory_factory.NewBinaryExpression(
			nil,
			numericRangeFactory_factory.NewCallExpression(
				numericRangeFactory_factory.NewIdentifier("BigInt"),
				nil,
				nil,
				numericRangeFactory_factory.NewNodeList([]*shimast.Node{ExpressionFactory.Number(0)}),
				shimast.NodeFlagsNone,
			),
			nil,
			numericRangeFactory_factory.NewToken(shimast.KindLessThanEqualsToken),
			input,
		)
	}
	return numericRangeFactory_factory.NewKeywordExpression(shimast.KindTrueKeyword)
}

func numericRangeFactory_number_int32(input *shimast.Expression) *shimast.Node {
	return numericRangeFactory_logical_and(
		numericRangeFactory_integer(input),
		numericRangeFactory_between("-2147483648", "2147483647")(input),
	)
}

func numericRangeFactory_number_uint32(input *shimast.Expression) *shimast.Node {
	return numericRangeFactory_logical_and(
		numericRangeFactory_integer(input),
		numericRangeFactory_between("0", "4294967295")(input),
	)
}

func numericRangeFactory_number_int64(input *shimast.Expression) *shimast.Node {
	return numericRangeFactory_logical_and(
		numericRangeFactory_integer(input),
		numericRangeFactory_between("-9223372036854775808", "9223372036854775807")(input),
	)
}

func numericRangeFactory_number_uint64(input *shimast.Expression) *shimast.Node {
	return numericRangeFactory_logical_and(
		numericRangeFactory_integer(input),
		numericRangeFactory_between("0", "18446744073709551615")(input),
	)
}

func numericRangeFactory_integer(input *shimast.Expression) *shimast.Node {
	return numericRangeFactory_factory.NewBinaryExpression(
		nil,
		numericRangeFactory_factory.NewCallExpression(
			numericRangeFactory_factory.NewIdentifier("Math.floor"),
			nil,
			nil,
			numericRangeFactory_factory.NewNodeList([]*shimast.Node{input}),
			shimast.NodeFlagsNone,
		),
		nil,
		numericRangeFactory_factory.NewToken(shimast.KindEqualsEqualsEqualsToken),
		input,
	)
}

func numericRangeFactory_between(x string, y string) func(input *shimast.Expression) *shimast.Node {
	return func(input *shimast.Expression) *shimast.Node {
		return numericRangeFactory_logical_and(
			numericRangeFactory_factory.NewBinaryExpression(
				nil,
				numericRangeFactory_factory.NewIdentifier(x),
				nil,
				numericRangeFactory_factory.NewToken(shimast.KindLessThanEqualsToken),
				input,
			),
			numericRangeFactory_factory.NewBinaryExpression(
				nil,
				input,
				nil,
				numericRangeFactory_factory.NewToken(shimast.KindLessThanEqualsToken),
				numericRangeFactory_factory.NewIdentifier(y),
			),
		)
	}
}

func numericRangeFactory_logical_and(x *shimast.Expression, y *shimast.Expression) *shimast.Node {
	return numericRangeFactory_factory.NewBinaryExpression(
		nil,
		x,
		nil,
		numericRangeFactory_factory.NewToken(shimast.KindAmpersandAmpersandToken),
		y,
	)
}
