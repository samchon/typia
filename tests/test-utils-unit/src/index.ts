import test from "node:test";

import { test_llm_applicationEquals } from "./features/llm/application/test_llm_applicationEquals";
import { test_llm_application_mismatch } from "./features/llm/application/test_llm_application_mismatch";
import { test_llm_coerce_anyof_array_union } from "./features/llm/coerce/test_llm_coerce_anyof_array_union";
import { test_llm_coerce_anyof_discriminated_inner } from "./features/llm/coerce/test_llm_coerce_anyof_discriminated_inner";
import { test_llm_coerce_anyof_discriminated_second } from "./features/llm/coerce/test_llm_coerce_anyof_discriminated_second";
import { test_llm_coerce_anyof_discriminated_stringify } from "./features/llm/coerce/test_llm_coerce_anyof_discriminated_stringify";
import { test_llm_coerce_anyof_nested_coercion } from "./features/llm/coerce/test_llm_coerce_anyof_nested_coercion";
import { test_llm_coerce_anyof_nested_string } from "./features/llm/coerce/test_llm_coerce_anyof_nested_string";
import { test_llm_coerce_anyof_nullable } from "./features/llm/coerce/test_llm_coerce_anyof_nullable";
import { test_llm_coerce_anyof_nullable_null } from "./features/llm/coerce/test_llm_coerce_anyof_nullable_null";
import { test_llm_coerce_anyof_object_union } from "./features/llm/coerce/test_llm_coerce_anyof_object_union";
import { test_llm_coerce_anyof_with_string } from "./features/llm/coerce/test_llm_coerce_anyof_with_string";
import { test_llm_coerce_anyof_without_string } from "./features/llm/coerce/test_llm_coerce_anyof_without_string";
import { test_llm_coerce_boolean_string_anyof } from "./features/llm/coerce/test_llm_coerce_boolean_string_anyof";
import { test_llm_coerce_boolean_string_n_anyof } from "./features/llm/coerce/test_llm_coerce_boolean_string_n_anyof";
import { test_llm_coerce_boolean_string_no } from "./features/llm/coerce/test_llm_coerce_boolean_string_no";
import { test_llm_coerce_boolean_string_yes } from "./features/llm/coerce/test_llm_coerce_boolean_string_yes";
import { test_llm_coerce_double_stringify } from "./features/llm/coerce/test_llm_coerce_double_stringify";
import { test_llm_coerce_double_stringify_array } from "./features/llm/coerce/test_llm_coerce_double_stringify_array";
import { test_llm_coerce_five_levels_stringify } from "./features/llm/coerce/test_llm_coerce_five_levels_stringify";
import { test_llm_coerce_mixed_complex } from "./features/llm/coerce/test_llm_coerce_mixed_complex";
import { test_llm_coerce_mixed_deeply } from "./features/llm/coerce/test_llm_coerce_mixed_deeply";
import { test_llm_coerce_mixed_primitives } from "./features/llm/coerce/test_llm_coerce_mixed_primitives";
import { test_llm_coerce_mixed_recursive } from "./features/llm/coerce/test_llm_coerce_mixed_recursive";
import { test_llm_coerce_mixed_stringify_levels } from "./features/llm/coerce/test_llm_coerce_mixed_stringify_levels";
import { test_llm_coerce_nested_array_2d } from "./features/llm/coerce/test_llm_coerce_nested_array_2d";
import { test_llm_coerce_nested_array_3d } from "./features/llm/coerce/test_llm_coerce_nested_array_3d";
import { test_llm_coerce_nested_array_deep } from "./features/llm/coerce/test_llm_coerce_nested_array_deep";
import { test_llm_coerce_nested_array_objects } from "./features/llm/coerce/test_llm_coerce_nested_array_objects";
import { test_llm_coerce_nested_array_whole } from "./features/llm/coerce/test_llm_coerce_nested_array_whole";
import { test_llm_coerce_nested_object_all_levels } from "./features/llm/coerce/test_llm_coerce_nested_object_all_levels";
import { test_llm_coerce_nested_object_deep } from "./features/llm/coerce/test_llm_coerce_nested_object_deep";
import { test_llm_coerce_nested_object_triple } from "./features/llm/coerce/test_llm_coerce_nested_object_triple";
import { test_llm_coerce_quadruple_stringify } from "./features/llm/coerce/test_llm_coerce_quadruple_stringify";
import { test_llm_coerce_triple_stringify_array } from "./features/llm/coerce/test_llm_coerce_triple_stringify_array";
import { test_llm_coerce_triple_stringify_boolean } from "./features/llm/coerce/test_llm_coerce_triple_stringify_boolean";
import { test_llm_coerce_triple_stringify_null } from "./features/llm/coerce/test_llm_coerce_triple_stringify_null";
import { test_llm_coerce_triple_stringify_number } from "./features/llm/coerce/test_llm_coerce_triple_stringify_number";
import { test_llm_coerce_triple_stringify_object } from "./features/llm/coerce/test_llm_coerce_triple_stringify_object";
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
import { test_llm_schema_discriminator } from "./features/llm/schema/test_llm_schema_discriminator";
import { test_llm_schema_empty_required } from "./features/llm/schema/test_llm_schema_empty_required";
import { test_llm_schema_enum } from "./features/llm/schema/test_llm_schema_enum";
import { test_llm_schema_enum_reference } from "./features/llm/schema/test_llm_schema_enum_reference";
import { test_llm_schema_invert } from "./features/llm/schema/test_llm_schema_invert";
import { test_llm_schema_json_pointer_references } from "./features/llm/schema/test_llm_schema_json_pointer_references";
import { test_llm_schema_mismatch } from "./features/llm/schema/test_llm_schema_mismatch";
import { test_llm_schema_nullable } from "./features/llm/schema/test_llm_schema_nullable";
import { test_llm_schema_oneof } from "./features/llm/schema/test_llm_schema_oneof";
import { test_llm_schema_recursive_ref } from "./features/llm/schema/test_llm_schema_recursive_ref";
import { test_llm_schema_reference_escaped_description_of_name } from "./features/llm/schema/test_llm_schema_reference_escaped_description_of_name";
import { test_llm_schema_reference_escaped_description_of_namespace } from "./features/llm/schema/test_llm_schema_reference_escaped_description_of_namespace";
import { test_llm_schema_reference_escaped_description_of_property } from "./features/llm/schema/test_llm_schema_reference_escaped_description_of_property";
import { test_llm_schema_reserved_references } from "./features/llm/schema/test_llm_schema_reserved_references";
import { test_llm_schema_strict_additionalProperties } from "./features/llm/schema/test_llm_schema_strict_additionalProperties";
import { test_llm_schema_strict_description } from "./features/llm/schema/test_llm_schema_strict_description";
import { test_llm_schema_strict_numeric_default } from "./features/llm/schema/test_llm_schema_strict_numeric_default";
import { test_llm_schema_tuple } from "./features/llm/schema/test_llm_schema_tuple";
import { test_llm_type_checker_cover_any } from "./features/llm/schema/test_llm_type_checker_cover_any";
import { test_llm_type_checker_cover_array } from "./features/llm/schema/test_llm_type_checker_cover_array";
import { test_llm_stringify_array_last_element_error } from "./features/llm/stringify/test_llm_stringify_array_last_element_error";
import { test_llm_stringify_comma_insertion } from "./features/llm/stringify/test_llm_stringify_comma_insertion";
import { test_llm_stringify_complex_property_value } from "./features/llm/stringify/test_llm_stringify_complex_property_value";
import { test_llm_stringify_deep_indentation } from "./features/llm/stringify/test_llm_stringify_deep_indentation";
import { test_llm_stringify_deep_missing_parent } from "./features/llm/stringify/test_llm_stringify_deep_missing_parent";
import { test_llm_stringify_empty_array_self_error } from "./features/llm/stringify/test_llm_stringify_empty_array_self_error";
import { test_llm_stringify_empty_object_self_error } from "./features/llm/stringify/test_llm_stringify_empty_object_self_error";
import { test_llm_stringify_error_description } from "./features/llm/stringify/test_llm_stringify_error_description";
import { test_llm_stringify_has_errors_at_or_under } from "./features/llm/stringify/test_llm_stringify_has_errors_at_or_under";
import { test_llm_stringify_literal_separator } from "./features/llm/stringify/test_llm_stringify_literal_separator";
import { test_llm_stringify_long_string_values } from "./features/llm/stringify/test_llm_stringify_long_string_values";
import { test_llm_stringify_min_items_empty_array } from "./features/llm/stringify/test_llm_stringify_min_items_empty_array";
import { test_llm_stringify_missing_property_detection } from "./features/llm/stringify/test_llm_stringify_missing_property_detection";
import { test_llm_stringify_mixed_array_object_errors } from "./features/llm/stringify/test_llm_stringify_mixed_array_object_errors";
import { test_llm_stringify_multiple_errors_same_path } from "./features/llm/stringify/test_llm_stringify_multiple_errors_same_path";
import { test_llm_stringify_no_errors } from "./features/llm/stringify/test_llm_stringify_no_errors";
import { test_llm_stringify_nonempty_array_missing_elements } from "./features/llm/stringify/test_llm_stringify_nonempty_array_missing_elements";
import { test_llm_stringify_object_last_property_error } from "./features/llm/stringify/test_llm_stringify_object_last_property_error";
import { test_llm_stringify_prefix_false_positive } from "./features/llm/stringify/test_llm_stringify_prefix_false_positive";
import { test_llm_stringify_primitive_root } from "./features/llm/stringify/test_llm_stringify_primitive_root";
import { test_llm_stringify_root_array_error } from "./features/llm/stringify/test_llm_stringify_root_array_error";
import { test_llm_stringify_special_json_values } from "./features/llm/stringify/test_llm_stringify_special_json_values";
import { test_llm_stringify_tojson_array } from "./features/llm/stringify/test_llm_stringify_tojson_array";
import { test_llm_stringify_tojson_object } from "./features/llm/stringify/test_llm_stringify_tojson_object";
import { test_llm_stringify_tojson_primitive } from "./features/llm/stringify/test_llm_stringify_tojson_primitive";
import { test_llm_stringify_undefined_entries_with_errors } from "./features/llm/stringify/test_llm_stringify_undefined_entries_with_errors";
import { test_llm_stringify_undefined_in_array } from "./features/llm/stringify/test_llm_stringify_undefined_in_array";
import { test_llm_stringify_unmappable_errors } from "./features/llm/stringify/test_llm_stringify_unmappable_errors";
import { test_llm_stringify_value_containing_error_marker } from "./features/llm/stringify/test_llm_stringify_value_containing_error_marker";
import { test_naming_convention_camel } from "./features/naming/test_naming_convention_camel";
import { test_naming_convention_empty } from "./features/naming/test_naming_convention_empty";
import { test_naming_convention_kebab } from "./features/naming/test_naming_convention_kebab";
import { test_naming_convention_localize } from "./features/naming/test_naming_convention_localize";
import { test_naming_convention_pascal } from "./features/naming/test_naming_convention_pascal";
import { test_naming_convention_reserved } from "./features/naming/test_naming_convention_reserved";
import { test_naming_convention_snake } from "./features/naming/test_naming_convention_snake";
import { test_naming_convention_variable } from "./features/naming/test_naming_convention_variable";
import { test_boolean_predicate_equals_results } from "./features/oracle/test_boolean_predicate_equals_results";
import { test_boolean_predicate_is_prune_results } from "./features/oracle/test_boolean_predicate_is_prune_results";
import { test_boolean_predicate_is_results } from "./features/oracle/test_boolean_predicate_is_results";
import { test_structure_selection_declared_eligibility } from "./features/oracle/test_structure_selection_declared_eligibility";
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

for (const feature of [
  test_llm_stringify_array_last_element_error,
  test_llm_stringify_comma_insertion,
  test_llm_stringify_complex_property_value,
  test_llm_stringify_deep_indentation,
  test_llm_stringify_deep_missing_parent,
  test_llm_stringify_empty_array_self_error,
  test_llm_stringify_empty_object_self_error,
  test_llm_stringify_error_description,
  test_llm_stringify_has_errors_at_or_under,
  test_llm_stringify_long_string_values,
  test_llm_stringify_min_items_empty_array,
  test_llm_stringify_missing_property_detection,
  test_llm_stringify_mixed_array_object_errors,
  test_llm_stringify_multiple_errors_same_path,
  test_llm_stringify_nonempty_array_missing_elements,
  test_llm_stringify_no_errors,
  test_llm_stringify_object_last_property_error,
  test_llm_stringify_prefix_false_positive,
  test_llm_stringify_primitive_root,
  test_llm_stringify_root_array_error,
  test_llm_stringify_special_json_values,
  test_llm_stringify_tojson_array,
  test_llm_stringify_tojson_object,
  test_llm_stringify_tojson_primitive,
  test_llm_stringify_undefined_entries_with_errors,
  test_llm_stringify_undefined_in_array,
  test_llm_stringify_unmappable_errors,
  test_llm_stringify_value_containing_error_marker,
])
  test(feature.name, feature);

test(
  "test_llm_stringify_literal_separator",
  test_llm_stringify_literal_separator,
);

for (const feature of [
  test_llm_coerce_anyof_array_union,
  test_llm_coerce_anyof_discriminated_inner,
  test_llm_coerce_anyof_discriminated_second,
  test_llm_coerce_anyof_discriminated_stringify,
  test_llm_coerce_anyof_nested_coercion,
  test_llm_coerce_anyof_nested_string,
  test_llm_coerce_anyof_nullable,
  test_llm_coerce_anyof_nullable_null,
  test_llm_coerce_anyof_object_union,
  test_llm_coerce_anyof_with_string,
  test_llm_coerce_anyof_without_string,
  test_llm_coerce_boolean_string_anyof,
  test_llm_coerce_boolean_string_n_anyof,
  test_llm_coerce_boolean_string_no,
  test_llm_coerce_boolean_string_yes,
  test_llm_coerce_double_stringify,
  test_llm_coerce_double_stringify_array,
  test_llm_coerce_five_levels_stringify,
  test_llm_coerce_mixed_complex,
  test_llm_coerce_mixed_deeply,
  test_llm_coerce_mixed_primitives,
  test_llm_coerce_mixed_recursive,
  test_llm_coerce_mixed_stringify_levels,
  test_llm_coerce_nested_array_2d,
  test_llm_coerce_nested_array_3d,
  test_llm_coerce_nested_array_deep,
  test_llm_coerce_nested_array_objects,
  test_llm_coerce_nested_array_whole,
  test_llm_coerce_nested_object_all_levels,
  test_llm_coerce_nested_object_deep,
  test_llm_coerce_nested_object_triple,
  test_llm_coerce_quadruple_stringify,
  test_llm_coerce_triple_stringify_array,
  test_llm_coerce_triple_stringify_boolean,
  test_llm_coerce_triple_stringify_null,
  test_llm_coerce_triple_stringify_number,
  test_llm_coerce_triple_stringify_object,
])
  test(feature.name, feature);

for (const feature of [
  test_llm_schema_empty_required,
  test_llm_schema_enum_reference,
  test_llm_schema_json_pointer_references,
  test_llm_schema_recursive_ref,
  test_llm_schema_reserved_references,
  test_llm_schema_strict_numeric_default,
])
  test(feature.name, feature);

for (const feature of [
  test_llm_schema_enum,
  test_llm_schema_nullable,
  test_llm_schema_tuple,
  test_llm_schema_strict_additionalProperties,
  test_llm_type_checker_cover_array,
  test_llm_type_checker_cover_any,
])
  test(feature.name, feature);

for (const feature of [
  test_llm_schema_oneof,
  test_llm_schema_mismatch,
  test_llm_schema_strict_description,
  test_llm_schema_reference_escaped_description_of_property,
  test_llm_schema_reference_escaped_description_of_namespace,
  test_llm_schema_reference_escaped_description_of_name,
  test_llm_schema_invert,
])
  test(feature.name, feature);

test(test_llm_schema_discriminator.name, test_llm_schema_discriminator);

test(test_llm_applicationEquals.name, test_llm_applicationEquals);

test(test_llm_application_mismatch.name, test_llm_application_mismatch);

test(test_boolean_predicate_is_results.name, test_boolean_predicate_is_results);

test(
  test_boolean_predicate_equals_results.name,
  test_boolean_predicate_equals_results,
);

test(
  test_boolean_predicate_is_prune_results.name,
  test_boolean_predicate_is_prune_results,
);

test(
  test_structure_selection_declared_eligibility.name,
  test_structure_selection_declared_eligibility,
);
