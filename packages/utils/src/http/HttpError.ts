/**
 * Error thrown when HTTP request fails with non-2xx status.
 *
 * `HttpError` is thrown by {@link HttpLlm.execute} and
 * {@link HttpMigration.execute} when the server returns a non-2xx status code.
 * Contains the full HTTP context: method, path, status, headers, and response
 * body.
 *
 * The human-readable error text is available via {@link message}, while
 * {@link toJSON} preserves the parsed response body. For non-throwing behavior,
 * use {@link HttpLlm.propagate} or {@link HttpMigration.propagate} instead.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export class HttpError extends Error {
  /** HTTP method used for the request. */
  public readonly method:
    | "GET"
    | "QUERY"
    | "DELETE"
    | "POST"
    | "PUT"
    | "PATCH"
    | "HEAD";

  /** Request path or URL. */
  public readonly path: string;

  /** HTTP status code from server. */
  public readonly status: number;

  /** Response headers from server. */
  public readonly headers: Record<string, string | string[]>;

  /** Parsed response body. */
  private body_: unknown = NOT_YET;

  /**
   * @param method HTTP method
   * @param path Request path or URL
   * @param status HTTP status code
   * @param headers Response headers
   * @param body Parsed response body
   * @param parsed Whether a string body has already been classified by media
   *   type
   */
  public constructor(
    method: "GET" | "QUERY" | "DELETE" | "POST" | "PUT" | "PATCH" | "HEAD",
    path: string,
    status: number,
    headers: Record<string, string | string[]>,
    body: unknown,
    parsed: boolean = false,
  ) {
    super(stringifyBody(body));
    this.method = method;
    this.path = path;
    this.status = status;
    this.headers = headers;
    if (typeof body !== "string" || parsed) this.body_ = body;

    // INHERITANCE POLYFILL
    const proto: HttpError = new.target.prototype;
    if (Object.setPrototypeOf) Object.setPrototypeOf(this, proto);
    else (this as any).__proto__ = proto;
  }

  /**
   * Serialize to JSON-compatible object.
   *
   * @template T Expected response body type
   * @returns Structured HTTP error information
   */
  public toJSON<T>(): HttpError.IProps<T> {
    if (this.body_ === NOT_YET)
      try {
        this.body_ = JSON.parse(this.message);
      } catch {
        this.body_ = this.message;
      }
    return {
      method: this.method,
      path: this.path,
      status: this.status,
      headers: this.headers,
      message: this.body_ as T,
    };
  }
}
export namespace HttpError {
  /**
   * JSON representation of HttpError.
   *
   * @template T Response body type
   */
  export interface IProps<T> {
    /** HTTP method. */
    method: "GET" | "QUERY" | "DELETE" | "POST" | "PUT" | "PATCH" | "HEAD";

    /** Request path or URL. */
    path: string;

    /** HTTP status code. */
    status: number;

    /** Response headers. */
    headers: Record<string, string | string[]>;

    /** Response body (parsed JSON or original string). */
    message: T;
  }
}

const stringifyBody = (body: unknown): string => {
  if (typeof body === "string") return body;
  if (body === undefined) return "";
  if (body instanceof URLSearchParams) return body.toString();
  try {
    const output: string | undefined = JSON.stringify(body);
    return output ?? String(body);
  } catch {
    return String(body);
  }
};

/** @internal */
const NOT_YET = Symbol("not-yet");
