import typia from "typia";

import { ObjectHierarchical } from "../../../../../test/structures/ObjectHierarchical";
import { createFastifyServerBenchmarkProgram } from "../createFastifyServerBenchmarkProgram";

createFastifyServerBenchmarkProgram(
   typia.application<[ObjectHierarchical[]], "ajv", "#/definitions">()
);