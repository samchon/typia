/**
 * Reads one query value as a string.
 *
 * The text `"null"` spells `null` only where the property's type admits `null`;
 * elsewhere it is the string `"null"` (#2450). The emitter passes `false` for a
 * string whose type does not admit `null` and omits the argument otherwise, so
 * code emitted before the parameter existed keeps its reading.
 */
export const _httpQueryReadString = (
  str: string | null,
  nullable: boolean = true,
): string | null | undefined =>
  str === null ? undefined : nullable === true && str === "null" ? null : str;
