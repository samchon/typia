import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_functional_isFunction_ObjectTuple =
  _test_functional_isFunction("ObjectTuple")(ObjectTuple)(
    (p: (input: ObjectTuple) => ObjectTuple) => typia.functional.isFunction(p),
  );
