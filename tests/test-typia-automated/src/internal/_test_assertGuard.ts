import { TestStructure } from "@typia/template";
import { isErrorClass } from "@typia/template/error-class";
import typia, { AssertionGuard, TypeGuardError } from "typia";

/**
 * Verifies assertGuard through its supplied operation and fixture.
 *
 * Separate clean and invalid loops preserve failure identity. Exact error
 * identity is delegated to the shared predicate; diagnostic consistency still
 * uses an actual generated typia.is call.
 *
 * 1. Run the clean fixture scenario and its observable assertions.
 * 2. Retain the applicable invalid or round-trip distinctions described below.
 *
 * @evidence contracts/common.md#principled-implementation The supplied assertGuard callback requires the clean guard call to return normally. Every authored spoiler must throw the selected exact error prototype, satisfy the native TypeGuardError property check and report one path from its authored allowed set; normal returns and unrelated exceptions fail. Fixture generate and SPOILERS establish valid values, invalid mutations and permitted paths independently of the callback. isErrorClass compares prototype identity; the typia.is property-shape check shares the native producer and is not an independent shape oracle.
 * @evidence contracts/common.md#clear-and-simple-design Separate clean and invalid loops preserve failure identity. Exact error identity is delegated to the shared predicate; diagnostic consistency still uses an actual generated typia.is call.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The actual supplied callback is executed without substituting a verdict. One clean value and one freshly generated value per spoiler. Only one reported invalid leaf is required for an assertion; full failure-path multiplicity belongs to validate. A spoiler-free fixture contributes only clean acceptance.
 * @evidence contracts/common.md#meaningful-documentation The introduction and scenario list identify this helper's assertion responsibility; the answers state its exact comparisons, executable owner and oracle limitations.
 * @evidence contracts/testing.md#behavioral-verification The supplied assertGuard callback requires the clean guard call to return normally. Every authored spoiler must throw the selected exact error prototype, satisfy the native TypeGuardError property check and report one path from its authored allowed set; normal returns and unrelated exceptions fail.
 * @evidence contracts/testing.md#independent-expectations Fixture generate and SPOILERS establish valid values, invalid mutations and permitted paths independently of the callback. isErrorClass compares prototype identity; the typia.is property-shape check shares the native producer and is not an independent shape oracle.
 * @evidence contracts/testing.md#distinguishing-cases One clean value and one freshly generated value per spoiler. Only one reported invalid leaf is required for an assertion; full failure-path multiplicity belongs to validate. A spoiler-free fixture contributes only clean acceptance.
 * @evidence contracts/testing.md#execution-ownership Generated direct/factory assertGuard cases call this helper through TestServant; the helper owns the clean and spoiler loops and the producer binding owns the native boundary.
 */
export const _test_assertGuard =
  (ErrorClass: Function) =>
  (name: string) =>
  <T>(factory: TestStructure<T>) =>
  (assert: AssertionGuard<T>): void => {
    try {
      const input: T = factory.generate();
      assert(input);
    } catch (exp) {
      if (
        isErrorClass(exp, ErrorClass) &&
        typia.is<TypeGuardError.IProps>(exp)
      ) {
        console.log(exp);
        throw new Error(
          `Bug on typia.assertGuard(): failed to understand the ${name} type.`,
        );
      } else throw exp;
    }

    for (const spoil of factory.SPOILERS ?? []) {
      const elem: T = factory.generate();
      const expected: string[] = spoil(elem);

      try {
        assert(elem);
      } catch (exp) {
        if (
          isErrorClass(exp, ErrorClass) &&
          typia.is<TypeGuardError.IProps>(exp)
        )
          if (exp.path && expected.includes(exp.path) === true) continue;
          else
            console.log({
              expected: expected,
              actual: exp.path,
            });
      }
      throw new Error(
        `Bug on typia.assertGuard(): failed to detect error on the ${name} type - ${expected}.`,
      );
    }
  };
