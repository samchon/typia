import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_functional_assertParametersAsyncCustom_TypeTagFormat =
  _test_functional_assertParametersAsync(CustomGuardError)("TypeTagFormat")(
    TypeTagFormat,
  )((p: (input: TypeTagFormat) => Promise<TypeTagFormat>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
