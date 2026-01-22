import { OpenApi } from "../OpenApi";

/**
 * OpenAPI schema related error.
 *
 * `IOpenApiSchemaError` is a type representing an error that occurred during
 * the iteration or transformation of the OpenAPI schema (JSON schema) of
 * {@link OpenApi.IJsonSchema} type.
 *
 * The most `IOpenApiSchemaError` is occurred by the transformation process from
 * {@link OpenApi.IJsonSchema} to {@link ILlmSchema} type. The transformation can
 * be failed by following reasons:
 *
 * - Unable to find the {@link OpenApi.IJsonSchema.IReference} directing.
 * - Non-supported type in LLM schema models
 *
 *   - Every models do not support {@link OpenApi.IJsonSchema.ITuple}
 *   - Gemini does not support {@link OpenApi.IJsonSchema.IOneOf}
 *   - ChatGPT and Gemini do not support
 *       {@link OpenApi.IJsonSchema.IObject.additionalProperties}
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IOpenApiSchemaError {
  /** Method that caused the error. */
  method: string;

  /** Message of the error. */
  message: string;

  /** The detailed reasons of the error. */
  reasons: IOpenApiSchemaError.IReason[];
}
export namespace IOpenApiSchemaError {
  /** Detailed reason of the error. */
  export interface IReason {
    /** Schema that caused the error. */
    schema: OpenApi.IJsonSchema;

    /** Accessor to the schema. */
    accessor: string;

    /** Message of the reason. */
    message: string;
  }
}
