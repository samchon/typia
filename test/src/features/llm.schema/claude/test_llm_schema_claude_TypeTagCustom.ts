import typia from "typia";
import { TypeTagCustom } from "../../../structures/TypeTagCustom";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_claude_TypeTagCustom = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "TypeTagCustom",
  })(typia.llm.schema<TypeTagCustom, "claude">({}));