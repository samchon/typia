import typia from "typia";

import { ObjectHierarchical } from "../../../../../test/structures/ObjectHierarchical";
import { ICollection } from "../../../../structures/ICollection";
import { createFastifyPureServerPerformanceBenchmarkProgram } from "../createFastifyPureServerPerformanceBenchmarkProgram";

createFastifyPureServerPerformanceBenchmarkProgram(
  typia.json.application<[ICollection<ObjectHierarchical>], "ajv">(),
);
