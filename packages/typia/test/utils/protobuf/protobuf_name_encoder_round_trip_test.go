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
