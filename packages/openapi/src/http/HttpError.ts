/**
 * Specialized error class for HTTP request failures
 *
 * `HttpError` is a custom error class that is thrown when an HTTP request fails
 * and receives an error response from a remote server. Unlike the standard
 * Error class, it carries detailed HTTP-specific information (method, path,
 * status code, headers) that enables more sophisticated error handling and
 * debugging in HTTP communication scenarios.
 *
 * This class is particularly useful for:
 *
 * - API client libraries that need to provide detailed error information
 * - Applications that require different handling based on HTTP status codes
 * - Logging and monitoring systems that need structured error data
 * - Debugging HTTP communication issues
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export class HttpError extends Error {
  /** The HTTP method that was used for the failed request */
  public readonly method: "GET" | "DELETE" | "POST" | "PUT" | "PATCH" | "HEAD";

  /** The path or URL that was requested */
  public readonly path: string;

  /** The HTTP status code returned by the server */
  public readonly status: number;

  /** The HTTP response headers returned by the server as key-value pairs */
  public readonly headers: Record<string, string | string[]>;

  /** @internal */
  private body_: any = NOT_YET;

  /**
   * Creates a new HttpError instance
   *
   * Initializes an HttpError with comprehensive information about the failed
   * HTTP request. This constructor calls the parent Error constructor to set
   * the basic error message, and additionally stores HTTP-specific details as
   * readonly properties for later access.
   *
   * @example
   *   ```typescript
   *   const error = new HttpError(
   *     'POST',
   *     '/api/login',
   *     401,
   *     { 'content-type': 'application/json', 'www-authenticate': 'Bearer' },
   *     '{"error": "Invalid credentials", "code": "AUTH_FAILED"}'
   *   );
   *   console.log(error.status); // 401
   *   console.log(error.method); // "POST"
   *   ```;
   *
   * @param method The HTTP method that was used for the request (GET, POST,
   *   PUT, DELETE, PATCH, HEAD)
   * @param path The path or URL that was requested (e.g., '/api/users' or
   *   'https://api.example.com/users')
   * @param status The HTTP status code returned by the server (e.g., 404, 500,
   *   401)
   * @param headers The HTTP response headers returned by the server as
   *   key-value pairs
   * @param message The error message from the server (typically the response
   *   body text)
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
   * Serializes the HttpError instance to a JSON-compatible object
   *
   * This method serves two primary purposes:
   *
   * 1. **Automatic serialization**: When `JSON.stringify()` is called on an
   *    HttpError, this method is automatically invoked to provide a clean JSON
   *    representation
   * 2. **Structured error data**: When the server response body contains JSON,
   *    this method parses it and provides structured access to error details
   *
   * The method implements lazy parsing for the response message:
   *
   * - JSON parsing is attempted only on the first call to avoid unnecessary
   *   processing
   * - Successful parsing results are cached for subsequent calls
   * - If JSON parsing fails (e.g., for HTML error pages or plain text), the
   *   original string is preserved and returned as-is
   *
   * @template T The expected type of the response body (defaults to any for
   *   flexibility)
   * @returns A structured object containing all HTTP error information with the
   *   message field containing either the parsed JSON object or the original
   *   string
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
   * Return type definition for the {@link HttpError.toJSON} method
   *
   * This interface provides a structured representation of all HTTP error
   * information in a format suitable for serialization, logging, debugging, and
   * API responses. It ensures consistency across different parts of an
   * application when handling HTTP errors.
   *
   * The generic type parameter `T` allows for type-safe access to the parsed
   * response body when the structure is known at compile time.
   *
   * @example
   *   ```typescript
   *   // Using with known error response structure
   *   interface ApiErrorResponse {
   *     code: string;
   *     message: string;
   *     details?: Record<string, any>;
   *   }
   *
   *   const errorProps: HttpError.IProps<ApiErrorResponse> = httpError.toJSON<ApiErrorResponse>();
   *   console.log(errorProps.message.code); // Type-safe access to error code
   *   ```;
   *
   * @template T The type of the message field (parsed response body)
   */
  export interface IProps<T> {
    /** The HTTP method used for the request */
    method: "GET" | "DELETE" | "POST" | "PUT" | "PATCH" | "HEAD";

    /** The path or URL that was requested */
    path: string;

    /** The HTTP status code returned by the server */
    status: number;

    /**
     * The response headers as key-value pairs (values can be string or string
     * array)
     */
    headers: Record<string, string | string[]>;

    /** The response body (either parsed JSON object or original string) */
    message: T;
  }
}

/** @internal */
const NOT_YET = {} as any;
