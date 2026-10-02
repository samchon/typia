/**
 * Converts fixture fields into lower-case header names and scalar/array wire
 * representations.
 *
 * @evidence contracts/testing.md#behavioral-verification This encoder prepares transport and makes no verdict. The headers, assertHeaders, isHeaders and validateHeaders helpers execute their actual callback using its record, retaining clean decoded-content and their respective spoiler assertions.
 * @evidence contracts/testing.md#independent-expectations Authored fixture values establish decoded expectations independently of callback output. Lower-case names and cookie/set-cookie separators are explicit transport preparation; successful round trips alone do not independently prove all raw HTTP header spellings.
 * @evidence contracts/testing.md#distinguishing-cases Undefined and empty-array fields are omitted; set-cookie retains separate strings, cookie arrays join with semicolons, ordinary arrays with commas, and scalars stringify. HEADERS eligibility and fixture contents determine the executed combinations; this helper supplies no malformed transport matrix.
 * @evidence contracts/testing.md#execution-ownership Generated direct/factory header-family entries invoke the named internal helper, which owns each call here and the result assertions. The array map callback stringifies cookie values without retaining shared state or reporting a test independently.
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
