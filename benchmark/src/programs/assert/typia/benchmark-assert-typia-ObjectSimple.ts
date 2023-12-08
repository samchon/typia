import typia from "typia";

import { ObjectSimple } from "../../../structures/pure/ObjectSimple";
import { createAssertBenchmarkProgram } from "../createAssertBenchmarkProgram";

createAssertBenchmarkProgram(typia.createAssert<ObjectSimple>());
