import typia from "typia";

import { ICollection } from "../../../../structures/ICollection";
import { ArraySimple } from "../../../../../test/structures/ArraySimple";
import { createFastifyCustomServerPerformanceBenchmarkProgram } from "../createFastifyCustomServerPerformanceBenchmarkProgram";

createFastifyCustomServerPerformanceBenchmarkProgram(
    typia.createAssert<ICollection<ArraySimple>>(),
    typia.createStringify<ICollection<ArraySimple>>(),
);