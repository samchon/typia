package helpers

import (
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type optionPredicatorNamespace struct{}

var OptionPredicator optionPredicatorNamespace

func (optionPredicatorNamespace) Numeric(options nativecontext.ITransformOptions) bool {
  return OptionPredicator.Finite(options) || options.Numeric != nil && *options.Numeric
}

func (optionPredicatorNamespace) Functional(options nativecontext.ITransformOptions) bool {
  return options.Functional != nil && *options.Functional
}

func (optionPredicatorNamespace) Finite(options nativecontext.ITransformOptions) bool {
  return options.Finite != nil && *options.Finite
}

func (optionPredicatorNamespace) Undefined(options nativecontext.ITransformOptions) bool {
  return options.Undefined == nil || *options.Undefined
}

func (optionPredicatorNamespace) StrictOptionalUndefined(context nativecontext.ITypiaContext, metadata *schemametadata.MetadataSchema) bool {
  return OptionPredicator.ExactOptionalProperty(context, metadata) &&
    metadata.Required == false
}

func (optionPredicatorNamespace) ExactOptionalProperty(context nativecontext.ITypiaContext, metadata *schemametadata.MetadataSchema) bool {
  return context.CompilerOptions != nil &&
    context.CompilerOptions.ExactOptionalPropertyTypes.IsTrue() &&
    OptionPredicator.Undefined(context.Options) == false &&
    metadata != nil &&
    metadata.Optional
}
