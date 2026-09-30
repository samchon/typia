import test from "node:test";

import { test_llm_json_parse_lenient_bom_prefix } from "./features/llm/parse/test_llm_json_parse_lenient_bom_prefix";
import { test_llm_json_parse_lenient_boolean_coercion } from "./features/llm/parse/test_llm_json_parse_lenient_boolean_coercion";
import { test_llm_json_parse_lenient_comma_optional } from "./features/llm/parse/test_llm_json_parse_lenient_comma_optional";
import { test_llm_json_parse_lenient_comment_only_input } from "./features/llm/parse/test_llm_json_parse_lenient_comment_only_input";
import { test_llm_json_parse_lenient_comments } from "./features/llm/parse/test_llm_json_parse_lenient_comments";
import { test_llm_json_parse_lenient_comments_edge } from "./features/llm/parse/test_llm_json_parse_lenient_comments_edge";
import { test_llm_json_parse_lenient_consecutive_commas } from "./features/llm/parse/test_llm_json_parse_lenient_consecutive_commas";
import { test_llm_json_parse_lenient_deep_nesting_arrays } from "./features/llm/parse/test_llm_json_parse_lenient_deep_nesting_arrays";
import { test_llm_json_parse_lenient_duplicate_keys } from "./features/llm/parse/test_llm_json_parse_lenient_duplicate_keys";
import { test_llm_json_parse_lenient_empty_containers } from "./features/llm/parse/test_llm_json_parse_lenient_empty_containers";
import { test_llm_json_parse_lenient_error_output_format } from "./features/llm/parse/test_llm_json_parse_lenient_error_output_format";
import { test_llm_json_parse_lenient_escape_in_lenient_path } from "./features/llm/parse/test_llm_json_parse_lenient_escape_in_lenient_path";
import { test_llm_json_parse_lenient_escape_slash_sequences } from "./features/llm/parse/test_llm_json_parse_lenient_escape_slash_sequences";
import { test_llm_json_parse_lenient_escape_standard_path } from "./features/llm/parse/test_llm_json_parse_lenient_escape_standard_path";
import { test_llm_json_parse_lenient_findJsonStart_comment_skip } from "./features/llm/parse/test_llm_json_parse_lenient_findJsonStart_comment_skip";
import { test_llm_json_parse_lenient_findJsonStart_junk_prefix } from "./features/llm/parse/test_llm_json_parse_lenient_findJsonStart_junk_prefix";
import { test_llm_json_parse_lenient_findJsonStart_junk_strings } from "./features/llm/parse/test_llm_json_parse_lenient_findJsonStart_junk_strings";
import { test_llm_json_parse_lenient_identifier_keywords } from "./features/llm/parse/test_llm_json_parse_lenient_identifier_keywords";
import { test_llm_json_parse_lenient_incomplete_keyword_context } from "./features/llm/parse/test_llm_json_parse_lenient_incomplete_keyword_context";
import { test_llm_json_parse_lenient_incomplete_keyword_followed } from "./features/llm/parse/test_llm_json_parse_lenient_incomplete_keyword_followed";
import { test_llm_json_parse_lenient_invalid_object_key } from "./features/llm/parse/test_llm_json_parse_lenient_invalid_object_key";
import { test_llm_json_parse_lenient_invalid_value } from "./features/llm/parse/test_llm_json_parse_lenient_invalid_value";
import { test_llm_json_parse_lenient_llm_streaming } from "./features/llm/parse/test_llm_json_parse_lenient_llm_streaming";
import { test_llm_json_parse_lenient_markdown_advanced } from "./features/llm/parse/test_llm_json_parse_lenient_markdown_advanced";
import { test_llm_json_parse_lenient_markdown_block } from "./features/llm/parse/test_llm_json_parse_lenient_markdown_block";
import { test_llm_json_parse_lenient_markdown_case_insensitive } from "./features/llm/parse/test_llm_json_parse_lenient_markdown_case_insensitive";
import { test_llm_json_parse_lenient_markdown_edge } from "./features/llm/parse/test_llm_json_parse_lenient_markdown_edge";
import { test_llm_json_parse_lenient_markdown_primitive } from "./features/llm/parse/test_llm_json_parse_lenient_markdown_primitive";
import { test_llm_json_parse_lenient_max_depth } from "./features/llm/parse/test_llm_json_parse_lenient_max_depth";
import { test_llm_json_parse_lenient_mixed_types_array } from "./features/llm/parse/test_llm_json_parse_lenient_mixed_types_array";
import { test_llm_json_parse_lenient_mixed_unclosed_deep } from "./features/llm/parse/test_llm_json_parse_lenient_mixed_unclosed_deep";
import { test_llm_json_parse_lenient_null_after_length2 } from "./features/llm/parse/test_llm_json_parse_lenient_null_after_length2";
import { test_llm_json_parse_lenient_number_edge_cases } from "./features/llm/parse/test_llm_json_parse_lenient_number_edge_cases";
import { test_llm_json_parse_lenient_number_format_nonstandard } from "./features/llm/parse/test_llm_json_parse_lenient_number_format_nonstandard";
import { test_llm_json_parse_lenient_number_in_lenient_path } from "./features/llm/parse/test_llm_json_parse_lenient_number_in_lenient_path";
import { test_llm_json_parse_lenient_number_incomplete } from "./features/llm/parse/test_llm_json_parse_lenient_number_incomplete";
import { test_llm_json_parse_lenient_object_mismatched_brackets } from "./features/llm/parse/test_llm_json_parse_lenient_object_mismatched_brackets";
import { test_llm_json_parse_lenient_object_syntax_error } from "./features/llm/parse/test_llm_json_parse_lenient_object_syntax_error";
import { test_llm_json_parse_lenient_object_value_missing } from "./features/llm/parse/test_llm_json_parse_lenient_object_value_missing";
import { test_llm_json_parse_lenient_primitive_number } from "./features/llm/parse/test_llm_json_parse_lenient_primitive_number";
import { test_llm_json_parse_lenient_primitive_precedence } from "./features/llm/parse/test_llm_json_parse_lenient_primitive_precedence";
import { test_llm_json_parse_lenient_primitive_string } from "./features/llm/parse/test_llm_json_parse_lenient_primitive_string";
import { test_llm_json_parse_lenient_single_char_inputs } from "./features/llm/parse/test_llm_json_parse_lenient_single_char_inputs";
import { test_llm_json_parse_lenient_special_keys } from "./features/llm/parse/test_llm_json_parse_lenient_special_keys";
import { test_llm_json_parse_lenient_stall_guard_invalid_token } from "./features/llm/parse/test_llm_json_parse_lenient_stall_guard_invalid_token";
import { test_llm_json_parse_lenient_standard_roundtrip } from "./features/llm/parse/test_llm_json_parse_lenient_standard_roundtrip";
import { test_llm_json_parse_lenient_string_boundary_escapes } from "./features/llm/parse/test_llm_json_parse_lenient_string_boundary_escapes";
import { test_llm_json_parse_lenient_string_consecutive_escapes } from "./features/llm/parse/test_llm_json_parse_lenient_string_consecutive_escapes";
import { test_llm_json_parse_lenient_string_control_chars } from "./features/llm/parse/test_llm_json_parse_lenient_string_control_chars";
import { test_llm_json_parse_lenient_string_long } from "./features/llm/parse/test_llm_json_parse_lenient_string_long";
import { test_llm_json_parse_lenient_string_multi_level_escape } from "./features/llm/parse/test_llm_json_parse_lenient_string_multi_level_escape";
import { test_llm_json_parse_lenient_string_nested_json } from "./features/llm/parse/test_llm_json_parse_lenient_string_nested_json";
import { test_llm_json_parse_lenient_string_only_escapes } from "./features/llm/parse/test_llm_json_parse_lenient_string_only_escapes";
import { test_llm_json_parse_lenient_string_special_chars } from "./features/llm/parse/test_llm_json_parse_lenient_string_special_chars";
import { test_llm_json_parse_lenient_string_with_json_delimiters } from "./features/llm/parse/test_llm_json_parse_lenient_string_with_json_delimiters";
import { test_llm_json_parse_lenient_surrogate_pair_boundary } from "./features/llm/parse/test_llm_json_parse_lenient_surrogate_pair_boundary";
import { test_llm_json_parse_lenient_trailing_junk } from "./features/llm/parse/test_llm_json_parse_lenient_trailing_junk";
import { test_llm_json_parse_lenient_truncation_array_systematic } from "./features/llm/parse/test_llm_json_parse_lenient_truncation_array_systematic";
import { test_llm_json_parse_lenient_truncation_object_systematic } from "./features/llm/parse/test_llm_json_parse_lenient_truncation_object_systematic";
import { test_llm_json_parse_lenient_unicode_adjacent } from "./features/llm/parse/test_llm_json_parse_lenient_unicode_adjacent";
import { test_llm_json_parse_lenient_unicode_multiple_surrogates } from "./features/llm/parse/test_llm_json_parse_lenient_unicode_multiple_surrogates";
import { test_llm_json_parse_lenient_unicode_truncation_systematic } from "./features/llm/parse/test_llm_json_parse_lenient_unicode_truncation_systematic";
import { test_llm_json_parse_lenient_unquoted_keys } from "./features/llm/parse/test_llm_json_parse_lenient_unquoted_keys";
import { test_llm_json_parse_lenient_unquoted_keys_edge } from "./features/llm/parse/test_llm_json_parse_lenient_unquoted_keys_edge";
import { test_llm_json_parse_lenient_unquoted_keys_single_char } from "./features/llm/parse/test_llm_json_parse_lenient_unquoted_keys_single_char";
import { test_llm_json_parse_lenient_whitespace_variations } from "./features/llm/parse/test_llm_json_parse_lenient_whitespace_variations";
import { test_llm_json_parse_unicode_string_boundary } from "./features/llm/parse/test_llm_json_parse_unicode_string_boundary";
import { test_llm_json_prototype_safe_objects } from "./features/llm/parse/test_llm_json_prototype_safe_objects";
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

for (const feature of [
  test_llm_json_parse_lenient_comments,
  test_llm_json_parse_lenient_comments_edge,
  test_llm_json_parse_lenient_comma_optional,
  test_llm_json_parse_lenient_consecutive_commas,
  test_llm_json_parse_lenient_whitespace_variations,
  test_llm_json_parse_lenient_unquoted_keys,
  test_llm_json_parse_lenient_unquoted_keys_single_char,
  test_llm_json_parse_lenient_unquoted_keys_edge,
])
  test(feature.name, feature);

for (const feature of [
  test_llm_json_parse_lenient_deep_nesting_arrays,
  test_llm_json_parse_lenient_error_output_format,
  test_llm_json_parse_lenient_escape_in_lenient_path,
  test_llm_json_parse_lenient_escape_slash_sequences,
  test_llm_json_parse_lenient_escape_standard_path,
  test_llm_json_parse_lenient_findJsonStart_comment_skip,
  test_llm_json_parse_lenient_findJsonStart_junk_prefix,
  test_llm_json_parse_lenient_findJsonStart_junk_strings,
  test_llm_json_parse_lenient_identifier_keywords,
  test_llm_json_parse_lenient_incomplete_keyword_context,
  test_llm_json_parse_lenient_incomplete_keyword_followed,
  test_llm_json_parse_lenient_invalid_object_key,
  test_llm_json_parse_lenient_invalid_value,
  test_llm_json_parse_lenient_llm_streaming,
  test_llm_json_parse_lenient_markdown_advanced,
  test_llm_json_parse_lenient_markdown_block,
  test_llm_json_parse_lenient_markdown_case_insensitive,
  test_llm_json_parse_lenient_markdown_edge,
  test_llm_json_parse_lenient_markdown_primitive,
  test_llm_json_parse_lenient_max_depth,
  test_llm_json_parse_lenient_mixed_types_array,
  test_llm_json_parse_lenient_mixed_unclosed_deep,
  test_llm_json_parse_lenient_null_after_length2,
  test_llm_json_parse_lenient_number_edge_cases,
  test_llm_json_parse_lenient_number_format_nonstandard,
  test_llm_json_parse_lenient_number_in_lenient_path,
  test_llm_json_parse_lenient_number_incomplete,
  test_llm_json_parse_lenient_object_mismatched_brackets,
  test_llm_json_parse_lenient_object_syntax_error,
  test_llm_json_parse_lenient_object_value_missing,
  test_llm_json_parse_lenient_primitive_precedence,
  test_llm_json_parse_lenient_single_char_inputs,
  test_llm_json_parse_lenient_special_keys,
  test_llm_json_parse_lenient_stall_guard_invalid_token,
  test_llm_json_parse_lenient_string_boundary_escapes,
  test_llm_json_parse_lenient_string_consecutive_escapes,
  test_llm_json_parse_lenient_string_control_chars,
  test_llm_json_parse_lenient_string_long,
  test_llm_json_parse_lenient_string_multi_level_escape,
  test_llm_json_parse_lenient_string_nested_json,
  test_llm_json_parse_lenient_string_only_escapes,
  test_llm_json_parse_lenient_string_special_chars,
  test_llm_json_parse_lenient_string_with_json_delimiters,
  test_llm_json_parse_lenient_surrogate_pair_boundary,
  test_llm_json_parse_lenient_trailing_junk,
  test_llm_json_parse_lenient_truncation_array_systematic,
  test_llm_json_parse_lenient_truncation_object_systematic,
  test_llm_json_parse_lenient_unicode_adjacent,
  test_llm_json_parse_lenient_unicode_multiple_surrogates,
  test_llm_json_parse_lenient_unicode_truncation_systematic,
  test_llm_json_prototype_safe_objects,
])
  test(feature.name, feature);

test(
  "test_llm_json_parse_unicode_string_boundary",
  test_llm_json_parse_unicode_string_boundary,
);
