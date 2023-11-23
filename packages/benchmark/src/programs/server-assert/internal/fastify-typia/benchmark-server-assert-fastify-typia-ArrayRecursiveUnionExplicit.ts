import typia from "typia";

import { ArrayRecursiveUnionExplicit } from "../../../../../test/structures/ArrayRecursiveUnionExplicit";
import { ICollection } from "../../../../structures/ICollection";
import { createFastifyCustomServerAssertBenchmarkProgram } from "../createFastifyCustomServerAssertBenchmarkProgram";

createFastifyCustomServerAssertBenchmarkProgram(
  typia.createAssert<ICollection<ArrayRecursiveUnionExplicit>>(),
);
