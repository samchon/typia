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
 * @evidence contracts/testing.md#behavioral-verification The prepared check judges actual callback text against the fixture's pre-call platform JSON projection. Dropped/added/changed JSON-visible data and malformed text fail, as does a changed post-call JSON representation of the input; ignored-property mutations and changes undone before checking are not detected.
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
