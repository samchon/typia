/**
 * Interface for a readable URLSearchParams object.
 *
 * This interface is a subset of the {@link URLSearchParams} interface, designed
 * especially for the [Hono.JS](https://hono.dev/) library.
 *
 */
export type IReadableURLSearchParams = Pick<
  URLSearchParams,
  "size" | "get" | "getAll"
>;
