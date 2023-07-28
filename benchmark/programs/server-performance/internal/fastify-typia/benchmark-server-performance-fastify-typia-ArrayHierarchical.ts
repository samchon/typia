import typia from "typia";

import { ICollection } from "../../../../structures/ICollection";
import { ArrayHierarchical } from "../../../../../test/structures/ArrayHierarchical";
import { createFastifyCustomServerPerformanceBenchmarkProgram } from "../createFastifyCustomServerPerformanceBenchmarkProgram";

createFastifyCustomServerPerformanceBenchmarkProgram(
    typia.createAssert<ICollection<ArrayHierarchical>>(),
    typia.createStringify<ICollection<ArrayHierarchical>>(),
);