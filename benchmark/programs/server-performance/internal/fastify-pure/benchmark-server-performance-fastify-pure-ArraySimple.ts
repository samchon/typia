import typia from "typia";

import { ArraySimple } from "../../../../../test/structures/ArraySimple";
import { ICollection } from "../../../../structures/ICollection";
import { createFastifyPureServerPerformanceBenchmarkProgram } from "../createFastifyPureServerPerformanceBenchmarkProgram";

createFastifyPureServerPerformanceBenchmarkProgram(
    typia.json.application<[ICollection<ArraySimple>], "ajv">(),
);
