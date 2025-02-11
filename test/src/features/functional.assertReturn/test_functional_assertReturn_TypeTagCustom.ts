import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_functional_assertReturn_TypeTagCustom =
  _test_functional_assertReturn(TypeGuardError)("TypeTagCustom")(TypeTagCustom)(
    (p: (input: TypeTagCustom) => TypeTagCustom) =>
      typia.functional.assertReturn(p),
  );
