import typia from "typia";
import { ClassGetter } from "../../../structures/ClassGetter";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_chatgpt_ClassGetter = (): void =>
  _test_llm_parameters({
    model: "chatgpt",
    name: "ClassGetter",
  })(
    typia.llm.parameters<ClassGetterParameters, "chatgpt">(),
  );

interface ClassGetterParameters {
  regular: ClassGetter;
  nullable: ClassGetter | null;
  optional: ClassGetter | undefined;
  faint: ClassGetter | null | undefined;
  array: Array<ClassGetter>;
}