import { IHttpMigrateRoute, IHttpResponse } from "@typia/interface";

import { HttpError } from "../HttpError";
import type { HttpMigration } from "../HttpMigration";

/**
 * Performs the HTTP request that a migrated route describes.
 *
 * The caller's arguments are checked against the route, serialized by the
 * OpenAPI style rules of each parameter group, and sent through the
 * connection's `fetch` or the global one.
 *
 * @evidence contracts/common.md#principled-implementation The request is built by checking the arguments against the route's groups, serializing path, query, header and cookie values by their OpenAPI style, encoding the body by media type and sending it through the connection's fetch or the global one; the response body is parsed by content type. Non-2xx responses are thrown only by execute.
 * @evidence contracts/common.md#clear-and-simple-design Two exported functions over one private request function; serialization, parsing and encoding helpers are module-level because they are used by the request builder only.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The connection fetch is the supported replacement point, and no global is patched.
 * @evidence contracts/common.md#meaningful-documentation The namespace comment and function docs cover the request, serialization and error contract.
 */
export namespace HttpMigrateRouteFetcher {
  /**
   * Send the request and return the body of a 2xx response.
   *
   * @param props Route, connection and arguments
   *
   * @returns Parsed response body
   *
   * @throws HttpError on a non-2xx status, and Error when the arguments do not
   *   match the route
   *
   * @evidence contracts/common.md#principled-implementation It awaits the propagated response and throws HttpError for any status outside 200 to 299, marking the body as already parsed so the error does not reparse it, and otherwise returns the body.
   * @evidence contracts/common.md#clear-and-simple-design A short function over propagateRequest.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Status handling is only the range check.
   * @evidence contracts/common.md#meaningful-documentation The doc states the body, the thrown errors and the parameter.
   */
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
        true,
      );
    return result.body;
  };

  /**
   * Send the request and return the whole response.
   *
   * @param props Route, connection and arguments
   *
   * @returns Status, headers and parsed body, including non-2xx responses
   *
   * @throws Error when the arguments do not match the route, or when the
   *   connection fails
   *
   * @evidence contracts/common.md#principled-implementation It returns the response of the shared request function without a status check, so every status is data and only argument and connection failures throw.
   * @evidence contracts/common.md#clear-and-simple-design A one-line delegation.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts It adds no behavior beyond the request function.
   * @evidence contracts/common.md#meaningful-documentation The doc states the full response and the thrown errors.
   */
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
  validateGroup(error)("cookies", props.route.cookies ?? null, props.cookies);
  validateGroup(error)(
    "query",
    props.route.query,
    props.query,
    props.route.query?.querystring === undefined,
  );
  validateBody(error)(props.route.body, props.body);

  const headers: Headers = requestHeaders(error)(props);
  const init: RequestInit = {
    ...(props.connection.options ?? {}),
    method: props.route.method.toUpperCase(),
    headers,
  };
  if (props.body !== undefined)
    init.body = (
      props.route.body?.type === "application/x-www-form-urlencoded"
        ? requestQueryBody(props.body as object)
        : props.route.body?.type === "multipart/form-data"
          ? requestFormDataBody(props.body as Record<string, any>)
          : isJsonMediaType(props.route.body?.type)
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
    input: unknown,
    objectOnly: boolean = true,
  ): void => {
    if (metadata === null) {
      if (input !== undefined) throw error(`${name} is not matched.`);
      return;
    }
    if ((metadata.required ?? true) && input === undefined)
      throw error(`${name} is not matched.`);
    if (
      objectOnly &&
      input !== undefined &&
      (typeof input !== "object" || input === null || Array.isArray(input))
    )
      throw error(`${name} must be an object.`);
  };

const validateBody =
  (error: (message: string) => Error) =>
  (metadata: IHttpMigrateRoute.IBody | null, input: unknown): void => {
    if (metadata === null) {
      if (input !== undefined) throw error(`body is not matched.`);
      return;
    }
    if ((metadata.required ?? true) && input === undefined)
      throw error(`body is not matched.`);
    if (
      input !== undefined &&
      (metadata.type === "application/x-www-form-urlencoded" ||
        metadata.type === "multipart/form-data") &&
      (typeof input !== "object" || input === null || Array.isArray(input))
    )
      throw error(`body must be an object for ${metadata.type}.`);
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

    if (props.route.headers && props.headers) {
      const parameters = props.route.headers.parameters;
      if (parameters === undefined) {
        for (const [key, value] of Object.entries(props.headers))
          if (value !== undefined)
            output.set(key, serializeSimple(value, false));
      } else {
        const serializations: IHttpMigrateRoute.ISerialization[] = parameters;
        for (const metadata of serializations) {
          const value = parameterValue(metadata, props.headers, serializations);
          if (value === undefined) {
            if (metadata.parameter().required)
              throw error(
                `header ${JSON.stringify(metadata.name)} is required.`,
              );
            continue;
          }
          output.set(metadata.name, serializeSimple(value, metadata.explode));
        }
      }
    }

    if (props.route.cookies && props.cookies) {
      const parameters = props.route.cookies.parameters;
      const supplied =
        parameters === undefined
          ? Object.entries(props.cookies).flatMap(([name, value]) =>
              value === undefined ? [] : serializeCookie(name, value, true),
            )
          : parameters.flatMap((metadata) => {
              const value = parameterValue(
                metadata,
                props.cookies!,
                parameters,
              );
              if (value === undefined) {
                if (metadata.parameter().required)
                  throw error(
                    `cookie ${JSON.stringify(metadata.name)} is required.`,
                  );
                return [];
              }
              return serializeCookie(
                metadata.name,
                value,
                metadata.explode,
                metadata.style,
              );
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

    if (props.body !== undefined && props.route.body?.type)
      if (props.route.body.type === "multipart/form-data")
        output.delete("Content-Type");
      else output.set("Content-Type", props.route.body.type);
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
  let path: string =
    // Preserve legacy/custom emended static paths, while parameterized paths
    // use source expressions so embedded and repeated names stay unambiguous.
    props.route.parameters.length === 0
      ? props.route.emendedPath
      : props.route.path.replace(
          /\{([^{}]+)\}/g,
          (expression, name: string) => {
            const found = byName.get(name);
            return found === undefined
              ? expression
              : serializePath(found.parameter, found.value);
          },
        );
  if (props.route.query && props.query !== undefined)
    path +=
      props.route.query.querystring !== undefined
        ? getQuerystringPath(error, props.route.query, props.query)
        : getQueryPath(error, props.route.query, props.query as object);
  return path;
};

const getQuerystringPath = (
  error: (message: string) => Error,
  route: IHttpMigrateRoute.IQuery,
  query: unknown,
): string => {
  const type: string = route.querystring!.type;
  let serialized: string;
  if (type === "application/x-www-form-urlencoded") {
    if (!isRecord(query)) throw error(`query must be an object for ${type}.`);
    serialized = requestQueryBody(query).toString();
  } else if (isJsonMediaType(type)) {
    const value: string | undefined = JSON.stringify(query);
    if (value === undefined)
      throw error(`query cannot be serialized as ${type}.`);
    serialized = encodeRfc3986(value);
  } else {
    if (typeof query === "object" && query !== null)
      throw error(`query must be a scalar for ${type}.`);
    serialized = encodeRfc3986(query);
  }
  return serialized.length === 0 ? "" : `?${serialized}`;
};

const getQueryPath = (
  error: (message: string) => Error,
  route: IHttpMigrateRoute.IQuery,
  query: object,
): string => {
  if (route.parameters === undefined) {
    const variables = new URLSearchParams();
    for (const [key, value] of Object.entries(query))
      if (value === undefined) continue;
      else if (Array.isArray(value))
        value.forEach((elem) => variables.append(key, String(elem)));
      else variables.set(key, String(value));
    return variables.size === 0 ? "" : `?${variables.toString()}`;
  }
  const variables: string[] = [];
  for (const metadata of route.parameters) {
    const value = parameterValue(metadata, query, route.parameters);
    if (value === undefined) {
      if (metadata.parameter().required)
        throw error(`query ${JSON.stringify(metadata.name)} is required.`);
      continue;
    }
    variables.push(...serializeQuery(metadata, value));
  }
  return variables.length === 0 ? "" : `?${variables.join("&")}`;
};

const parameterValue = (
  metadata: IHttpMigrateRoute.ISerialization,
  input: object,
  parameters: IHttpMigrateRoute.ISerialization[],
): unknown => {
  const record = input as Record<string, unknown>;
  if (metadata.key !== null) return record[metadata.key];
  const properties = new Set(metadata.properties ?? []);
  const occupied = new Set(
    parameters
      .filter((parameter) => parameter !== metadata)
      .flatMap((parameter) =>
        parameter.key !== null ? [parameter.key] : (parameter.properties ?? []),
      ),
  );
  const entries = Object.entries(record).filter(
    ([key, value]) =>
      value !== undefined &&
      (properties.has(key) ||
        (metadata.additionalProperties === true && !occupied.has(key))),
  );
  return entries.length !== 0 ||
    (metadata.properties?.length ?? 0) === 0 ||
    (metadata.parameter().required === true &&
      metadata.requiredProperties?.length === 0)
    ? Object.fromEntries(entries)
    : undefined;
};

const serializeQuery = (
  metadata: IHttpMigrateRoute.ISerialization,
  value: unknown,
): string[] => {
  const encode = encodeRfc3986;
  const name: string = encode(metadata.name);
  const pair = (key: unknown, elem: unknown): string =>
    `${encode(key)}=${encode(elem)}`;
  if (metadata.style === "deepObject")
    return objectEntries(value).map(
      ([key, elem]) => `${name}%5B${encode(key)}%5D=${encode(elem)}`,
    );
  if (
    metadata.style === "spaceDelimited" ||
    metadata.style === "pipeDelimited"
  ) {
    const delimiter = metadata.style === "spaceDelimited" ? "%20" : "%7C";
    return [
      `${name}=${
        isRecord(value)
          ? objectEntries(value)
              .flatMap(([key, elem]) => [encode(key), encode(elem)])
              .join(delimiter)
          : arrayValues(value).map(encode).join(delimiter)
      }`,
    ];
  }
  if (Array.isArray(value))
    return metadata.explode
      ? value.map((elem) => `${name}=${encode(elem)}`)
      : [`${name}=${value.map(encode).join(",")}`];
  if (isRecord(value)) {
    const entries = objectEntries(value);
    return metadata.explode
      ? entries.map(([key, elem]) => pair(key, elem))
      : [
          `${name}=${entries
            .flatMap(([key, elem]) => [encode(key), encode(elem)])
            .join(",")}`,
        ];
  }
  return [`${name}=${encode(value)}`];
};

const serializePath = (
  metadata: IHttpMigrateRoute.IParameter,
  value: unknown,
): string => {
  const encode = encodeRfc3986;
  const name: string = encode(metadata.name);
  const style = metadata.style ?? "simple";
  const explode = metadata.explode ?? false;
  const array = Array.isArray(value) ? value.map(encode) : null;
  const object = isRecord(value)
    ? objectEntries(value).map(([key, elem]) => [encode(key), encode(elem)])
    : null;
  if (style === "matrix") {
    if (array)
      return explode
        ? array.map((elem) => `;${name}=${elem}`).join("")
        : `;${name}=${array.join(",")}`;
    if (object)
      return explode
        ? object.map(([key, elem]) => `;${key}=${elem}`).join("")
        : `;${name}=${object.flat().join(",")}`;
    return `;${name}=${encode(value)}`;
  }
  if (style === "label") {
    if (array) return `.${array.join(explode ? "." : ",")}`;
    if (object)
      return `.${
        explode
          ? object.map(([key, elem]) => `${key}=${elem}`).join(".")
          : object.flat().join(",")
      }`;
    return `.${encode(value)}`;
  }
  if (array) return array.join(",");
  if (object)
    return explode
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
  style: IHttpMigrateRoute.ISerialization["style"] = "form",
): [string, string][] => {
  const encode = (input: unknown): string =>
    style === "cookie" ? String(input) : encodeRfc3986(input);
  const encodedName: string = encode(name);
  if (Array.isArray(value))
    return explode
      ? value.map((elem) => [encodedName, encode(elem)])
      : [[encodedName, value.map(encode).join(",")]];
  if (isRecord(value)) {
    const entries = objectEntries(value);
    return explode
      ? entries.map(([key, elem]) => [encode(key), encode(elem)])
      : [
          [
            encodedName,
            entries
              .flatMap(([key, elem]) => [encode(key), encode(elem)])
              .join(","),
          ],
        ];
  }
  return [[encodedName, encode(value)]];
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

const isJsonMediaType = (type: string | undefined): boolean => {
  const normalized: string = (type ?? "")
    .split(";", 1)[0]!
    .trim()
    .toLowerCase();
  return normalized === "application/json" || normalized.endsWith("+json");
};

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

const encodeRfc3986 = (input: unknown): string =>
  encodeURIComponent(String(input)).replace(
    /[!'()*]/g,
    (character) => `%${character.charCodeAt(0).toString(16).toUpperCase()}`,
  );
