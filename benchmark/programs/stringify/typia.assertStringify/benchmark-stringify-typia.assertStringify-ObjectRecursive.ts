import typia from "typia";

import { ObjectRecursive } from "../../../../test/structures/ObjectRecursive";
import { createStringifyBenchmarkProgram } from "../createStringifyBenchmarkProgram";

createStringifyBenchmarkProgram(
    typia.createAssertStringify<ObjectRecursive>()
);