import { IHttpMigrateRoute } from "../structures/IHttpMigrateRoute";
import { EndpointUtil } from "../utils/EndpointUtil";
import { Escaper } from "../utils/Escaper";
import { MapUtil } from "../utils/MapUtil";

export namespace HttpMigrateRouteAccessor {
  export const overwrite = (routes: IHttpMigrateRoute[]): void => {
    const predefined: Map<string, number> = getPredefinedAccessors(routes);
    const dict: Map<string, IElement> = collect((op) =>
      op.emendedPath
        .split("/")
        .filter((str) => !!str.length && str[0] !== ":")
        .map(EndpointUtil.normalize)
        .map((str) => (Escaper.variable(str) ? str : `_${str}`)),
    )(routes) as Map<string, IElement>;

    for (const props of dict.values())
      props.entries.forEach((entry, i) => {
        entry.alias = EndpointUtil.escapeDuplicate(
          [
            ...props.children,
            ...props.entries.filter((_, j) => i !== j).map((e) => e.alias),
          ].map(EndpointUtil.normalize),
        )(EndpointUtil.normalize(entry.alias));

        const parameters: { name: string; key: string }[] = [
          ...entry.route.parameters,
          ...(entry.route.body ? [entry.route.body] : []),
          ...(entry.route.headers ? [entry.route.headers] : []),
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
      });

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
        let last: IElement = MapUtil.take(dict)(namespace.join("."))(() => ({
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
          const element: IElement = MapUtil.take(dict)(partial.join("."))(
            () => ({
              namespace: partial,
              children: new Set(),
              entries: [],
            }),
          );
          element.children.add(last.namespace.at(-1)!);
        });
        const top = MapUtil.take(dict)("")(() => ({
          namespace: [],
          children: new Set(),
          entries: [],
        }));
        if (namespace.length) top.children.add(namespace[0]);
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
