import typia from "typia";
import { ObjectUndefined } from "../../../structures/ObjectUndefined";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_claude_ObjectUndefined = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "ObjectUndefined",
  })(typia.llm.schema<ObjectUndefined, "claude">({}));