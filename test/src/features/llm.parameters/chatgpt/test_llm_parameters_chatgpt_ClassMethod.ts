import typia from "typia";
import { ClassMethod } from "../../../structures/ClassMethod";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_chatgpt_ClassMethod = (): void =>
  _test_llm_parameters({
    model: "chatgpt",
    name: "ClassMethod",
  })(
    typia.llm.parameters<ClassMethodParameters, "chatgpt">(),
  );

interface ClassMethodParameters {
  regular: ClassMethod;
  nullable: ClassMethod | null;
  optional: ClassMethod | undefined;
  faint: ClassMethod | null | undefined;
  array: Array<ClassMethod>;
}