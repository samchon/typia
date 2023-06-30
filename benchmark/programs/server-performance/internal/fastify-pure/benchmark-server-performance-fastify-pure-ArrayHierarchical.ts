import typia from "typia";

import { ArrayHierarchical } from "../../../../../test/structures/ArrayHierarchical";
import { ICollection } from "../../../../structures/ICollection";
import { createFastifyPureServerPerformanceBenchmarkProgram } from "../createFastifyPureServerPerformanceBenchmarkProgram";

createFastifyPureServerPerformanceBenchmarkProgram(
    typia.application<[ICollection<ArrayHierarchical>], "ajv">(),
);
