package iterate

import (
	"fmt"

	shimast "github.com/microsoft/typescript-go/shim/ast"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
	nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
	nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type Check_numberProps struct {
	Numeric bool
	Context nativecontext.ITypiaContext
	Atomic  *nativemetadata.MetadataAtomic
	Input   *shimast.Expression
}

func Check_number(props Check_numberProps) nativehelpers.ICheckEntry {
	base := check_number_factory.NewBinaryExpression(
		nil,
		check_number_factory.NewStringLiteral("number", shimast.TokenFlagsNone),
		nil,
		check_number_factory.NewToken(shimast.KindEqualsEqualsEqualsToken),
		check_number_factory.NewTypeOfExpression(props.Input),
	)
	var addition *shimast.Node
	if props.Numeric {
		if nativehelpers.OptionPredicator.Finite(props.Context.Options) {
			addition = check_number_factory.NewCallExpression(
				check_number_factory.NewIdentifier("Number.isFinite"),
				nil,
				nil,
				check_number_factory.NewNodeList([]*shimast.Node{props.Input}),
				shimast.NodeFlagsNone,
			)
		} else if nativehelpers.OptionPredicator.Numeric(props.Context.Options) {
			addition = check_number_factory.NewPrefixUnaryExpression(
				shimast.KindExclamationToken,
				check_number_factory.NewCallExpression(
					check_number_factory.NewIdentifier("Number.isNaN"),
					nil,
					nil,
					check_number_factory.NewNodeList([]*shimast.Node{props.Input}),
					shimast.NodeFlagsNone,
				),
			)
		}
	}
	conditions := check_numeric_type_tags(check_numeric_type_tagsProps{
		Context:  props.Context,
		Atomic:   props.Atomic,
		Input:    props.Input,
		Addition: addition,
	})
	expression := base
	if addition != nil && len(conditions) == 0 {
		expression = check_number_factory.NewBinaryExpression(
			nil,
			base,
			nil,
			check_number_factory.NewToken(shimast.KindAmpersandAmpersandToken),
			addition,
		)
	}
	return nativehelpers.ICheckEntry{
		Expected:   props.Atomic.GetName(),
		Expression: expression,
		Conditions: conditions,
	}
}

type check_numeric_type_tagsProps struct {
	Context  nativecontext.ITypiaContext
	Atomic   *nativemetadata.MetadataAtomic
	Addition *shimast.Expression
	Input    *shimast.Expression
}

func check_numeric_type_tags(props check_numeric_type_tagsProps) [][]nativehelpers.ICheckEntry_ICondition {
	output := [][]nativehelpers.ICheckEntry_ICondition{}
	for _, row := range props.Atomic.Tags {
		tags := check_number_filter_validate(row)
		if len(tags) == 0 {
			continue
		}
		conditions := []nativehelpers.ICheckEntry_ICondition{}
		if props.Addition != nil && !check_numeric_type_tags_covers_addition(tags) {
			conditions = append(conditions, nativehelpers.ICheckEntry_ICondition{
				Expected:   "number",
				Expression: props.Addition,
			})
		}
		for _, tag := range tags {
			conditions = append(conditions, nativehelpers.ICheckEntry_ICondition{
				Expected:   fmt.Sprintf("number & %s", tag.Name),
				Expression: check_number_transpile(props.Context, tag.Validate)(props.Input),
			})
		}
		output = append(output, conditions)
	}
	return output
}

func check_numeric_type_tags_covers_addition(row []nativemetadata.IMetadataTypeTag) bool {
	if check_number_some(row, func(tag nativemetadata.IMetadataTypeTag) bool {
		return tag.Kind == "type" &&
			(tag.Value == "int32" ||
				tag.Value == "uint32" ||
				tag.Value == "int64" ||
				tag.Value == "uint64" ||
				tag.Value == "float")
	}) {
		return true
	}
	if check_number_some(row, func(tag nativemetadata.IMetadataTypeTag) bool {
		return tag.Kind == "multipleOf" && check_number_is_number(tag.Value)
	}) {
		return true
	}
	return check_number_some(row, func(tag nativemetadata.IMetadataTypeTag) bool {
		return (tag.Kind == "minimum" || tag.Kind == "exclusiveMinimum") && check_number_is_number(tag.Value)
	}) && check_number_some(row, func(tag nativemetadata.IMetadataTypeTag) bool {
		return (tag.Kind == "maximum" || tag.Kind == "exclusiveMaximum") && check_number_is_number(tag.Value)
	})
}

func check_number_filter_validate(row []nativemetadata.IMetadataTypeTag) []nativemetadata.IMetadataTypeTag {
	tags := []nativemetadata.IMetadataTypeTag{}
	for _, tag := range row {
		if tag.Validate != "" {
			tags = append(tags, tag)
		}
	}
	return tags
}

func check_number_some(row []nativemetadata.IMetadataTypeTag, pred func(tag nativemetadata.IMetadataTypeTag) bool) bool {
	for _, tag := range row {
		if pred(tag) {
			return true
		}
	}
	return false
}

func check_number_is_number(value any) bool {
	switch value.(type) {
	case int, int8, int16, int32, int64, uint, uint8, uint16, uint32, uint64, float32, float64:
		return true
	default:
		return false
	}
}

func check_number_transpile(context nativecontext.ITypiaContext, script string) func(input *shimast.Expression) *shimast.Node {
	var importer nativefactories.ExpressionFactory_Importer
	if v, ok := context.Importer.(nativefactories.ExpressionFactory_Importer); ok {
		importer = v
	}
	return nativefactories.ExpressionFactory.Transpile(nativefactories.ExpressionFactory_TranspileProps{
		Transformer: context.Transformer,
		Importer:    importer,
		Script:      script,
	})
}

var check_number_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
