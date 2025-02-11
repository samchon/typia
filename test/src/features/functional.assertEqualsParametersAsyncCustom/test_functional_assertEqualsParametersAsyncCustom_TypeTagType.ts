import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_functional_assertEqualsParametersAsyncCustom_TypeTagType =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)("TypeTagType")(
    TypeTagType,
  )((p: (input: TypeTagType) => Promise<TypeTagType>) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
