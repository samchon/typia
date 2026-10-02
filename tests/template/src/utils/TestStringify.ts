import { TestEquality } from "./TestOracleEquality";

/**
 * Captures a JSON serialization expectation before invoking its producer.
 *
 * The expectation is the platform's own `JSON.stringify` of the input, taken
 * before the producer sees it, so a producer that edits its input cannot move
 * the reference it is judged against. The returned check requires the
 * producer's text to parse to data equal to that reference and the input to
 * serialize identically afterwards. This detects JSON-visible changes, while
 * ignored properties and mutations that are undone before checking remain
 * outside this oracle. A value that JSON omits (`undefined`, a function or a
 * `toJSON` that returns `undefined`) expects an `undefined` result, as the
 * platform serializer returns for it.
 *
 * @param input Value the producer will serialize.
 * @param message Failure message shared by every rejection of this scenario.
 *
 * @returns A check for the text, or `undefined`, that the producer returned.
 */
export const prepareStringify = (
  input: unknown,
  message: string,
): ((output: string | undefined) => void) => {
  const text: string | undefined = JSON.stringify(input);
  const expected: unknown = text === undefined ? undefined : JSON.parse(text);
  return (output) => {
    if (JSON.stringify(input) !== text) throw new Error(message);
    if (text === undefined) {
      if (output !== undefined) throw new Error(message);
      return;
    }
    if (typeof output !== "string") throw new Error(message);
    let parsed: unknown;
    try {
      parsed = JSON.parse(output);
    } catch {
      throw new Error(message);
    }
    TestEquality.equals(message, expected, parsed);
  };
};
