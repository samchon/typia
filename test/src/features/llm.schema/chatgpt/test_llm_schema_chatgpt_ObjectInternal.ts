import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectInternal } from "../../../structures/ObjectInternal";

export const test_llm_schema_chatgpt_ObjectInternal = (): void =>
  _test_llm_schema({
    model: "chatgpt",
    name: "ObjectInternal",
  })(typia.llm.schema<ObjectInternal, "chatgpt">({}));
