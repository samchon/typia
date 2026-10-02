import test from "node:test";

import { test_automated_primitive_equal_to_oracle } from "./features/automated_oracles/test_automated_primitive_equal_to_oracle";
import { test_automated_resolved_equal_to_async_oracle } from "./features/automated_oracles/test_automated_resolved_equal_to_async_oracle";
import { test_automated_resolved_equal_to_oracle } from "./features/automated_oracles/test_automated_resolved_equal_to_oracle";
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
import { test_http_llm_application } from "./features/llm/http/test_http_llm_application";
import { test_http_llm_application_function_name_fallback } from "./features/llm/http/test_http_llm_application_function_name_fallback";
import { test_http_llm_application_function_name_length } from "./features/llm/http/test_http_llm_application_function_name_length";
import { test_http_llm_application_human } from "./features/llm/http/test_http_llm_application_human";
import { test_http_llm_application_version } from "./features/llm/http/test_http_llm_application_version";
import { test_http_llm_function_deprecated } from "./features/llm/http/test_http_llm_function_deprecated";
import { test_http_llm_function_multipart } from "./features/llm/http/test_http_llm_function_multipart";
import { test_http_llm_function_tags } from "./features/llm/http/test_http_llm_function_tags";
import { test_llm_invert_description_tag_prose_not_promoted } from "./features/llm/invert/test_llm_invert_description_tag_prose_not_promoted";
import { test_llm_invert_empty_required } from "./features/llm/invert/test_llm_invert_empty_required";
import { test_llm_invert_non_enumerable_definition } from "./features/llm/invert/test_llm_invert_non_enumerable_definition";
import { test_llm_invert_openapi_component_names } from "./features/llm/invert/test_llm_invert_openapi_component_names";
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
import { test_llm_type_checker_cover_number_integer } from "./features/llm/schema/test_llm_type_checker_cover_number_integer";
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
import { test_llm_invert_oracle_references } from "./features/llm/test_llm_invert_oracle_references";
import { test_http_migrate_body_media_contract } from "./features/migrate/test_http_migrate_body_media_contract";
import { test_http_migrate_component_name_collision } from "./features/migrate/test_http_migrate_component_name_collision";
import { test_http_migrate_cookie_key_collision } from "./features/migrate/test_http_migrate_cookie_key_collision";
import { test_http_migrate_cookie_serialization_contract } from "./features/migrate/test_http_migrate_cookie_serialization_contract";
import { test_http_migrate_empty_required } from "./features/migrate/test_http_migrate_empty_required";
import { test_http_migrate_parameter_serialization_edges } from "./features/migrate/test_http_migrate_parameter_serialization_edges";
import { test_http_migrate_path_character_names } from "./features/migrate/test_http_migrate_path_character_names";
import { test_http_migrate_path_parameter_names } from "./features/migrate/test_http_migrate_path_parameter_names";
import { test_http_migrate_prototype_safe_components } from "./features/migrate/test_http_migrate_prototype_safe_components";
import { test_http_migrate_querystring_contract } from "./features/migrate/test_http_migrate_querystring_contract";
import { test_http_migrate_remigration_keeps_names } from "./features/migrate/test_http_migrate_remigration_keeps_names";
import { test_http_migrate_request_contract } from "./features/migrate/test_http_migrate_request_contract";
import { test_http_migrate_response_contract } from "./features/migrate/test_http_migrate_response_contract";
import { test_http_migrate_route_accessor } from "./features/migrate/test_http_migrate_route_accessor";
import { test_http_migrate_route_accessor_identifier } from "./features/migrate/test_http_migrate_route_accessor_identifier";
import { test_http_migrate_route_accessor_reserved } from "./features/migrate/test_http_migrate_route_accessor_reserved";
import { test_http_migrate_route_accessor_slice } from "./features/migrate/test_http_migrate_route_accessor_slice";
import { test_http_migrate_route_comment } from "./features/migrate/test_http_migrate_route_comment";
import { test_http_migrate_route_parameter_key_escape } from "./features/migrate/test_http_migrate_route_parameter_key_escape";
import { test_http_migrate_route_plugin } from "./features/migrate/test_http_migrate_route_plugin";
import { test_http_migrate_route_return_type_void } from "./features/migrate/test_http_migrate_route_return_type_void";
import { test_http_migrate_route_success_null } from "./features/migrate/test_http_migrate_route_success_null";
import { test_http_migrate_webhook_path_collision } from "./features/migrate/test_http_migrate_webhook_path_collision";
import { test_naming_convention_camel } from "./features/naming/test_naming_convention_camel";
import { test_naming_convention_empty } from "./features/naming/test_naming_convention_empty";
import { test_naming_convention_kebab } from "./features/naming/test_naming_convention_kebab";
import { test_naming_convention_localize } from "./features/naming/test_naming_convention_localize";
import { test_naming_convention_pascal } from "./features/naming/test_naming_convention_pascal";
import { test_naming_convention_reserved } from "./features/naming/test_naming_convention_reserved";
import { test_naming_convention_snake } from "./features/naming/test_naming_convention_snake";
import { test_naming_convention_variable } from "./features/naming/test_naming_convention_variable";
import { test_document_downgrade_v20_unrepresentable } from "./features/openapi/test_document_downgrade_v20_unrepresentable";
import { test_document_references_resolve } from "./features/openapi/test_document_references_resolve";
import { test_document_roundtrip_v20_form_arrays } from "./features/openapi/test_document_roundtrip_v20_form_arrays";
import { test_document_roundtrip_v20_form_data } from "./features/openapi/test_document_roundtrip_v20_form_data";
import { test_document_roundtrip_v20_server_media } from "./features/openapi/test_document_roundtrip_v20_server_media";
import { test_document_roundtrip_v20_urlencoded_file } from "./features/openapi/test_document_roundtrip_v20_urlencoded_file";
import { test_document_roundtrip_v31_media_type_examples } from "./features/openapi/test_document_roundtrip_v31_media_type_examples";
import { test_json_fixture_population } from "./features/openapi/test_json_fixture_population";
import { test_json_schema_byte_content_encoding } from "./features/openapi/test_json_schema_byte_content_encoding";
import { test_json_schema_downgrade_v20_enum } from "./features/openapi/test_json_schema_downgrade_v20_enum";
import { test_json_schema_downgrade_v20_example } from "./features/openapi/test_json_schema_downgrade_v20_example";
import { test_json_schema_downgrade_v20_nullable } from "./features/openapi/test_json_schema_downgrade_v20_nullable";
import { test_json_schema_downgrade_v30_enum } from "./features/openapi/test_json_schema_downgrade_v30_enum";
import { test_json_schema_downgrade_v30_example } from "./features/openapi/test_json_schema_downgrade_v30_example";
import { test_json_schema_downgrade_v30_examples } from "./features/openapi/test_json_schema_downgrade_v30_examples";
import { test_json_schema_downgrade_v30_nullable } from "./features/openapi/test_json_schema_downgrade_v30_nullable";
import { test_json_schema_downgrade_v31_enum } from "./features/openapi/test_json_schema_downgrade_v31_enum";
import { test_json_schema_downgrade_v31_example } from "./features/openapi/test_json_schema_downgrade_v31_example";
import { test_json_schema_downgrade_v31_examples } from "./features/openapi/test_json_schema_downgrade_v31_examples";
import { test_json_schema_downgrade_v31_nullable } from "./features/openapi/test_json_schema_downgrade_v31_nullable";
import { test_json_schema_roundtrip_v31_examples } from "./features/openapi/test_json_schema_roundtrip_v31_examples";
import { test_json_schema_type_checker_cover_any } from "./features/openapi/test_json_schema_type_checker_cover_any";
import { test_json_schema_type_checker_cover_constraints } from "./features/openapi/test_json_schema_type_checker_cover_constraints";
import { test_json_schema_type_checker_cover_nullable } from "./features/openapi/test_json_schema_type_checker_cover_nullable";
import { test_json_schema_type_checker_cover_number } from "./features/openapi/test_json_schema_type_checker_cover_number";
import { test_json_schema_type_checker_cover_string_portable } from "./features/openapi/test_json_schema_type_checker_cover_string_portable";
import { test_json_schema_upgrade_items_omitted } from "./features/openapi/test_json_schema_upgrade_items_omitted";
import { test_json_schema_upgrade_v20_example } from "./features/openapi/test_json_schema_upgrade_v20_example";
import { test_json_schema_upgrade_v30_example } from "./features/openapi/test_json_schema_upgrade_v30_example";
import { test_json_schema_upgrade_v31_examples } from "./features/openapi/test_json_schema_upgrade_v31_examples";
import { test_json_schema_upgrade_v31_mixed_type_enum } from "./features/openapi/test_json_schema_upgrade_v31_mixed_type_enum";
import { test_json_schema_upgrade_v31_tuple_items } from "./features/openapi/test_json_schema_upgrade_v31_tuple_items";
import { test_json_schema_upgrade_v32_examples } from "./features/openapi/test_json_schema_upgrade_v32_examples";
import { test_openapi_converter_discriminator_portable } from "./features/openapi/test_openapi_converter_discriminator_portable";
import { test_openapi_converter_empty_required } from "./features/openapi/test_openapi_converter_empty_required";
import { test_openapi_converter_parameter_required } from "./features/openapi/test_openapi_converter_parameter_required";
import { test_openapi_converter_v20_documented_enum } from "./features/openapi/test_openapi_converter_v20_documented_enum";
import { test_openapi_converter_v20_reference_parameter } from "./features/openapi/test_openapi_converter_v20_reference_parameter";
import { test_openapi_emended_items_omitted_boundary } from "./features/openapi/test_openapi_emended_items_omitted_boundary";
import { test_openapi_naming_numeric_constraints } from "./features/openapi/test_openapi_naming_numeric_constraints";
import { test_openapi_reference_key_escaped } from "./features/openapi/test_openapi_reference_key_escaped";
import { test_openapi_type_checker_escape_empty_required } from "./features/openapi/test_openapi_type_checker_escape_empty_required";
import { test_openapi_type_checker_escape_error_method } from "./features/openapi/test_openapi_type_checker_escape_error_method";
import { test_openapi_unknown_string_formats } from "./features/openapi/test_openapi_unknown_string_formats";
import { test_openapi_unreference_alias_chains } from "./features/openapi/test_openapi_unreference_alias_chains";
import { test_openapi_uri_template_dotted_variables } from "./features/openapi/test_openapi_uri_template_dotted_variables";
import { test_openapi_validation_invalid_references } from "./features/openapi/test_openapi_validation_invalid_references";
import { test_openapi_validation_path_grouping } from "./features/openapi/test_openapi_validation_path_grouping";
import { test_openapi_validation_reference_paths } from "./features/openapi/test_openapi_validation_reference_paths";
import { test_openapi_validator_array_union_permutation } from "./features/openapi/test_openapi_validator_array_union_permutation";
import { test_openapi_validator_decimal_multiple_of } from "./features/openapi/test_openapi_validator_decimal_multiple_of";
import { test_openapi_validator_integer_bound_message } from "./features/openapi/test_openapi_validator_integer_bound_message";
import { test_openapi_validator_intrinsic_object_tuple_invariants } from "./features/openapi/test_openapi_validator_intrinsic_object_tuple_invariants";
import { test_openapi_validator_nested_discriminator } from "./features/openapi/test_openapi_validator_nested_discriminator";
import { test_openapi_validator_object_additional_properties } from "./features/openapi/test_openapi_validator_object_additional_properties";
import { test_openapi_validator_object_undefined_property_portable } from "./features/openapi/test_openapi_validator_object_undefined_property_portable";
import { test_openapi_validator_report_path_boundary } from "./features/openapi/test_openapi_validator_report_path_boundary";
import { test_openapi_validator_unicode_length } from "./features/openapi/test_openapi_validator_unicode_length";
import { test_openapi_validator_unique_items_name } from "./features/openapi/test_openapi_validator_unique_items_name";
import { test_schema_cover_required_properties } from "./features/openapi/test_schema_cover_required_properties";
import { test_boolean_predicate_equals_results } from "./features/oracle/test_boolean_predicate_equals_results";
import { test_boolean_predicate_is_prune_results } from "./features/oracle/test_boolean_predicate_is_prune_results";
import { test_boolean_predicate_is_results } from "./features/oracle/test_boolean_predicate_is_results";
import { test_clone_oracle_data_ownership } from "./features/oracle/test_clone_oracle_data_ownership";
import { test_equality_signed_zero } from "./features/oracle/test_equality_signed_zero";
import { test_error_class_identity } from "./features/oracle/test_error_class_identity";
import { test_prune_oracle_graph_preservation } from "./features/oracle/test_prune_oracle_graph_preservation";
import { test_prune_oracle_mutation_contract } from "./features/oracle/test_prune_oracle_mutation_contract";
import { test_prune_validation_success_report } from "./features/oracle/test_prune_validation_success_report";
import { test_stringify_oracle_input_ownership } from "./features/oracle/test_stringify_oracle_input_ownership";
import { test_structure_selection_declared_eligibility } from "./features/oracle/test_structure_selection_declared_eligibility";
import { test_llm_schema_parity_converter_strict_rejection } from "./features/schema/test_llm_schema_parity_converter_strict_rejection";
import { test_no_transform_configuration_error } from "./features/schema/test_no_transform_configuration_error";
import { test_protobuf_reader_64bit_varints } from "./features/schema/test_protobuf_reader_64bit_varints";
import { test_protobuf_reader_bounds } from "./features/schema/test_protobuf_reader_bounds";
import { test_protobuf_reader_invalid_utf8 } from "./features/schema/test_protobuf_reader_invalid_utf8";
import { test_protobuf_reader_unknown_field_faults } from "./features/schema/test_protobuf_reader_unknown_field_faults";
import { test_protobuf_reader_varint_bounds } from "./features/schema/test_protobuf_reader_varint_bounds";
import { test_protobuf_reader_zero_length_skip } from "./features/schema/test_protobuf_reader_zero_length_skip";
import { test_protobuf_sint32_zigzag_boundaries } from "./features/schema/test_protobuf_sint32_zigzag_boundaries";
import { test_protobuf_varint_corpus_shape } from "./features/schema/test_protobuf_varint_corpus_shape";
import { test_random_format_date_epoch_bounds } from "./features/schema/test_random_format_date_epoch_bounds";
import { test_random_format_length_grammar } from "./features/schema/test_random_format_length_grammar";
import { test_random_scalar_extreme_bounds } from "./features/schema/test_random_scalar_extreme_bounds";
import { test_random_source_injection } from "./features/schema/test_random_source_injection";
import { test_unique_items_native_kind_symmetry } from "./features/schema/test_unique_items_native_kind_symmetry";
import { test_validate_string_length_short_circuit } from "./features/schema/test_validate_string_length_short_circuit";
import { test_validate_unique_items_structural_helper } from "./features/schema/test_validate_unique_items_structural_helper";
import { test_dedent_interpolation } from "./features/test_dedent_interpolation";
import { test_equality_async_result_refusal } from "./features/test_equality_async_result_refusal";
import { test_equality_oracle } from "./features/test_equality_oracle";
import { test_evidence_owner_directory_failure } from "./features/test_evidence_owner_directory_failure";
import { test_map_util_take } from "./features/test_map_util_take";
import { test_singleton_lifecycle } from "./features/test_singleton_lifecycle";
import { test_total_comparison_shape } from "./features/test_total_comparison_shape";

test("MapUtil.take preserves map membership", test_map_util_take);

test(
  test_schema_cover_required_properties.name,
  test_schema_cover_required_properties,
);

test(
  test_evidence_owner_directory_failure.name,
  test_evidence_owner_directory_failure,
);

test(
  test_openapi_uri_template_dotted_variables.name,
  test_openapi_uri_template_dotted_variables,
);

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

test(
  test_openapi_unreference_alias_chains.name,
  test_openapi_unreference_alias_chains,
);

test(
  test_openapi_unknown_string_formats.name,
  test_openapi_unknown_string_formats,
);
test(
  test_openapi_validation_reference_paths.name,
  test_openapi_validation_reference_paths,
);
test(
  test_openapi_validation_path_grouping.name,
  test_openapi_validation_path_grouping,
);
test(
  test_openapi_validation_invalid_references.name,
  test_openapi_validation_invalid_references,
);

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
  test_prune_oracle_mutation_contract.name,
  test_prune_oracle_mutation_contract,
);
test(
  test_prune_validation_success_report.name,
  test_prune_validation_success_report,
);
test(
  test_prune_oracle_graph_preservation.name,
  test_prune_oracle_graph_preservation,
);

test(
  test_structure_selection_declared_eligibility.name,
  test_structure_selection_declared_eligibility,
);

test(test_clone_oracle_data_ownership.name, test_clone_oracle_data_ownership);
test(test_equality_signed_zero.name, test_equality_signed_zero);

test(test_http_llm_application.name, test_http_llm_application);

test(
  test_http_llm_application_function_name_fallback.name,
  test_http_llm_application_function_name_fallback,
);

test(
  test_http_llm_application_function_name_length.name,
  test_http_llm_application_function_name_length,
);

test(test_http_llm_application_human.name, test_http_llm_application_human);

test(test_http_llm_application_version.name, test_http_llm_application_version);

test(test_http_llm_function_deprecated.name, test_http_llm_function_deprecated);

test(test_http_llm_function_multipart.name, test_http_llm_function_multipart);

test(test_http_llm_function_tags.name, test_http_llm_function_tags);

test(
  test_llm_invert_description_tag_prose_not_promoted.name,
  test_llm_invert_description_tag_prose_not_promoted,
);

test(test_llm_invert_empty_required.name, test_llm_invert_empty_required);

test(
  test_http_migrate_body_media_contract.name,
  test_http_migrate_body_media_contract,
);

test(
  test_http_migrate_component_name_collision.name,
  test_http_migrate_component_name_collision,
);

test(
  test_http_migrate_cookie_key_collision.name,
  test_http_migrate_cookie_key_collision,
);

test(
  test_http_migrate_cookie_serialization_contract.name,
  test_http_migrate_cookie_serialization_contract,
);

test(test_http_migrate_empty_required.name, test_http_migrate_empty_required);

test(
  test_http_migrate_parameter_serialization_edges.name,
  test_http_migrate_parameter_serialization_edges,
);

test(
  test_http_migrate_path_character_names.name,
  test_http_migrate_path_character_names,
);

test(
  test_http_migrate_path_parameter_names.name,
  test_http_migrate_path_parameter_names,
);

test(
  test_http_migrate_prototype_safe_components.name,
  test_http_migrate_prototype_safe_components,
);

test(
  test_http_migrate_querystring_contract.name,
  test_http_migrate_querystring_contract,
);

test(
  test_http_migrate_remigration_keeps_names.name,
  test_http_migrate_remigration_keeps_names,
);

test(
  test_http_migrate_request_contract.name,
  test_http_migrate_request_contract,
);

test(
  test_http_migrate_response_contract.name,
  test_http_migrate_response_contract,
);

test(test_http_migrate_route_accessor.name, test_http_migrate_route_accessor);

test(
  test_http_migrate_route_accessor_slice.name,
  test_http_migrate_route_accessor_slice,
);

test(test_http_migrate_route_comment.name, test_http_migrate_route_comment);

test(test_http_migrate_route_plugin.name, test_http_migrate_route_plugin);

test(
  test_http_migrate_route_return_type_void.name,
  test_http_migrate_route_return_type_void,
);

test(
  test_http_migrate_route_success_null.name,
  test_http_migrate_route_success_null,
);

test(
  test_http_migrate_webhook_path_collision.name,
  test_http_migrate_webhook_path_collision,
);

test(
  test_document_downgrade_v20_unrepresentable.name,
  test_document_downgrade_v20_unrepresentable,
);

test(test_document_references_resolve.name, test_document_references_resolve);

test(
  test_document_roundtrip_v20_form_arrays.name,
  test_document_roundtrip_v20_form_arrays,
);

test(
  test_document_roundtrip_v20_form_data.name,
  test_document_roundtrip_v20_form_data,
);

test(
  test_document_roundtrip_v20_server_media.name,
  test_document_roundtrip_v20_server_media,
);

test(
  test_document_roundtrip_v20_urlencoded_file.name,
  test_document_roundtrip_v20_urlencoded_file,
);

test(
  test_document_roundtrip_v31_media_type_examples.name,
  test_document_roundtrip_v31_media_type_examples,
);

test(
  test_json_schema_byte_content_encoding.name,
  test_json_schema_byte_content_encoding,
);

test(
  test_json_schema_downgrade_v20_enum.name,
  test_json_schema_downgrade_v20_enum,
);

test(
  test_json_schema_downgrade_v20_example.name,
  test_json_schema_downgrade_v20_example,
);

test(
  test_json_schema_downgrade_v20_nullable.name,
  test_json_schema_downgrade_v20_nullable,
);

test(
  test_json_schema_downgrade_v30_enum.name,
  test_json_schema_downgrade_v30_enum,
);

test(
  test_json_schema_downgrade_v30_example.name,
  test_json_schema_downgrade_v30_example,
);

test(
  test_json_schema_downgrade_v30_examples.name,
  test_json_schema_downgrade_v30_examples,
);

test(
  test_json_schema_downgrade_v30_nullable.name,
  test_json_schema_downgrade_v30_nullable,
);

test(
  test_json_schema_downgrade_v31_enum.name,
  test_json_schema_downgrade_v31_enum,
);

test(
  test_json_schema_downgrade_v31_example.name,
  test_json_schema_downgrade_v31_example,
);

test(
  test_json_schema_downgrade_v31_examples.name,
  test_json_schema_downgrade_v31_examples,
);

test(
  test_json_schema_downgrade_v31_nullable.name,
  test_json_schema_downgrade_v31_nullable,
);

test(
  test_json_schema_roundtrip_v31_examples.name,
  test_json_schema_roundtrip_v31_examples,
);

test(
  test_json_schema_type_checker_cover_any.name,
  test_json_schema_type_checker_cover_any,
);

test(
  test_json_schema_type_checker_cover_constraints.name,
  test_json_schema_type_checker_cover_constraints,
);

test(
  test_json_schema_type_checker_cover_nullable.name,
  test_json_schema_type_checker_cover_nullable,
);

test(
  test_json_schema_type_checker_cover_number.name,
  test_json_schema_type_checker_cover_number,
);
test(
  test_json_schema_type_checker_cover_string_portable.name,
  test_json_schema_type_checker_cover_string_portable,
);

test(
  test_json_schema_upgrade_items_omitted.name,
  test_json_schema_upgrade_items_omitted,
);

test(
  test_json_schema_upgrade_v20_example.name,
  test_json_schema_upgrade_v20_example,
);

test(
  test_json_schema_upgrade_v30_example.name,
  test_json_schema_upgrade_v30_example,
);

test(
  test_json_schema_upgrade_v31_examples.name,
  test_json_schema_upgrade_v31_examples,
);

test(
  test_json_schema_upgrade_v31_mixed_type_enum.name,
  test_json_schema_upgrade_v31_mixed_type_enum,
);

test(
  test_json_schema_upgrade_v31_tuple_items.name,
  test_json_schema_upgrade_v31_tuple_items,
);

test(
  test_json_schema_upgrade_v32_examples.name,
  test_json_schema_upgrade_v32_examples,
);

test(
  test_openapi_converter_empty_required.name,
  test_openapi_converter_empty_required,
);

test(
  test_openapi_converter_parameter_required.name,
  test_openapi_converter_parameter_required,
);

test(
  test_openapi_converter_v20_documented_enum.name,
  test_openapi_converter_v20_documented_enum,
);

test(
  test_openapi_converter_v20_reference_parameter.name,
  test_openapi_converter_v20_reference_parameter,
);

test(
  test_openapi_emended_items_omitted_boundary.name,
  test_openapi_emended_items_omitted_boundary,
);

test(
  test_openapi_naming_numeric_constraints.name,
  test_openapi_naming_numeric_constraints,
);

test(
  test_openapi_reference_key_escaped.name,
  test_openapi_reference_key_escaped,
);

test(
  test_openapi_type_checker_escape_empty_required.name,
  test_openapi_type_checker_escape_empty_required,
);

test(
  test_openapi_validator_array_union_permutation.name,
  test_openapi_validator_array_union_permutation,
);

test(
  test_openapi_validator_decimal_multiple_of.name,
  test_openapi_validator_decimal_multiple_of,
);

test(
  test_openapi_validator_integer_bound_message.name,
  test_openapi_validator_integer_bound_message,
);

test(
  test_openapi_validator_intrinsic_object_tuple_invariants.name,
  test_openapi_validator_intrinsic_object_tuple_invariants,
);

test(
  test_openapi_validator_nested_discriminator.name,
  test_openapi_validator_nested_discriminator,
);

test(
  test_openapi_validator_object_additional_properties.name,
  test_openapi_validator_object_additional_properties,
);

test(
  test_openapi_validator_report_path_boundary.name,
  test_openapi_validator_report_path_boundary,
);

test(
  test_openapi_validator_unicode_length.name,
  test_openapi_validator_unicode_length,
);

test(
  test_llm_type_checker_cover_number_integer.name,
  test_llm_type_checker_cover_number_integer,
);

test(
  test_openapi_type_checker_escape_error_method.name,
  test_openapi_type_checker_escape_error_method,
);

test(
  test_openapi_validator_unique_items_name.name,
  test_openapi_validator_unique_items_name,
);

test(test_error_class_identity.name, test_error_class_identity);
test(
  test_stringify_oracle_input_ownership.name,
  test_stringify_oracle_input_ownership,
);

test(
  test_llm_invert_non_enumerable_definition.name,
  test_llm_invert_non_enumerable_definition,
);

test(
  test_llm_invert_openapi_component_names.name,
  test_llm_invert_openapi_component_names,
);

test(
  test_http_migrate_route_accessor_identifier.name,
  test_http_migrate_route_accessor_identifier,
);

test(
  test_http_migrate_route_accessor_reserved.name,
  test_http_migrate_route_accessor_reserved,
);

test(
  test_http_migrate_route_parameter_key_escape.name,
  test_http_migrate_route_parameter_key_escape,
);

test(
  test_automated_primitive_equal_to_oracle.name,
  test_automated_primitive_equal_to_oracle,
);
test(
  test_automated_resolved_equal_to_oracle.name,
  test_automated_resolved_equal_to_oracle,
);
test(
  test_automated_resolved_equal_to_async_oracle.name,
  test_automated_resolved_equal_to_async_oracle,
);

test(
  test_protobuf_reader_64bit_varints.name,
  test_protobuf_reader_64bit_varints,
);
test(test_protobuf_reader_bounds.name, test_protobuf_reader_bounds);
test(test_protobuf_reader_invalid_utf8.name, test_protobuf_reader_invalid_utf8);
test(
  test_protobuf_reader_unknown_field_faults.name,
  test_protobuf_reader_unknown_field_faults,
);
test(
  test_protobuf_reader_varint_bounds.name,
  test_protobuf_reader_varint_bounds,
);
test(
  test_protobuf_reader_zero_length_skip.name,
  test_protobuf_reader_zero_length_skip,
);
test(
  test_protobuf_sint32_zigzag_boundaries.name,
  test_protobuf_sint32_zigzag_boundaries,
);
test(test_protobuf_varint_corpus_shape.name, test_protobuf_varint_corpus_shape);
test(
  test_random_format_date_epoch_bounds.name,
  test_random_format_date_epoch_bounds,
);
test(test_random_format_length_grammar.name, test_random_format_length_grammar);
test(
  test_validate_string_length_short_circuit.name,
  test_validate_string_length_short_circuit,
);
test(
  test_no_transform_configuration_error.name,
  test_no_transform_configuration_error,
);
test(
  test_llm_schema_parity_converter_strict_rejection.name,
  test_llm_schema_parity_converter_strict_rejection,
);
test("test_llm_invert_oracle_references", test_llm_invert_oracle_references);
test("test_json_fixture_population", test_json_fixture_population);
test(
  "test_validate_unique_items_structural_helper",
  test_validate_unique_items_structural_helper,
);
test("test_random_source_injection", test_random_source_injection);
test(
  "test_unique_items_native_kind_symmetry",
  test_unique_items_native_kind_symmetry,
);
test("test_random_scalar_extreme_bounds", test_random_scalar_extreme_bounds);

test(
  test_openapi_validator_object_undefined_property_portable.name,
  test_openapi_validator_object_undefined_property_portable,
);

test(
  test_openapi_converter_discriminator_portable.name,
  test_openapi_converter_discriminator_portable,
);
