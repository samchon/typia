import typia from "typia";

import { ICollection } from "../../../../structures/ICollection";
import { ArrayRecursive } from "../../../../../test/structures/ArrayRecursive";
import { createFastifyPureServerAssertBenchmarkProgram } from "../createFastifyPureServerAssertBenchmarkProgram";

createFastifyPureServerAssertBenchmarkProgram(
   typia.application<[ICollection<ArrayRecursive>], "ajv">()
);