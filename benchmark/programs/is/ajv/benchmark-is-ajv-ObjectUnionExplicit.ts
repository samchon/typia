import typia from "typia";

import { ObjectUnionExplicit } from "../../../../test/structures/ObjectUnionExplicit";
import { createIsAjvBenchmarkProgram } from "./createIsAjvBenchmarkProgram";

createIsAjvBenchmarkProgram(
    typia.application<[ObjectUnionExplicit], "ajv">(),
);