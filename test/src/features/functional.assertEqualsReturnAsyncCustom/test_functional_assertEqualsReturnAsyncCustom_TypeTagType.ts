import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_functional_assertEqualsReturnAsyncCustom_TypeTagType =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)("TypeTagType")(
    TypeTagType,
  )((p: (input: TypeTagType) => Promise<TypeTagType>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
