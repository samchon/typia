import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_functional_isFunction_ClassGetter =
  _test_functional_isFunction("ClassGetter")(ClassGetter)(
    (p: (input: ClassGetter) => ClassGetter) => typia.functional.isFunction(p),
  );
