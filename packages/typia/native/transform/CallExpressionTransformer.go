package transform

import (
	"path/filepath"
	"strings"

	shimast "github.com/microsoft/typescript-go/shim/ast"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
	nativefunctionalprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers/functional"
	nativenotationprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers/notations"
	nativefeatures "github.com/samchon/typia/packages/typia/native/transform/features"
	nativefunctionaltransformers "github.com/samchon/typia/packages/typia/native/transform/features/functional"
	nativehttptransformers "github.com/samchon/typia/packages/typia/native/transform/features/http"
	nativejsontransformers "github.com/samchon/typia/packages/typia/native/transform/features/json"
	nativellmtransformers "github.com/samchon/typia/packages/typia/native/transform/features/llm"
	nativemisctransformers "github.com/samchon/typia/packages/typia/native/transform/features/misc"
	nativenotationtransformers "github.com/samchon/typia/packages/typia/native/transform/features/notations"
	nativeprotobuftransformers "github.com/samchon/typia/packages/typia/native/transform/features/protobuf"
	nativereflecttransformers "github.com/samchon/typia/packages/typia/native/transform/features/reflect"
)

type callExpressionTransformerNamespace struct{}

var CallExpressionTransformer = callExpressionTransformerNamespace{}

type CallExpressionTransformer_TransformProps struct {
	Context    nativecontext.ITypiaContext
	Expression *shimast.CallExpression
}

type callExpressionTransformerTask func(props ITransformProps) *shimast.Node

type callExpressionTransformerFunctor func() callExpressionTransformerTask

func (callExpressionTransformerNamespace) Transform(props CallExpressionTransformer_TransformProps) *shimast.Node {
	if props.Expression == nil {
		return nil
	}
	signature := props.Context.Checker.GetResolvedSignature(props.Expression.AsNode())
	if signature == nil {
		return props.Expression.AsNode()
	}
	declaration := signature.Declaration()
	if declaration == nil {
		return props.Expression.AsNode()
	}
	sourceFile := callExpressionTransformer_sourceFile(declaration)
	if sourceFile == nil {
		return props.Expression.AsNode()
	}
	location, _ := filepath.Abs(sourceFile.FileName())
	if callExpressionTransformer_isTarget(location) == false {
		return props.Expression.AsNode()
	}
	module := strings.Split(filepath.Base(location), ".")[0]
	typ := props.Context.Checker.GetTypeAtLocation(declaration)
	if typ == nil || typ.Symbol() == nil {
		return props.Expression.AsNode()
	}
	name := typ.Symbol().Name
	functors := callExpressionTransformer_FUNCTORS()
	functor, ok := functors[module][name]
	if ok == false {
		return props.Expression.AsNode()
	}
	modulo := props.Expression.Expression
	if modulo != nil && modulo.Kind == shimast.KindPropertyAccessExpression {
		if property := modulo.AsPropertyAccessExpression(); property != nil && property.Name() != nil {
			modulo = property.Name()
		}
	}
	result := functor()(ITransformProps{
		Context:    props.Context,
		Modulo:     modulo,
		Expression: props.Expression,
	})
	if result == nil {
		return props.Expression.AsNode()
	}
	return result
}

func callExpressionTransformer_isTarget(location string) bool {
	for file := range callExpressionTransformer_FUNCTORS() {
		if strings.Contains(location, filepath.Join("typia", "lib", file+".d.ts")) ||
			strings.Contains(location, filepath.Join("typia", "src", file+".ts")) {
			return true
		}
	}
	return false
}

func callExpressionTransformer_sourceFile(node *shimast.Node) *shimast.SourceFile {
	for current := node; current != nil; current = current.Parent {
		if current.Kind == shimast.KindSourceFile {
			return current.AsSourceFile()
		}
	}
	return nil
}

func callExpressionTransformer_FUNCTORS() map[string]map[string]callExpressionTransformerFunctor {
	return map[string]map[string]callExpressionTransformerFunctor{
		"module": {
			"assert": func() callExpressionTransformerTask {
				return nativefeatures.AssertTransformer.Transform(nativeprogrammers.AssertProgrammer_IConfig{Equals: false, Guard: false})
			},
			"assertGuard": func() callExpressionTransformerTask {
				return nativefeatures.AssertTransformer.Transform(nativeprogrammers.AssertProgrammer_IConfig{Equals: false, Guard: true})
			},
			"assertType": func() callExpressionTransformerTask {
				return nativefeatures.AssertTransformer.Transform(nativeprogrammers.AssertProgrammer_IConfig{Equals: false, Guard: false})
			},
			"is": func() callExpressionTransformerTask {
				return nativefeatures.IsTransformer.Transform(nativeprogrammers.IsProgrammer_IConfig{Equals: false})
			},
			"validate": func() callExpressionTransformerTask {
				return nativefeatures.ValidateTransformer.Transform(nativeprogrammers.ValidateProgrammer_IConfig{Equals: false})
			},
			"assertEquals": func() callExpressionTransformerTask {
				return nativefeatures.AssertTransformer.Transform(nativeprogrammers.AssertProgrammer_IConfig{Equals: true, Guard: false})
			},
			"assertGuardEquals": func() callExpressionTransformerTask {
				return nativefeatures.AssertTransformer.Transform(nativeprogrammers.AssertProgrammer_IConfig{Equals: true, Guard: true})
			},
			"equals": func() callExpressionTransformerTask {
				return nativefeatures.IsTransformer.Transform(nativeprogrammers.IsProgrammer_IConfig{Equals: true})
			},
			"validateEquals": func() callExpressionTransformerTask {
				return nativefeatures.ValidateTransformer.Transform(nativeprogrammers.ValidateProgrammer_IConfig{Equals: true})
			},
			"random": func() callExpressionTransformerTask { return nativefeatures.RandomTransformer.Transform },
			"metadata": func() callExpressionTransformerTask {
				return nativereflecttransformers.ReflectMetadataTransformer.Transform
			},
			"createAssert": func() callExpressionTransformerTask {
				return nativefeatures.CreateAssertTransformer.Transform(nativeprogrammers.AssertProgrammer_IConfig{Equals: false, Guard: false})
			},
			"createAssertGuard": func() callExpressionTransformerTask {
				return nativefeatures.CreateAssertTransformer.Transform(nativeprogrammers.AssertProgrammer_IConfig{Equals: false, Guard: true})
			},
			"createAssertType": func() callExpressionTransformerTask {
				return nativefeatures.CreateAssertTransformer.Transform(nativeprogrammers.AssertProgrammer_IConfig{Equals: false, Guard: false})
			},
			"createIs": func() callExpressionTransformerTask {
				return nativefeatures.CreateIsTransformer.Transform(nativeprogrammers.IsProgrammer_IConfig{Equals: false})
			},
			"createValidate": func() callExpressionTransformerTask {
				return nativefeatures.CreateValidateTransformer.Transform(nativeprogrammers.ValidateProgrammer_IConfig{Equals: false, StandardSchema: true})
			},
			"createAssertEquals": func() callExpressionTransformerTask {
				return nativefeatures.CreateAssertTransformer.Transform(nativeprogrammers.AssertProgrammer_IConfig{Equals: true, Guard: false})
			},
			"createAssertGuardEquals": func() callExpressionTransformerTask {
				return nativefeatures.CreateAssertTransformer.Transform(nativeprogrammers.AssertProgrammer_IConfig{Equals: true, Guard: true})
			},
			"createEquals": func() callExpressionTransformerTask {
				return nativefeatures.CreateIsTransformer.Transform(nativeprogrammers.IsProgrammer_IConfig{Equals: true})
			},
			"createValidateEquals": func() callExpressionTransformerTask {
				return nativefeatures.CreateValidateTransformer.Transform(nativeprogrammers.ValidateProgrammer_IConfig{Equals: true, StandardSchema: true})
			},
			"createRandom": func() callExpressionTransformerTask { return nativefeatures.CreateRandomTransformer.Transform },
		},
		"functional": callExpressionTransformer_functional(),
		"http": {
			"formData": func() callExpressionTransformerTask { return nativehttptransformers.HttpFormDataTransformer.Transform },
			"isFormData": func() callExpressionTransformerTask {
				return nativehttptransformers.HttpIsFormDataTransformer.Transform
			},
			"assertFormData": func() callExpressionTransformerTask {
				return nativehttptransformers.HttpAssertFormDataTransformer.Transform
			},
			"validateFormData": func() callExpressionTransformerTask {
				return nativehttptransformers.HttpValidateFormDataTransformer.Transform
			},
			"headers":   func() callExpressionTransformerTask { return nativehttptransformers.HttpHeadersTransformer.Transform },
			"isHeaders": func() callExpressionTransformerTask { return nativehttptransformers.HttpIsHeadersTransformer.Transform },
			"assertHeaders": func() callExpressionTransformerTask {
				return nativehttptransformers.HttpAssertHeadersTransformer.Transform
			},
			"validateHeaders": func() callExpressionTransformerTask {
				return nativehttptransformers.HttpValidateHeadersTransformer.Transform
			},
			"parameter": func() callExpressionTransformerTask { return nativehttptransformers.HttpParameterTransformer.Transform },
			"query":     func() callExpressionTransformerTask { return nativehttptransformers.HttpQueryTransformer.Transform },
			"isQuery":   func() callExpressionTransformerTask { return nativehttptransformers.HttpIsQueryTransformer.Transform },
			"assertQuery": func() callExpressionTransformerTask {
				return nativehttptransformers.HttpAssertQueryTransformer.Transform
			},
			"validateQuery": func() callExpressionTransformerTask {
				return nativehttptransformers.HttpValidateQueryTransformer.Transform
			},
			"createFormData": func() callExpressionTransformerTask {
				return nativehttptransformers.CreateHttpFormDataTransformer.Transform
			},
			"createIsFormData": func() callExpressionTransformerTask {
				return nativehttptransformers.CreateHttpIsFormDataTransformer.Transform
			},
			"createAssertFormData": func() callExpressionTransformerTask {
				return nativehttptransformers.CreateHttpAssertFormDataTransformer.Transform
			},
			"createValidateFormData": func() callExpressionTransformerTask {
				return nativehttptransformers.CreateHttpValidateFormDataTransformer.Transform
			},
			"createHeaders": func() callExpressionTransformerTask {
				return nativehttptransformers.CreateHttpHeadersTransformer.Transform
			},
			"createIsHeaders": func() callExpressionTransformerTask {
				return nativehttptransformers.CreateHttpIsHeadersTransformer.Transform
			},
			"createAssertHeaders": func() callExpressionTransformerTask {
				return nativehttptransformers.CreateHttpAssertHeadersTransformer.Transform
			},
			"createValidateHeaders": func() callExpressionTransformerTask {
				return nativehttptransformers.CreateHttpValidateHeadersTransformer.Transform
			},
			"createParameter": func() callExpressionTransformerTask {
				return nativehttptransformers.CreateHttpParameterTransformer.Transform
			},
			"createQuery": func() callExpressionTransformerTask {
				return nativehttptransformers.CreateHttpQueryTransformer.Transform
			},
			"createIsQuery": func() callExpressionTransformerTask {
				return nativehttptransformers.CreateHttpIsQueryTransformer.Transform
			},
			"createAssertQuery": func() callExpressionTransformerTask {
				return nativehttptransformers.CreateHttpAssertQueryTransformer.Transform
			},
			"createValidateQuery": func() callExpressionTransformerTask {
				return nativehttptransformers.CreateHttpValidateQueryTransformer.Transform
			},
		},
		"llm": {
			"controller": func() callExpressionTransformerTask { return nativellmtransformers.LlmControllerTransformer.Transform },
			"applicationOfValidate": func() callExpressionTransformerTask {
				return nativellmtransformers.LlmApplicationTransformer.Transform
			},
			"application": func() callExpressionTransformerTask { return nativellmtransformers.LlmApplicationTransformer.Transform },
			"structuredOutput": func() callExpressionTransformerTask {
				return nativellmtransformers.LlmStructuredOutputTransformer.Transform
			},
			"parameters":  func() callExpressionTransformerTask { return nativellmtransformers.LlmParametersTransformer.Transform },
			"schema":      func() callExpressionTransformerTask { return nativellmtransformers.LlmSchemaTransformer.Transform },
			"parse":       func() callExpressionTransformerTask { return nativellmtransformers.LlmParseTransformer.Transform },
			"createParse": func() callExpressionTransformerTask { return nativellmtransformers.LlmCreateParseTransformer.Transform },
			"coerce":      func() callExpressionTransformerTask { return nativellmtransformers.LlmCoerceTransformer.Transform },
			"createCoerce": func() callExpressionTransformerTask {
				return nativellmtransformers.LlmCreateCoerceTransformer.Transform
			},
		},
		"json": {
			"schema":  func() callExpressionTransformerTask { return nativejsontransformers.JsonSchemaTransformer.Transform },
			"schemas": func() callExpressionTransformerTask { return nativejsontransformers.JsonSchemasTransformer.Transform },
			"application": func() callExpressionTransformerTask {
				return nativejsontransformers.JsonApplicationTransformer.Transform
			},
			"isParse": func() callExpressionTransformerTask { return nativejsontransformers.JsonIsParseTransformer.Transform },
			"assertParse": func() callExpressionTransformerTask {
				return nativejsontransformers.JsonAssertParseTransformer.Transform
			},
			"validateParse": func() callExpressionTransformerTask {
				return nativejsontransformers.JsonValidateParseTransformer.Transform
			},
			"stringify": func() callExpressionTransformerTask { return nativejsontransformers.JsonStringifyTransformer.Transform },
			"assertStringify": func() callExpressionTransformerTask {
				return nativejsontransformers.JsonAssertStringifyTransformer.Transform
			},
			"isStringify": func() callExpressionTransformerTask {
				return nativejsontransformers.JsonIsStringifyTransformer.Transform
			},
			"validateStringify": func() callExpressionTransformerTask {
				return nativejsontransformers.JsonValidateStringifyTransformer.Transform
			},
			"createIsParse": func() callExpressionTransformerTask {
				return nativejsontransformers.JsonCreateIsParseTransformer.Transform
			},
			"createAssertParse": func() callExpressionTransformerTask {
				return nativejsontransformers.JsonCreateAssertParseTransformer.Transform
			},
			"createValidateParse": func() callExpressionTransformerTask {
				return nativejsontransformers.JsonCreateValidateParseTransformer.Transform
			},
			"createStringify": func() callExpressionTransformerTask {
				return nativejsontransformers.JsonCreateStringifyTransformer.Transform
			},
			"createAssertStringify": func() callExpressionTransformerTask {
				return nativejsontransformers.JsonCreateAssertStringifyTransformer.Transform
			},
			"createIsStringify": func() callExpressionTransformerTask {
				return nativejsontransformers.JsonCreateIsStringifyTransformer.Transform
			},
			"createValidateStringify": func() callExpressionTransformerTask {
				return nativejsontransformers.JsonCreateValidateStringifyTransformer.Transform
			},
		},
		"protobuf": {
			"message": func() callExpressionTransformerTask {
				return nativeprotobuftransformers.ProtobufMessageTransformer.Transform
			},
			"encode": func() callExpressionTransformerTask {
				return nativeprotobuftransformers.ProtobufEncodeTransformer.Transform
			},
			"assertEncode": func() callExpressionTransformerTask {
				return nativeprotobuftransformers.ProtobufAssertEncodeTransformer.Transform
			},
			"isEncode": func() callExpressionTransformerTask {
				return nativeprotobuftransformers.ProtobufIsEncodeTransformer.Transform
			},
			"validateEncode": func() callExpressionTransformerTask {
				return nativeprotobuftransformers.ProtobufValidateEncodeTransformer.Transform
			},
			"decode": func() callExpressionTransformerTask {
				return nativeprotobuftransformers.ProtobufDecodeTransformer.Transform
			},
			"assertDecode": func() callExpressionTransformerTask {
				return nativeprotobuftransformers.ProtobufAssertDecodeTransformer.Transform
			},
			"isDecode": func() callExpressionTransformerTask {
				return nativeprotobuftransformers.ProtobufIsDecodeTransformer.Transform
			},
			"validateDecode": func() callExpressionTransformerTask {
				return nativeprotobuftransformers.ProtobufValidateDecodeTransformer.Transform
			},
			"createEncode": func() callExpressionTransformerTask {
				return nativeprotobuftransformers.ProtobufCreateEncodeTransformer.Transform
			},
			"createAssertEncode": func() callExpressionTransformerTask {
				return nativeprotobuftransformers.ProtobufCreateAssertEncodeTransformer.Transform
			},
			"createIsEncode": func() callExpressionTransformerTask {
				return nativeprotobuftransformers.ProtobufCreateIsEncodeTransformer.Transform
			},
			"createValidateEncode": func() callExpressionTransformerTask {
				return nativeprotobuftransformers.ProtobufCreateValidateEncodeTransformer.Transform
			},
			"createDecode": func() callExpressionTransformerTask {
				return nativeprotobuftransformers.ProtobufCreateDecodeTransformer.Transform
			},
			"createAssertDecode": func() callExpressionTransformerTask {
				return nativeprotobuftransformers.ProtobufCreateAssertDecodeTransformer.Transform
			},
			"createIsDecode": func() callExpressionTransformerTask {
				return nativeprotobuftransformers.ProtobufCreateIsDecodeTransformer.Transform
			},
			"createValidateDecode": func() callExpressionTransformerTask {
				return nativeprotobuftransformers.ProtobufCreateValidateDecodeTransformer.Transform
			},
		},
		"reflect": {
			"metadata": func() callExpressionTransformerTask {
				return nativereflecttransformers.ReflectMetadataTransformer.Transform
			},
			"name": func() callExpressionTransformerTask {
				return nativereflecttransformers.ReflectNameTransformer.Transform
			},
			"schema": func() callExpressionTransformerTask {
				return nativereflecttransformers.ReflectSchemaTransformer.Transform
			},
			"schemas": func() callExpressionTransformerTask {
				return nativereflecttransformers.ReflectSchemasTransformer.Transform
			},
		},
		"misc": {
			"literals": func() callExpressionTransformerTask { return nativemisctransformers.MiscLiteralsTransformer.Transform },
			"clone":    func() callExpressionTransformerTask { return nativemisctransformers.MiscCloneTransformer.Transform },
			"assertClone": func() callExpressionTransformerTask {
				return nativemisctransformers.MiscAssertCloneTransformer.Transform
			},
			"isClone": func() callExpressionTransformerTask { return nativemisctransformers.MiscIsCloneTransformer.Transform },
			"validateClone": func() callExpressionTransformerTask {
				return nativemisctransformers.MiscValidateCloneTransformer.Transform
			},
			"prune": func() callExpressionTransformerTask { return nativemisctransformers.MiscPruneTransformer.Transform },
			"assertPrune": func() callExpressionTransformerTask {
				return nativemisctransformers.MiscAssertPruneTransformer.Transform
			},
			"isPrune": func() callExpressionTransformerTask { return nativemisctransformers.MiscIsPruneTransformer.Transform },
			"validatePrune": func() callExpressionTransformerTask {
				return nativemisctransformers.MiscValidatePruneTransformer.Transform
			},
			"createClone": func() callExpressionTransformerTask {
				return nativemisctransformers.MiscCreateCloneTransformer.Transform
			},
			"createAssertClone": func() callExpressionTransformerTask {
				return nativemisctransformers.MiscCreateAssertCloneTransformer.Transform
			},
			"createIsClone": func() callExpressionTransformerTask {
				return nativemisctransformers.MiscCreateIsCloneTransformer.Transform
			},
			"createValidateClone": func() callExpressionTransformerTask {
				return nativemisctransformers.MiscCreateValidateCloneTransformer.Transform
			},
			"createPrune": func() callExpressionTransformerTask {
				return nativemisctransformers.MiscCreatePruneTransformer.Transform
			},
			"createAssertPrune": func() callExpressionTransformerTask {
				return nativemisctransformers.MiscCreateAssertPruneTransformer.Transform
			},
			"createIsPrune": func() callExpressionTransformerTask {
				return nativemisctransformers.MiscCreateIsPruneTransformer.Transform
			},
			"createValidatePrune": func() callExpressionTransformerTask {
				return nativemisctransformers.MiscCreateValidatePruneTransformer.Transform
			},
		},
		"notations": callExpressionTransformer_notations(),
	}
}

func callExpressionTransformer_functional() map[string]callExpressionTransformerFunctor {
	assertFunction := callExpressionTransformer_functionalAssertFunction
	assertParameters := callExpressionTransformer_functionalAssertParameters
	assertReturn := callExpressionTransformer_functionalAssertReturn
	isFunction := callExpressionTransformer_functionalIsFunction
	isParameters := callExpressionTransformer_functionalIsParameters
	isReturn := callExpressionTransformer_functionalIsReturn
	validateFunction := callExpressionTransformer_functionalValidateFunction
	validateParameters := callExpressionTransformer_functionalValidateParameters
	validateReturn := callExpressionTransformer_functionalValidateReturn
	return map[string]callExpressionTransformerFunctor{
		"assertFunction": func() callExpressionTransformerTask {
			return callExpressionTransformer_functionalGeneric("assertFunction", false, assertFunction)
		},
		"assertParameters": func() callExpressionTransformerTask {
			return callExpressionTransformer_functionalGeneric("assertParameters", false, assertParameters)
		},
		"assertReturn": func() callExpressionTransformerTask {
			return callExpressionTransformer_functionalGeneric("assertReturn", false, assertReturn)
		},
		"assertEqualsFunction": func() callExpressionTransformerTask {
			return callExpressionTransformer_functionalGeneric("assertEqualsFunction", true, assertFunction)
		},
		"assertEqualsParameters": func() callExpressionTransformerTask {
			return callExpressionTransformer_functionalGeneric("assertEqualsParameters", true, assertParameters)
		},
		"assertEqualsReturn": func() callExpressionTransformerTask {
			return callExpressionTransformer_functionalGeneric("assertEqualsReturn", true, assertReturn)
		},
		"isFunction": func() callExpressionTransformerTask {
			return callExpressionTransformer_functionalGeneric("isFunction", false, isFunction)
		},
		"isParameters": func() callExpressionTransformerTask {
			return callExpressionTransformer_functionalGeneric("isParameters", false, isParameters)
		},
		"isReturn": func() callExpressionTransformerTask {
			return callExpressionTransformer_functionalGeneric("isReturn", false, isReturn)
		},
		"equalsFunction": func() callExpressionTransformerTask {
			return callExpressionTransformer_functionalGeneric("equalsFunction", true, isFunction)
		},
		"equalsParameters": func() callExpressionTransformerTask {
			return callExpressionTransformer_functionalGeneric("equalsParameters", true, isParameters)
		},
		"equalsReturn": func() callExpressionTransformerTask {
			return callExpressionTransformer_functionalGeneric("equalsReturn", true, isReturn)
		},
		"validateFunction": func() callExpressionTransformerTask {
			return callExpressionTransformer_functionalGeneric("validateFunction", false, validateFunction)
		},
		"validateParameters": func() callExpressionTransformerTask {
			return callExpressionTransformer_functionalGeneric("validateParameters", false, validateParameters)
		},
		"validateReturn": func() callExpressionTransformerTask {
			return callExpressionTransformer_functionalGeneric("validateReturn", false, validateReturn)
		},
		"validateEqualsFunction": func() callExpressionTransformerTask {
			return callExpressionTransformer_functionalGeneric("validateEqualsFunction", true, validateFunction)
		},
		"validateEqualsParameters": func() callExpressionTransformerTask {
			return callExpressionTransformer_functionalGeneric("validateEqualsParameters", true, validateParameters)
		},
		"validateEqualsReturn": func() callExpressionTransformerTask {
			return callExpressionTransformer_functionalGeneric("validateEqualsReturn", true, validateReturn)
		},
	}
}

func callExpressionTransformer_notations() map[string]callExpressionTransformerFunctor {
	camel := nativenotationprogrammers.NotationGeneralProgrammer_Camel
	pascal := nativenotationprogrammers.NotationGeneralProgrammer_Pascal
	snake := nativenotationprogrammers.NotationGeneralProgrammer_Snake
	return map[string]callExpressionTransformerFunctor{
		"camel": func() callExpressionTransformerTask {
			return nativenotationtransformers.NotationGeneralTransformer.Transform(camel)
		},
		"assertCamel": func() callExpressionTransformerTask {
			return nativenotationtransformers.NotationAssertGeneralTransformer.Transform(camel)
		},
		"isCamel": func() callExpressionTransformerTask {
			return nativenotationtransformers.NotationIsGeneralTransformer.Transform(camel)
		},
		"validateCamel": func() callExpressionTransformerTask {
			return nativenotationtransformers.NotationValidateGeneralTransformer.Transform(camel)
		},
		"pascal": func() callExpressionTransformerTask {
			return nativenotationtransformers.NotationGeneralTransformer.Transform(pascal)
		},
		"assertPascal": func() callExpressionTransformerTask {
			return nativenotationtransformers.NotationAssertGeneralTransformer.Transform(pascal)
		},
		"isPascal": func() callExpressionTransformerTask {
			return nativenotationtransformers.NotationIsGeneralTransformer.Transform(pascal)
		},
		"validatePascal": func() callExpressionTransformerTask {
			return nativenotationtransformers.NotationValidateGeneralTransformer.Transform(pascal)
		},
		"snake": func() callExpressionTransformerTask {
			return nativenotationtransformers.NotationGeneralTransformer.Transform(snake)
		},
		"assertSnake": func() callExpressionTransformerTask {
			return nativenotationtransformers.NotationAssertGeneralTransformer.Transform(snake)
		},
		"isSnake": func() callExpressionTransformerTask {
			return nativenotationtransformers.NotationIsGeneralTransformer.Transform(snake)
		},
		"validateSnake": func() callExpressionTransformerTask {
			return nativenotationtransformers.NotationValidateGeneralTransformer.Transform(snake)
		},
		"createCamel": func() callExpressionTransformerTask {
			return nativenotationtransformers.NotationCreateGeneralTransformer.Transform(camel)
		},
		"createAssertCamel": func() callExpressionTransformerTask {
			return nativenotationtransformers.NotationCreateAssertGeneralTransformer.Transform(camel)
		},
		"createIsCamel": func() callExpressionTransformerTask {
			return nativenotationtransformers.NotationCreateIsGeneralTransformer.Transform(camel)
		},
		"createValidateCamel": func() callExpressionTransformerTask {
			return nativenotationtransformers.NotationCreateValidateGeneralTransformer.Transform(camel)
		},
		"createPascal": func() callExpressionTransformerTask {
			return nativenotationtransformers.NotationCreateGeneralTransformer.Transform(pascal)
		},
		"createAssertPascal": func() callExpressionTransformerTask {
			return nativenotationtransformers.NotationCreateAssertGeneralTransformer.Transform(pascal)
		},
		"createIsPascal": func() callExpressionTransformerTask {
			return nativenotationtransformers.NotationCreateIsGeneralTransformer.Transform(pascal)
		},
		"createValidatePascal": func() callExpressionTransformerTask {
			return nativenotationtransformers.NotationCreateValidateGeneralTransformer.Transform(pascal)
		},
		"createSnake": func() callExpressionTransformerTask {
			return nativenotationtransformers.NotationCreateGeneralTransformer.Transform(snake)
		},
		"createAssertSnake": func() callExpressionTransformerTask {
			return nativenotationtransformers.NotationCreateAssertGeneralTransformer.Transform(snake)
		},
		"createIsSnake": func() callExpressionTransformerTask {
			return nativenotationtransformers.NotationCreateIsGeneralTransformer.Transform(snake)
		},
		"createValidateSnake": func() callExpressionTransformerTask {
			return nativenotationtransformers.NotationCreateValidateGeneralTransformer.Transform(snake)
		},
	}
}

func callExpressionTransformer_functionalGeneric(method string, equals bool, programmer func(nativefunctionaltransformers.FunctionalGenericTransformer_IProgrammerProps) *shimast.Node) callExpressionTransformerTask {
	return nativefunctionaltransformers.FunctionalGenericTransformer.Transform(nativefunctionaltransformers.FunctionalGenericTransformer_ISpecification{
		Method:     method,
		Config:     nativefunctionaltransformers.FunctionalGenericTransformer_IConfig{Equals: equals},
		Programmer: programmer,
	})
}

func callExpressionTransformer_functionalAssertFunction(props nativefunctionaltransformers.FunctionalGenericTransformer_IProgrammerProps) *shimast.Node {
	return nativefunctionalprogrammers.FunctionalAssertFunctionProgrammer.Write(nativefunctionalprogrammers.FunctionalAssertFunctionProgrammer_IProps{
		Context: props.Context, Modulo: props.Modulo, Config: nativefunctionalprogrammers.FunctionalAssertFunctionProgrammer_IConfig{Equals: props.Config.Equals}, Declaration: props.Declaration, Expression: props.Expression, Init: props.Init,
	})
}

func callExpressionTransformer_functionalAssertParameters(props nativefunctionaltransformers.FunctionalGenericTransformer_IProgrammerProps) *shimast.Node {
	return nativefunctionalprogrammers.FunctionalAssertParametersProgrammer.Write(nativefunctionalprogrammers.FunctionalAssertParametersProgrammer_IProps{
		Context: props.Context, Modulo: props.Modulo, Config: nativefunctionalprogrammers.FunctionalAssertParametersProgrammer_IConfig{Equals: props.Config.Equals}, Declaration: props.Declaration, Expression: props.Expression, Init: props.Init,
	})
}

func callExpressionTransformer_functionalAssertReturn(props nativefunctionaltransformers.FunctionalGenericTransformer_IProgrammerProps) *shimast.Node {
	return nativefunctionalprogrammers.FunctionAssertReturnProgrammer.Write(nativefunctionalprogrammers.FunctionAssertReturnProgrammer_IProps{
		Context: props.Context, Modulo: props.Modulo, Config: nativefunctionalprogrammers.FunctionAssertReturnProgrammer_IConfig{Equals: props.Config.Equals}, Declaration: props.Declaration, Expression: props.Expression, Init: props.Init,
	})
}

func callExpressionTransformer_functionalIsFunction(props nativefunctionaltransformers.FunctionalGenericTransformer_IProgrammerProps) *shimast.Node {
	return nativefunctionalprogrammers.FunctionalIsFunctionProgrammer.Write(nativefunctionalprogrammers.FunctionalIsFunctionProgrammer_IProps{
		Context: props.Context, Modulo: props.Modulo, Config: nativefunctionalprogrammers.FunctionalIsFunctionProgrammer_IConfig{Equals: props.Config.Equals}, Declaration: props.Declaration, Expression: props.Expression, Init: props.Init,
	})
}

func callExpressionTransformer_functionalIsParameters(props nativefunctionaltransformers.FunctionalGenericTransformer_IProgrammerProps) *shimast.Node {
	return nativefunctionalprogrammers.FunctionalIsParametersProgrammer.Write(nativefunctionalprogrammers.FunctionalIsParametersProgrammer_IProps{
		Context: props.Context, Modulo: props.Modulo, Config: nativefunctionalprogrammers.FunctionalIsParametersProgrammer_IConfig{Equals: props.Config.Equals}, Declaration: props.Declaration, Expression: props.Expression, Init: props.Init,
	})
}

func callExpressionTransformer_functionalIsReturn(props nativefunctionaltransformers.FunctionalGenericTransformer_IProgrammerProps) *shimast.Node {
	return nativefunctionalprogrammers.FunctionalIsReturnProgrammer.Write(nativefunctionalprogrammers.FunctionalIsReturnProgrammer_IProps{
		Context: props.Context, Modulo: props.Modulo, Config: nativefunctionalprogrammers.FunctionalIsReturnProgrammer_IConfig{Equals: props.Config.Equals}, Declaration: props.Declaration, Expression: props.Expression, Init: props.Init,
	})
}

func callExpressionTransformer_functionalValidateFunction(props nativefunctionaltransformers.FunctionalGenericTransformer_IProgrammerProps) *shimast.Node {
	return nativefunctionalprogrammers.FunctionalValidateFunctionProgrammer.Write(nativefunctionalprogrammers.FunctionalValidateFunctionProgrammer_IProps{
		Context: props.Context, Modulo: props.Modulo, Config: nativefunctionalprogrammers.FunctionalValidateFunctionProgrammer_IConfig{Equals: props.Config.Equals}, Declaration: props.Declaration, Expression: props.Expression, Init: props.Init,
	})
}

func callExpressionTransformer_functionalValidateParameters(props nativefunctionaltransformers.FunctionalGenericTransformer_IProgrammerProps) *shimast.Node {
	return nativefunctionalprogrammers.FunctionalValidateParametersProgrammer.Write(nativefunctionalprogrammers.FunctionalValidateParametersProgrammer_IProps{
		Context: props.Context, Modulo: props.Modulo, Config: nativefunctionalprogrammers.FunctionalValidateParametersProgrammer_IConfig{Equals: props.Config.Equals}, Declaration: props.Declaration, Expression: props.Expression, Init: props.Init,
	})
}

func callExpressionTransformer_functionalValidateReturn(props nativefunctionaltransformers.FunctionalGenericTransformer_IProgrammerProps) *shimast.Node {
	return nativefunctionalprogrammers.FunctionalValidateReturnProgrammer.Write(nativefunctionalprogrammers.FunctionalValidateReturnProgrammer_IProps{
		Context: props.Context, Modulo: props.Modulo, Config: nativefunctionalprogrammers.FunctionalValidateReturnProgrammer_IConfig{Equals: props.Config.Equals}, Declaration: props.Declaration, Expression: props.Expression, Init: props.Init,
	})
}
