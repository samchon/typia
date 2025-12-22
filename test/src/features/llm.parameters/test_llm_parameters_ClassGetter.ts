import typia from "typia";

import { _test_llm_parameters } from "../../internal/_test_llm_parameters";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_llm_parameters_ClassGetter = (): void =>
  _test_llm_parameters("ClassGetter")(
    typia.llm.parameters<ClassGetterParameters>(),
  );

interface ClassGetterParameters {
  regular: ClassGetter;
  nullable: ClassGetter | null;
  optional: ClassGetter | undefined;
  faint: ClassGetter | null | undefined;
  array: Array<ClassGetter>;
}
