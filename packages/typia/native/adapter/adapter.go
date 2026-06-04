package adapter

import (
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
)

type PluginOptions struct {
  Functional bool
  Numeric    bool
  Finite     bool
  Undefined  bool
}

func (p PluginOptions) TransformOptions() nativecontext.ITransformOptions {
  return nativecontext.ITransformOptions{
    Finite:     boolPointer(p.Finite),
    Numeric:    boolPointer(p.Numeric),
    Functional: boolPointer(p.Functional),
    Undefined:  boolPointer(p.Undefined),
    Runtime:    "typia",
  }
}

func boolPointer(value bool) *bool {
  if value == false {
    return nil
  }
  return &value
}

