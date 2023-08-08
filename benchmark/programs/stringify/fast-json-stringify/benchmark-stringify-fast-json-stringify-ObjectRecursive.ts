import typia from "typia";

import { ObjectRecursive } from "../../../../test/structures/ObjectRecursive";
import { createStringifyFastBenchmarkProgram } from "./createStringifyFastBenchmarkProgram";

createStringifyFastBenchmarkProgram(
    typia.application<[ObjectRecursive], "ajv">(),
);
