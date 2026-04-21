package emitter

import (
	"strings"
	"testing"

	"github.com/samchon/typia/packages/typia/native/metadata"
)

func TestEmitIsAtomic(t *testing.T) {
	cases := []struct {
		name string
		kind metadata.AtomicKind
		want string
		expr string
	}{
		{"string", metadata.AtomicString, `"string" === typeof input`, "input"},
		{"number", metadata.AtomicNumber, `"number" === typeof input`, "input"},
		{"boolean", metadata.AtomicBoolean, `"boolean" === typeof input`, "input"},
		{"bigint", metadata.AtomicBigint, `"bigint" === typeof input`, "input"},
		{"nested path", metadata.AtomicString, `"string" === typeof $input.user.name`, "$input.user.name"},
	}
	for _, tc := range cases {
		t.Run(tc.name, func(t *testing.T) {
			s := metadata.NewSchema().AddAtomic(tc.kind)
			got, err := EmitIs(tc.expr, s)
			if err != nil {
				t.Fatalf("unexpected error: %v", err)
			}
			if got != tc.want {
				t.Errorf("got %q, want %q", got, tc.want)
			}
		})
	}
}

func TestEmitIsAny(t *testing.T) {
	s := metadata.NewSchema()
	s.Any = true
	got, err := EmitIs("input", s)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if got != "true" {
		t.Errorf("expected trivially-true for any, got %q", got)
	}
}

func TestEmitIsUnsupportedEmpty(t *testing.T) {
	s := metadata.NewSchema()
	_, err := EmitIs("input", s)
	if err == nil {
		t.Fatal("expected error on empty schema")
	}
}

func TestEmitIsUnion(t *testing.T) {
	s := metadata.NewSchema().AddAtomic(metadata.AtomicString).AddAtomic(metadata.AtomicNumber)
	got, err := EmitIs("input", s)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	want := `("number" === typeof input || "string" === typeof input)`
	if got != want {
		t.Errorf("got %q want %q", got, want)
	}
}

func TestEmitIsLiteralUnion(t *testing.T) {
	s := metadata.NewSchema().
		AddConstant(metadata.AtomicString, "pending").
		AddConstant(metadata.AtomicString, "active").
		AddConstant(metadata.AtomicString, "archived")
	got, err := EmitIs("input", s)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	want := `("active" === input || "archived" === input || "pending" === input)`
	if got != want {
		t.Errorf("got %q want %q", got, want)
	}
}

func TestEmitIsNullable(t *testing.T) {
	s := metadata.NewSchema().AddAtomic(metadata.AtomicString)
	s.Nullable = true
	got, err := EmitIs("input", s)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	want := `("string" === typeof input || null === input)`
	if got != want {
		t.Errorf("got %q want %q", got, want)
	}
}

func TestEmitIsArray(t *testing.T) {
	arr := &metadata.ArrayType{
		Name:  "Array<string>",
		Value: metadata.NewSchema().AddAtomic(metadata.AtomicString),
	}
	s := metadata.NewSchema()
	s.Arrays = append(s.Arrays, &metadata.ArrayRef{Type: arr})
	got, err := EmitIs("input", s)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	want := `Array.isArray(input) && input.every((elem) => "string" === typeof elem)`
	if got != want {
		t.Errorf("got %q want %q", got, want)
	}
}

func TestEmitIsTuple(t *testing.T) {
	tup := &metadata.TupleType{
		Name: "[string, number]",
		Elements: []*metadata.Schema{
			metadata.NewSchema().AddAtomic(metadata.AtomicString),
			metadata.NewSchema().AddAtomic(metadata.AtomicNumber),
		},
	}
	s := metadata.NewSchema()
	s.Tuples = append(s.Tuples, &metadata.TupleRef{Type: tup})
	got, err := EmitIs("input", s)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	want := `(Array.isArray(input) && input.length === 2 && "string" === typeof input[0] && "number" === typeof input[1])`
	if got != want {
		t.Errorf("got %q want %q", got, want)
	}
}

func TestEmitIsObject(t *testing.T) {
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
	got, err := EmitIs("input", s)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	for _, fragment := range []string{
		`"object" === typeof input`,
		`null !== input`,
		`false === Array.isArray(input)`,
		`"number" === typeof input.x`,
		`"number" === typeof input.y`,
	} {
		if !strings.Contains(got, fragment) {
			t.Errorf("expected fragment %q in %q", fragment, got)
		}
	}
}

func TestEmitIsRejectsInvalidInput(t *testing.T) {
	if _, err := EmitIs("input", nil); err == nil {
		t.Error("expected error on nil schema")
	}
	if _, err := EmitIs("", metadata.NewSchema().AddAtomic(metadata.AtomicString)); err == nil {
		t.Error("expected error on empty expression")
	}
}

func TestEmitIsArrowFunction(t *testing.T) {
	s := metadata.NewSchema().AddAtomic(metadata.AtomicString)
	got, err := EmitIsArrowFunction(s)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	want := `(input) => "string" === typeof input`
	if got != want {
		t.Errorf("got %q, want %q", got, want)
	}
}

func TestParityWithTypiaV12PrimitiveShape(t *testing.T) {
	s := metadata.NewSchema().AddAtomic(metadata.AtomicString)
	got, err := EmitIs("input", s)
	if err != nil {
		t.Fatal(err)
	}
	wrapped := "(" + got + ")"
	if wrapped != `("string" === typeof input)` {
		t.Errorf("parity check failed: %q", wrapped)
	}
}
