import {
  IHttpConnection,
  IHttpMigrateApplication,
  IHttpMigrateRoute,
  IHttpResponse,
  OpenApi,
  OpenApiV3,
  OpenApiV3_1,
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
 * Supports all OpenAPI versions (Swagger 2.0, OpenAPI 3.0, 3.1) through
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
 */
export namespace HttpMigration {
  /**
   * Convert OpenAPI document to migration application.
   *
   * @param document OpenAPI document (any version)
   * @returns Migration application with callable routes
   */
  export const application = (
    document:
      | OpenApi.IDocument
      | SwaggerV2.IDocument
      | OpenApiV3.IDocument
      | OpenApiV3_1.IDocument,
  ): IHttpMigrateApplication =>
    HttpMigrateApplicationComposer.compose(
      OpenApiConverter.upgradeDocument(document),
    );

  /**
   * Execute HTTP route.
   *
   * @param props Fetch properties
   * @returns Response body
   * @throws HttpError on non-2xx status
   */
  export const execute = (props: IFetchProps): Promise<unknown> =>
    HttpMigrateRouteFetcher.execute(props);

  /**
   * Execute HTTP route and return full response.
   *
   * @param props Fetch properties
   * @returns Full HTTP response including non-2xx
   */
  export const propagate = (props: IFetchProps): Promise<IHttpResponse> =>
    HttpMigrateRouteFetcher.propagate(props);

  /** Properties for HTTP route execution. */
  export interface IFetchProps {
    /** HTTP connection info. */
    connection: IHttpConnection;

    /** Route to execute. */
    route: IHttpMigrateRoute;

    /** Path parameters. */
    parameters:
      | Array<string | number | boolean | bigint | null>
      | Record<string, string | number | boolean | bigint | null>;

    /** Query parameters. */
    query?: object | undefined;

    /** Request body. */
    body?: object | undefined;
  }
}
