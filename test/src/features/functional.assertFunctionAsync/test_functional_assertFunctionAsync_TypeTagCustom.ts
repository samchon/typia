import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_functional_assertFunctionAsync_TypeTagCustom =
  _test_functional_assertFunctionAsync(TypeGuardError)("TypeTagCustom")(
    TypeTagCustom,
  )((p: (input: TypeTagCustom) => Promise<TypeTagCustom>) =>
    typia.functional.assertFunction(p),
  );
