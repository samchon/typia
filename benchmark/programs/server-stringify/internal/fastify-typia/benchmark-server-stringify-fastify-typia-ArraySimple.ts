import typia from "typia";

import { ArraySimple } from "../../../../../test/structures/ArraySimple";
import { ICollection } from "../../../../structures/ICollection";
import { createFastifyCustomServerStringifyBenchmarkProgram } from "../createFastifyCustomServerStringifyBenchmarkProgram";

createFastifyCustomServerStringifyBenchmarkProgram(
    typia.json.createStringify<ICollection<ArraySimple>>(),
);
