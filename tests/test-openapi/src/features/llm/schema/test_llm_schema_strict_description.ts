import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@samchon/openapi";
import { LlmSchemaComposer } from "@samchon/openapi/src/composers/LlmSchemaComposer";
import typia, { IJsonSchemaCollection, tags } from "typia";

export const test_llm_schema_strict_description = () => {
  const collection: IJsonSchemaCollection = typia.json.schemas<[IMember]>();
  const result = LlmSchemaComposer.parameters({
    components: collection.components,
    schema: collection.schemas[0]! as OpenApi.IJsonSchema.IReference,
    config: {
      strict: true,
    },
  });
  TestValidator.predicate(
    "type description",
    result.success === true &&
      !!result.value.description?.includes("@link hobby") &&
      !!result.value.description?.includes("> A hobby") &&
      !!result.value.description?.includes("> The main hobby") &&
      !result.value.description?.includes("The hobby type"),
  );
  TestValidator.predicate(
    "$ref description",
    result.success === true &&
      result.value.properties.hobby!.description === undefined,
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
