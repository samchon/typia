import typia from "typia";

import { ObjectHierarchical } from "../../../../test/structures/ObjectHierarchical";
import { createIsBenchmarkProgram } from "../createIsBenchmarkProgram";

createIsBenchmarkProgram(
    typia.createIs<ObjectHierarchical>()
);