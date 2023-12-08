import typia from "typia";

import { ICollection } from "../../../../structures/ICollection";
import { ObjectHierarchical } from "../../../../structures/pure/ObjectHierarchical";
import { createExpressServerPerformanceBenchmarkProgram } from "../createExpressServerPerformanceBenchmarkProgram";

createExpressServerPerformanceBenchmarkProgram(
  typia.createAssert<ICollection<ObjectHierarchical>>(),
  typia.json.createStringify<ICollection<ObjectHierarchical>>(),
);
