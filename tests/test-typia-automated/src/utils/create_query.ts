/**
 * Encodes a flat fixture as URLSearchParams with repeated keys for array values
 * and omitted undefined fields.
 *
 * @evidence contracts/testing.md#behavioral-verification This preparation helper owns no decoder assertion. _test_http_query passes its returned parameters to the actual callback and compares decoded data to the fixture projection.
 * @evidence contracts/testing.md#independent-expectations URLSearchParams owns escaping and repeated-key representation; String supplies fixture scalar encoding. The original fixture supplies expected decoded values rather than another typia decoder, but round-trip assertions alone do not independently certify every raw wire spelling.
 * @evidence contracts/testing.md#distinguishing-cases The loop omits undefined fields, repeats each array element and sets one scalar value; empty arrays produce no entry. Enrolled QUERY fixture shapes determine which branches execute in a generated case; malformed query inputs are not created here.
 * @evidence contracts/testing.md#execution-ownership Generated direct/factory http.query exports call _test_http_query, which owns this encoder invocation and its decoded-content assertion. This helper is not independently registered as a test.
 */
export const create_query = (input: Record<string, any>): URLSearchParams => {
  const encoded: URLSearchParams = new URLSearchParams();
  for (const [key, value] of Object.entries(input))
    if (value === undefined) continue;
    else if (Array.isArray(value))
      for (const elem of value) encoded.append(key, String(elem));
    else encoded.set(key, String(value));
  return encoded;
};
