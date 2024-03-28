import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_functional_assertReturnAsyncCustom_TypeTagType =
  _test_functional_assertReturnAsync(CustomGuardError)("TypeTagType")(
    TypeTagType,
  )((p: (input: TypeTagType) => Promise<TypeTagType>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
