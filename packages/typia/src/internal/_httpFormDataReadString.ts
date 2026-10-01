/**
 * Reads one form field as a string.
 *
 * The text `"null"` spells `null` only where the property's type admits `null`;
 * elsewhere it is the string `"null"` (#2450). The emitter passes `false` for a
 * string whose type does not admit `null` and omits the argument otherwise, so
 * code emitted before the parameter existed keeps its reading.
 *
 * @evidence contracts/common.md#principled-implementation A file is passed through, a missing field is absent, and the text `null` becomes null only when the property's type admits null, which the emitter states with the `nullable` argument; otherwise it is the string.
 * @evidence contracts/common.md#clear-and-simple-design One conditional chain with a default that keeps older emitted code reading as before.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The default of true preserves a documented earlier reading and is not a hidden toggle.
 * @evidence contracts/common.md#meaningful-documentation The doc explains the nullable parameter and the issue.
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
