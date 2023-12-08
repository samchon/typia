import typia from "typia";

import { ArrayRecursive } from "../../../structures/pure/ArrayRecursive";
import { createValidateErrorBenchmarkProgram } from "../createValidateErrorBenchmarkProgram";

createValidateErrorBenchmarkProgram(typia.createValidate<ArrayRecursive[]>());
