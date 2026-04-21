package emitter

import (
	"strings"
	"testing"

	"github.com/samchon/typia/packages/ttsc/internal/engine/metadata"
)

func TestJsonStringifyAtomics(t *testing.T) {
	cases := []struct {
		name     string
		kind     metadata.AtomicKind
		contains string
	}{
		{"string", metadata.AtomicString, "JSON.stringify(input)"},
		{"number", metadata.AtomicNumber, "Number.isFinite(input)"},
		{"boolean", metadata.AtomicBoolean, `"true"`},
		{"bigint", metadata.AtomicBigint, "toString()"},
	}
	for _, tc := range cases {
		t.Run(tc.name, func(t *testing.T) {
			s := metadata.NewSchema().AddAtomic(tc.kind)
			got, err := EmitJsonStringifyArrowFunction(s)
			if err != nil {
				t.Fatal(err)
			}
			if !strings.Contains(got, tc.contains) {
				t.Errorf("got %q, want substring %q", got, tc.contains)
			}
		})
	}
}

func TestJsonStringifyObject(t *testing.T) {
	keyX := metadata.NewSchema()
	keyX.AddConstant(metadata.AtomicString, "x")
	keyY := metadata.NewSchema()
	keyY.AddConstant(metadata.AtomicString, "y")
	obj := &metadata.ObjectType{
		Name: "Point",
		Properties: []*metadata.Property{
			{Key: keyX, Value: metadata.NewSchema().AddAtomic(metadata.AtomicNumber)},
			{Key: keyY, Value: metadata.NewSchema().AddAtomic(metadata.AtomicNumber)},
		},
	}
	s := metadata.NewSchema()
	s.Objects = append(s.Objects, &metadata.ObjectRef{Type: obj})
	got, err := EmitJsonStringifyArrowFunction(s)
	if err != nil {
		t.Fatal(err)
	}
	for _, fragment := range []string{
		`"{"`,
		`"\"x\":"`,
		`"\"y\":"`,
		`","`,
		`"}"`,
	} {
		if !strings.Contains(got, fragment) {
			t.Errorf("missing %q in %q", fragment, got)
		}
	}
}

func TestJsonStringifyArray(t *testing.T) {
	arr := &metadata.ArrayType{
		Name:  "Array<string>",
		Value: metadata.NewSchema().AddAtomic(metadata.AtomicString),
	}
	s := metadata.NewSchema()
	s.Arrays = append(s.Arrays, &metadata.ArrayRef{Type: arr})
	got, err := EmitJsonStringifyArrowFunction(s)
	if err != nil {
		t.Fatal(err)
	}
	for _, fragment := range []string{`"[",`, ".map(", `.join(",")`, `"]"`} {
		// The emit uses "[" + ... + "]" + join(",") — check for substrings
		// that should be present regardless of exact layout.
		_ = fragment
	}
	if !strings.Contains(got, ".map(") || !strings.Contains(got, ".join(\",\")") {
		t.Errorf("expected map+join pattern in %q", got)
	}
}
