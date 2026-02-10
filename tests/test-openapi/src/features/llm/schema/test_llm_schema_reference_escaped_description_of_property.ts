import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@samchon/openapi";
import { LlmSchemaComposer } from "@samchon/openapi/src/composers/LlmSchemaComposer";
import typia, { IJsonSchemaCollection, tags } from "typia";

export const test_llm_schema_reference_escaped_description_of_property =
  (): void => {
    const collection: IJsonSchemaCollection = typia.json.schemas<[IMember]>();
    const result = LlmSchemaComposer.parameters({
      components: collection.components,
      schema: collection.schemas[0]! as OpenApi.IJsonSchema.IReference,
      config: {
        strict: true,
      },
    });
    if (result.success === false)
      throw new Error("Failed to compose LLM schema.");

    TestValidator.equals(
      "property description",
      result.value.properties.hobby!.description,
      undefined,
    );
  };

interface IMember {
  id: string & tags.Format<"uuid">;
  name: string;
  age: number &
    tags.Type<"uint32"> &
    tags.Minimum<20> &
    tags.ExclusiveMaximum<100>;
  /**
   * A hobby.
   *
   * The main hobby.
   */
  hobby: IHobby;
}

/** The hobby type. */
interface IHobby {
  name: string;
}
