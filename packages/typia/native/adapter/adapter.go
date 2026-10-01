package adapter

import (
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
)

// PluginOptions holds the typia options resolved from the ttsc plugin entry.
//
// Functional, Numeric and Finite are plain switches that are on only when the
// entry sets them to true. Undefined is a pointer because `undefined: false` is
// a distinct setting from leaving it unset.
//
// @evidence contracts/common.md#principled-implementation Three switches are plain booleans because only `true` enables them, and `undefined` is a pointer because the exactOptionalPropertyTypes workflow needs to tell an explicit false from an omitted value; the zero value is typia's documented default.
// @evidence contracts/common.md#clear-and-simple-design A four-field record built by ReadPluginOptions and consumed by one conversion method.
// @evidence contracts/common.md#prohibited-implementation-shortcuts It holds values read from the host's resolved entry and applies no environment or fixture override.
// @evidence contracts/common.md#meaningful-documentation The doc states what each field means and why Undefined is a pointer.
type PluginOptions struct {
  Functional bool
  Numeric    bool
  Finite     bool
  Undefined  *bool
}

// TransformOptions converts the options to the transform's option record: a
// switch that is off becomes nil, an unset Undefined stays nil and the runtime is
// always "typia".
//
// @evidence contracts/common.md#principled-implementation A false switch maps to nil and a true one to a pointer to true, so the transform sees "not set" for both false and omitted, which is how its three on/off options have always been read; Undefined is passed through unchanged to keep false distinct, and the runtime is fixed to `typia`.
// @evidence contracts/common.md#clear-and-simple-design One value-receiver method and a private pointer helper.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The mapping is the option contract and no consumer is special-cased.
// @evidence contracts/common.md#meaningful-documentation The doc states the nil mapping and the fixed runtime.
func (p PluginOptions) TransformOptions() nativecontext.ITransformOptions {
  return nativecontext.ITransformOptions{
    Finite:     boolPointer(p.Finite),
    Numeric:    boolPointer(p.Numeric),
    Functional: boolPointer(p.Functional),
    Undefined:  p.Undefined,
    Runtime:    "typia",
  }
}

func boolPointer(value bool) *bool {
  if value == false {
    return nil
  }
  return &value
}
