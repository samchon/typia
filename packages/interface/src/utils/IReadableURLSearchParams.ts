/**
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
 *
 * @author https://github.com/miyaji255
 *
 * @evidence contracts/common.md#principled-implementation Pick derives the three read member signatures from the standard URLSearchParams type, so compatible query readers preserve its size and repeated-value semantics without requiring mutation methods.
 * @evidence contracts/common.md#clear-and-simple-design A single structural subset expresses the required reader capability; it introduces no wrapper, implementation or framework dependency.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Compatibility follows member signatures rather than a framework identity check or replacement of URLSearchParams behavior.
 * @evidence contracts/common.md#meaningful-documentation The native comment identifies the read-only capability, first versus all values and its framework-adapter use; it links each selected standard member and explains when to implement the subset.
 */
export type IReadableURLSearchParams = Pick<
  URLSearchParams,
  "size" | "get" | "getAll"
>;
