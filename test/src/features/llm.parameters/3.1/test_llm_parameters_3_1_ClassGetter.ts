import typia from "typia";
import { ClassGetter } from "../../../structures/ClassGetter";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_3_1_ClassGetter = (): void =>
  _test_llm_parameters({
    model: "3.1",
    name: "ClassGetter",
  })(
    typia.llm.parameters<ClassGetterParameters, "3.1">(),
  );

interface ClassGetterParameters {
  regular: ClassGetter;
  nullable: ClassGetter | null;
  optional: ClassGetter | undefined;
  faint: ClassGetter | null | undefined;
  array: Array<ClassGetter>;
}