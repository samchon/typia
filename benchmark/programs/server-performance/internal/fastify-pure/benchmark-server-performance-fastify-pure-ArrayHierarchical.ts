import typia from "typia";

import { ICollection } from "../../../../structures/ICollection";
import { ArrayHierarchical } from "../../../../../test/structures/ArrayHierarchical";
import { createFastifyPureServerPerformanceBenchmarkProgram } from "../createFastifyPureServerPerformanceBenchmarkProgram";

createFastifyPureServerPerformanceBenchmarkProgram(
   typia.application<[ICollection<ArrayHierarchical>], "ajv">()
);