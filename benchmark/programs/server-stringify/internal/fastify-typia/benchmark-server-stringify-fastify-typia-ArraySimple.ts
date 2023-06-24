import typia from "typia";

import { ICollection } from "../../../../structures/ICollection";
import { ArraySimple } from "../../../../../test/structures/ArraySimple";
import { createFastifyCustomServerStringifyBenchmarkProgram } from "../createFastifyCustomServerStringifyBenchmarkProgram";

createFastifyCustomServerStringifyBenchmarkProgram(
    typia.createStringify<ICollection<ArraySimple>>(),
);