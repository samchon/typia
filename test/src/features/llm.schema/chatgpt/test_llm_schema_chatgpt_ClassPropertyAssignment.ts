import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";

export const test_llm_schema_chatgpt_ClassPropertyAssignment = _test_llm_schema(
  {
    model: "chatgpt",
    name: "ClassPropertyAssignment",
  },
)(typia.llm.schema<ClassPropertyAssignment, "chatgpt">());
