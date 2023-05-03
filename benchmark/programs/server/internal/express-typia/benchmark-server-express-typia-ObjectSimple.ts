import typia from "typia";

import { ObjectSimple } from "../../../../../test/structures/ObjectSimple";
import { createExpressServerBenchmarkProgram } from "../createExpressServerBenchmarkProgram";

createExpressServerBenchmarkProgram(typia.createStringify<ObjectSimple[]>());
