import typia from "typia";

// Replicate the exact example from the issue
type T = {property?: string};

// This should work - testing with the exact issue example
console.log("=== Issue Example Tests ===");

// Test case from issue: should be false with exactOptionalPropertyTypes
const testUndefined = typia.is<T>({property: undefined});
console.log("typia.is<T>({property: undefined}):", testUndefined);

// These should still work
const testEmpty = typia.is<T>({});
console.log("typia.is<T>({}):", testEmpty);

const testString = typia.is<T>({property: "test"});
console.log("typia.is<T>({property: 'test'}):", testString);

// Test explicit union type - this should still allow undefined
type ExplicitUndefined = {property?: string | undefined};
const testExplicitUndefined = typia.is<ExplicitUndefined>({property: undefined});
console.log("typia.is<ExplicitUndefined>({property: undefined}):", testExplicitUndefined);

console.log("\n=== Expected Results with exactOptionalPropertyTypes ===");
console.log("typia.is<T>({property: undefined}): should be FALSE");
console.log("typia.is<T>({}): should be TRUE");
console.log("typia.is<T>({property: 'test'}): should be TRUE");
console.log("typia.is<ExplicitUndefined>({property: undefined}): should be TRUE");