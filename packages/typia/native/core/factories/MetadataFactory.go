package factories

import (
  nativechecker "github.com/microsoft/typescript-go/shim/checker"
  nativemetadata "github.com/samchon/typia/packages/typia/native/core/factories/internal/metadata"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type metadataFactoryNamespace struct{}

var MetadataFactory = metadataFactoryNamespace{}

func init() {
  nativemetadata.MetadataTypeTagAnalyzer = func(props struct {
    Errors  *[]nativemetadata.MetadataFactory_IError
    Type    string
    Objects []*schemametadata.MetadataObjectType
    Explore nativemetadata.MetadataFactory_IExplore
  }) []schemametadata.IMetadataTypeTag {
    return MetadataTypeTagFactory.Analyze(struct {
      Errors  *[]MetadataFactory_IError
      Type    string
      Objects []*schemametadata.MetadataObjectType
      Explore MetadataFactory_IExplore
    }{
      Errors:  props.Errors,
      Type:    props.Type,
      Objects: props.Objects,
      Explore: props.Explore,
    })
  }
}

type MetadataFactory_Validator = func(props struct {
  Metadata *schemametadata.MetadataSchema
  Explore  MetadataFactory_IExplore
  Top      *schemametadata.MetadataSchema
}) []string

type MetadataFactory_IOptions = nativemetadata.MetadataFactory_IOptions
type MetadataFactory_IExplore = nativemetadata.MetadataFactory_IExplore
type MetadataFactory_IError = nativemetadata.MetadataFactory_IError

type MetadataFactory_IProps struct {
  Checker     *nativechecker.Checker
  Transformer any
  Options     MetadataFactory_IOptions
  Components  *schemametadata.MetadataCollection
  Type        *nativechecker.Type
}

type MetadataFactory_ValidationPipe struct {
  Success bool
  Data    *schemametadata.MetadataSchema
  Errors  []MetadataFactory_IError
}

func (metadataFactoryNamespace) Analyze(props MetadataFactory_IProps) MetadataFactory_ValidationPipe {
  errors := []MetadataFactory_IError{}
  metadata := nativemetadata.Explore_metadata(nativemetadata.Explore_metadata_IProps{
    Options:    props.Options,
    Checker:    props.Checker,
    Components: props.Components,
    Errors:     &errors,
    Type:       props.Type,
    Explore: MetadataFactory_IExplore{
      Top:       true,
      Object:    nil,
      Property:  nil,
      Parameter: nil,
      Nested:    nil,
      Aliased:   false,
      Escaped:   false,
      Output:    false,
    },
    Intersected: false,
  })
  nativemetadata.Iterate_metadata_collection(struct {
    Errors     *[]MetadataFactory_IError
    Collection *schemametadata.MetadataCollection
  }{
    Errors:     &errors,
    Collection: props.Components,
  })
  nativemetadata.Iterate_metadata_sort(struct {
    Collection *schemametadata.MetadataCollection
    Metadata   *schemametadata.MetadataSchema
  }{
    Collection: props.Components,
    Metadata:   metadata,
  })

  if props.Options.Validate != nil {
    errors = append(errors, MetadataFactory.Validate(struct {
      Transformer any
      Options     MetadataFactory_IOptions
      Functor     MetadataFactory_Validator
      Metadata    *schemametadata.MetadataSchema
    }{
      Transformer: props.Transformer,
      Options:     props.Options,
      Functor:     props.Options.Validate,
      Metadata:    metadata,
    })...)
  }
  if len(errors) != 0 {
    return MetadataFactory_ValidationPipe{
      Success: false,
      Errors:  errors,
    }
  }
  return MetadataFactory_ValidationPipe{
    Success: true,
    Data:    metadata,
  }
}

func (metadataFactoryNamespace) SoleLiteral(value string) *schemametadata.MetadataSchema {
  meta := schemametadata.MetadataSchema_initialize()
  meta.Constants = append(meta.Constants, schemametadata.MetadataConstant_create(schemametadata.MetadataConstant{
    Values: []*schemametadata.MetadataConstantValue{
      schemametadata.MetadataConstantValue_create(schemametadata.MetadataConstantValue{
        Value: value,
        Tags:  [][]schemametadata.IMetadataTypeTag{},
      }),
    },
    Type: "string",
  }))
  return meta
}

func (metadataFactoryNamespace) Validate(props struct {
  Transformer any
  Options     MetadataFactory_IOptions
  Functor     MetadataFactory_Validator
  Metadata    *schemametadata.MetadataSchema
}) []MetadataFactory_IError {
  visitor := &metadataFactory_IValidationVisitor{
    Functor:   props.Functor,
    Errors:    []MetadataFactory_IError{},
    Objects:   map[*schemametadata.MetadataObjectType]bool{},
    Arrays:    map[*schemametadata.MetadataArrayType]bool{},
    Tuples:    map[*schemametadata.MetadataTupleType]bool{},
    Aliases:   map[*schemametadata.MetadataAliasType]bool{},
    Functions: map[*schemametadata.MetadataFunction]bool{},
  }
  MetadataFactory.validateMeta(struct {
    Options  MetadataFactory_IOptions
    Visitor  *metadataFactory_IValidationVisitor
    Metadata *schemametadata.MetadataSchema
    Top      *schemametadata.MetadataSchema
    Explore  MetadataFactory_IExplore
  }{
    Options:  props.Options,
    Visitor:  visitor,
    Metadata: props.Metadata,
    Top:      props.Metadata,
    Explore: MetadataFactory_IExplore{
      Object:    nil,
      Property:  nil,
      Parameter: nil,
      Nested:    nil,
      Top:       true,
      Aliased:   false,
      Escaped:   false,
      Output:    false,
    },
  })
  return visitor.Errors
}

func (metadataFactoryNamespace) validateMeta(props struct {
  Options  MetadataFactory_IOptions
  Visitor  *metadataFactory_IValidationVisitor
  Metadata *schemametadata.MetadataSchema
  Top      *schemametadata.MetadataSchema
  Explore  MetadataFactory_IExplore
}) {
  result := []string{}
  if props.Visitor.Functor != nil {
    result = append(result, props.Visitor.Functor(struct {
      Metadata *schemametadata.MetadataSchema
      Explore  MetadataFactory_IExplore
      Top      *schemametadata.MetadataSchema
    }{
      Metadata: props.Metadata,
      Explore:  props.Explore,
      Top:      props.Top,
    })...)
  }
  if len(result) != 0 {
    props.Visitor.Errors = append(props.Visitor.Errors, MetadataFactory_IError{
      Name:     props.Metadata.GetName(),
      Explore:  props.Explore,
      Messages: metadataFactory_unique(result),
    })
  }

  for _, alias := range props.Metadata.Aliases {
    MetadataFactory.validateAlias(struct {
      Options MetadataFactory_IOptions
      Visitor *metadataFactory_IValidationVisitor
      Alias   *schemametadata.MetadataAliasType
      Explore MetadataFactory_IExplore
      Top     *schemametadata.MetadataSchema
    }{
      Options: props.Options,
      Visitor: props.Visitor,
      Alias:   alias.Type,
      Explore: props.Explore,
      Top:     props.Top,
    })
  }
  for _, array := range props.Metadata.Arrays {
    MetadataFactory.validateArray(struct {
      Options MetadataFactory_IOptions
      Visitor *metadataFactory_IValidationVisitor
      Array   *schemametadata.MetadataArrayType
      Explore MetadataFactory_IExplore
      Top     *schemametadata.MetadataSchema
    }{
      Options: props.Options,
      Visitor: props.Visitor,
      Array:   array.Type,
      Explore: props.Explore,
      Top:     props.Top,
    })
  }
  for _, tuple := range props.Metadata.Tuples {
    MetadataFactory.validateTuple(struct {
      Options MetadataFactory_IOptions
      Visitor *metadataFactory_IValidationVisitor
      Tuple   *schemametadata.MetadataTupleType
      Explore MetadataFactory_IExplore
      Top     *schemametadata.MetadataSchema
    }{
      Options: props.Options,
      Visitor: props.Visitor,
      Tuple:   tuple.Type,
      Explore: props.Explore,
      Top:     props.Top,
    })
  }
  for _, object := range props.Metadata.Objects {
    MetadataFactory.validateObject(struct {
      Options MetadataFactory_IOptions
      Visitor *metadataFactory_IValidationVisitor
      Object  *schemametadata.MetadataObjectType
      Top     *schemametadata.MetadataSchema
    }{
      Options: props.Options,
      Visitor: props.Visitor,
      Object:  object.Type,
      Top:     props.Top,
    })
  }
  for _, function := range props.Metadata.Functions {
    MetadataFactory.validateFunction(struct {
      Options  MetadataFactory_IOptions
      Visitor  *metadataFactory_IValidationVisitor
      Function *schemametadata.MetadataFunction
      Explore  MetadataFactory_IExplore
      Top      *schemametadata.MetadataSchema
    }{
      Options:  props.Options,
      Visitor:  props.Visitor,
      Function: function,
      Explore:  props.Explore,
      Top:      props.Top,
    })
  }
  for _, set := range props.Metadata.Sets {
    MetadataFactory.validateMeta(struct {
      Options  MetadataFactory_IOptions
      Visitor  *metadataFactory_IValidationVisitor
      Metadata *schemametadata.MetadataSchema
      Top      *schemametadata.MetadataSchema
      Explore  MetadataFactory_IExplore
    }{
      Options:  props.Options,
      Visitor:  props.Visitor,
      Metadata: set.Value,
      Top:      props.Top,
      Explore:  props.Explore,
    })
  }
  for _, m := range props.Metadata.Maps {
    MetadataFactory.validateMeta(struct {
      Options  MetadataFactory_IOptions
      Visitor  *metadataFactory_IValidationVisitor
      Metadata *schemametadata.MetadataSchema
      Top      *schemametadata.MetadataSchema
      Explore  MetadataFactory_IExplore
    }{Options: props.Options, Visitor: props.Visitor, Metadata: m.Key, Top: props.Top, Explore: props.Explore})
    MetadataFactory.validateMeta(struct {
      Options  MetadataFactory_IOptions
      Visitor  *metadataFactory_IValidationVisitor
      Metadata *schemametadata.MetadataSchema
      Top      *schemametadata.MetadataSchema
      Explore  MetadataFactory_IExplore
    }{Options: props.Options, Visitor: props.Visitor, Metadata: m.Value, Top: props.Top, Explore: props.Explore})
  }
  if props.Options.Escape == true && props.Metadata.Escaped != nil {
    explore := props.Explore
    explore.Escaped = true
    MetadataFactory.validateMeta(struct {
      Options  MetadataFactory_IOptions
      Visitor  *metadataFactory_IValidationVisitor
      Metadata *schemametadata.MetadataSchema
      Top      *schemametadata.MetadataSchema
      Explore  MetadataFactory_IExplore
    }{Options: props.Options, Visitor: props.Visitor, Metadata: props.Metadata.Escaped.Returns, Top: props.Top, Explore: explore})
  }
}

func (metadataFactoryNamespace) validateAlias(props struct {
  Options MetadataFactory_IOptions
  Visitor *metadataFactory_IValidationVisitor
  Alias   *schemametadata.MetadataAliasType
  Explore MetadataFactory_IExplore
  Top     *schemametadata.MetadataSchema
}) {
  if props.Visitor.Aliases[props.Alias] {
    return
  }
  props.Visitor.Aliases[props.Alias] = true
  explore := props.Explore
  explore.Nested = props.Alias
  explore.Aliased = true
  MetadataFactory.validateMeta(struct {
    Options  MetadataFactory_IOptions
    Visitor  *metadataFactory_IValidationVisitor
    Metadata *schemametadata.MetadataSchema
    Top      *schemametadata.MetadataSchema
    Explore  MetadataFactory_IExplore
  }{Options: props.Options, Visitor: props.Visitor, Metadata: props.Alias.Value, Top: props.Top, Explore: explore})
}

func (metadataFactoryNamespace) validateArray(props struct {
  Options MetadataFactory_IOptions
  Visitor *metadataFactory_IValidationVisitor
  Array   *schemametadata.MetadataArrayType
  Explore MetadataFactory_IExplore
  Top     *schemametadata.MetadataSchema
}) {
  if props.Visitor.Arrays[props.Array] {
    return
  }
  props.Visitor.Arrays[props.Array] = true
  explore := props.Explore
  explore.Nested = props.Array
  explore.Top = false
  MetadataFactory.validateMeta(struct {
    Options  MetadataFactory_IOptions
    Visitor  *metadataFactory_IValidationVisitor
    Metadata *schemametadata.MetadataSchema
    Top      *schemametadata.MetadataSchema
    Explore  MetadataFactory_IExplore
  }{Options: props.Options, Visitor: props.Visitor, Metadata: props.Array.Value, Top: props.Top, Explore: explore})
}

func (metadataFactoryNamespace) validateTuple(props struct {
  Options MetadataFactory_IOptions
  Visitor *metadataFactory_IValidationVisitor
  Tuple   *schemametadata.MetadataTupleType
  Explore MetadataFactory_IExplore
  Top     *schemametadata.MetadataSchema
}) {
  if props.Visitor.Tuples[props.Tuple] {
    return
  }
  props.Visitor.Tuples[props.Tuple] = true
  for _, elem := range props.Tuple.Elements {
    explore := props.Explore
    explore.Nested = props.Tuple
    explore.Top = false
    MetadataFactory.validateMeta(struct {
      Options  MetadataFactory_IOptions
      Visitor  *metadataFactory_IValidationVisitor
      Metadata *schemametadata.MetadataSchema
      Top      *schemametadata.MetadataSchema
      Explore  MetadataFactory_IExplore
    }{Options: props.Options, Visitor: props.Visitor, Metadata: elem, Top: props.Top, Explore: explore})
  }
}

func (metadataFactoryNamespace) validateObject(props struct {
  Options MetadataFactory_IOptions
  Visitor *metadataFactory_IValidationVisitor
  Object  *schemametadata.MetadataObjectType
  Top     *schemametadata.MetadataSchema
}) {
  if props.Visitor.Objects[props.Object] {
    return
  }
  props.Visitor.Objects[props.Object] = true
  if props.Options.Validate != nil {
    explore := MetadataFactory_IExplore{
      Object:    props.Object,
      Top:       false,
      Property:  nil,
      Parameter: nil,
      Nested:    nil,
      Aliased:   false,
      Escaped:   false,
      Output:    false,
    }
    metadata := schemametadata.MetadataSchema_create(schemametadata.MetadataSchema{
      Any:       false,
      Nullable:  false,
      Required:  true,
      Optional:  false,
      Constants: []*schemametadata.MetadataConstant{},
      Atomics:   []*schemametadata.MetadataAtomic{},
      Templates: []*schemametadata.MetadataTemplate{},
      Arrays:    []*schemametadata.MetadataArray{},
      Tuples:    []*schemametadata.MetadataTuple{},
      Objects: []*schemametadata.MetadataObject{
        schemametadata.MetadataObject_create(schemametadata.MetadataObject{Type: props.Object, Tags: [][]schemametadata.IMetadataTypeTag{}}),
      },
      Aliases:   []*schemametadata.MetadataAlias{},
      Functions: []*schemametadata.MetadataFunction{},
      Rest:      nil,
      Natives:   []*schemametadata.MetadataNative{},
      Sets:      []*schemametadata.MetadataSet{},
      Maps:      []*schemametadata.MetadataMap{},
    })
    errors := props.Options.Validate(struct {
      Metadata *schemametadata.MetadataSchema
      Explore  MetadataFactory_IExplore
      Top      *schemametadata.MetadataSchema
    }{Metadata: metadata, Top: props.Top, Explore: explore})
    if len(errors) != 0 {
      props.Visitor.Errors = append(props.Visitor.Errors, MetadataFactory_IError{
        Name:     props.Object.Name,
        Explore:  explore,
        Messages: metadataFactory_unique(errors),
      })
    }
  }

  for _, property := range props.Object.Properties {
    var key any = struct{}{}
    if sole := property.Key.GetSoleLiteral(); sole != nil {
      key = *sole
    }
    explore := MetadataFactory_IExplore{
      Object:    props.Object,
      Property:  key,
      Parameter: nil,
      Nested:    nil,
      Top:       false,
      Aliased:   false,
      Escaped:   false,
      Output:    false,
    }
    MetadataFactory.validateMeta(struct {
      Options  MetadataFactory_IOptions
      Visitor  *metadataFactory_IValidationVisitor
      Metadata *schemametadata.MetadataSchema
      Top      *schemametadata.MetadataSchema
      Explore  MetadataFactory_IExplore
    }{Options: props.Options, Visitor: props.Visitor, Metadata: property.Value, Top: props.Top, Explore: explore})
  }
}

func (metadataFactoryNamespace) validateFunction(props struct {
  Options  MetadataFactory_IOptions
  Visitor  *metadataFactory_IValidationVisitor
  Function *schemametadata.MetadataFunction
  Explore  MetadataFactory_IExplore
  Top      *schemametadata.MetadataSchema
}) {
  if props.Visitor.Functions[props.Function] {
    return
  }
  props.Visitor.Functions[props.Function] = true
  for _, param := range props.Function.Parameters {
    explore := props.Explore
    explore.Parameter = param.Name
    explore.Nested = nil
    explore.Top = false
    explore.Output = false
    MetadataFactory.validateMeta(struct {
      Options  MetadataFactory_IOptions
      Visitor  *metadataFactory_IValidationVisitor
      Metadata *schemametadata.MetadataSchema
      Top      *schemametadata.MetadataSchema
      Explore  MetadataFactory_IExplore
    }{Options: props.Options, Visitor: props.Visitor, Metadata: param.Type, Top: props.Top, Explore: explore})
  }
  if props.Function.Output != nil {
    explore := props.Explore
    explore.Parameter = nil
    explore.Nested = nil
    explore.Top = false
    explore.Output = true
    MetadataFactory.validateMeta(struct {
      Options  MetadataFactory_IOptions
      Visitor  *metadataFactory_IValidationVisitor
      Metadata *schemametadata.MetadataSchema
      Top      *schemametadata.MetadataSchema
      Explore  MetadataFactory_IExplore
    }{Options: props.Options, Visitor: props.Visitor, Metadata: props.Function.Output, Top: props.Top, Explore: explore})
  }
}

type metadataFactory_IValidationVisitor struct {
  Functor   MetadataFactory_Validator
  Errors    []MetadataFactory_IError
  Objects   map[*schemametadata.MetadataObjectType]bool
  Arrays    map[*schemametadata.MetadataArrayType]bool
  Tuples    map[*schemametadata.MetadataTupleType]bool
  Aliases   map[*schemametadata.MetadataAliasType]bool
  Functions map[*schemametadata.MetadataFunction]bool
}

func metadataFactory_unique(input []string) []string {
  visited := map[string]bool{}
  output := []string{}
  for _, str := range input {
    if visited[str] {
      continue
    }
    visited[str] = true
    output = append(output, str)
  }
  return output
}
