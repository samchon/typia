import typia from "typia";

import { UltimateUnion } from "../../../structures/pure/UltimateUnion";
import { createAssertAjvBenchmarkProgram } from "./createAssertAjvBenchmarkProgram";

createAssertAjvBenchmarkProgram(
  typia.json.application<[UltimateUnion], "3.0">(),
);
