import typia from "typia";

import { ObjectSimple } from "../../../../test/structures/ObjectSimple";
import { createValidateErrorBenchmarkProgram } from "../createValidateErrorBenchmarkProgram";

createValidateErrorBenchmarkProgram(typia.createValidate<ObjectSimple[]>());
