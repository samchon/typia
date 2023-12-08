import typia from "typia";

import { ICollection } from "../../../../structures/ICollection";
import { ArrayRecursiveUnionExplicit } from "../../../../structures/pure/ArrayRecursiveUnionExplicit";
import { createFastifyPureServerPerformanceBenchmarkProgram } from "../createFastifyPureServerPerformanceBenchmarkProgram";

createFastifyPureServerPerformanceBenchmarkProgram(
  typia.json.application<[ICollection<ArrayRecursiveUnionExplicit>], "ajv">(),
);
