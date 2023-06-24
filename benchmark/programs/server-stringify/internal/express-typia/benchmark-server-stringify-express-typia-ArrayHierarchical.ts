import typia from "typia";

import { ICollection } from "../../../../structures/ICollection";
import { ArrayHierarchical } from "../../../../../test/structures/ArrayHierarchical";
import { createExpressServerStringifyBenchmarkProgram } from "../createExpressServerStringifyBenchmarkProgram";

createExpressServerStringifyBenchmarkProgram(
    typia.createStringify<ICollection<ArrayHierarchical>>(),
);