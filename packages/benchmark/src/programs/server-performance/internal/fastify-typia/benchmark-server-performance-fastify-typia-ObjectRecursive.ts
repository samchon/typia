import typia from "typia";

import { ICollection } from "../../../../structures/ICollection";
import { ObjectRecursive } from "../../../../structures/pure/ObjectRecursive";
import { createFastifyCustomServerPerformanceBenchmarkProgram } from "../createFastifyCustomServerPerformanceBenchmarkProgram";

createFastifyCustomServerPerformanceBenchmarkProgram(
  typia.createAssert<ICollection<ObjectRecursive>>(),
  typia.json.createStringify<ICollection<ObjectRecursive>>(),
);
