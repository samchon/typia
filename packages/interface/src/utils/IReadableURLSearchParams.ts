/**
 * Interface for a readable URLSearchParams object.
 *
 * This interface is a subset of the {@link URLSearchParams} interface, designed
 * especially for the [Hono.JS](https://hono.dev/) library.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export type IReadableURLSearchParams = Pick<
  URLSearchParams,
  "size" | "get" | "getAll"
>;
