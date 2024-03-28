import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_functional_assertEqualsFunctionAsync_TypeTagCustom =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)("TypeTagCustom")(
    TypeTagCustom,
  )((p: (input: TypeTagCustom) => Promise<TypeTagCustom>) =>
    typia.functional.assertEqualsFunction(p),
  );
