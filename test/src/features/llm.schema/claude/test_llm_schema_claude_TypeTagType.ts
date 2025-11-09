import typia from "typia";
import { TypeTagType } from "../../../structures/TypeTagType";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_claude_TypeTagType = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "TypeTagType",
  })(typia.llm.schema<TypeTagType, "claude">({}));