// Package protobuforacle compiles an emitted `.proto` document with a strict
// Protobuf compiler front end.
//
// A `.proto` document's only real oracle is a Protobuf compiler. typia's
// protobuf coverage historically asserted with substring checks such as
// `includes("int32 id")`, which `required int32 id = 1;` satisfies just as well
// as a legal field, and the one test that parsed the document handed it to
// protobuf.js — which accepts a proto3 document containing `required`, reports
// its syntax as proto3, and records the label. Both of those oracles agree with
// a document `protoc` rejects outright, so neither can witness an illegal label.
//
// protocompile is buf's Protobuf compiler front end. It enforces the proto3
// label rules protobuf.js ignores and reports the same diagnosis protoc does
// ("label 'required' is not allowed in proto3 or editions"), while remaining a
// pure Go module, so this suite needs no protoc binary on PATH or in CI.
package protobuforacle

import (
  "context"

  "github.com/bufbuild/protocompile"
)

// FileName is the synthetic path the emitted document is compiled under.
const FileName = "typia.proto"

// Compile returns the error a strict Protobuf compiler raises for document, or
// nil when the document compiles cleanly.
//
// @evidence contracts/testing.md#behavioral-verification Compile hands the document to the protocompile front end and returns its diagnosis unchanged, so an illegal label or syntax error is reported and a valid document yields nil.
// @evidence contracts/testing.md#independent-expectations The oracle is the third-party compiler front end, which enforces the proto3 label rules independently of typia's renderer and of any substring check.
// @evidence contracts/testing.md#distinguishing-cases Compile owns no cases; the callers supply valid documents of several shapes, and the compile oracle's own rejection behavior is the library's, not asserted here.
// @evidence contracts/testing.md#execution-ownership The compiler is the in-process bufbuild/protocompile Go library reading the document from memory, so no protoc binary or process is involved.
func Compile(document string) error {
  compiler := protocompile.Compiler{
    Resolver: protocompile.WithStandardImports(&protocompile.SourceResolver{
      Accessor: protocompile.SourceAccessorFromMap(map[string]string{
        FileName: document,
      }),
    }),
  }
  _, err := compiler.Compile(context.Background(), FileName)
  return err
}
