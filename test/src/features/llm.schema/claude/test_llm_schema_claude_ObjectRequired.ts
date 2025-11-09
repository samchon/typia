import typia from "typia";
import { ObjectRequired } from "../../../structures/ObjectRequired";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_claude_ObjectRequired = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "ObjectRequired",
  })(typia.llm.schema<ObjectRequired, "claude">({}));