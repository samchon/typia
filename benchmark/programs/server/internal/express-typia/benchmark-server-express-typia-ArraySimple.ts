import typia from "typia";

import { ArraySimple } from "../../../../../test/structures/ArraySimple";
import { createExpressServerBenchmarkProgram } from "../createExpressServerBenchmarkProgram";

createExpressServerBenchmarkProgram(typia.createStringify<ArraySimple[]>());
