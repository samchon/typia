import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_functional_isFunction_ObjectSimple =
  _test_functional_isFunction("ObjectSimple")(ObjectSimple)(
    (p: (input: ObjectSimple) => ObjectSimple) =>
      typia.functional.isFunction(p),
  );
