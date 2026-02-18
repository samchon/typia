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

export namespace HttpMigration {
  export const application = (
    document:
      | OpenApi.IDocument
      | SwaggerV2.IDocument
      | OpenApiV3.IDocument
      | OpenApiV3_1.IDocument,
  ): IHttpMigrateApplication =>
    HttpMigrateApplicationComposer.compose(OpenApiConverter.upgrade(document));

  export const execute = (props: IFetchProps): Promise<unknown> =>
    HttpMigrateRouteFetcher.execute(props);

  export const propagate = (props: IFetchProps): Promise<IHttpResponse> =>
    HttpMigrateRouteFetcher.propagate(props);

  export interface IFetchProps {
    connection: IHttpConnection;
    route: IHttpMigrateRoute;
    parameters:
      | Array<string | number | boolean | bigint | null>
      | Record<string, string | number | boolean | bigint | null>;
    query?: object | undefined;
    body?: object | undefined;
  }
}
