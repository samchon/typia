import typia from "typia";

import { ObjectSimple } from "../../../../../test/structures/ObjectSimple";
import { ICollection } from "../../../../structures/ICollection";
import { createFastifyCustomServerAssertBenchmarkProgram } from "../createFastifyCustomServerAssertBenchmarkProgram";

createFastifyCustomServerAssertBenchmarkProgram(
    typia.createAssert<ICollection<ObjectSimple>>(),
);
