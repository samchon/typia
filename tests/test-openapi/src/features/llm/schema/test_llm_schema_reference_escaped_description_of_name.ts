import { TestValidator } from "@nestia/e2e";
import {
  ILlmSchema,
  IOpenApiSchemaError,
  IResult,
  OpenApi,
} from "@samchon/openapi";
import { LlmSchemaComposer } from "@samchon/openapi/src/composers/LlmSchemaComposer";
import typia, { IJsonSchemaCollection } from "typia";

export const test_llm_schema_reference_escaped_description_of_name =
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
    const deep: ILlmSchema.IObject = schema.properties
      .deep as ILlmSchema.IObject;
    TestValidator.predicate(
      "description",
      () => !!deep.description?.includes("Something.INested.IDeep"),
    );
  };

interface Something {
  x: number;
}
namespace Something {
  export interface INested {
    y: number;
  }
  export namespace INested {
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
