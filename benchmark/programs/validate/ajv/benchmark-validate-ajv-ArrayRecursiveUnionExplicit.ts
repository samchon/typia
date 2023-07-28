import typia from "typia";

import { ArrayRecursiveUnionExplicit } from "../../../../test/structures/ArrayRecursiveUnionExplicit";
import { createValidateAjvBenchmarkProgram } from "./createValidateAjvBenchmarkProgram";

createValidateAjvBenchmarkProgram(
    typia.application<[ArrayRecursiveUnionExplicit], "ajv">(),
);