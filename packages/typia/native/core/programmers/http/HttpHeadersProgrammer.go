package http

import (
	"fmt"
	"sort"
	"strings"

	shimast "github.com/microsoft/typescript-go/shim/ast"
	shimchecker "github.com/microsoft/typescript-go/shim/checker"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
	nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
	nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
	nativeinternal "github.com/samchon/typia/packages/typia/native/core/programmers/internal"
	schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type httpHeadersProgrammerNamespace struct{}

var HttpHeadersProgrammer = httpHeadersProgrammerNamespace{}

const HttpHeadersProgrammer_INPUT_TYPE = "Record<string, string | string[] | undefined>"

type HttpHeadersProgrammer_DecomposeProps struct {
	Context nativecontext.ITypiaContext
	Functor *nativehelpers.FunctionProgrammer
	Type    *shimchecker.Type
	Name    *string
}

var httpHeadersProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (httpHeadersProgrammerNamespace) Decompose(props HttpHeadersProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
	collection := schemametadata.NewMetadataCollection()
	result := nativefactories.MetadataFactory.Analyze(nativefactories.MetadataFactory_IProps{
		Checker:     props.Context.Checker,
		Transformer: props.Context.Transformer,
		Options: nativefactories.MetadataFactory_IOptions{
			Escape:   false,
			Constant: true,
			Absorb:   true,
			Validate: HttpHeadersProgrammer.Validate,
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
	statements := httpHeadersProgrammer_decode_object(struct {
		Context nativecontext.ITypiaContext
		Object  *schemametadata.MetadataObjectType
	}{
		Context: props.Context,
		Object:  object,
	})
	return nativeinternal.FeatureProgrammer_IDecomposed{
		Functions:  map[string]*shimast.Node{},
		Statements: []*shimast.Node{},
		Arrow: httpHeadersProgrammer_factory.NewArrowFunction(
			nil,
			nil,
			httpHeadersProgrammer_factory.NewNodeList([]*shimast.Node{
				nativefactories.IdentifierFactory.Parameter(
					"input",
					httpHeadersProgrammer_factory.NewTypeReferenceNode(httpHeadersProgrammer_factory.NewIdentifier(HttpHeadersProgrammer_INPUT_TYPE), nil),
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
			httpHeadersProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
			httpHeadersProgrammer_factory.NewBlock(httpHeadersProgrammer_factory.NewNodeList(statements), true),
		),
	}
}

func (httpHeadersProgrammerNamespace) Write(props nativecontext.IProgrammerProps) *shimast.Node {
	functor := nativehelpers.NewFunctionProgrammer(httpProgrammer_method_text(props.Modulo))
	result := HttpHeadersProgrammer.Decompose(HttpHeadersProgrammer_DecomposeProps{
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

func (httpHeadersProgrammerNamespace) Validate(props struct {
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
			insert("headers cannot be null.")
		}
		if props.Metadata.IsRequired() == false {
			insert("headers cannot be null.")
		}
	} else if _, ok := props.Explore.Nested.(*schemametadata.MetadataArrayType); props.Explore.Nested != nil && ok {
		atomics := nativehelpers.HttpMetadataUtil.Atomics(props.Metadata)
		expected := len(props.Metadata.Atomics) + len(props.Metadata.Templates)
		for _, c := range props.Metadata.Constants {
			expected += len(c.Values)
		}
		if len(atomics) > 1 {
			insert("union type is not allowed in array.")
		}
		if props.Metadata.Size() != expected {
			insert("only atomic or constant types are allowed in array.")
		}
		if props.Metadata.Nullable == true {
			insert("nullable type is not allowed in array.")
		}
		if props.Metadata.IsRequired() == false {
			insert("optional type is not allowed in array.")
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
		if len(props.Metadata.Objects) != 0 ||
			len(props.Metadata.Sets) != 0 ||
			len(props.Metadata.Maps) != 0 ||
			len(props.Metadata.Natives) != 0 {
			insert("nested object type is not allowed.")
		}
		if props.Metadata.Nullable == true {
			insert("nullable type is not allowed.")
		}

		isArray := len(props.Metadata.Arrays) >= 1 || len(props.Metadata.Tuples) >= 1
		if key, ok := props.Explore.Property.(string); ok {
			lower := strings.ToLower(key)
			if lower == "set-cookie" && isArray == false {
				insert(fmt.Sprintf("%s property must be array.", key))
			}
			if httpHeadersProgrammer_SINGULAR[lower] && isArray == true {
				insert("property cannot be array.")
			}
		}
	} else if props.Explore.Object != nil && props.Explore.Property == nil {
		counter := map[string]map[string]bool{}
		for _, prop := range props.Explore.Object.Properties {
			key := prop.Key.GetSoleLiteral()
			if key == nil {
				continue
			}
			lower := strings.ToLower(*key)
			if counter[lower] == nil {
				counter[lower] = map[string]bool{}
			}
			counter[lower][*key] = true
		}
		keys := make([]string, 0, len(counter))
		for key := range counter {
			keys = append(keys, key)
		}
		sort.Strings(keys)
		for _, key := range keys {
			set := counter[key]
			if len(set) <= 1 {
				continue
			}
			values := make([]string, 0, len(set))
			for value := range set {
				values = append(values, value)
			}
			sort.Strings(values)
			insert(fmt.Sprintf("duplicated keys when converting to lowercase letters: [%s] -> %s", strings.Join(values, ", "), key))
		}
	}
	return errors
}

func httpHeadersProgrammer_decode_object(props struct {
	Context nativecontext.ITypiaContext
	Object  *schemametadata.MetadataObjectType
}) []*shimast.Node {
	output := httpHeadersProgrammer_factory.NewIdentifier("output")
	optionals := []string{}
	properties := make([]*shimast.Node, 0, len(props.Object.Properties))
	for _, p := range props.Object.Properties {
		if p.Value.IsRequired() == false && len(p.Value.Arrays)+len(p.Value.Tuples) > 0 {
			optionals = append(optionals, httpProgrammer_property_key(p))
		}
		properties = append(properties, httpHeadersProgrammer_decode_regular_property(struct {
			Context  nativecontext.ITypiaContext
			Property *schemametadata.MetadataProperty
		}{
			Context:  props.Context,
			Property: p,
		}))
	}
	statements := []*shimast.Node{
		nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
			Name: "output",
			Value: httpHeadersProgrammer_factory.NewObjectLiteralExpression(
				httpHeadersProgrammer_factory.NewNodeList(properties),
				true,
			),
		}),
	}
	for _, key := range optionals {
		access := nativefactories.IdentifierFactory.Access(output, key)
		statements = append(statements, httpHeadersProgrammer_factory.NewIfStatement(
			httpHeadersProgrammer_factory.NewBinaryExpression(
				nil,
				nativefactories.ExpressionFactory.Number(0),
				nil,
				httpHeadersProgrammer_factory.NewToken(shimast.KindEqualsEqualsEqualsToken),
				nativefactories.IdentifierFactory.Access(access, "length"),
			),
			httpHeadersProgrammer_factory.NewExpressionStatement(
				httpHeadersProgrammer_factory.NewDeleteExpression(access),
			),
			nil,
		))
	}
	statements = append(statements, httpHeadersProgrammer_factory.NewReturnStatement(
		httpHeadersProgrammer_factory.NewAsExpression(output, nativefactories.TypeFactory.Keyword("any")),
	))
	return statements
}

func httpHeadersProgrammer_decode_regular_property(props struct {
	Context  nativecontext.ITypiaContext
	Property *schemametadata.MetadataProperty
}) *shimast.Node {
	key := httpProgrammer_property_key(props.Property)
	value := props.Property.Value
	typ, isArray := httpProgrammer_decode_type(value, false)
	input := nativefactories.IdentifierFactory.Access(
		httpHeadersProgrammer_factory.NewIdentifier("input"),
		strings.ToLower(key),
	)
	var decoded *shimast.Node
	if isArray {
		if key == "set-cookie" {
			decoded = input
		} else {
			decoded = httpHeadersProgrammer_decode_array(struct {
				Context nativecontext.ITypiaContext
				Type    string
				Key     string
				Value   *schemametadata.MetadataSchema
				Input   *shimast.Node
			}{
				Context: props.Context,
				Type:    typ,
				Key:     key,
				Value:   value,
				Input:   input,
			})
		}
	} else {
		decoded = httpHeadersProgrammer_decode_value(struct {
			Context nativecontext.ITypiaContext
			Type    string
			Input   *shimast.Node
		}{
			Context: props.Context,
			Type:    typ,
			Input:   input,
		})
	}
	return httpHeadersProgrammer_factory.NewPropertyAssignment(
		nil,
		nativefactories.IdentifierFactory.Identifier(key),
		nil,
		nil,
		decoded,
	)
}

func httpHeadersProgrammer_decode_value(props struct {
	Context nativecontext.ITypiaContext
	Type    string
	Input   *shimast.Node
}) *shimast.Node {
	if props.Type == "string" {
		return props.Input
	}
	return httpHeadersProgrammer_factory.NewCallExpression(
		httpParameterProgrammer_internal(props.Context, "httpHeaderRead"+httpParameterProgrammer_capitalize(props.Type)),
		nil,
		nil,
		httpHeadersProgrammer_factory.NewNodeList([]*shimast.Node{props.Input}),
		shimast.NodeFlagsNone,
	)
}

func httpHeadersProgrammer_decode_array(props struct {
	Context nativecontext.ITypiaContext
	Type    string
	Key     string
	Value   *schemametadata.MetadataSchema
	Input   *shimast.Node
}) *shimast.Node {
	reader := httpParameterProgrammer_internal(props.Context, "httpHeaderRead"+httpParameterProgrammer_capitalize(props.Type))
	if props.Type == "string" {
		reader = httpHeadersProgrammer_factory.NewArrowFunction(
			nil,
			nil,
			httpHeadersProgrammer_factory.NewNodeList([]*shimast.Node{
				nativefactories.IdentifierFactory.Parameter("str", nil, nil),
			}),
			nil,
			nil,
			httpHeadersProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
			httpHeadersProgrammer_factory.NewCallExpression(
				nativefactories.IdentifierFactory.Access(httpHeadersProgrammer_factory.NewIdentifier("str"), "trim"),
				nil,
				nil,
				nil,
				shimast.NodeFlagsNone,
			),
		)
	}
	delimiter := ", "
	if props.Key == "cookie" {
		delimiter = "; "
	}
	split := httpHeadersProgrammer_factory.NewCallExpression(
		nativefactories.IdentifierFactory.Access(props.Input, "split", true),
		nil,
		nil,
		httpHeadersProgrammer_factory.NewNodeList([]*shimast.Node{
			httpHeadersProgrammer_factory.NewStringLiteral(delimiter, shimast.TokenFlagsNone),
		}),
		shimast.NodeFlagsOptionalChain,
	)
	mappedSplit := httpHeadersProgrammer_factory.NewCallExpression(
		nativefactories.IdentifierFactory.Access(split, "map", true),
		nil,
		nil,
		httpHeadersProgrammer_factory.NewNodeList([]*shimast.Node{reader}),
		shimast.NodeFlagsOptionalChain,
	)
	arrayMap := httpHeadersProgrammer_factory.NewCallExpression(
		nativefactories.IdentifierFactory.Access(props.Input, "map"),
		nil,
		nil,
		httpHeadersProgrammer_factory.NewNodeList([]*shimast.Node{reader}),
		shimast.NodeFlagsNone,
	)
	otherwise := mappedSplit
	if props.Value.IsRequired() {
		otherwise = httpHeadersProgrammer_factory.NewBinaryExpression(
			nil,
			mappedSplit,
			nil,
			httpHeadersProgrammer_factory.NewToken(shimast.KindQuestionQuestionToken),
			httpHeadersProgrammer_factory.NewArrayLiteralExpression(httpHeadersProgrammer_factory.NewNodeList(nil), false),
		)
	}
	return httpHeadersProgrammer_factory.NewConditionalExpression(
		nativefactories.ExpressionFactory.IsArray(props.Input),
		nil,
		arrayMap,
		nil,
		otherwise,
	)
}

var httpHeadersProgrammer_SINGULAR = map[string]bool{
	"age":                 true,
	"authorization":       true,
	"content-length":      true,
	"content-type":        true,
	"etag":                true,
	"expires":             true,
	"from":                true,
	"host":                true,
	"if-modified-since":   true,
	"if-unmodified-since": true,
	"last-modified":       true,
	"location":            true,
	"max-forwards":        true,
	"proxy-authorization": true,
	"referer":             true,
	"retry-after":         true,
	"server":              true,
	"user-agent":          true,
}
