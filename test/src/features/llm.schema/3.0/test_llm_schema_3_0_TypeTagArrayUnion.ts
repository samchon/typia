import typia from "typia";
import { TypeTagArrayUnion } from "../../../structures/TypeTagArrayUnion";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_0_TypeTagArrayUnion = 
  _test_llm_schema({
    model: "3.0",
    name: "TypeTagArrayUnion",
  })(typia.llm.schema<TypeTagArrayUnion, "3.0">());