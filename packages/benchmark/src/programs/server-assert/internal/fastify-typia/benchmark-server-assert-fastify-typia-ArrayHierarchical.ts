import typia from "typia";

import { ArrayHierarchical } from "../../../../../test/structures/ArrayHierarchical";
import { ICollection } from "../../../../structures/ICollection";
import { createFastifyCustomServerAssertBenchmarkProgram } from "../createFastifyCustomServerAssertBenchmarkProgram";

createFastifyCustomServerAssertBenchmarkProgram(
  typia.createAssert<ICollection<ArrayHierarchical>>(),
);
