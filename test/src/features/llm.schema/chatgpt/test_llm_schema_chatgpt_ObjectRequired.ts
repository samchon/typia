import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectRequired } from "../../../structures/ObjectRequired";

export const test_llm_schema_chatgpt_ObjectRequired = (): void =>
  _test_llm_schema({
    model: "chatgpt",
    name: "ObjectRequired",
  })(typia.llm.schema<ObjectRequired, "chatgpt">({}));
