import typia from "typia";

import { ObjectSimple } from "../../../../test/structures/ObjectSimple";
import { createValidateBenchmarkProgram } from "../createValidateBenchmarkProgram";

createValidateBenchmarkProgram(
    typia.createValidate<ObjectSimple>()
);