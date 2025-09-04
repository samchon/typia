import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";

export const test_llm_schema_chatgpt_ObjectJsonTag = (): void =>
  _test_llm_schema({
    model: "chatgpt",
    name: "ObjectJsonTag",
  })(typia.llm.schema<ObjectJsonTag, "chatgpt">({}));
