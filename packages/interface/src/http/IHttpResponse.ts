/**
 * Represents an HTTP response.
 *
 * The `IHttpResponse` interface represents an HTTP response.
 *
 * It contains the {@link status} code, {@link headers}, and {@link body} of the
 * response.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IHttpResponse {
  /** Status code of the response. */
  status: number;

  /** Headers of the response. */
  headers: Record<string, string | string[]>;

  /** Body of the response. */
  body: unknown;
}
