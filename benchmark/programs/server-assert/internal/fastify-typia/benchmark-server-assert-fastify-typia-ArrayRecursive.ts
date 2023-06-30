import typia from "typia";

import { ArrayRecursive } from "../../../../../test/structures/ArrayRecursive";
import { ICollection } from "../../../../structures/ICollection";
import { createFastifyCustomServerAssertBenchmarkProgram } from "../createFastifyCustomServerAssertBenchmarkProgram";

createFastifyCustomServerAssertBenchmarkProgram(
    typia.createAssert<ICollection<ArrayRecursive>>(),
);
