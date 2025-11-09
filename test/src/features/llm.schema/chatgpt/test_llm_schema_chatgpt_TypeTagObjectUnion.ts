import typia from "typia";
import { TypeTagObjectUnion } from "../../../structures/TypeTagObjectUnion";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_TypeTagObjectUnion = (): void =>
  _test_llm_schema({
    model: "chatgpt",
    name: "TypeTagObjectUnion",
  })(typia.llm.schema<TypeTagObjectUnion, "chatgpt">({}));