package metadata

import "testing"

// TestMetadataSchemaMergeKeepsInputs verifies that MetadataSchema_merge builds
// its result without editing either input.
//
// The merge started from the left schema's own atomic, array, set and constant
// records and then appended the right schema's tag rows and constant values to
// them, so merging the property schemas of an object changed those properties
// for every later reader, and a record taken from the right schema could be
// edited by the next merge of a chain.
//
//  1. Merge two schemas whose atomic of the same type and constant bucket of the
//     same type carry different tag rows and values.
//  2. Assert the result holds both tag rows and the union of the values.
//  3. Assert neither input changed.
//  4. Merge the result with a third schema and assert the second input is still
//     unchanged, which is the chained use.
//  5. Preserve a right-only template and distinct template alternatives, then
//     merge equal template bases with different tags without editing inputs.
//
// @evidence contracts/testing.md#behavioral-verification MetadataSchema_merge is called on authored schemas and the result/input rows, literals and templates are asserted. In-place merging fails input ownership assertions, and dropping right-side templates fails right-only and distinct-base cases.
// @evidence contracts/testing.md#independent-expectations The expected rows and values are the authored ones in the test, a union that follows from the definition of merging, and not values read from the implementation.
// @evidence contracts/testing.md#distinguishing-cases Atomic/literal and chained ownership cases are joined by right-only templates, distinct bases and equal bases with different tag rows. Warmed input names and an edited result separate output naming and row ownership from input state.
// @evidence contracts/testing.md#execution-ownership The canonical native Go command (pnpm test:go:native) runs this same-package Test function in process on constructed schemas, with no checker, filesystem fixture or process.
func TestMetadataSchemaMergeKeepsInputs(t *testing.T) {
  build := func(tag string, values ...any) *MetadataSchema {
    schema := MetadataSchema_initialize()
    schema.Atomics = append(schema.Atomics, MetadataAtomic_create(MetadataAtomic{
      Type: "string",
      Tags: [][]IMetadataTypeTag{{{Name: tag, Kind: "format", Validate: "true"}}},
    }))
    constants := []*MetadataConstantValue{}
    for _, value := range values {
      constants = append(constants, MetadataConstantValue_create(MetadataConstantValue{Value: value}))
    }
    schema.Constants = append(schema.Constants, MetadataConstant_create(MetadataConstant{Type: "string", Values: constants}))
    return schema
  }
  left := build("A", "a")
  right := build("B", "b", "c")
  third := build("C", "d")

  merged := MetadataSchema_merge(left, right)
  if len(merged.Atomics) != 1 || len(merged.Atomics[0].Tags) != 2 {
    t.Fatalf("merged atomic should carry both tag rows: %+v", merged.Atomics)
  }
  if len(merged.Constants) != 1 || len(merged.Constants[0].Values) != 3 {
    t.Fatalf("merged constants should carry the three values: %+v", merged.Constants)
  }

  if len(left.Atomics[0].Tags) != 1 || left.Atomics[0].Tags[0][0].Name != "A" {
    t.Fatalf("the left atomic was edited by the merge: %+v", left.Atomics[0].Tags)
  }
  if len(left.Constants[0].Values) != 1 {
    t.Fatalf("the left constants were edited by the merge: %+v", left.Constants[0].Values)
  }
  if len(right.Atomics[0].Tags) != 1 || len(right.Constants[0].Values) != 2 {
    t.Fatalf("the right schema was edited by the merge: %+v %+v", right.Atomics[0].Tags, right.Constants[0].Values)
  }

  chained := MetadataSchema_merge(merged, third)
  if len(chained.Atomics[0].Tags) != 3 || len(chained.Constants[0].Values) != 4 {
    t.Fatalf("chained merge should carry every row and value: %+v %+v", chained.Atomics[0].Tags, chained.Constants[0].Values)
  }
  if len(merged.Atomics[0].Tags) != 2 || len(merged.Constants[0].Values) != 3 {
    t.Fatalf("the first merge result was edited by the chained merge: %+v %+v", merged.Atomics[0].Tags, merged.Constants[0].Values)
  }
  if len(third.Atomics[0].Tags) != 1 || len(third.Constants[0].Values) != 1 {
    t.Fatalf("the third schema was edited by the chained merge: %+v %+v", third.Atomics[0].Tags, third.Constants[0].Values)
  }

  template := func(text string, tag string) *MetadataTemplate {
    literal := MetadataSchema_initialize()
    literal.Constants = []*MetadataConstant{MetadataConstant_create(MetadataConstant{
      Type:   "string",
      Values: []*MetadataConstantValue{MetadataConstantValue_create(MetadataConstantValue{Value: text})},
    })}
    return MetadataTemplate_create(MetadataTemplate{
      Row:  []*MetadataSchema{literal},
      Tags: [][]IMetadataTypeTag{{{Name: tag, Kind: "pattern", Validate: "true"}}},
    })
  }
  templateSchema := func(text string, tag string) *MetadataSchema {
    schema := MetadataSchema_initialize()
    schema.Templates = []*MetadataTemplate{template(text, tag)}
    return schema
  }

  rightOnly := MetadataSchema_merge(MetadataSchema_initialize(), templateSchema("right", "Right"))
  if len(rightOnly.Templates) != 1 || rightOnly.Templates[0].GetBaseName() != "`right`" {
    t.Fatalf("a right-only template was lost: %+v", rightOnly.Templates)
  }
  distinct := MetadataSchema_merge(templateSchema("left", "Left"), templateSchema("right", "Right"))
  if len(distinct.Templates) != 2 || distinct.Templates[0].GetBaseName() != "`left`" || distinct.Templates[1].GetBaseName() != "`right`" {
    t.Fatalf("distinct template alternatives were not preserved: %+v", distinct.Templates)
  }

  templateLeft := templateSchema("shared", "Left")
  templateRight := templateSchema("shared", "Right")
  if templateLeft.GetName() != "(`shared` & Left)" || templateRight.GetName() != "(`shared` & Right)" {
    t.Fatal("unexpected input template names")
  }
  sameBase := MetadataSchema_merge(templateLeft, templateRight)
  if len(sameBase.Templates) != 1 || len(sameBase.Templates[0].Tags) != 2 || sameBase.GetName() != "(`shared` & (Left | Right))" {
    t.Fatalf("same-base templates did not combine their tag alternatives: %q", sameBase.GetName())
  }
  if len(templateLeft.Templates[0].Tags) != 1 || len(templateRight.Templates[0].Tags) != 1 || templateLeft.GetName() != "(`shared` & Left)" || templateRight.GetName() != "(`shared` & Right)" {
    t.Fatal("template merging edited an input's rows or names")
  }
  sameBase.Templates[0].Tags[0][0].Name = "Changed"
  sameBase.Templates[0].Row[0].Optional = true
  if templateLeft.Templates[0].Tags[0][0].Name != "Left" || templateRight.Templates[0].Tags[0][0].Name != "Right" || templateLeft.Templates[0].Row[0].Optional || templateRight.Templates[0].Row[0].Optional {
    t.Fatal("the merged template shares editable rows or row roots with an input")
  }
}
