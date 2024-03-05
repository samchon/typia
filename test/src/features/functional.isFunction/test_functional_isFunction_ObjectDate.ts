import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_functional_isFunction_ObjectDate =
  _test_functional_isFunction("ObjectDate")(ObjectDate)(
    (p: (input: ObjectDate) => ObjectDate) => typia.functional.isFunction(p),
  );
