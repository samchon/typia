import typia from "typia";

import { ArraySimple } from "../../../../../test/structures/ArraySimple";
import { ICollection } from "../../../../structures/ICollection";
import { createExpressServerPerformanceBenchmarkProgram } from "../createExpressServerPerformanceBenchmarkProgram";

createExpressServerPerformanceBenchmarkProgram(
    typia.createAssert<ICollection<ArraySimple>>(),
    typia.json.createStringify<ICollection<ArraySimple>>(),
);
