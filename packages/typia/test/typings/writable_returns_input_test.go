package typia_test

import (
	"testing"

	typings "github.com/samchon/typia/packages/typia/native/core/typings"
)

// TestWritableReturnsInput verifies the writable helper is identity-only.
//
// The writable helper exists to mirror a TypeScript utility type boundary in
// generated Go code. Its runtime contract is deliberately minimal: return the
// exact value it receives without allocating or transforming the payload.
//
// 1. Pass a structured value through the writable helper.
// 2. Assert the same field values are returned.
// 3. Mutate the returned value.
// 4. Assert the original value is not changed by value-copy semantics.
func TestWritableReturnsInput(t *testing.T) {
	input := struct {
		Name string
		Age  int
	}{
		Name: "typia",
		Age:  3,
	}

	output := typings.Writable(input)
	if output != input {
		t.Fatalf("writable helper changed the input: input=%#v output=%#v", input, output)
	}
	output.Name = "changed"
	if input.Name != "typia" {
		t.Fatalf("writable helper should return a value copy for structs: %#v", input)
	}
}
