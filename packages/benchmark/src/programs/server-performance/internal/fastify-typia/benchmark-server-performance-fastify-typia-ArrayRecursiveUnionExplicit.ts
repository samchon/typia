import typia from "typia";

import { ArrayRecursiveUnionExplicit } from "../../../../../test/structures/ArrayRecursiveUnionExplicit";
import { ICollection } from "../../../../structures/ICollection";
import { createFastifyCustomServerPerformanceBenchmarkProgram } from "../createFastifyCustomServerPerformanceBenchmarkProgram";

createFastifyCustomServerPerformanceBenchmarkProgram(
  typia.createAssert<ICollection<ArrayRecursiveUnionExplicit>>(),
  typia.json.createStringify<ICollection<ArrayRecursiveUnionExplicit>>(),
);
