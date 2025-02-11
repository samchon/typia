import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_functional_isFunction_TypeTagCustom =
  _test_functional_isFunction("TypeTagCustom")(TypeTagCustom)(
    (p: (input: TypeTagCustom) => TypeTagCustom) =>
      typia.functional.isFunction(p),
  );
