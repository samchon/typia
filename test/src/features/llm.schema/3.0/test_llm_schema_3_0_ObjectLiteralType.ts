import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";

export const test_llm_schema_3_0_ObjectLiteralType = _test_llm_schema({
  model: "3.0",
  name: "ObjectLiteralType",
})(typia.llm.schema<ObjectLiteralType, "3.0">());
