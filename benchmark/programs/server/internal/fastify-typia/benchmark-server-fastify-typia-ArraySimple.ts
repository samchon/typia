import typia from "typia";

import { ArraySimple } from "../../../../../test/structures/ArraySimple";
import { createFastifyCustomServerBenchmarkProgram } from "../createFastifyCustomServerBenchmarkProgram";

createFastifyCustomServerBenchmarkProgram(
    typia.createStringify<ArraySimple[]>(),
);
