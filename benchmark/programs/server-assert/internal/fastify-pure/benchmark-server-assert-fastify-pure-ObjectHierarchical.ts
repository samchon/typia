import typia from "typia";

import { ObjectHierarchical } from "../../../../../test/structures/ObjectHierarchical";
import { ICollection } from "../../../../structures/ICollection";
import { createFastifyPureServerAssertBenchmarkProgram } from "../createFastifyPureServerAssertBenchmarkProgram";

createFastifyPureServerAssertBenchmarkProgram(
    typia.application<[ICollection<ObjectHierarchical>], "ajv">(),
);
