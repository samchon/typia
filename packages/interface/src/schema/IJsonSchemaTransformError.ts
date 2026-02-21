import { OpenApi } from "../openapi";

/**
 * Error information from JSON schema transformation.
 *
 * `IJsonSchemaTransformError` represents an error that occurred during
 * transformation or iteration of {@link OpenApi.IJsonSchema} types. This error
 * type is primarily generated when converting OpenAPI schemas to LLM-compatible
 * formats via {@link ILlmSchema}.
 *
 * Common transformation failures include:
 *
 * - **Missing references**: `$ref` pointing to non-existent schema definitions
 * - **Unsupported tuple types**: All LLM providers reject tuple schemas
 * - **Unsupported union types**: Gemini does not support `oneOf` schemas
 * - **Unsupported dynamic objects**: ChatGPT and Gemini reject
 *   `additionalProperties`
 *
 * The {@link reasons} array provides detailed information about each failure,
 * including the problematic schema, its location path, and a human-readable
 * error message. Use this information to diagnose and fix schema compatibility
 * issues.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IJsonSchemaTransformError {
  /**
   * Name of the method that caused the error.
   *
   * Identifies which transformation function failed, such as
   * `"HttpLlm.application"` or `"LlmSchemaConverter.schema"`.
   */
  method: string;

  /**
   * Summary error message.
   *
   * A human-readable description of the overall error. For detailed information
   * about specific failures, examine the {@link reasons} array.
   */
  message: string;

  /**
   * Detailed list of transformation failures.
   *
   * Each entry describes a specific schema that failed transformation,
   * including its location and the reason for failure. Multiple failures can
   * occur in a single transformation when processing complex schemas.
   */
  reasons: IJsonSchemaTransformError.IReason[];
}
export namespace IJsonSchemaTransformError {
  /**
   * Detailed information about a single transformation failure.
   *
   * Provides the specific schema that failed, its accessor path for locating it
   * within the document, and a message explaining why the transformation
   * failed.
   */
  export interface IReason {
    /**
     * The schema that caused the transformation failure.
     *
     * The actual JSON schema object that could not be transformed. Inspect this
     * to understand the problematic schema structure.
     */
    schema: OpenApi.IJsonSchema;

    /**
     * Path to the failing schema within the document.
     *
     * A dot-notation path (e.g., `"components.schemas.User.properties.tags"`)
     * that identifies where the problematic schema is located. Use this to
     * locate and fix the issue in the source OpenAPI document.
     */
    accessor: string;

    /**
     * Human-readable explanation of the failure.
     *
     * Describes why the schema could not be transformed, such as "Tuple type is
     * not supported" or "Cannot resolve $ref reference".
     */
    message: string;
  }
}
