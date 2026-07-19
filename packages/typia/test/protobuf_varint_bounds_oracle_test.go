package typiatest

import (
	"math"
	"testing"

	"google.golang.org/protobuf/encoding/protowire"
)

// TestProtobufVarintBoundsOracle verifies the official Protobuf parser's
// varint boundary independently of typia's runtime reader.
//
// The tenth wire byte owns only bit 63. Both a continuation bit and any other
// payload bit are overflow, while canonical maxima and non-canonical in-range
// encodings remain valid.
//
// 1. Reject malformed values, tags, byte lengths, and complete fields.
// 2. Distinguish truncation at every earlier byte from tenth-byte overflow.
// 3. Accept zero, non-canonical zero, and the canonical uint64 maximum.
func TestProtobufVarintBoundsOracle(t *testing.T) {
	continuations := func(count int) []byte {
		return append([]byte(nil), makeContinuationBytes(count)...)
	}
	malformed := []struct {
		name  string
		bytes []byte
	}{
		{name: "no terminator", bytes: continuations(10)},
		{name: "excess tenth payload", bytes: append(continuations(9), 0x02)},
		{name: "continuing excess tenth payload", bytes: append(continuations(9), 0x82)},
	}
	for _, test := range malformed {
		t.Run(test.name, func(t *testing.T) {
			if _, n := protowire.ConsumeVarint(test.bytes); n != -3 {
				t.Fatalf("ConsumeVarint returned n=%d instead of overflow -3", n)
			}

			tag := append([]byte{0x88}, test.bytes[1:]...)
			if _, _, n := protowire.ConsumeTag(tag); n != -3 {
				t.Fatalf("ConsumeTag returned n=%d instead of overflow -3", n)
			}

			if _, n := protowire.ConsumeBytes(test.bytes); n != -3 {
				t.Fatalf("ConsumeBytes returned n=%d instead of overflow -3", n)
			}

			field := append([]byte{0x0a}, test.bytes...)
			if _, _, n := protowire.ConsumeField(field); n != -3 {
				t.Fatalf("ConsumeField returned n=%d instead of overflow -3", n)
			}
		})
	}

	for count := 1; count < 10; count++ {
		if _, n := protowire.ConsumeVarint(continuations(count)); n != -1 {
			t.Fatalf("%d-byte truncation returned n=%d instead of truncation -1", count, n)
		}
	}

	valid := []struct {
		name  string
		bytes []byte
		value uint64
	}{
		{name: "zero", bytes: []byte{0x00}, value: 0},
		{name: "two-byte zero", bytes: []byte{0x80, 0x00}, value: 0},
		{name: "ten-byte zero", bytes: append(continuations(9), 0x00), value: 0},
		{
			name:  "canonical maximum",
			bytes: []byte{0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0x01},
			value: math.MaxUint64,
		},
	}
	for _, test := range valid {
		t.Run(test.name, func(t *testing.T) {
			value, n := protowire.ConsumeVarint(test.bytes)
			if n != len(test.bytes) || value != test.value {
				t.Fatalf("ConsumeVarint returned value=%d n=%d, want value=%d n=%d", value, n, test.value, len(test.bytes))
			}
		})
	}
}

func makeContinuationBytes(count int) []byte {
	bytes := make([]byte, count)
	for i := range bytes {
		bytes[i] = 0x80
	}
	return bytes
}
