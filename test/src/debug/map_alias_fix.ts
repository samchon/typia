import typia from "typia";

// Simple test to verify the Map alias fix
function test() {
    console.log("Testing Map type alias validation fix...");

    // Test case from the bug report
    type M = Map<string, string>;

    const value: M = new Map<string, string>([
        ["key", "val"],
    ]);

    try {
        const validationPlain = typia.validate<Map<string, string>>(value);
        console.log("✓ Plain Map validation:", validationPlain.success ? "PASS" : "FAIL");
        
        const validationAlias = typia.validate<M>(value);
        console.log("✓ Type alias validation:", validationAlias.success ? "PASS" : "FAIL");
        
        if (validationPlain.success && validationAlias.success) {
            console.log("🎉 Bug fix successful - both tests pass!");
        } else {
            console.log("❌ Bug still exists");
            if (!validationPlain.success) {
                console.log("Plain validation errors:", validationPlain.errors);
            }
            if (!validationAlias.success) {
                console.log("Alias validation errors:", validationAlias.errors);
            }
        }
    } catch (error) {
        console.error("Error during test:", error);
    }
}

test();