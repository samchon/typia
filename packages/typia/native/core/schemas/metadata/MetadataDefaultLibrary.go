package metadata

import (
  "strings"
  "sync"

  nativeast "github.com/microsoft/typescript-go/shim/ast"
  nativechecker "github.com/microsoft/typescript-go/shim/checker"
)

// MetadataDefaultLibrary routes the compiler's own default-library
// classification to metadata analysis, which decides runtime-native identity
// from it: a global is the JavaScript built-in only when a runtime authority —
// a TypeScript default library, or Node's `buffer` core module — declares it
// (#2200).
//
// Only the program knows which files those are. `bundled:///libs/lib.es2022.d.ts`
// under the embedded default, an on-disk path under `noembed`, and
// `node_modules/@typescript/lib-es2022/index.d.ts` under `libReplacement` are
// all the same authority, and none of them is recognizable from the file name:
// the last one does not even start with `lib.`, while `lib.d.ts` is an ordinary
// published file name that any dependency or `typeRoots` package may use
// (samchon/typia#2108 recorded the same lesson for dependency reporting).
//
// The registry is keyed by checker for the same reason MetadataDependency is:
// analysis code deep inside the metadata iterators holds the checker but no
// transform context, while one transform host drives one program at a time. A
// sync.Map keeps unrelated programs in the same process (tests) isolated.
//
// When no classifier is registered the file name is the only evidence left, so
// the fallback is the historical `lib.*.d.ts` base-name test. That keeps a host
// that never registers on exactly the behavior this package had before the
// registry existed rather than silently classifying every real native as a
// user declaration.
var metadataDefaultLibrary_classifiers sync.Map

// MetadataDefaultLibrary_register records the program-level classifier for
// `checker`. Register it once per loaded program, before any transform runs.
//
// @evidence contracts/common.md#principled-implementation The program, not the file name, knows which files are its default libraries, so the host registers a classifier for its checker once per loaded program, and a nil checker or classifier registers nothing.
// @evidence contracts/common.md#clear-and-simple-design One guard and one map store.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The registry is keyed by checker so unrelated programs in one process stay isolated.
// @evidence contracts/common.md#meaningful-documentation The doc states when to register and the registry rationale is in the declaration comment.
func MetadataDefaultLibrary_register(checker *nativechecker.Checker, classifier func(*nativeast.SourceFile) bool) {
  if checker == nil || classifier == nil {
    return
  }
  metadataDefaultLibrary_classifiers.Store(checker, classifier)
}

// MetadataDefaultLibrary_release removes the classifier registered for
// `checker`.
//
// @evidence contracts/common.md#principled-implementation Deleting the entry for a checker ends the registry reference to it, so a checker that is no longer used is not retained; the command entry points defer it.
// @evidence contracts/common.md#clear-and-simple-design One guard and one map delete.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A nil checker is ignored.
// @evidence contracts/common.md#meaningful-documentation The doc states what is removed.
func MetadataDefaultLibrary_release(checker *nativechecker.Checker) {
  if checker == nil {
    return
  }
  metadataDefaultLibrary_classifiers.Delete(checker)
}

// MetadataDefaultLibrary_is reports whether `source` is one of the program's
// default library files.
//
// @evidence contracts/common.md#principled-implementation The registered classifier decides for a source file of that checker's program, and without one the file-name rule answers, which keeps hosts that never register on the former behavior; a nil source is not a library.
// @evidence contracts/common.md#clear-and-simple-design A short chain of three checks.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The fallback is the same shared predicate and not a second copy of the rule.
// @evidence contracts/common.md#meaningful-documentation The doc states the question it answers.
func MetadataDefaultLibrary_is(checker *nativechecker.Checker, source *nativeast.SourceFile) bool {
  if source == nil {
    return false
  }
  if checker != nil {
    if stored, ok := metadataDefaultLibrary_classifiers.Load(checker); ok {
      if classifier, ok := stored.(func(*nativeast.SourceFile) bool); ok {
        return classifier(source)
      }
    }
  }
  return MetadataDefaultLibrary_isFileNamed(source.FileName())
}

// MetadataDefaultLibrary_isFileNamed is the registry's file-name fallback,
// exported so the one predicate that still answers without a checker keeps
// using the same rule.
//
// @evidence contracts/common.md#principled-implementation After separator normalization, a base name beginning with lib. and ending with .d.ts passes the historical test, including lib.d.ts; callers without a checker use this same fallback.
// @evidence contracts/common.md#clear-and-simple-design One normalization and two prefix and suffix tests.
// @evidence contracts/common.md#prohibited-implementation-shortcuts It is the documented fallback and does not claim to be authoritative.
// @evidence contracts/common.md#meaningful-documentation The doc states that it is the file-name fallback.
func MetadataDefaultLibrary_isFileNamed(fileName string) bool {
  slash := strings.ReplaceAll(fileName, "\\", "/")
  base := slash
  if index := strings.LastIndex(slash, "/"); index >= 0 {
    base = slash[index+1:]
  }
  return strings.HasPrefix(base, "lib.") && strings.HasSuffix(base, ".d.ts")
}
