import typia from "typia";

import { UltimateUnion } from "../../../structures/pure/UltimateUnion";
import { createIsAjvBenchmarkProgram } from "./createIsAjvBenchmarkProgram";

createIsAjvBenchmarkProgram(typia.json.schemas<[UltimateUnion], "3.0">());
