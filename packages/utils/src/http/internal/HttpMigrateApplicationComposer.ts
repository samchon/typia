import {
  IHttpMigrateApplication,
  IHttpMigrateRoute,
  OpenApi,
} from "@typia/interface";

import { EndpointUtil } from "../../utils/internal/EndpointUtil";
import { HttpMigrateRouteAccessor } from "./HttpMigrateRouteAccessor";
import { HttpMigrateRouteComposer } from "./HttpMigrateRouteComposer";

/**
 * Composes {@link IHttpMigrateApplication} from an emended OpenAPI document.
 *
 * Every path and webhook operation becomes a route or a failure record, and the
 * accessors of the successful routes are assigned together once all routes are
 * known.
 *
 * @evidence contracts/common.md#principled-implementation Operations from paths and webhooks are listed together without merging by key, composed in path and method order and reported in document order, then the accessors are assigned over all successful routes; this ordering keeps schema and accessor name ownership independent of how the document was sorted.
 * @evidence contracts/common.md#clear-and-simple-design A single exported compose function with a method table and entry comparator; accessor naming is delegated to HttpMigrateRouteAccessor.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Ordering follows a stated rule with issue references and not an arrangement chosen to match a test document.
 * @evidence contracts/common.md#meaningful-documentation The namespace comment and function doc state the contract, and inline comments explain the webhook handling and the ordering.
 */
export namespace HttpMigrateApplicationComposer {
  /**
   * Migrate every operation of the document.
   *
   * Routes are composed in path and method order so that name collisions are
   * settled independently of the order of `paths`, and are reported in document
   * order. The document is modified: route composition sanitizes schemas and
   * emplaces component schemas, and a failed route leaves no component behind.
   *
   * @param document Emended OpenAPI document
   *
   * @returns Routes, per-operation errors and an accessor to the document
   *
   * @evidence contracts/common.md#principled-implementation Entries are flattened from paths and webhooks, composed in sorted order into route or message-list results and then split into routes and errors; the sort is stable so a path operation precedes a webhook with the same key and method. It modifies the supplied document through the route composer.
   * @evidence contracts/common.md#clear-and-simple-design One function with a private entry type, a method order table and a comparator.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The method order table is the supported method set, not a special case.
   * @evidence contracts/common.md#meaningful-documentation The doc states the ordering, the document modification and the result shape.
   */
  export const compose = (
    document: OpenApi.IDocument,
  ): IHttpMigrateApplication => {
    // Webhooks are migrated next to paths, not merged into them by key: a
    // webhook named like a path used to replace that whole path item, so its
    // operations vanished without a route or an error (#2455).
    const entries: IEntry[] = [document.paths, document.webhooks].flatMap(
      (collections) =>
        Object.entries(collections ?? {}).flatMap(([path, collection]) =>
          METHODS.filter((method) => collection[method] !== undefined).map(
            (method) => ({ path, method, operation: collection[method]! }),
          ),
        ),
    );

    // Compose in path and method order, not document order: a route that
    // emplaces a schema under a name another route also derives takes the
    // name by this order (#2451), so which route owns it must not change when
    // a tool re-sorts `paths`. The sort is stable, so a path operation still
    // precedes a webhook sharing its key and method. The routes are reported
    // in document order.
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
