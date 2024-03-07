import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_functional_validateEqualsReturnAsync_ClassMethod =
  _test_functional_validateEqualsReturnAsync("ClassMethod")(ClassMethod)(
    (p: (input: ClassMethod) => Promise<ClassMethod>) =>
      typia.functional.validateEqualsReturn(p),
  );
