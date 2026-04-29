package http

import (
	"fmt"

	shimast "github.com/microsoft/typescript-go/shim/ast"
	shimchecker "github.com/microsoft/typescript-go/shim/checker"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
	nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
	nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
	nativeinternal "github.com/samchon/typia/packages/typia/native/core/programmers/internal"
	schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type httpFormDataProgrammerNamespace struct{}

var HttpFormDataProgrammer = httpFormDataProgrammerNamespace{}

type HttpFormDataProgrammer_DecomposeProps struct {
	Context nativecontext.ITypiaContext
	Functor *nativehelpers.FunctionProgrammer
	Type    *shimchecker.Type
	Name    *string
}

var httpFormDataProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (httpFormDataProgrammerNamespace) Decompose(props HttpFormDataProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
	collection := schemametadata.NewMetadataCollection()
	result := nativefactories.MetadataFactory.Analyze(nativefactories.MetadataFactory_IProps{
		Checker:     props.Context.Checker,
		Transformer: props.Context.Transformer,
		Options: nativefactories.MetadataFactory_IOptions{
			Escape:   false,
			Constant: true,
			Absorb:   true,
			Validate: HttpFormDataProgrammer.Validate,
		},
		Components: collection,
		Type:       props.Type,
	})
	if result.Success == false {
		panic(nativecontext.TransformerError_from(struct {
			Code   string
			Errors []nativecontext.TransformerError_MetadataFactory_IError
		}{
			Code:   props.Functor.Method,
			Errors: httpParameterProgrammer_errors(result.Errors),
		}))
	}

	object := result.Data.Objects[0].Type
	statements := httpFormDataProgrammer_decode_object(struct {
		Context nativecontext.ITypiaContext
		Object  *schemametadata.MetadataObjectType
	}{
		Context: props.Context,
		Object:  object,
	})
	return nativeinternal.FeatureProgrammer_IDecomposed{
		Functions:  map[string]*shimast.Node{},
		Statements: []*shimast.Node{},
		Arrow: httpFormDataProgrammer_factory.NewArrowFunction(
			nil,
			nil,
			httpFormDataProgrammer_factory.NewNodeList([]*shimast.Node{
				nativefactories.IdentifierFactory.Parameter(
					"input",
					httpFormDataProgrammer_factory.NewTypeReferenceNode(httpFormDataProgrammer_factory.NewIdentifier("FormData"), nil),
					nil,
				),
			}),
			httpProgrammer_import_type(props.Context, nativeprogrammers.ImportProgrammer_TypeProps{
				File: "typia",
				Name: "Resolved",
				Arguments: []*shimast.TypeNode{
					httpProgrammer_typeReference(props.Context, props.Type, props.Name),
				},
			}),
			nil,
			httpFormDataProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
			httpFormDataProgrammer_factory.NewBlock(httpFormDataProgrammer_factory.NewNodeList(statements), true),
		),
	}
}

func (httpFormDataProgrammerNamespace) Write(props nativecontext.IProgrammerProps) *shimast.Node {
	functor := nativehelpers.NewFunctionProgrammer(httpProgrammer_method_text(props.Modulo))
	result := HttpFormDataProgrammer.Decompose(HttpFormDataProgrammer_DecomposeProps{
		Context: props.Context,
		Functor: functor,
		Type:    props.Type,
		Name:    props.Name,
	})
	return nativeinternal.FeatureProgrammer.WriteDecomposed(nativeinternal.FeatureProgrammer_WriteDecomposedProps{
		Modulo:  props.Modulo,
		Functor: functor,
		Result:  result,
	})
}

func (httpFormDataProgrammerNamespace) Validate(props struct {
	Metadata *schemametadata.MetadataSchema
	Explore  nativefactories.MetadataFactory_IExplore
	Top      *schemametadata.MetadataSchema
}) []string {
	errors := []string{}
	insert := func(msg string) {
		errors = append(errors, msg)
	}

	if props.Explore.Top == true {
		if len(props.Metadata.Objects) != 1 || props.Metadata.Bucket() != 1 {
			insert("only one object type is allowed.")
		}
		if props.Metadata.Nullable == true {
			insert("formdata parameters cannot be null.")
		}
		if props.Metadata.IsRequired() == false {
			insert("formdata parameters cannot be undefined.")
		}
	} else if _, ok := props.Explore.Nested.(*schemametadata.MetadataArrayType); props.Explore.Nested != nil && ok {
		atomics := nativehelpers.HttpMetadataUtil.Atomics(props.Metadata)
		expected := len(props.Metadata.Atomics) + len(props.Metadata.Templates)
		for _, c := range props.Metadata.Constants {
			expected += len(c.Values)
		}
		for _, native := range props.Metadata.Natives {
			if native.Name == "Blob" || native.Name == "File" {
				expected++
			}
		}
		if len(atomics) > 1 {
			insert("union type is not allowed in array.")
		}
		if props.Metadata.Size() != expected {
			insert("only atomic, constant or blob (file) types are allowed in array.")
		}
	} else if props.Explore.Object != nil && props.Explore.Property != nil {
		if _, ok := props.Explore.Property.(string); ok == false {
			insert("dynamic property is not allowed.")
		}
		if len(props.Metadata.Tuples) != 0 {
			insert("tuple type is not allowed.")
		}
		if nativehelpers.HttpMetadataUtil.IsUnion(props.Metadata) {
			insert("union type is not allowed.")
		}
		foreignNatives := 0
		for _, native := range props.Metadata.Natives {
			if native.Name != "Blob" && native.Name != "File" {
				foreignNatives++
			}
		}
		if len(props.Metadata.Objects) != 0 ||
			len(props.Metadata.Sets) != 0 ||
			len(props.Metadata.Maps) != 0 ||
			foreignNatives != 0 {
			insert("nested object type is not allowed.")
		}
	}
	return errors
}

func httpFormDataProgrammer_decode_object(props struct {
	Context nativecontext.ITypiaContext
	Object  *schemametadata.MetadataObjectType
}) []*shimast.Node {
	output := httpFormDataProgrammer_factory.NewIdentifier("output")
	properties := make([]*shimast.Node, 0, len(props.Object.Properties))
	for _, p := range props.Object.Properties {
		properties = append(properties, httpFormDataProgrammer_decode_regular_property(struct {
			Context  nativecontext.ITypiaContext
			Property *schemametadata.MetadataProperty
		}{
			Context:  props.Context,
			Property: p,
		}))
	}
	return []*shimast.Node{
		nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
			Name: "output",
			Value: httpFormDataProgrammer_factory.NewObjectLiteralExpression(
				httpFormDataProgrammer_factory.NewNodeList(properties),
				true,
			),
		}),
		httpFormDataProgrammer_factory.NewReturnStatement(
			httpFormDataProgrammer_factory.NewAsExpression(output, nativefactories.TypeFactory.Keyword("any")),
		),
	}
}

func httpFormDataProgrammer_decode_regular_property(props struct {
	Context  nativecontext.ITypiaContext
	Property *schemametadata.MetadataProperty
}) *shimast.Node {
	key := httpProgrammer_property_key(props.Property)
	value := props.Property.Value
	typ, isArray := httpProgrammer_decode_type(value, true)
	input := httpFormDataProgrammer_factory.NewCallExpression(
		nativefactories.IdentifierFactory.Access(httpFormDataProgrammer_factory.NewIdentifier("input"), "get"),
		nil,
		nil,
		httpFormDataProgrammer_factory.NewNodeList([]*shimast.Node{
			httpFormDataProgrammer_factory.NewStringLiteral(key, shimast.TokenFlagsNone),
		}),
		shimast.NodeFlagsNone,
	)
	if isArray {
		input = httpFormDataProgrammer_factory.NewCallExpression(
			nativefactories.IdentifierFactory.Access(
				httpFormDataProgrammer_factory.NewCallExpression(
					nativefactories.IdentifierFactory.Access(httpFormDataProgrammer_factory.NewIdentifier("input"), "getAll"),
					nil,
					nil,
					httpFormDataProgrammer_factory.NewNodeList([]*shimast.Node{
						httpFormDataProgrammer_factory.NewStringLiteral(key, shimast.TokenFlagsNone),
					}),
					shimast.NodeFlagsNone,
				),
				"map",
			),
			nil,
			nil,
			httpFormDataProgrammer_factory.NewNodeList([]*shimast.Node{
				httpFormDataProgrammer_factory.NewArrowFunction(
					nil,
					nil,
					httpFormDataProgrammer_factory.NewNodeList([]*shimast.Node{
						nativefactories.IdentifierFactory.Parameter("elem", nil, nil),
					}),
					nil,
					nil,
					httpFormDataProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
					httpFormDataProgrammer_decode_value(struct {
						Context  nativecontext.ITypiaContext
						Type     string
						Coalesce bool
						Input    *shimast.Node
					}{
						Context:  props.Context,
						Type:     typ,
						Coalesce: false,
						Input:    httpFormDataProgrammer_factory.NewIdentifier("elem"),
					}),
				),
			}),
			shimast.NodeFlagsNone,
		)
		input = httpFormDataProgrammer_decode_array(struct {
			Context  nativecontext.ITypiaContext
			Metadata *schemametadata.MetadataSchema
			Input    *shimast.Node
		}{
			Context:  props.Context,
			Metadata: value,
			Input:    input,
		})
	} else {
		input = httpFormDataProgrammer_decode_value(struct {
			Context  nativecontext.ITypiaContext
			Type     string
			Coalesce bool
			Input    *shimast.Node
		}{
			Context:  props.Context,
			Type:     typ,
			Coalesce: value.Nullable == false && value.IsRequired() == false,
			Input:    input,
		})
	}
	return httpFormDataProgrammer_factory.NewPropertyAssignment(
		nil,
		nativefactories.IdentifierFactory.Identifier(key),
		nil,
		nil,
		input,
	)
}

func httpFormDataProgrammer_decode_value(props struct {
	Context  nativecontext.ITypiaContext
	Type     string
	Coalesce bool
	Input    *shimast.Node
}) *shimast.Node {
	call := httpFormDataProgrammer_factory.NewCallExpression(
		httpParameterProgrammer_internal(props.Context, "httpFormDataRead"+httpParameterProgrammer_capitalize(props.Type)),
		nil,
		nil,
		httpFormDataProgrammer_factory.NewNodeList([]*shimast.Node{props.Input}),
		shimast.NodeFlagsNone,
	)
	if props.Coalesce == false {
		return call
	}
	return httpFormDataProgrammer_factory.NewBinaryExpression(
		nil,
		call,
		nil,
		httpFormDataProgrammer_factory.NewToken(shimast.KindQuestionQuestionToken),
		httpFormDataProgrammer_factory.NewIdentifier("undefined"),
	)
}

func httpFormDataProgrammer_decode_array(props struct {
	Context  nativecontext.ITypiaContext
	Metadata *schemametadata.MetadataSchema
	Input    *shimast.Node
}) *shimast.Node {
	if props.Metadata.Nullable == false && props.Metadata.IsRequired() == true {
		return props.Input
	}
	fallback := httpFormDataProgrammer_factory.NewIdentifier("undefined")
	if props.Metadata.Nullable {
		fallback = httpFormDataProgrammer_factory.NewKeywordExpression(shimast.KindNullKeyword)
	}
	return httpFormDataProgrammer_factory.NewCallExpression(
		httpParameterProgrammer_internal(props.Context, "httpFormDataReadArray"),
		nil,
		nil,
		httpFormDataProgrammer_factory.NewNodeList([]*shimast.Node{
			props.Input,
			fallback,
		}),
		shimast.NodeFlagsNone,
	)
}

func httpProgrammer_method_text(modulo *shimast.Node) string {
	if modulo == nil {
		return ""
	}
	return modulo.Text()
}

func httpProgrammer_import_type(context nativecontext.ITypiaContext, props nativeprogrammers.ImportProgrammer_TypeProps) *shimast.Node {
	if importer, ok := context.Importer.(interface {
		Type(nativeprogrammers.ImportProgrammer_TypeProps) *shimast.Node
	}); ok {
		return importer.Type(props)
	}
	if str, ok := props.Name.(string); ok {
		return httpFormDataProgrammer_factory.NewTypeReferenceNode(
			httpFormDataProgrammer_factory.NewIdentifier(str),
			httpFormDataProgrammer_factory.NewNodeList(props.Arguments),
		)
	}
	return props.Name.(*shimast.Node)
}

func httpProgrammer_typeReference(context nativecontext.ITypiaContext, typ *shimchecker.Type, name *string) *shimast.Node {
	if name != nil {
		return httpFormDataProgrammer_factory.NewTypeReferenceNode(httpFormDataProgrammer_factory.NewIdentifier(*name), nil)
	}
	return httpFormDataProgrammer_factory.NewTypeReferenceNode(httpFormDataProgrammer_factory.NewIdentifier(nativefactories.TypeFactory.GetFullName(nativefactories.TypeFactory_GetFullNameProps{
		Checker: context.Checker,
		Type:    typ,
	})), nil)
}

func httpProgrammer_property_key(property *schemametadata.MetadataProperty) string {
	if property == nil || property.Key == nil {
		return ""
	}
	if key := property.Key.GetSoleLiteral(); key != nil {
		return *key
	}
	return ""
}

func httpProgrammer_decode_type(value *schemametadata.MetadataSchema, blob bool) (string, bool) {
	return httpProgrammer_decode_type_from_metadata(value, blob, false)
}

func httpProgrammer_decode_type_from_metadata(value *schemametadata.MetadataSchema, blob bool, array bool) (string, bool) {
	if value == nil {
		return "string", array
	}
	if len(value.Atomics) != 0 {
		return value.Atomics[0].Type, array
	}
	if len(value.Constants) != 0 {
		return value.Constants[0].Type, array
	}
	if len(value.Templates) != 0 {
		return "string", array
	}
	if blob {
		for _, native := range value.Natives {
			if native.Name == "Blob" {
				return "blob", array
			}
		}
		for _, native := range value.Natives {
			if native.Name == "File" {
				return "file", array
			}
		}
	}
	if len(value.Arrays) != 0 {
		return httpProgrammer_decode_type_from_metadata(value.Arrays[0].Type.Value, blob, true)
	}
	if len(value.Tuples) != 0 && len(value.Tuples[0].Type.Elements) != 0 {
		return httpProgrammer_decode_type_from_metadata(value.Tuples[0].Type.Elements[0], blob, true)
	}
	return "string", array
}

func httpProgrammer_debug(value any) string {
	return fmt.Sprint(value)
}
