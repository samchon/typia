import { TestStructure } from "@typia/template";
import { isErrorClass } from "@typia/template/error-class";
import { prepareStringify } from "@typia/template/stringify";
import typia, { TypeGuardError } from "typia";

/**
 * Verifies a native typia.json.assertStringify callback serializes valid input
 * and throws the expected guard error for spoiled input.
 *
 * Valid fixtures must serialize faithfully against a pre-callback reference,
 * and each spoiler must raise an error of exactly the expected class whose path
 * belongs to the spoiler's authored path set.
 *
 * 1. Prepare the stringify check and run the callback on the clean fixture.
 * 2. For each spoiler, call the callback on a mutated fixture and require an error
 *    of the expected class, with diagnostic properties and an authored path.
 *
 * @evidence contracts/testing.md#behavioral-verification The clean text is judged by the prepared stringify check; each spoiled call must throw an error whose prototype is the expected class, passes the generated property-shape check and reports one authored path.
 * @evidence contracts/testing.md#independent-expectations The pre-callback JSON.stringify reference and authored spoiler paths are independent of the producer; class identity is compared directly. typia.is diagnostic-shape checking shares the native producer. The shared stringify check observes JSON-visible input state, so ignored-property mutations and changes undone before checking remain undetected.
 * @evidence contracts/testing.md#distinguishing-cases Clean acceptance against one rejection per spoiler; it asserts one reported path and not every invalid leaf.
 * @evidence contracts/testing.md#execution-ownership Executes through the committed test_json_assertStringify_ObjectSimple composite of test-typia-automated. Native cases in this workspace call the helper from the shared TestServant worker with native-transformed callbacks, so the assembly with the native producer is this suite's boundary, while the expectation policy executes in the plugin-free test-utils unit population.
 */
export const _test_json_assertStringify =
  (ErrorClass: Function) =>
  (name: string) =>
  <T>(factory: TestStructure<T>) =>
  (stringify: (input: T) => string): void => {
    const data: T = factory.generate();
    const check = prepareStringify(
      data,
      `Bug on typia.json.assertStringify(): failed to understand the ${name} type.`,
    );
    check(stringify(data));

    for (const spoil of factory.SPOILERS ?? []) {
      const elem: T = factory.generate();
      const expected: string[] = spoil(elem);

      try {
        stringify(elem);
      } catch (exp) {
        if (
          isErrorClass(exp, ErrorClass) &&
          typia.is<TypeGuardError.IProps>(exp)
        )
          if (exp.path && expected.includes(exp.path) === true) continue;
          else
            console.log({
              expected,
              actual: exp.path,
            });
      }
      throw new Error(
        `Bug on typia.json.assertStringify(): failed to detect error on the ${name} type.`,
      );
    }
  };
