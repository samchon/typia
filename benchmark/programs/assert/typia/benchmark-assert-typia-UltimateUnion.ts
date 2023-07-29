import typia from "typia";

import { UltimateUnion } from "../../../../test/structures/UltimateUnion";
import { createAssertBenchmarkProgram } from "../createAssertBenchmarkProgram";

createAssertBenchmarkProgram(typia.createAssert<UltimateUnion>());
