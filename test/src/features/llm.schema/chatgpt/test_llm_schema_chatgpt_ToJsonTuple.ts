import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ToJsonTuple } from "../../../structures/ToJsonTuple";

export const test_llm_schema_chatgpt_ToJsonTuple = _test_llm_schema({
  model: "chatgpt",
  name: "ToJsonTuple",
})(typia.llm.schema<ToJsonTuple, "chatgpt">());
