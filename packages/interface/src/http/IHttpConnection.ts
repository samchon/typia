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
 * When the runtime has no global fetch, provide an implementation such as
 * `node-fetch` via the {@link fetch} property.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @author Seungjun We - https://github.com/SeungjunWe
 *
 * @evidence contracts/common.md#principled-implementation The record carries the three things a fetch needs apart from the call itself: a required base host, optional per-request headers whose values may be primitives or primitive arrays, and optional fetch options, with a replaceable fetch for runtimes lacking one. Optional members are optional because a connection with only a host is complete.
 * @evidence contracts/common.md#clear-and-simple-design One flat interface with its helper types in the same-named namespace; the fetch and signal types are separate aliases because they need conditional resolution that the interface itself should not carry.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The injectable `fetch` member is the supported replacement point, so callers supply an implementation instead of patching the global; the interface does not itself contain a fetch call.
 * @evidence contracts/common.md#meaningful-documentation The comment states who uses the type, relates host, headers, options and fetch, and explains injection when global fetch is unavailable, with an example on the fetch member.
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
   * Supply this when global fetch is unavailable or when a request needs a
   * different implementation. The supplied function must implement the fetch
   * behavior required by the HTTP executor.
   *
   * @example
   *   import fetch from "node-fetch";
   *
   *   const connection: IHttpConnection = {
   *     host: "https://api.example.com",
   *     fetch: fetch as any,
   *   };
   */
  fetch?: IHttpConnection.IFetch;
}
export namespace IHttpConnection {
  /**
   * The runtime's `fetch`, or a minimal stand-in where none is declared.
   *
   * This resolves to exactly `typeof globalThis.fetch` in any project that
   * declares it — through the DOM library, `@types/node`, or a polyfill's own
   * typings — so the member's type is unchanged wherever it was previously
   * usable. Where nothing declares it, it degrades to a callable shape instead
   * of failing to resolve.
   *
   * The indirection exists because this package's emitted declarations must be
   * self-contained. Naming `fetch` directly required a `/// <reference
   * lib="dom" />` that the declaration emit does not carry into `lib/**`, so
   * consumers installed a declaration whose types could not resolve, and the
   * repository's own transform fixtures silently loaded the DOM library while
   * believing they had excluded it (samchon/typia#2267, samchon/typia#2268).
   *
   * @evidence contracts/common.md#principled-implementation The conditional checks whether `typeof globalThis` declares `fetch` and then resolves to that declared type, otherwise to a callable stand-in, so it equals the real type wherever a declaration exists and does not fail to resolve elsewhere. It does not check the stand-in against any real fetch signature.
   * @evidence contracts/common.md#clear-and-simple-design One conditional alias, needed because the emitted declarations must be self-contained without a `lib` reference; the comment records the issues that required it.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The alias adapts to the consumer's declared library instead of forcing a DOM reference or patching a global.
   * @evidence contracts/common.md#meaningful-documentation The comment says what it resolves to in each environment, why the indirection exists and cites the issues that motivated it.
   */
  export type IFetch = typeof globalThis extends { fetch: infer T }
    ? T
    : (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;

  /**
   * The runtime's `AbortSignal`, or a minimal stand-in where none is declared.
   *
   * Resolves to the real `AbortSignal` instance type wherever one is declared,
   * so a value read from here stays assignable back to `RequestInit["signal"]`
   * and a real signal stays assignable into it. See {@link IFetch} for why the
   * indirection exists.
   *
   * @evidence contracts/common.md#principled-implementation The conditional extracts the instance type from a declared `AbortSignal` constructor, so a signal read from the options is assignable to and from `RequestInit["signal"]`; where none is declared, a minimal object with `aborted` stands in.
   * @evidence contracts/common.md#clear-and-simple-design A conditional alias in the same pattern as IFetch, referenced from IOptions.signal.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts It adapts to declared types rather than casting or patching a global.
   * @evidence contracts/common.md#meaningful-documentation The comment states the resolution, the assignability goal and refers to IFetch for the reason.
   */
  export type IAbortSignal = typeof globalThis extends {
    AbortSignal: abstract new (...args: any) => infer T;
  }
    ? T
    : { readonly aborted: boolean };

  /**
   * Fetch API request options.
   *
   * Subset of the standard `RequestInit` interface, excluding properties that
   * are managed internally (body, headers, method). These options control
   * caching, CORS, credentials, and request lifecycle behavior.
   *
   * @evidence contracts/common.md#principled-implementation Each property copies the name and the permitted string literals of the standard `RequestInit` member it mirrors, and excludes body, headers and method, which the fetcher owns. Properties are optional because the platform supplies defaults.
   * @evidence contracts/common.md#clear-and-simple-design A subset of RequestInit is declared locally so the declaration file does not depend on the DOM library.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts It is a data record and the options are passed through without special-casing a runtime.
   * @evidence contracts/common.md#meaningful-documentation The comment states the subset and each option has its allowed literals described, with an abort example.
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
    signal?: IHttpConnection.IAbortSignal | null;
  }

  /**
   * Allowed types for HTTP header values.
   *
   * Supports primitive types (string, boolean, number, bigint) and arrays of
   * primitives. Arrays are typically joined with commas when sent as HTTP
   * headers.
   *
   * @evidence contracts/common.md#principled-implementation A union of single primitives and homogeneous primitive arrays lets one header carry a scalar or a list; arrays are limited to one element type each, not mixed.
   * @evidence contracts/common.md#clear-and-simple-design A single union, used as the record value for headers.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A type-level description; joining arrays is the fetcher's concern and is not done here.
   * @evidence contracts/common.md#meaningful-documentation The comment states the permitted primitives and that arrays are typically comma-joined.
   */
  export type HeaderValue =
    | Array<bigint>
    | Array<boolean>
    | Array<number>
    | Array<string>
    | bigint
    | boolean
    | number
    | string;
}
