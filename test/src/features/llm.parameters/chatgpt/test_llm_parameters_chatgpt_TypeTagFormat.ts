import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { TypeTagFormat } from "../../../structures/TypeTagFormat";

export const test_llm_parameters_chatgpt_TypeTagFormat = (): void =>
  _test_llm_parameters({
    model: "chatgpt",
    name: "TypeTagFormat",
  })(typia.llm.parameters<TypeTagFormatParameters, "chatgpt">());

interface TypeTagFormatParameters {
  regular: TypeTagFormat;
  nullable: TypeTagFormat | null;
  optional: TypeTagFormat | undefined;
  faint: TypeTagFormat | null | undefined;
  array: Array<TypeTagFormat>;
}
