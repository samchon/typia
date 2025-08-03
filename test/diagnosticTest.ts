import typia from "typia";

// Let's test various scenarios to understand the validation flow
type OptionalString = { property?: string };
type RequiredString = { property: string };
type OptionalStringWithUndefined = { property?: string | undefined };

console.log("=== Testing validation behavior ===");

// Test optional property scenarios
console.log("OptionalString scenarios:");
console.log("  {} ->", typia.is<OptionalString>({}));
console.log("  {property: 'test'} ->", typia.is<OptionalString>({property: 'test'}));
console.log("  {property: undefined} ->", typia.is<OptionalString>({property: undefined}));
console.log("  {property: null} ->", typia.is<OptionalString>({property: null}));
console.log("  {property: 123} ->", typia.is<OptionalString>({property: 123}));

// Test required property scenarios  
console.log("\nRequiredString scenarios:");
console.log("  {} ->", typia.is<RequiredString>({}));
console.log("  {property: 'test'} ->", typia.is<RequiredString>({property: 'test'}));
console.log("  {property: undefined} ->", typia.is<RequiredString>({property: undefined}));

// Test explicit undefined union scenarios
console.log("\nOptionalStringWithUndefined scenarios:");
console.log("  {} ->", typia.is<OptionalStringWithUndefined>({}));
console.log("  {property: 'test'} ->", typia.is<OptionalStringWithUndefined>({property: 'test'}));
console.log("  {property: undefined} ->", typia.is<OptionalStringWithUndefined>({property: undefined}));