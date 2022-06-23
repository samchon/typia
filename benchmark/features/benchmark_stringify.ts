import { StringifyBenchmarker } from "../internal/StringifyBenchmarker";

import { ObjectSimple } from "../../test/structures/ObjectSimple";
import { ObjectHierarchical } from "../../test/structures/ObjectHierarchical";
import { ObjectRecursive } from "../../test/structures/ObjectRecursive";
import { ObjectUnionExplicit } from "../../test/structures/ObjectUnionExplicit";
import { ObjectUnionImplicit } from "../../test/structures/ObjectUnionImplicit";
import { ArrayHierarchical } from "../../test/structures/ArrayHierarchical";
import { ArrayRecursive } from "../../test/structures/ArrayRecursive";
import { ArrayRecursiveUnion } from "../../test/structures/ArrayRecursiveUnion";

import { convert_ideal_object_simple } from "../converters/convert_ideal_object_simple";
import { convert_ideal_object_hierarchical } from "../converters/convert_ideal_object_hierarchical";
import { convert_ideal_object_recursive } from "../converters/convert_ideal_object_recursive";
import { convert_ideal_object_union_implicit } from "../converters/convert_ideal_object_union_implicit";
import { convert_ideal_object_union_explicit } from "../converters/convert_ideal_object_union_explicit";
import { convert_ideal_array_hierarchical } from "../converters/convert_ideal_array_hierarchical";
import { convert_ideal_array_recursive } from "../converters/convert_ideal_array_recursive";
import { convert_ideal_array_recursive_union } from "../converters/convert_ideal_array_recursive_union";

import { convert_ajv_object_simple } from "../converters/convert_ajv_object_simple";
import { convert_ajv_object_hierarchical } from "../converters/convert_ajv_object_hierarchical";
import { convert_ajv_object_recursive } from "../converters/convert_ajv_object_recursive";
import { convert_ajv_object_union_implicit } from "../converters/convert_ajv_object_union_implicit";
import { convert_ajv_object_union_explicit } from "../converters/convert_ajv_object_union_explicit";
import { convert_ajv_array_hierarchical } from "../converters/convert_ajv_array_hierarchical";
import { convert_ajv_array_recursive } from "../converters/convert_ajv_array_recursive";
import { convert_ajv_array_recursive_union } from "../converters/convert_ajv_array_recursive_union";

import { convert_tson_object_simple } from "../converters/convert_tson_object_simple";
import { convert_tson_object_hierarchical } from "../converters/convert_tson_object_hierarchical";
import { convert_tson_object_recursive } from "../converters/convert_tson_object_recursive";
import { convert_tson_object_union_implicit } from "../converters/convert_tson_object_union_implicit";
import { convert_tson_object_union_explicit } from "../converters/convert_tson_object_union_explicit";
import { convert_tson_array_hierarchical } from "../converters/convert_tson_array_hierarchical";
import { convert_tson_array_recursive } from "../converters/convert_tson_array_recursive";
import { convert_tson_array_recursive_union } from "../converters/convert_tson_array_recursive_union";

const stringify = () => [
    //----
    // OBJECT
    //----
    // NORMAL STRUCTURES
    StringifyBenchmarker.prepare(
        "object (simple)",
        () => ObjectSimple.generate(),
        {
            ideal: convert_ideal_object_simple,
            "typescript-json": convert_tson_object_simple,
            ajv: convert_ajv_object_simple(),
        },
    ),
    StringifyBenchmarker.prepare(
        "object (hierarchical)",
        () => ObjectHierarchical.generate(),
        {
            ideal: convert_ideal_object_hierarchical,
            "typescript-json": convert_tson_object_hierarchical,
            ajv: convert_ajv_object_hierarchical(),
        },
    ),
    StringifyBenchmarker.prepare(
        "object (recursive)",
        () => ObjectRecursive.generate(),
        {
            ideal: convert_ideal_object_recursive,
            "typescript-json": convert_tson_object_recursive,
            ajv: convert_ajv_object_recursive(),
        },
    ),

    // SPECIAL UNION TYPES
    StringifyBenchmarker.prepare(
        "object (union, implicit)",
        () => ObjectUnionImplicit.generate(),
        {
            ideal: convert_ideal_object_union_implicit,
            "typescript-json": convert_tson_object_union_implicit,
            ajv: convert_ajv_object_union_implicit(),
        },
    ),
    StringifyBenchmarker.prepare(
        "object (union, explicit)",
        () => ObjectUnionExplicit.generate(),
        {
            ideal: convert_ideal_object_union_explicit,
            "typescript-json": convert_tson_object_union_explicit,
            ajv: convert_ajv_object_union_explicit(),
        },
    ),

    //----
    // ARRAY
    //----
    // NORMAL STRUCTURES
    StringifyBenchmarker.prepare(
        "array (hierarchical)",
        () => ArrayHierarchical.generate(),
        {
            ideal: convert_ideal_array_hierarchical,
            "typescript-json": convert_tson_array_hierarchical,
            ajv: convert_ajv_array_hierarchical(),
        },
    ),
    StringifyBenchmarker.prepare(
        "array (recursive)",
        () => ArrayRecursive.generate(),
        {
            ideal: convert_ideal_array_recursive,
            "typescript-json": convert_tson_array_recursive,
            ajv: convert_ajv_array_recursive(),
        },
    ),
    // SPECIAL UNION STRUCTURES
    StringifyBenchmarker.prepare(
        "array (recursive, union)",
        () => ArrayRecursiveUnion.generate(),
        {
            ideal: convert_ideal_array_recursive_union,
            "typescript-json": convert_tson_array_recursive_union,
            ajv: convert_ajv_array_recursive_union(),
        },
    ),
];
export { stringify as benchmark_stringify };
