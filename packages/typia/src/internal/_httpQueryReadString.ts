/**
 * Reads one query value as a string.
 *
 * The text `"null"` spells `null` only where the property's type admits `null`;
 * elsewhere it is the string `"null"` (#2450). The emitter passes `false` for a
 * string whose type does not admit `null` and omits the argument otherwise, so
 * code emitted before the parameter existed keeps its reading.
 *
 * @evidence contracts/common.md#principled-implementation A missing value is absent and the text `null` becomes null only when the property's type admits null, which the emitter states with the `nullable` argument.
 * @evidence contracts/common.md#clear-and-simple-design One conditional with a default that keeps older emitted code reading as before.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The default is documented and not a hidden toggle.
 * @evidence contracts/common.md#meaningful-documentation The doc explains the nullable parameter and the issue.
 */
export const _httpQueryReadString = (
  str: string | null,
  nullable: boolean = true,
): string | null | undefined =>
  str === null ? undefined : nullable === true && str === "null" ? null : str;
