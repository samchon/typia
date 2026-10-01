import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

/**
 * Verifies llm schema spec strict number against the native typia.llm.schema
 * output.
 *
 * The case builds its input in this file and asserts strict number shifts
 * constraints.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.schema is evaluated by the native host on the types declared in this case and the result is checked by 1 assertion (strict number shifts constraints).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (strict number shifts constraints) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_schema_spec_strict_number is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_llm_schema_spec_strict_number = (): void => {
  TestEquality.equals(
    "strict number shifts constraints",
    clean(
      typia.llm.schema<
        number &
          tags.Minimum<1> &
          tags.ExclusiveMaximum<10> &
          tags.MultipleOf<1> &
          tags.Default<3>,
        { strict: true }
      >({}),
    ),
    {
      type: "number",
      description: [
        "@minimum 1",
        "@exclusiveMaximum 10",
        "@multipleOf 1",
        "@default 3",
      ].join("\n"),
    },
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
