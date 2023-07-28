import typia from "typia";

import { ICollection } from "../../../../structures/ICollection";
import { ObjectRecursive } from "../../../../../test/structures/ObjectRecursive";
import { createExpressServerPerformanceBenchmarkProgram } from "../createExpressServerPerformanceBenchmarkProgram";

createExpressServerPerformanceBenchmarkProgram(
    typia.createAssert<ICollection<ObjectRecursive>>(),
    typia.createStringify<ICollection<ObjectRecursive>>(),
);