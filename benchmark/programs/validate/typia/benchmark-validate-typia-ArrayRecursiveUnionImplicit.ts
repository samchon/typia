import typia from "typia";

import { ArrayRecursiveUnionImplicit } from "../../../../test/structures/ArrayRecursiveUnionImplicit";
import { createValidateBenchmarkProgram } from "../createValidateBenchmarkProgram";

createValidateBenchmarkProgram(
    typia.createValidate<ArrayRecursiveUnionImplicit>()
);