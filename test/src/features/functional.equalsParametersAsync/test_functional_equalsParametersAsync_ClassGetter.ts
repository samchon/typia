import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_functional_equalsParametersAsync_ClassGetter =
  _test_functional_equalsParametersAsync("ClassGetter")(ClassGetter)(
    (p: (input: ClassGetter) => Promise<ClassGetter>) =>
      typia.functional.equalsParameters(p),
  );
