import typia from "typia";

import { ObjectHierarchical } from "../../../../../test/structures/ObjectHierarchical";
import { createFastifyCustomServerBenchmarkProgram } from "../createFastifyCustomServerBenchmarkProgram";

createFastifyCustomServerBenchmarkProgram(
    typia.createStringify<ObjectHierarchical[]>(),
);