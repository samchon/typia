import type { HttpMigration } from "../HttpMigration";
import { IHttpConnection } from "../structures/IHttpConnection";
import { IHttpResponse } from "../structures/IHttpResponse";
import { HttpError } from "./HttpError";

export namespace HttpMigrateRouteFetcher {
  export const execute = async (
    props: HttpMigration.IFetchProps,
  ): Promise<unknown> => {
    const result: IHttpResponse = await _Propagate("request", props);
    props.route.success?.media;
    if (result.status !== 200 && result.status !== 201)
      throw new HttpError(
        props.route.method.toUpperCase() as "GET",
        props.route.path,
        result.status,
        result.headers,
        result.body as string,
      );
    return result.body;
  };

  export const propagate = (
    props: HttpMigration.IFetchProps,
  ): Promise<IHttpResponse> => _Propagate("propagate", props);
}

const _Propagate = async (
  from: string,
  props: HttpMigration.IFetchProps,
): Promise<IHttpResponse> => {
  // VALIDATE PARAMETERS
  const error = (message: string) =>
    new Error(`Error on MigrateRouteFetcher.${from}(): ${message}`);
  if (Array.isArray(props.parameters)) {
    if (props.route.parameters.length !== props.parameters.length)
      throw error(`number of parameters is not matched.`);
  } else if (
    props.route.parameters.every(
      (p) => (props.parameters as Record<string, any>)[p.key] !== undefined,
    ) === false
  )
    throw error(`number of parameters is not matched.`);

  // VALIDATE QUERY
  if (!!props.route.query !== !!props.query)
    throw error(`query is not matched.`);
  else if (!!props.route.body !== (props.body !== undefined))
    throw error(`body is not matched.`);

  // INIT REQUEST DATA
  const headers: Record<string, IHttpConnection.HeaderValue | undefined> = {
    ...(props.connection.headers ?? {}),
    ...(props.route.body?.type &&
    props.route.body.type !== "multipart/form-data"
      ? { "Content-Type": props.route.body.type }
      : {}),
  };
  const init: RequestInit = {
    ...(props.connection.options ?? {}),
    method: props.route.method.toUpperCase(),
    headers: (() => {
      const output: [string, string][] = [];
      for (const [key, value] of Object.entries(headers))
        if (value === undefined) continue;
        else if (Array.isArray(value))
          for (const v of value) output.push([key, String(v)]);
        else output.push([key, String(value)]);
      return output;
    })(),
  };
  if (props.body !== undefined)
    init.body = (
      props.route.body?.type === "application/x-www-form-urlencoded"
        ? requestQueryBody(props.body)
        : props.route.body?.type === "multipart/form-data"
          ? requestFormDataBody(props.body)
          : props.route.body?.type === "application/json"
            ? JSON.stringify(props.body)
            : props.body
    ) as any;

  // DO REQUEST
  const resolvedPath: string =
    props.connection.host.endsWith("/") === false &&
    props.route.emendedPath.startsWith("/") === false
      ? `/${getPath(props)}`
      : getPath(props);
  const url: URL = new URL(`${props.connection.host}${resolvedPath}`);

  const response: Response = await (props.connection.fetch ?? fetch)(url, init);
  const status: number = response.status;
  const out = (body: unknown): IHttpResponse => ({
    status,
    headers: responseHeaders(response.headers),
    body,
  });

  if (status === 200 || status === 201) {
    // SUCCESS CASE
    if (props.route.method.toUpperCase() === "HEAD") return out(undefined);
    else if (
      props.route.success === null ||
      props.route.success.type === "text/plain"
    )
      return out(await response.text());
    else if (props.route.success.type === "application/json") {
      const text: string = await response.text();
      return out(text.length ? JSON.parse(text) : undefined);
    } else if (props.route.success.type === "application/x-www-form-urlencoded")
      return out(new URLSearchParams(await response.text()));
    else if (props.route.success.type === "multipart/form-data")
      return out(await response.formData());
    throw error("Unsupported response body type.");
  } else {
    // FAILURE CASE
    const type: string = (
      response.headers.get("content-type") ??
      response.headers.get("Content-Type") ??
      ""
    )
      .split(";")[0]
      .trim();
    if (type === "" || type.startsWith("text/"))
      return out(await response.text());
    else if (type === "application/json") return out(await response.json());
    else if (type === "application/x-www-form-urlencoded")
      return out(new URLSearchParams(await response.text()));
    else if (type === "multipart/form-data")
      return out(await response.formData());
    else if (type === "application/octet-stream")
      return out(await response.blob());
    return out(await response.text());
  }
};

const getPath = (
  props: Pick<HttpMigration.IFetchProps, "route" | "parameters" | "query">,
): string => {
  let path: string = props.route.emendedPath;
  props.route.parameters.forEach((p, i) => {
    path = path.replace(
      `:${p.key}`,
      encodeURIComponent(
        String(
          (Array.isArray(props.parameters)
            ? props.parameters[i]
            : props.parameters[p.key]) ?? "null",
        ),
      ),
    );
  });
  if (props.route.query) path += getQueryPath(props.query ?? {});
  return path;
};

const getQueryPath = (query: Record<string, any>): string => {
  const variables = new URLSearchParams();
  for (const [key, value] of Object.entries(query))
    if (undefined === value) continue;
    else if (Array.isArray(value))
      value.forEach((elem: any) => variables.append(key, String(elem)));
    else variables.set(key, String(value));
  return 0 === variables.size ? "" : `?${variables.toString()}`;
};

const requestQueryBody = (input: any): URLSearchParams => {
  const q: URLSearchParams = new URLSearchParams();
  for (const [key, value] of Object.entries(input))
    if (value === undefined) continue;
    else if (Array.isArray(value))
      value.forEach((elem) => q.append(key, String(elem)));
    else q.set(key, String(value));
  return q;
};
const requestFormDataBody = (input: Record<string, any>): FormData => {
  const encoded: FormData = new FormData();
  const append = (key: string) => (value: any) => {
    if (value === undefined) return;
    else if (typeof File === "function" && value instanceof File)
      encoded.append(key, value, value.name);
    else encoded.append(key, value);
  };
  for (const [key, value] of Object.entries(input))
    if (Array.isArray(value)) value.map(append(key));
    else append(key)(value);
  return encoded;
};

const responseHeaders = (
  headers: Headers,
): Record<string, string | string[]> => {
  const output: Record<string, string | string[]> = {};
  headers.forEach((value, key) => {
    if (key === "set-cookie") {
      output[key] ??= [];
      (output[key] as string[]).push(
        ...value.split(";").map((str) => str.trim()),
      );
    } else output[key] = value;
  });
  return output;
};
