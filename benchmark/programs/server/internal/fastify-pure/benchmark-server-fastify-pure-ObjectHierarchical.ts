import typia from "typia";

import { ObjectHierarchical } from "../../../../../test/structures/ObjectHierarchical";
import { createFastifyPureServerBenchmarkProgram } from "../createFastifyPureServerBenchmarkProgram";

createFastifyPureServerBenchmarkProgram(
   typia.application<[ObjectHierarchical[]], "ajv">()
);