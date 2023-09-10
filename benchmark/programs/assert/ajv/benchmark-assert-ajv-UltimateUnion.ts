import typia from "typia";

import { UltimateUnion } from "../../../../test/structures/UltimateUnion";
import { createAssertAjvBenchmarkProgram } from "./createAssertAjvBenchmarkProgram";

createAssertAjvBenchmarkProgram(
    typia.json.application<[UltimateUnion], "ajv">(),
);
