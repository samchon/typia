import typia from "typia";

import { ObjectUnionExplicit } from "../../../structures/pure/ObjectUnionExplicit";
import { createAssertBenchmarkProgram } from "../createAssertBenchmarkProgram";

createAssertBenchmarkProgram(typia.createAssert<ObjectUnionExplicit>());
