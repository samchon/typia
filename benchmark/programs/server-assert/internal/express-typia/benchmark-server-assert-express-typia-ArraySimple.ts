import typia from "typia";

import { ArraySimple } from "../../../../../test/structures/ArraySimple";
import { ICollection } from "../../../../structures/ICollection";
import { createExpressServerAssertBenchmarkProgram } from "../createExpressServerAssertBenchmarkProgram";

createExpressServerAssertBenchmarkProgram(
    typia.createAssert<ICollection<ArraySimple>>(),
);
