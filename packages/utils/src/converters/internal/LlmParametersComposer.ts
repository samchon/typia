import { IJsonSchemaTransformError, IResult, OpenApi } from "@typia/interface";

import { LlmReference } from "../../utils/internal/LlmReference";
import { ObjectDictionary } from "../../utils/internal/ObjectDictionary";
import { OpenApiTypeChecker } from "../../validators/OpenApiTypeChecker";

/** @internal */
export namespace LlmParametersFinder {
  export const parameters = (props: {
    components: OpenApi.IComponents;
    schema: OpenApi.IJsonSchema.IObject | OpenApi.IJsonSchema.IReference;
    method: string;
    accessor?: string;
    refAccessor?: string;
  }): IResult<OpenApi.IJsonSchema.IObject, IJsonSchemaTransformError> => {
    let entity: OpenApi.IJsonSchema = props.schema;
    const visited: Set<string> = new Set();
    while (OpenApiTypeChecker.isReference(entity)) {
      const key: string | undefined = LlmReference.readOpenApi(entity.$ref);
      if (key === undefined)
        return reportError({
          ...props,
          schema: entity,
          message: `Invalid local schema reference ${JSON.stringify(entity.$ref)}.`,
        });
      if (visited.has(key))
        return reportError({
          ...props,
          schema: entity,
          message: `Circular schema reference ${JSON.stringify(key)} cannot be resolved.`,
        });
      visited.add(key);
      const found: OpenApi.IJsonSchema | undefined = ObjectDictionary.get(
        props.components.schemas,
        key,
      );
      if (found === undefined)
        return reportError({
          ...props,
          schema: entity,
          message: `Unable to resolve schema reference ${JSON.stringify(key)}.`,
        });
      entity = found;
    }
    if (OpenApiTypeChecker.isObject(entity) === false)
      return reportError({
        ...props,
        message: "LLM only accepts object type as parameters.",
      });
    else if (!!entity.additionalProperties)
      return reportError({
        ...props,
        message: "LLM does not allow additional properties on parameters.",
      });
    return {
      success: true,
      value: entity,
    };
  };

  const reportError = (props: {
    method: string;
    message: string;
    schema: OpenApi.IJsonSchema;
    accessor?: string;
  }): IResult.IFailure<IJsonSchemaTransformError> => ({
    success: false,
    error: {
      method: props.method,
      message: `failed to compose LLM schema.`,
      reasons: [
        {
          schema: props.schema,
          message: props.message,
          accessor: props.accessor ?? "$input.schema",
        },
      ],
    },
  });
}
