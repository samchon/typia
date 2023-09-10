import typia from "typia";

import { ArrayRecursiveUnionExplicit } from "../../../../test/structures/ArrayRecursiveUnionExplicit";
import { createValidateAjvBenchmarkProgram } from "./createValidateAjvBenchmarkProgram";

createValidateAjvBenchmarkProgram(
    typia.json.application<[ArrayRecursiveUnionExplicit], "ajv">(),
);
