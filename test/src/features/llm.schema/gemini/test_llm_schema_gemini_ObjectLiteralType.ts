import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";

export const test_llm_schema_gemini_ObjectLiteralType = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "ObjectLiteralType",
  })(typia.llm.schema<ObjectLiteralType, "gemini">({}));
