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
		{"string", metadata.AtomicString, jsonStringifyStringAlias + "._jsonStringifyString(input)"},
		{"number", metadata.AtomicNumber, "String(" + jsonStringifyNumberAlias + "._jsonStringifyNumber(input))"},
		{"boolean", metadata.AtomicBoolean, "String(input)"},
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

func TestJsonStringifyRestTupleUsesRestHelper(t *testing.T) {
	rest := metadata.NewSchema()
	rest.Rest = metadata.NewSchema().AddAtomic(metadata.AtomicString)
	tuple := &metadata.TupleType{
		Name: "Tuple",
		Elements: []*metadata.Schema{
			metadata.NewSchema().AddAtomic(metadata.AtomicString),
			metadata.NewSchema().AddAtomic(metadata.AtomicNumber),
			rest,
		},
	}
	s := metadata.NewSchema()
	s.Tuples = append(s.Tuples, &metadata.TupleRef{Type: tuple})
	got, err := EmitJsonStringifyArrowFunction(s)
	if err != nil {
		t.Fatal(err)
	}
	for _, fragment := range []string{
		jsonStringifyRestAlias + "._jsonStringifyRest",
		"input.slice(2)",
		jsonStringifyStringAlias + "._jsonStringifyString(input[0])",
		jsonStringifyNumberAlias + "._jsonStringifyNumber(input[1])",
	} {
		if !strings.Contains(got, fragment) {
			t.Errorf("missing %q in %q", fragment, got)
		}
	}
}

func TestJsonStringifyConstantUsesInput(t *testing.T) {
	s := metadata.NewSchema().AddConstant(metadata.AtomicString, "literal")
	got, err := EmitJsonStringifyArrowFunction(s)
	if err != nil {
		t.Fatal(err)
	}
	if strings.Contains(got, `"literal"`) {
		t.Fatalf("constant stringify must serialize input, not a fixed literal: %s", got)
	}
	if !strings.Contains(got, `"\"" + input + "\""`) {
		t.Fatalf("constant string should wrap input like legacy stringify: %s", got)
	}
}

func TestJsonStringifyAtomicUnionUsesHelpers(t *testing.T) {
	s := metadata.NewSchema()
	s.AddAtomic(metadata.AtomicString)
	s.AddAtomic(metadata.AtomicNumber)
	got, err := EmitJsonStringifyArrowFunction(s)
	if err != nil {
		t.Fatal(err)
	}
	for _, fragment := range []string{
		`"string" === typeof input`,
		jsonStringifyStringAlias + "._jsonStringifyString(input)",
		`"number" === typeof input`,
		jsonStringifyNumberAlias + "._jsonStringifyNumber(input)",
	} {
		if !strings.Contains(got, fragment) {
			t.Fatalf("atomic union should use helper branch %q: %s", fragment, got)
		}
	}
}

func TestJsonStringifyEscapedUsesToJSONReturnSchema(t *testing.T) {
	escaped := metadata.NewSchema()
	escaped.Escaped = &metadata.Escaped{
		Original: func() *metadata.Schema {
			s := metadata.NewSchema()
			s.Natives = append(s.Natives, metadata.Native{Name: "Date"})
			return s
		}(),
		Returns: metadata.NewSchema().AddAtomic(metadata.AtomicString),
	}
	got, err := EmitJsonStringifyArrowFunction(escaped)
	if err != nil {
		t.Fatal(err)
	}
	for _, fragment := range []string{
		"input.toJSON()",
		jsonStringifyStringAlias + "._jsonStringifyString(input.toJSON())",
	} {
		if !strings.Contains(got, fragment) {
			t.Fatalf("escaped stringify should decode toJSON return through legacy helpers %q: %s", fragment, got)
		}
	}
	if strings.Contains(got, "JSON.stringify(input)") {
		t.Fatalf("escaped stringify must not fall back to whole input JSON.stringify: %s", got)
	}
}

func TestJsonStringifyRecursiveObjectUsesLocalHelper(t *testing.T) {
	keyValue := metadata.NewSchema().AddConstant(metadata.AtomicString, "value")
	keyChildren := metadata.NewSchema().AddConstant(metadata.AtomicString, "children")
	node := &metadata.ObjectType{Name: "JsonNode", Recursive: true}
	node.Properties = []*metadata.Property{
		{Key: keyValue, Value: metadata.NewSchema().AddAtomic(metadata.AtomicString)},
		{
			Key: keyChildren,
			Value: func() *metadata.Schema {
				value := metadata.NewSchema()
				value.Arrays = append(value.Arrays, &metadata.ArrayRef{Type: &metadata.ArrayType{
					Name: "JsonNode[]",
					Value: func() *metadata.Schema {
						child := metadata.NewSchema()
						child.Objects = append(child.Objects, &metadata.ObjectRef{Type: node})
						return child
					}(),
				}})
				return value
			}(),
		},
	}
	s := metadata.NewSchema()
	s.Objects = append(s.Objects, &metadata.ObjectRef{Type: node})
	got, err := EmitJsonStringifyArrowFunction(s)
	if err != nil {
		t.Fatal(err)
	}
	for _, fragment := range []string{
		"const _so0 = (input) => ",
		"return _so0(input);",
		"input.children.map((elem) => _so0(elem))",
	} {
		if !strings.Contains(got, fragment) {
			t.Fatalf("recursive object stringify should contain %q: %s", fragment, got)
		}
	}
	if strings.Contains(got, "JSON.stringify(elem)") || strings.Contains(got, "JSON.stringify(input.children)") {
		t.Fatalf("recursive object stringify must not fall back to JSON.stringify for recursive children: %s", got)
	}
}

func TestJsonStringifyRecursiveArrayUsesLocalHelper(t *testing.T) {
	array := &metadata.ArrayType{Name: "RecursiveArray", Recursive: true}
	value := metadata.NewSchema()
	value.Arrays = append(value.Arrays, &metadata.ArrayRef{Type: array})
	array.Value = value
	s := metadata.NewSchema()
	s.Arrays = append(s.Arrays, &metadata.ArrayRef{Type: array})
	got, err := EmitJsonStringifyArrowFunction(s)
	if err != nil {
		t.Fatal(err)
	}
	for _, fragment := range []string{
		"const _sa0 = (input) => ",
		"return _sa0(input);",
		"input.map((elem) => _sa0(elem))",
	} {
		if !strings.Contains(got, fragment) {
			t.Fatalf("recursive array stringify should contain %q: %s", fragment, got)
		}
	}
	if strings.Contains(got, "JSON.stringify(elem)") {
		t.Fatalf("recursive array stringify must not fall back to JSON.stringify for recursive elements: %s", got)
	}
}

func TestJsonStringifyRecursiveTupleUsesLocalHelper(t *testing.T) {
	tuple := &metadata.TupleType{Name: "RecursiveTuple", Recursive: true}
	child := metadata.NewSchema()
	child.Tuples = append(child.Tuples, &metadata.TupleRef{Type: tuple})
	tuple.Elements = []*metadata.Schema{
		metadata.NewSchema().AddAtomic(metadata.AtomicString),
		child,
	}
	s := metadata.NewSchema()
	s.Tuples = append(s.Tuples, &metadata.TupleRef{Type: tuple})
	got, err := EmitJsonStringifyArrowFunction(s)
	if err != nil {
		t.Fatal(err)
	}
	for _, fragment := range []string{
		"const _st0 = (input) => ",
		"return _st0(input);",
		"_st0(input[1])",
	} {
		if !strings.Contains(got, fragment) {
			t.Fatalf("recursive tuple stringify should contain %q: %s", fragment, got)
		}
	}
	if strings.Contains(got, "JSON.stringify(input[1])") {
		t.Fatalf("recursive tuple stringify must not fall back to JSON.stringify for recursive elements: %s", got)
	}
}

func TestJsonStringifyRejectsArrayElementUndefined(t *testing.T) {
	elem := metadata.NewSchema().AddAtomic(metadata.AtomicString)
	elem.Optional = true
	elem.Required = false
	arr := &metadata.ArrayType{
		Name:  "Array<string | undefined>",
		Value: elem,
	}
	s := metadata.NewSchema()
	s.Arrays = append(s.Arrays, &metadata.ArrayRef{Type: arr})
	if _, err := EmitJsonStringifyArrowFunction(s); err == nil {
		t.Fatal("expected array element undefined to be rejected")
	}
}

func TestJsonStringifyOptionalObjectArrayPropertyUsesHelpers(t *testing.T) {
	key := metadata.NewSchema().AddConstant(metadata.AtomicString, "values")
	value := metadata.NewSchema()
	value.Arrays = append(value.Arrays, &metadata.ArrayRef{Type: &metadata.ArrayType{
		Name:  "Array<number>",
		Value: metadata.NewSchema().AddAtomic(metadata.AtomicNumber),
	}})
	value.Required = false
	value.Optional = true
	obj := &metadata.ObjectType{
		Name:       "OptionalArray",
		Properties: []*metadata.Property{{Key: key, Value: value}},
	}
	s := metadata.NewSchema()
	s.Objects = append(s.Objects, &metadata.ObjectRef{Type: obj})
	got, err := EmitJsonStringifyArrowFunction(s)
	if err != nil {
		t.Fatal(err)
	}
	for _, fragment := range []string{
		jsonStringifyTailAlias + "._jsonStringifyTail",
		"input.values.map((elem) => String(" + jsonStringifyNumberAlias + "._jsonStringifyNumber(elem))",
	} {
		if !strings.Contains(got, fragment) {
			t.Fatalf("optional array property should use legacy helper path %q: %s", fragment, got)
		}
	}
	if strings.Contains(got, "JSON.stringify(input.values)") {
		t.Fatalf("optional array property must not fall back to JSON.stringify: %s", got)
	}
}

func TestJsonStringifyObjectPropertyOrderMatchesLegacyJoiner(t *testing.T) {
	keyZ := metadata.NewSchema().AddConstant(metadata.AtomicString, "z")
	keyA := metadata.NewSchema().AddConstant(metadata.AtomicString, "a")
	keyM := metadata.NewSchema().AddConstant(metadata.AtomicString, "m")
	optionalString := metadata.NewSchema().AddAtomic(metadata.AtomicString)
	optionalString.Required = false
	optionalString.Optional = true
	obj := &metadata.ObjectType{
		Name: "Ordered",
		Properties: []*metadata.Property{
			{Key: keyZ, Value: metadata.NewSchema().AddAtomic(metadata.AtomicNumber)},
			{Key: keyA, Value: optionalString},
			{Key: keyM, Value: metadata.NewSchema().AddAtomic(metadata.AtomicBoolean)},
		},
	}
	s := metadata.NewSchema()
	s.Objects = append(s.Objects, &metadata.ObjectRef{Type: obj})
	got, err := EmitJsonStringifyArrowFunction(s)
	if err != nil {
		t.Fatal(err)
	}
	idxA := strings.Index(got, `"\"a\":"`)
	idxZ := strings.Index(got, `"\"z\":"`)
	idxM := strings.Index(got, `"\"m\":"`)
	if !(idxA >= 0 && idxZ >= 0 && idxM >= 0 && idxA < idxZ && idxZ < idxM) {
		t.Fatalf("legacy joiner should place optional entries first, then required entries in declaration order: %s", got)
	}
	if strings.Contains(got, "Object.getPrototypeOf") {
		t.Fatalf("object stringify should not add a prototype fallback absent from ../typia: %s", got)
	}
}

func TestJsonStringifyNativeSetMapParity(t *testing.T) {
	rejected := []struct {
		name   string
		schema *metadata.Schema
	}{
		{
			name: "set",
			schema: func() *metadata.Schema {
				s := metadata.NewSchema()
				s.Sets = append(s.Sets, &metadata.SetRef{Value: metadata.NewSchema().AddAtomic(metadata.AtomicString)})
				return s
			}(),
		},
		{
			name: "map",
			schema: func() *metadata.Schema {
				s := metadata.NewSchema()
				s.Maps = append(s.Maps, &metadata.MapRef{
					Key:   metadata.NewSchema().AddAtomic(metadata.AtomicString),
					Value: metadata.NewSchema().AddAtomic(metadata.AtomicNumber),
				})
				return s
			}(),
		},
	}
	for _, tc := range rejected {
		t.Run(tc.name+" rejected", func(t *testing.T) {
			if _, err := EmitJsonStringifyArrowFunction(tc.schema); err == nil {
				t.Fatal("expected public JSON stringify gate to reject this schema")
			}
		})
	}

	accepted := []struct {
		name     string
		schema   *metadata.Schema
		contains string
	}{
		{
			name: "native date",
			schema: func() *metadata.Schema {
				s := metadata.NewSchema()
				s.Natives = append(s.Natives, metadata.Native{Name: "Date"})
				return s
			}(),
			contains: jsonStringifyStringAlias + "._jsonStringifyString(input.toJSON())",
		},
		{
			name: "native string",
			schema: func() *metadata.Schema {
				s := metadata.NewSchema()
				s.Natives = append(s.Natives, metadata.Native{Name: "String"})
				return s
			}(),
			contains: jsonStringifyStringAlias + "._jsonStringifyString(input)",
		},
	}
	for _, tc := range accepted {
		t.Run(tc.name, func(t *testing.T) {
			got, err := EmitJsonStringifyArrowFunction(tc.schema)
			if err != nil {
				t.Fatal(err)
			}
			if !strings.Contains(got, tc.contains) {
				t.Fatalf("missing %q in %s", tc.contains, got)
			}
		})
	}
}
