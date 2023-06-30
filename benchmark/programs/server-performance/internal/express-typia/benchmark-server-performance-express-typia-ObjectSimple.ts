import typia from "typia";

import { ObjectSimple } from "../../../../../test/structures/ObjectSimple";
import { ICollection } from "../../../../structures/ICollection";
import { createExpressServerPerformanceBenchmarkProgram } from "../createExpressServerPerformanceBenchmarkProgram";

createExpressServerPerformanceBenchmarkProgram(
    typia.createAssert<ICollection<ObjectSimple>>(),
    typia.createStringify<ICollection<ObjectSimple>>(),
);
