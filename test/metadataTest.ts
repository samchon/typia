import typia from "typia";
import fs from "fs";

// Test different property types to understand metadata differences
type OptionalString = { property?: string };
type OptionalStringOrUndefined = { property?: string | undefined };
type RequiredString = { property: string };

console.log("Testing metadata differences...");

// Generate some validation code to see the internal representation
const isOptionalString = typia.createIs<OptionalString>();
const isOptionalStringOrUndefined = typia.createIs<OptionalStringOrUndefined>();
const isRequiredString = typia.createIs<RequiredString>();

// Test the actual behavior
console.log("OptionalString({ property: undefined }):", isOptionalString({ property: undefined }));
console.log("OptionalStringOrUndefined({ property: undefined }):", isOptionalStringOrUndefined({ property: undefined }));
console.log("RequiredString({ property: undefined }):", isRequiredString({ property: undefined }));

console.log("OptionalString({}):", isOptionalString({}));
console.log("OptionalStringOrUndefined({}):", isOptionalStringOrUndefined({}));
console.log("RequiredString({}):", isRequiredString({}));

console.log("OptionalString({ property: 'test' }):", isOptionalString({ property: 'test' }));
console.log("OptionalStringOrUndefined({ property: 'test' }):", isOptionalStringOrUndefined({ property: 'test' }));
console.log("RequiredString({ property: 'test' }):", isRequiredString({ property: 'test' }));

// Save the function source to understand differences
fs.writeFileSync('/tmp/optionalString.js', isOptionalString.toString());
fs.writeFileSync('/tmp/optionalStringOrUndefined.js', isOptionalStringOrUndefined.toString());
fs.writeFileSync('/tmp/requiredString.js', isRequiredString.toString());