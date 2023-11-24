import typia from "typia";

import { UltimateUnion } from "../../../structures/pure/UltimateUnion";
import { createValidateErrorBenchmarkProgram } from "../createValidateErrorBenchmarkProgram";

createValidateErrorBenchmarkProgram(typia.createValidate<UltimateUnion[]>());
