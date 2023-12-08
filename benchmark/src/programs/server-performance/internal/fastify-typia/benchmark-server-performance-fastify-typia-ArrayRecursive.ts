import typia from "typia";

import { ICollection } from "../../../../structures/ICollection";
import { ArrayRecursive } from "../../../../structures/pure/ArrayRecursive";
import { createFastifyCustomServerPerformanceBenchmarkProgram } from "../createFastifyCustomServerPerformanceBenchmarkProgram";

createFastifyCustomServerPerformanceBenchmarkProgram(
  typia.createAssert<ICollection<ArrayRecursive>>(),
  typia.json.createStringify<ICollection<ArrayRecursive>>(),
);
