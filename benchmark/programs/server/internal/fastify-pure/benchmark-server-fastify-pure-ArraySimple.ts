import typia from "typia";

import { ArraySimple } from "../../../../../test/structures/ArraySimple";
import { createFastifyPureServerBenchmarkProgram } from "../createFastifyPureServerBenchmarkProgram";

createFastifyPureServerBenchmarkProgram(
    typia.application<[ArraySimple[]], "ajv">(),
);
