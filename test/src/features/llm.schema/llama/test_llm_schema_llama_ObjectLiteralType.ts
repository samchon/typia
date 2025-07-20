import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";

export const test_llm_schema_llama_ObjectLiteralType = (): void =>
  _test_llm_schema({
    model: "llama",
    name: "ObjectLiteralType",
  })(typia.llm.schema<ObjectLiteralType, "llama">({}));
