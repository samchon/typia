import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { TypeTagArrayUnion } from "../../../structures/TypeTagArrayUnion";

export const test_llm_application_3_0_TypeTagArrayUnion = _test_llm_application(
  {
    model: "3.0",
    name: "TypeTagArrayUnion",
  },
)(typia.llm.application<TypeTagArrayUnionApplication, "3.0">());

interface TypeTagArrayUnionApplication {
  insert(first: TypeTagArrayUnion): Promise<void>;
  reduce(
    first: TypeTagArrayUnion,
    second: TypeTagArrayUnion | null,
  ): Promise<TypeTagArrayUnion>;
  coalesce(
    first: TypeTagArrayUnion | null,
    second: TypeTagArrayUnion | null,
    third?: TypeTagArrayUnion | null,
  ): Promise<TypeTagArrayUnion | null>;
}
