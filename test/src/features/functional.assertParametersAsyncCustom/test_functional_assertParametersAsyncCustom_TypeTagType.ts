import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_functional_assertParametersAsyncCustom_TypeTagType =
  _test_functional_assertParametersAsync(CustomGuardError)("TypeTagType")(
    TypeTagType,
  )((p: (input: TypeTagType) => Promise<TypeTagType>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
