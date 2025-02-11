import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_functional_assertReturnCustom_TypeTagFormat =
  _test_functional_assertReturn(CustomGuardError)("TypeTagFormat")(
    TypeTagFormat,
  )((p: (input: TypeTagFormat) => TypeTagFormat) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
