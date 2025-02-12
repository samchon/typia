import { StandardSchemaV1 } from "@standard-schema/spec";
import typia from "typia";

import { TestStructure } from "../helpers/TestStructure";

export const _test_standardSchema_validate =
  (name: string) =>
  <T>(factory: TestStructure<T>) =>
  (
    validate: ((input: T) => typia.IValidation<T>) &
      StandardSchemaV1<unknown, T>,
  ) =>
  () => {
    const input: T = factory.generate();
    const valid = validate["~standard"].validate(input);
    if (!("value" in valid))
      throw new Error(
        `Bug on typia.validate(): failed to understand the ${name} type.`,
      );
    else if (valid.value !== input)
      throw new Error(
        "Bug on typia.validate(): failed to archive the input value.",
      );
    typia.assertEquals(valid);

    const wrong: ISpoiled[] = [];
    for (const spoil of factory.SPOILERS ?? []) {
      const elem: T = factory.generate();
      const expected: string[] = spoil(elem);
      const valid = validate["~standard"].validate(elem);

      if (!("issues" in valid) || !valid.issues)
        throw new Error(
          `Bug on typia.validate(): failed to detect error on the ${name} type.`,
        );

      typia.assertEquals<StandardSchemaV1.FailureResult>(valid);
      expected.sort();
      const issues = [...valid.issues];
      issues.sort((x, y) => (joinPath(x.path) < joinPath(y.path) ? -1 : 1));

      if (
        issues.length !== expected.length ||
        issues.every((e, i) => e.path === expected[i]) === false
      )
        wrong.push({
          expected,
          actual: issues.map((e) => joinPath(e.path)),
        });
    }
    if (wrong.length !== 0) {
      console.log(wrong);
      throw new Error(
        `Bug on typia.validate(): failed to detect error on the ${name} type.`,
      );
    }
  };

const joinPath = (path: StandardSchemaV1.FailureResult["issues"][0]["path"]) =>
  path
    ? path
        .map((segment) => {
          if (typeof segment === "string") return `.${segment}`;
          else return `[${JSON.stringify(segment)}]`;
        })
        .join("")
    : "";
interface ISpoiled {
  expected: string[];
  actual: string[];
}
