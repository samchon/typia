import typia from "typia";

import { ICollection } from "../../../../structures/ICollection";
import { ObjectRecursive } from "../../../../../test/structures/ObjectRecursive";
import { createFastifyCustomServerAssertBenchmarkProgram } from "../createFastifyCustomServerAssertBenchmarkProgram";

createFastifyCustomServerAssertBenchmarkProgram(
    typia.createAssert<ICollection<ObjectRecursive>>(),
);