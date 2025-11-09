import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { TypeTagLength } from "../../../structures/TypeTagLength";

export const test_llm_parameters_3_1_TypeTagLength = (): void =>
  _test_llm_parameters({
    model: "3.1",
    name: "TypeTagLength",
  })(typia.llm.parameters<TypeTagLengthParameters, "3.1">());

interface TypeTagLengthParameters {
  regular: TypeTagLength;
  nullable: TypeTagLength | null;
  optional: TypeTagLength | undefined;
  faint: TypeTagLength | null | undefined;
  array: Array<TypeTagLength>;
}
