import typia from "typia";

import { UltimateUnion } from "../../../structures/pure/UltimateUnion";
import { createAssertErrorBenchmarkProgram } from "../createAssertErrorBenchmarkProgram";

createAssertErrorBenchmarkProgram(typia.createAssert<UltimateUnion[]>());
