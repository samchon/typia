package typia_test

import (
	"strings"
	"testing"

	typiaadapter "github.com/samchon/typia/packages/typia/native/adapter"
)

// TestCleanupTransformedTextInjectsRuntimeImports verifies CommonJS helper
// import injection.
//
// Some native emitters reference typia runtime helpers through
// `__typia_transform_*` aliases. The cleanup pass owns the last-mile import
// injection for those aliases, including respecting the CommonJS `"use strict"`
// prefix emitted by TypeScript-Go.
//
// 1. Build CommonJS output that references one typia runtime helper alias.
// 2. Run the adapter cleanup pass directly.
// 3. Assert the corresponding `require` destructuring import is injected.
// 4. Assert that import appears after the use-strict prefix.
func TestCleanupTransformedTextInjectsRuntimeImports(t *testing.T) {
	input := strings.Join([]string{
		`"use strict";`,
		`exports.value = __typia_transform__isFormatUuid(input);`,
	}, "\n")

	output := typiaadapter.CleanupTransformedText(input)

	expected := `const { _isFormatUuid: __typia_transform__isFormatUuid } = require("typia/lib/internal/_isFormatUuid");`
	if !strings.Contains(output, expected) {
		t.Fatalf("runtime helper import was not injected:\n%s", output)
	}
	if strings.Index(output, expected) < strings.Index(output, `"use strict";`) {
		t.Fatalf("runtime helper import must follow use-strict prefix:\n%s", output)
	}
}
