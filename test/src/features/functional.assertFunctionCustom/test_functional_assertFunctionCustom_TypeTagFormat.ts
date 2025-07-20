import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_functional_assertFunctionCustom_TypeTagFormat = (): void =>
  _test_functional_assertFunction(CustomGuardError)("TypeTagFormat")(
    TypeTagFormat,
  )((p: (input: TypeTagFormat) => TypeTagFormat) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
