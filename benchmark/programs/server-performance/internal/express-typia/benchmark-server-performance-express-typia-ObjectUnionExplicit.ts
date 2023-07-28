import typia from "typia";

import { ICollection } from "../../../../structures/ICollection";
import { ObjectUnionExplicit } from "../../../../../test/structures/ObjectUnionExplicit";
import { createExpressServerPerformanceBenchmarkProgram } from "../createExpressServerPerformanceBenchmarkProgram";

createExpressServerPerformanceBenchmarkProgram(
    typia.createAssert<ICollection<ObjectUnionExplicit>>(),
    typia.createStringify<ICollection<ObjectUnionExplicit>>(),
);