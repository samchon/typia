import typia from "typia";

import { ArrayRecursiveUnionExplicit } from "../../../../../test/structures/ArrayRecursiveUnionExplicit";
import { createFastifyServerBenchmarkProgram } from "../createFastifyServerBenchmarkProgram";

createFastifyServerBenchmarkProgram(
    typia.application<[ArrayRecursiveUnionExplicit[]], "ajv">(),
);
