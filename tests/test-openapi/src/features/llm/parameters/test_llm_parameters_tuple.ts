import { TestValidator } from "@nestia/e2e";
import {
  ILlmSchema,
  IOpenApiSchemaError,
  IResult,
  OpenApi,
} from "@samchon/openapi";
import { LlmSchemaComposer } from "@samchon/openapi/src/composers/LlmSchemaComposer";
import typia, { IJsonSchemaCollection } from "typia";

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
  const result: IResult<ILlmSchema.IParameters, IOpenApiSchemaError> =
    LlmSchemaComposer.parameters({
      accessor: "$input",
      components: collection.components,
      schema: typia.assert<
        OpenApi.IJsonSchema.IReference | OpenApi.IJsonSchema.IObject
      >(collection.schemas[0]),
    });
  TestValidator.equals("parameters", result.success, false);
  TestValidator.equals(
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
