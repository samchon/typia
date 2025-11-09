import typia from "typia";
import { ObjectOptional } from "../../../structures/ObjectOptional";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_claude_ObjectOptional = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "ObjectOptional",
  })(typia.llm.schema<ObjectOptional, "claude">({}));