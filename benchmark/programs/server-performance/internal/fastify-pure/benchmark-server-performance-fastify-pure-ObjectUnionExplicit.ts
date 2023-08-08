import typia from "typia";

import { ObjectUnionExplicit } from "../../../../../test/structures/ObjectUnionExplicit";
import { ICollection } from "../../../../structures/ICollection";
import { createFastifyPureServerPerformanceBenchmarkProgram } from "../createFastifyPureServerPerformanceBenchmarkProgram";

createFastifyPureServerPerformanceBenchmarkProgram(
    typia.application<[ICollection<ObjectUnionExplicit>], "ajv">(),
);
