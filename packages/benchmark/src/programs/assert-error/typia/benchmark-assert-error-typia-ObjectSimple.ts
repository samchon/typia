import typia from "typia";

import { ObjectSimple } from "../../../structures/pure/ObjectSimple";
import { createAssertErrorBenchmarkProgram } from "../createAssertErrorBenchmarkProgram";

createAssertErrorBenchmarkProgram(typia.createAssert<ObjectSimple[]>());
