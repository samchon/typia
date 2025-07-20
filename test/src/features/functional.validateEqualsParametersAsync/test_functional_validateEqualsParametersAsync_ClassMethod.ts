import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_functional_validateEqualsParametersAsync_ClassMethod =
  (): Promise<void> =>
    _test_functional_validateEqualsParametersAsync("ClassMethod")(ClassMethod)(
      (p: (input: ClassMethod) => Promise<ClassMethod>) =>
        typia.functional.validateEqualsParameters(p),
    );
