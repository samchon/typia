package metadata

import "testing"

// TestMetadataAtomicTagsAreOwned verifies that an atomic, a native and a constant
// value own their tag matrices.
//
// MetadataAtomic, MetadataNative and MetadataConstantValue stored and returned
// the caller's matrix itself, while the alias, array, map and object members
// copy it. The comment-tag step rewrites atomic tag rows in place, so a
// row shared with a constant value, a JSON record or another schema changed
// every holder at once and left a cached name describing tags that were gone.
//
//  1. Create an atomic from a matrix and rewrite and extend the source rows.
//  2. Assert the atomic still holds the original tags and its name is unchanged.
//  3. Rewrite a row of the matrix ToJSON returned and assert the atomic is
//     unchanged.
//  4. Assert nil and empty matrices keep their meaning of "no tags".
//  5. Repeat the create and ToJSON mutations for a native and a constant value.
//
// @evidence contracts/testing.md#behavioral-verification The create functions and ToJSON of the atomic, native and constant value are called and their tags (and the atomic name) are read back after the source and the returned matrix were mutated; the shared-matrix implementation fails the first assertion because the atomic sees the rewritten row.
// @evidence contracts/testing.md#independent-expectations The expected tags and the name `(number & Minimum<1>)` are written as literals from the naming rule, not produced by calling the code under test on the mutated input.
// @evidence contracts/testing.md#distinguishing-cases The in-place rewrite and the append to a row are separate mutations, the ToJSON direction is separate from the create direction, and nil and empty matrices are the cases where nothing may be invented.
// @evidence contracts/testing.md#execution-ownership The canonical native Go command (pnpm test:go:native) runs this same-package Test function in process on plain structs, with no checker, filesystem fixture or process.
func TestMetadataAtomicTagsAreOwned(t *testing.T) {
  source := [][]IMetadataTypeTag{
    {{Name: "Minimum<1>", Kind: "minimum"}},
  }
  source[0] = append(make([]IMetadataTypeTag, 0, 4), source[0]...)
  atomic := MetadataAtomic_create(MetadataAtomic{Type: "number", Tags: source})

  source[0][0] = IMetadataTypeTag{Name: "Maximum<9>", Kind: "maximum"}
  source[0] = append(source[0], IMetadataTypeTag{Name: "Type<\"int32\">", Kind: "type"})
  if len(atomic.Tags) != 1 || len(atomic.Tags[0]) != 1 || atomic.Tags[0][0].Name != "Minimum<1>" {
    t.Fatalf("atomic tags followed the source matrix: %+v", atomic.Tags)
  }
  if name := atomic.GetName(); name != "(number & Minimum<1>)" {
    t.Fatalf("unexpected atomic name: %q", name)
  }

  returned := atomic.ToJSON()
  returned.Tags[0][0] = IMetadataTypeTag{Name: "Maximum<9>", Kind: "maximum"}
  if atomic.Tags[0][0].Name != "Minimum<1>" {
    t.Fatalf("atomic tags followed the matrix returned by ToJSON: %+v", atomic.Tags)
  }

  if tags := MetadataAtomic_create(MetadataAtomic{Type: "string"}).Tags; tags != nil {
    t.Fatalf("a nil matrix must stay nil: %+v", tags)
  }
  if tags := MetadataAtomic_create(MetadataAtomic{Type: "string", Tags: [][]IMetadataTypeTag{}}).Tags; tags == nil || len(tags) != 0 {
    t.Fatalf("an empty matrix must stay empty: %+v", tags)
  }
  native := MetadataNative_create(MetadataNative{Name: "Date", Tags: [][]IMetadataTypeTag{{{Name: "Format<\"date\">"}}}})
  native.ToJSON().Tags[0][0].Name = "Other"
  if native.Tags[0][0].Name != "Format<\"date\">" {
    t.Fatalf("native tags followed the matrix returned by ToJSON: %+v", native.Tags)
  }
  nativeSource := [][]IMetadataTypeTag{{{Name: "Format<\"date\">"}}}
  native = MetadataNative_create(MetadataNative{Name: "Date", Tags: nativeSource})
  nativeSource[0][0].Name = "Other"
  if native.Tags[0][0].Name != "Format<\"date\">" {
    t.Fatalf("native tags followed the source matrix: %+v", native.Tags)
  }

  valueSource := [][]IMetadataTypeTag{{{Name: "Minimum<1>"}}}
  value := MetadataConstantValue_create(MetadataConstantValue{Value: 3, Tags: valueSource})
  valueSource[0][0].Name = "Other"
  if value.Tags[0][0].Name != "Minimum<1>" {
    t.Fatalf("constant value tags followed the source matrix: %+v", value.Tags)
  }
  value.ToJSON().Tags[0][0].Name = "Other"
  if value.Tags[0][0].Name != "Minimum<1>" {
    t.Fatalf("constant value tags followed the matrix returned by ToJSON: %+v", value.Tags)
  }
}
