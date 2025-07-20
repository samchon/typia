import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_llm_schema_gemini_ObjectLiteralProperty = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "ObjectLiteralProperty",
  })(typia.llm.schema<ObjectLiteralProperty, "gemini">());
