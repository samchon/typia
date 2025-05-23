import typia from "typia";

import { ICollection } from "../../../../structures/ICollection";
import { ObjectSimple } from "../../../../structures/pure/ObjectSimple";
import { createFastifyPureServerPerformanceBenchmarkProgram } from "../createFastifyPureServerPerformanceBenchmarkProgram";

createFastifyPureServerPerformanceBenchmarkProgram(
  typia.json.schemas<[ICollection<ObjectSimple>], "3.0">(),
);
