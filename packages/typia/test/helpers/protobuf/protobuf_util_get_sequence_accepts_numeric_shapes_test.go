package typia_test

import (
	"testing"

	helpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
	metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestProtobufUtilGetSequenceAcceptsNumericShapes verifies sequence parsing.
//
// Sequence tags can be reconstructed from decoded JSON maps, hand-built test
// metadata, or generated metadata paths. The parser must accept integer,
// floating-point, and string representations of the same protobuf sequence
// number.
//
// 1. Build three sequence tags with int, float64, and string schema values.
// 2. Parse each tag through the protobuf utility.
// 3. Assert every supported numeric representation is accepted.
func TestProtobufUtilGetSequenceAcceptsNumericShapes(t *testing.T) {
	cases := []struct {
		value any
		want  int
	}{
		{value: 3, want: 3},
		{value: float64(4), want: 4},
		{value: "5", want: 5},
	}

	for _, tc := range cases {
		got := helpers.ProtobufUtil.GetSequence([]metadata.IMetadataTypeTag{{
			Kind: "sequence",
			Schema: map[string]any{
				"x-protobuf-sequence": tc.value,
			},
		}})
		if got == nil || *got != tc.want {
			t.Fatalf("sequence value %v parsed as %#v, want %d", tc.value, got, tc.want)
		}
	}
}
