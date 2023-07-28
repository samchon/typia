import typia from "typia";

import { ICollection } from "../../../../structures/ICollection";
import { ArraySimple } from "../../../../../test/structures/ArraySimple";
import { createFastifyCustomServerAssertBenchmarkProgram } from "../createFastifyCustomServerAssertBenchmarkProgram";

createFastifyCustomServerAssertBenchmarkProgram(
    typia.createAssert<ICollection<ArraySimple>>(),
);