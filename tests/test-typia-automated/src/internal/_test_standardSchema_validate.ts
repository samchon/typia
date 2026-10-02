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
 *
 * @evidence contracts/testing.md#behavioral-verification The supplied ~standard validator must return a clean value with original identity and a statically assignable SuccessResult. Every spoiler must yield issues whose reconstructed sorted paths equal the entire expected multiset; native assertEquals checks the failed record.
 * @evidence contracts/testing.md#independent-expectations Spoiler-authored paths are independent of reported issues. issuePath reconstructs index, identifier and quoted accessors from Standard Schema segments, sharing NamingConvention for variable names. The native record-shape check is correlated with the producer.
 * @evidence contracts/testing.md#distinguishing-cases Clean value identity contrasts with each declared invalid mutation. Exact issue count and path multiplicity detect omissions or substitutions. The synchronous typia Standard Schema implementation is the supported callback; async foreign validators are not exercised.
 * @evidence contracts/testing.md#execution-ownership Generated standardSchema.createValidate entries are discovered by TestServant. This helper owns local issuePath reconstruction and diagnostic comparisons.
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
