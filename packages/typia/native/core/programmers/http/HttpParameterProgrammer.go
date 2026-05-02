package http

import (
  "sort"
  "strings"
  "unicode"
  "unicode/utf8"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type httpParameterProgrammerNamespace struct{}

var HttpParameterProgrammer = httpParameterProgrammerNamespace{}

var httpParameterProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (httpParameterProgrammerNamespace) Write(props nativecontext.IProgrammerProps) *shimast.Node {
  result := nativefactories.MetadataFactory.Analyze(nativefactories.MetadataFactory_IProps{
    Checker:     props.Context.Checker,
    Transformer: props.Context.Transformer,
    Options: nativefactories.MetadataFactory_IOptions{
      Escape:   false,
      Constant: true,
      Absorb:   true,
      Validate: httpParameterProgrammer_validate,
    },
    Components: schemametadata.NewMetadataCollection(),
    Type:       props.Type,
  })
  if result.Success == false {
    code := ""
    if props.Modulo != nil {
      code = props.Modulo.Text()
    }
    panic(nativecontext.TransformerError_from(struct {
      Code   string
      Errors []nativecontext.TransformerError_MetadataFactory_IError
    }{
      Code:   code,
      Errors: httpParameterProgrammer_errors(result.Errors),
    }))
  }

  atomic := httpParameterProgrammer_firstAtomic(result.Data)
  context := props.Context
  context.Options.Numeric = httpParameterProgrammer_bool(true)
  block := []*shimast.Node{
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
      Name: "assert",
      Value: nativeprogrammers.AssertProgrammer.Write(nativeprogrammers.AssertProgrammer_IProps{
        Context: context,
        Modulo:  props.Modulo,
        Type:    props.Type,
        Name:    props.Name,
        Init:    props.Init,
        Config: nativeprogrammers.AssertProgrammer_IConfig{
          Equals: false,
          Guard:  false,
        },
      }),
    }),
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
      Name: "value",
      Value: httpParameterProgrammer_factory.NewCallExpression(
        httpParameterProgrammer_internal(props.Context, "httpParameterRead"+httpParameterProgrammer_capitalize(atomic)),
        nil,
        nil,
        httpParameterProgrammer_factory.NewNodeList([]*shimast.Node{
          httpParameterProgrammer_factory.NewIdentifier("input"),
        }),
        shimast.NodeFlagsNone,
      ),
    }),
    httpParameterProgrammer_factory.NewReturnStatement(httpParameterProgrammer_factory.NewCallExpression(
      httpParameterProgrammer_factory.NewIdentifier("assert"),
      nil,
      nil,
      httpParameterProgrammer_factory.NewNodeList([]*shimast.Node{
        httpParameterProgrammer_factory.NewIdentifier("value"),
      }),
      shimast.NodeFlagsNone,
    )),
  }

  return httpParameterProgrammer_factory.NewArrowFunction(
    nil,
    nil,
    httpParameterProgrammer_factory.NewNodeList([]*shimast.Node{
      nativefactories.IdentifierFactory.Parameter("input", nativefactories.TypeFactory.Keyword("string"), nil),
    }),
    httpParameterProgrammer_factory.NewTypeReferenceNode(httpParameterProgrammer_factory.NewIdentifier(httpParameterProgrammer_typeName(props)), nil),
    nil,
    httpParameterProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
    httpParameterProgrammer_factory.NewBlock(httpParameterProgrammer_factory.NewNodeList(block), true),
  )
}

func httpParameterProgrammer_validate(props struct {
  Metadata *schemametadata.MetadataSchema
  Explore  nativefactories.MetadataFactory_IExplore
  Top      *schemametadata.MetadataSchema
}) []string {
  errors := []string{}
  insert := func(msg string) {
    errors = append(errors, msg)
  }

  if props.Metadata.Any {
    insert("do not allow any type")
  }
  if props.Metadata.IsRequired() == false {
    insert("do not allow undefindable type")
  }

  atomics := nativehelpers.HttpMetadataUtil.Atomics(props.Metadata)
  expected := len(props.Metadata.Atomics) + len(props.Metadata.Templates)
  for _, c := range props.Metadata.Constants {
    expected += len(c.Values)
  }
  if props.Metadata.Size() != expected || len(atomics) == 0 {
    insert("only atomic or constant types are allowed")
  }
  if len(atomics) > 1 {
    insert("do not allow union type")
  }
  return errors
}

func httpParameterProgrammer_firstAtomic(metadata *schemametadata.MetadataSchema) string {
  atomics := nativehelpers.HttpMetadataUtil.Atomics(metadata)
  keys := make([]string, 0, len(atomics))
  for key := range atomics {
    keys = append(keys, key)
  }
  sort.Strings(keys)
  if len(keys) == 0 {
    return "string"
  }
  return keys[0]
}

func httpParameterProgrammer_typeName(props nativecontext.IProgrammerProps) string {
  if props.Name != nil {
    return *props.Name
  }
  return nativefactories.TypeFactory.GetFullName(nativefactories.TypeFactory_GetFullNameProps{
    Checker: props.Context.Checker,
    Type:    props.Type,
  })
}

func httpParameterProgrammer_internal(context nativecontext.ITypiaContext, name string) *shimast.Node {
  if importer, ok := context.Importer.(interface{ Internal(string) *shimast.Node }); ok {
    return importer.Internal(name)
  }
  return httpParameterProgrammer_factory.NewIdentifier(name)
}

func httpParameterProgrammer_capitalize(str string) string {
  str = strings.TrimSpace(str)
  if str == "" {
    return str
  }
  r, size := utf8.DecodeRuneInString(str)
  return string(unicode.ToUpper(r)) + str[size:]
}

func httpParameterProgrammer_bool(value bool) *bool {
  return &value
}

func httpParameterProgrammer_errors(errors []nativefactories.MetadataFactory_IError) []nativecontext.TransformerError_MetadataFactory_IError {
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
      Messages: append([]string{}, err.Messages...),
    })
  }
  return output
}
