import {
  IHttpConnection,
  IHttpMigrateApplication,
  IHttpMigrateRoute,
  IHttpResponse,
  OpenApi,
  OpenApiV3,
  OpenApiV3_1,
  OpenApiV3_2,
  SwaggerV2,
} from "@typia/interface";

import { OpenApiConverter } from "../converters/OpenApiConverter";
import { HttpMigrateApplicationComposer } from "./internal/HttpMigrateApplicationComposer";
import { HttpMigrateRouteFetcher } from "./internal/HttpMigrateRouteFetcher";

/**
 * OpenAPI to HTTP migration utilities.
 *
 * `HttpMigration` converts OpenAPI documents into executable HTTP routes
 * ({@link IHttpMigrateApplication}). Unlike {@link HttpLlm} which targets LLM
 * function calling, this focuses on SDK/client code generation.
 *
 * Supports all OpenAPI versions (Swagger 2.0, OpenAPI 3.0, 3.1, 3.2) through
 * automatic conversion to normalized {@link OpenApi} format.
 *
 * Main functions:
 *
 * - {@link application}: Convert OpenAPI document to
 *   {@link IHttpMigrateApplication}
 * - {@link execute}: Call a route and return response body
 * - {@link propagate}: Call a route and return full HTTP response (including
 *   non-2xx)
 *
 * @author Jeongho Nam - https://github.com/samchon
 *
 * @evidence contracts/common.md#principled-implementation The namespace converts any supported OpenAPI version into the migrated route application and runs its routes, by upgrading the document through OpenApiConverter before composing.
 * @evidence contracts/common.md#clear-and-simple-design One composer and two fetchers with one request type, each delegating to an internal owner.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts It uses the same fetcher as HttpLlm, so there is one request implementation.
 * @evidence contracts/common.md#meaningful-documentation The comment contrasts it with HttpLlm, lists the main functions and now includes version 3.2.
 */
export namespace HttpMigration {
  /**
   * Convert OpenAPI document to migration application.
   *
   * @param document OpenAPI document (any version)
   *
   * @returns Migration application with callable routes
   *
   * @evidence contracts/common.md#principled-implementation The document is upgraded to the emended form and then composed into routes, which makes the route list independent of the input version.
   * @evidence contracts/common.md#clear-and-simple-design A two-step delegation.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The conversion is the supported upgrade path, and not a per-version patch.
   * @evidence contracts/common.md#meaningful-documentation The doc names the accepted versions and the result.
   */
  export const application = (
    document:
      | OpenApi.IDocument
      | SwaggerV2.IDocument
      | OpenApiV3.IDocument
      | OpenApiV3_1.IDocument
      | OpenApiV3_2.IDocument,
  ): IHttpMigrateApplication =>
    HttpMigrateApplicationComposer.compose(
      OpenApiConverter.upgradeDocument(document),
    );

  /**
   * Execute HTTP route.
   *
   * @param props Fetch properties
   *
   * @returns Response body
   *
   * @throws HttpError on non-2xx status
   *
   * @evidence contracts/common.md#principled-implementation The call delegates to the route fetcher, which sends the request and throws HttpError for a non-2xx response.
   * @evidence contracts/common.md#clear-and-simple-design A one-line delegation.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts It adds no behavior beyond the fetcher.
   * @evidence contracts/common.md#meaningful-documentation The doc states the body, the thrown error and the parameter.
   */
  export const execute = (props: IFetchProps): Promise<unknown> =>
    HttpMigrateRouteFetcher.execute(props);

  /**
   * Execute HTTP route and return full response.
   *
   * @param props Fetch properties
   *
   * @returns Full HTTP response including non-2xx
   *
   * @evidence contracts/common.md#principled-implementation The call delegates to the route fetcher and returns the whole response without throwing on a status.
   * @evidence contracts/common.md#clear-and-simple-design A one-line delegation.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts It adds no behavior beyond the fetcher.
   * @evidence contracts/common.md#meaningful-documentation The doc states the full response and the parameter.
   */
  export const propagate = (props: IFetchProps): Promise<IHttpResponse> =>
    HttpMigrateRouteFetcher.propagate(props);

  /**
   * Properties for HTTP route execution.
   *
   * @evidence contracts/common.md#principled-implementation The record supplies the connection, the route, path parameters by position or by key, and optional query, headers, cookies and body, so the fetcher can check the arguments against the route's groups.
   * @evidence contracts/common.md#clear-and-simple-design Seven fields; the groups are separate because the route describes them separately.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record that does not validate; validation is done by the fetcher.
   * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment, with headers and cookies described as the route's declared groups.
   */
  export interface IFetchProps {
    /** HTTP connection info. */
    connection: IHttpConnection;

    /** Route to execute. */
    route: IHttpMigrateRoute;

    /** Path parameters. */
    parameters:
      | HttpMigration.ParameterValue[]
      | Record<string, HttpMigration.ParameterValue>;

    /** Query parameters. */
    query?: unknown;

    /** Request headers declared by the route. */
    headers?: object | undefined;

    /** Request cookies declared by the route. */
    cookies?: object | undefined;

    /** Request body. */
    body?: unknown;
  }

  /**
   * OpenAPI path parameter value.
   *
   * @evidence contracts/common.md#principled-implementation A path parameter value is a scalar, null, an array of scalars or a record of scalars, which are the forms the OpenAPI path styles can serialize.
   * @evidence contracts/common.md#clear-and-simple-design One union.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A type declaration only.
   * @evidence contracts/common.md#meaningful-documentation The one-line comment names it as an OpenAPI path parameter value.
   */
  export type ParameterValue =
    | string
    | number
    | boolean
    | bigint
    | null
    | Array<string | number | boolean | bigint | null>
    | Record<string, string | number | boolean | bigint | null>;
}
