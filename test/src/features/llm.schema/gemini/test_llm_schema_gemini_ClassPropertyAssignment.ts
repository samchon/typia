import typia from "typia";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_gemini_ClassPropertyAssignment = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "ClassPropertyAssignment",
  })(typia.llm.schema<ClassPropertyAssignment, "gemini">({}));