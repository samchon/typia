import typia from "typia";

import { ArrayHierarchical } from "../../../../../test/structures/ArrayHierarchical";
import { ICollection } from "../../../../structures/ICollection";
import { createExpressServerStringifyBenchmarkProgram } from "../createExpressServerStringifyBenchmarkProgram";

createExpressServerStringifyBenchmarkProgram(
    typia.json.createStringify<ICollection<ArrayHierarchical>>(),
);
