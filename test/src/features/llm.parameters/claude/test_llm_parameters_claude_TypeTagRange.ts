import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { TypeTagRange } from "../../../structures/TypeTagRange";

export const test_llm_parameters_claude_TypeTagRange = (): void =>
  _test_llm_parameters({
    model: "claude",
    name: "TypeTagRange",
  })(typia.llm.parameters<TypeTagRangeParameters, "claude">());

interface TypeTagRangeParameters {
  regular: TypeTagRange;
  nullable: TypeTagRange | null;
  optional: TypeTagRange | undefined;
  faint: TypeTagRange | null | undefined;
  array: Array<TypeTagRange>;
}
