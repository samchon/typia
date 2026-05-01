import { TestValidator } from "@nestia/e2e";
import { IJsonSchemaCollection, OpenApi } from "@typia/interface";
import { LlmSchemaConverter } from "@typia/utils";
import typia, { tags } from "typia";

export const test_llm_parameters_parity_converter_strict = (): void => {
  interface IStrictChild {
    code: string & tags.MinLength<2>;
    score: number & tags.Minimum<0> & tags.Maximum<100>;
  }
  interface IStrictParams {
    child: IStrictChild;
    labels: (string & tags.Pattern<"^[a-z]+$">)[] & tags.MinItems<1>;
    mode: "alpha" | "beta";
  }

  const collection: IJsonSchemaCollection =
    typia.json.schemas<[IStrictParams]>();
  const converted = LlmSchemaConverter.parameters({
    config: { strict: true },
    components: collection.components as OpenApi.IComponents,
    schema: collection.schemas[0] as
      | OpenApi.IJsonSchema.IObject
      | OpenApi.IJsonSchema.IReference,
  });
  if (converted.success === false)
    throw new Error(JSON.stringify(converted.error, null, 2));

  const actual = typia.llm.parameters<IStrictParams, { strict: true }>();

  TestValidator.equals(
    "strict parameters",
    clean(actual),
    clean(converted.value),
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
