package typia_test

import (
	"strings"
	"testing"

	typiaadapter "github.com/samchon/typia/packages/typia/native/adapter"
)

// TestCleanupTransformedTextPreservesReferencedTypiaImports verifies cleanup
// does not remove live typia imports.
//
// The cleanup pass scans by alias, so it must distinguish an import left behind
// by a fully rewritten call from an import still referenced by emitted runtime
// code. This unit test guards that alias-reference boundary without invoking the
// TypeScript compiler or the source plugin host.
//
// 1. Build a CommonJS snippet where the typia alias is still used.
// 2. Run the adapter cleanup pass directly.
// 3. Assert the typia import remains in the output.
func TestCleanupTransformedTextPreservesReferencedTypiaImports(t *testing.T) {
	input := strings.Join([]string{
		`const typia = require("typia");`,
		`exports.value = typia.is;`,
	}, "\n")

	output := typiaadapter.CleanupTransformedText(input)

	if !strings.Contains(output, `const typia = require("typia");`) {
		t.Fatalf("referenced typia import was removed:\n%s", output)
	}
}
