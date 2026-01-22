import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_functional_assertParameters_TypeTagMatrix = (): void =>
  _test_functional_assertParameters(TypeGuardError)("TypeTagMatrix")(
    TypeTagMatrix,
  )((p: (input: TypeTagMatrix) => TypeTagMatrix) =>
    typia.functional.assertParameters(p),
  );
