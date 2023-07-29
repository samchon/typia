import typia from "typia";

import { ObjectUnionImplicit } from "../../../../test/structures/ObjectUnionImplicit";
import { createAssertAjvBenchmarkProgram } from "./createAssertAjvBenchmarkProgram";

createAssertAjvBenchmarkProgram(
    typia.application<[ObjectUnionImplicit], "ajv">(),
);
