import typia from "typia";
import { TypeTagLength } from "../../../structures/TypeTagLength";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_claude_TypeTagLength = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "TypeTagLength",
  })(typia.llm.schema<TypeTagLength, "claude">({}));