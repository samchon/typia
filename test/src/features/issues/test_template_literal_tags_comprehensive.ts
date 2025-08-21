import typia, { tags } from "typia";

/**
 * Test the fix across different typia functions mentioned in the issue:
 * - validate (already tested)  
 * - assert
 * - json.schemas
 */
export const test_template_literal_tags_comprehensive = (): void => {
  const validValue = 'prefix123postfix';      // Should pass all validations
  const invalidValue = 'prefix;"+,invalid';   // Should fail validation (pattern + length)
  
  console.log("=== Testing Template Literal Tags Across All Functions ===");
  console.log("Valid value:", validValue);
  console.log("Invalid value:", invalidValue);
  console.log();

  // Type alias for reusability
  type TaggedTemplate = tags.MaxLength<20> & tags.Pattern<'^[a-zA-Z0-9_]+$'> & `prefix${string}postfix`;

  // Test 1: typia.validate (main fix)
  console.log("1. Testing typia.validate:");
  try {
    const result1 = typia.validate<TaggedTemplate>(validValue);
    console.log("   Valid input:", result1.success ? "PASS" : "FAIL");
    
    const result2 = typia.validate<TaggedTemplate>(invalidValue);
    console.log("   Invalid input:", result2.success ? "FAIL (should reject)" : "PASS (correctly rejected)");
    if (!result2.success) {
      console.log("   Rejection reasons:", result2.errors.map(e => e.expected));
    }
  } catch (error) {
    console.log("   Error:", error);
  }
  console.log();

  // Test 2: typia.assert
  console.log("2. Testing typia.assert:");
  try {
    const result1 = typia.assert<TaggedTemplate>(validValue);
    console.log("   Valid input: PASS (no exception)");
  } catch (error) {
    console.log("   Valid input: FAIL (unexpected exception):", error);
  }
  
  try {
    const result2 = typia.assert<TaggedTemplate>(invalidValue);
    console.log("   Invalid input: FAIL (should have thrown exception)");
  } catch (error) {
    console.log("   Invalid input: PASS (correctly threw exception)");
    // Don't log the full error as it can be verbose
  }
  console.log();

  // Test 3: typia.json.schemas
  console.log("3. Testing typia.json.schemas:");
  try {
    const schemas = typia.json.schemas<[TaggedTemplate], "3.1">();
    const schema = schemas.components.schemas?.TaggedTemplate;
    
    console.log("   Schema generated:", !!schema ? "PASS" : "FAIL");
    if (schema && typeof schema === 'object' && !Array.isArray(schema)) {
      console.log("   Schema type:", (schema as any).type);
      console.log("   Has pattern:", !!(schema as any).pattern);
      console.log("   Has maxLength:", !!(schema as any).maxLength);
      console.log("   MaxLength value:", (schema as any).maxLength);
      console.log("   Pattern value:", (schema as any).pattern);
    }
  } catch (error) {
    console.log("   Error:", error);
  }
  console.log();

  // Test 4: typia.is (type guard)
  console.log("4. Testing typia.is:");
  try {
    const result1 = typia.is<TaggedTemplate>(validValue);
    console.log("   Valid input:", result1 ? "PASS" : "FAIL");
    
    const result2 = typia.is<TaggedTemplate>(invalidValue);
    console.log("   Invalid input:", result2 ? "FAIL (should reject)" : "PASS (correctly rejected)");
  } catch (error) {
    console.log("   Error:", error);
  }
};