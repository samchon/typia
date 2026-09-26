/**
 * Reads one path parameter as a string.
 *
 * The text `"null"` spells `null` only where the parameter's type admits
 * `null`; elsewhere it is the string `"null"` (#2450). The emitter passes
 * `nullable` for every string it decodes; code emitted before the parameter
 * existed calls without it and keeps the former reading.
 */
export const _httpParameterReadString = (
  value: string,
  nullable: boolean = true,
) => (nullable === true && value === "null" ? null : value);
