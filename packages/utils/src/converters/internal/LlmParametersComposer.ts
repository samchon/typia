import { IJsonSchemaTransformError, IResult, OpenApi } from "@typia/interface";

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
    const entity: IResult<OpenApi.IJsonSchema, IJsonSchemaTransformError> =
      OpenApiTypeChecker.unreference(props);
    if (entity.success === false) return entity;
    else if (OpenApiTypeChecker.isObject(entity.value) === false)
      return reportError({
        ...props,
        message: "LLM only accepts object type as parameters.",
      });
    else if (!!entity.value.additionalProperties)
      return reportError({
        ...props,
        message: "LLM does not allow additional properties on parameters.",
      });
    return {
      success: true,
      value: entity.value,
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
