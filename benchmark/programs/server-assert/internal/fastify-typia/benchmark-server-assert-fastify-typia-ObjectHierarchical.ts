import typia from "typia";

import { ICollection } from "../../../../structures/ICollection";
import { ObjectHierarchical } from "../../../../../test/structures/ObjectHierarchical";
import { createFastifyCustomServerAssertBenchmarkProgram } from "../createFastifyCustomServerAssertBenchmarkProgram";

createFastifyCustomServerAssertBenchmarkProgram(
    typia.createAssert<ICollection<ObjectHierarchical>>(),
);