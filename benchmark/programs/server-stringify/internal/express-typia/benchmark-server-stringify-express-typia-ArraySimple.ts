import typia from "typia";

import { ICollection } from "../../../../structures/ICollection";
import { ArraySimple } from "../../../../../test/structures/ArraySimple";
import { createExpressServerStringifyBenchmarkProgram } from "../createExpressServerStringifyBenchmarkProgram";

createExpressServerStringifyBenchmarkProgram(
    typia.createStringify<ICollection<ArraySimple>>(),
);