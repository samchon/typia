import typia from "typia";

import { ObjectSimple } from "../../../../../test/structures/ObjectSimple";
import { createFastifyServerBenchmarkProgram } from "../createFastifyServerBenchmarkProgram";

createFastifyServerBenchmarkProgram(
    typia.application<[ObjectSimple[]], "ajv", "#/definitions">(),
);
