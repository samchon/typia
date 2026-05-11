package typia_test

import (
	"strings"
	"testing"

	typiaadapter "github.com/samchon/typia/packages/typia/native/adapter"
)

// TestCleanupTypeScriptTransformTextNormalizesParenthesizedReturnTypes verifies
// TypeScript cleanup for parenthesized return type annotations.
//
// TypeScript-Go can print some transformed helper signatures with parenthesized
// type annotations that are invalid in the positions typia emits them. The
// adapter cleanup pass owns this normalization before transformed source text is
// returned to the ttsc host.
//
// 1. Build transformed TypeScript snippets with parenthesized return types.
// 2. Run the adapter's TypeScript cleanup pass.
// 3. Assert invalid parenthesized forms are gone.
// 4. Assert the equivalent normalized type annotations remain.
func TestCleanupTypeScriptTransformTextNormalizesParenthesizedReturnTypes(t *testing.T) {
	input := strings.Join([]string{
		`const __assert = (input: any): (ICitizen) => {`,
		`  return input;`,
		`};`,
		`const __stringify = (input: ICitizen): (string) => String(input);`,
		`const encoder = <Writer extends import("typia/lib/internal/_IProtobufWriter")._IProtobufWriter>(writer: Writer): (Writer) => writer;`,
		`const parse = (input: string): string | (null) => input;`,
	}, "\n")

	output := typiaadapter.CleanupTypeScriptTransformText(input)

	for _, forbidden := range []string{
		": (ICitizen) =>",
		": (string) =>",
		": (Writer) =>",
		"| (null)",
	} {
		if strings.Contains(output, forbidden) {
			t.Fatalf("cleanup left invalid parenthesized type %q in:\n%s", forbidden, output)
		}
	}
	for _, expected := range []string{
		": ICitizen =>",
		": string =>",
		": Writer =>",
		"| null",
	} {
		if !strings.Contains(output, expected) {
			t.Fatalf("cleanup missing normalized type %q in:\n%s", expected, output)
		}
	}
}
