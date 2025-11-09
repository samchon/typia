import typia from "typia";
import { ObjectPartialAndRequired } from "../../../structures/ObjectPartialAndRequired";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_claude_ObjectPartialAndRequired = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "ObjectPartialAndRequired",
  })(typia.llm.schema<ObjectPartialAndRequired, "claude">({}));