package transform

import (
  "path/filepath"
  "strings"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
  nativefunctionalprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers/functional"
  nativenotationprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers/notations"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  nativefeatures "github.com/samchon/typia/packages/typia/native/transform/features"
  nativecomparetransformers "github.com/samchon/typia/packages/typia/native/transform/features/compare"
  nativefunctionaltransformers "github.com/samchon/typia/packages/typia/native/transform/features/functional"
  nativehttptransformers "github.com/samchon/typia/packages/typia/native/transform/features/http"
  nativejsontransformers "github.com/samchon/typia/packages/typia/native/transform/features/json"
  nativellmtransformers "github.com/samchon/typia/packages/typia/native/transform/features/llm"
  nativenotationtransformers "github.com/samchon/typia/packages/typia/native/transform/features/notations"
  nativeplaintransformers "github.com/samchon/typia/packages/typia/native/transform/features/plain"
  nativeprotobuftransformers "github.com/samchon/typia/packages/typia/native/transform/features/protobuf"
  nativereflecttransformers "github.com/samchon/typia/packages/typia/native/transform/features/reflect"
)

type callExpressionTransformerNamespace struct{}

var CallExpressionTransformer = callExpressionTransformerNamespace{}

type CallExpressionTransformer_TransformProps struct {
  Context    nativecontext.ITypiaContext
  Expression *shimast.CallExpression
}

type CallExpressionTransformer_TransformKnownProps struct {
  Context    nativecontext.ITypiaContext
  Expression *shimast.CallExpression
  Module     string
  Method     string
}

type callExpressionTransformerTask func(props ITransformProps) *shimast.Node

type callExpressionTransformerFunctor func() callExpressionTransformerTask

var callExpressionTransformer_functors = callExpressionTransformer_createFunctors()

func (callExpressionTransformerNamespace) Transform(props CallExpressionTransformer_TransformProps) *shimast.Node {
  if props.Expression == nil {
    return nil
  }
  // Report what SELECTS this callee before asking what it resolved to (project
  // transform mode only; a no-op otherwise). Typia-ness is decided by the file
  // that declares the resolved signature, so the modules an import or re-export
  // chain traverses decide whether this call is rewritten -- and the report has
  // to happen for a rejected call too, because that is the one an edit to one
  // of those modules turns into a generated validator.
  schemametadata.MetadataDependency_touchCallee(props.Context.Checker, props.Expression.Expression)
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
  module, ok := callExpressionTransformer_targetModule(location)
  if ok == false {
    callExpressionTransformer_rejectShadowedTypia(props, location)
    return props.Expression.AsNode()
  }
  typ := props.Context.Checker.GetTypeAtLocation(declaration)
  if typ == nil || typ.Symbol() == nil {
    return props.Expression.AsNode()
  }
  name := typ.Symbol().Name
  return CallExpressionTransformer.TransformKnown(CallExpressionTransformer_TransformKnownProps{
    Context:    props.Context,
    Expression: props.Expression,
    Module:     module,
    Method:     name,
  })
}

func (callExpressionTransformerNamespace) TransformKnown(props CallExpressionTransformer_TransformKnownProps) *shimast.Node {
  if props.Expression == nil {
    return nil
  }
  functors := callExpressionTransformer_FUNCTORS()
  functor, ok := functors[props.Module][props.Method]
  if ok == false {
    return props.Expression.AsNode()
  }
  // Report the WRITTEN type arguments of the typia call to the dependency
  // listener (project transform mode only; a no-op otherwise). The metadata
  // analysis touches every checker type it reads, but a top-level alias of an
  // intrinsic (`typia.validate<Id>()` with `type Id = string` elsewhere) leaves
  // no symbol on the resolved type, so the call site's own syntax is the only
  // anchor that registers such an alias' declaring file.
  //
  // A call that writes no type argument takes its validated type from the value
  // argument instead, and no walk bounds where that type was decided: contextual
  // typing can put the deciding annotation in a file the resolved type never
  // names. Report it as unbounded, which costs the file its completeness
  // declaration rather than vouching for a list that cannot cover it.
  if props.Expression.TypeArguments != nil && len(props.Expression.TypeArguments.Nodes) != 0 {
    for _, argument := range props.Expression.TypeArguments.Nodes {
      schemametadata.MetadataDependency_touchTypeNode(props.Context.Checker, argument)
    }
  } else {
    schemametadata.MetadataDependency_unbounded(props.Context.Checker)
  }
  // Keep the full callee expression (e.g. `typia.assertEquals`) as the modulo,
  // mirroring the TypeScript transformer. Programmers render it into the
  // TypeGuardError method label via nativehelpers.ModuloMethodText, which reads
  // the source-span text so the `typia.` qualifier is preserved. (Reducing it
  // to the bare name dropped the prefix, so errors reported `assertEquals`
  // instead of `typia.assertEquals`.)
  modulo := props.Expression.Expression
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

func callExpressionTransformer_targetModule(location string) (string, bool) {
  location = filepath.ToSlash(location)
  for file := range callExpressionTransformer_FUNCTORS() {
    if strings.HasSuffix(location, "/typia/lib/"+file+".d.ts") ||
      strings.HasSuffix(location, "/typia/src/"+file+".ts") {
      return file, true
    }
  }
  return "", false
}

// callExpressionTransformer_rejectShadowedTypia raises a diagnostic when a call
// the file-path identity test rejected is nevertheless a typia call the author
// expects to be transformed, and names the file that declared it instead.
//
// Attribution by declaration file is deliberate: accepting a callee declared
// anywhere else would let any package claim typia's transform, which is the
// boundary default_library_spoof_native_identity_transform_test.go and
// lib_replacement_native_identity_transform_test.go protect. That check is not
// relaxed here. Silence is what needs correcting. A project-local `declare
// module "typia"` moves the resolved signature's declaration out of typia's own
// files, so the call is left untransformed with no diagnostic at all and the
// failure surfaces only at run time as `no transform has been configured`
// (samchon/typia#2328).
//
// Three conditions have to hold together, so an unrelated local function that
// happens to share a name with a typia operation cannot trip this:
//
//  1. the callee spells an operation this transformer owns, in the namespace it
//     actually lives in — `typia.json.assertParse`, never `typia.assertParse`;
//  2. the root of the callee expression resolves to an import binding; and
//  3. that import's module specifier is typia's own.
//
// Known gap: an alias chain is not followed, so a project that re-exports typia
// through its own barrel and then shadows it is still silent. The specifier of
// the import the call actually reads is the only evidence this collects.
func callExpressionTransformer_rejectShadowedTypia(props CallExpressionTransformer_TransformProps, location string) {
  code, ok := callExpressionTransformer_calleeOperation(props.Expression.Expression)
  if ok == false {
    return
  }
  root := callExpressionTransformer_calleeRoot(props.Expression.Expression)
  if root == nil || root.Kind != shimast.KindIdentifier {
    return
  }
  symbol := props.Context.Checker.GetSymbolAtLocation(root)
  if symbol == nil || symbol.Flags&shimast.SymbolFlagsAlias == 0 {
    return
  }
  for _, declaration := range symbol.Declarations {
    if callExpressionTransformer_importsTypia(declaration) == false {
      continue
    }
    // State only what was observed. The declaration file is the fact; a
    // `declare module "typia"` is the usual cause but not the only way to move
    // a declaration, and naming it as the cause would misdirect anyone whose
    // build got here another way.
    panic(nativecontext.NewTransformerError(nativecontext.TransformerError_IProps{
      Code: code,
      Message: "this call was declared in " +
        filepath.ToSlash(location) +
        ", not in typia's own module, so no transform was applied. A project-local `declare module \"typia\"` is the usual cause; remove it, or give the redeclaration another module name.",
    }))
  }
}

// callExpressionTransformer_calleeOperation answers whether a callee expression
// spells one of this transformer's operations, and returns the diagnostic code
// for it — the written spelling, qualified as `typia.json.assertParse`.
//
// The namespace is part of the spelling. `typia.json.assertParse` names the
// `json` table, while `typia.createAssert` and a bare named import name the root
// `module` table; a root-level `typia.assertParse` matches nothing, because that
// operation does not live there. Matching a flat union of every table's names
// instead would report a module augmentation that adds an unrelated `parse` or
// `schema` to typia, which is a build that works today.
//
// Known gap: taking the namespace from the spelling means a renamed binding
// (`import { json as j } from "typia"; j.assertParse(...)`) is not recognized.
func callExpressionTransformer_calleeOperation(callee *shimast.Node) (string, bool) {
  method := ""
  first := true
  // Segments to the left of the method, nearest first: `typia.json.assertParse`
  // collects ["json", "typia"].
  parts := []string{}
  for current := callee; current != nil; {
    if len(parts) > 2 {
      return "", false
    }
    segment := ""
    switch current.Kind {
    case shimast.KindPropertyAccessExpression:
      access := current.AsPropertyAccessExpression()
      name := access.Name()
      if name == nil || name.Kind != shimast.KindIdentifier {
        return "", false
      }
      segment = name.Text()
      current = access.Expression
    case shimast.KindIdentifier:
      segment = current.Text()
      current = nil
    default:
      return "", false
    }
    if first {
      method = segment
      first = false
    } else {
      parts = append(parts, segment)
    }
  }
  if method == "" || len(parts) > 2 {
    return "", false
  }
  functors := callExpressionTransformer_FUNCTORS()
  // `typia.json.assertParse` and `json.assertParse` both name the `json` table
  // through the segment directly left of the method.
  if len(parts) != 0 {
    if _, found := functors[parts[0]][method]; found {
      return "typia." + parts[0] + "." + method, true
    }
  }
  // `typia.createAssert` and a bare `createAssert` name the root table. The
  // qualifier, when present, is the imported binding rather than a namespace.
  if len(parts) <= 1 {
    if _, found := functors["module"][method]; found {
      return "typia." + method, true
    }
  }
  return "", false
}

// callExpressionTransformer_calleeRoot walks a property-access chain down to the
// expression it starts from, which is the binding that has to come from typia.
func callExpressionTransformer_calleeRoot(callee *shimast.Node) *shimast.Node {
  current := callee
  for current != nil && current.Kind == shimast.KindPropertyAccessExpression {
    current = current.AsPropertyAccessExpression().Expression
  }
  return current
}

// callExpressionTransformer_importsTypia answers whether an alias declaration
// belongs to an import whose module specifier is typia's own. Both `import ...
// from "typia"` and `import typia = require("typia")` are matched; the walk
// stops at the source file so a local declaration can never reach an unrelated
// import above it.
func callExpressionTransformer_importsTypia(declaration *shimast.Node) bool {
  for node := declaration; node != nil; node = node.Parent {
    switch node.Kind {
    case shimast.KindImportDeclaration:
      return callExpressionTransformer_isTypiaSpecifier(node.ModuleSpecifier())
    case shimast.KindImportEqualsDeclaration:
      reference := node.AsImportEqualsDeclaration().ModuleReference
      if reference == nil || reference.Kind != shimast.KindExternalModuleReference {
        return false
      }
      return callExpressionTransformer_isTypiaSpecifier(reference.AsExternalModuleReference().Expression)
    case shimast.KindSourceFile:
      return false
    }
  }
  return false
}

// callExpressionTransformer_isTypiaSpecifier accepts typia's own package name
// and its subpaths, and nothing that merely begins with those letters: a
// `typia-codegen` package is a different package.
func callExpressionTransformer_isTypiaSpecifier(specifier *shimast.Node) bool {
  if specifier == nil || specifier.Kind != shimast.KindStringLiteral {
    return false
  }
  text := specifier.AsStringLiteral().Text
  return text == "typia" || strings.HasPrefix(text, "typia/")
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
  return callExpressionTransformer_functors
}

func callExpressionTransformer_createFunctors() map[string]map[string]callExpressionTransformerFunctor {
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
      "shallow": func() callExpressionTransformerTask {
        return nativefeatures.ShallowTransformer.Transform(nativeprogrammers.IsProgrammer_IConfig{Equals: false})
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
      "createShallow": func() callExpressionTransformerTask {
        return nativefeatures.CreateShallowTransformer.Transform(nativeprogrammers.IsProgrammer_IConfig{Equals: false})
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
      "literals": func() callExpressionTransformerTask {
        return nativereflecttransformers.ReflectLiteralsTransformer.Transform
      },
    },
    "compare": {
      "equals": func() callExpressionTransformerTask {
        return nativecomparetransformers.CompareEqualTransformer.Transform
      },
      "cover": func() callExpressionTransformerTask {
        return nativecomparetransformers.CompareCoverTransformer.Transform
      },
      "less": func() callExpressionTransformerTask {
        return nativecomparetransformers.CompareLessTransformer.Transform
      },
      "createEquals": func() callExpressionTransformerTask {
        return nativecomparetransformers.CompareCreateEqualTransformer.Transform
      },
      "createCover": func() callExpressionTransformerTask {
        return nativecomparetransformers.CompareCreateCoverTransformer.Transform
      },
      "createLess": func() callExpressionTransformerTask {
        return nativecomparetransformers.CompareCreateLessTransformer.Transform
      },
    },
    "plain": {
      "clone": func() callExpressionTransformerTask { return nativeplaintransformers.PlainCloneTransformer.Transform },
      "assertClone": func() callExpressionTransformerTask {
        return nativeplaintransformers.PlainAssertCloneTransformer.Transform
      },
      "isClone": func() callExpressionTransformerTask { return nativeplaintransformers.PlainIsCloneTransformer.Transform },
      "validateClone": func() callExpressionTransformerTask {
        return nativeplaintransformers.PlainValidateCloneTransformer.Transform
      },
      "prune": func() callExpressionTransformerTask { return nativeplaintransformers.PlainPruneTransformer.Transform },
      "assertPrune": func() callExpressionTransformerTask {
        return nativeplaintransformers.PlainAssertPruneTransformer.Transform
      },
      "isPrune": func() callExpressionTransformerTask { return nativeplaintransformers.PlainIsPruneTransformer.Transform },
      "validatePrune": func() callExpressionTransformerTask {
        return nativeplaintransformers.PlainValidatePruneTransformer.Transform
      },
      "createClone": func() callExpressionTransformerTask {
        return nativeplaintransformers.PlainCreateCloneTransformer.Transform
      },
      "createAssertClone": func() callExpressionTransformerTask {
        return nativeplaintransformers.PlainCreateAssertCloneTransformer.Transform
      },
      "createIsClone": func() callExpressionTransformerTask {
        return nativeplaintransformers.PlainCreateIsCloneTransformer.Transform
      },
      "createValidateClone": func() callExpressionTransformerTask {
        return nativeplaintransformers.PlainCreateValidateCloneTransformer.Transform
      },
      "createPrune": func() callExpressionTransformerTask {
        return nativeplaintransformers.PlainCreatePruneTransformer.Transform
      },
      "createAssertPrune": func() callExpressionTransformerTask {
        return nativeplaintransformers.PlainCreateAssertPruneTransformer.Transform
      },
      "createIsPrune": func() callExpressionTransformerTask {
        return nativeplaintransformers.PlainCreateIsPruneTransformer.Transform
      },
      "createValidatePrune": func() callExpressionTransformerTask {
        return nativeplaintransformers.PlainCreateValidatePruneTransformer.Transform
      },
      "classify": func() callExpressionTransformerTask {
        return nativeplaintransformers.PlainClassifyTransformer.Transform
      },
      "assertClassify": func() callExpressionTransformerTask {
        return nativeplaintransformers.PlainAssertClassifyTransformer.Transform
      },
      "validateClassify": func() callExpressionTransformerTask {
        return nativeplaintransformers.PlainValidateClassifyTransformer.Transform
      },
      "createClassify": func() callExpressionTransformerTask {
        return nativeplaintransformers.PlainCreateClassifyTransformer.Transform
      },
      "createAssertClassify": func() callExpressionTransformerTask {
        return nativeplaintransformers.PlainCreateAssertClassifyTransformer.Transform
      },
      "createValidateClassify": func() callExpressionTransformerTask {
        return nativeplaintransformers.PlainCreateValidateClassifyTransformer.Transform
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
  kebab := nativenotationprogrammers.NotationGeneralProgrammer_Kebab
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
    "kebab": func() callExpressionTransformerTask {
      return nativenotationtransformers.NotationGeneralTransformer.Transform(kebab)
    },
    "assertKebab": func() callExpressionTransformerTask {
      return nativenotationtransformers.NotationAssertGeneralTransformer.Transform(kebab)
    },
    "isKebab": func() callExpressionTransformerTask {
      return nativenotationtransformers.NotationIsGeneralTransformer.Transform(kebab)
    },
    "validateKebab": func() callExpressionTransformerTask {
      return nativenotationtransformers.NotationValidateGeneralTransformer.Transform(kebab)
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
    "createKebab": func() callExpressionTransformerTask {
      return nativenotationtransformers.NotationCreateGeneralTransformer.Transform(kebab)
    },
    "createAssertKebab": func() callExpressionTransformerTask {
      return nativenotationtransformers.NotationCreateAssertGeneralTransformer.Transform(kebab)
    },
    "createIsKebab": func() callExpressionTransformerTask {
      return nativenotationtransformers.NotationCreateIsGeneralTransformer.Transform(kebab)
    },
    "createValidateKebab": func() callExpressionTransformerTask {
      return nativenotationtransformers.NotationCreateValidateGeneralTransformer.Transform(kebab)
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
