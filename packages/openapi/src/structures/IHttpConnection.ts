/// <reference lib="dom" />

/**
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
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @author Seungjun We - https://github.com/SeungjunWe
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
   * If you want to use custom `fetch` function instead of built-in, assign your
   * custom `fetch` function into this property.
   *
   * For reference, the `fetch` function has started to be supported since
   * version 20 of NodeJS. Therefore, if you are using NodeJS version 19 or
   * lower, you have to assign the `node-fetch` module into this property.
   */
  fetch?: typeof fetch;
}
export namespace IHttpConnection {
  /**
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
     */
    cache?:
      | "default"
      | "force-cache"
      | "no-cache"
      | "no-store"
      | "only-if-cached"
      | "reload";

    /**
     * A string indicating whether credentials will be sent with the request
     * always, never, or only when sent to a same-origin URL. Sets request's
     * credentials.
     */
    credentials?: "omit" | "same-origin" | "include";

    /**
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
     */
    mode?: "cors" | "navigate" | "no-cors" | "same-origin";

    /**
     * A string indicating whether request follows redirects, results in an
     * error upon encountering a redirect, or returns the redirect (in an opaque
     * fashion).
     *
     * Sets request's redirect.
     */
    redirect?: "error" | "follow" | "manual";

    /**
     * A string whose value is a same-origin URL, "about:client", or the empty
     * string, to set request's referrer.
     */
    referrer?: string;

    /** A referrer policy to set request's referrerPolicy. */
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

    /** An AbortSignal to set request's signal. */
    signal?: AbortSignal | null;
  }

  /**
   * Type of allowed header values.
   *
   * Only atomic or array of atomic values are allowed.
   */
  export type HeaderValue =
    | string
    | boolean
    | number
    | bigint
    | string
    | Array<boolean>
    | Array<number>
    | Array<bigint>
    | Array<number>
    | Array<string>;

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
}
