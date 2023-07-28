import typia from "typia";

import { ICollection } from "../../../../structures/ICollection";
import { ObjectUnionExplicit } from "../../../../../test/structures/ObjectUnionExplicit";
import { createExpressServerAssertBenchmarkProgram } from "../createExpressServerAssertBenchmarkProgram";

createExpressServerAssertBenchmarkProgram(
    typia.createAssert<ICollection<ObjectUnionExplicit>>(),
);