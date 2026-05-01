import { TestValidator } from "@nestia/e2e";
import { IJsonSchemaCollection, OpenApi } from "@typia/interface";
import { LlmSchemaConverter } from "@typia/utils";
import typia, { tags } from "typia";

export const test_llm_parameters_parity_converter_object = (): void => {
  interface IParamLeaf {
    code: string & tags.Pattern<"^[a-z]+$">;
    value: number & tags.Minimum<0>;
  }
  interface IParams {
    status: "pending" | "done";
    priority: 1 | 2 | 3;
    nullable: string | null;
    optional?: string & tags.MinLength<1>;
    leaf: IParamLeaf;
    leaves: IParamLeaf[];
    dictionary: Record<string, string & tags.MinLength<1>>;
  }

  const collection: IJsonSchemaCollection = typia.json.schemas<[IParams]>();
  const converted = LlmSchemaConverter.parameters({
    config: { strict: false },
    components: collection.components as OpenApi.IComponents,
    schema: collection.schemas[0] as
      | OpenApi.IJsonSchema.IObject
      | OpenApi.IJsonSchema.IReference,
  });
  if (converted.success === false)
    throw new Error(JSON.stringify(converted.error, null, 2));

  const actual = typia.llm.parameters<IParams>();

  TestValidator.equals("parameters", clean(actual), clean(converted.value));
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
