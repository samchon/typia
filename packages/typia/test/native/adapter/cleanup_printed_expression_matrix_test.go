//go:build typia_native_internal
// +build typia_native_internal

package adapter

import "testing"

// TestCleanupPrintedExpressionMatrix verifies printed expression normalization.
//
// Adapter emit output is spliced back into TypeScript source, so expression
// text must be stable after printer cleanup. Arrow and function expressions
// need parentheses, existing parentheses must be preserved, and plain values
// should not be wrapped.
//
// 1. Normalize a single-parameter arrow expression.
// 2. Preserve an already-parenthesized function expression.
// 3. Wrap an unparenthesized function expression.
// 4. Leave a plain identifier unchanged.
func TestCleanupPrintedExpressionMatrix(t *testing.T) {
	if text := cleanupPrintedExpression("value => value;"); text != "((value) => value)" {
		t.Fatalf("single-parameter arrow was not normalized: %q", text)
	}
	if text := cleanupPrintedExpression("(function () { return true; });"); text != "(function () { return true; })" {
		t.Fatalf("parenthesized function expression changed unexpectedly: %q", text)
	}
	if text := cleanupPrintedExpression("function () { return true; }"); text != "(function () { return true; })" {
		t.Fatalf("function expression was not wrapped: %q", text)
	}
	if text := cleanupPrintedExpression("input;"); text != "input" {
		t.Fatalf("plain expression changed unexpectedly: %q", text)
	}
}
