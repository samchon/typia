/**
 * Interface for a readable URLSearchParams object.
 *
 * This interface is a subset of the {@link URLSearchParams} interface, designed
 * especially for the [Hono.JS](https://hono.dev/) library.
 *
 * @author https://github.com/miyaji255
 */
export type IReadableURLSearchParams = Pick<URLSearchParams, "get" | "getAll">;
