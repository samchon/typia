import typia from "typia";

import { ObjectUnionExplicit } from "../../../../test/structures/ObjectUnionExplicit";
import { createAssertErrorBenchmarkProgram } from "../createAssertErrorBenchmarkProgram";

createAssertErrorBenchmarkProgram(typia.createAssert<ObjectUnionExplicit[]>());
