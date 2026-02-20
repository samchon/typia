/// <reference lib="dom" />

/**
 * HTTP connection information.
 *
 * `IHttpConnection` represents connection settings for remote HTTP servers.
 * Configure {@link host}, optional {@link headers}, and {@link fetch} options.
 */
export interface IHttpConnection {
  /** Host address of the remote HTTP server. */
  host: string;

  /** Header values delivered to the remote HTTP server. */
  headers?: Record<string, IHttpConnection.HeaderValue>;

  /** Additional options for the `fetch` function. */
  options?: IHttpConnection.IOptions;

  /**
   * Custom fetch function.
   *
   * For NodeJS < 20, use `node-fetch` module here.
   */
  fetch?: typeof fetch;
}
export namespace IHttpConnection {
  /** Fetch options (subset of RequestInit without body/headers/method). */
  export interface IOptions {
    /** Cache mode. */
    cache?:
      | "default"
      | "force-cache"
      | "no-cache"
      | "no-store"
      | "only-if-cached"
      | "reload";

    /** Credentials mode. */
    credentials?: "omit" | "same-origin" | "include";

    /** Subresource integrity hash. */
    integrity?: string;

    /** Whether to keep connection alive. */
    keepalive?: boolean;

    /** CORS mode. */
    mode?: "cors" | "navigate" | "no-cors" | "same-origin";

    /** Redirect handling. */
    redirect?: "error" | "follow" | "manual";

    /** Referrer URL. */
    referrer?: string;

    /** Referrer policy. */
    referrerPolicy?:
      | ""
      | "no-referrer"
      | "no-referrer-when-downgrade"
      | "origin"
      | "origin-when-cross-origin"
      | "same-origin"
      | "strict-origin"
      | "strict-origin-when-cross-origin"
      | "unsafe-url";

    /** Abort signal for request cancellation. */
    signal?: AbortSignal | null;
  }

  /** Allowed header value types. */
  export type HeaderValue =
    | string
    | boolean
    | number
    | bigint
    | Array<boolean>
    | Array<number>
    | Array<bigint>
    | Array<string>;
}
