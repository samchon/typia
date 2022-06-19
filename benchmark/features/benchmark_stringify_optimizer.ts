import { BenchmarkGenerator } from "../internal/Benchmark";

import { ObjectSimple } from "../../test/structures/ObjectSimple";
import { ObjectHierarchical } from "../../test/structures/ObjectHierarchical";
import { ObjectRecursive } from "../../test/structures/ObjectRecursive";
import { ArrayRecursive } from "../../test/structures/ArrayRecursive";

import { generate_ajv_simple } from "../generators/generate_ajv_simple";
import { generate_ajv_hierarchical } from "../generators/generate_ajv_hierarchical";
import { generate_ajv_recursive } from "../generators/generate_ajv_recursive";
import { generate_ajv_tree } from "../generators/generate_ajv_tree";
import { generate_tson_simple } from "../generators/generate_tson_simple";
import { generate_tson_hierarchical } from "../generators/generate_tson_hierarchical";
import { generate_tson_recursive } from "../generators/generate_tson_recursive";
import { generate_tson_tree } from "../generators/generate_tson_tree";
import { generate_ideal_simple } from "../generators/generate_ideal_simple";
import { generate_ideal_hierarchical } from "../generators/generate_ideal_hierarchical";
import { generate_ideal_recursive } from "../generators/generate_ideal_recursive";
import { generate_ideal_tree } from "../generators/generate_ideal_tree";

export const benchmark_stringify_optimizer = () => [
    BenchmarkGenerator.prepare("simple", () => ObjectSimple.generate(), {
        ideal: generate_ideal_simple,
        ajv: generate_ajv_simple as any,
        tson: generate_tson_simple,
    }),
    BenchmarkGenerator.prepare(
        "hierarchical",
        () => ObjectHierarchical.generate(),
        {
            ideal: generate_ideal_hierarchical,
            tson: generate_tson_hierarchical,
            ajv: (input) => generate_ajv_hierarchical()(input),
        },
    ),
    BenchmarkGenerator.prepare("recursive", () => ObjectRecursive.generate(), {
        ideal: generate_ideal_recursive,
        tson: generate_tson_recursive,
        ajv: (input) => generate_ajv_recursive()(input),
    }),
    BenchmarkGenerator.prepare("tree", () => ArrayRecursive.generate(), {
        ideal: generate_ideal_tree,
        tson: generate_tson_tree,
        ajv: (input) => generate_ajv_tree()(input),
    }),
];
