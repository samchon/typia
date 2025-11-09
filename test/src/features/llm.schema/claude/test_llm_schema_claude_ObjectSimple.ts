import typia from "typia";
import { ObjectSimple } from "../../../structures/ObjectSimple";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_claude_ObjectSimple = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "ObjectSimple",
  })(typia.llm.schema<ObjectSimple, "claude">({}));