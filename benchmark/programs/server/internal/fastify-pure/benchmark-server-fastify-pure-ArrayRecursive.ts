import typia from "typia";

import { ArrayRecursive } from "../../../../../test/structures/ArrayRecursive";
import { createFastifyPureServerBenchmarkProgram } from "../createFastifyPureServerBenchmarkProgram";

createFastifyPureServerBenchmarkProgram(
   typia.application<[ArrayRecursive[]], "ajv">()
);