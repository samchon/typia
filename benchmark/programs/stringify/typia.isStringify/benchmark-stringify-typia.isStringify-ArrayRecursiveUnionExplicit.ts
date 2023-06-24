import typia from "typia";

import { ArrayRecursiveUnionExplicit } from "../../../../test/structures/ArrayRecursiveUnionExplicit";
import { createStringifyBenchmarkProgram } from "../createStringifyBenchmarkProgram";

createStringifyBenchmarkProgram(
    typia.createIsStringify<ArrayRecursiveUnionExplicit>()
);