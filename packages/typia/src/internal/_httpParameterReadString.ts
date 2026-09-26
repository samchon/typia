/**
 * Reads one path parameter as a string.
 *
 * The text `"null"` spells `null` only where the parameter's type admits
 * `null`; elsewhere it is the string `"null"` (#2450). The emitter passes
 * `false` for a string whose type does not admit `null` and omits the argument
 * otherwise, so code emitted before the parameter existed keeps its reading.
 */
export const _httpParameterReadString = (
  value: string,
  nullable: boolean = true,
) => (nullable === true && value === "null" ? null : value);
