import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_functional_validateEqualsFunction_ClassMethod =
  _test_functional_validateEqualsFunction("ClassMethod")(ClassMethod)(
    (p: (input: ClassMethod) => ClassMethod) =>
      typia.functional.validateEqualsFunction(p),
  );
