import { OpenApi } from "../openapi/OpenApi";
import { ILlmSchema } from "../schema/ILlmSchema";
import { IHttpLlmFunction } from "./IHttpLlmFunction";
import { IHttpMigrateRoute } from "./IHttpMigrateRoute";

/**
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
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IHttpLlmApplication {
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
     */
    separate: null | ((schema: ILlmSchema) => boolean);

    /**
     * Maximum length of function name.
     *
     * When a function name is longer than this value, it will be truncated.
     *
     * If not possible to truncate due to the duplication, the function name
     * would be modified to randomly generated (UUID v4).
     *
     * @default 64
     */
    maxLength: number;

    /**
     * Whether to disallow superfluous properties or not.
     *
     * @default false
     */
    equals: boolean;
  }

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
    route: () => IHttpMigrateRoute | undefined;
  }
}
