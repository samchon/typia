import typia from "typia";

import { ICollection } from "../../../../structures/ICollection";
import { ObjectRecursive } from "../../../../../test/structures/ObjectRecursive";
import { createFastifyCustomServerPerformanceBenchmarkProgram } from "../createFastifyCustomServerPerformanceBenchmarkProgram";

createFastifyCustomServerPerformanceBenchmarkProgram(
    typia.createAssert<ICollection<ObjectRecursive>>(),
    typia.createStringify<ICollection<ObjectRecursive>>(),
);