import typia from "typia";

import { ICollection } from "../../../../structures/ICollection";
import { ObjectUnionExplicit } from "../../../../structures/pure/ObjectUnionExplicit";
import { createExpressServerPerformanceBenchmarkProgram } from "../createExpressServerPerformanceBenchmarkProgram";

createExpressServerPerformanceBenchmarkProgram(
  typia.createAssert<ICollection<ObjectUnionExplicit>>(),
  typia.json.createStringify<ICollection<ObjectUnionExplicit>>(),
);
