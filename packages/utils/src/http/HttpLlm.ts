import {
  IHttpConnection,
  IHttpLlmApplication,
  IHttpLlmController,
  IHttpLlmFunction,
  IHttpMigrateApplication,
  IHttpResponse,
  OpenApi,
  OpenApiV3,
  OpenApiV3_1,
  OpenApiV3_2,
  SwaggerV2,
} from "@typia/interface";

import { HttpMigration } from "./HttpMigration";
import { HttpLlmApplicationComposer } from "./internal/HttpLlmApplicationComposer";
import { HttpLlmFunctionFetcher } from "./internal/HttpLlmFunctionFetcher";

/**
 * LLM function calling utilities for OpenAPI documents.
 *
 * `HttpLlm` converts OpenAPI documents into LLM function calling applications
 * and executes them. Supports all OpenAPI versions (Swagger 2.0, OpenAPI 3.0,
 * 3.1, 3.2) through automatic conversion to {@link OpenApi} format.
 *
 * Main functions:
 *
 * - {@link controller}: Create {@link IHttpLlmController} from OpenAPI document
 * - {@link application}: Convert OpenAPI document to {@link IHttpLlmApplication}
 * - {@link execute}: Call an LLM function and return the response body
 * - {@link propagate}: Call an LLM function and return full HTTP response
 *
 * Typical workflow:
 *
 * 1. Load OpenAPI document (JSON/YAML)
 * 2. Call `HttpLlm.application()` to get function schemas
 * 3. Send function schemas to LLM for function selection
 * 4. Call `HttpLlm.execute()` with LLM's chosen function and arguments
 *
 * @author Jeongho Nam - https://github.com/samchon
 *
 * @evidence contracts/common.md#principled-implementation The namespace is the entry point that turns an OpenAPI document of any supported version into an LLM application and executes its functions; conversion goes through the migration application, which upgrades the document to the normalized form first.
 * @evidence contracts/common.md#clear-and-simple-design Two composers and two fetchers with one request type, each delegating to an internal namespace that owns its algorithm, so the public surface is a short list.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Execution always goes through the migrate route fetcher, so there is no second HTTP implementation to drift from it.
 * @evidence contracts/common.md#meaningful-documentation The comment lists the functions and the workflow; a stale mention of a function that does not exist and the missing 3.2 version were corrected.
 */
export namespace HttpLlm {
  /* -----------------------------------------------------------
    COMPOSERS
  ----------------------------------------------------------- */
  /**
   * Create HTTP LLM controller from OpenAPI document.
   *
   * Composes {@link IHttpLlmController} from OpenAPI document with connection
   * info. The controller feeds an LLM framework adapter such as
   * `@typia/langchain` or `@typia/vercel` to expose all API operations as tools
   * at once.
   *
   * @param props Controller properties
   *
   * @returns HTTP LLM controller
   *
   * @evidence contracts/common.md#principled-implementation The controller pairs the application composed from the document with the supplied name, connection and optional executor, so the same document yields both the schemas and the way to call them.
   * @evidence contracts/common.md#clear-and-simple-design One function that delegates composition to application and copies the remaining fields.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The executor stays the caller's option and is not replaced.
   * @evidence contracts/common.md#meaningful-documentation The doc and parameter comments say what each property is and that the default executor is HttpLlm.execute.
   */
  export const controller = (props: {
    /** Identifier name of the controller. */
    name: string;

    /** OpenAPI document to convert. */
    document:
      | OpenApi.IDocument
      | SwaggerV2.IDocument
      | OpenApiV3.IDocument
      | OpenApiV3_1.IDocument
      | OpenApiV3_2.IDocument;

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

  /**
   * Convert OpenAPI document to LLM function calling application.
   *
   * Converts API operations to LLM-callable functions.
   *
   * @param props Composition properties
   *
   * @returns LLM function calling application
   *
   * @evidence contracts/common.md#principled-implementation The document is migrated and the migration result is composed into the LLM application with the three configuration values defaulted explicitly (strict false, maxLength 64, equals false), so a partial configuration is completed in one place.
   * @evidence contracts/common.md#clear-and-simple-design A thin function over HttpMigration.application and the composer.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The defaults are the documented ones and no document is special-cased.
   * @evidence contracts/common.md#meaningful-documentation The doc says that each operation becomes a function; the property comments describe the document and configuration.
   */
  export const application = (props: {
    /** OpenAPI document to convert. */
    document:
      | OpenApi.IDocument
      | SwaggerV2.IDocument
      | OpenApiV3.IDocument
      | OpenApiV3_1.IDocument
      | OpenApiV3_2.IDocument;

    /** LLM schema conversion configuration. */
    config?: Partial<IHttpLlmApplication.IConfig>;
  }): IHttpLlmApplication => {
    // MIGRATE
    const migrate: IHttpMigrateApplication = HttpMigration.application(
      props.document,
    );
    return HttpLlmApplicationComposer.application({
      migrate,
      config: {
        strict: props.config?.strict ?? false,
        maxLength: props.config?.maxLength ?? 64,
        equals: props.config?.equals ?? false,
      },
    });
  };

  /* -----------------------------------------------------------
    FETCHERS
  ----------------------------------------------------------- */
  /**
   * Properties for LLM function call.
   *
   * @evidence contracts/common.md#principled-implementation The record carries the application, the chosen function, the connection and the keyworded input object, which is everything the fetcher needs to locate the route and build the request.
   * @evidence contracts/common.md#clear-and-simple-design Four fields in the namespace of the functions that take them.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
   * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
   */
  export interface IFetchProps {
    /** LLM function calling application. */
    application: IHttpLlmApplication;

    /** Function to call. */
    function: IHttpLlmFunction;

    /** HTTP connection info. */
    connection: IHttpConnection;

    /** Function arguments. */
    input: object;
  }

  /**
   * Execute LLM function call.
   *
   * Calls API endpoint and returns response body. Throws {@link HttpError} on
   * non-2xx status.
   *
   * @param props Function call properties
   *
   * @returns Response body
   *
   * @throws HttpError on non-2xx status
   *
   * @evidence contracts/common.md#principled-implementation The call delegates to the function fetcher, which turns the LLM arguments into route arguments and rejects a non-2xx response with HttpError, so a caller gets a body or an exception.
   * @evidence contracts/common.md#clear-and-simple-design A one-line delegation.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts It adds no behavior beyond the fetcher.
   * @evidence contracts/common.md#meaningful-documentation The doc states the returned body, the thrown error and the parameter.
   */
  export const execute = (props: IFetchProps): Promise<unknown> =>
    HttpLlmFunctionFetcher.execute(props);

  /**
   * Propagate LLM function call.
   *
   * Calls API endpoint and returns full response including non-2xx. Use when
   * you need to handle error responses yourself.
   *
   * @param props Function call properties
   *
   * @returns Full HTTP response
   *
   * @throws Error only on connection failure
   *
   * @evidence contracts/common.md#principled-implementation The call delegates to the function fetcher and returns the whole response, so error statuses are data and only connection failures throw.
   * @evidence contracts/common.md#clear-and-simple-design A one-line delegation.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts It adds no behavior beyond the fetcher.
   * @evidence contracts/common.md#meaningful-documentation The doc states the return and the thrown error.
   */
  export const propagate = (props: IFetchProps): Promise<IHttpResponse> =>
    HttpLlmFunctionFetcher.propagate(props);
}
