import typia from "typia";

import { ArrayRecursive } from "../../../../../test/structures/ArrayRecursive";
import { ICollection } from "../../../../structures/ICollection";
import { createFastifyPureServerAssertBenchmarkProgram } from "../createFastifyPureServerAssertBenchmarkProgram";

createFastifyPureServerAssertBenchmarkProgram(
    typia.json.application<[ICollection<ArrayRecursive>], "ajv">(),
);
