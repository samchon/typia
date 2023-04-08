import typia from "typia";

import { ObjectHierarchical } from "../../../../test/structures/ObjectHierarchical";
import { createValidateBenchmarkProgram } from "../createValidateBenchmarkProgram";

createValidateBenchmarkProgram(typia.createValidate<ObjectHierarchical>());
