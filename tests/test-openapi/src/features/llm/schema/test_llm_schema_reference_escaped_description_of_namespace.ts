import { TestValidator } from "@nestia/e2e";
import {
  ILlmSchema,
  IOpenApiSchemaError,
  IResult,
  OpenApi,
} from "@samchon/openapi";
import { LlmSchemaComposer } from "@samchon/openapi/src/composers/LlmSchemaComposer";
import typia, { IJsonSchemaCollection } from "typia";

export const test_llm_schema_reference_escaped_description_of_namespace =
  (): void => {
    const collection: IJsonSchemaCollection = typia.json.schemas<
      [
        {
          deep: Something.INested.IDeep;
          nested: Something.INested;
          something: Something;
        },
      ]
    >();
    const schema: ILlmSchema.IParameters = composeSchema(collection);
    const deep: ILlmSchema = schema.properties.deep as ILlmSchema;
    TestValidator.predicate("description", () => {
      const description: string | undefined = (
        deep as OpenApi.IJsonSchema.IObject
      ).description;
      return (
        !!description &&
        description.includes("Something interface") &&
        description.includes("Something nested interface") &&
        description.includes("Something nested and deep interface")
      );
    });
  };

/** Something interface. */
interface Something {
  x: number;
}
namespace Something {
  /** Something nested interface. */
  export interface INested {
    y: number;
  }
  export namespace INested {
    /** Something nested and deep interface. */
    export interface IDeep {
      z: number;
    }
  }
}

const composeSchema = (
  collection: IJsonSchemaCollection,
): ILlmSchema.IParameters => {
  const result: IResult<ILlmSchema.IParameters, IOpenApiSchemaError> =
    LlmSchemaComposer.parameters({
      components: collection.components,
      schema: typia.assert<
        OpenApi.IJsonSchema.IObject | OpenApi.IJsonSchema.IReference
      >(collection.schemas[0]),
      config: {
        reference: false,
      },
    });
  if (result.success === false) throw new Error("Invalid schema");
  return result.value;
};
