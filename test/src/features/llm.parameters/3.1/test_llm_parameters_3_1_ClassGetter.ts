import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ClassGetter } from "../../../structures/ClassGetter";

export const test_llm_parameters_3_1_ClassGetter = _test_llm_parameters({
  model: "3.1",
  name: "ClassGetter",
})(typia.llm.parameters<ClassGetterParameters, "3.1">());

interface ClassGetterParameters {
  regular: ClassGetter;
  nullable: ClassGetter | null;
  optional: ClassGetter | undefined;
  faint: ClassGetter | null | undefined;
  array: Array<ClassGetter>;
}
