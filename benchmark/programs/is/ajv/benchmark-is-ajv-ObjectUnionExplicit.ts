import typia from "typia";

import { ObjectUnionExplicit } from "../../../../test/structures/ObjectUnionExplicit";
import { createIsAjvBenchmarkProgram } from "./createIsAjvBenchmarkProgram";

createIsAjvBenchmarkProgram(
    typia.json.application<[ObjectUnionExplicit], "ajv">(),
);
