import typia from "typia";

import { UltimateUnion } from "../../../../test/structures/UltimateUnion";
import { createValidateAjvBenchmarkProgram } from "./createValidateAjvBenchmarkProgram";

createValidateAjvBenchmarkProgram(typia.application<[UltimateUnion], "ajv">());
