import typia from "typia";

import { ICollection } from "../../../../structures/ICollection";
import { ArrayRecursive } from "../../../../../test/structures/ArrayRecursive";
import { createExpressServerAssertBenchmarkProgram } from "../createExpressServerAssertBenchmarkProgram";

createExpressServerAssertBenchmarkProgram(
    typia.createAssert<ICollection<ArrayRecursive>>(),
);