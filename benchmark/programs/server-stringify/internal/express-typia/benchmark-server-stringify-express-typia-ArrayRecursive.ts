import typia from "typia";

import { ArrayRecursive } from "../../../../../test/structures/ArrayRecursive";
import { ICollection } from "../../../../structures/ICollection";
import { createExpressServerStringifyBenchmarkProgram } from "../createExpressServerStringifyBenchmarkProgram";

createExpressServerStringifyBenchmarkProgram(
    typia.createStringify<ICollection<ArrayRecursive>>(),
);
