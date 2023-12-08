import typia from "typia";

import { ObjectSimple } from "../../../structures/pure/ObjectSimple";
import { createValidateErrorBenchmarkProgram } from "../createValidateErrorBenchmarkProgram";

createValidateErrorBenchmarkProgram(typia.createValidate<ObjectSimple[]>());
