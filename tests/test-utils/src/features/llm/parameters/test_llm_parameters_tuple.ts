import { IJsonSchemaTransformError, IResult, OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmSchemaConverter } from "@typia/utils";
import typia, { IJsonSchemaCollection, ILlmSchema } from "typia";

/**
 * Verifies tuples in native schemas are rejected with every nested accessor.
 *
 * LLM parameters cannot hold tuples, so each tuple location must be reported.
 *
 * 1. Generate a schema with several tuple locations natively.
 * 2. Convert it with LlmSchemaConverter.parameters.
 * 3. Assert failure and the sorted accessors.
 *
 * @evidence contracts/testing.md#behavioral-verification The converter runs on a natively generated collection and the failure flag and all four accessors are compared exactly.
 * @evidence contracts/testing.md#independent-expectations The accessors are authored from the type structure.
 * @evidence contracts/testing.md#distinguishing-cases Property, nested property, output and array-item tuples are four locations; an ordinary array is a unit twin.
 * @evidence contracts/testing.md#execution-ownership The test-utils test:integration command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this exported case. the collection is produced by the native typia.json.schemas; the conversion runs in process.
 */
export const test_llm_parameters_tuple = (): void => {
  const collection: IJsonSchemaCollection = typia.json.schemas<
    [
      {
        first: [string, number];
        second: {
          input: {
            schema: [boolean, string];
          };
          output: [number, boolean];
        };
        third: Array<[number]>;
      },
    ]
  >();
  const result: IResult<ILlmSchema.IParameters, IJsonSchemaTransformError> =
    LlmSchemaConverter.parameters({
      accessor: "$input",
      components: collection.components,
      schema: typia.assert<
        OpenApi.IJsonSchema.IReference | OpenApi.IJsonSchema.IObject
      >(collection.schemas[0]),
    });
  TestEquality.equals("parameters", result.success, false);
  TestEquality.equals(
    "errors",
    result.success ? [] : result.error.reasons.map((r) => r.accessor).sort(),
    [
      `$input.properties["first"]`,
      `$input.properties["second"].properties["input"].properties["schema"]`,
      `$input.properties["second"].properties["output"]`,
      `$input.properties["third"].items`,
    ].sort(),
  );
};
