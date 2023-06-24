import typia from "typia";

import { ICollection } from "../../../../structures/ICollection";
import { ArrayHierarchical } from "../../../../../test/structures/ArrayHierarchical";
import { createFastifyPureServerAssertBenchmarkProgram } from "../createFastifyPureServerAssertBenchmarkProgram";

createFastifyPureServerAssertBenchmarkProgram(
   typia.application<[ICollection<ArrayHierarchical>], "ajv">()
);