import typia from "typia";

import { ObjectSimple } from "../../../structures/pure/ObjectSimple";
import { createValidateBenchmarkProgram } from "../createValidateBenchmarkProgram";

createValidateBenchmarkProgram(typia.createValidate<ObjectSimple>());
