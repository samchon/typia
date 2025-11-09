import typia from "typia";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_claude_ObjectPrimitive = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "ObjectPrimitive",
  })(typia.llm.schema<ObjectPrimitive, "claude">({}));