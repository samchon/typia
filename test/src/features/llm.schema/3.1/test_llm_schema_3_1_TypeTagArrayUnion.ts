import typia from "typia";
import { TypeTagArrayUnion } from "../../../structures/TypeTagArrayUnion";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_1_TypeTagArrayUnion = (): void =>
  _test_llm_schema({
    model: "3.1",
    name: "TypeTagArrayUnion",
  })(typia.llm.schema<TypeTagArrayUnion, "3.1">({}));