import typia from "typia";

import { UltimateUnion } from "../../../structures/pure/UltimateUnion";
import { createValidateBenchmarkProgram } from "../createValidateBenchmarkProgram";

createValidateBenchmarkProgram(typia.createValidate<UltimateUnion>());
