import typia from "typia";

// Test case that reproduces the exact issue from the bug report
export const test_map_alias_validation = (): void => {
    type M = Map<string, string>;

    const value: M = new Map<string, string>([
        ["key", "val"],
    ]);

    const validationPlain = typia.validate<Map<string, string>>(value);
    const validationAlias = typia.validate<M>(value);

    // Both should succeed
    if (!validationPlain.success) {
        throw new Error("Plain Map validation failed - this is unexpected");
    }

    if (!validationAlias.success) {
        throw new Error("Type alias validation failed - this was the bug being fixed");
    }

    // Both should return the same Map instance
    if (validationPlain.data !== value) {
        throw new Error("Plain Map validation did not preserve the original instance");
    }

    if (validationAlias.data !== value) {
        throw new Error("Type alias validation did not preserve the original instance");
    }

    console.log("✅ Map alias validation test passed!");
};

export const test_map_alias_complex = (): void => {
    // Test more complex type aliases
    type StringNumberMap = Map<string, number>;
    type NestedMap = Map<string, Map<number, boolean>>;

    const simpleMap: StringNumberMap = new Map([
        ["one", 1],
        ["two", 2],
    ]);

    const nestedMap: NestedMap = new Map([
        ["level1", new Map([[1, true], [2, false]])],
    ]);

    const simpleValidation = typia.validate<StringNumberMap>(simpleMap);
    const nestedValidation = typia.validate<NestedMap>(nestedMap);

    if (!simpleValidation.success) {
        throw new Error("Simple Map alias validation failed");
    }

    if (!nestedValidation.success) {
        throw new Error("Nested Map alias validation failed");
    }

    console.log("✅ Complex Map alias validation test passed!");
};

if (require.main === module) {
    test_map_alias_validation();
    test_map_alias_complex();
}