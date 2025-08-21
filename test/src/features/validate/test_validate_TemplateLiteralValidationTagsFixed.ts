import typia, { tags } from "typia";

export const test_template_literal_validation_tags_fixed = (): void => {
  // Test data that should fail validation due to length and pattern
  const invalidValue = 'prefix;"+,df0123456789postfix'; // 28 chars > 10, contains special chars
  const validValue = 'prefixabcpostfix'; // 16 chars > 10 (still invalid for maxLength)
  const validValueShort = 'prefix1post'; // 11 chars > 10 (still invalid for maxLength)  
  const actuallyValidValue = 'prefix1pos'; // 10 chars exactly, alphanumeric + underscore only
  
  console.log("=== Testing Template Literal with Validation Tags (AFTER FIX) ===");
  console.log();

  // Test 1: Should fail due to both length and pattern violations
  console.log("Test 1 - Invalid value (length + pattern):", invalidValue);
  try {
    const result1 = typia.validate<
      tags.MaxLength<10> &
      tags.Pattern<'^[a-zA-Z0-9_]+$'> &
      `prefix${string}postfix`
    >(invalidValue);
    
    console.log("  Result:", result1.success ? "PASS (BUG!)" : "FAIL (expected)");
    if (!result1.success) {
      console.log("  Errors:", result1.errors.map(e => e.expected));
    }
  } catch (error) {
    console.log("  Error:", error);
  }
  
  console.log();
  
  // Test 2: Should fail due to length violation only
  console.log("Test 2 - Invalid value (length only):", validValue);
  try {
    const result2 = typia.validate<
      tags.MaxLength<10> &
      tags.Pattern<'^[a-zA-Z0-9_]+$'> &
      `prefix${string}postfix`
    >(validValue);
    
    console.log("  Result:", result2.success ? "PASS (BUG!)" : "FAIL (expected)");
    if (!result2.success) {
      console.log("  Errors:", result2.errors.map(e => e.expected));
    }
  } catch (error) {
    console.log("  Error:", error);
  }
  
  console.log();
  
  // Test 3: Valid value that should pass all checks
  console.log("Test 3 - Valid value:", actuallyValidValue);
  try {
    const result3 = typia.validate<
      tags.MaxLength<10> &
      tags.Pattern<'^[a-zA-Z0-9_]+$'> &
      `prefix${string}postfix`
    >(actuallyValidValue);
    
    console.log("  Result:", result3.success ? "PASS (expected)" : "FAIL (BUG!)");
    if (!result3.success) {
      console.log("  Errors:", result3.errors.map(e => e.expected));
    }
  } catch (error) {
    console.log("  Error:", error);
  }
  
  console.log();
  
  // Test 4: Compare with regular string (control test)  
  console.log("Test 4 - Control: string with validation tags:", invalidValue);
  try {
    const result4 = typia.validate<
      tags.MaxLength<10> & tags.Pattern<'^[a-zA-Z0-9_]+$'> & string
    >(invalidValue);
    
    console.log("  Result:", result4.success ? "PASS (unexpected)" : "FAIL (expected)");
    if (!result4.success) {
      console.log("  Errors:", result4.errors.map(e => e.expected));
    }
  } catch (error) {
    console.log("  Error:", error);
  }
};