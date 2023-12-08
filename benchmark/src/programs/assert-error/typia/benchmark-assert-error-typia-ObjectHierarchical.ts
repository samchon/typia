import typia from "typia";

import { ObjectHierarchical } from "../../../structures/pure/ObjectHierarchical";
import { createAssertErrorBenchmarkProgram } from "../createAssertErrorBenchmarkProgram";

createAssertErrorBenchmarkProgram(typia.createAssert<ObjectHierarchical[]>());
