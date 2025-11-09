import typia from "typia";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_claude_ObjectJsonTag = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "ObjectJsonTag",
  })(typia.llm.schema<ObjectJsonTag, "claude">({}));