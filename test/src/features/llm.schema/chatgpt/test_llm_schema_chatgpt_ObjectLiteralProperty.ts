import typia from "typia";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_ObjectLiteralProperty = 
  _test_llm_schema({
    model: "chatgpt",
    name: "ObjectLiteralProperty",
  })(typia.llm.schema<ObjectLiteralProperty, "chatgpt">());