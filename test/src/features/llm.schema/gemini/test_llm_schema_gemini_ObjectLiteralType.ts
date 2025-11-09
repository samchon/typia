import typia from "typia";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_gemini_ObjectLiteralType = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "ObjectLiteralType",
  })(typia.llm.schema<ObjectLiteralType, "gemini">({}));