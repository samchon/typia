import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_functional_assertEqualsReturn_TypeTagMatrix =
  _test_functional_assertEqualsReturn(TypeGuardError)("TypeTagMatrix")(
    TypeTagMatrix,
  )((p: (input: TypeTagMatrix) => TypeTagMatrix) =>
    typia.functional.assertEqualsReturn(p),
  );
