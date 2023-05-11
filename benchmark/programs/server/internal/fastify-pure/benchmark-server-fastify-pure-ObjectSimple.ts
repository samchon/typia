import typia from "typia";

import { ObjectSimple } from "../../../../../test/structures/ObjectSimple";
import { createFastifyPureServerBenchmarkProgram } from "../createFastifyPureServerBenchmarkProgram";

createFastifyPureServerBenchmarkProgram(
   typia.application<[ObjectSimple[]], "ajv">()
);