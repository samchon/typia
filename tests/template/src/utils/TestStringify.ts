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
 *
 * @evidence contracts/common.md#principled-implementation The reference is taken from the platform serializer before the callback runs, so the expectation depends only on the original input. Parsing the produced text and comparing it structurally with the parsed reference separates data equality from key order and whitespace; re-serializing the input afterwards detects changes to its JSON representation, not all graph or identity mutations. The premise is that JSON.stringify is the specification of the serialization the producer must match.
 * @evidence contracts/common.md#clear-and-simple-design One capture and one returned check own the whole scenario; native stringify helpers only decide when to prepare and when to check, so the expectation policy exists in one place.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The check never reads a fixture name or the producer's output to choose its expectation, and it neither patches JSON nor special-cases a type; the undefined case follows the platform serializer's own result.
 * @evidence contracts/common.md#meaningful-documentation The comment states why the reference precedes the callback, which values expect an undefined result and what the returned check enforces, so a native helper's caller can use it without reading the implementation.
 * @evidence contracts/testing.md#behavioral-verification The returned check rejects text that parses to different data, unparseable text, an input whose JSON representation was changed by the producer, an unexpected undefined result and text where undefined was expected; a correct serialization passes.
 * @evidence contracts/testing.md#independent-expectations JSON.stringify of the authored input, evaluated before the callback, is the reference; no typia output or post-callback input supplies it. Structural comparison reuses the symmetric data oracle rather than the producer's own comparison.
 * @evidence contracts/testing.md#distinguishing-cases The unit case supplies a faithful serializer as the control and a mutating callback, a dropped member, an added member, stale text, malformed text and omitted-value inputs as one-axis negatives; native cases contribute their actual type-to-producer bindings.
 * @evidence contracts/testing.md#execution-ownership Plugin-free units call the maintained check directly with authored callbacks, and the native stringify helpers call the same check around their producers; preparing the expectation starts no native host.
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
