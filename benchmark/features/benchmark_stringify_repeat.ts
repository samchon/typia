import { BenchmarkGenerator } from "../internal/Benchmark";

import { ArrayRecursive } from "../../test/structures/ArrayRecursive";
import { ArrayRecursiveUnion } from "../../test/structures/ArrayRecursiveUnion";
import { ObjectHierarchical } from "../../test/structures/ObjectHierarchical";
import { ObjectRecursive } from "../../test/structures/ObjectRecursive";
import { ObjectSimple } from "../../test/structures/ObjectSimple";

import { convert_ajv_simple } from "../converters/convert_ajv_simple";
import { convert_ajv_recursive } from "../converters/convert_ajv_recursive";
import { convert_ajv_hierarchical } from "../converters/convert_ajv_hierarchical";
import { convert_ajv_tree } from "../converters/convert_ajv_tree";
import { convert_tson_simple } from "../converters/convert_tson_simple";
import { convert_tson_hierarchical } from "../converters/convert_tson_hierarchical";
import { convert_tson_recursive } from "../converters/convert_tson_recursive";
import { convert_tson_tree } from "../converters/convert_tson_tree";
import { convert_ideal_simple } from "../converters/convert_ideal_simple";
import { convert_ideal_hierarchical } from "../converters/convert_ideal_hierarchical";
import { convert_ideal_recursive } from "../converters/convert_ideal_recursive";
import { convert_ideal_tree } from "../converters/convert_ideal_tree";
import { convert_ideal_union } from "../converters/convert_ideal_union";
import { convert_tson_union } from "../converters/convert_tson_union";
import { convert_ajv_union } from "../converters/convert_ajv_union";

export const benchmark_stringify_repeat = () => [
    BenchmarkGenerator.prepare("simple", () => ObjectSimple.generate(), {
        ideal: convert_ideal_simple,
        ajv: convert_ajv_simple(),
        tson: convert_tson_simple,
    }),
    BenchmarkGenerator.prepare(
        "hierarchical",
        () => ObjectHierarchical.generate(),
        {
            ideal: convert_ideal_hierarchical,
            tson: convert_tson_hierarchical,
            ajv: convert_ajv_hierarchical(),
        },
    ),
    BenchmarkGenerator.prepare("recursive", () => ObjectRecursive.generate(), {
        ideal: convert_ideal_recursive,
        tson: convert_tson_recursive,
        ajv: convert_ajv_recursive(),
    }),
    BenchmarkGenerator.prepare("tree", () => ArrayRecursive.generate(), {
        ideal: convert_ideal_tree,
        tson: convert_tson_tree,
        ajv: convert_ajv_tree(),
    }),
    BenchmarkGenerator.prepare("union", () => ArrayRecursiveUnion.generate(), {
        ideal: convert_ideal_union,
        tson: convert_tson_union,
        ajv: convert_ajv_union(),
    }),
];
