import typia from "typia";

import { ArrayHierarchical } from "../../../../../test/structures/ArrayHierarchical";
import { ICollection } from "../../../../structures/ICollection";
import { createExpressServerPerformanceBenchmarkProgram } from "../createExpressServerPerformanceBenchmarkProgram";

createExpressServerPerformanceBenchmarkProgram(
    typia.createAssert<ICollection<ArrayHierarchical>>(),
    typia.createStringify<ICollection<ArrayHierarchical>>(),
);
