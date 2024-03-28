import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_functional_assertEqualsParametersCustom_TypeTagFormat =
  _test_functional_assertEqualsParameters(CustomGuardError)("TypeTagFormat")(
    TypeTagFormat,
  )((p: (input: TypeTagFormat) => TypeTagFormat) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
