import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

import { TestGlobal } from "../TestGlobal";

/**
 * Executes one official ttsx batch per incompatible native compiler context.
 *
 * Changed typia flags and declaration authorities require distinct project
 * loads, while all cases in one context share that load and native artifact.
 * The main suite is generated completely before these immutable profiles run.
 *
 * @evidence contracts/testing.md#behavioral-verification Each selected immutable project executes its imported actual native cases through official ttsx. A nonzero child status fails its profile, and successful stdout identities must equal the independently selected registry exactly once each, rejecting missing, duplicate or unexpected success records.
 * @evidence contracts/testing.md#independent-expectations PROFILES explicitly records expected case names, projects and entries before child execution; case results do not generate this census. Imported authored cases own their value/schema/error expectations and oracle limitations. Mode labels alone do not replace actual compiler flags or declaration authority.
 * @evidence contracts/testing.md#distinguishing-cases Empty selected profiles launch nothing; include/exclude filters retain substring semantics. Child spawn failures, unsuccessful completion and mismatched success populations are rejected independently; later incompatible profiles still run. Within a profile all selected cases share one project/child and content-keyed native artifact.
 * @evidence contracts/testing.md#execution-ownership main invokes this runner after its generated/composite worker. Private execute launches Node's process.execPath with the resolved official JavaScript launcher and separate argument array, observes error/close, and owns stdout census; entry scripts pass named original callbacks to executeProfile. This runner does not itself inject all possible process/protocol failures.
 */
export async function runNativeProfiles(filters: {
  include: readonly string[];
  exclude: readonly string[];
}): Promise<Error[]> {
  const failures: Error[] = [];
  const selected = (name: string): boolean =>
    (filters.include.length === 0 ||
      filters.include.some((word) => name.includes(word))) &&
    filters.exclude.every((word) => !name.includes(word));
  const manifestPath = require.resolve("ttsc/package.json");
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8")) as {
    bin: { ttsx: string };
  };
  const launcher = path.resolve(path.dirname(manifestPath), manifest.bin.ttsx);
  for (const profile of PROFILES) {
    const expected = profile.caseNames.filter(selected);
    if (!expected.length) continue;
    try {
      await execute(launcher, profile, expected, filters);
    } catch (error) {
      failures.push(error instanceof Error ? error : new Error(String(error)));
    }
  }
  return failures;
}

interface INativeProfile {
  name: string;
  project: string;
  entry: string;
  caseNames: string[];
}

const execute = (
  launcher: string,
  profile: INativeProfile,
  expected: readonly string[],
  filters: { include: readonly string[]; exclude: readonly string[] },
): Promise<void> =>
  new Promise((resolve, reject) => {
    const args = [
      launcher,
      "--project",
      path.join(TestGlobal.ROOT, profile.project),
      path.join(TestGlobal.ROOT, profile.entry),
      profile.name,
      "--include",
      ...filters.include,
      "--exclude",
      ...filters.exclude,
    ];
    const child = spawn(process.execPath, args, {
      cwd: TestGlobal.ROOT,
      stdio: ["ignore", "pipe", "pipe"],
      windowsHide: true,
    });
    let output = "";
    child.stdout.on("data", (chunk: Buffer) => {
      output += chunk.toString();
      process.stdout.write(chunk);
    });
    child.stderr.on("data", (chunk: Buffer) => {
      process.stderr.write(chunk);
    });
    child.once("error", reject);
    child.once("close", (code, signal) => {
      if (code !== 0) {
        reject(
          new Error(`Native profile ${profile.name} exited ${code ?? signal}`),
        );
        return;
      }
      const prefix = `Native profile ${profile.name}: `;
      const actual = output
        .split(/\r?\n/)
        .filter((line) => line.startsWith(prefix) && line.endsWith(": Success"))
        .map((line) => line.slice(prefix.length, -": Success".length));
      if (
        actual.length !== expected.length ||
        expected.some(
          (name) => actual.filter((value) => value === name).length !== 1,
        )
      ) {
        reject(
          new Error(
            `Native profile ${profile.name} execution population mismatch: expected ${JSON.stringify(expected)}, actual ${JSON.stringify(actual)}`,
          ),
        );
        return;
      }
      resolve();
    });
  });

const PROFILES: INativeProfile[] = [
  {
    name: "default",
    project: "tsconfig.native-default.json",
    entry: "src/native-profiles/default.ts",
    caseNames: [
      "test_native_any_array_type_tags",
      "test_native_assert_guard_factory_contract",
      "test_native_atomic_intersection_schema",
      "test_native_bigint_literal_precision",
      "test_native_boolean_literal_discriminant_schema",
      "test_native_callable_interface_function_semantics",
      "test_native_callable_type_literal_consumers",
      "test_native_callable_type_literal_provenance",
      "test_native_callable_type_literal_spelling",
      "test_native_compare_equal_cover",
      "test_native_compare_functional_union_membership",
      "test_native_compare_less",
      "test_native_compare_less_nan",
      "test_native_compare_method_delegation",
      "test_native_compare_native_object_overmatch",
      "test_native_compare_nondiscriminable_union",
      "test_native_compare_template_literal_union",
      "test_native_compare_union_discrimination",
      "test_native_create_assert_error_factory_arity",
      "test_native_dynamic_key_path_helper_alias",
      "test_native_dynamic_key_tags",
      "test_native_escaped_property_key_path",
      "test_native_exclude_type_tag",
      "test_native_finite_option_number_leaf",
      "test_native_functional_promised_type",
      "test_native_functional_receiver",
      "test_native_inline_type_display_name",
      "test_native_instance_union_create_is",
      "test_native_intersection_all_never_union",
      "test_native_intersection_brand",
      "test_native_intersection_union_validation",
      "test_native_is_object_function_member",
      "test_native_json_is_stringify_finite_number",
      "test_native_json_is_stringify_scoped_checker",
      "test_native_json_schema_dynamic_key_determinism",
      "test_native_json_stringify_constant_atomic_union",
      "test_native_json_stringify_contextual_undefined",
      "test_native_json_stringify_special_key",
      "test_native_native_generic_name_guard_is",
      "test_native_native_name_collision_is",
      "test_native_native_named_intersection_union",
      "test_native_non_trailing_rest_tuple",
      "test_native_notation_dynamic_keys",
      "test_native_notation_kebab_case",
      "test_native_notation_literal_collision",
      "test_native_notation_pascal_case",
      "test_native_notation_unicode_key",
      "test_native_nullable_primitive_property_is",
      "test_native_object_custom_tag_validation",
      "test_native_object_union_explicit_pointer_schema",
      "test_native_pattern_line_terminator_escape",
      "test_native_plain_clone_bigint_wrapper",
      "test_native_plain_prune_union_object_overmatch",
      "test_native_private_field_filter_is",
      "test_native_protobuf_object_generic_union_encode",
      "test_native_recursive_conditional_alias_name",
      "test_native_recursive_container_helper_index",
      "test_native_recursive_visit_tracking",
      "test_native_reflect_literals_bigint",
      "test_native_reflect_schema_bigint",
      "test_native_schema_dts_role",
      "test_native_symbol_index_domain",
      "test_native_symbol_key_member_filter",
      "test_native_template_interpolation_type_tags",
      "test_native_template_literal_type_tags",
      "test_native_tuple_optional_compare_clone",
      "test_native_plain_classify_class_ref",
      "test_native_plain_classify_container_seed",
      "test_native_plain_classify_cross_module",
      "test_native_plain_classify_cross_module_extra",
      "test_native_plain_classify_deep_nested",
      "test_native_plain_classify_field_copy",
      "test_native_plain_classify_from_new",
      "test_native_plain_classify_named_interface",
      "test_native_plain_classify_nested_validated_union",
      "test_native_plain_classify_recursive_anonymous",
      "test_native_plain_classify_strategy_edges",
      "test_native_plain_classify_unbound_anonymous",
      "test_native_plain_classify_union",
      "test_native_plain_classify_validated_union",
      "test_native_shallow_depth_limit",
      "test_native_shallow_depth_runtime",
      "test_native_shallow_factory_depth_runtime",
    ],
  },
  {
    name: "numeric",
    project: "tsconfig.native-numeric.json",
    entry: "src/native-profiles/numeric.ts",
    caseNames: [
      "test_native_finite_option_number_leaf",
      "test_native_json_is_stringify_finite_number",
    ],
  },
  {
    name: "finite",
    project: "tsconfig.native-finite.json",
    entry: "src/native-profiles/numeric.ts",
    caseNames: [
      "test_native_finite_option_number_leaf",
      "test_native_json_is_stringify_finite_number",
    ],
  },
  {
    name: "finite-numeric",
    project: "tsconfig.native-finite-numeric.json",
    entry: "src/native-profiles/numeric.ts",
    caseNames: [
      "test_native_finite_option_number_leaf",
      "test_native_json_is_stringify_finite_number",
    ],
  },
  {
    name: "undefined-false",
    project: "tsconfig.native-undefined-false.json",
    entry: "src/native-profiles/undefined.ts",
    caseNames: ["test_native_json_stringify_contextual_undefined"],
  },
  {
    name: "provenance-node",
    project: "src/native-profiles/provenance/node/tsconfig.json",
    entry: "src/native-profiles/provenance/node/entry.ts",
    caseNames: [
      "test_native_identity_collection",
      "test_native_identity_node_buffer",
      "test_native_identity_package_declaration",
      "test_native_identity_user_global_provided",
    ],
  },
  {
    name: "provenance-user-global",
    project: "src/native-profiles/provenance/user-global/tsconfig.json",
    entry: "src/native-profiles/provenance/user-global/entry.ts",
    caseNames: ["test_native_identity_user_global"],
  },
  {
    name: "provenance-alias-global",
    project: "src/native-profiles/provenance/alias-global/tsconfig.json",
    entry: "src/native-profiles/provenance/alias-global/entry.ts",
    caseNames: ["test_native_identity_user_global_alias"],
  },
  {
    name: "provenance-spoof-library",
    project: "src/native-profiles/provenance/spoof-library/tsconfig.json",
    entry: "src/native-profiles/provenance/spoof-library/entry.ts",
    caseNames: ["test_native_identity_default_library_spoof"],
  },
  {
    name: "provenance-spoof-node",
    project: "src/native-profiles/provenance/spoof-node/tsconfig.json",
    entry: "src/native-profiles/provenance/spoof-node/entry.ts",
    caseNames: ["test_native_identity_node_buffer_spoof"],
  },
  {
    name: "provenance-replacement",
    project: "src/native-profiles/provenance/replacement/tsconfig.json",
    entry: "src/native-profiles/provenance/replacement/entry.ts",
    caseNames: ["test_native_identity_lib_replacement"],
  },
];
