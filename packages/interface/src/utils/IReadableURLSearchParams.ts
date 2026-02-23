/**
<<<<<<< HEAD
 * Interface for a readable URLSearchParams object.
 *
 * This interface is a subset of the {@link URLSearchParams} interface, designed
 * especially for the [Hono.JS](https://hono.dev/) library.
=======
 * Minimal interface for reading URL query parameters.
 *
 * `IReadableURLSearchParams` is a subset of the standard {@link URLSearchParams}
 * interface, containing only the read operations needed for query parameter
 * parsing. This interface was designed specifically for compatibility with the
 * [Hono.js](https://hono.dev/) web framework, which provides its own query
 * parameter implementation.
 *
 * The interface exposes:
 *
 * - {@link URLSearchParams.size | size}: Number of parameters
 * - {@link URLSearchParams.get | get}: Retrieve first value for a key
 * - {@link URLSearchParams.getAll | getAll}: Retrieve all values for a key
 *
 * Use this interface when implementing query parameter handling that needs to
 * work with both standard `URLSearchParams` and framework-specific
 * implementations.
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 *
 * @author https://github.com/miyaji255
 */
export type IReadableURLSearchParams = Pick<
  URLSearchParams,
  "size" | "get" | "getAll"
>;
