import typia from "typia";

import { ICollection } from "../../../../structures/ICollection";
import { ObjectHierarchical } from "../../../../structures/pure/ObjectHierarchical";
import { createFastifyCustomServerAssertBenchmarkProgram } from "../createFastifyCustomServerAssertBenchmarkProgram";

createFastifyCustomServerAssertBenchmarkProgram(
  typia.createAssert<ICollection<ObjectHierarchical>>(),
);
