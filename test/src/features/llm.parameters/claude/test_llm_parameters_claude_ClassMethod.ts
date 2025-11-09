import typia from "typia";
import { ClassMethod } from "../../../structures/ClassMethod";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_claude_ClassMethod = (): void =>
  _test_llm_parameters({
    model: "claude",
    name: "ClassMethod",
  })(
    typia.llm.parameters<ClassMethodParameters, "claude">(),
  );

interface ClassMethodParameters {
  regular: ClassMethod;
  nullable: ClassMethod | null;
  optional: ClassMethod | undefined;
  faint: ClassMethod | null | undefined;
  array: Array<ClassMethod>;
}