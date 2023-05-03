import typia from "typia";

import { ObjectSimple } from "../../../../test/structures/ObjectSimple";
import { createAssertBenchmarkProgram } from "../createAssertBenchmarkProgram";

createAssertBenchmarkProgram(typia.createAssert<ObjectSimple>());
