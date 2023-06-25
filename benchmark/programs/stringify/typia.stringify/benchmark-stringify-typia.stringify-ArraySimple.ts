import typia from "typia";

import { ArraySimple } from "../../../../test/structures/ArraySimple";
import { createStringifyBenchmarkProgram } from "../createStringifyBenchmarkProgram";

createStringifyBenchmarkProgram(
    typia.createStringify<ArraySimple>()
);