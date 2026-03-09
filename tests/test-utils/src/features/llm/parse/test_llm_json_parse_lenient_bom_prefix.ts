import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_bom_prefix = (): void => {
  // UTF-8 BOM prefix before JSON object
  const r1 = LlmJson.parse('\uFEFF{"name": "test"}');
  TestValidator.equals("bom-obj-success", r1.success, true);
  if (r1.success)
    TestValidator.equals("bom-obj-data", r1.data, { name: "test" });

  // BOM before array
  const r2 = LlmJson.parse("\uFEFF[1, 2, 3]");
  TestValidator.equals("bom-arr-success", r2.success, true);
  if (r2.success) TestValidator.equals("bom-arr-data", r2.data, [1, 2, 3]);

  // BOM with whitespace before JSON
  const r3 = LlmJson.parse('\uFEFF  {"key": "value"}');
  TestValidator.equals("bom-ws-success", r3.success, true);
  if (r3.success)
    TestValidator.equals("bom-ws-data", r3.data, { key: "value" });
};
