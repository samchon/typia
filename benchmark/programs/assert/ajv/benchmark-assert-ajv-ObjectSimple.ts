import typia from "typia";

import { ObjectSimple } from "../../../../test/structures/ObjectSimple";
import { createAssertAjvBenchmarkProgram } from "./createAssertAjvBenchmarkProgram";

createAssertAjvBenchmarkProgram(
    typia.application<[ObjectSimple], "ajv">(),
);