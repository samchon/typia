import typia from "typia";

import { _test_llm_parameters } from "../../internal/_test_llm_parameters";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_llm_parameters_ClassMethod = (): void =>
  _test_llm_parameters("ClassMethod")(
    typia.llm.parameters<ClassMethodParameters>(),
  );

interface ClassMethodParameters {
  regular: ClassMethod;
  nullable: ClassMethod | null;
  optional: ClassMethod | undefined;
  faint: ClassMethod | null | undefined;
  array: Array<ClassMethod>;
}
