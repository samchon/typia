import typia from "typia";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_ToJsonDouble = (): void =>
  _test_llm_schema({
    model: "chatgpt",
    name: "ToJsonDouble",
  })(typia.llm.schema<ToJsonDouble, "chatgpt">({}));