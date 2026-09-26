/**
 * Reads one query value as a string.
 *
 * The text `"null"` spells `null` only where the property's type admits `null`;
 * elsewhere it is the string `"null"` (#2450). The emitter passes `nullable`
 * for every string it decodes; code emitted before the parameter existed calls
 * without it and keeps the former reading.
 */
export const _httpQueryReadString = (
  str: string | null,
  nullable: boolean = true,
): string | null | undefined =>
  str === null ? undefined : nullable === true && str === "null" ? null : str;
