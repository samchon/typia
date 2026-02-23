import {
  IHttpConnection,
  IHttpLlmApplication,
<<<<<<< HEAD
=======
  IHttpLlmController,
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
  IHttpLlmFunction,
  IHttpMigrateApplication,
  IHttpResponse,
  ILlmFunction,
  OpenApi,
  OpenApiV3,
  OpenApiV3_1,
  SwaggerV2,
} from "@typia/interface";

import { HttpMigration } from "./HttpMigration";
import { HttpLlmApplicationComposer } from "./internal/HttpLlmApplicationComposer";
import { HttpLlmFunctionFetcher } from "./internal/HttpLlmFunctionFetcher";
import { LlmDataMerger } from "./internal/LlmDataMerger";

/**
<<<<<<< HEAD
 * LLM function calling application composer from OpenAPI document.
 *
 * `HttpLlm` is a module for composing LLM (Large Language Model) function
 * calling application from the {@link OpenApi.IDocument OpenAPI document}, and
 * also for LLM function call execution and parameter merging.
 *
 * At first, you can construct the LLM function calling application by the
 * {@link HttpLlm.application HttpLlm.application()} function. And then the LLM
 * has selected a {@link IHttpLlmFunction function} to call and composes its
 * arguments, you can execute the function by
 * {@link HttpLlm.execute HttpLlm.execute()} or
 * {@link HttpLlm.propagate HttpLlm.propagate()}.
 *
 * By the way, if you have configured the
 * {@link IHttpLlmApplication.IConfig.separate} option to separate the parameters
 * into human and LLM sides, you can merge these human and LLM sides' parameters
 * into one through {@link HttpLlm.mergeParameters HttpLlm.mergeParameters()}
 * before the actual LLM function call execution.
=======
 * LLM function calling utilities for OpenAPI documents.
 *
 * `HttpLlm` converts OpenAPI documents into LLM function calling applications
 * and executes them. Supports all OpenAPI versions (Swagger 2.0, OpenAPI 3.0,
 * 3.1) through automatic conversion to {@link OpenApi} format.
 *
 * Main functions:
 *
 * - {@link controller}: Create {@link IHttpLlmController} from OpenAPI document
 * - {@link application}: Convert OpenAPI document to {@link IHttpLlmApplication}
 * - {@link execute}: Call an LLM function and return the response body
 * - {@link propagate}: Call an LLM function and return full HTTP response
 * - {@link mergeParameters}: Merge LLM-filled and human-filled parameters
 *
 * Typical workflow:
 *
 * 1. Load OpenAPI document (JSON/YAML)
 * 2. Call `HttpLlm.application()` to get function schemas
 * 3. Send function schemas to LLM for function selection
 * 4. Call `HttpLlm.execute()` with LLM's chosen function and arguments
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export namespace HttpLlm {
  /* -----------------------------------------------------------
    COMPOSERS
  ----------------------------------------------------------- */
<<<<<<< HEAD
  /** Properties for the LLM function calling application composer. */
  export interface IApplicationProps {
=======
  /**
   * Create HTTP LLM controller from OpenAPI document.
   *
   * Composes {@link IHttpLlmController} from OpenAPI document with connection
   * info. The controller can be used with {@link registerMcpControllers} to
   * register all API operations as MCP tools at once.
   *
   * @param props Controller properties
   * @returns HTTP LLM controller
   */
  export const controller = (props: {
    /** Identifier name of the controller. */
    name: string;

>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
    /** OpenAPI document to convert. */
    document:
      | OpenApi.IDocument
      | SwaggerV2.IDocument
      | OpenApiV3.IDocument
      | OpenApiV3_1.IDocument;

<<<<<<< HEAD
    /** Configuration for the LLM function calling schema conversion. */
    config?: Partial<IHttpLlmApplication.IConfig>;
  }
=======
    /** Connection to the API server. */
    connection: IHttpConnection;

    /** LLM schema conversion configuration. */
    config?: Partial<IHttpLlmApplication.IConfig>;

    /**
     * Custom executor of the API function.
     *
     * Default executor is {@link HttpLlm.execute} function.
     */
    execute?: IHttpLlmController["execute"];
  }): IHttpLlmController => ({
    protocol: "http",
    name: props.name,
    application: application({
      document: props.document,
      config: props.config,
    }),
    connection: props.connection,
    execute: props.execute,
  });
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713

  /**
   * Convert OpenAPI document to LLM function calling application.
   *
<<<<<<< HEAD
   * Converts {@link OpenApi.IDocument OpenAPI document} or
   * {@link IHttpMigrateApplication migrated application} to the
   * {@link IHttpLlmApplication LLM function calling application}. Every
   * {@link OpenApi.IOperation API operations} in the OpenAPI document are
   * converted to the {@link IHttpLlmFunction LLM function} type, and they would
   * be used for the LLM function calling.
   *
   * If you have configured the {@link IHttpLlmApplication.IConfig.separate}
   * option, every parameters in the {@link IHttpLlmFunction} would be separated
   * into both human and LLM sides. In that case, you can merge these human and
   * LLM sides' parameters into one through {@link HttpLlm.mergeParameters}
   * before the actual LLM function call execution.
   *
   * @param props Properties for composition
   * @returns LLM function calling application
   */
  export const application = (
    props: IApplicationProps,
  ): IHttpLlmApplication => {
=======
   * Converts API operations to LLM-callable functions. Use
   * {@link mergeParameters} if `separate` option is configured.
   *
   * @param props Composition properties
   * @returns LLM function calling application
   */
  export const application = (props: {
    /** OpenAPI document to convert. */
    document:
      | OpenApi.IDocument
      | SwaggerV2.IDocument
      | OpenApiV3.IDocument
      | OpenApiV3_1.IDocument;

    /** LLM schema conversion configuration. */
    config?: Partial<IHttpLlmApplication.IConfig>;
  }): IHttpLlmApplication => {
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
    // MIGRATE
    const migrate: IHttpMigrateApplication = HttpMigration.application(
      props.document,
    );
    return HttpLlmApplicationComposer.application({
      migrate,
      config: {
        reference: props.config?.reference ?? true,
        strict: props.config?.strict ?? false,
        separate: props.config?.separate ?? null,
        maxLength: props.config?.maxLength ?? 64,
        equals: props.config?.equals ?? false,
      },
    });
  };

  /* -----------------------------------------------------------
    FETCHERS
  ----------------------------------------------------------- */
<<<<<<< HEAD
  /** Properties for the LLM function call. */
  export interface IFetchProps {
    /** Application of the LLM function calling. */
    application: IHttpLlmApplication;

    /** LLM function schema to call. */
    function: IHttpLlmFunction;

    /** Connection info to the HTTP server. */
    connection: IHttpConnection;

    /** Input arguments for the function call. */
=======
  /** Properties for LLM function call. */
  export interface IFetchProps {
    /** LLM function calling application. */
    application: IHttpLlmApplication;

    /** Function to call. */
    function: IHttpLlmFunction;

    /** HTTP connection info. */
    connection: IHttpConnection;

    /** Function arguments. */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
    input: object;
  }

  /**
<<<<<<< HEAD
   * Execute the LLM function call.
   *
   * `HttmLlm.execute()` is a function executing the target
   * {@link OpenApi.IOperation API endpoint} with with the connection information
   * and arguments composed by Large Language Model like OpenAI (+human
   * sometimes).
   *
   * By the way, if you've configured the
   * {@link IHttpLlmApplication.IConfig.separate}, so that the parameters are
   * separated to human and LLM sides, you have to merge these human and LLM
   * sides' parameters into one through {@link HttpLlm.mergeParameters}
   * function.
   *
   * For reference, if the target API endpoint responds none 200/201 status,
   * this would be considered as an error and the {@link HttpError} would be
   * thrown. Otherwise you don't want such rule, you can use the
   * {@link HttpLlm.propagate} function instead.
   *
   * @param props Properties for the LLM function call
   * @returns Return value (response body) from the API endpoint
   * @throws HttpError when the API endpoint responds none 200/201 status
=======
   * Execute LLM function call.
   *
   * Calls API endpoint and returns response body. Throws {@link HttpError} on
   * non-2xx status.
   *
   * @param props Function call properties
   * @returns Response body
   * @throws HttpError on non-2xx status
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
   */
  export const execute = (props: IFetchProps): Promise<unknown> =>
    HttpLlmFunctionFetcher.execute(props);

  /**
<<<<<<< HEAD
   * Propagate the LLM function call.
   *
   * `HttmLlm.propagate()` is a function propagating the target
   * {@link OpenApi.IOperation API endpoint} with with the connection information
   * and arguments composed by Large Language Model like OpenAI (+human
   * sometimes).
   *
   * By the way, if you've configured the
   * {@link IHttpLlmApplication.IConfig.separate}, so that the parameters are
   * separated to human and LLM sides, you have to merge these humand and LLM
   * sides' parameters into one through {@link HttpLlm.mergeParameters}
   * function.
   *
   * For reference, the propagation means always returning the response from the
   * API endpoint, even if the status is not 200/201. This is useful when you
   * want to handle the response by yourself.
   *
   * @param props Properties for the LLM function call
   * @returns Response from the API endpoint
   * @throws Error only when the connection is failed
=======
   * Propagate LLM function call.
   *
   * Calls API endpoint and returns full response including non-2xx. Use when
   * you need to handle error responses yourself.
   *
   * @param props Function call properties
   * @returns Full HTTP response
   * @throws Error only on connection failure
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
   */
  export const propagate = (props: IFetchProps): Promise<IHttpResponse> =>
    HttpLlmFunctionFetcher.propagate(props);

  /* -----------------------------------------------------------
    MERGERS
  ----------------------------------------------------------- */
<<<<<<< HEAD
  /** Properties for the parameters' merging. */
  export interface IMergeProps {
    /** Metadata of the target function. */
    function: ILlmFunction;

    /** Arguments composed by the LLM. */
    llm: object | null;

    /** Arguments composed by the human. */
=======
  /** Properties for parameter merging. */
  export interface IMergeProps {
    /** Target function metadata. */
    function: ILlmFunction;

    /** LLM-provided arguments. */
    llm: object | null;

    /** Human-provided arguments. */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
    human: object | null;
  }

  /**
<<<<<<< HEAD
   * Merge the parameters.
   *
   * If you've configured the {@link IHttpLlmApplication.IConfig.separate}
   * option, so that the parameters are separated to human and LLM sides, you
   * can merge these humand and LLM sides' parameters into one through this
   * `HttpLlm.mergeParameters()` function before the actual LLM function call
   * execution.
   *
   * On contrary, if you've not configured the
   * {@link IHttpLlmApplication.IConfig.separate} option, this function would
   * throw an error.
   *
   * @param props Properties for the parameters' merging
   * @returns Merged parameter values
=======
   * Merge separated parameters.
   *
   * Combines human and LLM parameters when `separate` option was used. Throws
   * error if `separate` was not configured.
   *
   * @param props Merge properties
   * @returns Merged parameters
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
   */
  export const mergeParameters = (props: IMergeProps): object =>
    LlmDataMerger.parameters(props);

  /**
   * Merge two values.
   *
<<<<<<< HEAD
   * If both values are objects, then combines them in the properties level.
   *
   * Otherwise, returns the latter value if it's not null, otherwise the former
   * value.
   *
   * - `return (y ?? x)`
   *
   * @param x Value X to merge
   * @param y Value Y to merge
=======
   * Objects are merged at property level. Primitives return `y ?? x`.
   *
   * @param x First value
   * @param y Second value (preferred)
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
   * @returns Merged value
   */
  export const mergeValue = (x: unknown, y: unknown): unknown =>
    LlmDataMerger.value(x, y);
}
