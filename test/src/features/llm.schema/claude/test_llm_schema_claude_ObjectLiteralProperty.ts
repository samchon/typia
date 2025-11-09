import typia from "typia";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_claude_ObjectLiteralProperty = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "ObjectLiteralProperty",
  })(typia.llm.schema<ObjectLiteralProperty, "claude">({}));