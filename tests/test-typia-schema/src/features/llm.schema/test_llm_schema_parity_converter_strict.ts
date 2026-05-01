import { TestValidator } from "@nestia/e2e";
import { IJsonSchemaCollection, ILlmSchema, OpenApi } from "@typia/interface";
import { LlmSchemaConverter } from "@typia/utils";
import typia, { tags } from "typia";

export const test_llm_schema_parity_converter_strict = (): void => {
  interface IStrictChild {
    code: string & tags.MinLength<2> & tags.Pattern<"^[a-z]+$">;
    count: number & tags.Minimum<1> & tags.Maximum<9>;
  }
  interface IStrictRoot {
    child: IStrictChild;
    labels: (string & tags.MinLength<1>)[] & tags.MinItems<1>;
    mode: "alpha" | "beta";
    enabled: boolean;
  }

  const collection: IJsonSchemaCollection = typia.json.schemas<[IStrictRoot]>();
  const expectedDefs: Record<string, ILlmSchema> = {};
  const converted = LlmSchemaConverter.schema({
    config: { strict: true },
    components: collection.components as OpenApi.IComponents,
    $defs: expectedDefs,
    schema: collection.schemas[0] as OpenApi.IJsonSchema,
  });
  if (converted.success === false)
    throw new Error(JSON.stringify(converted.error, null, 2));

  const actualDefs: Record<string, ILlmSchema> = {};
  const actual = typia.llm.schema<IStrictRoot, { strict: true }>(actualDefs);

  TestValidator.equals("strict schema", clean(actual), clean(converted.value));
  TestValidator.equals("strict $defs", clean(actualDefs), clean(expectedDefs));
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
