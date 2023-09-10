import typia from "typia";

import { ObjectHierarchical } from "../../../../../test/structures/ObjectHierarchical";
import { ICollection } from "../../../../structures/ICollection";
import { createExpressServerStringifyBenchmarkProgram } from "../createExpressServerStringifyBenchmarkProgram";

createExpressServerStringifyBenchmarkProgram(
    typia.json.createStringify<ICollection<ObjectHierarchical>>(),
);
