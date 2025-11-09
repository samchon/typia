import typia from "typia";
import { DynamicConstant } from "../../../structures/DynamicConstant";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_DynamicConstant = (): void =>
  _test_llm_schema({
    model: "chatgpt",
    name: "DynamicConstant",
  })(typia.llm.schema<DynamicConstant, "chatgpt">({}));