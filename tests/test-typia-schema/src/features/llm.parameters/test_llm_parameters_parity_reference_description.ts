import { TestValidator } from "@nestia/e2e";
import { IJsonSchemaCollection, OpenApi } from "@typia/interface";
import { LlmSchemaConverter } from "@typia/utils";
import typia, { tags } from "typia";

export const test_llm_parameters_parity_reference_description = (): void => {
  /**
   * Create user parameters.
   *
   * Root description must be cascaded from the referenced schema.
   */
  interface ICreateUserParameters {
    /** Stable user identifier. */
    id: string & tags.Format<"uuid">;

    /** Human readable display name. */
    name: string & tags.MinLength<1>;
  }

  const collection: IJsonSchemaCollection =
    typia.json.schemas<[ICreateUserParameters]>();
  const converted = LlmSchemaConverter.parameters({
    config: { strict: false },
    components: collection.components as OpenApi.IComponents,
    schema: collection.schemas[0] as
      | OpenApi.IJsonSchema.IObject
      | OpenApi.IJsonSchema.IReference,
  });
  if (converted.success === false)
    throw new Error(JSON.stringify(converted.error, null, 2));

  const actual = typia.llm.parameters<ICreateUserParameters>();

  TestValidator.equals("parameters", clean(actual), clean(converted.value));
  TestValidator.equals(
    "description",
    clean(actual.description),
    clean(converted.value.description),
  );
};

const clean = <T>(value: T): T =>
  value === undefined ? value : JSON.parse(JSON.stringify(value));
