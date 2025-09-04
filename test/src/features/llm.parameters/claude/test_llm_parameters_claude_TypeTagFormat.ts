import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { TypeTagFormat } from "../../../structures/TypeTagFormat";

export const test_llm_parameters_claude_TypeTagFormat = (): void =>
  _test_llm_parameters({
    model: "claude",
    name: "TypeTagFormat",
  })(typia.llm.parameters<TypeTagFormatParameters, "claude">());

interface TypeTagFormatParameters {
  regular: TypeTagFormat;
  nullable: TypeTagFormat | null;
  optional: TypeTagFormat | undefined;
  faint: TypeTagFormat | null | undefined;
  array: Array<TypeTagFormat>;
}
