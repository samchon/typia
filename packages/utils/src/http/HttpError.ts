/**
 * Error thrown when HTTP request fails with non-2xx status.
 *
 * `HttpError` is thrown by {@link HttpLlm.execute} and
 * {@link HttpMigration.execute} when the server returns a non-2xx status code.
 * Contains the full HTTP context: method, path, status, headers, and response
 * body.
 *
 * The response body is available via {@link message} (raw string) or
 * {@link toJSON} (parsed JSON). For non-throwing behavior, use
 * {@link HttpLlm.propagate} or {@link HttpMigration.propagate} instead.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export class HttpError extends Error {
  /** HTTP method used for the request. */
  public readonly method: "GET" | "DELETE" | "POST" | "PUT" | "PATCH" | "HEAD";

  /** Request path or URL. */
  public readonly path: string;

  /** HTTP status code from server. */
  public readonly status: number;

  /** Response headers from server. */
  public readonly headers: Record<string, string | string[]>;

  /** @internal */
  private body_: any = NOT_YET;

  /**
   * @param method HTTP method
   * @param path Request path or URL
   * @param status HTTP status code
   * @param headers Response headers
   * @param message Error message (response body)
   */
  public constructor(
    method: "GET" | "DELETE" | "POST" | "PUT" | "PATCH" | "HEAD",
    path: string,
    status: number,
    headers: Record<string, string | string[]>,
    message: string,
  ) {
    super(message);
    this.method = method;
    this.path = path;
    this.status = status;
    this.headers = headers;

    // INHERITANCE POLYFILL
    const proto: HttpError = new.target.prototype;
    if (Object.setPrototypeOf) Object.setPrototypeOf(this, proto);
    else (this as any).__proto__ = proto;
  }

  /**
   * Serialize to JSON-compatible object.
   *
   * Lazily parses JSON message body on first call. If parsing fails, returns
   * the original string.
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
      message: this.body_,
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
    method: "GET" | "DELETE" | "POST" | "PUT" | "PATCH" | "HEAD";

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

/** @internal */
const NOT_YET = {} as any;
