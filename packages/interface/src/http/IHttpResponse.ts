/**
 * HTTP response structure.
 *
 * `IHttpResponse` contains {@link status} code, {@link headers}, and {@link body}.
 */
export interface IHttpResponse {
  /** Status code of the response. */
  status: number;

  /** Headers of the response. */
  headers: Record<string, string | string[]>;

  /** Body of the response. */
  body: unknown;
}
