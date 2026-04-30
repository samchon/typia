package iterate

import (
	"fmt"

	shimast "github.com/microsoft/typescript-go/shim/ast"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
	nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type Check_dynamic_keyProps struct {
	Context  nativecontext.ITypiaContext
	Metadata *nativemetadata.MetadataSchema
	Input    *shimast.Expression
}

func Check_dynamic_key(props Check_dynamic_keyProps) *shimast.Node {
	if check_dynamic_key_has_pure_string(props.Metadata) {
		return check_dynamic_key_factory.NewKeywordExpression(shimast.KindTrueKeyword)
	}

	conditions := []*shimast.Node{}
	if props.Metadata.Nullable {
		conditions = append(conditions, check_dynamic_key_strict_equal(
			check_dynamic_key_factory.NewStringLiteral("null", shimast.TokenFlagsNone),
			props.Input,
		))
	}
	if !props.Metadata.IsRequired() {
		conditions = append(conditions, check_dynamic_key_strict_equal(
			check_dynamic_key_factory.NewStringLiteral("undefined", shimast.TokenFlagsNone),
			props.Input,
		))
	}

	for _, atom := range props.Metadata.Atomics {
		switch atom.Type {
		case "boolean":
			conditions = append(conditions, check_dynamic_key_factory.NewBinaryExpression(
				nil,
				check_dynamic_key_strict_equal(
					check_dynamic_key_factory.NewStringLiteral("false", shimast.TokenFlagsNone),
					props.Input,
				),
				nil,
				check_dynamic_key_factory.NewToken(shimast.KindBarBarToken),
				check_dynamic_key_strict_equal(
					check_dynamic_key_factory.NewStringLiteral("true", shimast.TokenFlagsNone),
					props.Input,
				),
			))
		case "bigint":
			bigintInput := check_dynamic_key_factory.NewCallExpression(
				check_dynamic_key_factory.NewIdentifier("BigInt"),
				nil,
				nil,
				check_dynamic_key_factory.NewNodeList([]*shimast.Node{props.Input}),
				shimast.NodeFlagsNone,
			)
			conditions = append(conditions, check_dynamic_key_factory.NewBinaryExpression(
				nil,
				check_dynamic_key_factory.NewCallExpression(
					check_dynamic_key_internal(props.Context, "isBigintString"),
					nil,
					nil,
					check_dynamic_key_factory.NewNodeList([]*shimast.Node{props.Input}),
					shimast.NodeFlagsNone,
				),
				nil,
				check_dynamic_key_factory.NewToken(shimast.KindAmpersandAmpersandToken),
				check_dynamic_key_atomist(Check_bigint(Check_bigintProps{
					Context: props.Context,
					Atomic:  atom,
					Input:   bigintInput,
				})),
			))
		case "number":
			numberInput := check_dynamic_key_factory.NewCallExpression(
				check_dynamic_key_factory.NewIdentifier("Number"),
				nil,
				nil,
				check_dynamic_key_factory.NewNodeList([]*shimast.Node{props.Input}),
				shimast.NodeFlagsNone,
			)
			conditions = append(conditions, check_dynamic_key_atomist(Check_number(Check_numberProps{
				Context: props.Context,
				Numeric: true,
				Atomic:  atom,
				Input:   numberInput,
			})))
		default:
			conditions = append(conditions, check_dynamic_key_atomist(Check_string(Check_stringProps{
				Context: props.Context,
				Atomic:  atom,
				Input:   props.Input,
			})))
		}
	}

	for _, constant := range props.Metadata.Constants {
		for _, value := range constant.Values {
			conditions = append(conditions, check_dynamic_key_strict_equal(
				check_dynamic_key_factory.NewStringLiteral(fmt.Sprint(value.Value), shimast.TokenFlagsNone),
				props.Input,
			))
		}
	}

	if len(props.Metadata.Templates) != 0 {
		conditions = append(conditions, check_dynamic_key_atomist(Check_template(Check_templateProps{
			Templates: props.Metadata.Templates,
			Input:     props.Input,
		})))
	}

	for _, native := range props.Metadata.Natives {
		switch native.Name {
		case "Boolean":
			conditions = append(conditions, check_dynamic_key_factory.NewBinaryExpression(
				nil,
				check_dynamic_key_strict_equal(
					check_dynamic_key_factory.NewStringLiteral("false", shimast.TokenFlagsNone),
					props.Input,
				),
				nil,
				check_dynamic_key_factory.NewToken(shimast.KindBarBarToken),
				check_dynamic_key_strict_equal(
					check_dynamic_key_factory.NewStringLiteral("true", shimast.TokenFlagsNone),
					props.Input,
				),
			))
		case "BigInt":
			conditions = append(conditions, check_dynamic_key_factory.NewCallExpression(
				check_dynamic_key_internal(props.Context, "isBigintString"),
				nil,
				nil,
				check_dynamic_key_factory.NewNodeList([]*shimast.Node{props.Input}),
				shimast.NodeFlagsNone,
			))
		case "Number":
			conditions = append(conditions, check_dynamic_key_strict_equal(
				check_dynamic_key_factory.NewKeywordExpression(shimast.KindFalseKeyword),
				check_dynamic_key_factory.NewCallExpression(
					check_dynamic_key_factory.NewIdentifier("Number.isNaN"),
					nil,
					nil,
					check_dynamic_key_factory.NewNodeList([]*shimast.Node{
						check_dynamic_key_factory.NewCallExpression(
							check_dynamic_key_factory.NewIdentifier("Number"),
							nil,
							nil,
							check_dynamic_key_factory.NewNodeList([]*shimast.Node{props.Input}),
							shimast.NodeFlagsNone,
						),
					}),
					shimast.NodeFlagsNone,
				),
			))
		}
	}

	if len(conditions) == 0 {
		return check_dynamic_key_factory.NewKeywordExpression(shimast.KindTrueKeyword)
	}
	return check_dynamic_key_reduce(conditions, shimast.KindBarBarToken)
}

func check_dynamic_key_has_pure_string(metadata *nativemetadata.MetadataSchema) bool {
	if len(metadata.Atomics) != 0 {
		for _, atomic := range metadata.Atomics {
			if atomic.Type == "string" && len(check_dynamic_key_fully_validated_tag_rows(atomic.Tags)) == 0 {
				return true
			}
		}
	}
	if len(metadata.Natives) != 0 {
		for _, native := range metadata.Natives {
			if native.Name == "String" {
				return true
			}
		}
	}
	return false
}

func check_dynamic_key_fully_validated_tag_rows(rows [][]nativemetadata.IMetadataTypeTag) [][]nativemetadata.IMetadataTypeTag {
	output := [][]nativemetadata.IMetadataTypeTag{}
	for _, row := range rows {
		passed := true
		for _, tag := range row {
			if tag.Validate == "" {
				passed = false
				break
			}
		}
		if passed {
			output = append(output, row)
		}
	}
	return output
}

func check_dynamic_key_atomist(entry nativehelpers.ICheckEntry) *shimast.Node {
	expressions := []*shimast.Node{}
	if entry.Expression != nil {
		expressions = append(expressions, entry.Expression)
	}
	if len(entry.Conditions) != 0 {
		rows := make([]*shimast.Node, 0, len(entry.Conditions))
		for _, set := range entry.Conditions {
			pieces := make([]*shimast.Node, 0, len(set))
			for _, condition := range set {
				pieces = append(pieces, condition.Expression)
			}
			rows = append(rows, check_dynamic_key_reduce(pieces, shimast.KindAmpersandAmpersandToken))
		}
		expressions = append(expressions, check_dynamic_key_reduce(rows, shimast.KindBarBarToken))
	}
	return check_dynamic_key_reduce(expressions, shimast.KindAmpersandAmpersandToken)
}

func check_dynamic_key_reduce(expressions []*shimast.Node, operator shimast.Kind) *shimast.Node {
	if len(expressions) == 0 {
		return check_dynamic_key_factory.NewKeywordExpression(shimast.KindTrueKeyword)
	}
	output := expressions[0]
	for _, next := range expressions[1:] {
		output = check_dynamic_key_factory.NewBinaryExpression(
			nil,
			output,
			nil,
			check_dynamic_key_factory.NewToken(operator),
			next,
		)
	}
	return output
}

func check_dynamic_key_strict_equal(left *shimast.Expression, right *shimast.Expression) *shimast.Node {
	return check_dynamic_key_factory.NewBinaryExpression(
		nil,
		left,
		nil,
		check_dynamic_key_factory.NewToken(shimast.KindEqualsEqualsEqualsToken),
		right,
	)
}

func check_dynamic_key_internal(context nativecontext.ITypiaContext, name string) *shimast.Node {
	if importer, ok := context.Importer.(interface{ Internal(string) *shimast.Node }); ok {
		return importer.Internal(name)
	}
	return check_dynamic_key_factory.NewIdentifier(name)
}

var check_dynamic_key_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
