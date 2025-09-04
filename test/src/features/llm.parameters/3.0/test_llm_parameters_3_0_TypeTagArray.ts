import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { TypeTagArray } from "../../../structures/TypeTagArray";

export const test_llm_parameters_3_0_TypeTagArray = (): void =>
  _test_llm_parameters({
    model: "3.0",
    name: "TypeTagArray",
  })(typia.llm.parameters<TypeTagArrayParameters, "3.0">());

interface TypeTagArrayParameters {
  regular: TypeTagArray;
  nullable: TypeTagArray | null;
  optional: TypeTagArray | undefined;
  faint: TypeTagArray | null | undefined;
  array: Array<TypeTagArray>;
}
