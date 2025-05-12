import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_llm_schema_chatgpt_ObjectLiteralProperty = _test_llm_schema({
  model: "chatgpt",
  name: "ObjectLiteralProperty",
})(typia.llm.schema<ObjectLiteralProperty, "chatgpt">({}));
