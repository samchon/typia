import typia from "typia";

import { UltimateUnion } from "../../../structures/pure/UltimateUnion";
import { createValidateAjvBenchmarkProgram } from "./createValidateAjvBenchmarkProgram";

createValidateAjvBenchmarkProgram(typia.json.application<[UltimateUnion]>());
