import typia from "typia";

type TestType = { property?: string };

// Compile and test a more targeted case
const debugTest = typia.createIs<TestType>();

console.log("Test case analysis:");

// Case 1: Empty object (property is missing entirely)
const case1 = {};
console.log("Empty object {}:", debugTest(case1));

// Case 2: Object with undefined property (property exists but is undefined)
const case2 = { property: undefined };
console.log("Object with undefined property:", debugTest(case2));

// Case 3: Object with defined property
const case3 = { property: "test" };
console.log("Object with defined property:", debugTest(case3));

// Save the generated function to examine it
console.log("Generated function:");
console.log(debugTest.toString());