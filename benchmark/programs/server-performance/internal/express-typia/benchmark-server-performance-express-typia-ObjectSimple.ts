import typia from "typia";

import { ICollection } from "../../../../structures/ICollection";
import { ObjectSimple } from "../../../../../test/structures/ObjectSimple";
import { createExpressServerPerformanceBenchmarkProgram } from "../createExpressServerPerformanceBenchmarkProgram";

createExpressServerPerformanceBenchmarkProgram(
    typia.createAssert<ICollection<ObjectSimple>>(),
    typia.createStringify<ICollection<ObjectSimple>>(),
);