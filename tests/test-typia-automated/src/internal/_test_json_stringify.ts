import { prepareStringify } from "@typia/oracle/stringify";
import { TestStructure } from "@typia/template";

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
 * @evidence contracts/testing.md#behavioral-verification The prepared stringify check judges the actual text the native callback returns for the generated fixture; dropped members, changed values, malformed text or an edited input fail it.
 * @evidence contracts/testing.md#independent-expectations JSON.stringify of the fixture, taken before the callback, is the reference; no typia output or post-callback input supplies it.
 * @evidence contracts/testing.md#distinguishing-cases This helper owns the clean serialization case only; invalid-input behavior belongs to the validating stringify helpers, and the unit case for the check owns the negative callbacks.
 * @evidence contracts/testing.md#execution-ownership Executes through the generated test_json_stringify cases of test-typia-automated. The generated cases in this workspace call the helper from TestServant workers with native-transformed callbacks, so the assembly with the native producer is this suite's boundary, while the expectation policy executes in the plugin-free oracle unit.
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
