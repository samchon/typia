import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { TypeTagDefault } from "../../../structures/TypeTagDefault";

export const test_llm_parameters_chatgpt_TypeTagDefault = (): void =>
  _test_llm_parameters({
    model: "chatgpt",
    name: "TypeTagDefault",
  })(typia.llm.parameters<TypeTagDefaultParameters, "chatgpt">());

interface TypeTagDefaultParameters {
  regular: TypeTagDefault;
  nullable: TypeTagDefault | null;
  optional: TypeTagDefault | undefined;
  faint: TypeTagDefault | null | undefined;
  array: Array<TypeTagDefault>;
}
