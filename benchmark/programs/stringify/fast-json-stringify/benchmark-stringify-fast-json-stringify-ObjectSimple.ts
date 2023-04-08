import typia from "typia";

import { ObjectSimple } from "../../../../test/structures/ObjectSimple";
import { createStringifyFastBenchmarkProgram } from "./createStringifyFastBenchmarkProgram";

createStringifyFastBenchmarkProgram(
    typia.application<[ObjectSimple], "ajv">()
);