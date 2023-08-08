import typia from "typia";

import { UltimateUnion } from "../../../../test/structures/UltimateUnion";
import { createValidateBenchmarkProgram } from "../createValidateBenchmarkProgram";

createValidateBenchmarkProgram(typia.createValidate<UltimateUnion>());
