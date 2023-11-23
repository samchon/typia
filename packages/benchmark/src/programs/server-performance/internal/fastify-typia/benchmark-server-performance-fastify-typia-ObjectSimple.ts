import typia from "typia";

import { ObjectSimple } from "../../../../../test/structures/ObjectSimple";
import { ICollection } from "../../../../structures/ICollection";
import { createFastifyCustomServerPerformanceBenchmarkProgram } from "../createFastifyCustomServerPerformanceBenchmarkProgram";

createFastifyCustomServerPerformanceBenchmarkProgram(
  typia.createAssert<ICollection<ObjectSimple>>(),
  typia.json.createStringify<ICollection<ObjectSimple>>(),
);
