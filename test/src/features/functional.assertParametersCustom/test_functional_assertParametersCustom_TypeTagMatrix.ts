import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_functional_assertParametersCustom_TypeTagMatrix = (): void =>
  _test_functional_assertParameters(CustomGuardError)("TypeTagMatrix")(
    TypeTagMatrix,
  )((p: (input: TypeTagMatrix) => TypeTagMatrix) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
