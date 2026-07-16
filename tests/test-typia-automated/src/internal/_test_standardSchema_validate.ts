import { StandardSchemaV1 } from "@standard-schema/spec";
import { TestStructure } from "@typia/template";
import { NamingConvention } from "@typia/utils";
import typia from "typia";

/**
 * Verifies Standard Schema validation against independent spoiler oracles.
 *
 * Issue counts cannot detect a reporter that substitutes or omits paths. This
 * helper reconstructs typia paths from Standard Schema segments so the same
 * fixture contract proves both the adapter's success type and exact failures.
 *
 * 1. Assert the successful result preserves both its static and runtime value.
 * 2. Apply every fixture spoiler and compare exact sorted issue paths.
 */
export const _test_standardSchema_validate =
  (name: string) =>
  <T>(factory: TestStructure<T>) =>
  (validate: StandardSchemaV1<T, T>): void => {
    const input: T = factory.generate();
    const valid = validate["~standard"].validate(input);
    if (!("value" in valid))
      throw new Error(
        `Bug on typia.createValidate["~standard"].validate(): failed to understand the ${name} type.`,
      );
    else if (valid.value !== input)
      throw new Error(
        `Bug on typia.createValidate["~standard"].validate(): failed to archive the input value.`,
      );
    valid satisfies StandardSchemaV1.SuccessResult<T>;

    const wrong: ISpoiled[] = [];
    for (const spoil of factory.SPOILERS ?? []) {
      const elem: T = factory.generate();
      const expected: string[] = spoil(elem);
      const valid = validate["~standard"].validate(elem);

      if (!("issues" in valid) || !valid.issues)
        throw new Error(
          `Bug on typia.createValidate["~standard"].validate(): failed to detect error on the ${name} type.`,
        );

      typia.assertEquals(valid);
      expected.sort();
      const issues = [...valid.issues];
      const actual: string[] = issues.map(issuePath).sort();

      if (
        actual.length !== expected.length ||
        actual.every((path, i) => path === expected[i]) === false
      )
        wrong.push({
          expected,
          actual,
        });
    }
    if (wrong.length !== 0) {
      console.log(wrong);
      throw new Error(
        `Bug on typia.createValidate["~standard"].validate(): failed to detect error on the ${name} type.`,
      );
    }
  };

interface ISpoiled {
  expected: string[];
  actual: string[];
}

const issuePath = (issue: StandardSchemaV1.Issue): string =>
  (issue.path ?? []).reduce<string>((path, segment) => {
    const key: PropertyKey =
      typeof segment === "object" ? segment.key : segment;
    if (typeof key === "number") return `${path}[${key}]`;
    if (typeof key === "string" && NamingConvention.variable(key))
      return `${path}.${key}`;
    return `${path}[${JSON.stringify(key)}]`;
  }, "$input");
