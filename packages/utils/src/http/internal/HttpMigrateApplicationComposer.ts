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
    const entries: IEntry[] = Object.entries({
      ...(document.paths ?? {}),
      ...(document.webhooks ?? {}),
    }).flatMap(([path, collection]) =>
      METHODS.filter((method) => collection[method] !== undefined).map(
        (method) => ({ path, method, operation: collection[method]! }),
      ),
    );

    // Compose in path and method order, not document order: a route that
    // emplaces a schema under a name another route also derives takes the
    // name by this order (#2451), so which route owns it must not change when
    // a tool re-sorts `paths`. The routes are still reported in document order.
    const migrated: Array<IHttpMigrateRoute | string[]> = new Array(
      entries.length,
    );
    for (const index of entries
      .map((_, i) => i)
      .sort((x, y) => compareEntry(entries[x]!, entries[y]!)))
      migrated[index] = HttpMigrateRouteComposer.compose({
        document,
        method: entries[index]!.method,
        path: entries[index]!.path,
        emendedPath: EndpointUtil.reJoinWithDecimalParameters(
          entries[index]!.path,
        ),
        operation: entries[index]!.operation,
      });

    const errors: IHttpMigrateApplication.IError[] = [];
    const operations: IHttpMigrateRoute[] = [];
    entries.forEach((entry, i) => {
      const route: IHttpMigrateRoute | string[] = migrated[i]!;
      if (Array.isArray(route))
        errors.push({
          method: entry.method,
          path: entry.path,
          operation: () => entry.operation,
          messages: route,
        });
      else operations.push(route);
    });
    HttpMigrateRouteAccessor.overwrite(operations);
    return {
      document: () => document,
      routes: operations,
      errors,
    } satisfies IHttpMigrateApplication as IHttpMigrateApplication;
  };

  const METHODS = [
    "head",
    "get",
    "post",
    "put",
    "patch",
    "delete",
    "query",
  ] as const;

  interface IEntry {
    path: string;
    method: (typeof METHODS)[number];
    operation: OpenApi.IOperation;
  }

  const compareEntry = (x: IEntry, y: IEntry): number =>
    x.path < y.path
      ? -1
      : x.path > y.path
        ? 1
        : METHODS.indexOf(x.method) - METHODS.indexOf(y.method);
}
