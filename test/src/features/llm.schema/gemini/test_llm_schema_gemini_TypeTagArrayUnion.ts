import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TypeTagArrayUnion } from "../../../structures/TypeTagArrayUnion";

export const test_llm_schema_gemini_TypeTagArrayUnion = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "TypeTagArrayUnion",
  })(typia.llm.schema<TypeTagArrayUnion, "gemini">({}));
