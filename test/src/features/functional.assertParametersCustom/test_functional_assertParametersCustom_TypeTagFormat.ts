import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_functional_assertParametersCustom_TypeTagFormat =
  _test_functional_assertParameters(CustomGuardError)("TypeTagFormat")(
    TypeTagFormat,
  )((p: (input: TypeTagFormat) => TypeTagFormat) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
