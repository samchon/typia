import typia from "typia";

import { ICollection } from "../../../../structures/ICollection";
import { ArrayRecursive } from "../../../../../test/structures/ArrayRecursive";
import { createExpressServerPerformanceBenchmarkProgram } from "../createExpressServerPerformanceBenchmarkProgram";

createExpressServerPerformanceBenchmarkProgram(
    typia.createAssert<ICollection<ArrayRecursive>>(),
    typia.createStringify<ICollection<ArrayRecursive>>(),
);