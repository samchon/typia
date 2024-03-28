import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_functional_assertReturn_TypeTagArray =
  _test_functional_assertReturn(TypeGuardError)("TypeTagArray")(TypeTagArray)(
    (p: (input: TypeTagArray) => TypeTagArray) =>
      typia.functional.assertReturn(p),
  );
