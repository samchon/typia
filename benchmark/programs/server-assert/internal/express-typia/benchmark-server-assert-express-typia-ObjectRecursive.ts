import typia from "typia";

import { ObjectRecursive } from "../../../../../test/structures/ObjectRecursive";
import { ICollection } from "../../../../structures/ICollection";
import { createExpressServerAssertBenchmarkProgram } from "../createExpressServerAssertBenchmarkProgram";

createExpressServerAssertBenchmarkProgram(
    typia.createAssert<ICollection<ObjectRecursive>>(),
);
