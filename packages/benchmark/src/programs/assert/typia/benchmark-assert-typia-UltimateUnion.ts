import typia from "typia";

import { UltimateUnion } from "../../../structures/pure/UltimateUnion";
import { createAssertBenchmarkProgram } from "../createAssertBenchmarkProgram";

createAssertBenchmarkProgram(typia.createAssert<UltimateUnion>());
