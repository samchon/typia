import typia from "typia";

import { ICollection } from "../../../../structures/ICollection";
import { ArrayHierarchical } from "../../../../../test/structures/ArrayHierarchical";
import { createExpressServerAssertBenchmarkProgram } from "../createExpressServerAssertBenchmarkProgram";

createExpressServerAssertBenchmarkProgram(
    typia.createAssert<ICollection<ArrayHierarchical>>(),
);