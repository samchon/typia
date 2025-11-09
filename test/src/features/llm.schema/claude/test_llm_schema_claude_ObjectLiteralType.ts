import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";

export const test_llm_schema_claude_ObjectLiteralType = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "ObjectLiteralType",
  })(typia.llm.schema<ObjectLiteralType, "claude">({}));
