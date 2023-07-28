import typia from "typia";

import { ICollection } from "../../../../structures/ICollection";
import { ArrayRecursiveUnionExplicit } from "../../../../../test/structures/ArrayRecursiveUnionExplicit";
import { createFastifyPureServerPerformanceBenchmarkProgram } from "../createFastifyPureServerPerformanceBenchmarkProgram";

createFastifyPureServerPerformanceBenchmarkProgram(
   typia.application<[ICollection<ArrayRecursiveUnionExplicit>], "ajv">()
);