import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TypeTagArrayUnion } from "../../../structures/TypeTagArrayUnion";

export const test_llm_schema_3_1_TypeTagArrayUnion = _test_llm_schema({
  model: "3.1",
  name: "TypeTagArrayUnion",
})(typia.llm.schema<TypeTagArrayUnion, "3.1">());
