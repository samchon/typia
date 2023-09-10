import typia from "typia";

import { ObjectUnionImplicit } from "../../../../test/structures/ObjectUnionImplicit";
import { createValidateAjvBenchmarkProgram } from "./createValidateAjvBenchmarkProgram";

createValidateAjvBenchmarkProgram(
    typia.json.application<[ObjectUnionImplicit], "ajv">(),
);
