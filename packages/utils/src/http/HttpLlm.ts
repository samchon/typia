import {
  IHttpConnection,
  IHttpLlmApplication,
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
 * LLM function calling from OpenAPI documents.
 *
 * Composes LLM function calling applications from OpenAPI documents,
 * executes function calls, and merges human/LLM parameters.
 */
export namespace HttpLlm {
  /* -----------------------------------------------------------
    COMPOSERS
  ----------------------------------------------------------- */
  /** Properties for application composition. */
  export interface IApplicationProps {
    /** OpenAPI document to convert. */
    document:
      | OpenApi.IDocument
      | SwaggerV2.IDocument
      | OpenApiV3.IDocument
      | OpenApiV3_1.IDocument;

    /** LLM schema conversion configuration. */
    config?: Partial<IHttpLlmApplication.IConfig>;
  }

  /**
   * Convert OpenAPI document to LLM function calling application.
   *
   * Converts API operations to LLM-callable functions. Use
   * {@link mergeParameters} if `separate` option is configured.
   *
   * @param props Composition properties
   * @returns LLM function calling application
   */
  export const application = (
    props: IApplicationProps,
  ): IHttpLlmApplication => {
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
  /** Properties for LLM function call. */
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
   * Calls API endpoint and returns response body.
   * Throws {@link HttpError} on non-2xx status.
   *
   * @param props Function call properties
   * @returns Response body
   * @throws HttpError on non-2xx status
   */
  export const execute = (props: IFetchProps): Promise<unknown> =>
    HttpLlmFunctionFetcher.execute(props);

  /**
   * Propagate LLM function call.
   *
   * Calls API endpoint and returns full response including non-2xx.
   * Use when you need to handle error responses yourself.
   *
   * @param props Function call properties
   * @returns Full HTTP response
   * @throws Error only on connection failure
   */
  export const propagate = (props: IFetchProps): Promise<IHttpResponse> =>
    HttpLlmFunctionFetcher.propagate(props);

  /* -----------------------------------------------------------
    MERGERS
  ----------------------------------------------------------- */
  /** Properties for parameter merging. */
  export interface IMergeProps {
    /** Target function metadata. */
    function: ILlmFunction;

    /** LLM-provided arguments. */
    llm: object | null;

    /** Human-provided arguments. */
    human: object | null;
  }

  /**
   * Merge separated parameters.
   *
   * Combines human and LLM parameters when `separate` option was used.
   * Throws error if `separate` was not configured.
   *
   * @param props Merge properties
   * @returns Merged parameters
   */
  export const mergeParameters = (props: IMergeProps): object =>
    LlmDataMerger.parameters(props);

  /**
   * Merge two values.
   *
   * Objects are merged at property level. Primitives return `y ?? x`.
   *
   * @param x First value
   * @param y Second value (preferred)
   * @returns Merged value
   */
  export const mergeValue = (x: unknown, y: unknown): unknown =>
    LlmDataMerger.value(x, y);
}
