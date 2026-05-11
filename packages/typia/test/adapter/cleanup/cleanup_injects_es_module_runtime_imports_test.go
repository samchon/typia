package typia_test

import (
	"strings"
	"testing"

	typiaadapter "github.com/samchon/typia/packages/typia/native/adapter"
)

// TestCleanupTransformedTextInjectsESModuleRuntimeImports verifies ESM helper
// import injection.
//
// The cleanup pass must switch import syntax based on emitted module shape. This
// test pins the ESM branch so a future change cannot accidentally inject
// CommonJS `require` statements into output that already uses `export`.
//
// 1. Build ESM output that references one typia runtime helper alias.
// 2. Run the adapter cleanup pass directly.
// 3. Assert the corresponding named ESM import is injected at the top.
func TestCleanupTransformedTextInjectsESModuleRuntimeImports(t *testing.T) {
	input := strings.Join([]string{
		`export const value = __typia_transform__validateReport(input);`,
	}, "\n")

	output := typiaadapter.CleanupTransformedText(input)

	expected := `import { _validateReport as __typia_transform__validateReport } from "typia/lib/internal/_validateReport";`
	if !strings.HasPrefix(output, expected+"\n") {
		t.Fatalf("ES module helper import was not injected at the top:\n%s", output)
	}
}
