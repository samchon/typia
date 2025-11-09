import typia from "typia";
import { DynamicComposite } from "../../../structures/DynamicComposite";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_DynamicComposite = (): void =>
  _test_llm_schema({
    model: "chatgpt",
    name: "DynamicComposite",
  })(typia.llm.schema<DynamicComposite, "chatgpt">({}));