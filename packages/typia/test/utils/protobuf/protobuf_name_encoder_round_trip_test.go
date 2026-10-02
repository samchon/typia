package typia_test

import (
  "testing"

  utils "github.com/samchon/typia/packages/typia/native/core/utils"
)

// TestProtobufNameEncoderRoundTrip verifies protobuf-safe name encoding.
//
// Protobuf message names cannot carry the full set of TypeScript type-name
// punctuation. The encoder replaces those symbols with stable textual tokens,
// and the decoder must recover the original string so generated schema names
// remain reversible for diagnostics and metadata comparison.
//
// 1. Build a type-name string containing every supported special symbol class.
// 2. Encode it through `ProtobufNameEncoder`.
// 3. Assert the encoded name differs from the original.
// 4. Decode the name and assert the original text is restored.
//
// @evidence contracts/testing.md#behavioral-verification A name with every supported special symbol is encoded, checked for change, decoded and compared with the input.
// @evidence contracts/testing.md#independent-expectations Reversibility is the contract, so the authored input is the expectation for the decoded name.
// @evidence contracts/testing.md#distinguishing-cases One name containing all symbol classes; names with literal token text are not covered.
// @evidence contracts/testing.md#execution-ownership The packages/typia/test module (pnpm test:go:public) runs this Test function in process with the Go test runner. It calls the exported encoder and decoder on strings with no filesystem fixture, process or native command build.
func TestProtobufNameEncoderRoundTrip(t *testing.T) {
  input := `$User & Admin | {"list"<T>}[0], 'quoted' "double" space`

  encoded := utils.ProtobufNameEncoder.Encode(input)
  decoded := utils.ProtobufNameEncoder.Decode(encoded)

  if encoded == input {
    t.Fatal("encoded protobuf name should change special characters")
  }
  if decoded != input {
    t.Fatalf("protobuf name round-trip mismatch:\nexpected %q\nactual   %q", input, decoded)
  }
}
