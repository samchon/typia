import typia from "typia";

import { ObjectRecursive } from "../../../../test/structures/ObjectRecursive";
import { createValidateAjvBenchmarkProgram } from "./createValidateAjvBenchmarkProgram";

createValidateAjvBenchmarkProgram(
    typia.json.application<[ObjectRecursive], "ajv">(),
);
