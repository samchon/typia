import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectPartialAndRequired } from "../../../structures/ObjectPartialAndRequired";

export const test_llm_schema_chatgpt_ObjectPartialAndRequired = (): void =>
  _test_llm_schema({
    model: "chatgpt",
    name: "ObjectPartialAndRequired",
  })(typia.llm.schema<ObjectPartialAndRequired, "chatgpt">({}));
