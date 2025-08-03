import typia from "typia";

// Very simple test to understand validation flow
type SimpleOptional = { prop?: string };

console.log("=== Simple Test ===");

// This should pass
console.log("Empty object:", typia.is<SimpleOptional>({}));

// This should depend on exactOptionalPropertyTypes  
console.log("Undefined property:", typia.is<SimpleOptional>({ prop: undefined }));

// This should pass
console.log("String property:", typia.is<SimpleOptional>({ prop: "test" }));