package iterate

import (
	shimast "github.com/microsoft/typescript-go/shim/ast"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
	nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
	nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type Check_array_lengthProps struct {
	Context nativecontext.ITypiaContext
	Array   *nativemetadata.MetadataArray
	Input   *shimast.Expression
}

func Check_array_length(props Check_array_lengthProps) nativehelpers.ICheckEntry {
	conditions := check_array_type_tags(props)
	return nativehelpers.ICheckEntry{
		Expected:   props.Array.GetName(),
		Expression: nil,
		Conditions: conditions,
	}
}

func check_array_type_tags(props Check_array_lengthProps) [][]nativehelpers.ICheckEntry_ICondition {
	output := [][]nativehelpers.ICheckEntry_ICondition{}
	for _, row := range props.Array.Tags {
		tags := check_array_length_filter_validate(row)
		if len(tags) == 0 {
			continue
		}
		conditions := make([]nativehelpers.ICheckEntry_ICondition, 0, len(tags))
		for _, tag := range tags {
			conditions = append(conditions, nativehelpers.ICheckEntry_ICondition{
				Expected:   "Array<> & " + tag.Name,
				Expression: check_array_length_transpile(props.Context, tag.Validate)(props.Input),
			})
		}
		output = append(output, conditions)
	}
	return output
}

func check_array_length_filter_validate(row []nativemetadata.IMetadataTypeTag) []nativemetadata.IMetadataTypeTag {
	tags := []nativemetadata.IMetadataTypeTag{}
	for _, tag := range row {
		if tag.Validate != "" {
			tags = append(tags, tag)
		}
	}
	return tags
}

func check_array_length_transpile(context nativecontext.ITypiaContext, script string) func(input *shimast.Expression) *shimast.Node {
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
