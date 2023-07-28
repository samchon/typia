import typia from "typia";

import { ObjectSimple } from "../../../../test/structures/ObjectSimple";
import { createValidateAjvBenchmarkProgram } from "./createValidateAjvBenchmarkProgram";

createValidateAjvBenchmarkProgram(
    typia.application<[ObjectSimple], "ajv">(),
);