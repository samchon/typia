import test from "node:test";

import { test_llm_json_parse_lenient_bom_prefix } from "./features/llm/parse/test_llm_json_parse_lenient_bom_prefix";
import { test_llm_json_parse_lenient_boolean_coercion } from "./features/llm/parse/test_llm_json_parse_lenient_boolean_coercion";
import { test_llm_json_parse_lenient_comment_only_input } from "./features/llm/parse/test_llm_json_parse_lenient_comment_only_input";
import { test_llm_json_parse_lenient_duplicate_keys } from "./features/llm/parse/test_llm_json_parse_lenient_duplicate_keys";
import { test_llm_json_parse_lenient_empty_containers } from "./features/llm/parse/test_llm_json_parse_lenient_empty_containers";
import { test_llm_json_parse_lenient_primitive_number } from "./features/llm/parse/test_llm_json_parse_lenient_primitive_number";
import { test_llm_json_parse_lenient_primitive_string } from "./features/llm/parse/test_llm_json_parse_lenient_primitive_string";
import { test_llm_json_parse_lenient_standard_roundtrip } from "./features/llm/parse/test_llm_json_parse_lenient_standard_roundtrip";
import { test_naming_convention_camel } from "./features/naming/test_naming_convention_camel";
import { test_naming_convention_empty } from "./features/naming/test_naming_convention_empty";
import { test_naming_convention_kebab } from "./features/naming/test_naming_convention_kebab";
import { test_naming_convention_localize } from "./features/naming/test_naming_convention_localize";
import { test_naming_convention_pascal } from "./features/naming/test_naming_convention_pascal";
import { test_naming_convention_reserved } from "./features/naming/test_naming_convention_reserved";
import { test_naming_convention_snake } from "./features/naming/test_naming_convention_snake";
import { test_naming_convention_variable } from "./features/naming/test_naming_convention_variable";
import { test_dedent_interpolation } from "./features/test_dedent_interpolation";
import { test_equality_async_result_refusal } from "./features/test_equality_async_result_refusal";
import { test_equality_oracle } from "./features/test_equality_oracle";
import { test_map_util_take } from "./features/test_map_util_take";
import { test_singleton_lifecycle } from "./features/test_singleton_lifecycle";
import { test_total_comparison_shape } from "./features/test_total_comparison_shape";

test("MapUtil.take preserves map membership", test_map_util_take);
test("dedent preserves opaque interpolations", test_dedent_interpolation);
test("Singleton retains the first returned value", test_singleton_lifecycle);
test(
  "Synchronous exception probes refuse async results",
  test_equality_async_result_refusal,
);
test("Shared equality oracles distinguish value kinds", test_equality_oracle);
test(
  "Total comparisons retain every report field",
  test_total_comparison_shape,
);

for (const feature of [
  test_naming_convention_camel,
  test_naming_convention_empty,
  test_naming_convention_kebab,
  test_naming_convention_localize,
  test_naming_convention_pascal,
  test_naming_convention_reserved,
  test_naming_convention_snake,
  test_naming_convention_variable,
])
  test(feature.name, feature);

for (const feature of [
  test_llm_json_parse_lenient_empty_containers,
  test_llm_json_parse_lenient_primitive_number,
  test_llm_json_parse_lenient_primitive_string,
  test_llm_json_parse_lenient_standard_roundtrip,
  test_llm_json_parse_lenient_duplicate_keys,
  test_llm_json_parse_lenient_bom_prefix,
  test_llm_json_parse_lenient_comment_only_input,
  test_llm_json_parse_lenient_boolean_coercion,
])
  test(feature.name, feature);
