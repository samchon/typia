/**
 * HTTP response structure returned from server communication.
 *
 * `IHttpResponse` represents the complete HTTP response received from a remote
 * server, containing the status code, response headers, and body. This
 * interface is used by `@nestia/fetcher` to return structured response data
 * from API calls.
 *
 * The {@link status} property contains the HTTP status code (e.g., 200, 404),
 * {@link headers} contains all response headers (some may have multiple values),
 * and {@link body} contains the parsed response body (typically JSON-decoded).
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IHttpResponse {
  /**
   * HTTP status code of the response.
   *
   * Standard HTTP status codes indicating the result of the request. Common
   * values: 200 (OK), 201 (Created), 400 (Bad Request), 401 (Unauthorized), 404
   * (Not Found), 500 (Internal Server Error).
   */
  status: number;

  /**
   * Response headers from the server.
   *
   * Contains all HTTP headers returned by the server. Header values can be
   * either a single string or an array of strings for headers that appear
   * multiple times (e.g., `Set-Cookie`).
   */
  headers: Record<string, string | string[]>;

  /**
   * Parsed body content of the response.
   *
   * The response body after parsing. For JSON responses, this is the decoded
   * JavaScript object. The actual type depends on the endpoint and response
   * content-type.
   */
  body: unknown;
}
