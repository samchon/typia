import typia from "typia";
import { AtomicUnion } from "../../../structures/AtomicUnion";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_AtomicUnion = (): void =>
  _test_llm_schema({
    model: "chatgpt",
    name: "AtomicUnion",
  })(typia.llm.schema<AtomicUnion, "chatgpt">({}));