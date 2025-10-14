import typia, { tags } from "typia";

import { _test_validate } from "../../internal/_test_validate";

/**
 * Test for template literal validation tag inheritance issue.
 * 
 * Issue: Template literals like `prefix${string}postfix` were not inheriting
 * validation tags when intersected with tags like MaxLength and Pattern.
 * 
 * Before fix: Tags were applied to intersection metadata but ignored during 
 * code generation by check_template function.
 * 
 * After fix: check_template now processes validation tags similar to check_string.
 */
export const test_validate_TemplateLiteralWithValidationTags = (): void => {
  // Test case 1: Template literal with MaxLength and Pattern (from original issue)
  // Note: prefix(6) + postfix(7) = 13 chars minimum, so MaxLength<20> to allow some valid cases
  _test_validate("TemplateLiteralWithTags")({
    // Valid cases  
    valid: [
      'prefix1postfix',    // 15 chars <= 20, alphanumeric
      'prefixApostfix',    // 15 chars <= 20, alphanumeric
      'prefixa_postfix',   // 16 chars <= 20, alphanumeric + underscore
      'prefix123postfix',  // 17 chars <= 20, alphanumeric
    ],
    // Invalid cases
    invalid: [
      // Original problematic case from the issue (length + pattern violation)
      'prefix;"+,df0123456789postfix', // 28 chars > 20, special chars
      
      // Length violations (should fail MaxLength<20>)
      'prefixverylongstringpostfix', // 27 chars > 20
      'prefix123456789012345postfix', // 30 chars > 20
      
      // Pattern violations (should fail Pattern<'^[a-zA-Z0-9_]+$'>)
      'prefix-postfix', // Contains hyphen (not in pattern)
      'prefix@postfix', // Contains @ symbol  
      'prefix postfix', // Contains space
      'prefix.postfix', // Contains period
      'prefix;postfix', // Contains semicolon
      
      // Template structure violations (should fail template pattern)
      'notprefix123postfix', // Wrong prefix
      'prefix123notpostfix', // Wrong postfix
      'wrongprefix123wrongpostfix', // Wrong both
      'prefix123', // Missing postfix
      '123postfix', // Missing prefix
      
      // Multiple violations  
      'wrong;"+,df0123456789postfix', // Wrong prefix + length + pattern
      'prefix;"+,df0123456789wrong', // Wrong postfix + length + pattern
    ]
  })((input) => 
    typia.validate<
      tags.MaxLength<20> &
      tags.Pattern<'^[a-zA-Z0-9_]+$'> &
      `prefix${string}postfix`
    >(input)
  );

  // Test case 2: Template literal with only MaxLength
  _test_validate("TemplateLiteralWithMaxLengthOnly")({
    valid: [
      'pre1post', // 8 chars <= 15
      'pre12post', // 9 chars <= 15
      'pre123post', // 10 chars <= 15
      'pre_!@#post', // 11 chars <= 15, special chars allowed
    ],
    invalid: [
      'pre1234567890post', // 17 chars > 15
      'pre123456789012post', // 19 chars > 15
    ]
  })((input) => 
    typia.validate<
      tags.MaxLength<15> &
      `pre${string}post`
    >(input)
  );

  // Test case 3: Template literal with only Pattern
  _test_validate("TemplateLiteralWithPatternOnly")({
    valid: [
      'start123end', // Alphanumeric only
      'startABC_end', // Letters and underscore
      'start_end', // Just underscore
      'startVeryLongAlphanumericString123end', // Long but valid pattern
    ],
    invalid: [
      'start-end', // Contains hyphen
      'start@end', // Contains @ symbol
      'start end', // Contains space
      'start.end', // Contains period
    ]
  })((input) =>
    typia.validate<
      tags.Pattern<'^[a-zA-Z0-9_]+$'> &
      `start${string}end`
    >(input)
  );

  // Test case 4: Multiple templates with same tags (union case)
  _test_validate("MultipleTemplatesWithTags")({
    valid: [
      'prefixApostfix', // Matches first template
      'beginBend', // Matches second template  
      'prefix1postfix', // Matches first template
      'begin2end', // Matches second template
    ],
    invalid: [
      'prefix;postfix', // Matches first template but fails pattern
      'begin@end', // Matches second template but fails pattern
      'prefixTooLongStringpostfix', // Matches first template but fails length
      'beginTooLongStringend', // Matches second template but fails length
      'wrongApostfix', // Doesn't match any template
      'prefixAwrong', // Doesn't match any template
    ]
  })((input) =>
    typia.validate<
      tags.MaxLength<15> &
      tags.Pattern<'^[a-zA-Z0-9_]+$'> &
      (`prefix${string}postfix` | `begin${string}end`)
    >(input)
  );
};