import typia from "typia";

import { ArrayRecursiveUnionExplicit } from "../../../../../test/structures/ArrayRecursiveUnionExplicit";
import { createFastifyCustomServerBenchmarkProgram } from "../createFastifyCustomServerBenchmarkProgram";

createFastifyCustomServerBenchmarkProgram(
    typia.createStringify<ArrayRecursiveUnionExplicit[]>(),
);