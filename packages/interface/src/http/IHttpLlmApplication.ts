import { OpenApi } from "../openapi/OpenApi";
import { ILlmSchema } from "../schema/ILlmSchema";
import { IHttpLlmFunction } from "./IHttpLlmFunction";
import { IHttpMigrateRoute } from "./IHttpMigrateRoute";

/**
<<<<<<< HEAD
 * Application of LLM function call from OpenAPI document.
 *
 * `IHttpLlmApplication` is a data structure representing a collection of
 * {@link IHttpLlmFunction LLM function calling schemas} composed from the
 * {@link OpenApi.IDocument OpenAPI document} and its
 * {@link OpenApi.IOperation operation} metadata. It also contains
 * {@link IHttpLlmApplication.errors failed operations}, and adjusted
 * {@link IHttpLlmApplication.config configuration} during the
 * `IHttpLlmApplication` construction.
 *
 * About the {@link OpenApi.IOperation API operations}, they are converted to
 * {@link IHttpLlmFunction} type which represents LLM function calling schema. By
 * the way, if there're some types which does not supported by LLM, the
 * operation would be failed and pushed into the
 * {@link IHttpLlmApplication.errors}. Otherwise, the operation would be
 * successfully converted to {@link IHttpLlmFunction} and its type schemas are
 * converted to {@link ILlmSchema}.
 *
 * For reference, the arguments type is composed by below rule.
 *
 * - `pathParameters`: Path parameters of {@link IHttpMigrateRoute.parameters}
 * - `query`: Query parameter of {@link IHttpMigrateRoute.query}
 * - `body`: Body parameter of {@link IHttpMigrateRoute.body}
 *
 * ```typescript
 * {
 *   ...pathParameters,
 *   query,
 *   body,
 * }
 * ```
 *
 * By the way, there can be some parameters (or their nested properties) which
 * must be composed by Human, not by LLM. File uploading feature or some
 * sensitive information like secret key (password) are the examples. In that
 * case, you can separate the function parameters to both LLM and Human sides by
 * configuring the {@link IHttpLlmApplication.IConfig.separate} property. The
 * separated parameters are assigned to the {@link IHttpLlmFunction.separated}
 * property.
 *
 * For reference, the actual function call execution is not by LLM, but by you.
 * When the LLM selects the proper function and fills the arguments, you just
 * call the function by {@link HttpLlm.execute} with the LLM prepared arguments.
 * And then informs the return value to the LLM by system prompt. The LLM will
 * continue the next conversation based on the return value.
 *
 * Additionally, if you've configured
 * {@link IHttpLlmApplication.IConfig.separate}, so that the parameters are
 * separated to Human and LLM sides, you can merge these human and LLM sides'
 * parameters into one through {@link HttpLlm.mergeParameters} before the actual
 * LLM function call execution.
=======
 * LLM function calling application from OpenAPI document.
 *
 * `IHttpLlmApplication` is a collection of {@link IHttpLlmFunction} schemas
 * converted from {@link OpenApi.IDocument} by `HttpLlm.application()`. Each
 * OpenAPI operation becomes an LLM-callable function.
 *
 * Successful conversions go to {@link functions}, failed ones to {@link errors}
 * with detailed error messages. Common failure causes:
 *
 * - Unsupported schema features (tuples, `oneOf` with incompatible types)
 * - Missing required fields in OpenAPI document
 * - Operations marked with `x-samchon-human: true`
 *
 * Configure behavior via {@link IHttpLlmApplication.IConfig}:
 *
 * - {@link IHttpLlmApplication.IConfig.separate}: Split LLM vs human parameters
 * - {@link IHttpLlmApplication.IConfig.maxLength}: Function name length limit
 * - {@link ILlmSchema.IConfig.strict}: OpenAI structured output mode
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IHttpLlmApplication {
<<<<<<< HEAD
  /**
   * List of function metadata.
   *
   * List of function metadata that can be used for the LLM function call.
   *
   * When you want to execute the function with LLM constructed arguments, you
   * can do it through {@link LlmFetcher.execute} function.
   */
  functions: IHttpLlmFunction[];

  /** List of errors occurred during the composition. */
  errors: IHttpLlmApplication.IError[];

  /** Configuration for the application. */
  config: IHttpLlmApplication.IConfig;
}
export namespace IHttpLlmApplication {
  /** Configuration for the HTTP LLM application schema composition. */
  export interface IConfig extends ILlmSchema.IConfig {
    /**
     * Separator function for the parameters.
     *
     * When composing parameter arguments through LLM function call, there can
     * be a case that some parameters must be composed by human, or LLM cannot
     * understand the parameter.
     *
     * For example, if the parameter type has configured
     * {@link ILlmSchema.IString.contentMediaType} which indicates file
     * uploading, it must be composed by human, not by LLM (Large Language
     * Model).
     *
     * In that case, if you configure this property with a function that
     * predicating whether the schema value must be composed by human or not,
     * the parameters would be separated into two parts.
     *
     * - {@link ILlmFunction.separated.llm}
     * - {@link ILlmFunction.separated.human}
     *
     * When writing the function, note that returning value `true` means to be a
     * human composing the value, and `false` means to LLM composing the value.
     * Also, when predicating the schema, it would better to utilize the
     * {@link LlmTypeChecker} like features.
     *
     * @default null
     * @param schema Schema to be separated.
     * @returns Whether the schema value must be composed by human or not.
=======
  /** Successfully converted LLM function schemas. */
  functions: IHttpLlmFunction[];

  /** Operations that failed conversion. */
  errors: IHttpLlmApplication.IError[];

  /** Configuration used for composition. */
  config: IHttpLlmApplication.IConfig;
}
export namespace IHttpLlmApplication {
  /** Configuration for HTTP LLM application composition. */
  export interface IConfig extends ILlmSchema.IConfig {
    /**
     * Separates parameters into LLM and human parts.
     *
     * Use for file uploads or sensitive data that LLM cannot handle. Return
     * `true` for human-composed, `false` for LLM-composed.
     *
     * @default null
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
     */
    separate: null | ((schema: ILlmSchema) => boolean);

    /**
<<<<<<< HEAD
     * Maximum length of function name.
     *
     * When a function name is longer than this value, it will be truncated.
     *
     * If not possible to truncate due to the duplication, the function name
     * would be modified to randomly generated (UUID v4).
=======
     * Maximum function name length. Truncated or UUID if exceeded.
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
     *
     * @default 64
     */
    maxLength: number;

    /**
<<<<<<< HEAD
     * Whether to disallow superfluous properties or not.
=======
     * Whether to disallow superfluous properties.
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
     *
     * @default false
     */
    equals: boolean;
  }

<<<<<<< HEAD
  /** Error occurred in the composition. */
  export interface IError {
    /** HTTP method of the endpoint. */
    method: "get" | "post" | "put" | "patch" | "delete" | "head";

    /** Path of the endpoint. */
    path: string;

    /** Error messages. */
    messages: string[];

    /**
     * Get the Swagger operation metadata.
     *
     * Get the Swagger operation metadata, of the source.
     */
    operation: () => OpenApi.IOperation;

    /**
     * Get the migration route metadata.
     *
     * Get the migration route metadata, of the source.
     *
     * If the property returns `undefined`, it means that the error has been
     * occurred in the migration level, not of LLM application composition.
     *
     * @returns Migration route metadata.
     */
=======
  /** Composition error for an operation. */
  export interface IError {
    /** HTTP method of the failed operation. */
    method: "get" | "post" | "put" | "patch" | "delete" | "head";

    /** Path of the failed operation. */
    path: string;

    /** Error messages describing the failure. */
    messages: string[];

    /** Returns source {@link OpenApi.IOperation}. */
    operation: () => OpenApi.IOperation;

    /** Returns source route. Undefined if error occurred at migration level. */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
    route: () => IHttpMigrateRoute | undefined;
  }
}
