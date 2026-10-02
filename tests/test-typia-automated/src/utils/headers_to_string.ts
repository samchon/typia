/**
 * Converts fixture fields into lower-case header names and scalar/array wire
 * representations.
 *
 * @evidence contracts/common.md#principled-implementation Converts fixture fields into lower-case header names and scalar/array wire representations.
 * @evidence contracts/common.md#clear-and-simple-design One entry loop omits undefined/empty arrays, preserves set-cookie as separate strings and joins cookie with semicolons versus ordinary arrays with commas.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts These separators are explicit fixture transport policy. This helper does not establish every HTTP parser spelling or network framing rule.
 * @evidence contracts/common.md#meaningful-documentation The native description makes separators, repeated-cookie behavior and omission visible.
 */
export const headers_to_string = (
  input: Record<string, any>,
): Record<string, string | string[] | undefined> => {
  const encoded: Record<string, string | string[] | undefined> = {};
  for (const [key, value] of Object.entries(input)) {
    const lower: string = key.toLowerCase();
    if (value === undefined) continue;
    else if (Array.isArray(value)) {
      if (value.length === 0) continue;
      else if (lower === "set-cookie")
        encoded[lower] = value.map((cookie) => String(cookie));
      else encoded[lower] = value.join(lower === "cookie" ? "; " : ", ");
    } else encoded[lower] = String(value);
  }
  return encoded;
};
