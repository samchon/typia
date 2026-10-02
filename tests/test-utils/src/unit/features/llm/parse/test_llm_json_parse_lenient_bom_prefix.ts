import { TestEquality } from "@typia/template/oracle-equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies a leading Unicode BOM does not hide JSON data.
 *
 * LLM response text may contain a leading BOM. The lenient public operation
 * must recover the following JSON object or array without changing its
 * contents.
 *
 * 1. Prefix an object, an array and a whitespace-separated object with U+FEFF.
 * 2. Assert success and compare each result to its literal JSON data.
 *
 * @evidence contracts/testing.md#behavioral-verification LlmJson.parse receives the actual BOM-prefixed strings and must return complete object or array data.
 * @evidence contracts/testing.md#independent-expectations Literal JSON values define the data following the transport prefix; this pins the existing public parser tolerance without deriving expected fields from its output.
 * @evidence contracts/testing.md#distinguishing-cases Object and array roots plus BOM followed by whitespace preserve three independent success/data pairs; unprefixed native JSON inputs are owned by standard_roundtrip.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit explicitly registers this exported function with node:test; it imports the plugin-free oracle and calls the utility directly without a transformed fixture, native artifact, SDK host or process protocol.
 */
export const test_llm_json_parse_lenient_bom_prefix = (): void => {
  // UTF-8 BOM prefix before JSON object
  const r1 = LlmJson.parse('\uFEFF{"name": "test"}');
  TestEquality.equals("bom-obj-success", r1.success, true);
  if (r1.success)
    TestEquality.equals("bom-obj-data", r1.data, { name: "test" });

  // BOM before array
  const r2 = LlmJson.parse("\uFEFF[1, 2, 3]");
  TestEquality.equals("bom-arr-success", r2.success, true);
  if (r2.success) TestEquality.equals("bom-arr-data", r2.data, [1, 2, 3]);

  // BOM with whitespace before JSON
  const r3 = LlmJson.parse('\uFEFF  {"key": "value"}');
  TestEquality.equals("bom-ws-success", r3.success, true);
  if (r3.success) TestEquality.equals("bom-ws-data", r3.data, { key: "value" });
};
