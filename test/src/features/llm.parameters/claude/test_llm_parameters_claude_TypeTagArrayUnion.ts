import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { TypeTagArrayUnion } from "../../../structures/TypeTagArrayUnion";

export const test_llm_parameters_claude_TypeTagArrayUnion =
  _test_llm_parameters({
    model: "claude",
    name: "TypeTagArrayUnion",
  })(typia.llm.parameters<TypeTagArrayUnionParameters, "claude">());

interface TypeTagArrayUnionParameters {
  regular: TypeTagArrayUnion;
  nullable: TypeTagArrayUnion | null;
  optional: TypeTagArrayUnion | undefined;
  faint: TypeTagArrayUnion | null | undefined;
  array: Array<TypeTagArrayUnion>;
}
