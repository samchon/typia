import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_functional_isFunction_ClassMethod = (): void =>
  _test_functional_isFunction("ClassMethod")(ClassMethod)(
    (p: (input: ClassMethod) => ClassMethod) => typia.functional.isFunction(p),
  );
