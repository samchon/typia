import typia from "typia";

import { ICollection } from "../../../../structures/ICollection";
import { ObjectRecursive } from "../../../../../test/structures/ObjectRecursive";
import { createExpressServerAssertBenchmarkProgram } from "../createExpressServerAssertBenchmarkProgram";

createExpressServerAssertBenchmarkProgram(
    typia.createAssert<ICollection<ObjectRecursive>>(),
);