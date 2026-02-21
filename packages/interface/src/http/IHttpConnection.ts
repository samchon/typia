/// <reference lib="dom" />

/**
 * HTTP connection configuration for remote server communication.
 *
 * `IHttpConnection` defines connection settings required to communicate with
 * remote HTTP servers. This interface is primarily used by `@nestia/fetcher`
 * and generated SDK functions to establish HTTP connections.
 *
 * The {@link host} property specifies the base URL of the target server, while
 * {@link headers} allows passing custom HTTP headers with each request. For
 * fine-grained control over fetch behavior, use {@link options} to configure
 * caching, CORS, credentials, and other fetch API settings.
 *
 * In Node.js versions prior to 20 (which lack native fetch), provide a polyfill
 * like `node-fetch` via the {@link fetch} property.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IHttpConnection {
  /**
   * Base URL of the remote HTTP server.
   *
   * Must include protocol (http:// or https://) and may include port. Example:
   * `"https://api.example.com"` or `"http://localhost:3000"`.
   */
  host: string;

  /**
   * Custom HTTP headers to send with every request.
   *
   * Common use cases include authentication tokens, API keys, and content
   * negotiation headers. Values can be primitives or arrays.
   */
  headers?: Record<string, IHttpConnection.HeaderValue>;

  /**
   * Additional fetch API options.
   *
   * Configure caching, CORS mode, credentials handling, and other
   * fetch-specific behaviors. These options are passed directly to the
   * underlying fetch call.
   */
  options?: IHttpConnection.IOptions;

  /**
   * Custom fetch function implementation.
   *
   * For Node.js versions before 20 that lack native fetch support, provide a
   * polyfill such as `node-fetch`. This allows the same connection
   * configuration to work across all Node.js versions.
   *
   * @example
   *   import fetch from "node-fetch";
   *
   *   const connection: IHttpConnection = {
   *     host: "https://api.example.com",
   *     fetch: fetch as any,
   *   };
   */
  fetch?: typeof fetch;
}
export namespace IHttpConnection {
  /**
   * Fetch API request options.
   *
   * Subset of the standard `RequestInit` interface, excluding properties that
   * are managed internally (body, headers, method). These options control
   * caching, CORS, credentials, and request lifecycle behavior.
   */
  export interface IOptions {
    /**
     * Request cache mode.
     *
     * Controls how the request interacts with the browser's HTTP cache.
     *
     * - `"default"`: Standard browser caching behavior
     * - `"no-store"`: Bypass cache completely, don't store response
     * - `"reload"`: Bypass cache, but store response
     * - `"no-cache"`: Validate with server before using cache
     * - `"force-cache"`: Use cache even if stale
     * - `"only-if-cached"`: Only use cache, fail if not cached
     */
    cache?:
      | "default"
      | "force-cache"
      | "no-cache"
      | "no-store"
      | "only-if-cached"
      | "reload";

    /**
     * Credentials inclusion mode.
     *
     * Controls whether cookies and HTTP authentication are sent.
     *
     * - `"omit"`: Never send credentials
     * - `"same-origin"`: Send credentials only for same-origin requests
     * - `"include"`: Always send credentials, even cross-origin
     */
    credentials?: "omit" | "same-origin" | "include";

    /**
     * Subresource integrity hash for verification.
     *
     * A cryptographic hash (e.g., `"sha256-abc123..."`) to verify the fetched
     * resource hasn't been tampered with. The browser will reject responses
     * that don't match the expected hash.
     */
    integrity?: string;

    /**
     * Whether to keep the connection alive after page unload.
     *
     * When `true`, the request can outlive the page that initiated it. Useful
     * for analytics or logging requests that should complete even if the user
     * navigates away.
     */
    keepalive?: boolean;

    /**
     * CORS (Cross-Origin Resource Sharing) mode.
     *
     * Controls cross-origin request behavior.
     *
     * - `"cors"`: Standard CORS request (requires server support)
     * - `"no-cors"`: Limited cross-origin request (opaque response)
     * - `"same-origin"`: Only allow same-origin requests
     * - `"navigate"`: For navigation requests (used by browsers)
     */
    mode?: "cors" | "navigate" | "no-cors" | "same-origin";

    /**
     * HTTP redirect handling behavior.
     *
     * - `"follow"`: Automatically follow redirects (default)
     * - `"error"`: Throw an error on redirect
     * - `"manual"`: Return redirect response for manual handling
     */
    redirect?: "error" | "follow" | "manual";

    /**
     * Referrer URL to send with the request.
     *
     * Overrides the default referrer. Use empty string to suppress the referrer
     * header entirely.
     */
    referrer?: string;

    /**
     * Policy for how much referrer information to include.
     *
     * Controls what referrer information is sent with requests. More
     * restrictive policies improve privacy but may break some server-side
     * analytics or security checks.
     */
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

    /**
     * AbortSignal for request cancellation.
     *
     * Connect to an AbortController to enable cancellation of in-flight
     * requests. When the signal is aborted, the fetch promise rejects with an
     * AbortError.
     *
     * @example
     *   const controller = new AbortController();
     *   const options = { signal: controller.signal };
     *   // Later: controller.abort();
     */
    signal?: AbortSignal | null;
  }

  /**
   * Allowed types for HTTP header values.
   *
   * Supports primitive types (string, boolean, number, bigint) and arrays of
   * primitives. Arrays are typically joined with commas when sent as HTTP
   * headers.
   */
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
