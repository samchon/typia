import typia from "typia";

import { UltimateUnion } from "../../../../test/structures/UltimateUnion";
import { createAssertErrorBenchmarkProgram } from "../createAssertErrorBenchmarkProgram";

createAssertErrorBenchmarkProgram(typia.createAssert<UltimateUnion[]>());
