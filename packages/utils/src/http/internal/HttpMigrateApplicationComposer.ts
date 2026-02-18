import {
  IHttpMigrateApplication,
  IHttpMigrateRoute,
  OpenApi,
} from "@typia/interface";

import { EndpointUtil } from "../../utils/internal/EndpointUtil";
import { HttpMigrateRouteAccessor } from "./HttpMigrateRouteAccessor";
import { HttpMigrateRouteComposer } from "./HttpMigrateRouteComposer";

export namespace HttpMigrateApplicationComposer {
  export const compose = (
    document: OpenApi.IDocument,
  ): IHttpMigrateApplication => {
    const errors: IHttpMigrateApplication.IError[] = [];
    const entire: Array<IHttpMigrateRoute | null> = Object.entries({
      ...(document.paths ?? {}),
      ...(document.webhooks ?? {}),
    })
      .map(([path, collection]) =>
        (["head", "get", "post", "put", "patch", "delete"] as const)
          .filter((method) => collection[method] !== undefined)
          .map((method) => {
            const operation: OpenApi.IOperation = collection[method]!;
            const migrated: IHttpMigrateRoute | string[] =
              HttpMigrateRouteComposer.compose({
                document,
                method,
                path,
                emendedPath: EndpointUtil.reJoinWithDecimalParameters(path),
                operation,
              });
            if (Array.isArray(migrated)) {
              errors.push({
                method,
                path,
                operation: () => operation,
                messages: migrated,
              });
              return null;
            }
            return migrated;
          }),
      )
      .flat();
    const operations: IHttpMigrateRoute[] = entire.filter(
      (o): o is IHttpMigrateRoute => !!o,
    );
    HttpMigrateRouteAccessor.overwrite(operations);
    return {
      document: () => document,
      routes: operations,
      errors,
    } satisfies IHttpMigrateApplication as IHttpMigrateApplication;
  };
}
