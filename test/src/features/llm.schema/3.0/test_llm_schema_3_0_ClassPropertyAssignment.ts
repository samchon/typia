import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";

export const test_llm_schema_3_0_ClassPropertyAssignment = _test_llm_schema({
  model: "3.0",
  name: "ClassPropertyAssignment",
})(typia.llm.schema<ClassPropertyAssignment, "3.0">());
