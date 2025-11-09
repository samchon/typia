import typia from "typia";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_claude_ObjectDynamic = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "ObjectDynamic",
  })(typia.llm.schema<ObjectDynamic, "claude">({}));