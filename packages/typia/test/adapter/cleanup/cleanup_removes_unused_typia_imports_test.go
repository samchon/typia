package typia_test

import (
	"strings"
	"testing"

	typiaadapter "github.com/samchon/typia/packages/typia/native/adapter"
)

// TestCleanupTransformedTextRemovesUnusedTypiaImports verifies dead typia
// import cleanup.
//
// This test pins the smallest CommonJS output shape produced after a typia call
// has been fully rewritten. In that state the generated file can still contain a
// leftover `require("typia")`, and the cleanup pass must remove only that
// import line while leaving unrelated emitted code intact.
//
// 1. Build a CommonJS snippet with an unused typia require.
// 2. Run the adapter cleanup pass directly.
// 3. Assert the typia require disappeared.
// 4. Assert the non-import JavaScript statement remains.
func TestCleanupTransformedTextRemovesUnusedTypiaImports(t *testing.T) {
	input := strings.Join([]string{
		`"use strict";`,
		`const typia = require("typia");`,
		`exports.value = 1;`,
	}, "\n")

	output := typiaadapter.CleanupTransformedText(input)

	if strings.Contains(output, `require("typia")`) {
		t.Fatalf("unused typia import was not removed:\n%s", output)
	}
	if !strings.Contains(output, `exports.value = 1;`) {
		t.Fatalf("cleanup changed non-import code:\n%s", output)
	}
}
