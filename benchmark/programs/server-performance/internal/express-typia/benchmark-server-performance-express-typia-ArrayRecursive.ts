import typia from "typia";

import { ArrayRecursive } from "../../../../../test/structures/ArrayRecursive";
import { ICollection } from "../../../../structures/ICollection";
import { createExpressServerPerformanceBenchmarkProgram } from "../createExpressServerPerformanceBenchmarkProgram";

createExpressServerPerformanceBenchmarkProgram(
  typia.createAssert<ICollection<ArrayRecursive>>(),
  typia.json.createStringify<ICollection<ArrayRecursive>>(),
);
