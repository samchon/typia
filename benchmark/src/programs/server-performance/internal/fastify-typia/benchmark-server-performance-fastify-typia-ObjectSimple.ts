import typia from "typia";

import { ICollection } from "../../../../structures/ICollection";
import { ObjectSimple } from "../../../../structures/pure/ObjectSimple";
import { createFastifyCustomServerPerformanceBenchmarkProgram } from "../createFastifyCustomServerPerformanceBenchmarkProgram";

createFastifyCustomServerPerformanceBenchmarkProgram(
  typia.createAssert<ICollection<ObjectSimple>>(),
  typia.json.createStringify<ICollection<ObjectSimple>>(),
);
