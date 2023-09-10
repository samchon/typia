import typia from "typia";

import { ObjectSimple } from "../../../../test/structures/ObjectSimple";
import { createValidateAjvBenchmarkProgram } from "./createValidateAjvBenchmarkProgram";

createValidateAjvBenchmarkProgram(
    typia.json.application<[ObjectSimple], "ajv">(),
);
