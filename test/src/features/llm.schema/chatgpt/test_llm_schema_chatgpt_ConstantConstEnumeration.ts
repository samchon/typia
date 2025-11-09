import typia from "typia";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_ConstantConstEnumeration = (): void =>
  _test_llm_schema({
    model: "chatgpt",
    name: "ConstantConstEnumeration",
  })(typia.llm.schema<ConstantConstEnumeration, "chatgpt">({}));