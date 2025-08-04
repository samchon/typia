// Exact test case from the issue report
import typia from "typia";

type M = Map<string, string>;

const value: M = new Map<string, string>([
    ["key", "val"],
]);

// Test 1: Plain Map validation (should work)
try {
    const validationPlain = typia.validate<Map<string, string>>(value);
    console.log("✓ Plain Map validation:", validationPlain.success ? "PASS" : "FAIL");
    if (!validationPlain.success) {
        console.log("  Errors:", validationPlain.errors);
    }
} catch (e) {
    console.log("✗ Plain Map validation: ERROR", e);
}

// Test 2: Type alias validation (this was failing before the fix)
try {
    const validationAlias = typia.validate<M>(value);
    console.log("✓ Type alias validation:", validationAlias.success ? "PASS" : "FAIL");
    if (!validationAlias.success) {
        console.log("  Errors:", validationAlias.errors);
    }
} catch (e) {
    console.log("✗ Type alias validation: ERROR", e);
}

console.log("Map alias bug fix test completed.");