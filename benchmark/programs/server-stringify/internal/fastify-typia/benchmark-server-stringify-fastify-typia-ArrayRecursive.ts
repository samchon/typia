import typia from "typia";

import { ICollection } from "../../../../structures/ICollection";
import { ArrayRecursive } from "../../../../../test/structures/ArrayRecursive";
import { createFastifyCustomServerStringifyBenchmarkProgram } from "../createFastifyCustomServerStringifyBenchmarkProgram";

createFastifyCustomServerStringifyBenchmarkProgram(
    typia.createStringify<ICollection<ArrayRecursive>>(),
);