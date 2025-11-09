import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectDate } from "../../../structures/ObjectDate";

export const test_llm_schema_chatgpt_ObjectDate = (): void =>
  _test_llm_schema({
    model: "chatgpt",
    name: "ObjectDate",
  })(typia.llm.schema<ObjectDate, "chatgpt">({}));
