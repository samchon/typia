import typia from "typia";

import { ObjectHierarchical } from "../../../../../test/structures/ObjectHierarchical";
import { ICollection } from "../../../../structures/ICollection";
import { createFastifyCustomServerPerformanceBenchmarkProgram } from "../createFastifyCustomServerPerformanceBenchmarkProgram";

createFastifyCustomServerPerformanceBenchmarkProgram(
    typia.createAssert<ICollection<ObjectHierarchical>>(),
    typia.json.createStringify<ICollection<ObjectHierarchical>>(),
);
