import { BenchmarkGenerator } from "../internal/Benchmark";

import { ObjectSimple } from "../../test/structures/ObjectSimple";
import { ObjectHierarchical } from "../../test/structures/ObjectHierarchical";
import { ObjectRecursive } from "../../test/structures/ObjectRecursive";
import { ArrayRecursive } from "../../test/structures/ArrayRecursive";

import { convert_ajv_simple } from "../converters/convert_ajv_simple";
import { convert_ajv_hierarchical } from "../converters/convert_ajv_hierarchical";
import { convert_ajv_recursive } from "../converters/convert_ajv_recursive";
import { convert_ajv_tree } from "../converters/convert_ajv_tree";
import { convert_tson_simple } from "../converters/convert_tson_simple";
import { convert_tson_hierarchical } from "../converters/convert_tson_hierarchical";
import { convert_tson_recursive } from "../converters/convert_tson_recursive";
import { convert_tson_tree } from "../converters/convert_tson_tree";
import { convert_ideal_simple } from "../converters/convert_ideal_simple";
import { convert_ideal_hierarchical } from "../converters/convert_ideal_hierarchical";
import { convert_ideal_recursive } from "../converters/convert_ideal_recursive";
import { convert_ideal_tree } from "../converters/convert_ideal_tree";

export const benchmark_stringify_optimizer = () => [
    BenchmarkGenerator.prepare("simple", () => ObjectSimple.generate(), {
        ideal: convert_ideal_simple,
        ajv: convert_ajv_simple as any,
        tson: convert_tson_simple,
    }),
    BenchmarkGenerator.prepare(
        "hierarchical",
        () => ObjectHierarchical.generate(),
        {
            ideal: convert_ideal_hierarchical,
            tson: convert_tson_hierarchical,
            ajv: (input) => convert_ajv_hierarchical()(input),
        },
    ),
    BenchmarkGenerator.prepare("recursive", () => ObjectRecursive.generate(), {
        ideal: convert_ideal_recursive,
        tson: convert_tson_recursive,
        ajv: (input) => convert_ajv_recursive()(input),
    }),
    BenchmarkGenerator.prepare("tree", () => ArrayRecursive.generate(), {
        ideal: convert_ideal_tree,
        tson: convert_tson_tree,
        ajv: (input) => convert_ajv_tree()(input),
    }),
];
