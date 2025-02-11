import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_functional_assertEqualsFunction_TypeTagMatrix =
  _test_functional_assertEqualsFunction(TypeGuardError)("TypeTagMatrix")(
    TypeTagMatrix,
  )((p: (input: TypeTagMatrix) => TypeTagMatrix) =>
    typia.functional.assertEqualsFunction(p),
  );
