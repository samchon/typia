import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_functional_validateEqualsParametersAsync_ClassGetter =
  _test_functional_validateEqualsParametersAsync("ClassGetter")(ClassGetter)(
    (p: (input: ClassGetter) => Promise<ClassGetter>) =>
      typia.functional.validateEqualsParameters(p),
  );
