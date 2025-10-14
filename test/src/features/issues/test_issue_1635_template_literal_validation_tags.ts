import typia, { tags } from "typia";

/**
 * Reproduction of the exact issue reported in GitHub issue.
 * 
 * This demonstrates that the fix correctly handles the original problematic case.
 * Before the fix, Test1Type would pass when it should fail.
 * After the fix, Test1Type correctly fails validation.
 */
export const test_issue_reproduction = (): void => {
  console.log("=== Reproducing Original Issue ===");
  
  const testValue = 'prefix;"+,df0123456789postfix' as const;
  console.log("Test value:", testValue);
  console.log("Test value length:", testValue.length, "chars");
  console.log();

  // Function to log validation results like in the original issue
  function logResult(name: string, res: typia.IValidation<unknown>) {
    console.log(`${name} checking =>`);
    if (res.success) {
      console.log('Successfully validated.');
    } else {
      console.log('Failed!');
      console.log(res.errors);
    }
    console.log();
  }

  // Test1Type - Template literal with validation tags (FIXED)
  // Before fix: this would pass incorrectly
  // After fix: this should fail correctly
  logResult(
    'Test1Type (FIXED)',
    typia.validate<
      tags.MaxLength<10> &
        tags.Pattern<'^[a-zA-Z0-9_]+$'> &
        `prefix${string}postfix`
    >(testValue),
  );

  // Test2Type - Regular string with validation tags (should always fail)
  logResult(
    'Test2Type (Control)',
    typia.validate<tags.MaxLength<10> & tags.Pattern<'^[a-zA-Z0-9_]+$'> & string>(
      testValue,
    ),
  );

  // Test3Type - Mixed intersection (should always pass - no validation tags on template)
  logResult(
    'Test3Type (Mixed)',
    typia.validate<
      tags.MaxLength<10> &
        tags.Pattern<'^[a-zA-Z0-9_]+$'> &
        // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
        string &
        `prefix${string}postfix`
    >(testValue),
  );

  // Test4Type - Tags inside template (should always pass - no validation logic)
  logResult(
    'Test4Type (Internal)',
    typia.validate<`prefix${tags.MaxLength<10> &
      tags.Pattern<'^[a-zA-Z0-9_]+$'> &
      string}postfix`>(testValue),
  );
  
  console.log("=== Expected Results After Fix ===");
  console.log("Test1Type: Should FAIL (template + validation tags now work)");
  console.log("Test2Type: Should FAIL (string + validation tags)");
  console.log("Test3Type: Should PASS (template pattern only, no validation tags on template)");
  console.log("Test4Type: Should PASS (validation tags inside template literal, not applied to whole)");
};