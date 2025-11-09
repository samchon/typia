import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { TypeTagFormat } from "../../../structures/TypeTagFormat";

export const test_llm_parameters_3_0_TypeTagFormat = (): void =>
  _test_llm_parameters({
    model: "3.0",
    name: "TypeTagFormat",
  })(typia.llm.parameters<TypeTagFormatParameters, "3.0">());

interface TypeTagFormatParameters {
  regular: TypeTagFormat;
  nullable: TypeTagFormat | null;
  optional: TypeTagFormat | undefined;
  faint: TypeTagFormat | null | undefined;
  array: Array<TypeTagFormat>;
}
