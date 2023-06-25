import typia from "typia";

import { UltimateUnion } from "../../../../test/structures/UltimateUnion";
import { createIsAjvBenchmarkProgram } from "./createIsAjvBenchmarkProgram";

createIsAjvBenchmarkProgram(
    typia.application<[UltimateUnion], "ajv">(),
);