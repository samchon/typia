import typia from "typia";

import { _test_llm_parameters } from "../../internal/_test_llm_parameters";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_llm_parameters_TypeTagArray = (): void =>
  _test_llm_parameters("TypeTagArray")(
    typia.llm.parameters<TypeTagArrayParameters>(),
  );

interface TypeTagArrayParameters {
  regular: TypeTagArray;
  nullable: TypeTagArray | null;
  optional: TypeTagArray | undefined;
  faint: TypeTagArray | null | undefined;
  array: Array<TypeTagArray>;
}
