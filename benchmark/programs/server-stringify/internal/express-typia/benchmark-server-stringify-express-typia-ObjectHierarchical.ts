import typia from "typia";

import { ICollection } from "../../../../structures/ICollection";
import { ObjectHierarchical } from "../../../../../test/structures/ObjectHierarchical";
import { createExpressServerStringifyBenchmarkProgram } from "../createExpressServerStringifyBenchmarkProgram";

createExpressServerStringifyBenchmarkProgram(
    typia.createStringify<ICollection<ObjectHierarchical>>(),
);