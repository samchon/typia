package reflect

import (
  "fmt"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimchecker "github.com/microsoft/typescript-go/shim/checker"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type reflectLiteralsProgrammerNamespace struct{}

var ReflectLiteralsProgrammer = reflectLiteralsProgrammerNamespace{}

type ReflectLiteralsProgrammer_IProps struct {
  Context nativecontext.ITypiaContext
  Type    *shimchecker.Type
}

var reflectLiteralsProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (reflectLiteralsProgrammerNamespace) Write(props ReflectLiteralsProgrammer_IProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(reflectLiteralsProgrammer_factory, props.Context.Emit)
  result := nativefactories.MetadataFactory.Analyze(nativefactories.MetadataFactory_IProps{
    Checker: props.Context.Checker,
    Options: nativefactories.MetadataFactory_IOptions{
      Escape:   true,
      Constant: true,
      Absorb:   true,
      // Accept exactly what the emitter below can render: constant literals,
      // the `boolean` atomic (the `true | false` union), and `null`. The
      // counts are the whole predicate, so both sides must weigh `null`:
      // `Nullable` is a flag rather than a bucket, so `MetadataSchema.Size()`
      // never sees it and `literals<null>()` -- a type argument the public
      // `T extends Atomic.Type | null` signature documents -- used to be
      // rejected as carrying no literal at all.
      //
      // The empty union is `never`, whose metadata carries no member on either
      // side. It is vacuously literal-only and `literals<never>(): never[]`
      // has exactly one inhabitant, so it emits `[]` instead of a diagnostic
      // (issue #2377).
      Validate: func(next struct {
        Metadata *nativemetadata.MetadataSchema
        Explore  nativefactories.MetadataFactory_IExplore
        Top      *nativemetadata.MetadataSchema
      }) []string {
        length := 0
        for _, constant := range next.Metadata.Constants {
          length += len(constant.Values)
        }
        for _, atomic := range next.Metadata.Atomics {
          if atomic.Type == "boolean" {
            length++
          }
        }
        size := next.Metadata.Size()
        if next.Metadata.Nullable {
          length++
          size++
        }
        if size == length {
          return []string{}
        }
        if length == 0 {
          return []string{string(ReflectLiteralsProgrammer_ErrorMessages_NO)}
        }
        return []string{string(ReflectLiteralsProgrammer_ErrorMessages_ONLY)}
      },
    },
    Components: nativemetadata.NewMetadataCollection(),
    Type:       props.Type,
  })
  if result.Success == false {
    panic(nativecontext.TransformerError_from(struct {
      Code   string
      Errors []nativecontext.TransformerError_MetadataFactory_IError
    }{
      Code:   "typia.reflect.literals",
      Errors: reflectLiteralsProgrammer_errors(result.Errors),
    }))
  }

  metadata := result.Data
  values := []any{}
  visited := map[string]bool{}
  add := func(value any) {
    key := fmt.Sprintf("%T:%v", value, value)
    if visited[key] {
      return
    }
    visited[key] = true
    values = append(values, value)
  }
  for _, constant := range metadata.Constants {
    for _, value := range constant.Values {
      add(value.Value)
    }
  }
  for _, atomic := range metadata.Atomics {
    if atomic.Type == "boolean" {
      add(true)
      add(false)
      break
    }
  }
  if metadata.Nullable {
    add(nil)
  }
  return f.NewAsExpression(
    nativefactories.LiteralFactory.Write(values, props.Context.Emit),
    f.NewTypeReferenceNode(
      f.NewIdentifier("const"),
      nil,
    ),
  )
}

type ReflectLiteralsProgrammer_ErrorMessages string

const (
  ReflectLiteralsProgrammer_ErrorMessages_NO   ReflectLiteralsProgrammer_ErrorMessages = "no constant literal type found."
  ReflectLiteralsProgrammer_ErrorMessages_ONLY ReflectLiteralsProgrammer_ErrorMessages = "only constant literal types are allowed."
)

func reflectLiteralsProgrammer_errors(errors []nativefactories.MetadataFactory_IError) []nativecontext.TransformerError_MetadataFactory_IError {
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
