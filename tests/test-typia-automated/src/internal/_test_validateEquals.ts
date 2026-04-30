import { TestStructure } from "@typia/template";
import { NamingConvention } from "@typia/utils";
import typia, { IValidation } from "typia";

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
