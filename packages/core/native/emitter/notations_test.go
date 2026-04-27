package emitter

import (
	"strings"
	"testing"

	"github.com/samchon/typia/packages/core/native/metadata"
)

func TestNotationAnyUsesLegacyInternalHelper(t *testing.T) {
	schema := metadata.NewSchema()
	schema.Any = true
	got, err := EmitNotationArrowFunction(schema, "camel")
	if err != nil {
		t.Fatal(err)
	}
	expected := notationAnyImportAlias + "._notationAny(" + notationCamelImportAlias + "._notationCamel)(input)"
	if !strings.Contains(got, expected) {
		t.Fatalf("any notation should delegate to legacy helpers:\n%s", got)
	}
}

func TestNotationAnyArrayUsesLegacyInternalHelper(t *testing.T) {
	value := metadata.NewSchema()
	value.Any = true
	schema := metadata.NewSchema()
	schema.Arrays = append(schema.Arrays, &metadata.ArrayRef{
		Type: &metadata.ArrayType{Value: value},
	})
	got, err := EmitNotationArrowFunction(schema, "snake")
	if err != nil {
		t.Fatal(err)
	}
	expected := notationAnyImportAlias + "._notationAny(" + notationSnakeImportAlias + "._notationSnake)(input)"
	if !strings.Contains(got, expected) {
		t.Fatalf("any-array notation should delegate to legacy helpers:\n%s", got)
	}
}

func TestNotationAllAnyTupleUsesLegacyInternalHelper(t *testing.T) {
	first := metadata.NewSchema()
	first.Any = true
	second := metadata.NewSchema()
	second.Any = true
	schema := metadata.NewSchema()
	schema.Tuples = append(schema.Tuples, &metadata.TupleRef{
		Type: &metadata.TupleType{Elements: []*metadata.Schema{first, second}},
	})
	got, err := EmitNotationArrowFunction(schema, "pascal")
	if err != nil {
		t.Fatal(err)
	}
	expected := notationAnyImportAlias + "._notationAny(" + notationPascalImportAlias + "._notationPascal)(input)"
	if !strings.Contains(got, expected) {
		t.Fatalf("all-any tuple notation should delegate to legacy helpers:\n%s", got)
	}
}

func TestNotationStaticObjectUsesSchemaShape(t *testing.T) {
	obj := &metadata.ObjectType{
		Name: "User",
		Properties: []*metadata.Property{
			{Key: metadata.NewSchema().AddConstant(metadata.AtomicString, "first_name"), Value: metadata.NewSchema().AddAtomic(metadata.AtomicString)},
			{Key: metadata.NewSchema().AddConstant(metadata.AtomicString, "last_name"), Value: metadata.NewSchema().AddAtomic(metadata.AtomicString)},
		},
	}
	schema := metadata.NewSchema()
	schema.Objects = append(schema.Objects, &metadata.ObjectRef{Type: obj})
	got, err := EmitNotationArrowFunction(schema, "camel")
	if err != nil {
		t.Fatal(err)
	}
	for _, fragment := range []string{`firstName: input.first_name`, `lastName: input.last_name`} {
		if !strings.Contains(got, fragment) {
			t.Fatalf("static notation object should contain %q:\n%s", fragment, got)
		}
	}
	if strings.Contains(got, `const __walk =`) {
		t.Fatalf("static notation object should not fall back to generic walker:\n%s", got)
	}
}

func TestNotationSnakeNameMatchesLegacyEdge(t *testing.T) {
	if got := renameNotationKey("snake", "__userID"); got != "__user_id" {
		t.Fatalf("unexpected snake key: %s", got)
	}
	if got := renameNotationKey("snake", "__lower"); got != "lower" {
		t.Fatalf("legacy _notationSnake drops prefix when no uppercase boundary; got %s", got)
	}
}

func TestNotationUnionUsesConditionalSchemaShape(t *testing.T) {
	obj := &metadata.ObjectType{
		Name: "UnionUser",
		Properties: []*metadata.Property{
			{Key: metadata.NewSchema().AddConstant(metadata.AtomicString, "first_name"), Value: metadata.NewSchema().AddAtomic(metadata.AtomicString)},
		},
	}
	schema := metadata.NewSchema()
	schema.Atomics = append(schema.Atomics, metadata.Atomic{Type: metadata.AtomicString})
	schema.Objects = append(schema.Objects, &metadata.ObjectRef{Type: obj})
	got, err := EmitNotationArrowFunction(schema, "camel")
	if err != nil {
		t.Fatal(err)
	}
	for _, fragment := range []string{`const __is_0 =`, `return __is_0(input)`, `firstName: input.first_name`, `: input`} {
		if !strings.Contains(got, fragment) {
			t.Fatalf("union notation should contain %q:\n%s", fragment, got)
		}
	}
	if strings.Contains(got, `const __walk =`) {
		t.Fatalf("union notation should not fall back to generic walker:\n%s", got)
	}
}

func TestNotationDynamicObjectUsesSchemaShape(t *testing.T) {
	key := metadata.NewSchema()
	key.Templates = append(key.Templates, metadata.Template{
		RawName: "`extra_${string}`",
	})
	obj := &metadata.ObjectType{
		Name: "DynamicNotation",
		Properties: []*metadata.Property{
			{Key: metadata.NewSchema().AddConstant(metadata.AtomicString, "fixed_value"), Value: metadata.NewSchema().AddAtomic(metadata.AtomicString)},
		},
		DynamicProperties: []*metadata.Property{
			{Key: key, Value: metadata.NewSchema().AddAtomic(metadata.AtomicString)},
		},
	}
	schema := metadata.NewSchema()
	schema.Objects = append(schema.Objects, &metadata.ObjectRef{Type: obj})
	got, err := EmitNotationArrowFunction(schema, "camel")
	if err != nil {
		t.Fatal(err)
	}
	for _, fragment := range []string{`const output = ({fixedValue: input.fixed_value})`, `Object.entries(input)`, `__regular.has(key)`, `output[key] = value`} {
		if !strings.Contains(got, fragment) {
			t.Fatalf("dynamic notation should contain %q:\n%s", fragment, got)
		}
	}
	if strings.Contains(got, `const __walk =`) {
		t.Fatalf("dynamic object notation should not fall back to generic walker:\n%s", got)
	}
}

func TestNotationAdditionalObjectUsesSchemaShape(t *testing.T) {
	obj := &metadata.ObjectType{
		Name:                 "AdditionalNotation",
		AdditionalProperties: metadata.NewSchema().AddAtomic(metadata.AtomicString),
	}
	schema := metadata.NewSchema()
	schema.Objects = append(schema.Objects, &metadata.ObjectRef{Type: obj})
	got, err := EmitNotationArrowFunction(schema, "camel")
	if err != nil {
		t.Fatal(err)
	}
	for _, fragment := range []string{`const output = ({})`, `Object.entries(input)`, `output[key] = value`} {
		if !strings.Contains(got, fragment) {
			t.Fatalf("additional notation should contain %q:\n%s", fragment, got)
		}
	}
	if strings.Contains(got, `const __walk =`) {
		t.Fatalf("additional object notation should not fall back to generic walker:\n%s", got)
	}
}

func TestNotationRecursiveObjectUsesLocalHelper(t *testing.T) {
	obj := &metadata.ObjectType{Name: "Tree", Recursive: true}
	node := metadata.NewSchema()
	node.Objects = append(node.Objects, &metadata.ObjectRef{Type: obj})
	children := metadata.NewSchema()
	children.Arrays = append(children.Arrays, &metadata.ArrayRef{Type: &metadata.ArrayType{Value: node}})
	obj.Properties = []*metadata.Property{
		{Key: metadata.NewSchema().AddConstant(metadata.AtomicString, "name_value"), Value: metadata.NewSchema().AddAtomic(metadata.AtomicString)},
		{Key: metadata.NewSchema().AddConstant(metadata.AtomicString, "children"), Value: children},
	}
	schema := metadata.NewSchema()
	schema.Objects = append(schema.Objects, &metadata.ObjectRef{Type: obj})
	got, err := EmitNotationArrowFunction(schema, "camel")
	if err != nil {
		t.Fatal(err)
	}
	for _, fragment := range []string{`const __notation_obj_0 = (v) =>`, `nameValue: v.name_value`, `children: v.children.map((elem) => __notation_obj_0(elem))`, `return __notation_obj_0(input)`} {
		if !strings.Contains(got, fragment) {
			t.Fatalf("recursive notation should contain %q:\n%s", fragment, got)
		}
	}
	if strings.Contains(got, `const __walk =`) {
		t.Fatalf("recursive object notation should not fall back to generic walker:\n%s", got)
	}
}
