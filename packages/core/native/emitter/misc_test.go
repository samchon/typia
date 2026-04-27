package emitter

import (
	"strings"
	"testing"

	"github.com/samchon/typia/packages/core/native/metadata"
)

func TestMiscPruneDeletesUnknownKeysForDynamicObject(t *testing.T) {
	key := metadata.NewSchema()
	key.Templates = append(key.Templates, metadata.Template{
		RawName: "`prefix_${string}`",
	})

	value := metadata.NewSchema().AddAtomic(metadata.AtomicString)
	obj := &metadata.ObjectType{
		Name: "DynamicTemplate",
		DynamicProperties: []*metadata.Property{
			{Key: key, Value: value},
		},
		// Analyzer keeps the merged index-signature value here too. Prune must
		// still delete keys that do not match the declared dynamic-key pattern.
		AdditionalProperties: metadata.NewSchema().AddAtomic(metadata.AtomicString),
	}
	schema := metadata.NewSchema()
	schema.Objects = append(schema.Objects, &metadata.ObjectRef{Type: obj})

	got, err := EmitMiscPruneArrowFunction(schema)
	if err != nil {
		t.Fatal(err)
	}
	if strings.Contains(got, `continue; delete v[__k];`) {
		t.Fatalf("unexpected unreachable delete fallback in prune emitter:\n%s", got)
	}
	if !strings.Contains(got, `delete v[__k];`) {
		t.Fatalf("expected prune emitter to delete unknown keys, got:\n%s", got)
	}
}

func TestMiscCloneAnyUsesLegacyInternalHelper(t *testing.T) {
	schema := metadata.NewSchema()
	schema.Any = true
	got, err := EmitMiscCloneArrowFunction(schema)
	if err != nil {
		t.Fatal(err)
	}
	if !strings.Contains(got, miscCloneAnyImportAlias+"._miscCloneAny(input)") {
		t.Fatalf("any clone should delegate to legacy _miscCloneAny helper: %s", got)
	}
}

func TestMiscCloneNativeUsesLegacyShape(t *testing.T) {
	tests := []struct {
		name     string
		expected string
	}{
		{name: "String", expected: "input.valueOf()"},
		{name: "Date", expected: "new Date(input)"},
		{name: "RegExp", expected: "new RegExp(input)"},
		{name: "ArrayBuffer", expected: "new ArrayBuffer(input.byteLength)"},
		{name: "SharedArrayBuffer", expected: "new SharedArrayBuffer(input.byteLength)"},
		{name: "DataView", expected: "new DataView(input.buffer)"},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			schema := metadata.NewSchema()
			schema.Natives = append(schema.Natives, metadata.Native{Name: tt.name})
			got, err := EmitMiscCloneArrowFunction(schema)
			if err != nil {
				t.Fatal(err)
			}
			if !strings.Contains(got, tt.expected) {
				t.Fatalf("native clone should contain %q:\n%s", tt.expected, got)
			}
		})
	}
}

func TestMiscCloneStaticObjectUsesSchemaShape(t *testing.T) {
	member := &metadata.ObjectType{
		Name: "Member",
		Properties: []*metadata.Property{
			{Key: metadata.NewSchema().AddConstant(metadata.AtomicString, "id"), Value: metadata.NewSchema().AddAtomic(metadata.AtomicString)},
			{Key: metadata.NewSchema().AddConstant(metadata.AtomicString, "name"), Value: metadata.NewSchema().AddAtomic(metadata.AtomicString)},
		},
	}
	schema := metadata.NewSchema()
	schema.Objects = append(schema.Objects, &metadata.ObjectRef{Type: member})
	got, err := EmitMiscCloneArrowFunction(schema)
	if err != nil {
		t.Fatal(err)
	}
	for _, fragment := range []string{`id: input.id`, `name: input.name`} {
		if !strings.Contains(got, fragment) {
			t.Fatalf("static object clone should contain %q:\n%s", fragment, got)
		}
	}
	if strings.Contains(got, `const __clone = (v)`) {
		t.Fatalf("static object clone should not fall back to generic walker:\n%s", got)
	}
}

func TestMiscCloneArrayUsesMapShape(t *testing.T) {
	elem := metadata.NewSchema().AddAtomic(metadata.AtomicString)
	schema := metadata.NewSchema()
	schema.Arrays = append(schema.Arrays, &metadata.ArrayRef{
		Type: &metadata.ArrayType{Value: elem},
	})
	got, err := EmitMiscCloneArrowFunction(schema)
	if err != nil {
		t.Fatal(err)
	}
	if !strings.Contains(got, `input.map((elem) => elem)`) {
		t.Fatalf("array clone should use schema-shaped map:\n%s", got)
	}
}

func TestMiscCloneUnionUsesConditionalSchemaShape(t *testing.T) {
	obj := &metadata.ObjectType{
		Name: "UnionMember",
		Properties: []*metadata.Property{
			{Key: metadata.NewSchema().AddConstant(metadata.AtomicString, "id"), Value: metadata.NewSchema().AddAtomic(metadata.AtomicString)},
		},
	}
	schema := metadata.NewSchema()
	schema.Atomics = append(schema.Atomics, metadata.Atomic{Type: metadata.AtomicString})
	schema.Objects = append(schema.Objects, &metadata.ObjectRef{Type: obj})
	got, err := EmitMiscCloneArrowFunction(schema)
	if err != nil {
		t.Fatal(err)
	}
	for _, fragment := range []string{`const __is_0 =`, `return __is_0(input)`, `id: input.id`, `: input`} {
		if !strings.Contains(got, fragment) {
			t.Fatalf("union clone should contain %q:\n%s", fragment, got)
		}
	}
	if strings.Contains(got, `const __clone = (v)`) {
		t.Fatalf("union clone should not fall back to generic walker:\n%s", got)
	}
}

func TestMiscCloneDynamicObjectUsesSchemaShape(t *testing.T) {
	key := metadata.NewSchema()
	key.Templates = append(key.Templates, metadata.Template{
		RawName: "`extra_${string}`",
	})
	obj := &metadata.ObjectType{
		Name: "DynamicClone",
		Properties: []*metadata.Property{
			{Key: metadata.NewSchema().AddConstant(metadata.AtomicString, "fixed"), Value: metadata.NewSchema().AddAtomic(metadata.AtomicString)},
		},
		DynamicProperties: []*metadata.Property{
			{Key: key, Value: metadata.NewSchema().AddAtomic(metadata.AtomicString)},
		},
	}
	schema := metadata.NewSchema()
	schema.Objects = append(schema.Objects, &metadata.ObjectRef{Type: obj})
	got, err := EmitMiscCloneArrowFunction(schema)
	if err != nil {
		t.Fatal(err)
	}
	for _, fragment := range []string{`const output = ({fixed: input.fixed})`, `Object.entries(input)`, `__regular.has(key)`, `output[key] = value`} {
		if !strings.Contains(got, fragment) {
			t.Fatalf("dynamic clone should contain %q:\n%s", fragment, got)
		}
	}
	if strings.Contains(got, `const __clone = (v)`) {
		t.Fatalf("dynamic object clone should not fall back to generic walker:\n%s", got)
	}
}

func TestMiscCloneAdditionalObjectUsesSchemaShape(t *testing.T) {
	obj := &metadata.ObjectType{
		Name:                 "AdditionalClone",
		AdditionalProperties: metadata.NewSchema().AddAtomic(metadata.AtomicString),
	}
	schema := metadata.NewSchema()
	schema.Objects = append(schema.Objects, &metadata.ObjectRef{Type: obj})
	got, err := EmitMiscCloneArrowFunction(schema)
	if err != nil {
		t.Fatal(err)
	}
	for _, fragment := range []string{`const output = ({})`, `Object.entries(input)`, `output[key] = value`} {
		if !strings.Contains(got, fragment) {
			t.Fatalf("additional clone should contain %q:\n%s", fragment, got)
		}
	}
	if strings.Contains(got, `const __clone = (v)`) {
		t.Fatalf("additional object clone should not fall back to generic walker:\n%s", got)
	}
}

func TestMiscCloneRecursiveObjectUsesLocalHelper(t *testing.T) {
	obj := &metadata.ObjectType{Name: "Tree", Recursive: true}
	node := metadata.NewSchema()
	node.Objects = append(node.Objects, &metadata.ObjectRef{Type: obj})
	children := metadata.NewSchema()
	children.Arrays = append(children.Arrays, &metadata.ArrayRef{Type: &metadata.ArrayType{Value: node}})
	obj.Properties = []*metadata.Property{
		{Key: metadata.NewSchema().AddConstant(metadata.AtomicString, "name"), Value: metadata.NewSchema().AddAtomic(metadata.AtomicString)},
		{Key: metadata.NewSchema().AddConstant(metadata.AtomicString, "children"), Value: children},
	}
	schema := metadata.NewSchema()
	schema.Objects = append(schema.Objects, &metadata.ObjectRef{Type: obj})
	got, err := EmitMiscCloneArrowFunction(schema)
	if err != nil {
		t.Fatal(err)
	}
	for _, fragment := range []string{`const __clone_obj_0 = (v) =>`, `children: v.children.map((elem) => __clone_obj_0(elem))`, `return __clone_obj_0(input)`} {
		if !strings.Contains(got, fragment) {
			t.Fatalf("recursive clone should contain %q:\n%s", fragment, got)
		}
	}
	if strings.Contains(got, `const __clone = (v)`) {
		t.Fatalf("recursive object clone should not fall back to generic walker:\n%s", got)
	}
}
