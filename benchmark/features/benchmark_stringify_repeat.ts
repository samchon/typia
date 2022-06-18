import { BenchmarkGenerator } from "../internal/Benchmark";

import { ObjectSimple } from "../../test/structures/ObjectSimple";
import { ObjectHierarchical } from "../../test/structures/ObjectHierarchical";
import { ObjectRecursive } from "../../test/structures/ObjectRecursive";
import { ArrayRecursive } from "../../test/structures/ArrayRecursive";

import { fast_simple } from "../functional/fast_simple";
import { fast_recursive } from "../functional/fast_recursive";
import { fast_hierarchical } from "../functional/fast_hierarchical";
import { fast_tree } from "../functional/fast_tree";
import { tson_simple } from "../functional/tson_simple";
import { tson_hierarchical } from "../functional/tson_hierarchical";
import { tson_recursive } from "../functional/tson_recursive";
import { tson_tree } from "../functional/tson_tree";
import { manual_simple } from "../functional/manual_simple";
import { manual_hierarchical } from "../functional/manual_hierarchical";
import { manual_recursive } from "../functional/manual_recursive";
import { manual_tree } from "../functional/manual_tree";

export const benchmark_stringify_repeat = () => [
    BenchmarkGenerator.prepare("simple", () => ObjectSimple.generate(), {
        ideal: manual_simple,
        ajv: fast_simple(),
        tson: tson_simple,
    }),
    BenchmarkGenerator.prepare(
        "hierarchical",
        () => ObjectHierarchical.generate(),
        {
            ideal: manual_hierarchical,
            tson: tson_hierarchical,
            ajv: fast_hierarchical(),
        },
    ),
    BenchmarkGenerator.prepare("recursive", () => ObjectRecursive.generate(), {
        ideal: manual_recursive,
        tson: tson_recursive,
        ajv: fast_recursive(),
    }),
    BenchmarkGenerator.prepare("tree", () => ArrayRecursive.generate(), {
        ideal: manual_tree,
        tson: tson_tree,
        ajv: fast_tree(),
    }),
];
