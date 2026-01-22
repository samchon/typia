import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_functional_assertReturnCustom_TypeTagMatrix = (): void =>
  _test_functional_assertReturn(CustomGuardError)("TypeTagMatrix")(
    TypeTagMatrix,
  )((p: (input: TypeTagMatrix) => TypeTagMatrix) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
