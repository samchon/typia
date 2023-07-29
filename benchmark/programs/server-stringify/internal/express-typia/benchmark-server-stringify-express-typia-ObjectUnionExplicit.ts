import typia from "typia";

import { ObjectUnionExplicit } from "../../../../../test/structures/ObjectUnionExplicit";
import { ICollection } from "../../../../structures/ICollection";
import { createExpressServerStringifyBenchmarkProgram } from "../createExpressServerStringifyBenchmarkProgram";

createExpressServerStringifyBenchmarkProgram(
    typia.createStringify<ICollection<ObjectUnionExplicit>>(),
);
