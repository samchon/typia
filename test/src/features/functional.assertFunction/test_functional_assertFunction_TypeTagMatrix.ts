import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_functional_assertFunction_TypeTagMatrix =
  _test_functional_assertFunction(TypeGuardError)("TypeTagMatrix")(
    TypeTagMatrix,
  )((p: (input: TypeTagMatrix) => TypeTagMatrix) =>
    typia.functional.assertFunction(p),
  );
