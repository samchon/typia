import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { TypeTagDefault } from "../../../structures/TypeTagDefault";

export const test_llm_parameters_3_1_TypeTagDefault = (): void =>
  _test_llm_parameters({
    model: "3.1",
    name: "TypeTagDefault",
  })(typia.llm.parameters<TypeTagDefaultParameters, "3.1">());

interface TypeTagDefaultParameters {
  regular: TypeTagDefault;
  nullable: TypeTagDefault | null;
  optional: TypeTagDefault | undefined;
  faint: TypeTagDefault | null | undefined;
  array: Array<TypeTagDefault>;
}
