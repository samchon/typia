import typia from "typia";

// Create a standalone test to reproduce the exact issue

type M = Map<string, string>;

export const test_map_alias_bug = () => {
    const value: M = new Map<string, string>([
        ["key", "val"],
    ]);

    console.log("=== Testing Map Alias Bug ===");
    
    // Test 1: Direct Map validation (should pass)
    try {
        const validationPlain = typia.validate<Map<string, string>>(value);
        console.log("Plain Map validation success:", validationPlain.success);
        if (validationPlain.success) {
            console.log("Plain Map validation result:", validationPlain.data);
        } else {
            console.log("Plain Map validation errors:", validationPlain.errors);
        }
    } catch (error) {
        console.error("Plain Map validation error:", error);
    }

    // Test 2: Type alias validation (currently fails)
    try {
        const validationAlias = typia.validate<M>(value);
        console.log("Type alias validation success:", validationAlias.success);
        if (validationAlias.success) {
            console.log("Type alias validation result:", validationAlias.data);
        } else {
            console.log("Type alias validation errors:", validationAlias.errors);
        }
    } catch (error) {
        console.error("Type alias validation error:", error);
    }
};