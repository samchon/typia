import { TestStructure } from "@typia/template";
import { NamingConvention } from "@typia/utils";
import typia, { IValidation } from "typia";

/**
 * Verifies validateEquals through its supplied operation and fixture.
 *
 * Private object/array walkers record their mutations and paths in a local
 * list. They assume finite acyclic fixture values; no cycle guard or generic
 * arbitrary-graph claim is made.
 *
 * 1. Run the clean fixture scenario and its observable assertions.
 * 2. Retain the applicable invalid or round-trip distinctions described below.
 *
 * @evidence contracts/common.md#principled-implementation The supplied strict validator must accept the clean fixture without replacing its data. For ADDABLE fixtures with ordinary object nodes, private spoil walkers inject surplus keys and require exactly their sorted error-path multiset. The helper derives expected paths from its own added non_regular_member keys before validation. The fixture supplies valid data; NamingConvention quoting and the native assertEquals clean-record check are not independent verification of those utilities.
 * @evidence contracts/common.md#clear-and-simple-design Private object/array walkers record their mutations and paths in a local list. They assume finite acyclic fixture values; no cycle guard or generic arbitrary-graph claim is made.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The actual supplied callback is executed without substituting a verdict. Clean success and identity always execute. ADDABLE false or no injected object paths contribute clean-only checks. Nested objects and arrays contribute every injected path; ordinary value spoilers remain in validate.
 * @evidence contracts/common.md#meaningful-documentation The introduction and scenario list identify this helper's assertion responsibility; the answers state its exact comparisons, executable owner and oracle limitations.
 * @evidence contracts/testing.md#behavioral-verification The supplied strict validator must accept the clean fixture without replacing its data. For ADDABLE fixtures with ordinary object nodes, private spoil walkers inject surplus keys and require exactly their sorted error-path multiset.
 * @evidence contracts/testing.md#independent-expectations The helper derives expected paths from its own added non_regular_member keys before validation. The fixture supplies valid data; NamingConvention quoting and the native assertEquals clean-record check are not independent verification of those utilities.
 * @evidence contracts/testing.md#distinguishing-cases Clean success and identity always execute. ADDABLE false or no injected object paths contribute clean-only checks. Nested objects and arrays contribute every injected path; ordinary value spoilers remain in validate.
 * @evidence contracts/testing.md#execution-ownership Generated validateEquals/createValidateEquals families own native bindings. This helper owns finite acyclic traversal and multiset assertions; it does not launch a worker.
 */
export const _test_validateEquals =
  (name: string) =>
  <T>(factory: TestStructure<T>) =>
  (validateEquals: (input: T) => IValidation<T>): void => {
    const input: T = factory.generate();

    // EXACT TYPE
    const valid: IValidation<unknown> = validateEquals(input);
    if (valid.success === false)
      throw new Error(
        `Bug on typia.validateEquals(): failed to understand the ${name} type.`,
      );
    else if (valid.data !== input)
      throw new Error(
        "Bug on typia.validateEquals(): failed to archive the input value.",
      );
    typia.assertEquals(valid);
    if (factory.ADDABLE === false) return;

    // EXPECTED
    const expected: string[] = (() => {
      const accessors: string[] = [];
      spoil(accessors, "$input", input);
      return accessors.sort();
    })();
    if (expected.length === 0) return;

    // SOLUTION
    const result: IValidation<T> = validateEquals(input);
    const actual: string[] = result.success
      ? []
      : result.errors.map((err) => err.path).sort();

    // COMPARE
    if (
      expected.length !== actual.length ||
      expected.every((str, i) => str === actual[i]) === false
    ) {
      console.log(expected);
      console.log(actual);
      throw new Error(
        `Bug on typia.validateEquals(): failed to detect surplus property on the ${name} type.`,
      );
    }
  };

function spoil(accessors: string[], path: string, input: any): void {
  if (Array.isArray(input)) spoil_array(accessors, path, input);
  else if (
    typeof input === "object" &&
    input !== null &&
    typeof input.valueOf() === "object"
  )
    spoil_object(accessors, path, input);
}

function spoil_object(accessors: string[], path: string, obj: any): void {
  obj[KEY] = KEY;
  accessors.push(`${path}.${KEY}`);

  for (const [key, value] of Object.entries(obj))
    spoil(
      accessors,
      NamingConvention.variable(key)
        ? `${path}.${key}`
        : `${path}[${JSON.stringify(key)}]`,
      value,
    );
}

function spoil_array(accessors: string[], path: string, array: any[]): void {
  array.forEach((elem, i) => spoil(accessors, `${path}[${i}]`, elem));
}

const KEY = "non_regular_member";
