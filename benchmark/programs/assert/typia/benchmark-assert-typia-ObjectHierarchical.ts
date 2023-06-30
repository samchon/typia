import typia from "typia";

import { ObjectHierarchical } from "../../../../test/structures/ObjectHierarchical";
import { createAssertBenchmarkProgram } from "../createAssertBenchmarkProgram";

createAssertBenchmarkProgram(typia.createAssert<ObjectHierarchical>());
