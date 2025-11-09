import typia from "typia";
import { ClassGetter } from "../../../structures/ClassGetter";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_claude_ClassGetter = (): void =>
  _test_llm_parameters({
    model: "claude",
    name: "ClassGetter",
  })(
    typia.llm.parameters<ClassGetterParameters, "claude">(),
  );

interface ClassGetterParameters {
  regular: ClassGetter;
  nullable: ClassGetter | null;
  optional: ClassGetter | undefined;
  faint: ClassGetter | null | undefined;
  array: Array<ClassGetter>;
}