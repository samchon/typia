import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_functional_assertEqualsFunctionCustom_TypeTagMatrix =
  (): void =>
    _test_functional_assertEqualsFunction(CustomGuardError)("TypeTagMatrix")(
      TypeTagMatrix,
    )((p: (input: TypeTagMatrix) => TypeTagMatrix) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
    );
