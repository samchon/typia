import typia from "typia";

// Test type with optional property
type TestType = { property?: string };

// This should cause TypeScript compilation error with exactOptionalPropertyTypes
// const problematicAssignment: TestType = { property: undefined };

function testCurrentBehavior() {
  console.log("Testing current typia.is behavior with exactOptionalPropertyTypes:");
  
  // Test 1: Empty object (should pass)
  const test1 = {};
  console.log("typia.is<TestType>({}): ", typia.is<TestType>(test1));
  
  // Test 2: Object with valid property (should pass)
  const test2 = { property: "test" };
  console.log("typia.is<TestType>({ property: 'test' }): ", typia.is<TestType>(test2));
  
  // Test 3: Object with explicit undefined (should fail with exactOptionalPropertyTypes)
  const test3 = { property: undefined };
  console.log("typia.is<TestType>({ property: undefined }): ", typia.is<TestType>(test3));
  
  // Test 4: Testing with a union type that includes undefined (should still work)
  type ExplicitlyUndefinedType = { property?: string | undefined };
  const test4 = { property: undefined };
  console.log("typia.is<ExplicitlyUndefinedType>({ property: undefined }): ", typia.is<ExplicitlyUndefinedType>(test4));
}

/**
 * TEST PROGRAM
 */
const main = (): void => {
  testCurrentBehavior();
};

main();