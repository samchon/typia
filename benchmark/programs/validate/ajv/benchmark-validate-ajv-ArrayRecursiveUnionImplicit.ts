import typia from "typia";

import { ArrayRecursiveUnionImplicit } from "../../../../test/structures/ArrayRecursiveUnionImplicit";
import { createValidateAjvBenchmarkProgram } from "./createValidateAjvBenchmarkProgram";

createValidateAjvBenchmarkProgram(
    typia.json.application<[ArrayRecursiveUnionImplicit], "ajv">(),
);
