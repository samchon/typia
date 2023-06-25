import typia from "typia";

import { ObjectSimple } from "../../../../test/structures/ObjectSimple";
import { createIsAjvBenchmarkProgram } from "./createIsAjvBenchmarkProgram";

createIsAjvBenchmarkProgram(
    typia.application<[ObjectSimple], "ajv">(),
);