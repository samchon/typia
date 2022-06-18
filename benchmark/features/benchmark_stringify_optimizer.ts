import { BenchmarkGenerator } from "../internal/Benchmark";

import { ObjectSimple } from "../../test/structures/ObjectSimple";
import { ObjectHierarchical } from "../../test/structures/ObjectHierarchical";
import { ObjectRecursive } from "../../test/structures/ObjectRecursive";
import { ArrayRecursive } from "../../test/structures/ArrayRecursive";

import { fast_simple } from "../functional/fast_simple";
import { fast_hierarchical } from "../functional/fast_hierarchical";
import { fast_recursive } from "../functional/fast_recursive";
import { fast_tree } from "../functional/fast_tree";
import { tson_simple } from "../functional/tson_simple";
import { tson_hierarchical } from "../functional/tson_hierarchical";
import { tson_recursive } from "../functional/tson_recursive";
import { tson_tree } from "../functional/tson_tree";

export const benchmark_stringify_optimizer = () => [
    BenchmarkGenerator.prepare(
        "simple",
        () => ObjectSimple.generate(),
        fast_simple as any,
        tson_simple,
    ),
    BenchmarkGenerator.prepare(
        "hierarchical",
        () => ObjectHierarchical.generate(),
        fast_hierarchical as any,
        tson_hierarchical,
    ),
    BenchmarkGenerator.prepare(
        "recursive",
        () => ObjectRecursive.generate(),
        fast_recursive as any,
        tson_recursive,
    ),
    BenchmarkGenerator.prepare(
        "tree",
        () => ArrayRecursive.generate(),
        fast_tree as any,
        tson_tree,
    ),
];
