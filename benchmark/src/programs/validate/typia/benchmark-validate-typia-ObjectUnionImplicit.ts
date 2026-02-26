import typia from "typia";

import { ObjectUnionImplicit } from "../../../structures/pure/ObjectUnionImplicit";
import { createValidateBenchmarkProgram } from "../createValidateBenchmarkProgram";

createValidateBenchmarkProgram(typia.createValidate<ObjectUnionImplicit>());
