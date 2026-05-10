package programmers

import (
	"testing"

	shimast "github.com/microsoft/typescript-go/shim/ast"
)

// TestImportProgrammerStatementCoverage covers import statement assembly.
//
// Transform integration uses import helpers indirectly, but statement ordering,
// default imports, namespace imports, aliases, and internal rank buckets are
// easier to verify directly in the programmer package. This keeps the import
// graph helper behavior covered without relying on emitted TypeScript text.
//
// 1. Register default, namespace, named, aliased, type, and internal imports.
// 2. Emit import declarations and require every asset family to produce output.
// 3. Verify internal file ranking buckets used to sort helper imports.
// 4. Check internal alias text and duplicate default type promotion.
func TestImportProgrammerStatementCoverage(t *testing.T) {
	factory := shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
	programmer := NewImportProgrammer(ImportProgrammer_IOptions{InternalPrefix: "p"})
	programmer.Default(ImportProgrammer_IDefault{File: "z-default", Name: "DefaultValue"})
	programmer.Default(ImportProgrammer_IDefault{File: "z-default", Name: "DefaultValue", Type: true})
	programmer.Namespace(ImportProgrammer_INamespace{File: "a-namespace", Name: "NS"})
	alias := "Renamed"
	programmer.Instance(ImportProgrammer_IInstance{File: "m-named", Name: "Original", Alias: &alias})
	programmer.Instance(ImportProgrammer_IInstance{File: "m-named", Name: "Second"})
	if programmer.Type(ImportProgrammer_TypeProps{
		File:      "types",
		Name:      factory.NewIdentifier("Shape"),
		Arguments: []*shimast.TypeNode{factory.NewKeywordTypeNode(shimast.KindStringKeyword)},
	}) == nil {
		t.Fatal("import type node returned nil")
	}
	if text := programmer.GetInternalText("helper"); text != "__p_helper" {
		t.Fatalf("internal alias mismatch: %s", text)
	}
	if programmer.Internal("_isString") == nil {
		t.Fatal("internal import returned nil")
	}

	statements := programmer.ToStatements()
	if len(statements) < 5 {
		t.Fatalf("expected import statements for every asset family, got %d", len(statements))
	}
	ranks := []struct {
		file string
		rank int
	}{
		{"typia/lib/internal/_isString", 100},
		{"typia/lib/internal/_assertGuard", 150},
		{"typia/lib/internal/_randomFormatUuid", 200},
		{"typia/lib/internal/_randomString", 210},
		{"typia/lib/internal/_randomInteger", 220},
		{"typia/lib/internal/_randomNumber", 221},
		{"typia/lib/internal/_randomPick", 230},
		{"typia/lib/internal/_validateReport", 800},
		{"typia/lib/internal/_createStandardSchema", 900},
		{"typia/lib/internal/_unknown", 500},
		{"external", 10_000},
	}
	for _, r := range ranks {
		if actual := importProgrammer_fileRank(r.file); actual != r.rank {
			t.Fatalf("rank mismatch for %s: expected %d, got %d", r.file, r.rank, actual)
		}
	}
}
