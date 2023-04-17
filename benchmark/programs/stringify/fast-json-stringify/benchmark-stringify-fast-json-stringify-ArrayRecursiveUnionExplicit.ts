import typia from "typia";

import { ArrayRecursiveUnionExplicit } from "../../../../test/structures/ArrayRecursiveUnionExplicit";
import { createStringifyFastBenchmarkProgram } from "./createStringifyFastBenchmarkProgram";

createStringifyFastBenchmarkProgram(
    typia.application<[ArrayRecursiveUnionExplicit], "ajv">(),
);
