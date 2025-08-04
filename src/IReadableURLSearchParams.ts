/**
 * Simplified interface for reading URL search parameters.
 *
 * Provides just the essential read operations from URLSearchParams without 
 * modification methods. Perfect for frameworks like Hono.js that need type-safe 
 * query parameter access without the full URLSearchParams API surface.
 *
 * @example
 * ```typescript
 * function handleRequest(params: IReadableURLSearchParams) {
 *   const userId = params.get('userId');     // Get single value
 *   const tags = params.getAll('tag');      // Get all values for key
 * }
 * ```
 */
export type IReadableURLSearchParams = Pick<URLSearchParams, "get" | "getAll">;
