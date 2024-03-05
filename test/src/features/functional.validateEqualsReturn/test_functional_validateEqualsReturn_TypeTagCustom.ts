import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_functional_validateEqualsReturn_TypeTagCustom =
  _test_functional_validateEqualsReturn("TypeTagCustom")(TypeTagCustom)(
    (p: (input: TypeTagCustom) => TypeTagCustom) =>
      typia.functional.validateEqualsReturn(p),
  );
