import typia from "typia";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_1_ObjectLiteralType = (): void =>
  _test_llm_schema({
    model: "3.1",
    name: "ObjectLiteralType",
  })(typia.llm.schema<ObjectLiteralType, "3.1">({}));