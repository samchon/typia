import typia from "typia";
import { ObjectNullable } from "../../../structures/ObjectNullable";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_claude_ObjectNullable = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "ObjectNullable",
  })(typia.llm.schema<ObjectNullable, "claude">({}));