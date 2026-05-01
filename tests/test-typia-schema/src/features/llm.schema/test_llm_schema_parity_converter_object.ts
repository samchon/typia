import { TestValidator } from "@nestia/e2e";
import { IJsonSchemaCollection, ILlmSchema, OpenApi } from "@typia/interface";
import { LlmSchemaConverter } from "@typia/utils";
import typia, { tags } from "typia";

export const test_llm_schema_parity_converter_object = (): void => {
  interface ILeaf {
    code: string & tags.Pattern<"^[A-Z]{2}$">;
    amount?: number & tags.Minimum<0>;
  }
  interface IMatrix {
    id: string & tags.Format<"uuid">;
    title: string & tags.MinLength<2> & tags.MaxLength<32>;
    flag: true;
    mode: "create" | "update" | "delete";
    level: 1 | 2 | 3;
    nullable: string | null;
    leaf: ILeaf;
    leaves: ILeaf[] & tags.MinItems<1> & tags.MaxItems<5> & tags.UniqueItems;
    dictionary: Record<string, number & tags.Minimum<0>>;
  }

  const collection: IJsonSchemaCollection = typia.json.schemas<[IMatrix]>();
  const expectedDefs: Record<string, ILlmSchema> = {};
  const converted = LlmSchemaConverter.schema({
    config: { strict: false },
    components: collection.components as OpenApi.IComponents,
    $defs: expectedDefs,
    schema: collection.schemas[0] as OpenApi.IJsonSchema,
  });
  if (converted.success === false)
    throw new Error(JSON.stringify(converted.error, null, 2));

  const actualDefs: Record<string, ILlmSchema> = {};
  const actual = typia.llm.schema<IMatrix>(actualDefs);

  TestValidator.equals("schema", clean(actual), clean(converted.value));
  TestValidator.equals("$defs", clean(actualDefs), clean(expectedDefs));
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
