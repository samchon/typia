import typia from "typia";

import { UltimateUnion } from "../../../structures/pure/UltimateUnion";
import { createIsAjvBenchmarkProgram } from "./createIsAjvBenchmarkProgram";

createIsAjvBenchmarkProgram(typia.json.application<[UltimateUnion], "3.0">());
