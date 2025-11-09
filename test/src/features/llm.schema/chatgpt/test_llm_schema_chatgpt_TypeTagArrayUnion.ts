import typia from "typia";
import { TypeTagArrayUnion } from "../../../structures/TypeTagArrayUnion";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_TypeTagArrayUnion = (): void =>
  _test_llm_schema({
    model: "chatgpt",
    name: "TypeTagArrayUnion",
  })(typia.llm.schema<TypeTagArrayUnion, "chatgpt">({}));