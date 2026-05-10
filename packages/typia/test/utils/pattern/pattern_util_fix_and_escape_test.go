package typia_test

import (
	"testing"

	utils "github.com/samchon/typia/packages/typia/native/core/utils"
)

// TestPatternUtilFixAndEscape verifies regex pattern anchoring and escaping.
//
// Typia tags use generated regular expressions for string-like formats and
// pattern constraints. This test pins the utility behavior that anchors
// standalone patterns, leaves already captured template-string fragments alone,
// and escapes characters that are special in JavaScript regular expressions.
//
// 1. Assert a standalone numeric pattern is anchored.
// 2. Assert a captured template string pattern is not double anchored.
// 3. Escape a representative string containing regex metacharacters.
// 4. Assert every special character receives the expected escape form.
func TestPatternUtilFixAndEscape(t *testing.T) {
	if actual := utils.PatternUtil.Fix(utils.PatternUtil.NUMBER); actual != "^"+utils.PatternUtil.NUMBER+"$" {
		t.Fatalf("number pattern should be anchored: %q", actual)
	}
	if actual := utils.PatternUtil.Fix("(" + utils.PatternUtil.STRING + ")"); actual != "("+utils.PatternUtil.STRING+")" {
		t.Fatalf("captured string pattern should not be double anchored: %q", actual)
	}

	input := `a+b?(x)[y]{z}|/$^-*.`
	expected := `a\+b\?\(x\)\[y\]\{z\}\|\/\$\^\x2d\*\.`
	if actual := utils.PatternUtil.Escape(input); actual != expected {
		t.Fatalf("escaped pattern mismatch:\nexpected %q\nactual   %q", expected, actual)
	}
}
