import typia from "typia";

import { ArrayRecursiveUnionImplicit } from "../../../../test/structures/ArrayRecursiveUnionImplicit";
import { createAssertAjvBenchmarkProgram } from "./createAssertAjvBenchmarkProgram";

createAssertAjvBenchmarkProgram(
    typia.application<[ArrayRecursiveUnionImplicit], "ajv">(),
);