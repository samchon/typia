import typia from "typia";

import { ObjectRecursive } from "../../../../../test/structures/ObjectRecursive";
import { createFastifyPureServerBenchmarkProgram } from "../createFastifyPureServerBenchmarkProgram";

createFastifyPureServerBenchmarkProgram(
   typia.application<[ObjectRecursive[]], "ajv">()
);