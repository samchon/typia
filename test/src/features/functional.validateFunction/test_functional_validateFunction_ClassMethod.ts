import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_functional_validateFunction_ClassMethod =
  _test_functional_validateFunction("ClassMethod")(ClassMethod)(
    (p: (input: ClassMethod) => ClassMethod) =>
      typia.functional.validateFunction(p),
  );
