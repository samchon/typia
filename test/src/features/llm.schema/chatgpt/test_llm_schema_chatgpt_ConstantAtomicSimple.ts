import typia from "typia";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_ConstantAtomicSimple = 
  _test_llm_schema({
    model: "chatgpt",
    name: "ConstantAtomicSimple",
  })(typia.llm.schema<ConstantAtomicSimple, "chatgpt">());