import typia from "typia";
import { ObjectDate } from "../../../structures/ObjectDate";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_claude_ObjectDate = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "ObjectDate",
  })(typia.llm.schema<ObjectDate, "claude">({}));