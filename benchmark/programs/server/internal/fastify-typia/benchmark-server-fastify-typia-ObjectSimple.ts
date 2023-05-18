import typia from "typia";

import { ObjectSimple } from "../../../../../test/structures/ObjectSimple";
import { createFastifyCustomServerBenchmarkProgram } from "../createFastifyCustomServerBenchmarkProgram";

createFastifyCustomServerBenchmarkProgram(
    typia.createStringify<ObjectSimple[]>(),
);
