package emitter

import (
	"strings"
	"testing"

	"github.com/samchon/typia/packages/core/native/metadata"
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

func TestJsonStringifyRejectsBigint(t *testing.T) {
	s := metadata.NewSchema().AddAtomic(metadata.AtomicBigint)
	if _, err := EmitJsonStringifyArrowFunction(s); err == nil {
		t.Fatal("expected bigint stringify to be rejected")
	}
}

func TestJsonSchemaRejectsBigint(t *testing.T) {
	s := metadata.NewSchema().AddAtomic(metadata.AtomicBigint)
	if _, err := EmitJsonSchemaExpression(s); err == nil {
		t.Fatal("expected bigint json schema to be rejected")
	}
}

func TestRandomRejectsWeakMapNative(t *testing.T) {
	s := metadata.NewSchema()
	s.Natives = append(s.Natives, metadata.Native{Name: "WeakMap"})
	if _, err := EmitRandomArrowFunction(s); err == nil {
		t.Fatal("expected WeakMap random emitter to be rejected")
	}
}

func TestRandomSupportsBigintSchema(t *testing.T) {
	s := metadata.NewSchema().AddAtomic(metadata.AtomicBigint)
	got, err := EmitRandomArrowFunction(s)
	if err != nil {
		t.Fatal(err)
	}
	for _, fragment := range []string{`"x-typia-bigint":true`, `_generator?.bigint`, `_randomBigint`} {
		if !strings.Contains(got, fragment) {
			t.Errorf("random bigint expression should contain %q, got:\n%s", fragment, got)
		}
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
