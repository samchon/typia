import typia from "typia";
import { TypeTagMatrix } from "../../../structures/TypeTagMatrix";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_claude_TypeTagMatrix = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "TypeTagMatrix",
  })(typia.llm.schema<TypeTagMatrix, "claude">({}));