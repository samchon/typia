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
 * Converts OpenAPI documents to callable HTTP routes and executes them.
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
