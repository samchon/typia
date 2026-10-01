import { IHttpMigrateRoute } from "@typia/interface";

import { MapUtil } from "../../utils/MapUtil";
import { NamingConvention } from "../../utils/NamingConvention";
import { EndpointUtil } from "../../utils/internal/EndpointUtil";

/**
 * Assigns the accessor, parameter keys and argument names of migrated routes.
 *
 * Names are derived from the static path segments and settled in path order, so
 * a route keeps the plain name when another route derives the same one.
 *
 * @evidence contracts/common.md#principled-implementation Static path segments become a namespace and each route a method-like alias, with aliases escaped against siblings in path order so the first route keeps the plain alias, parameter keys escaped against each other and the reserved `connection` argument, and any accessor that is a prefix of another escaped, which keeps every route callable.
 * @evidence contracts/common.md#clear-and-simple-design One exported overwrite function with private collection and naming helpers; MapUtil.take lazily creates namespace entries, and that helper stays as ordinary shared code because its own declaration is not a selectable host.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The rules are structural and carry no route names; `x-samchon-accessor` is honored only when it is unambiguous.
 * @evidence contracts/common.md#meaningful-documentation A namespace comment and function doc were added that state the alias settling, the key escaping and the prefix rule.
 */
export namespace HttpMigrateRouteAccessor {
  /**
   * Overwrite the placeholder accessor and the parameter keys of every route.
   *
   * Routes are grouped by namespace, an alias is escaped against its siblings,
   * and an `x-samchon-accessor` is honored only when exactly one route declares
   * it. A route whose accessor would also be a namespace of another route gets
   * an underscore prefix on the clashing segment. The routes are modified in
   * place.
   *
   * @param routes Routes whose accessors are still the lazy placeholder
   *
   * @evidence contracts/common.md#principled-implementation It groups routes by namespace, settles aliases in path order, escapes parameter keys against one another and `connection`, applies an unambiguous custom accessor and then prefixes accessors that would be both a namespace and a function. The final prefix check is repeated per route and scans all routes, which is quadratic in the number of routes.
   * @evidence contracts/common.md#clear-and-simple-design One function using small private helpers for grouping, names and predefined accessors.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Collision handling is by escaping and not by dropping routes.
   * @evidence contracts/common.md#meaningful-documentation The doc states the order dependency, the custom accessor rule and the in-place change.
   */
  export const overwrite = (routes: IHttpMigrateRoute[]): void => {
    const predefined: Map<string, number> = getPredefinedAccessors(routes);
    const dict: Map<string, IElement> = collect((op) =>
      op.path
        .split("/")
        .map((str) => ({
          original: str,
          static: str.replace(/\{[^{}]+\}/g, ""),
        }))
        .filter(
          (str) =>
            str.static.length !== 0 &&
            (str.original === str.static || /[a-zA-Z0-9_$]/.test(str.static)),
        )
        .map((str) => str.static)
        .map(EndpointUtil.normalize)
        .map((str) => (NamingConvention.variable(str) ? str : `_${str}`)),
    )(routes) as Map<string, IElement>;

    for (const props of dict.values()) {
      // Settle one namespace's aliases in path order, the order component
      // names are settled in (#2451): the first keeps its plain alias, and
      // each later duplicate is escaped against those settled before it. The
      // sort is stable, so a path operation precedes a webhook sharing its key.
      // Escaping every entry against every other left the plain alias to the
      // last in document order, so a webhook added after a path took the path
      // operation's accessor and function name (#2455).
      const settled: string[] = [];
      for (const entry of [...props.entries].sort((x, y) =>
        x.route.path < y.route.path ? -1 : x.route.path > y.route.path ? 1 : 0,
      )) {
        entry.alias = EndpointUtil.escapeDuplicate(
          [...props.children, ...settled].map(EndpointUtil.normalize),
        )(EndpointUtil.normalize(entry.alias));
        settled.push(entry.alias);

        const parameters: { name: string; key: string }[] = [
          ...entry.route.parameters,
          ...(entry.route.body ? [entry.route.body] : []),
          ...(entry.route.headers ? [entry.route.headers] : []),
          ...(entry.route.cookies ? [entry.route.cookies] : []),
          ...(entry.route.query ? [entry.route.query] : []),
        ];
        parameters.forEach(
          (p, i) =>
            (p.key = EndpointUtil.escapeDuplicate([
              "connection",
              entry.alias,
              ...parameters.filter((_, j) => i !== j).map((y) => y.key),
            ])(p.key)),
        );

        const accessor: string[] | undefined =
          entry.route.operation()["x-samchon-accessor"];
        if (accessor !== undefined && predefined.get(accessor.join(".")) === 1)
          entry.route.accessor = accessor;
        else entry.route.accessor = [...props.namespace, entry.alias];
      }
    }

    for (const x of routes) {
      while (true) {
        const neighbor: IHttpMigrateRoute | undefined = routes.find(
          (y) =>
            y.accessor.length < x.accessor.length &&
            x.accessor
              .slice(0, y.accessor.length)
              .every((v, i) => v === y.accessor[i]),
        );
        if (neighbor === undefined) break;
        x.accessor[neighbor.accessor.length - 1] =
          `_${x.accessor[neighbor.accessor.length - 1]}`;
      }
    }
  };

  const collect =
    (getter: (r: IHttpMigrateRoute) => string[]) =>
    (routes: IHttpMigrateRoute[]): Map<string, IElement> => {
      const dict: Map<string, IElement> = new Map();
      for (const r of routes) {
        const namespace: string[] = getter(r);
        let last: IElement = MapUtil.take(dict, namespace.join("."), () => ({
          namespace,
          children: new Set(),
          entries: [],
        }));
        last.entries.push({
          route: r,
          alias: getName(r),
        });
        namespace.slice(0, -1).forEach((_i, i, array) => {
          const partial: string[] = namespace.slice(0, array.length - i);
          const element: IElement = MapUtil.take(
            dict,
            partial.join("."),
            () => ({
              namespace: partial,
              children: new Set(),
              entries: [],
            }),
          );
          element.children.add(last.namespace.at(-1)!);
        });
        const top: IElement = MapUtil.take(dict, "", () => ({
          namespace: [],
          children: new Set(),
          entries: [],
        }));
        if (namespace.length) top.children.add(namespace[0]!);
      }
      return dict;
    };

  const getName = (op: IHttpMigrateRoute): string => {
    const method = op.method === "delete" ? "erase" : op.method;
    if (op.parameters.length === 0) return method;
    return (
      method +
      "By" +
      op.parameters.map((p) => EndpointUtil.capitalize(p.key)).join("And")
    );
  };

  const getPredefinedAccessors = (
    routes: IHttpMigrateRoute[],
  ): Map<string, number> => {
    const dict: Map<string, number> = new Map();
    for (const r of routes) {
      const accessor = r.operation()["x-samchon-accessor"]?.join(".");
      if (accessor === undefined) continue;
      else if (dict.has(accessor)) dict.set(accessor, dict.get(accessor)! + 1);
      else dict.set(accessor, 1);
    }
    return dict;
  };

  interface IElement {
    namespace: string[];
    entries: IEntry[];
    children: Set<string>;
  }
  interface IEntry {
    route: IHttpMigrateRoute;
    alias: string;
  }
}
