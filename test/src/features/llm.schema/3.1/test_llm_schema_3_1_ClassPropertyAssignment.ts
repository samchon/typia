import typia from "typia";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_1_ClassPropertyAssignment = (): void =>
  _test_llm_schema({
    model: "3.1",
    name: "ClassPropertyAssignment",
  })(typia.llm.schema<ClassPropertyAssignment, "3.1">({}));