import typia from "typia";

import { UltimateUnion } from "../../../../test/structures/UltimateUnion";
import { createValidateErrorBenchmarkProgram } from "../createValidateErrorBenchmarkProgram";

createValidateErrorBenchmarkProgram(
    typia.createValidate<UltimateUnion[]>()
);