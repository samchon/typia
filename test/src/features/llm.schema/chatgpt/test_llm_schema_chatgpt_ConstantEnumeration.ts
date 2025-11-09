import typia from "typia";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_ConstantEnumeration = (): void =>
  _test_llm_schema({
    model: "chatgpt",
    name: "ConstantEnumeration",
  })(typia.llm.schema<ConstantEnumeration, "chatgpt">({}));