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
// 1. Build a type-name string containing several supported special symbols.
// 2. Encode it through `ProtobufNameEncoder`.
// 3. Assert the encoded name differs from the original.
// 4. Decode the name and assert the original text is restored.
//
// @evidence contracts/testing.md#behavioral-verification A punctuation-rich name is encoded, checked for change, decoded and compared with the input. A separate authored name/token pair checks Encode and Decode independently, so complementary wrong transformations cannot satisfy the test using reversibility alone.
// @evidence contracts/testing.md#independent-expectations The exact token spelling for $User & Admin is an authored literal; Encode output is not used as the input to the independent Decode assertion. The larger name also retains its authored round-trip expectation.
// @evidence contracts/testing.md#distinguishing-cases A punctuation-rich round trip and an exact dollar/space/and token pair are covered; parentheses, backticks, hyphens and names containing literal token text are not asserted.
// @evidence contracts/testing.md#execution-ownership The packages/typia/test module (pnpm test:go:public) runs this Test function in process with the Go test runner. It calls the exported encoder and decoder on strings with no filesystem fixture, process or native command build.
func TestProtobufNameEncoderRoundTrip(t *testing.T) {
  const plain = "$User & Admin"
  const tokens = "_dollar_User_space__and__space_Admin"
  if encoded := utils.ProtobufNameEncoder.Encode(plain); encoded != tokens {
    t.Fatalf("protobuf token spelling mismatch: expected %q, got %q", tokens, encoded)
  }
  if decoded := utils.ProtobufNameEncoder.Decode(tokens); decoded != plain {
    t.Fatalf("protobuf token decoding mismatch: expected %q, got %q", plain, decoded)
  }
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
