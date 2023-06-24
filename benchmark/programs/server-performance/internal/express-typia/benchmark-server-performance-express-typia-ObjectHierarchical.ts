import typia from "typia";

import { ICollection } from "../../../../structures/ICollection";
import { ObjectHierarchical } from "../../../../../test/structures/ObjectHierarchical";
import { createExpressServerPerformanceBenchmarkProgram } from "../createExpressServerPerformanceBenchmarkProgram";

createExpressServerPerformanceBenchmarkProgram(
    typia.createAssert<ICollection<ObjectHierarchical>>(),
    typia.createStringify<ICollection<ObjectHierarchical>>(),
);