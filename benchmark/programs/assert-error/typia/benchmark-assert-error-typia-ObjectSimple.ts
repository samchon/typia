import typia from "typia";

import { ObjectSimple } from "../../../../test/structures/ObjectSimple";
import { createAssertErrorBenchmarkProgram } from "../createAssertErrorBenchmarkProgram";

createAssertErrorBenchmarkProgram(
    typia.createAssert<ObjectSimple[]>()
);