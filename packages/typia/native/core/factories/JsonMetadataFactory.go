package factories

import (
	nativechecker "github.com/microsoft/typescript-go/shim/checker"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type jsonMetadataFactoryNamespace struct{}

var JsonMetadataFactory = jsonMetadataFactoryNamespace{}

type JsonMetadataFactory_IProps struct {
	Method      string
	Checker     *nativechecker.Checker
	Transformer any
	Type        *nativechecker.Type
	Validate    MetadataFactory_Validator
}

type JsonMetadataFactory_IOutput struct {
	Collection *schemametadata.MetadataCollection
	Metadata   *schemametadata.MetadataSchema
}

func (jsonMetadataFactoryNamespace) Analyze(props JsonMetadataFactory_IProps) JsonMetadataFactory_IOutput {
	collection := schemametadata.NewMetadataCollection()
	validate := func(next struct {
		Metadata *schemametadata.MetadataSchema
		Explore  MetadataFactory_IExplore
		Top      *schemametadata.MetadataSchema
	}) []string {
		errors := JsonMetadataFactory.Validate(struct {
			Metadata *schemametadata.MetadataSchema
			Explore  MetadataFactory_IExplore
		}{
			Metadata: next.Metadata,
			Explore:  next.Explore,
		})
		if props.Validate != nil {
			errors = append(errors, props.Validate(next)...)
		}
		return errors
	}
	result := MetadataFactory.Analyze(MetadataFactory_IProps{
		Checker:     props.Checker,
		Transformer: props.Transformer,
		Options: MetadataFactory_IOptions{
			Absorb:   true,
			Escape:   true,
			Constant: true,
			Validate: validate,
		},
		Components: collection,
		Type:       props.Type,
	})
	if result.Success == false {
		panic(nativecontext.TransformerError_from(struct {
			Code   string
			Errors []nativecontext.TransformerError_MetadataFactory_IError
		}{
			Code:   props.Method,
			Errors: jsonMetadataFactory_errors(result.Errors),
		}))
	}
	return JsonMetadataFactory_IOutput{
		Collection: collection,
		Metadata:   result.Data,
	}
}

func (jsonMetadataFactoryNamespace) Validate(props struct {
	Metadata *schemametadata.MetadataSchema
	Explore  MetadataFactory_IExplore
}) []string {
	output := []string{}
	for _, atomic := range props.Metadata.Atomics {
		if atomic.Type == "bigint" {
			output = append(output, "JSON does not support bigint type.")
			break
		}
	}
	for _, constant := range props.Metadata.Constants {
		if constant.Type == "bigint" {
			output = append(output, "JSON does not support bigint type.")
			break
		}
	}
	tupleInvalid := false
	for _, tuple := range props.Metadata.Tuples {
		for _, element := range tuple.Type.Elements {
			if element.IsRequired() == false {
				tupleInvalid = true
				break
			}
		}
		if tupleInvalid {
			break
		}
	}
	arrayInvalid := false
	for _, array := range props.Metadata.Arrays {
		if array.Type.Value.IsRequired() == false {
			arrayInvalid = true
			break
		}
	}
	if tupleInvalid || arrayInvalid {
		output = append(output, "JSON does not support undefined type in array.")
	}
	if len(props.Metadata.Maps) != 0 {
		output = append(output, "JSON does not support Map type.")
	}
	if len(props.Metadata.Sets) != 0 {
		output = append(output, "JSON does not support Set type.")
	}
	for _, native := range props.Metadata.Natives {
		if jsonMetadataFactory_atomic_predicator_native(native.Name) == false && native.Name != "Date" {
			output = append(output, "JSON does not support "+native.Name+" type.")
		}
	}
	return output
}

func jsonMetadataFactory_atomic_predicator_native(name string) bool {
	_, ok := jsonMetadataFactory_atomic_like[jsonMetadataFactory_lower(name)]
	return ok
}

var jsonMetadataFactory_atomic_like = map[string]struct{}{
	"boolean": {},
	"bigint":  {},
	"number":  {},
	"string":  {},
}

func jsonMetadataFactory_lower(str string) string {
	output := []byte(str)
	for i, ch := range output {
		if 'A' <= ch && ch <= 'Z' {
			output[i] = ch + ('a' - 'A')
		}
	}
	return string(output)
}

func jsonMetadataFactory_errors(errors []MetadataFactory_IError) []nativecontext.TransformerError_MetadataFactory_IError {
	output := make([]nativecontext.TransformerError_MetadataFactory_IError, 0, len(errors))
	for _, err := range errors {
		output = append(output, nativecontext.TransformerError_MetadataFactory_IError{
			Name: err.Name,
			Explore: nativecontext.TransformerError_MetadataFactory_IExplore{
				Object:    err.Explore.Object,
				Property:  err.Explore.Property,
				Parameter: err.Explore.Parameter,
				Output:    err.Explore.Output,
			},
			Messages: err.Messages,
		})
	}
	return output
}
