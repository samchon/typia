import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_functional_validateFunction_TypeTagCustom =
  _test_functional_validateFunction("TypeTagCustom")(TypeTagCustom)(
    (p: (input: TypeTagCustom) => TypeTagCustom) =>
      typia.functional.validateFunction(p),
  );
