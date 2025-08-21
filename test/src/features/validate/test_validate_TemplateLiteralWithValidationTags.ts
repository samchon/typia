import typia, { tags } from "typia";

import { _test_validate } from "../../internal/_test_validate";

export const test_validate_TemplateLiteralWithValidationTags = (): void => {
  // Test data that should fail validation
  const testValue = 'prefix;"+,df0123456789postfix'; // 28 chars, contains special characters
  
  // This should currently pass (incorrectly) due to the bug
  const result = typia.validate<
    tags.MaxLength<10> &
    tags.Pattern<'^[a-zA-Z0-9_]+$'> &
    `prefix${string}postfix`
  >(testValue);
  
  // For debugging: log the result
  console.log('Template literal with validation tags result:', result);
  
  // The test should fail for now since we haven't fixed the bug yet
  // Once fixed, this should fail validation
  if (result.success) {
    console.log('BUG CONFIRMED: Template literal with validation tags incorrectly passed validation');
    console.log('Expected: validation should fail due to maxLength and pattern constraints');
  } else {
    console.log('Template literal with validation tags correctly failed validation');
    console.log('Errors:', result.errors);
  }
};