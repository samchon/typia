import typia from "typia";

import { ArrayRecursiveUnionExplicit } from "../../../../test/structures/ArrayRecursiveUnionExplicit";
import { createAssertAjvBenchmarkProgram } from "./createAssertAjvBenchmarkProgram";

createAssertAjvBenchmarkProgram(
    typia.application<[ArrayRecursiveUnionExplicit], "ajv">(),
);