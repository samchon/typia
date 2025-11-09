import typia from "typia";
import { TypeTagDefault } from "../../../structures/TypeTagDefault";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_claude_TypeTagDefault = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "TypeTagDefault",
  })(typia.llm.schema<TypeTagDefault, "claude">({}));