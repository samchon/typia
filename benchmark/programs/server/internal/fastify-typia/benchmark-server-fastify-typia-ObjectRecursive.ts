import typia from "typia";

import { ObjectRecursive } from "../../../../../test/structures/ObjectRecursive";
import { createFastifyCustomServerBenchmarkProgram } from "../createFastifyCustomServerBenchmarkProgram";

createFastifyCustomServerBenchmarkProgram(
    typia.createStringify<ObjectRecursive[]>(),
);
