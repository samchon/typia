/**
 * Interface for a readable URLSearchParams object
 */
export type IReadableURLSearchParams = Pick<URLSearchParams, "get" | "getAll">;
