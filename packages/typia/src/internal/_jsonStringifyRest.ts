/**
 * Turn a stringified bracketed body into a comma-led continuation.
 *
 * The surrounding brackets are removed; an empty body, which is two characters,
 * gives the empty string.
 *
 * @evidence contracts/common.md#principled-implementation The argument is the stringified tail of an array or object body, that is brackets around zero or more elements, and the function turns it into a comma-led continuation by stripping the brackets, with an empty body (two characters) giving the empty string, so a fixed prefix of tuple elements can be followed by the rest elements.
 * @evidence contracts/common.md#clear-and-simple-design One expression over one string.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts It relies on the caller's bracketed input and does not parse it.
 * @evidence contracts/common.md#meaningful-documentation A comment states the expected input and the empty case.
 */
export const _jsonStringifyRest = (str: string): string => {
  return str.length === 2 ? "" : "," + str.substring(1, str.length - 1);
};
