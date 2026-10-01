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
 *
 * @evidence contracts/common.md#principled-implementation The error extends the platform Error so it is catchable and carries a stack, and it adds the request method, path, status and response headers as readonly fields. The message is the response body as text, and the parsed body is kept separately for `toJSON`; a string body that the fetcher has not classified is parsed lazily, so a plain-text response is not reinterpreted as JSON by construction. The prototype assignment in the constructor repairs inheritance only if a toolchain downlevels `extends Error`, and is a no-op under native classes.
 * @evidence contracts/common.md#clear-and-simple-design One class with four public fields, one private slot and one method; stringification of an arbitrary body is a module-level helper because only the constructor needs it.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The prototype assignment is a compatibility measure for a supported downlevel transpilation of `Error` subclasses and does not replace any foreign method; no consumer-specific behavior is present.
 * @evidence contracts/common.md#meaningful-documentation The comment states when it is thrown, what it carries, how `message` and `toJSON` relate and where the non-throwing alternatives are; each field has a one-line comment.
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
   *
   * @returns Structured HTTP error information
   *
   * @evidence contracts/common.md#principled-implementation The method returns the structured fields with the body as `message`; when the body was not classified it tries `JSON.parse` on the message and falls back to the message text, then caches the result, so the JSON form of a JSON error body is an object and that of a text body remains the text.
   * @evidence contracts/common.md#clear-and-simple-design One method that fills a private cache and returns a fresh record each time.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts It does not alter the message or fields; the cache only stores the derived body.
   * @evidence contracts/common.md#meaningful-documentation The doc explains the return and the type parameter, and says that it preserves the parsed body.
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
   *
   * @evidence contracts/common.md#principled-implementation The record lists the same method, path, status and headers as the error and a body-typed `message`, which is the shape `toJSON` returns and which can be serialized by JSON.stringify.
   * @evidence contracts/common.md#clear-and-simple-design Five fields in the error's namespace, used only for the method result.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
   * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment and the type parameter is described.
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
