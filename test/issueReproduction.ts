import typia from "typia";

/**
 * Test for exactOptionalPropertyTypes behavior
 * Based on GitHub issue #1617
 */

// Ensure exactOptionalPropertyTypes is on in tsconfig.json

type T = { property?: string };

console.log("=== Reproducing Issue #1617 ===");
console.log("TypeScript exactOptionalPropertyTypes is enabled in test/tsconfig.json");
console.log("");

// Test case from the issue
console.log("From the issue example:");
console.log('type T = { property?: string };');
console.log("");

// This should compile-time error with exactOptionalPropertyTypes (commented out to avoid error)
// const x: T = { property: undefined }; // Error: 'undefined' is not assignable to type 'string'

console.log("Runtime validation tests:");

// The issue: this should throw but doesn't
console.log("typia.is<T>({ property: undefined }):", typia.is<T>({ property: undefined }));
console.log("Expected with exactOptionalPropertyTypes: false");
console.log("Actual result: true (BUG)");
console.log("");

// These should work regardless
console.log("typia.is<T>({}):", typia.is<T>({}));
console.log("Expected: true");
console.log("");

console.log("typia.is<T>({ property: 'test' }):", typia.is<T>({ property: "test" }));
console.log("Expected: true");
console.log("");

// Test explicit undefined union type
type TWithExplicitUndefined = { property?: string | undefined };
console.log("typia.is<TWithExplicitUndefined>({ property: undefined }):", typia.is<TWithExplicitUndefined>({ property: undefined }));
console.log("Expected: true (explicit undefined is allowed)");
console.log("");

console.log("=== Summary ===");
console.log("Issue: When exactOptionalPropertyTypes is enabled, typia should reject");
console.log("explicit undefined for optional properties that don't explicitly include undefined.");
console.log("");
console.log("Current status: Bug reproduced - typia.is allows undefined when it shouldn't");