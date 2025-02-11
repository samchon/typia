import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_functional_assertReturn_TypeTagBigInt =
  _test_functional_assertReturn(TypeGuardError)("TypeTagBigInt")(TypeTagBigInt)(
    (p: (input: TypeTagBigInt) => TypeTagBigInt) =>
      typia.functional.assertReturn(p),
  );
