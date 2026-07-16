package metadata

import (
  "sync"

  nativeast "github.com/microsoft/typescript-go/shim/ast"
  nativechecker "github.com/microsoft/typescript-go/shim/checker"
)

// MetadataDependency routes the source files owning the declarations that
// metadata analysis consults to a per-checker listener. The project transform
// host registers a listener before transforming a file and receives every
// declaration file the analysis reads for that file's typia call sites, which
// it reports as the transform envelope's `dependencies` so bundler caches can
// invalidate generated validators when a consulted type's file changes.
//
// The registry is keyed by checker: analysis code deep inside the metadata
// iterators has the checker at hand but no transform context, while one
// transform host drives exactly one program (and checker) at a time. A
// sync.Map keeps unrelated programs in the same process (tests) isolated, and
// every touch is a no-op when no listener is registered (build and single-file
// modes register none).
var metadataDependency_listeners sync.Map

// MetadataDependency_listen registers the listener that receives every
// consulted declaration file name resolved through `checker`. The caller owns
// attribution (which transformed file the touches belong to) and filtering.
func MetadataDependency_listen(checker *nativechecker.Checker, listener func(fileName string)) {
  if checker == nil || listener == nil {
    return
  }
  metadataDependency_listeners.Store(checker, listener)
}

// MetadataDependency_release removes the listener registered for `checker`.
func MetadataDependency_release(checker *nativechecker.Checker) {
  if checker == nil {
    return
  }
  metadataDependency_listeners.Delete(checker)
}

// MetadataDependency_active reports whether a listener is registered for
// `checker`, so analysis code can skip walks performed only for collection.
func MetadataDependency_active(checker *nativechecker.Checker) bool {
  return metadataDependency_listener(checker) != nil
}

// MetadataDependency_touchType reports the declaration files of a consulted
// type: both the structural symbol (interface / class / enum / object literal)
// and the type-name symbol (a `type` alias), which differ for aliased types.
func MetadataDependency_touchType(checker *nativechecker.Checker, typ *nativechecker.Type) {
  if typ == nil {
    return
  }
  listener := metadataDependency_listener(checker)
  if listener == nil {
    return
  }
  metadataDependency_touch(listener, typ.Symbol())
  metadataDependency_touch(listener, nativechecker.Type_getTypeNameSymbol(typ))
}

// MetadataDependency_touchSymbol reports the declaration files of a consulted
// symbol (e.g. an object property or a heritage target).
func MetadataDependency_touchSymbol(checker *nativechecker.Checker, symbol *nativeast.Symbol) {
  listener := metadataDependency_listener(checker)
  if listener == nil {
    return
  }
  metadataDependency_touch(listener, symbol)
}

func metadataDependency_listener(checker *nativechecker.Checker) func(fileName string) {
  if checker == nil {
    return nil
  }
  value, ok := metadataDependency_listeners.Load(checker)
  if ok == false {
    return nil
  }
  listener, ok := value.(func(fileName string))
  if ok == false {
    return nil
  }
  return listener
}

func metadataDependency_touch(listener func(fileName string), symbol *nativeast.Symbol) {
  if symbol == nil {
    return
  }
  for _, declaration := range symbol.Declarations {
    if declaration == nil {
      continue
    }
    if src := nativeast.GetSourceFileOfNode(declaration); src != nil {
      listener(src.FileName())
    }
  }
}
