import { IJsonSchemaTransformError, IResult, OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmSchemaConverter } from "@typia/utils";
import typia, { IJsonSchemaCollection, ILlmSchema } from "typia";

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
