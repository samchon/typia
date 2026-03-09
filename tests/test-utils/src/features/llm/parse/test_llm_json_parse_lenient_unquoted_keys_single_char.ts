import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

/**
 * Tests single-character unquoted keys using `$` and `_`,
 * which are valid identifier starts in JavaScript.
 *
 * If someone modifies `isIdentifierStart` to remove `$` or `_`,
 * these tests will fail.
 */
export const test_llm_json_parse_lenient_unquoted_keys_single_char =
  (): void => {
    // $ as single-char key
    const r1 = LlmJson.parse("{$: 1}");
    TestValidator.equals("dollar-success", r1.success, true);
    if (r1.success)
      TestValidator.equals("dollar-data", r1.data, { $: 1 });

    // _ as single-char key
    const r2 = LlmJson.parse("{_: 1}");
    TestValidator.equals("underscore-success", r2.success, true);
    if (r2.success)
      TestValidator.equals("underscore-data", r2.data, { _: 1 });

    // Multiple single-char keys
    const r3 = LlmJson.parse("{$: 1, _: 2}");
    TestValidator.equals("multi-single-success", r3.success, true);
    if (r3.success)
      TestValidator.equals("multi-single-data", r3.data, { $: 1, _: 2 });

    // $ key with complex value
    const r4 = LlmJson.parse('{$: {"nested": [1, 2]}}');
    TestValidator.equals("dollar-nested-success", r4.success, true);
    if (r4.success)
      TestValidator.equals("dollar-nested-data", r4.data, {
        $: { nested: [1, 2] },
      });

    // Key starting with $ followed by digits
    const r5 = LlmJson.parse("{$0: true}");
    TestValidator.equals("dollar-digit-success", r5.success, true);
    if (r5.success)
      TestValidator.equals("dollar-digit-data", r5.data, { $0: true });

    // Key starting with _ followed by $
    const r6 = LlmJson.parse("{_$: false}");
    TestValidator.equals("under-dollar-success", r6.success, true);
    if (r6.success)
      TestValidator.equals("under-dollar-data", r6.data, { _$: false });
  };
