import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ToJsonUnion } from "../../../structures/ToJsonUnion";

export const test_llm_parameters_gemini_ToJsonUnion = (): void =>
  _test_llm_parameters({
    model: "gemini",
    name: "ToJsonUnion",
  })(typia.llm.parameters<ToJsonUnionParameters, "gemini">());

interface ToJsonUnionParameters {
  regular: ToJsonUnion;
  nullable: ToJsonUnion | null;
  optional: ToJsonUnion | undefined;
  faint: ToJsonUnion | null | undefined;
  array: Array<ToJsonUnion>;
}
