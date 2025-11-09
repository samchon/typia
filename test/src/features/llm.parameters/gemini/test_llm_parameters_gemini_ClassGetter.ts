import typia from "typia";
import { ClassGetter } from "../../../structures/ClassGetter";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_gemini_ClassGetter = (): void =>
  _test_llm_parameters({
    model: "gemini",
    name: "ClassGetter",
  })(
    typia.llm.parameters<ClassGetterParameters, "gemini">(),
  );

interface ClassGetterParameters {
  regular: ClassGetter;
  nullable: ClassGetter | null;
  optional: ClassGetter | undefined;
  faint: ClassGetter | null | undefined;
  array: Array<ClassGetter>;
}