import typia from "typia";

import { ArraySimple } from "../../../../../test/structures/ArraySimple";
import { createFastifyServerBenchmarkProgram } from "../createFastifyServerBenchmarkProgram";

createFastifyServerBenchmarkProgram(
    typia.application<[ArraySimple[]], "ajv">(),
);
