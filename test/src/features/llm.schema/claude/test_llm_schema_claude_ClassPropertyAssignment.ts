import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";

export const test_llm_schema_claude_ClassPropertyAssignment = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "ClassPropertyAssignment",
  })(typia.llm.schema<ClassPropertyAssignment, "claude">({}));
