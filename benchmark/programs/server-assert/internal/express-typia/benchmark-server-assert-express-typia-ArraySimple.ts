import typia from "typia";

import { ICollection } from "../../../../structures/ICollection";
import { ArraySimple } from "../../../../../test/structures/ArraySimple";
import { createExpressServerAssertBenchmarkProgram } from "../createExpressServerAssertBenchmarkProgram";

createExpressServerAssertBenchmarkProgram(
    typia.createAssert<ICollection<ArraySimple>>(),
);