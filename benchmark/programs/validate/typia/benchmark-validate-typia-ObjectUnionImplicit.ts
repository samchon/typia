import typia from "typia";

import { ObjectUnionImplicit } from "../../../../test/structures/ObjectUnionImplicit";
import { createValidateBenchmarkProgram } from "../createValidateBenchmarkProgram";

createValidateBenchmarkProgram(
    typia.createValidate<ObjectUnionImplicit>()
);