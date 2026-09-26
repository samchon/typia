/**
 * Reads one form field as a string.
 *
 * The text `"null"` spells `null` only where the property's type admits `null`;
 * elsewhere it is the string `"null"` (#2450). The emitter passes `nullable`
 * for every string it decodes; code emitted before the parameter existed calls
 * without it and keeps the former reading.
 */
export const _httpFormDataReadString = (
  input: string | File | null,
  nullable: boolean = true,
): string | null | undefined =>
  input instanceof File
    ? (input as any)
    : input === null
      ? undefined
      : nullable === true && input === "null"
        ? null
        : input;
