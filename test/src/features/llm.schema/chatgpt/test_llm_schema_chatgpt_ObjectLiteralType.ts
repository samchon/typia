import typia from "typia";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_ObjectLiteralType = (): void =>
  _test_llm_schema({
    model: "chatgpt",
    name: "ObjectLiteralType",
  })(typia.llm.schema<ObjectLiteralType, "chatgpt">({}));