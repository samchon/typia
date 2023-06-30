import typia from "typia";

import { ArrayRecursive } from "../../../../../test/structures/ArrayRecursive";
import { ICollection } from "../../../../structures/ICollection";
import { createFastifyPureServerPerformanceBenchmarkProgram } from "../createFastifyPureServerPerformanceBenchmarkProgram";

createFastifyPureServerPerformanceBenchmarkProgram(
    typia.application<[ICollection<ArrayRecursive>], "ajv">(),
);
