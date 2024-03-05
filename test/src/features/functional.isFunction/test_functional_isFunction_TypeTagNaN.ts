import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_functional_isFunction_TypeTagNaN =
  _test_functional_isFunction("TypeTagNaN")(TypeTagNaN)(
    (p: (input: TypeTagNaN) => TypeTagNaN) => typia.functional.isFunction(p),
  );
