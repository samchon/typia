import typia from "typia";

import { ObjectUnionExplicit } from "../../../structures/pure/ObjectUnionExplicit";
import { createAssertErrorBenchmarkProgram } from "../createAssertErrorBenchmarkProgram";

createAssertErrorBenchmarkProgram(typia.createAssert<ObjectUnionExplicit[]>());
