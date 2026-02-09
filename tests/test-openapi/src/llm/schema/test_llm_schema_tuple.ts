import { TestValidator } from "@nestia/e2e";
import {
  ILlmSchema,
  IOpenApiSchemaError,
  IResult,
  OpenApi,
} from "@samchon/openapi";
import { LlmSchemaComposer } from "@samchon/openapi/src/composers/LlmSchemaComposer";
import typia, { IJsonSchemaCollection } from "typia";

export const test_llm_schema_tuple = (): void => {
  const collection: IJsonSchemaCollection = typia.json.schemas<
    [
      [string, number],
      {
        input: [boolean, string];
        output: [number, boolean];
      },
      Array<{
        nested: {
          x: {
            y: [string, number];
            z: number;
          };
          alpha: Array<number>;
        };
      }>,
    ]
  >();
  const v = validate(collection.components);
  v(collection.schemas[0]!)(["$input"]);
  v(collection.schemas[1]!)([
    `$input.properties["input"]`,
    `$input.properties["output"]`,
  ]);
  v(collection.schemas[2]!)([
    `$input.items.properties["nested"].properties["x"].properties["y"]`,
  ]);
};

const validate =
  (components: OpenApi.IComponents) =>
  (schema: OpenApi.IJsonSchema) =>
  (expected: string[]): void => {
    const result: IResult<ILlmSchema, IOpenApiSchemaError> =
      LlmSchemaComposer.schema({
        accessor: "$input",
        components,
        schema,
        $defs: {},
      });
    TestValidator.equals("success", result.success, false);
    TestValidator.equals(
      "errors",
      result.success ? [] : result.error.reasons.map((r) => r.accessor).sort(),
      expected.sort(),
    );
  };
