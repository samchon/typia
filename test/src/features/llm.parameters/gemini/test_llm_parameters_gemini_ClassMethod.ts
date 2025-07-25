import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_llm_parameters_gemini_ClassMethod = (): void =>
  _test_llm_parameters({
    model: "gemini",
    name: "ClassMethod",
  })(typia.llm.parameters<ClassMethodParameters, "gemini">());

interface ClassMethodParameters {
  regular: ClassMethod;
  nullable: ClassMethod | null;
  optional: ClassMethod | undefined;
  faint: ClassMethod | null | undefined;
  array: Array<ClassMethod>;
}
