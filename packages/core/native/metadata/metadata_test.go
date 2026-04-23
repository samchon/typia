package metadata

import (
	"encoding/json"
	"testing"
)

func TestAtomicKindValidity(t *testing.T) {
	for _, k := range []AtomicKind{AtomicBoolean, AtomicNumber, AtomicBigint, AtomicString} {
		if !k.IsValid() {
			t.Errorf("expected %q to be valid", k)
		}
	}
	for _, k := range []AtomicKind{"", "object", "symbol", "int"} {
		if AtomicKind(k).IsValid() {
			t.Errorf("expected %q to be invalid", k)
		}
	}
}

func TestNewSchemaDefaults(t *testing.T) {
	s := NewSchema()
	if !s.Required {
		t.Error("NewSchema should start with Required=true (matches TS initialize())")
	}
	if s.Any || s.Optional || s.Nullable {
		t.Error("NewSchema should start with Any/Optional/Nullable all false")
	}
	if len(s.Atomics) != 0 || len(s.Constants) != 0 {
		t.Error("NewSchema should start with empty containers")
	}
	if !s.Empty() {
		t.Error("NewSchema should report Empty()=true")
	}
	if s.Bucket() != 0 {
		t.Errorf("NewSchema bucket should be 0, got %d", s.Bucket())
	}
}

func TestAddAtomicAddsOnce(t *testing.T) {
	s := NewSchema().AddAtomic(AtomicString).AddAtomic(AtomicString)
	if len(s.Atomics) != 1 {
		t.Errorf("expected dedup, got %d atomics", len(s.Atomics))
	}
	s.AddAtomic(AtomicNumber)
	if len(s.Atomics) != 2 {
		t.Errorf("expected 2 atomics after adding number, got %d", len(s.Atomics))
	}
}

func TestAddAtomicPanicsOnInvalid(t *testing.T) {
	defer func() {
		if r := recover(); r == nil {
			t.Fatal("expected panic on invalid atomic kind")
		}
	}()
	NewSchema().AddAtomic("object")
}

func TestAddConstantDedupes(t *testing.T) {
	s := NewSchema().
		AddConstant(AtomicString, "foo").
		AddConstant(AtomicString, "foo").
		AddConstant(AtomicString, "bar")
	if len(s.Constants) != 1 {
		t.Fatalf("expected 1 constant bucket, got %d", len(s.Constants))
	}
	if len(s.Constants[0].Values) != 2 {
		t.Errorf("expected 2 constant values after dedup, got %d", len(s.Constants[0].Values))
	}
}

func TestSizeAndBucket(t *testing.T) {
	tests := []struct {
		name         string
		build        func() *Schema
		wantSize     int
		wantBucket   int
		wantEmpty    bool
		wantRequired bool
	}{
		{
			name:         "empty",
			build:        NewSchema,
			wantSize:     0,
			wantBucket:   0,
			wantEmpty:    true,
			wantRequired: true,
		},
		{
			name:         "sole string",
			build:        func() *Schema { return NewSchema().AddAtomic(AtomicString) },
			wantSize:     1,
			wantBucket:   1,
			wantEmpty:    false,
			wantRequired: true,
		},
		{
			name: "string | number union",
			build: func() *Schema {
				return NewSchema().AddAtomic(AtomicString).AddAtomic(AtomicNumber)
			},
			wantSize:     2,
			wantBucket:   1, // both are atomics, so one bucket
			wantEmpty:    false,
			wantRequired: true,
		},
		{
			name: "string | \"foo\" | \"bar\"",
			build: func() *Schema {
				return NewSchema().
					AddAtomic(AtomicString).
					AddConstant(AtomicString, "foo").
					AddConstant(AtomicString, "bar")
			},
			wantSize:     3, // 1 atomic + 2 constants
			wantBucket:   2, // atomic bucket + constant bucket
			wantEmpty:    false,
			wantRequired: true,
		},
		{
			name: "any",
			build: func() *Schema {
				s := NewSchema()
				s.Any = true
				return s
			},
			wantSize:     1,
			wantBucket:   1,
			wantEmpty:    false,
			wantRequired: true,
		},
		{
			name: "optional atomic",
			build: func() *Schema {
				s := NewSchema().AddAtomic(AtomicString)
				s.Optional = true
				return s
			},
			wantSize:     1,
			wantBucket:   1,
			wantEmpty:    false,
			wantRequired: false,
		},
	}

	for _, tc := range tests {
		t.Run(tc.name, func(t *testing.T) {
			s := tc.build()
			if got := s.Size(); got != tc.wantSize {
				t.Errorf("Size(): got %d, want %d", got, tc.wantSize)
			}
			if got := s.Bucket(); got != tc.wantBucket {
				t.Errorf("Bucket(): got %d, want %d", got, tc.wantBucket)
			}
			if got := s.Empty(); got != tc.wantEmpty {
				t.Errorf("Empty(): got %v, want %v", got, tc.wantEmpty)
			}
			if got := s.IsRequired(); got != tc.wantRequired {
				t.Errorf("IsRequired(): got %v, want %v", got, tc.wantRequired)
			}
		})
	}
}

func TestIsSoleAtomic(t *testing.T) {
	cases := []struct {
		name    string
		schema  *Schema
		wantKnd AtomicKind
		wantOK  bool
	}{
		{"string only", NewSchema().AddAtomic(AtomicString), AtomicString, true},
		{"number only", NewSchema().AddAtomic(AtomicNumber), AtomicNumber, true},
		{"union", NewSchema().AddAtomic(AtomicString).AddAtomic(AtomicNumber), "", false},
		{"empty", NewSchema(), "", false},
		{
			"atomic plus constant",
			NewSchema().AddAtomic(AtomicString).AddConstant(AtomicString, "x"),
			"", false,
		},
	}
	for _, tc := range cases {
		t.Run(tc.name, func(t *testing.T) {
			got, ok := tc.schema.IsSoleAtomic()
			if got != tc.wantKnd || ok != tc.wantOK {
				t.Errorf("got (%q,%v), want (%q,%v)", got, ok, tc.wantKnd, tc.wantOK)
			}
		})
	}
}

func TestGetSoleLiteral(t *testing.T) {
	s := NewSchema().AddConstant(AtomicString, "pending")
	v, ok := s.GetSoleLiteral()
	if !ok || v != "pending" {
		t.Errorf("sole literal should be 'pending', got (%q,%v)", v, ok)
	}

	s2 := NewSchema().AddConstant(AtomicString, "a").AddConstant(AtomicString, "b")
	if _, ok := s2.GetSoleLiteral(); ok {
		t.Error("union literal should not report sole")
	}
}

func TestSchemaName(t *testing.T) {
	cases := []struct {
		name   string
		schema *Schema
		want   string
	}{
		{"string", NewSchema().AddAtomic(AtomicString), "string"},
		{"any", func() *Schema { s := NewSchema(); s.Any = true; return s }(), "any"},
		{
			"nullable string",
			func() *Schema { s := NewSchema().AddAtomic(AtomicString); s.Nullable = true; return s }(),
			`(null | string)`,
		},
		{"literal", NewSchema().AddConstant(AtomicString, "pending"), `"pending"`},
		{
			"literal union",
			NewSchema().AddConstant(AtomicString, "a").AddConstant(AtomicString, "b"),
			`("a" | "b")`,
		},
	}
	for _, tc := range cases {
		t.Run(tc.name, func(t *testing.T) {
			if got := tc.schema.Name(); got != tc.want {
				t.Errorf("Name(): got %q want %q", got, tc.want)
			}
		})
	}
}

func TestSchemaJSONRoundtrip(t *testing.T) {
	s := NewSchema().
		AddAtomic(AtomicString).
		AddAtomic(AtomicNumber).
		AddConstant(AtomicString, "foo").
		AddConstant(AtomicString, "bar")
	s.Nullable = true

	raw, err := json.Marshal(s)
	if err != nil {
		t.Fatalf("marshal: %v", err)
	}
	var decoded Schema
	if err := json.Unmarshal(raw, &decoded); err != nil {
		t.Fatalf("unmarshal: %v", err)
	}
	if decoded.Nullable != s.Nullable || len(decoded.Atomics) != 2 || len(decoded.Constants) != 1 {
		t.Errorf("unexpected roundtrip result: %+v", decoded)
	}
	if decoded.Atomics[0].Type != AtomicString {
		t.Errorf("first atomic after roundtrip should be string, got %q", decoded.Atomics[0].Type)
	}
	if len(decoded.Constants[0].Values) != 2 {
		t.Errorf("expected 2 constant values, got %d", len(decoded.Constants[0].Values))
	}
}

func TestCollectionEmplace(t *testing.T) {
	c := NewCollection()
	obj1, fresh := c.EmplaceObject("key-1", "Member")
	if !fresh || obj1.Name != "Member" || obj1.Index != 0 {
		t.Errorf("first emplace: fresh=%v name=%q index=%d", fresh, obj1.Name, obj1.Index)
	}
	obj2, fresh := c.EmplaceObject("key-1", "Member")
	if fresh || obj2 != obj1 {
		t.Error("second emplace with same key should reuse")
	}
	obj3, fresh := c.EmplaceObject("key-2", "Member")
	if !fresh || obj3.Name != "Member.o1" {
		t.Errorf("duplicate name should get .o1 suffix, got %q (fresh=%v)", obj3.Name, fresh)
	}

	arr, fresh := c.EmplaceArray("arr-1", "Array<string>")
	if !fresh || arr.Name != "Array<string>" {
		t.Errorf("array emplace: fresh=%v name=%q", fresh, arr.Name)
	}

	if len(c.Objects()) != 2 || len(c.Arrays()) != 1 {
		t.Errorf("unexpected collection state: objects=%d arrays=%d", len(c.Objects()), len(c.Arrays()))
	}
}
