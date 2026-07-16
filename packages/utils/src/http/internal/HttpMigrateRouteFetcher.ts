import {
  IHttpMigrateRoute,
  IHttpResponse,
} from "@typia/interface";

import { HttpError } from "../HttpError";
import type { HttpMigration } from "../HttpMigration";

export namespace HttpMigrateRouteFetcher {
  export const execute = async (
    props: HttpMigration.IFetchProps,
  ): Promise<unknown> => {
    const result: IHttpResponse = await propagateRequest("request", props);
    if (result.status < 200 || result.status >= 300)
      throw new HttpError(
        props.route.method.toUpperCase() as "GET",
        props.route.path,
        result.status,
        result.headers,
        result.body,
      );
    return result.body;
  };

  export const propagate = (
    props: HttpMigration.IFetchProps,
  ): Promise<IHttpResponse> => propagateRequest("propagate", props);
}

const propagateRequest = async (
  from: string,
  props: HttpMigration.IFetchProps,
): Promise<IHttpResponse> => {
  const error = (message: string) =>
    new Error(`Error on MigrateRouteFetcher.${from}(): ${message}`);
  if (Array.isArray(props.parameters)) {
    if (props.route.parameters.length !== props.parameters.length)
      throw error(`number of parameters is not matched.`);
  } else {
    const parameters = props.parameters;
    if (
      props.route.parameters.every(
        (parameter) => parameters[parameter.key] !== undefined,
      ) === false
    )
      throw error(`number of parameters is not matched.`);
  }

  validateGroup(error)("headers", props.route.headers, props.headers);
  validateGroup(error)("cookies", props.route.cookies, props.cookies);
  validateGroup(error)("query", props.route.query, props.query);
  validateGroup(error)("body", props.route.body, props.body);

  const headers: Headers = requestHeaders(error)(props);
  const init: RequestInit = {
    ...(props.connection.options ?? {}),
    method: props.route.method.toUpperCase(),
    headers,
  };
  if (props.body !== undefined)
    init.body = (
      props.route.body?.type === "application/x-www-form-urlencoded"
        ? requestQueryBody(props.body)
        : props.route.body?.type === "multipart/form-data"
          ? requestFormDataBody(props.body as Record<string, any>)
          : props.route.body?.type === "application/json"
            ? JSON.stringify(props.body)
            : props.body
    ) as BodyInit;

  const path: string = getPath(error, props);
  const host: string = props.connection.host;
  const joined: string =
    host.endsWith("/") && path.startsWith("/")
      ? host + path.substring(1)
      : !host.endsWith("/") && !path.startsWith("/")
        ? `${host}/${path}`
        : host + path;
  const response: Response = await (props.connection.fetch ?? fetch)(
    new URL(joined),
    init,
  );
  const out = (body: unknown): IHttpResponse => ({
    status: response.status,
    headers: responseHeaders(response.headers),
    body,
  });

  if (response.status >= 200 && response.status < 300) {
    if (
      props.route.method === "head" ||
      response.status === 204 ||
      response.status === 205
    )
      return out(undefined);
    return out(
      await parseResponseBody(
        response,
        contentType(response.headers) ||
          props.route.success?.type ||
          "text/plain",
      ),
    );
  }
  const type: string = contentType(response.headers);
  return out(await parseResponseBody(response, type));
};

const validateGroup =
  (error: (message: string) => Error) =>
  (
    name: string,
    metadata:
      | IHttpMigrateRoute.IHeaders
      | IHttpMigrateRoute.IQuery
      | IHttpMigrateRoute.ICookies
      | IHttpMigrateRoute.IBody
      | null,
    input: object | undefined,
  ): void => {
    if (metadata === null) {
      if (input !== undefined) throw error(`${name} is not matched.`);
      return;
    }
    if (metadata.required && input === undefined)
      throw error(`${name} is not matched.`);
    if (
      input !== undefined &&
      (typeof input !== "object" || input === null || Array.isArray(input))
    )
      throw error(`${name} must be an object.`);
  };

const requestHeaders =
  (error: (message: string) => Error) =>
  (props: HttpMigration.IFetchProps): Headers => {
    const output = new Headers();
    for (const [key, value] of Object.entries(props.connection.headers ?? {}))
      if (value === undefined) continue;
      else if (Array.isArray(value))
        value.forEach((elem) => output.append(key, String(elem)));
      else output.append(key, String(value));

    if (props.route.headers && props.headers)
      for (const metadata of props.route.headers.parameters) {
        const value = parameterValue(metadata, props.headers);
        if (value === undefined) {
          if (metadata.parameter().required)
            throw error(`header ${JSON.stringify(metadata.name)} is required.`);
          continue;
        }
        output.set(metadata.name, serializeSimple(value, metadata.explode));
      }

    if (props.route.cookies && props.cookies) {
      const supplied = props.route.cookies.parameters.flatMap((metadata) => {
        const value = parameterValue(metadata, props.cookies!);
        if (value === undefined) {
          if (metadata.parameter().required)
            throw error(`cookie ${JSON.stringify(metadata.name)} is required.`);
          return [];
        }
        return serializeCookie(metadata.name, value, metadata.explode);
      });
      if (supplied.length !== 0) {
        const replaced = new Set(supplied.map(([name]) => name));
        const inherited = (output.get("cookie") ?? "")
          .split(";")
          .map((part) => part.trim())
          .filter((part) => part.length !== 0)
          .filter((part) => !replaced.has(part.split("=", 1)[0]!));
        output.set(
          "Cookie",
          [...inherited, ...supplied.map(([name, value]) => `${name}=${value}`)]
            .filter((part) => part.length !== 0)
            .join("; "),
        );
      }
    }

    if (
      props.body !== undefined &&
      props.route.body?.type &&
      props.route.body.type !== "multipart/form-data"
    )
      output.set("Content-Type", props.route.body.type);
    return output;
  };

const getPath = (
  error: (message: string) => Error,
  props: Pick<HttpMigration.IFetchProps, "route" | "parameters" | "query">,
): string => {
  const byName = new Map(
    props.route.parameters.map((parameter, index) => [
      parameter.name,
      {
        parameter,
        value: Array.isArray(props.parameters)
          ? props.parameters[index]
          : props.parameters[parameter.key],
      },
    ]),
  );
  let path: string = props.route.emendedPath
    .split("/")
    .map((segment) => {
      if (!segment.startsWith(":")) return segment;
      const found = byName.get(segment.substring(1));
      return found === undefined
        ? segment
        : serializePath(found.parameter, found.value);
    })
    .join("/");
  if (props.route.query && props.query)
    path += getQueryPath(error, props.route.query, props.query);
  return path;
};

const getQueryPath = (
  error: (message: string) => Error,
  route: IHttpMigrateRoute.IQuery,
  query: object,
): string => {
  const variables = new URLSearchParams();
  for (const metadata of route.parameters) {
    const value = parameterValue(metadata, query);
    if (value === undefined) {
      if (metadata.parameter().required)
        throw error(`query ${JSON.stringify(metadata.name)} is required.`);
      continue;
    }
    for (const [key, elem] of serializeQuery(metadata, value))
      variables.append(key, elem);
  }
  return variables.size === 0 ? "" : `?${variables.toString()}`;
};

const parameterValue = (
  metadata: IHttpMigrateRoute.ISerialization,
  input: object,
): unknown => {
  const record = input as Record<string, unknown>;
  if (metadata.key !== null) return record[metadata.key];
  const entries = (metadata.properties ?? [])
    .filter((key) => record[key] !== undefined)
    .map((key) => [key, record[key]] as const);
  return entries.length !== 0 || (metadata.properties?.length ?? 0) === 0
    ? Object.fromEntries(entries)
    : undefined;
};

const serializeQuery = (
  metadata: IHttpMigrateRoute.ISerialization,
  value: unknown,
): [string, string][] => {
  if (metadata.style === "deepObject")
    return objectEntries(value).map(([key, elem]) => [
      `${metadata.name}[${key}]`,
      String(elem),
    ]);
  if (
    metadata.style === "spaceDelimited" ||
    metadata.style === "pipeDelimited"
  )
    return [
      [
        metadata.name,
        arrayValues(value)
          .map(String)
          .join(metadata.style === "spaceDelimited" ? " " : "|"),
      ],
    ];
  if (Array.isArray(value))
    return metadata.explode
      ? value.map((elem) => [metadata.name, String(elem)])
      : [[metadata.name, value.map(String).join(",")]];
  if (isRecord(value)) {
    const entries = objectEntries(value);
    return metadata.explode
      ? entries.map(([key, elem]) => [key, String(elem)])
      : [
          [
            metadata.name,
            entries.flatMap(([key, elem]) => [key, String(elem)]).join(","),
          ],
        ];
  }
  return [[metadata.name, String(value)]];
};

const serializePath = (
  metadata: IHttpMigrateRoute.IParameter,
  value: unknown,
): string => {
  const encode = (input: unknown): string => encodeURIComponent(String(input));
  const array = Array.isArray(value) ? value.map(encode) : null;
  const object = isRecord(value)
    ? objectEntries(value).map(([key, elem]) => [encode(key), encode(elem)])
    : null;
  if (metadata.style === "matrix") {
    if (array)
      return metadata.explode
        ? array.map((elem) => `;${metadata.name}=${elem}`).join("")
        : `;${metadata.name}=${array.join(",")}`;
    if (object)
      return metadata.explode
        ? object.map(([key, elem]) => `;${key}=${elem}`).join("")
        : `;${metadata.name}=${object.flat().join(",")}`;
    return `;${metadata.name}=${encode(value)}`;
  }
  if (metadata.style === "label") {
    if (array) return `.${array.join(metadata.explode ? "." : ",")}`;
    if (object)
      return `.${
        metadata.explode
          ? object.map(([key, elem]) => `${key}=${elem}`).join(".")
          : object.flat().join(",")
      }`;
    return `.${encode(value)}`;
  }
  if (array) return array.join(",");
  if (object)
    return metadata.explode
      ? object.map(([key, elem]) => `${key}=${elem}`).join(",")
      : object.flat().join(",");
  return encode(value);
};

const serializeSimple = (value: unknown, explode: boolean): string => {
  if (Array.isArray(value)) return value.map(String).join(",");
  if (isRecord(value)) {
    const entries = objectEntries(value);
    return explode
      ? entries.map(([key, elem]) => `${key}=${String(elem)}`).join(",")
      : entries.flatMap(([key, elem]) => [key, String(elem)]).join(",");
  }
  return String(value);
};

const serializeCookie = (
  name: string,
  value: unknown,
  explode: boolean,
): [string, string][] => {
  const encode = (input: unknown): string => encodeURIComponent(String(input));
  if (Array.isArray(value))
    return explode
      ? value.map((elem) => [name, encode(elem)])
      : [[name, value.map(encode).join(",")]];
  if (isRecord(value)) {
    const entries = objectEntries(value);
    return explode
      ? entries.map(([key, elem]) => [key, encode(elem)])
      : [
          [
            name,
            entries.flatMap(([key, elem]) => [key, encode(elem)]).join(","),
          ],
        ];
  }
  return [[name, encode(value)]];
};

const requestQueryBody = (input: object): URLSearchParams => {
  const output = new URLSearchParams();
  for (const [key, value] of Object.entries(input))
    if (value === undefined) continue;
    else if (Array.isArray(value))
      value.forEach((elem) => output.append(key, String(elem)));
    else output.set(key, String(value));
  return output;
};

const requestFormDataBody = (input: Record<string, any>): FormData => {
  const output = new FormData();
  const append = (key: string) => (value: any) => {
    if (value === undefined) return;
    if (typeof File === "function" && value instanceof File)
      output.append(key, value, value.name);
    else output.append(key, value);
  };
  for (const [key, value] of Object.entries(input))
    if (Array.isArray(value)) value.forEach(append(key));
    else append(key)(value);
  return output;
};

const contentType = (headers: Headers): string =>
  (headers.get("content-type") ?? "").split(";", 1)[0]!.trim().toLowerCase();

const parseResponseBody = async (
  response: Response,
  type: string,
): Promise<unknown> => {
  if (type === "application/json" || type.endsWith("+json")) {
    const text: string = await response.text();
    return text.length === 0 ? undefined : JSON.parse(text);
  }
  if (type === "application/x-www-form-urlencoded")
    return new URLSearchParams(await response.text());
  if (type === "multipart/form-data") return response.formData();
  if (type === "application/octet-stream") return response.blob();
  return response.text();
};

const responseHeaders = (
  headers: Headers,
): Record<string, string | string[]> => {
  const output: Record<string, string | string[]> = {};
  headers.forEach((value, key) => {
    if (key !== "set-cookie") output[key] = value;
  });
  const getter = (
    headers as Headers & {
      getSetCookie?: () => string[];
    }
  ).getSetCookie;
  const cookies: string[] =
    typeof getter === "function"
      ? getter.call(headers)
      : headers.get("set-cookie") !== null
        ? [headers.get("set-cookie")!]
        : [];
  if (cookies.length !== 0) output["set-cookie"] = cookies;
  return output;
};

const arrayValues = (value: unknown): unknown[] =>
  Array.isArray(value) ? value : [value];

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const objectEntries = (value: unknown): [string, unknown][] =>
  isRecord(value)
    ? Object.entries(value).filter((entry) => entry[1] !== undefined)
    : [];
