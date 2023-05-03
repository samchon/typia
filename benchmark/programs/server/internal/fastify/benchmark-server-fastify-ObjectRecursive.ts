import typia from "typia";

import { ObjectRecursive } from "../../../../../test/structures/ObjectRecursive";
import { createFastifyServerBenchmarkProgram } from "../createFastifyServerBenchmarkProgram";

createFastifyServerBenchmarkProgram(
    typia.application<[ObjectRecursive[]], "ajv", "#/definitions">(),
);
