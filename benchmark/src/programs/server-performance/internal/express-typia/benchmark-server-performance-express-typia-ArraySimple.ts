import typia from "typia";

import { ICollection } from "../../../../structures/ICollection";
import { ArraySimple } from "../../../../structures/pure/ArraySimple";
import { createExpressServerPerformanceBenchmarkProgram } from "../createExpressServerPerformanceBenchmarkProgram";

createExpressServerPerformanceBenchmarkProgram(
  typia.createAssert<ICollection<ArraySimple>>(),
  typia.json.createStringify<ICollection<ArraySimple>>(),
);
