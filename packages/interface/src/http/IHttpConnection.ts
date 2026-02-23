/// <reference lib="dom" />

/**
<<<<<<< HEAD
 * Connection information.
 *
 * `IHttpConnection` is an interface type that represents connection information of
 * the remote HTTP server. You can target the remote HTTP server by writing the
 * {@link IHttpConnection.host} variable down. Also, you can configure special
 * header values by specializing the {@link IHttpConnection.headers} variable.
 *
 * If the remote HTTP server encrypts or decrypts its body data through the
 * AES-128/256 algorithm, specify the {@link IHttpConnection.encryption} with
 * {@link IEncryptionPassword} or {@link IEncryptionPassword.Closure} variable.
=======
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
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @author Seungjun We - https://github.com/SeungjunWe
 */
export interface IHttpConnection {
<<<<<<< HEAD
  /** Host address of the remote HTTP server. */
  host: string;

  /** Header values delivered to the remote HTTP server. */
  headers?: Record<string, IHttpConnection.HeaderValue>;

  /** Additional options for the `fetch` function. */
  options?: IHttpConnection.IOptions;

  /**
   * Custom fetch function.
   *
   * If you want to use custom `fetch` function instead of built-in, assign your
   * custom `fetch` function into this property.
   *
   * For reference, the `fetch` function has started to be supported since
   * version 20 of NodeJS. Therefore, if you are using NodeJS version 19 or
   * lower, you have to assign the `node-fetch` module into this property.
=======
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
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
   */
  fetch?: typeof fetch;
}
export namespace IHttpConnection {
  /**
<<<<<<< HEAD
   * Additional options for the `fetch` function.
   *
   * Almost same with {@link RequestInit} type of the {@link fetch} function, but
   * `body`, `headers` and `method` properties are omitted.
   *
   * The reason why defining duplicated definition of {@link RequestInit} is for
   * legacy NodeJS environments, which does not have the {@link fetch} function
   * type.
   */
  export interface IOptions {
    /**
     * A string indicating how the request will interact with the browser's
     * cache to set request's cache.
=======
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
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
     */
    cache?:
      | "default"
      | "force-cache"
      | "no-cache"
      | "no-store"
      | "only-if-cached"
      | "reload";

    /**
<<<<<<< HEAD
     * A string indicating whether credentials will be sent with the request
     * always, never, or only when sent to a same-origin URL. Sets request's
     * credentials.
=======
     * Credentials inclusion mode.
     *
     * Controls whether cookies and HTTP authentication are sent.
     *
     * - `"omit"`: Never send credentials
     * - `"same-origin"`: Send credentials only for same-origin requests
     * - `"include"`: Always send credentials, even cross-origin
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
     */
    credentials?: "omit" | "same-origin" | "include";

    /**
<<<<<<< HEAD
     * A cryptographic hash of the resource to be fetched by request.
     *
     * Sets request's integrity.
     */
    integrity?: string;

    /** A boolean to set request's keepalive. */
    keepalive?: boolean;

    /**
     * A string to indicate whether the request will use CORS, or will be
     * restricted to same-origin URLs.
     *
     * Sets request's mode.
=======
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
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
     */
    mode?: "cors" | "navigate" | "no-cors" | "same-origin";

    /**
<<<<<<< HEAD
     * A string indicating whether request follows redirects, results in an
     * error upon encountering a redirect, or returns the redirect (in an opaque
     * fashion).
     *
     * Sets request's redirect.
=======
     * HTTP redirect handling behavior.
     *
     * - `"follow"`: Automatically follow redirects (default)
     * - `"error"`: Throw an error on redirect
     * - `"manual"`: Return redirect response for manual handling
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
     */
    redirect?: "error" | "follow" | "manual";

    /**
<<<<<<< HEAD
     * A string whose value is a same-origin URL, "about:client", or the empty
     * string, to set request's referrer.
     */
    referrer?: string;

    /** A referrer policy to set request's referrerPolicy. */
=======
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
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
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

<<<<<<< HEAD
    /** An AbortSignal to set request's signal. */
=======
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
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
    signal?: AbortSignal | null;
  }

  /**
<<<<<<< HEAD
   * Type of allowed header values.
   *
   * Only atomic or array of atomic values are allowed.
=======
   * Allowed types for HTTP header values.
   *
   * Supports primitive types (string, boolean, number, bigint) and arrays of
   * primitives. Arrays are typically joined with commas when sent as HTTP
   * headers.
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
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
<<<<<<< HEAD

  // /**
  //  * Type of headers
  //  *
  //  * `Headerify` removes every properties that are not allowed in the
  //  * HTTP headers type.
  //  *
  //  * Below are list of prohibited in HTTP headers.
  //  *
  //  * 1. Value type one of {@link HeaderValue}
  //  * 2. Key is "set-cookie", but value is not an Array type
  //  * 3. Key is one of them, but value is Array type
  //  *   - "age"
  //  *   - "authorization"
  //  *   - "content-length"
  //  *   - "content-type"
  //  *   - "etag"
  //  *   - "expires"
  //  *   - "from"
  //  *   - "host"
  //  *   - "if-modified-since"
  //  *   - "if-unmodified-since"
  //  *   - "last-modified"
  //  *   - "location"
  //  *   - "max-forwards"
  //  *   - "proxy-authorization"
  //  *   - "referer"
  //  *   - "retry-after"
  //  *   - "server"
  //  *   - "user-agent"
  //  */
  // export type Headerify<T extends object | undefined> = {
  //   [P in keyof T]?: T[P] extends HeaderValue | undefined
  //     ? P extends string
  //       ? Lowercase<P> extends "set-cookie"
  //         ? T[P] extends Array<HeaderValue>
  //           ? T[P] | undefined
  //           : never
  //         : Lowercase<P> extends
  //               | "age"
  //               | "authorization"
  //               | "content-length"
  //               | "content-type"
  //               | "etag"
  //               | "expires"
  //               | "from"
  //               | "host"
  //               | "if-modified-since"
  //               | "if-unmodified-since"
  //               | "last-modified"
  //               | "location"
  //               | "max-forwards"
  //               | "proxy-authorization"
  //               | "referer"
  //               | "retry-after"
  //               | "server"
  //               | "user-agent"
  //           ? T[P] extends Array<HeaderValue>
  //             ? never
  //             : T[P] | undefined
  //           : T[P] | undefined
  //       : never
  //     : never;
  // };
=======
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
}
