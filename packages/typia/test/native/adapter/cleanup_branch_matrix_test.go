//go:build typia_native_internal
// +build typia_native_internal

package adapter

import (
	"strings"
	"testing"
)

// TestCleanupBranchMatrix covers cleanup helper edge cases.
//
// Cleanup removes stale typia imports, preserves still-referenced aliases, and
// injects runtime helper imports only when they are missing. These branches are
// mostly string-shaping rules, so they are safest to verify directly.
//
// 1. Remove one unused import while preserving a referenced alias.
// 2. Verify existing runtime imports prevent duplicate injection.
// 3. Exercise helper fallback branches for unmatched regexes and alias names.
// 4. Verify shebang and CommonJS prologue insertion indexes.
func TestCleanupBranchMatrix(t *testing.T) {
	input := strings.Join([]string{
		`const typia = require("typia");`,
		`exports.value = 1;`,
	}, "\n")
	cleaned := CleanupTransformedText(input)
	if strings.Contains(cleaned, `const typia = require("typia");`) {
		t.Fatalf("unused default typia import was not removed:\n%s", cleaned)
	}
	referenced := strings.Join([]string{
		`const typia_1 = require("typia");`,
		`exports.kept = typia_1;`,
	}, "\n")
	if output := CleanupTransformedText(referenced); !strings.Contains(output, `const typia_1 = require("typia");`) {
		t.Fatalf("referenced typia alias should be preserved:\n%s", output)
	}
	mixed := strings.Join([]string{
		`const typia_1 = require("typia");`,
		`const typia_2 = require("typia");`,
		`exports.kept = typia_1;`,
	}, "\n")
	if output := CleanupTransformedText(mixed); strings.Contains(output, `const typia_2 = require("typia");`) {
		t.Fatalf("cleanup should skip referenced alias and continue to remove later aliases:\n%s", output)
	}

	existing := strings.Join([]string{
		`const { _isFormatUuid: __typia_transform__isFormatUuid } = require("typia/lib/internal/_isFormatUuid");`,
		`exports.value = __typia_transform__isFormatUuid(input);`,
	}, "\n")
	if injected := injectRuntimeImports(existing); injected != existing {
		t.Fatalf("existing runtime import should prevent reinjection:\n%s", injected)
	}
	if firstSubmatch(`missing`, `text`) != "" {
		t.Fatal("missing regex capture should return an empty string")
	}
	if runtimeNameOf("__typia_transform_randomString") != "_randomString" {
		t.Fatal("runtime helper names without a leading underscore should be normalized")
	}
	if index := runtimeImportInsertionIndex("#!/usr/bin/env node", false); index != len("#!/usr/bin/env node") {
		t.Fatalf("shebang-only insertion index mismatch: %d", index)
	}
	prefixed := "#!/usr/bin/env node\n\"use strict\";\n/* @ttsc-rewritten */\nexports.value = 1;\n"
	if index := runtimeImportInsertionIndex(prefixed, false); index != len("#!/usr/bin/env node\n\"use strict\";\n/* @ttsc-rewritten */\n") {
		t.Fatalf("CommonJS prologue insertion index mismatch: %d", index)
	}
	if text := CleanupTypeScriptTransformText("call()"); text != "call();\n" {
		t.Fatalf("call-like transformed text should receive a trailing semicolon: %q", text)
	}
}
