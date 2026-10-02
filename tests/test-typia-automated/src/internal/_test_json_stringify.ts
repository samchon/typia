import { TestStructure } from "@typia/template";
import { prepareStringify } from "@typia/template/stringify";

/**
 * Verifies a native typia.json.stringify callback serializes a fixture
 * faithfully.
 *
 * The expected data is captured from the platform serializer before the
 * callback runs, so a serializer that edits its input cannot move the reference
 * it is judged against.
 *
 * 1. Generate the fixture value and prepare the stringify check.
 * 2. Run the native callback and require its text to parse to the reference data.
 *
 * @evidence contracts/common.md#principled-implementation prepareStringify captures the platform JSON reference and source graph before the supplied callback; its shared check judges the returned text and source preservation against that fixed pre-call observation.
 * @evidence contracts/common.md#clear-and-simple-design This wrapper owns one fixture and one callback invocation; the portable preparation/check owner owns snapshots, parsed content comparison and input-preservation policy.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The actual serializer output is checked without deriving expectations from that output or a post-call mutated input. The shared helper's finite ordinary-data and deterministic conversion premises remain, rather than a claim of arbitrary getter behavior.
 * @evidence contracts/common.md#meaningful-documentation The comment explains why the reference precedes invocation and separates clean serialization from invalid-input helpers and plugin-free oracle units.
 * @evidence contracts/testing.md#behavioral-verification The prepared stringify check judges the actual text the native callback returns for the generated fixture; dropped members, changed values, malformed text or an edited input fail it.
 * @evidence contracts/testing.md#independent-expectations JSON.stringify of the fixture, taken before the callback, is the reference; no typia output or post-callback input supplies it.
 * @evidence contracts/testing.md#distinguishing-cases This helper owns the clean serialization case only; invalid-input behavior belongs to the validating stringify helpers, and the unit case for the check owns the negative callbacks.
 * @evidence contracts/testing.md#execution-ownership Executes through the generated test_json_stringify cases of test-typia-automated. Native cases in this workspace call the helper from the shared TestServant worker with native-transformed callbacks, so the assembly with the native producer is this suite's boundary, while the expectation policy executes in the plugin-free test-utils unit population.
 */
export const _test_json_stringify =
  (name: string) =>
  <T>(factory: TestStructure<T>) =>
  (stringify: (input: T) => string): void => {
    const data: T = factory.generate();
    const check = prepareStringify(
      data,
      `Bug on typia.json.stringify(): failed to understand the ${name} type.`,
    );
    check(stringify(data));
  };
