import typia from "typia";

import { ICollection } from "../../../../structures/ICollection";
import { ArrayRecursiveUnionExplicit } from "../../../../../test/structures/ArrayRecursiveUnionExplicit";
import { createExpressServerStringifyBenchmarkProgram } from "../createExpressServerStringifyBenchmarkProgram";

createExpressServerStringifyBenchmarkProgram(
    typia.createStringify<ICollection<ArrayRecursiveUnionExplicit>>(),
);