package helpers

import nativecontext "github.com/samchon/typia/packages/typia/native/core/context"

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
