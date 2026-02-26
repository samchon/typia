import typia from "typia";

import { ObjectRecursive } from "../../../structures/pure/ObjectRecursive";
import { createAssertErrorBenchmarkProgram } from "../createAssertErrorBenchmarkProgram";

createAssertErrorBenchmarkProgram(typia.createAssert<ObjectRecursive[]>());
