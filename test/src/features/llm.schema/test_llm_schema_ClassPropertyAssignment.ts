import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_llm_schema_ClassPropertyAssignment = _test_llm_schema(
  "ClassPropertyAssignment",
)(typia.llm.schema<ClassPropertyAssignment>());
